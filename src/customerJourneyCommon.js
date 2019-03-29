/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Holds common data for Customer Journey requests.
 */

var customerJourneyCommon = {

    contextId : '',
    customerId : 'DefaultCustomerId',
    
    // the page touchpoint is referred to in Oceana as the "customer journey element".
    // For the sake of backwards compatibility, the name here is not changed.
    pageTouchpoint : 'web',

    /**
     * Work Assignment is limited to 10 attributes per context ID in total. This limit includes the attributes here
     * and those used to log into the chat.
     * Reduce this to match the default chat attributes in webChatLogon.js, e.g. if you have five attributes as defaults
     * in webChatLogon.js, lower this to 5.
     */
    maxAttributes : 10,
    totalAttributes : 0,

    // listeners are any cusomterjourney code here.
    listeners : [],

    /**
     * Set the page touchpoint
     */
    setPageTouchpoint : function(newPageTouchpoint) {
        'use strict';
        customerJourneyCommon.pageTouchpoint = newPageTouchpoint;
    },

    /**
     * Clears the context ID. Resets the total attributes as well.
     */
    clearContextId : function() {
        'use strict';
        customerJourneyCommon.setContextId('');
        avayaGlobal.setSessionStorage('totalAttributes', 0);
    },

    /**
     * Set the context ID.
     * @param newId
     */
    setContextId : function(newId) {
        'use strict';
        customerJourneyCommon.contextId = newId;
        customerJourneyCommon.saveContextId();
    },

    /**
     * Save the context ID to the browser's session storage
     */
    saveContextId : function() {
        'use strict';
        avayaGlobal.log.info('CustomerJourney: Context ID is now ' + customerJourneyCommon.contextId);
        avayaGlobal.setSessionStorage('contextId', customerJourneyCommon.contextId);
    },

    /**
     * Load the contextId.
     * @return contextId from sessionStorage
     */
    loadContextId : function() {
        'use strict';
        var id = avayaGlobal.getSessionStorage('contextId');
        customerJourneyCommon.contextId = id;
        return id;
    },

    setCustomerId : function(id) {
        'use strict';
        customerJourneyCommon.customerId = id;
        avayaGlobal.setSessionStorage('customerId', id);
    },

    loadCustomerId : function() {
        'use strict';
        var custId = avayaGlobal.getSessionStorage('customerId');
        customerJourneyCommon.customerId = custId || customerJourneyCommon.customerId;
    },
    
    clearCustomerId: function(){
        'use strict';
        customerJourneyCommon.setCustomerId('DefaultCustomerId');
    },

    /**
     * Set up the Customer Journey
     */
    setup : function() {
        'use strict';
        avayaGlobal.detectBrowserSupport();
        avayaGlobal.log = avayaGlobal.makeLogger();

        customerJourneyCommon.loadUrlsFromStorage();
        customerJourneyCommon.getTouchpointFromPage();
        customerJourneyCommon.loadCustomerId();
        customerJourneyCommon.addListeners();
        links.setupSecurity();
    },
    
    reset: function(){
        'use strict';
        customerJourneyCommon.clearContextId();
        customerJourneyCommon.clearCustomerId();
    },

    /**
     * Add listeners to the page
     */
    addListeners: function(){
        'use strict';
        var listeners = [];
        if (window.contextStore !== undefined) {
            listeners.push(window.contextStore);
        }
        if (window.oceanaCoreData !== undefined){
            listeners.push(window.oceanaCoreData);
        }
        if (listeners.count === 0){
            avayaGlobal.log.error('CustomerJourney: No customer journey listeners on the page');
        }
        customerJourneyCommon.listeners = listeners;
    },

    /**
     * Returns true if the customer has less than ten attributes.
     */
    canAddAttributes : function() {
        'use strict';
        return (customerJourneyCommon.totalAttributes < customerJourneyCommon.maxAttributes);
    },

    /**
     * Request a customer ID using a particular parameter.
     * @param paramName - name of the parameter e.g. 'email'.
     * @param paramValue - value of the parameter
     */
    requestCustomerId : function(paramName, paramValue) {
        'use strict';
        avayaGlobal.log.debug('CustomerJourney: Requesting Customer ID using parameter ' + paramName);
        var url = links.getCustomerManagementUrl() + '/rest/customers/customerId?' + paramName + '=' + paramValue;
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('readystatechange', customerJourneyCommon.parseCustomerId);
        request.send('');
    },

    /**
     * Parse the customer ID. This will initialise any listeners on the page. 'this' refers the XMLHttpRequest
     * in requestCustomerId().
     */
    parseCustomerId : function() {
        'use strict';
        if (this.readyState === 4) {
            var response = this.response;
            avayaGlobal.log.debug('CustomerJourney: Parsing customer ID');
            var ui = window.contextStoreUI;
            
            // if successful, let the customer know their customer ID.
            if (this.status === 200) {
                var id = JSON.parse(response).customerId;
                customerJourneyCommon.setCustomerId(id);
                ui.setSubscribeStatus('You have subscribed. Your ID is ' + id);
                var listeners = customerJourneyCommon.listeners;
                
                // initialise the context
                for (var i = 0; i < listeners.length; i++){
                    listeners[i].initialise();
                }
                ui.cleanSubscribePanel();
            } else {
                var json = JSON.parse(response);
                avayaGlobal.log.error('CustomerJourney: ' + response);
                var errorString = json.errors[0].type + ': ' + json.errors[0].message;
                ui.setSubscribeStatus(errorString);
            }
        }

    },

    /**
     * Utility function to use the page's location (e.g. products.html) as the touchpoint. This will be called by default.
     * to override this, call `customerJourneyCommon.setPageTouchpoint('foo');`
     */
    getTouchpointFromPage: function(){
        'use strict';
        var fileName = links.getPageName();
        customerJourneyCommon.setPageTouchpoint(fileName);
    },

    /**
     * Utility to load URLs from local storage while testing. Does not set up chat/EWT/CoBrowsing URLs.
     */
    loadUrlsFromStorage: function(){
        'use strict';
        var settings = localStorage.getItem('chatSettings');
        var json = JSON.parse(settings);
        var location = links.getPathNameForConfig();

        if (json !== null){
            var details = json[location];
            var urls = details.urls;
            links.contextStoreHost = urls.contextStoreHost;
            links.secureAllConnections = urls.secureAllConnections;
        }
        
    },
    
    /**
     * Returns the value of the "pageTopic" input. Will remove all spaces or forbidden characters
     * @returns {.document@call;getElementById.value|Element.value}
     */
    getPageTopic: function() {
        'use strict';
		/* Removed for now as it doesn't work as a comment
		*/
		return '';
        return avayaGlobal.getEl("pageTopic").value.replace(/[ #~?@$\s]/g, "");
    }

};