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
    coBrowseIframe : null,
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
		console.log('webchat: Context ID  == workid ' + avayaGlobal.getSessionStorage('contextId'));

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
        var body = message.body, method = body.method;
        if (method === chatConfig.jsonMethodRequestChat) {
            webChat.notifyRequestChat(body);
        } else if (method === chatConfig.jsonMethodRouteCancel) {
            webChat.notifyRouteCancel();
        } else if (method === chatConfig.jsonMethodRequestNewParticipant) {
            webChat.notifyNewParticipant(body);
        } else if (method === chatConfig.jsonMethodRequestIsTyping) {
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
            // do nothing with pings. They just confirm that the
            // WebSocket is open.
        } else if (method === chatConfig.jsonMethodFileTransfer) {
            webChat.notifyFileTransfer(body);
        } else {
            throw new TypeError('Received notification with unknown method: '.concat(method));
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
		//parse date, 
		var ampm = 'AM', date = new Date(body.timestamp), dateStr = '';
		var hours = parseInt(date.getHours());
		var minutes = date.getMinutes().toString();
		if(hours > 12){
			ampm = 'PM';
			hours -= 12;
		}
		dateStr = hours + ':' + (minutes.length === 1 ? '0' : '') + minutes + '&nbsp;' + ampm;
		
		var message = '<div class="presav-message-wrap ' + (chatMessageClass ? chatMessageClass : '') + '">' + 
		'<div class="presav-timestamp" data-timestamp="' + body.timestamp + '">' + dateStr + '</div>' + 
		'<div class="presav-messager">' + (body.displayName ? body.displayName : 'Agent') + '</div>' + 
		'<div class="presav-message">' + body.message + '</div>' + 
		'</div>';
		var chat = webChat.messages.innerHTML;
		webChat.messages.innerHTML = chat + message;
		webChat.messages.scrollTop = webChat.messages.scrollHeight;

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
            coBrowseUI.showCoBrowseIframe(url);

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

        var contentWindow = webChat.coBrowseIframe.contentWindow;
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
        console.log(leaveReason);

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
            webChat.writeResponse('Successfully reconnected', chatConfig.writeResponseClassSystem);
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
        var url = body.address;
        var filename = body.name;
        var timestamp = new Date().toLocaleString();
        var message = chatConfig.fileTransferMessageText;
		
		var dateMessage = agentname + ' (' + timestamp + ')';
		webChat.writeResponse(dateMessage, chatConfig.writeResponseClassAgentDate);
        
		url = webChat.replaceFileTransferHost(url);
		message = message.replace('{0}', agentname);
        message = message.replace('{1}', filename);
        message = message.replace('{2}', timestamp);
        message = message.replace('{3}', url);
        webChat.writeResponse(message, chatConfig.writeResponseClassResponse);
    },

    /**
     * Replace the hostname in the file transfer URL. This will allow it to be passed through a proxy.
     */
    replaceFileTransferHost : function(url) {
        'use strict';
        var ocpHost = links.webChatHost;
        url = url.replace(/:\/\/[\d\w\.]+/, '://' + ocpHost);
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
			console.log('Original logic block for calling close');
        }else{
			console.log('Criteria for close not met! Calling anyway');
		}
		var closeRequest = {
			apiVersion : '1.0',
			type : 'request',
			body : {
				method : 'closeConversation'
			}
		};
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
		
		webChat.writeMessageBlock({
			timestamp: (new Date()).getTime(),
			displayName: webChat.g_user,
			message: message
		}, chatConfig.writeResponseClassSent);

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

        if (!onHoldUrlsDefined && !onHoldMessagesDefined) {
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
                typingImage.src = (agent.type === 'supervisor_barge') ? chatConfig.supervisorImage
                        : chatConfig.agentImage;
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
        webChat.coBrowseIframe = document.getElementById('cobrowse');
    },


    ////////////////////////////////////////////////////////////////////////////
    // Subscribed Co-Browse iFrame Events
    ////////////////////////////////////////////////////////////////////////////

    onLoadCoBrowseIframe : function() {
        'use strict';

        var contentWindow = webChat.coBrowseIframe.contentWindow;
        var iFramedCoBrowse = contentWindow.coBrowse;
        var iFramedCoBrowseUI = contentWindow.coBrowseUI;

        if (iFramedCoBrowse !== undefined && iFramedCoBrowseUI !== undefined) {
            iFramedCoBrowseUI.addListener(webChat);
            iFramedCoBrowse.init(webChat.coBrowseSDKPath, avayaGlobal.log, [ webChat,
                    iFramedCoBrowseUI ], links.coBrowseHost);

            contentWindow.onbeforeunload = webChat.onBeforeUnloadCoBrowseIframe;
        }
    },

    onBeforeUnloadCoBrowseIframe : function() {
        'use strict';

        var contentWindow = webChat.coBrowseIframe.contentWindow;
        var iFramedCoBrowse = contentWindow.coBrowse;
        var iFramedCoBrowseUI = contentWindow.coBrowseUI;

        if (iFramedCoBrowse !== undefined && iFramedCoBrowseUI !== undefined) {
            iFramedCoBrowseUI.closeHangingDialogs();
        }
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

        var iFramedCoBrowse = webChat.coBrowseIframe.contentWindow.coBrowse;
        if (iFramedCoBrowse) {
            var hiddenElements = webChat.hideElements.concat(coBrowseUI.hiddenElements);
            iFramedCoBrowse.joinSession(webChat.g_user, webChat.coBrowseKey, hiddenElements);
        } else {
            // TODO: Handle error.
        }
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
        coBrowseUI.hideCoBrowseIframe();
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
		if(host.match(/quality\./)){
			this.cdnLocation = '//qacdn.mscdirect.com/';
		}else if(host.match(/dev\./)){
			this.cdnLocation = '//devcdn.mscdirect.com/';
		}else if(this.settings.cdnLocation){
			// allow for a custom specified CDN location say for local testing
			this.cdnLocation = this.settings.cdnLocation;
		}else{
			// production
			this.cdnLocation = '//cdn.mscdirect.com/';
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

        if(this.settings.initCobrowse){
			// Set Co-Browsing iFrame onLoad handler. Comment out if not using Co-Browsing.
			webChat.coBrowseIframe.onload = webChat.onLoadCoBrowseIframe;

			// Setup Co-Browsing instance on this page. Comment out if not using Co-Browsing
			coBrowseUI.addListener(webChat);
			webChat.initCoBrowse();
		}
		        
        // check if there was a chat in progress before reloading
        chatSocket.reloadAfterRefresh();
        
        ewt.requestEwt();
        chatLogon.saveAttributeCount();

        // If chat is in progress, prevent user from accidentally closing the page.
        // Can't override default message due to security restrictions
        // so the value returned here doesn't really matter.
        window.onbeforeunload = function() {
            if (webChat.initCalled) {
                chatSocket.setupRefresh();
				if(document.getElementById('outmessage').value.length){
					return "You will lose the message you are typing to the agent if you leave now.  Continue?";
				}
            }
        };

		window.onunload = function() {
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

	$('.bottom_chat_btn').fadeOut(400);
	$('#chatPanel').dialog({
		width : 475,
		dialogClass : 'fixedPosition presav-chatPanel',
		open: function(event, ui){
			console.log('dialog opened');
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
			
		},
		close: function(event, ui){
			console.log('dialog closed');
			if (webSocket !== undefined ) {
				console.log('calling closePanel (1)');
				chatUI.closePanel(event);    
			}
			$('.bottom_chat_btn').fadeIn(400);
		},
	});	
	
	return false;
}


