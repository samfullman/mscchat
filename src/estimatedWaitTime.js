/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Handles the Estimated Wait Time functionality, keeping it independent of chat.
 */

(function (avayaGlobal, chatLogon, links, chatUI, ewt) {
    'use strict';

    // maximum wait time in seconds, and various status messages.
    var maxWaitTime = 600,
	chatAvailableMsgEwt = 'The chat is available. Your estimated wait time is {0} minutes. Click the "Live Chat" tab to open the chat',
	chatAvailableMsg = 'The chat is available. Click the "Live Chat" tab to open the chat.',
	chatNotAvailableMsg = 'The chat is not currently available. Please try again later',
	noAgentsAvailableMsg = 'No agents are currently available. Please try again later';
            
    // refactoring for test purposes. In production, these can be left unchanged.
    var minAgentCount = 1;
    var minWaitTime = 0;

    // This is the default priority. It ranges from 1 (max) to 10 (min)
    var priority = 5;
    
    // by default, only use one service map.
    var services = {
        "1" : {}
    };

    /**
     * Handle the REST response
     */
    var handleResponse = function () {
        var response = this.response;
        if (this.readyState === 4) {
            if (this.status === 200) {

                // if the response is empty, log an error.
                if (response === '') {
                    avayaGlobal.log.error('EWT: empty response! This may be caused by CORS issues or by blocking JavaScript (e.g. NoScript)');
                    return;
                }

                // use only the first for now. Replace this with the ID you
                // wish to use
                var mapId = '1';
                var json = JSON.parse(response);
				console.log('ewt retrun JSON is: ', json);
                ewt.parseServiceMap(json.serviceMetricsResponseMap, mapId);
            } else {
                if (response === '') {
                    avayaGlobal.log
                            .error('EWT: empty response! This may be caused by CORS issues, the CustomerControllerService not being available, or by blocking JavaScript (e.g. NoScript). Response code: ' + this.status);
                } else {
                    avayaGlobal.log.error('EWT: ' + response);
                }
				if(webChat.settings.initiallyShowChatStatus){
					chatUI.showAlert(chatNotAvailableMsg);
				}

                chatUI.hideChatPanel();
				// Removed till we work out the conflict with MSC Direct - they also have an API call and they conflict
				// $('.bottom_chat_btn').fadeOut(400);
            }
        }
    };
    
    /**
     * Parse the specified service map in the JSON response. Public method to enable unit testing.
     * @param {JSON} responseJson
     * @param {String} serviceId
     */
    ewt.parseServiceMap = function(responseJson, serviceId) {

        var serviceMap = responseJson[serviceId];
        
        // check if the EWT is defined here. We assume that chat is available,
        // unless specifically stated otherwise
        var alertMsg = chatAvailableMsg;
        var chatAvailable = false;
        var metrics = serviceMap.metrics;
        if (metrics !== undefined) {
            var waitTime = parseInt(metrics.EWT);
            var agentCount = parseInt(metrics.ResourceStaffedCount);
            avayaGlobal.log.debug('EWT: wait time is ' + waitTime + '. Maximum wait time is ' + maxWaitTime);
            avayaGlobal.log.debug('EWT: ' + agentCount + ' agents are logged in. Minimum allowed are ' + minAgentCount);

            // if waitTime is less than the maximum and agents are logged in, chat is available. Otherwise, it isn't
            // FYI: if agents are logged in, that doesn't necessarily mean they *can* take a call. They may be busy, or on a break.
            if (waitTime < maxWaitTime && waitTime >= minWaitTime && agentCount >= minAgentCount) {
                var waitTimeInMins = Math.round(waitTime / 60);
                alertMsg = chatAvailableMsgEwt.replace('{0}', waitTimeInMins);
                chatAvailable = true;
				//2019-02-26 SF: this is called below, don't think it needs called here
                chatUI.showChatPanel();
                chatUI.addEwtToChatTab(waitTimeInMins);
            } else {
                if (waitTime > maxWaitTime) {
                    // customise alert messages depending on the circumstances. 
                    alertMsg = chatNotAvailableMsg;
                } else {
                    alertMsg = noAgentsAvailableMsg;
                }
            }
        }

        if (!chatAvailable) {
            chatUI.hideChatPanel();
        } else {
            chatUI.showChatPanel();
        }

        // leave this in for ease of testing
        if(webChat.settings.initiallyShowChatStatus){
			chatUI.showAlert(alertMsg);
		}
    };
    
    /**
     * Converts the chatLogon attributes array into a service map
     * @returns {JSON}
     */
    var createAttributeMap = function (){        
        avayaGlobal.log.debug("EWT: Creating attribute map");
        
        // Channel.Chat is required for Web Chat, so hard-code this in here
        var attributes = {
            'Channel' : [ 'Chat']
        };
        
        var attributesArray = chatLogon.attributes;
        for (var i = 0; i < attributesArray.length; i++) {
            var attr = attributesArray[i];
            var array = attr.split('.'), key = array[0], value = array[1];
            var attrArray;
            
            // Check if the attribute key (e.g. Location) already exists. If not, add it.
            // Otherwise, update the attributes.
            if (Object.keys(attributes).indexOf(key) < 0) {
                attrArray = [value];
                attributes[key] = attrArray;
            } else {
                attrArray = attributes[key];
                if (attrArray.indexOf(value) < 0) {
                    attrArray.push(value);
                }
            }
        }
        
        return attributes;
    };
    
    /**
     * Set the new priority
     * @param {Number} newPriority - must be a valid integer between 1(highest) and 10 (lowest)
     */
    ewt.setPriority = function(newPriority) {
        if (typeof(newPriority) !== 'number' || newPriority < 1 || newPriority > 10) {
            avayaGlobal.log.warn("EWT: Invalid priority! Resetting to default (5)");
            newPriority = 5;
        }
        priority = newPriority;
    };
    
    /**
     * Set the minimum amount of live agents required to consider chat available.
     * Meant for testing purposes.
     * @param {Number} newMin
     */
    ewt.setMinimumAgentCount = function(newMin){
        if (typeof newMin !== 'number') {
            avayaGlobal.log.warn("EWT: Invalid min agent count! Using default (1)");
            newMin = 1;
        }
        minAgentCount = newMin;
    };
    
    /**
     * Set the minimum wait time for testing purposes.
     * @param {Number} newMin
     */
    ewt.setMinWaitTime = function(newMin) {
        if (typeof newMin !== 'number') {
            avayaGlobal.log.warn("EWT: Invalid min wait time! Using default (0)");
            newMin = 0;
        }
        minWaitTime = newMin;
    };
    
    /**
     * Set the maximum wait time.
     * @param {Number} newMax - measured in seconds
     */
    ewt.setMaxWaitTime = function(newMax) {
        if (typeof newMax !== 'number' || newMax < 0) {
            avayaGlobal.log.warn("EWT: Invalid max wait time! Using default (600)");
            newMax = 600;
        }
        maxWaitTime = newMax;
    };
    
    /**
     * Add a new service to the service map
     * @param {ServiceMap} serviceMap - JSON object with attributes and priority.
     * @param {String} id - where in the service this should go. Must be between 1 and 6 (inclusive of both).
     * @returns {undefined}
     */
    ewt.addService = function(serviceMap, id) {
        var idNumber = parseInt (id);
        if (idNumber < 1 || idNumber > 6) {
            avayaGlobal.log.error("EWT: Invalid service map ID! It must be between 1 and 6!");
            return;
        }
        services [id] = serviceMap;
    };
    
    /**
     * Return the current priority.
     * @returns {Number|priority}
     */
    ewt.getPriority = function() {
        return priority;
    };
    
    /**
     * Return the minimum wait time.
     * @returns {Number|minWaitTime}
     */
    ewt.getMinimumWaitTime = function() {
        return minWaitTime;
    };
    
    /**
     * Return the minimum number of agents/
     * @returns {Number|minAgentCount}
     */
    ewt.getMinimumAgentCount = function() {
        return minAgentCount;
    };
    
    /**
     * Get the maximum wait time.
     * @returns {Number|maxWaitTime}
     */
    ewt.getMaxWaitTime = function() {
        return maxWaitTime;
    };

    /**
     * Request EWT.
     */
    ewt.requestEwt = function (callback, forceCheck) {
        var url = links.getEstimatedWaitTimeUrl();
		if(typeof forceCheck === 'undefined') forceCheck = false;
        
        // account for local testing
        if (url.indexOf('localhost') > -1 || url.indexOf("127.0.0.1") > -1) {
            avayaGlobal.log.warn("EWT: Pointing at localhost, so EWT will not be available");
            return;
        }
        
        // no point in requesting EWT if reconnecting
        if (chatConfig.previouslyConnected && !forceCheck) {
			console.log('Reconnecting, no EWT requested');
            return;
        }

        // create the default one
        var attributes = createAttributeMap();
        services["1"].attributes = attributes;
        services["1"].priority = priority;
		console.log('Sending services to ewt with: ', services);

        // send the request
        var request = new XMLHttpRequest();
        request.open('POST', links.getEstimatedWaitTimeUrl());
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('readystatechange', handleResponse);
		// 2019-02-26 SF: add callback if sent
		if(typeof callback === 'function'){
			request.onload = function(response){
				callback(response);
			};
		}
        request.send(JSON.stringify({
            'serviceMap' : services
        }));
    };

    return ewt;

})(window.avayaGlobal, window.chatLogon, window.links, window.chatUI, window.ewt = window.ewt || {});

