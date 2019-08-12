/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Defines the client end of the WebSocket chat.
 */

var webChat = {
	
	// Presidio build number
	build: '4a',

    // particular elements in the page
    sendButton : null,
    closeButton : null,
    messages : null,
    outMessage : null,

    participants : null,
    users : {},
    chatBotName : '',

    guid : null,
    ak : null,
    webOnHoldComfortGroups : null,
    webOnHoldURLs : null,

    onHoldUrlInterval : null,
    onHoldComfortInterval : null,
    pingInterval : null,

    // isTyping variable currently not used, Planned for future release
    isTyping : false,
    typeOut : null,
    activeAgentTypeOut : null,
    passiveAgentTypeOut : null,
    supervisorTypeOut : null,
    usersTable : null,
    lastIsTypingSent : 0,
    timeBetweenMsgs : 10000,

    initCalled : false,
    autoOpen : false,

    timeouts : [],

    g_email : '',
    g_user : '',
    g_account : '',
    g_phone : '',
    g_country : '',
    
    customFields: [],
    
    // custom data for chatbot
    customData: {},

    workflowType : '',
    routePointIdentifier : 'Default',

    // CoBrowse related.
    coBrowseEnabled : true,
    coBrowseReady : false,
    coBrowseKey : '',
    isPagePushKey : false,
    coBrowseOceanaPath : 'cobrowse-oceana/js/',
    coBrowseSDKPath : 'cobrowse-oceana/js/libs/',
    hideElements : [ 'chatPanelHidden' ],
    
    /**
     * Add a new custom field. Must be unique
     * @param {String} title - must be at most 50 characters, and must not be blank.
     * @param {String} value - must be at most 255 characters.
     */
    addCustomFields: function(title, value) {
        'use strict';
        
        if (avayaGlobal.isStringEmpty(title)) {
            avayaGlobal.log.error("WebChat: Cannot have a custom field with an empty title!");
            return;
        }
        
        /*if (value.length > 255) {
            avayaGlobal.log.error("WebChat: Custom fields must not exceed 255 characters in length!");
            return;
        } */
        
        // required because IE doesn't support the Array.prototype.find() method
        var contained = false;
        for (var i = 0; i < webChat.customFields.length; i++) {
            var field = webChat.customFields[i];
            if (field.title === title) {
                contained = true;
                break;
            }
        }
        if (!contained) {
            webChat.customFields.push({"title" : title, "value" : value});    
        }
    },
    
    clearCustomFields: function() {
        'use strict';
        webChat.customFields = [];
    },
    
    removeCustomField: function(title){
        'use strict';
        var index = -1;
        for (var i = 0; i < webChat.customFields.length; i++) {
            var field = webChat.customFields[i];
           
            if (field.title === title) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            webChat.customFields.splice(index, 1);
        }
    },

    /**
     * Append a specified link to the chat transcript.
     * 
     * @param url
     * @param urlDestination
     * @param openAutomatically -
     *                false for Web-On-Hold URLs, but URLs from an agent may be
     *                changed
     * @param parentElement -
     *                the parent element
     */
    appendLink : function(url, urlDestination, openAutomatically, parentElement) {
        'use strict';
        var link = document.createElement('a');
        link.href = url;
        link.text = url;
        link.target = ('_' + urlDestination);
        parentElement.appendChild(link);

        // Scroll to bottom of the messages div to show new messages
        webChat.messages.scrollTop = webChat.messages.scrollHeight;

        if (openAutomatically) {
            window.open(link);
        }
    },

    /**
     * Log the user into the chat.
     * 
     * @param firstName
     * @param email
     * @param phone
     */
    chatLogin : function(firstName, lastName, email, phone) {

        'use strict';
        var wantsEmail = avayaGlobal.getEl('transcript-chat').checked;
        // Removed as it cannot function as a comment
		// var pageTopic = avayaGlobal.getEl("pageTopic").value;
		var pageTopic = '';
        var leaseTime = chatConfig.leaseTime;
        avayaGlobal.log.debug('WebChat: Chat attributes are ' + JSON.stringify(chatLogon.attributes));

        // if the user didn't specify a valid email address, they can't
        // receive a transcript.
        if (avayaGlobal.isStringEmpty(email)) {
            wantsEmail = false;
        }
        var calledParty = window.location.href;
        var msg;
		avayaGlobal.log.info('webchat: Context ID  == workid ' + avayaGlobal.getSessionStorage('contextId'));

        if (!chatConfig.previouslyConnected) {
			if (webChat.customFields.length > 10){
				var customFieldsMessage = 'The limit of custom fields is 10. These fields were not added:';
				for (var i = 10; i < webChat.customFields.length; i++) {
					customFieldsMessage = customFieldsMessage.concat('\n', webChat.customFields[i].title);
				}
				webChat.customFields.splice(10, webChat.customFields.length-10);
				webChat.writeResponse(customFieldsMessage, chatConfig.writeResponseClassSystem);
			}

            msg = {
                apiVersion : '1.0',
                type : 'request',
                body : {
                    method : 'requestChat',
                    deviceType : navigator.userAgent,
                    routePointIdentifier : webChat.routePointIdentifier,
                    workFlowType : webChat.workflowType,
                    requestTranscript : wantsEmail,
                    workRequestId : avayaGlobal.getSessionStorage('contextId'),
                    calledParty : calledParty,
                    leaseTime : leaseTime,
                    intrinsics : {
                        channelAttribute : 'Chat',
                        attributes : chatLogon.attributes,
                        email : email,
                        name : firstName,
                        lastName : lastName,
                        country : phone.country,
                        area : phone.area,
                        phoneNumber : phone.number,

                        topic : pageTopic,
                        customFields : webChat.customFields
                    },
                    priority : ewt.getPriority(),
                    customData: webChat.customData
                }
            };
			// 2019-04-03 The way separation of concerns were originally coded with this chat client allowed for remnants of the previous chat(s) to remain such as Close Request Sent - this is always the start of the chat so we clear everything else.
			$('#messages').empty();
            webChat.writeMessageBlock('Sending chat request.', chatConfig.writeResponseClassSystem);
        } else {
            msg = {
                'apiVersion' : '1.0',
                'type' : 'request',
                'body' : {
                    'method' : 'renewChat',
                    'guid' : webChat.guid,
                    'authenticationKey' : webChat.ak,
                }
            };
        }

        chatSocket.sendMessage(msg);

        // if the user doesn't have a name, give them a default one.
        // This is specific to the UI - the server will assign a default label
        // when
        // passing messages to the agent.
        if (webChat.g_user === '') {
            webChat.g_user = chatConfig.defaultUsername;
        }

    },

    /**
     * Clears all timeouts on the page.
     */
    clearAllTimeouts : function() {
        'use strict';
        for (var i = 0; i < webChat.timeouts.length; i++) {
            clearTimeout(webChat.timeouts[i]);
        }
    },

    /**
     * Clears the customer's typing timeout.
     * 
     * @param obj
     */
    clearTypingTimeout : function(obj) {
        'use strict';
        if (obj) {
            clearTimeout(obj);
        }
    },

    /**
     * Toggles the controls.
     * 
     * @param isDisabled
     */
    disableControls : function(isDisabled) {
        'use strict';
        webChat.sendButton.disabled = isDisabled;
        webChat.outMessage.disabled = isDisabled;
        if (isDisabled === false) {
            webChat.outMessage.addEventListener('keydown', webChat.onType);
            webChat.sendButton.addEventListener('onclick', webChat.sendChatMessage);
        } else {
            webChat.outMessage.value = '';
            webChat.outMessage.removeEventListener('keydown', webChat.onType);
            webChat.sendButton.removeEventListener('onclick', webChat.sendChatMessage);
        }
    },

    /**
     * Handles notification messages.
     * 
     * @param message
     */
    handleNotification : function(message) { // NOSONAR: too complex
        // for Sonar, but cannot be reduced further
        'use strict';
		var setupRefresh = true;
        var body = message.body, 
			method = message.body.method;
        if (method === chatConfig.jsonMethodRequestChat) {
            webChat.notifyRequestChat(body);
        } else if (method === chatConfig.jsonMethodRouteCancel) {
            webChat.notifyRouteCancel();
        } else if (method === chatConfig.jsonMethodRequestNewParticipant) {
            webChat.notifyNewParticipant(body);
        } else if (method === chatConfig.jsonMethodRequestIsTyping) {
			setupRefresh = false; // don't load the system down
            webChat.notifyIsTyping(body);
        } else if (method === chatConfig.jsonMethodRequestNewMessage) {
			//most common one - notify of new agent message
            webChat.notifyNewMessage(body);
        } else if (method === chatConfig.jsonMethodRequestCloseConversation) {
            webChat.notifyCloseConversation();
        } else if (method === chatConfig.jsonMethodRequestParticipantLeave) {
            webChat.notifyParticipantLeave(body);
        } else if (method === chatConfig.jsonMethodRequestNewPushMessage) {
            webChat.notifyNewPagePushMessage(body);
        } else if (method === chatConfig.jsonMethodRequestNewCoBrowseSessionKeyMessage) {
            webChat.notifyNewCoBrowseSessionKeyMessage(body);
        } else if (method === chatConfig.jsonMethodPing) {
            // do nothing with pings. They just confirm that the WebSocket is open.
			setupRefresh = false;
        } else if (method === chatConfig.jsonMethodFileTransfer) {
            webChat.notifyFileTransfer(body);
        } else {
            throw new TypeError('Received notification with unknown method: '.concat(method));
			return false;
        }
		if(setupRefresh){
			avayaGlobal.log.info('refresh placed (incoming) from ' + method);
			chatSocket.setupRefresh();
		}
    },

    /**
     * Initialise the chat.
     * @param {Boolean} disableControls - defines whether or not to disable the controls. If true, the user will not be able to type a message
     */
    initChat : function(disableControls, firstName, lastName, email, phoneCountry, phoneArea, phoneNumber) {
        'use strict';

        // if the chat has already opened, don't bother opening it
        if (webChat.initCalled) {
            return;
        }
        
        if (disableControls === undefined) {
            disableControls = true;
        }

        webChat.g_user = firstName;
        webChat.g_user_last = lastName;
        webChat.g_email = email;
        webChat.g_phone = {
            "country" : phoneCountry,
            "area" : phoneArea,
            "number" : phoneNumber
        };

        // this is sometimes undefined at this point.
        if (webChat.outMessage === undefined) {
            webChat.outMessage = avayaGlobal.getEl('outmessage');
        }

        webChat.disableControls(disableControls);
        chatSocket.openSocket();
        webChat.initCalled = true;
    },

    /**
     * Notify the user that the chat is closed.
     * 
     * @param body
     */
    notifyCloseConversation : function() {
        'use strict';
        // Server will close the websocket
        chatSocket.manualClose = false;
        chatConfig.dontRetryConnection = true;
        avayaGlobal.clearSessionStorage();
    },

    /**
     * Reset the chat.
     */
    resetChat : function() {
        'use strict';
        avayaGlobal.log.info('WebChat: Resetting chat');
        avayaGlobal.detachChildren(webChat.messages);
		// 2019-03-26 SF: attributes need to be cleared or a second chat before page load will result in multiple attributes
		chatLogon.clearAttributes();
        chatUI.resetChatUI();
        webChat.updateUsers();
        webChat.clearAllTimeouts();
        webChat.outMessage.textContent = '';
        webChat.ak = null;
        webChat.guid = null;
        webChat.lastIsTypingSent = 0;
        chatSocket.resetWebSocket();
        chatConfig.dontRetryConnection = false;
    },

    /**
     * Notify the user that an agent's typing status has changed.
     * 
     * @param body
     */
    notifyIsTyping : function(body) {
        'use strict';
        var isTyping = body.isTyping;

        if (isTyping === true) {
            var agent = webChat.users[body.agentId];
            agent.isTyping = isTyping;
            webChat.updateTypingCell(agent, true);

            var agentTypeOut;
            if (agent.type === 'active_participant') {
                agentTypeOut = chatConfig.activeAgentTypeOut;
            } else if (agent.type === 'passive_participant') {
                agentTypeOut = chatConfig.passiveAgentTypeOut;
            } else {
                agentTypeOut = chatConfig.supervisorTypeOut;
            }

            if (agentTypeOut !== undefined) {
                webChat.clearTypingTimer(agentTypeOut);
            }

            agentTypeOut = setTimeout(function() {
                if (webChat.users !== undefined) {
                    agent.isTyping = false;
                    webChat.updateTypingCell(agent, false);
                }
            }, chatConfig.agentTypingTimeout);
            webChat.timeouts.push(agentTypeOut);
        }
    },
	
	writeMessageBlock : function(body, chatMessageClass, settings){
		'use strict';
		settings = settings || {};
		if(typeof body === 'string'){
			//for versatility convert string message to object
			body = {
				message: body,
				displayName: (settings.displayName ? settings.displayName : 'System'),
				timestamp: (new Date()).getTime()
			}
		}
		//parse date
		var ampm = 'AM', date = new Date(body.timestamp), dateStr = '';
		var hours = parseInt(date.getHours());
		var minutes = date.getMinutes().toString();
		if(hours > 12){
			ampm = 'PM';
			hours -= 12;
		}
		dateStr = hours + ':' + (minutes.length === 1 ? '0' : '') + minutes + ' ' + ampm;

		//todo this needs to go into settings
		var channelUrl = 'mscdirect.com';
		var widget, widgets = [], widgetStr = '';
		var i, a = body.message.split(/(\s)+/), newtab;
		var href, span = document.createElement('span');
		for(i in a){
			//first handle any recognized URLs
			if(a[i].match(/^((www\.[-a-z0-9]+)|(http:\/\/)|(https:\/\/))/)){
				//note we assume that www's go to http vs. https
				//a good website will handle insecure redirects, but a non-existent cert would cause a failure
				//we want to remain in-tab for MSC Direct URLs
				href = document.createElement('a');
				if(!a[i].toLowerCase().match(channelUrl)) href.target = '_blank';
				href.href = (a[i].match(/^www/) ? 'http://' : '') + a[i];
				href.appendChild(document.createTextNode(a[i]));
				span.appendChild(href);
				
				/*
				newtab =  ? '' : 'target="_blank"';
				a[i] = '<a ' + newtab + ' href="' + (a[i].match(/^www/) ? 'http://' : '') + a[i] + '">' + a[i] + '</a>';
				*/
			/* not used..
			}else if(widget = webChat.widgetKeyword(a[i])){
				widgets.push([
					widget,
					a[i]
				]);
			*/
			}else{
				//2019-03-23: all other HTML is escaped; alas we'd like the agent to be able to send bold or underlined text but we're not ready for this yet
				//a[i] = htmlEntities(a[i]);
				span.appendChild(document.createTextNode(a[i]));
			}
			span.appendChild(document.createTextNode(' '));
		}
		// body.message = a.join(' ');

		var presavMessageWrap = document.createElement('div');
		presavMessageWrap.setAttribute('class', 'presav-message-wrap' + (chatMessageClass ? ' ' + chatMessageClass : ''));
		var presavTimestamp = document.createElement('div');
		presavTimestamp.setAttribute('class', 'presav-timestamp');
		presavTimestamp.setAttribute('data-timestamp', htmlEntities(body.timestamp));
		presavTimestamp.append(document.createTextNode(dateStr));
		presavMessageWrap.appendChild(presavTimestamp);
		var presavMessager = document.createElement('div');
		presavMessager.setAttribute('class', 'presav-messager');
		presavMessager.appendChild(document.createTextNode(htmlEntities(body.displayName ? body.displayName : 'Agent')));
		presavMessageWrap.appendChild(presavMessager);
		var presavMessage = document.createElement('div');
		presavMessage.setAttribute('class', 'presav-message');
		presavMessageWrap.appendChild(span);
		
		webChat.messages.appendChild(presavMessageWrap);
		webChat.messages.scrollTop = webChat.messages.scrollHeight;
		
		/*
		for(i in widgets){
			widgetStr += widgets[i][0](widgets[i][1])
		}
		var message = '<div class="presav-message-wrap ' + (chatMessageClass ? chatMessageClass : '') + '">' +
			'<div class="presav-timestamp" data-timestamp="' + body.timestamp + '">' + dateStr + '</div>' +
			'<div class="presav-messager">' + (body.displayName ? body.displayName : 'Agent') + '</div>' +
			'<div class="presav-message">' + body.message +
			(widgetStr ? '<span class="presav-widgets">' : '') +
				widgetStr +
			(widgetStr ? '</span>' : '') +
			'</div>' +
			'</div>';
		var chat = webChat.messages.innerHTML;
		webChat.messages.innerHTML = chat + message;
		*/
	},

    /**
     * Notify the user of a new chat message.
     * 
     * @param body
     */
    notifyNewMessage : function(body) {
        'use strict';
		var chatMessageClass;
		// this method notifyNewMessage() is now only for widgets
		if(body.type !== 'widget'){
			if(body.displayName === webChat.chatBotName){
				chatMessageClass = chatConfig.writeResponseClassChatbot;
			}else{
				chatMessageClass = chatConfig.writeResponseClassResponse;
			}
			webChat.writeMessageBlock(body, chatMessageClass);
			return;
		}
		
        var date = new Date(body.timestamp);
        var dateMessage = body.displayName + ' (' + date.toLocaleTimeString() + ')';
        webChat.writeResponse(dateMessage, chatConfig.writeResponseClassAgentDate);

        // get the chat message class. If it's a chatbot, use the chatbot class instead of the agent class.
        if (body.displayName === webChat.chatBotName) {
            chatMessageClass = chatConfig.writeResponseClassChatbot;
        }else{
			chatMessageClass = chatConfig.writeResponseClassResponse;
		}
		
		webChat.writeResponse(body.data.text, chatMessageClass);
		webChat.createWidgets(body.data);
    },

    /**
     * Notify the user of a new page push message
     * 
     * @param body
     */
    notifyNewPagePushMessage : function(body) {
        'use strict';
        var sentDate = new Date(body.timestamp), url = body.pagePushURL, name = body.displayName;

        // Check for Co-Browse enabled.
        var sessionKey = avayaGlobal.getParameterByName('key', body.pagePushURL);
        var dateMessage;

        if (sessionKey !== null) {
            avayaGlobal.log.debug('WebChat/CoBrowse: Recieved Co-Browse page push request for session ' + sessionKey +
                    '.');
            webChat.coBrowseKey = sessionKey;
            webChat.isPagePushKey = true;

            // show the Co-Browsing notification
            dateMessage = 'System: (' + sentDate.toLocaleTimeString() + ')';
            webChat.writeResponse(dateMessage, chatConfig.writeResponseClassSystem);
            webChat.writeResponse('Co-Browsing session initiated', chatConfig.writeResponseClassSystem);
        } else {
            // show the Page-Push notification
            dateMessage = name + ' (' + sentDate.toLocaleTimeString() + ')';
            webChat.writeResponse(dateMessage, chatConfig.writeResponseClassAgentDate);
            webChat.writeResponse('Agent sent the following link: ' + url, chatConfig.writeResponseClassSystem);
        }
    },

    postCoBrowseDialogCleanUp : function() {
        'use strict';

        var iFramedCoBrowse = contentWindow.coBrowse;
        var iFramedCoBrowseUI = contentWindow.coBrowseUI;

        if (iFramedCoBrowse && iFramedCoBrowseUI) {

            iFramedCoBrowseUI.closeHangingDialogs();

        } else {
            coBrowseUI.closeHangingDialogs();
        }

    },

    /**
     * Notify the user of a new co-browse session key message
     * 
     * @param body
     */
    notifyNewCoBrowseSessionKeyMessage : function(body) {
        'use strict';
        webChat.postCoBrowseDialogCleanUp();
        // TODO: check format of the key.
        var coBrowseKey = body.sessionKey;

        // makes sure that i-frame is closed before key-push load
        webChat.cleanUpPagePushCoBrowse();

	// show the Co-Browsing notification
	webChat.writeResponse('Co-Browsing session initiated', chatConfig.writeResponseClassSystem);
		
        webChat.joinKeyPushCoBrowse(coBrowseKey);
    },

    /**
     * Notify the user that an agent has joined the chat.
     * 
     * @param body
     */
    notifyNewParticipant : function(body) {
        'use strict';

        var id = body.agentId;
        var role = body.role;

        // assign chatbot name here. The UI will then use whatever name was assigned in AutomationController.
        if (id === 'AvayaAutomatedResource') {
            webChat.chatBotName = body.displayName;
        }

        // check if notifications are allowed/required
        var announceBot = (id === 'AvayaAutomatedResource' && !chatConfig.suppressChatbotPresence);
        var announceObserve = (role === 'supervisor_observe' && chatConfig.notifyOfObserve);
        var announceBarge = (role === 'supervisor_barge' && chatConfig.notifyOfBarge);

        // if notifications are allowed/required, display them
        if (announceBot || announceObserve || announceBarge || role === 'active_participant') {
            webChat.writeMessageBlock('An agent has joined the chat', chatConfig.writeResponseClassSystem);
        }
        var agents = body.participants;
        webChat.updateUsers(agents);
        webChat.stopOnHoldMessages();
        webChat.disableControls(false);
    },

    /**
     * Notify the user that an agent has left the chat.
     * 
     * @param body
     */
    notifyParticipantLeave : function(body) {
        'use strict';

        var id = body.agentId;
        var agents = body.participants;
        
        // workaround to make sure Chrome closes on a two-node cluster
        if (body.endChatFlag) {
            chatConfig.dontRetryConnection = true;
        }

        // check if this user is actually present in the users to avoid multiple displays of "An agent has left".
        // This does not affect the chatbot.
        var isAgentContained = false;
        for (var i = 0; i < agents.length; i++) {
            if (agents[i].id === id) {
                isAgentContained = true;
                break;
            }
        }
        
        var leaveReason = body.leaveReason.toLowerCase();
        avayaGlobal.log.info(leaveReason);

        // check if this is the chatbot, and if it is to be suppressed.
        var suppressBot = (leaveReason === 'escalate' && chatConfig.suppressChatbotPresence);

        // if there are no users, check if this is a transfer.
        if (Object.keys(body.participants).length === 0) {
            avayaGlobal.log.info('WebChat: Only the customer remains in the room.');
            webChat.disableControls(true);
            webChat.startOnHoldMessages();

            
            if (leaveReason === 'transfer') {
                webChat.writeResponse(chatConfig.transferNotificationText, chatConfig.writeResponseClassSystem);
            } else if (leaveReason === 'escalate' && !chatConfig.suppressChatbotPresence) {
                webChat.writeResponse(chatConfig.chatbotTransferNotification, chatConfig.writeResponseClassSystem);
            } else {
                webChat.writeResponse('An agent has left the chat', chatConfig.writeResponseClassSystem);
            }

        } else {
            // Let the user know that an agent has left, unless it's the chatbot and chatbot notifications are suppressed.
            if (!suppressBot && isAgentContained) {
                webChat.writeResponse('An agent has left the chat', chatConfig.writeResponseClassSystem);
            }
        }

        webChat.updateUsers(agents);
    },

    /**
     * Notifies the user that they have entered the chat.
     * 
     * @param body
     */
    notifyRequestChat : function(body) {
        'use strict';

        webChat.guid = body.guid;
        webChat.g_user = body.intrinsics.name;
        webChat.ak = body.authenticationKey;
        
        var wrid = body.workRequestId;
        avayaGlobal.log.info("WebChat: workRequestId is " + wrid + ", contactUUID/chatroom key is " + webChat.ak);

        if (chatSocket.retries > 0) {
            chatSocket.resetConnectionAttempts();
        }

        // Send up the Co-Browse status of this page.
        var coBrowseEnabled = typeof coBrowse !== 'undefined' && webChat.coBrowseEnabled;
        webChat.sendCoBrowseStatus(coBrowseEnabled);

        // if the customer has already been connected, don't play the on
        // hold messages
        if (!chatConfig.previouslyConnected) {
            webChat.writeMessageBlock('Chat request approved.  Please wait while we connect you with the next available associate.', chatConfig.writeResponseClassSystem);
            chatConfig.previouslyConnected = true;
            
            if (!body.isEmailValid) {
                webChat.writeResponse('There are invalid characters in your email address. You will not be able to receive a transcript', chatConfig.writeResponseClassSystem);
                webChat.g_email = '';
            }
            
            webChat.webOnHoldComfortGroups = body.webOnHoldComfortGroups[0];
            webChat.webOnHoldURLs = body.webOnHoldURLs[0];
            webChat.startOnHoldMessages();
        } else {
            //webChat.writeResponse('Successfully reconnected', chatConfig.writeResponseClassSystem);
			webChat.messages.scrollTop = webChat.messages.scrollHeight;
        }
    },

    /**
     * Notifies the user that no agent could be found to route the chat to.
     */
    notifyRouteCancel : function() {
        'use strict';
        webChat.writeResponse('No suitable agents could be found', chatConfig.writeResponseClassSystem);
        chatConfig.dontRetryConnection = true;
    },

    /**
     * Notifies the user of a new file transfer.
     */
    notifyFileTransfer : function(body) {
        'use strict';
        avayaGlobal.log.info('WebChat: Notifying of file transfer');
		var agentname = body.agentName;
        var url = body.address;	//tmpUrl
        var filename = body.name;
        var timestamp = new Date().toLocaleString();
        var message = chatConfig.fileTransferMessageText;
		
		url = webChat.replaceFileTransferHost(url);
		message = message.replace('{0}', agentname);
        message = message.replace('{1}', filename);
        message = message.replace('{2}', timestamp);
        message = message.replace('{3}', url);
		
		webChat.writeMessageBlock(message, chatConfig.writeResponseClassResponse);
        // webChat.writeResponse(message, chatConfig.writeResponseClassResponse);
    },

    /**
     * Replace the hostname in the file transfer URL. This will allow it to be passed through a proxy.
     */
    replaceFileTransferHost : function(url) {
        'use strict';
        var ocpHost = links.webChatHost;
        url = url.replace(/:\/\/[^\/]+/, '://' + ocpHost);
        return url;
    },

    /**
     * Notifies the user that a video or voice chat is being opened.
     * 
     * @param body
     */
    notifyVideoOrVoice : function(body) {
        'use strict';
        avayaGlobal.log.debug('WebChat: ' + body);
    },

    /**
     * Called when the customer starts typing.
     * 
     * @param event
     */
    onType : function(event) {
        'use strict';
        if (event.keyCode === 13) {
            webChat.sendChatMessage();
        } else {
            webChat.startTypingTimer();
        }
    },

    /**
     * Play the Web-On-Hold messages inside a specific array.
     * 
     * @param array
     *                of Web-On-Hold comfort messages or URLs.
     */
    playOnHoldMessage : function(array) {
        'use strict';
        var currentMsg;

        // if this has a urls array, it's a WebOnHold URL
        // otherwise, it's a comfort message
        if (array.urls !== undefined) {
            currentMsg = array.urls[array.currentSequence];
            var msgText = array.description + ': ' + currentMsg.url;
            webChat.writeResponse(msgText, chatConfig.writeResponseClassSystem);

        } else {
            currentMsg = array.messages[array.currentSequence];
            webChat.writeResponse(currentMsg.message, chatConfig.writeResponseClassSystem);
        }

        array.currentSequence++;
        if ((array.numberOfMessages !== undefined && array.currentSequence >= array.numberOfMessages) ||
                (array.urls !== undefined && array.currentSequence >= array.urls.length)) {
            array.currentSequence = 0;
        }

    },

    /**
     * Sends a close chat request to the server.
     */
    quitChat : function() {
        'use strict';
        // Prevent reconnect attempts if customer clicks 'Close' while chat is
        // reconnecting
        chatConfig.dontRetryConnection = true;
        chatSocket.manualClose = true;
        webChat.clearAllTimeouts();
        if (webSocket !== null && webSocket.readyState === webSocket.OPEN) {
			avayaGlobal.log.info('Original logic block for calling close');
        }else{
			avayaGlobal.log.info('Criteria for close not met! Calling anyway');
		}
		var closeRequest = {
			apiVersion : '1.0',
			type : 'request',
			body : {
				method : 'closeConversation'
			}
		};
		
		// 2019-04-03 SF - note that session remnants of this can be in the #messages div or session storage
		webChat.writeResponse('Close request sent', chatConfig.writeResponseClassSent);
		chatSocket.sendMessage(closeRequest);
    },

    /**
     * Sends a chat message to the server. If the message box is empty, nothing
     * is sent.
     */
    sendChatMessage : function(message) {
        'use strict';
        var message = message || webChat.outMessage.value;

        if (avayaGlobal.isStringEmpty(message)) return;
		
		/* Note that the writing the block, sending, and storing for refresh are disjointed and should be related by verification */
		
		//write message block locally
		webChat.writeMessageBlock({
			timestamp: (new Date()).getTime(),
			displayName: webChat.g_user,
			message: message
		}, chatConfig.writeResponseClassSent);

		//send message
		webChat.outMessage.value = '';
		chatSocket.sendMessage({
			apiVersion : '1.0',
			type : 'request',
			body : {
				method : 'newMessage',
				message : message,
				type: 'text',
				data: {
					message: message
				},
				customData: webChat.customData
			}
		});
		
		//setup refresh
		avayaGlobal.log.info('refresh placed (outgoing)');
		chatSocket.setupRefresh();
    },
	
    /**
     * Sends a widget response to the server. If the message box is empty, nothing
     * is sent.
     */
    sendWidgetMessage: function () {
        'use strict';

        var timestamp = new Date().toLocaleTimeString();
        var dateMessage = webChat.g_user + ' (' + timestamp + ')';
        webChat.writeResponse(dateMessage, chatConfig.writeResponseClassDate);
        webChat.writeResponse(this.getAttribute('value'), chatConfig.writeResponseClassSent);

        var message = {
            'apiVersion': '1.0',
            'type': 'request',
            'body': {
                'method': 'newMessage',
                'message': this.getAttribute('value'),
                'type': 'customResponse',
                'data': {
                    "message": this.getAttribute('value'),
                    "correlationId": this.getAttribute('data-correlationId')
                },
                'customData': webChat.customData
            }
        };
		
        chatSocket.sendMessage(message);

    },

    /**
     * Lets the agents know that the customer is typing.
     * 
     * @param isUserTyping
     */
    sendIsTyping : function(isUserTyping) {
        'use strict';
        var isTypingMessage = {
            'apiVersion' : '1.0',
            'type' : 'request',
            'body' : {
                'method' : 'isTyping',
                'isTyping' : isUserTyping
            }
        };

        // update lastisTypingSent timestamp
        webChat.lastIsTypingSent = Date.now();

        chatSocket.sendMessage(isTypingMessage);
    },

    /**
     * Lets the agent know if the customer's client is enabled for Co-Browse.
     * 
     * @param isEnabled
     */
    sendCoBrowseStatus : function(isEnabled) {
        'use strict';
        var coBrowseStatusMessage = {
            'apiVersion' : '1.0',
            'type' : 'request',
            'body' : {
                'method' : 'coBrowseStatus',
                'isEnabled' : isEnabled
            }
        };

        chatSocket.sendMessage(coBrowseStatusMessage);
    },

    /**
     * Ping the WebSocket to see if it is still open on both ends. JavaScript
     * doesn't have an API for this, so this is a workaround.
     */
    sendPing : function() {
        'use strict';
        var ping = {
            'apiVersion' : '1.0',
            'type' : 'request',
            'body' : {
                'method' : 'ping'
            }
        };
        chatSocket.sendMessage(ping);
    },

    /**
     * Start playing the on hold messages, if either the messages or the URLs
     * are defined. The intervals are defined in the OCP Admin.
     */
    startOnHoldMessages : function() {
        'use strict';
        avayaGlobal.log.info('WebChat: Starting the On Hold messages');
        var onHoldUrlsDefined = (webChat.webOnHoldURLs.urls.length > 0);
        var onHoldMessagesDefined = (webChat.webOnHoldComfortGroups.messages.length > 0);

        if (!onHoldMessagesDefined && !onHoldUrlsDefined) {
            avayaGlobal.log.warn('WebChat: On Hold messages are not defined!');
        }

        if (onHoldMessagesDefined) {
            // sort the WebOnHoldComfortGroups according to sequence
            var newMessages = webChat.webOnHoldComfortGroups.messages.sort(function(a, b) {
                return (a.sequence - b.sequence);
            });
            webChat.webOnHoldComfortGroups.messages = newMessages;
            webChat.webOnHoldComfortGroups.currentSequence = 0;

            webChat.onHoldComfortInterval = setInterval(function() {
                webChat.playOnHoldMessage(webChat.webOnHoldComfortGroups);
            }, webChat.webOnHoldComfortGroups.delay * 1000);
            webChat.timeouts.push(webChat.onHoldComfortInterval);
        }

        if (onHoldUrlsDefined) {
            webChat.webOnHoldURLs.currentSequence = 0;

            webChat.onHoldUrlInterval = setInterval(function() {
                webChat.playOnHoldMessage(webChat.webOnHoldURLs);
            }, webChat.webOnHoldURLs.holdTime * 1000);
            webChat.timeouts.push(webChat.onHoldUrlInterval);
        }

    },

    stopOnHoldMessages : function() {
        'use strict';
        avayaGlobal.log.info('Web On Hold: Stopping messages');
        clearInterval(webChat.onHoldUrlInterval);
        clearInterval(webChat.onHoldComfortInterval);
    },

    /**
     * Start the customer's typing timer.
     */
    startTypingTimer : function() {
        'use strict';
        var isTypingTimer = Date.now();
        var timerExpiryTime = webChat.lastIsTypingSent + webChat.timeBetweenMsgs;

        if (isTypingTimer >= timerExpiryTime) {
            webChat.sendIsTyping(true);
        }

    },

    /**
     * Update the typing image for a specific agent.
     * 
     * @param agent
     * @param isTyping
     */
    updateTypingCell : function(agent, isTyping) {
        'use strict';
        var image = agent.image;
        if (agent.agentType === 'active_participant' || agent.agentType === 'passive_participant') {
            image.src = this.cdnLocation + (isTyping ? chatConfig.agentTypingImage : chatConfig.agentImage);
        } else {
            image.src = this.cdnLocation + (isTyping ? chatConfig.supervisorTypingImage : chatConfig.supervisorImage);
        }

        image.nextSibling.textContent = (isTyping ? agent.name.concat(' is typing') : agent.name);
    },

    /**
     * Update the users section when an agent leaves or joins.
     * 
     * @param agents
     */
    updateUsers : function(agents) {
        'use strict';
        webChat.users = {};

        // hide the children immediately, and then reshow them
        for (var x = 0; x < webChat.participants.children.length; x++) {
            var child = webChat.participants.children[x], image = child.getElementsByTagName('img')[0];
            child.className = 'hidden';
            image.className = 'hidden';
            image.src = '';
            // clear the TextNode after this - i.e. removes the text
            // after the image
            image.nextSibling.textContent = '';
        }

        if (agents !== undefined) {
            for (var i = 0; i < agents.length; i++) {
                var agent = agents[i];
                avayaGlobal.log.debug('WebChat: Adding agent with id ' + agent.id + ' and name ' + agent.name);

                var div = webChat.participants.children[i];
                div.className = 'user';
                // find the first image in the div
                var typingImage = div.getElementsByTagName('img')[0];
                typingImage.src = this.cdnLocation + ((agent.type === 'supervisor_barge') ? chatConfig.supervisorImage
                        : chatConfig.agentImage);
                typingImage.className = '';

                // should be the first TextNode in the div after the
                // image which enters it into the div just after the image
                typingImage.nextSibling.textContent = agent.name;

                webChat.users[agent.id] = {
                    name : agent.name,
                    isTyping : false,
                    agentType : agent.type,
                    image : typingImage
                };
            }
        }
    },

    /**
     * split text string on white-space and add white-space
     * after each entry to maintain message structure
     * 
     * 
     * @param text
     */
    splitText : function(text) {
        'use strict';
        var textArray = text.split(" ");
        var output = [];
        for (var i = 0; i < textArray.length; i++) {
            output.push(textArray[i]);
            output.push(" ");
        }

        return output;

    },

    /**
     * Writes the specified text out to the transcript box and includes an
     * autoscroll mechanism.
	 * NOTE: this function is too ingrained in the coding to make a complete change without a lot of work.  It's inadequate for writing rich blocks of request/response as it only writes a line of text and adds a class to it.  There is no container (any sense of a parent wrapper) and no way to add multiple elements.
     * 
     * @param text
     * @param msgClass
     */
    writeResponse : function(text, msgClass) {
        'use strict';
				
        var paragraph = document.createElement('p');
        paragraph.className = msgClass;

        // get message split by white-space
        var textArray = webChat.splitText(text);

        // append each element of the message as a string or a link
        for (var i = 0; i < textArray.length; i++) {

            var span = document.createElement('span');
            // check that URLs have at least one character in the path else display as text
            // have to use "indexOf === 0", as IE does not support the startsWith method
            if ((textArray[i].indexOf("http://") === 0 && textArray[i].length > 7) ||
                    (textArray[i].indexOf("https://") === 0 && textArray[i].length > 8)) {

                webChat.appendLink(textArray[i], 'blank', false, span);
            }
            //if http(s) appears without a qualifying '://', it will be displayed as normal text
            else {
                span.textContent = textArray[i];
            }

            paragraph.appendChild(span);
        }
        webChat.messages.appendChild(paragraph);
        webChat.messages.scrollTop = webChat.messages.scrollHeight;

    },
	
	writeHtmlResponse : function(html, settings){
		$(webChat.messages).append(html);
		webChat.messages.scrollTop = webChat.messages.scrollHeight;
		return;
	},
	
    /* This function is used to plot widgets */
    createWidgets: function (data) {
	'use strict';
        var type = data.widgetType.split('|');

        if (type[0].toLowerCase() === (widgetConfig.selector).toLowerCase()) {
            webChat.createSelectorElement(data, type[1]);
        }
        else if (type[0].toLowerCase() === (widgetConfig.click).toLowerCase()) {
            webChat.createClickElement(data, type[1]);
        }
        else {
            avayaGlobal.log.warn("This type of widget (" + type + ") is not supported");
        }

    },
    
    createSelectorElement: function (data, type) {
        'use strict';
        var divElement = document.createElement('div');
        divElement.className = chatConfig.writeResponseClassResponse;

        if (type.toLowerCase() === (widgetConfig.radio).toLowerCase()) {
            webChat.createRadioElement(data, divElement);
        }

        divElement.append(document.createElement("br"));
        webChat.messages.appendChild(divElement);
        webChat.messages.scrollTop = webChat.messages.scrollHeight;
    },
    
    createClickElement: function (data, type) {
        'use strict';
        var divElement = document.createElement('div');
        divElement.className = chatConfig.writeResponseClassResponse;

        if (type.toLowerCase() === (widgetConfig.button).toLowerCase()) {
            webChat.createButtonElement(data, divElement);
        }

        divElement.append(document.createElement("br"));
        webChat.messages.appendChild(divElement);
        webChat.messages.scrollTop = webChat.messages.scrollHeight;

    },
    
    createRadioElement: function (data, divElement) {
        'use strict';
        for (var item in data.selectItems ) {
            var radioInput = document.createElement("label");
            var radioElement = document.createElement("input");
            radioElement.type = "radio";
            radioElement.value = data.selectItems[item].product;
            radioElement.id =data.selectItems[item].id;
            radioElement.name = data.selectorType;
            radioElement.setAttribute("data-correlationId", data.correlationId);
            radioElement.addEventListener('click', webChat.sendWidgetMessage);
            radioInput.append(radioElement);
            divElement.append(radioInput);
            var spanElement = document.createElement('span');
            var textElement = document.createTextNode(data.selectItems[item].product);
            spanElement.append(textElement);
            spanElement.setAttribute("class", "radio-widget");

            divElement.append(spanElement);
            divElement.append(document.createElement("br"));
        }

    },
    
    createButtonElement: function (data, divElement) {
        'use strict';
	for (var item in data.selectItems )  {
            var btnElement = document.createElement("BUTTON");
            btnElement.setAttribute("class", "button-widget");
            btnElement.setAttribute("id",data.selectItems[item].id);
            btnElement.setAttribute("value", data.selectItems[item].product);
            btnElement.setAttribute("data-correlationId", data.correlationId);
            btnElement.addEventListener('click', webChat.sendWidgetMessage);
            btnElement.append(document.createTextNode(data.selectItems[item].product));
            divElement.append(btnElement);
        }
    },

    /**
     * Utility function to set the workflow type for routing.
     * 
     * @param newWorkflowType
     */
    setWorkflowType : function(newWorkflowType) {
        'use strict';
        webChat.workflowType = newWorkflowType;
    },

    /**
     * Gather the required chat elements
     */
    gatherChatElements : function() {
        'use strict';
        chatLogon.openChatButton = document.getElementById('openbutton-chat');
        webChat.sendButton = document.getElementById('sendbutton-chat');
        webChat.closeButton = document.getElementById('closebutton-chat');
        webChat.messages = document.getElementById('messages');
        webChat.outMessage = document.getElementById('outmessage');
        webChat.participants = document.getElementById('participants');
    },

    ////////////////////////////////////////////////////////////////////////////
    // Subscribed Co-Browse Events
    ////////////////////////////////////////////////////////////////////////////

    onCoBrowseReady : function(source) {
        'use strict';

        if (webChat.isPagePushKey) {
            // Came from the iFrame handle it differently.
            if (webChat.coBrowseKey) {
                webChat.joinPagePushCoBrowse();
            }
        } else {
            // Came from the Co-Browse on this page.
            webChat.coBrowseReady = true;
            coBrowseUI.showCoBrowseLinkDiv();
        }
    },

    onCoBrowseSessionClose : function(source, title, text) {
        'use strict';

        webChat.coBrowseKey = '';
        if (webChat.initCalled) {
            
            // we don't have a timestamp or display name for this,
            // so use the local time and claim it's done by the system.
            var date = new Date();
            webChat.writeResponse('System ('+ date.toLocaleTimeString() + ')', chatConfig.writeResponseClassSystem);
            webChat.writeResponse('Co-Browsing session finished', chatConfig.writeResponseClassSystem);
        }
    },

    onCoBrowseStopSuccess : function(source) {
        'use strict';

        if (webChat.initCalled) {
            
            // we don't have a timestamp or display name for this,
            // so use the local time and claim it's done by the system.
            var date = new Date();
            webChat.writeResponse('System ('+ date.toLocaleTimeString() + ')', chatConfig.writeResponseClassSystem);
            webChat.writeResponse('Co-Browsing session finished', chatConfig.writeResponseClassSystem);
        }
    },

    // Subscribed coBrowseUI events.
    onCoBrowseUIJoinRequest : function(source, name, coBrowseKey) {
        'use strict';

        var hiddenElements = webChat.hideElements.concat(coBrowseUI.hiddenElements);
        coBrowse.joinSession(name, coBrowseKey, hiddenElements);
        coBrowseUI.hideCoBrowseLinkDiv();
    },

    onCoBrowseUIJoinFailure : function(source) {
        'use strict';

        if (webChat.coBrowseKey) {
            if (webChat.isPagePushKey) {
                webChat.cleanUpPagePushCoBrowse();
            }
        }
    },

    onCoBrowseUICleanUp : function(source) {
        'use strict';

        if (webChat.isPagePushKey) {
            webChat.cleanUpPagePushCoBrowse();
        }

        coBrowseUI.showCoBrowseLinkDiv();
    },

    // CoBrowse related functions.
    initCoBrowse : function() {
        'use strict';

        coBrowse.init(webChat.coBrowseSDKPath, avayaGlobal.log, [ webChat, coBrowseUI ],
                links.coBrowseHost);
    },

    joinPagePushCoBrowse : function() {
        'use strict';

        // Hide join dialog for other CoBrowse on this page.
        coBrowseUI.closeDialog(coBrowseUI.proactiveJoinDialogId);
        coBrowseUI.hideCoBrowseLinkDiv();
    },

    joinKeyPushCoBrowse : function(coBrowseKey) {
        'use strict';

        var hiddenElements = webChat.hideElements.concat(coBrowseUI.hiddenElements);
        coBrowse.joinSession(webChat.g_user, coBrowseKey, hiddenElements);
        coBrowseUI.hideCoBrowseLinkDiv();
    },

    cleanUpPagePushCoBrowse : function() {
        'use strict';

        webChat.isPagePushKey = false;
    },
	
	
	/**
	 * Get or set current environment
	 * @environment string production|development
	 * @return string
	 */
	getSetEnvironment: function(environment){
		if(typeof environment !== 'undefined'){
			this.environment = environment;
			return environment;
		}
		return this.environment;
	},
    
    /**
     * Call this to set up webChat.
     */
    setupWebChat: function(settings) {
        'use strict';
				
		//2019-02-26 SF: bind server-declared settings
		this.settings = settings || {};
				
		//Presidio: get CDN location per requirements; note trailing slash
		var host = window.location.host;
		if(this.settings.cdnLocation){
			// allow for a custom specified CDN location say for local testing
			this.cdnLocation = this.settings.cdnLocation;
		}else if(host.match(/quality\./)){
			this.cdnLocation = '//qacdn.mscdirect.com/';
		}else if(host.match(/dev\./)){
			this.cdnLocation = '//devcdn.mscdirect.com/';
		}else{
			// production
			this.cdnLocation = '//cdn.mscdirect.com/';
		}
		
		// set environment
		if(this.settings.environment){
			this.getSetEnvironment(this.settings.environment);
		}else if(!host || host.match(/quality\./) || host.match(/dev(elop)*\./)){
			this.getSetEnvironment('development');
		}else{
			//production by default, no logging
			this.getSetEnvironment('production');
		}
		
		
		// if an override is given for URLs, set them
		if(this.settings.webChatHost) links.webChatHost = this.settings.webChatHost;
		if(this.settings.coBrowseHost) links.coBrowseHost = this.settings.coBrowseHost;
		if(this.settings.contextStoreHost) links.contextStoreHost = this.settings.contextStoreHost;
        
        // check if this browser supports required features
        avayaGlobal.detectBrowserSupport();
        avayaGlobal.log = avayaGlobal.makeLogger();
        links.setupSecurity();
        
        webChat.gatherChatElements();
        
        // set up the configuration panel. Remove this in production
		if(this.settings.initChatConfigPanel){
			chatConfigPanel.setup();
		}
        
        
        // set up the UI
        chatUI.setup();
		        
        // check if there was a chat in progress before reloading
        chatSocket.reloadAfterRefresh();
        
        ewt.requestEwt();
        chatLogon.saveAttributeCount();

        // If chat is in progress, prevent user from accidentally closing the page.
        // Can't override default message due to security restrictions
        // so the value returned here doesn't really matter.
        window.onunload = function() {
            if (webChat.initCalled) {				
                chatSocket.setupRefresh();
				if(document.getElementById('outmessage').value.length){
					return "You will lose the message you are typing to the agent if you leave now.  Continue?";
				}
            }

			if (typeof coBrowse !== 'undefined') {
				coBrowse.stopSession();
				return "Ending session";
			}
        };
    },
    
    /**
     * Retrieve the current transcript from the UI's perspective. Used mainly for rebuilding after a refresh.
     * @returns {Element.children|.document@call;getElementById.children}
     */
    getCurrentTranscript: function() {
        'use strict';
        return avayaGlobal.getEl("messages").children;
    },
	
	chatPanelConfigureMinimize: function(){
		//build the minimize button if not already built
		if(!$('.presav-chatPanel .ui-dialog-titlebar .ui-dialog-titlebar-minimize').length){
			$('.ui-dialog-titlebar').append('<a href="#" style="right:40px;" class="ui-dialog-titlebar-minimize ui-corner-all" role="button"><span class="ui-icon ui-icon-minusthick">minimize</span></a>');
			//rolled back from jQuery on(), not present in ancient 1.4.2
			if($('.presav-chatPanel .ui-dialog-titlebar .ui-dialog-titlebar-minimize')){
				document.querySelector('.presav-chatPanel .ui-dialog-titlebar .ui-dialog-titlebar-minimize').addEventListener('click', function(){
					var panel = $('.presav-chatPanel');
					var style = panel.attr('style');
					if(panel.hasClass('presav-minimize')){
						//maximize the panel
						panel
							.removeClass('presav-minimize')
							.attr('style', chatUI.panelStyleMaximized);
						$('.presav-chatPanel .ui-dialog-titlebar-minimize span')
							.removeClass('ui-icon-plusthick')
							.addClass('ui-icon-minusthick');
						//reposition for any new messages received
						webChat.messages.scrollTop = webChat.messages.scrollHeight;
					}else{
						//minimize the panel
						chatUI.panelStyleMaximized = style;
						
						panel
							.addClass('presav-minimize')
							.attr('style', 'width: 200px; z-index: 1015; bottom: 0px; right: 20px; top: inherit; left: inherit; position: fixed !important;');
						$('.presav-chatPanel .ui-dialog-titlebar-minimize span')
							.removeClass('ui-icon-minusthick')
							.addClass('ui-icon-plusthick');
					}
					return false;
				});
			}
		}
	},
	
	chatPanelMaximize: function(){
		var panel = $('.presav-chatPanel');
		if(panel.hasClass('presav-minimize')){
			//maximize the panel
			panel
				.removeClass('presav-minimize')
				.attr('style', chatUI.panelStyleMaximized);
			$('.presav-chatPanel .ui-dialog-titlebar-minimize span')
				.removeClass('ui-icon-plusthick')
				.addClass('ui-icon-minusthick');
			//reposition for any new messages received
			webChat.messages.scrollTop = webChat.messages.scrollHeight;

		}
	},
	
    mover: {
    	/*
    	our goal is to keep the window inside the <body>, and make sure that either the live chat button, or the dialog, are showing.  I think logical place for the last part is on opening the dialog; in theory that will never be called unless there's a live chat button + a user click, at which point it needs to be managed.  If NEITHER, we should fade in the live chat button.

    	 */
    	running: null,
        monitor: function(){

    		var width = $(window).width();
    		var height = $(window).height();
    		var el = $('.presav-chatPanel');
    		var elWidth = el.width();
    		var elHeight = el.height();
    		var offset = el.offset();

    		if(el.is(':visible') && $('.bottom_chat_btn').is(':visible')){
				chatUI.showLiveChat(false);
            }

			if(width > 768) return;

            if(offset.left + elWidth > width || offset.left < 0){

            	el.css('left', '10px');
            	el.css('width', (width - 20 - 7) + 'px');
            	//seems you need to reset the width for the original element
                $('#chatPanel').css('width', '');
            }
        }

    }

};

function initChat(regState, firstName, lastName, email, parsedPhone){
	var phone = (parsedPhone || '').split('|');
	avayaGlobal.client.regState = regState ? regState : 'g';
	avayaGlobal.client.firstName = firstName ? firstName : '';
	avayaGlobal.client.lastName = lastName ? lastName : '';
	avayaGlobal.client.email = email ? email : '';
	avayaGlobal.client.phoneArea = phone[0] ? phone[0] : '';
	avayaGlobal.client.phonePrefix = phone[1] ? phone[1] : '';
	avayaGlobal.client.phoneBody = phone[2] ? phone[2] : '';

	chatUI.showLiveChat(false);
	
	var width = Math.min( 475, $(window).width() - 20 );
	//testing
	width = avayaGlobal.fromRequestCookieDefault('width', width);
	$('#chatPanel').dialog({
		width : width,
		dialogClass : 'presav-chatPanel',
		open: function(event, ui){
			avayaGlobal.log.info('dialog opened 1');

			webChat.chatPanelMaximize();
			webChat.chatPanelConfigureMinimize();
			
			document.getElementById('user-chat').value = avayaGlobal.client.firstName;
			document.getElementById('user-chat-last').value = avayaGlobal.client.lastName;
			document.getElementById('email-chat').value = avayaGlobal.client.email;
			document.getElementById('phone-area').value = avayaGlobal.client.phoneArea;
			document.getElementById('phone-country').value = '+1';
			document.getElementById('phone-chat').value = avayaGlobal.client.phonePrefix + 
				(avayaGlobal.client.phonePrefix && avayaGlobal.client.phoneBody ? '-' : '') + 
				avayaGlobal.client.phoneBody;
				
			//we want the actual chat dialog to remain at least the same height as the chat entry form; no change in bottom location.  Tried using min-height and it failed/was reset by jQuery UI
			chatUI.panelStartingHeight = document.getElementById('chatPanel').offsetHeight;
			
			var resizeCalled = false, box = document.getElementsByClassName('presav-chatPanel')[0];
			
			var maxWithScrollbar = Math.min(
				parseInt(document.body.clientWidth), 
				parseInt(document.body.scrollWidth), 
				parseInt(window.innerWidth) - 17 /* note I am assuming a vertical scrollbar */
			);
			if(parseInt(box.style.width) > maxWithScrollbar){
				avayaGlobal.log.info('resizing panel 1');
				resizeCalled = true;
				//re-position the panel x-wise
				box.style.width = (maxWithScrollbar - 30) + 'px';
				box.style.left = '15px';
			}
			if(!webChat.mover.running){
				webChat.mover.running = setInterval(webChat.mover.monitor, 1000);
			}
			
			//MOBILETEST Start
			avayaGlobal.log.info('mobile test 1');
			var params = {
				'event': 'open panel',
				'innerWidth': window.innerWidth,
				document_body_clientWidth: document.body.clientWidth,
				document_body_scrollWidth: document.body.scrollWidth,
				resizeCalled: resizeCalled ? 1 : 0,
				userAgent: navigator.userAgent,
				comment: (typeof window.comment === 'undefined' ? '' : window.comment),
				panelWidth: box.style.width,
				panelLeft: box.style.left,
				url: window.location.href,
			};
			var str = '';
			for(var i in params) str += i + '=' + encodeURI(params[i]) + '&';
			if(false) min_ajax({
				uri: 'https://www.compasspoint-sw.com/mobiletest/',
				params: str,
			});
			//MOBILETEST End
			
						
			//2019-04-29 - facing a bug where reloading the page, the panel opens in a different css top value.  Unable to solve, this attribute handles this.  You can remove it if you have a better understanding of why esp. jQuery dialog
			//string value
			localStorage.panelStartingTop = $('#chatPanel').parent().css('top');			
		},
		close: function(event, ui){
			avayaGlobal.log.info('dialog closed');
			if (webSocket !== undefined ) {
				avayaGlobal.log.info('calling closePanel (1)');
				chatUI.closePanel(event);    
			}
			chatUI.showLiveChat();
		},
	});	
	
	return false;
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function g_cookie(ck){
	var cVal = document.cookie;
	var cStart = cVal.indexOf(" " + ck + "=");
	if(cStart==-1)	cStart = cVal.indexOf(ck + "=");
	if(cStart == -1){
		cVal = null;
	}else{
		cStart = cVal.indexOf("=", cStart) + 1;
		var cEnd = cVal.indexOf(';', cStart);
		if(cEnd==-1) cEnd=cVal.length;
		cVal = unescape(cVal.substring(cStart,cEnd));
	}
	return cVal;
}

function s_cookie(cName,cVal,cExp,cPath){
	if(typeof cVal=='undefined'){
		//remove the cookie (pass only one variable)
		var date = new Date();
		date.setTime(date.getTime()+(-1*24*60*60*1000));
		var expiry='; expires='+date.toGMTString();
		document.cookie = cName + "="+cVal + expiry+path;
		return;
	}
	cVal = escape(cVal);
	if(typeof cExp == 'undefined'){
		var nw = new Date();
		nw.setMonth(nw.getMonth() + 6);
		var expiry= ";expires="+nw.toGMTString();
	}else if(cExp==0){
		var expiry='';
	}else{
		var date = new Date();
		date.setTime(date.getTime()+(cExp*24*60*60*1000));
		var expiry='; expires='+date.toGMTString();
	}
	if(typeof cPath == 'undefined'){
		var path=';Path=/';
	}else{
		var path = ";Path="+cPath;
	}
	document.cookie = cName + "="+cVal + expiry+path;
}

function min_ajax(config){
	/**
	 * This function can be run with just config.uri,
	 * config.params is usually also required depending on what your API expects.
	 * config.params should be in name-value pair format and properly escaped
	 */
	var params = '', xhr = new XMLHttpRequest();
	xhr.open(config.method ? config.method.toUpperCase() : 'POST', config.uri);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.responseType = config.responseType ? config.responseType.toLowerCase() : 'json';
	xhr.onload = function() {
		// this normally happens in IE
		if(xhr.responseType === 'json' && xhr.response && typeof xhr.response === 'string'){
			xhr.response = JSON.parse(xhr.response);
		}
		if(typeof config.either === 'function'){
			config.either(xhr);
		}
		if (xhr.status === 200) {
			if(typeof config.success === 'function') config.success(xhr);
		} else {
			// handle this
			if(typeof config.error === 'function') config.error(xhr);
		}
	};
	// for processes that need to work on the xhr before the request is sent
	if(typeof config.before === 'function'){
		//currently no return value
		config.before(xhr);
	}
	//xhr.onload = config.onload;
	if(typeof config.params === 'object'){
		//process variables
	}else{
		//no action needed; assumed correct string format
		params = config.params ? config.params : '';
	}
	xhr.send(params);
	if(typeof config.immediately === 'function'){
		config.immediately(xhr);
	}
}



