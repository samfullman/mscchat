/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Defines the low-level WebSocket connections and interactions with it
 */

var chatSocket = {

    // set to true if the user closes manually
    manualClose : false,
    
    // authentication token for customer's firewall
    authToken: '',
    
    reconnecting: false,

    /**
     * Open the socket.
     */
    openSocket : function() {
        'use strict';
        webChat.participants = avayaGlobal.getEl('participants');
        avayaGlobal.log.trace('WebChat: Opening the WebSocket');

        // Ensures only one connection is open at a time
        if (webSocket !== undefined && (webSocket.readyState !== WebSocket.CLOSED)) {
            avayaGlobal.log.warn('WebChat: WebSocket is already opened');
            return;
        }

        clearTimeout(chatConfig.reconnectionTimeout);

        // Create a new instance of the WebSocket using the specified url
        webSocket = new WebSocket(links.getWebChatUrl());

        //attach event handlers
        webSocket.onopen = chatSocket.handleOpen;
        webSocket.onmessage = chatSocket.handleMessage;
        webSocket.onerror = chatSocket.handleError;
        webSocket.onclose = function(event) {

            avayaGlobal.log.debug("WebChat: Websocket closed with code " + event.code);

            // disable the controls upon close
            webChat.disableControls(true);

            // If it is an expected/graceful close, do not attempt to reconnect.
            // Don't attempt reconnect if we haven't connected successfully before
            if (!chatConfig.previouslyConnected || chatConfig.dontRetryConnection || event.code === 1000 ||
                    event.code === 1005) {
                avayaGlobal.clearSessionStorage();
                chatSocket.handleClose(event);
            } else if (event.code === 1001) {
                chatSocket.setupRefresh();
            } else {
                chatSocket.reconnect();
            }
        };

    },

    /**
     * Close the websocket. Disable the controls, clear the users, and let the user know that the chat is over.
     */
    handleClose : function(event) {
        'use strict';

        if (!event.wasClean) {
            avayaGlobal.log
                    .warn(
                            'WebChat: WebSocket closed abnormally. This may be caused by the user exiting before the chat starts or the agent closing the chat (in which case, ignore this), a certificate issue (e.g. your browser considers the certificate to be invalid), or an incorrect URL (e.g. not using a secure connection to a cluster that enforces secure connections). The URL is: ',
                            links.getWebChatUrl());
        } else {
            avayaGlobal.log.info('WebChat: Closing the WebSocket.');
        }

        webChat.disableControls(true);
        webChat.initCalled = false;
        webChat.updateUsers(); // called here to hide the users
        var timer = chatConfig.resetTimer;

        // if the customer hasn't closed it manually, let them know.
        // otherwise, ignore the timer
        if (!chatSocket.manualClose) {
            webChat.writeResponse('Connection closed, chat has ended', chatConfig.writeResponseClassSystem);
            webChat.writeResponse('The panel will close automatically in ' + timer / 1000 + ' seconds',
                    chatConfig.writeResponseClassSystem);
        } else {
            timer = 0;
            webChat.initCalled = false;
        }
        chatSocket.closeTimer = setTimeout(webChat.resetChat, timer);

    },

    /**
     * Open the WebSocket. The user's controls will be disabled if there are no agents,
     * and the ping timer will start.
     * @param event
     */
    handleOpen : function(event) {
        'use strict';
        
        chatSocket.manualClose = false;
        
        // set up the ping mechanism here.
        webChat.pingInterval = setInterval(function() {
            webChat.sendPing();
        }, chatConfig.pingTimer);
        webChat.timeouts.push(webChat.pingInterval);
        webChat.chatLogin(webChat.g_user, webChat.g_user_last, webChat.g_email, webChat.g_phone);

        // if there are agents in the chat, enable the controls
        if (Object.keys(webChat.users).length <= 0) {
            avayaGlobal.log.debug('WebChat: No users in room, disabling controls');
            webChat.disableControls(true);
        } else {
            avayaGlobal.log.debug('WebChat: Agents already in chat, enabling controls');
            webChat.disableControls(false);
        }
    },

    handleMessage : function(event) {
        'use strict';
        var msg = JSON.parse(event.data), body = msg.body;

        // Handle the message according to the type and method.
        // Notifications are in their own method to reduce complexity.
        if (msg.type === chatConfig.messageTypeNotification) {
            webChat.handleNotification(msg);
        } else if (msg.type === chatConfig.messageTypeError) {
            // parse the error message
            chatSocket.parseErrorMessage(body);
        } else if (msg.type === chatConfig.messageTypeAck) {
            // Nothing to do for acks
        } else if (msg.type === chatConfig.messageTypeNewChatAck) {
            // if a newChatAcknowledgement has been received,
            // then use it to initialise the guid, webOnHold variables, etc.
            webChat.guid = body.guid;
            // enable the controls and let the user know that their request
            // has been approved
            webChat.disableControls(false);
            chatSocket.resetConnectionAttempts();
            webChat.writeResponse('Chat request approved', chatConfig.writeResponseClassSystem);
        } else {
            throw new TypeError('Unknown message type:\n' + msg);
        }
    },

    /**
     * Log errors to the console and alert the user that an error has occurred.
     * @param event
     */
    handleError : function(event) {
        'use strict';
        avayaGlobal.log.error("WebChat: WebSocket error", event);
        webChat.writeResponse('A connection error has occurred. Check the console for more details',
                chatConfig.writeResponseClassSystem);
    },

    /**
     * Parse the error message
     */
    parseErrorMessage : function(error) {
        'use strict';
        var code = error.code;
        var message = error.errorMessage;

        avayaGlobal.log.warn('WebChat: An error with status ' + code + ' occurred. ', message);

        // HTTP 503 means "service unavailable" - which is a perfect description for shutting down
        if (code === 503) {
            webChat.writeResponse('Contact centre is shutting down for maintenance. Please try again later',
                    chatConfig.writeResponseClassSystem);
        } else {
            webChat.writeResponse('An error occurred ' + error.code + ' (' + error.errorMessage + ')',
                    chatSocket.writeResponseClassSystem);
        }
        // allow the user to clear the page
        chatSocket.clearRefresh();

    },

    /**
     * Attempt to reconnect the webSocket.
     */
    reconnect : function() {
        'use strict';
        
        if (chatConfig.dontRetryConnection) {
            avayaGlobal.log.warn("Attempting to reconnect when we shouldn't!");
            return;
        }
        
        if (webSocket.readyState !== WebSocket.OPEN) {
            chatConfig.reconnectionTimeout = setTimeout(function() {
                if (chatConfig.totalNumberOfRetries <= chatConfig.maxNumberOfRetries) {
                    webChat.writeResponse('Attempting to reconnect...', chatConfig.writeResponseClassSystem);
                    clearTimeout(chatConfig.reconnectionTimeout);
                    chatConfig.totalNumberOfRetries++;
                    chatSocket.openSocket();
                } else {
                    webChat.writeResponse('Unable to reconnect, chat has ended', chatConfig.writeResponseClassSystem);
                }
            }, chatConfig.retryInterval);
        }
    },

    /**
     * Reset the number of connection attempts after a successful login.
     */
    resetConnectionAttempts : function() {
        'use strict';
        chatConfig.totalNumberOfRetries = 0;
        clearTimeout(chatConfig.reconnectionTimeout);
    },

    /**
     * Reset the WebSocket.
     */
    resetWebSocket : function() {
        'use strict';
        webChat.initCalled = false;
        chatConfig.previouslyConnected = false;
        chatConfig.totalNumberOfRetries = 0;
        webSocket = undefined;
    },

    /**
     * Send a message over the WebSocket. May throw an InvalidStateError if connection has failed; this can be ignored.
     * @param outMsg as a JSON object
     */
    sendMessage : function(outMsg) {
        'use strict';

        // prepend the authToken here
        var newMsg = $.extend({}, {"authToken" : chatSocket.authToken}, outMsg);
        
        if (webSocket !== null) {
            webSocket.send(JSON.stringify(newMsg));
        }
    },
    
    reloadAfterRefresh: function(){
        'use strict';
		
        var ak = avayaGlobal.getSessionStorage("ak");
        var guid = parseInt(avayaGlobal.getSessionStorage("guid"));
        var reloadTimestamp = avayaGlobal.getSessionStorage("reloadTimestamp");
		if(reloadTimestamp) reloadTimestamp = parseInt(reloadTimestamp);
		if(!reloadTimestamp){
			console.log('Reload timestamp has not yet been set');
			return;
		}else if (isNaN(reloadTimestamp)) {
            avayaGlobal.log.warn("WebChat: Reload timestamp is not a valid UTC timestamp!");
            chatSocket.clearRefresh();
            return;
        }
        
        var currentTimestamp = Date.now();
        var expired = (currentTimestamp - reloadTimestamp) >= (chatConfig.refreshTimeoutSeconds * 1000);
        avayaGlobal.log.debug("Current and closing timestamps are", currentTimestamp, reloadTimestamp);
        avayaGlobal.log.debug(ak, guid, expired);
        
        if (expired) {
            avayaGlobal.log.warn("WebChat: session has probably expired");
            chatSocket.clearRefresh();
            return;
        }
        
        if (ak !== null && guid !== null && !isNaN(guid)) {
            avayaGlobal.log.debug("WebChat: reloading the chat");
            chatConfig.previouslyConnected = true;
            webChat.guid = guid;
            webChat.ak = ak;
            chatUI.reloadChatPanel();
            
            var email = avayaGlobal.getSessionStorage("email");
            var user = avayaGlobal.getSessionStorage("firstName");
            var user_last = avayaGlobal.getSessionStorage("lastName");
            var phone = JSON.parse(avayaGlobal.getSessionStorage("phone"));
            
            var users = JSON.parse(avayaGlobal.getSessionStorage("users"));
            chatSocket.loadTranscript();
            webChat.writeResponse("Opening chat after page refresh", chatConfig.writeResponseClassSystem);
            webChat.initChat(false, user, user_last, email, phone.country, phone.area, phone.number);
            
            // account for a race condition caused by webChat.initChat calling disableControls(true)
            // Half a second (500 milliseconds) seems to be enough
            setTimeout(function(){                
                chatSocket.reloadUsers(users);
                webChat.disableControls(false);
            }, 500);
            
        }
    },
    
    /**
     * Reload the users.
     * @param {Object} users - a JSON object containing the agents that were in the chat.
     */
    reloadUsers: function(users){
        "use strict";
        var participants = [];
        for (var key in users) {
            if (users.hasOwnProperty(key)) {
                var agent = users[key];
                console.log(key, agent);
                participants.push({
                    "id" : key,
                    "name": agent.name,
                    "type" : agent.agentType
                });
            }
        }
        webChat.updateUsers(participants);
    },
    
    setupRefresh: function(){
        'use strict';
        avayaGlobal.log.debug("WebChat: Refreshing page");
        var users = webChat.users;
        avayaGlobal.setSessionStorage("guid", webChat.guid);
        avayaGlobal.setSessionStorage("ak", webChat.ak);
        avayaGlobal.setSessionStorage("email", webChat.g_email);
        avayaGlobal.setSessionStorage("firstName", webChat.g_user);
        avayaGlobal.setSessionStorage("lastName", webChat.g_user_last);
        avayaGlobal.setSessionStorage("phone", JSON.stringify(webChat.g_phone));
        avayaGlobal.setSessionStorage("reloadTimestamp", Date.now());
        chatSocket.saveTranscript();
        avayaGlobal.setSessionStorage("users", JSON.stringify(users));
    },
    
    /**
     * Save the transcript just before refreshing the page
     */
    saveTranscript: function(){
        'use strict';
        var transcript = [];
        var messages = webChat.getCurrentTranscript();
        for (var i = 0; i < messages.length; i++) {
            var para = messages[i];
            var paraText = para.textContent;
            var paraClass = para.className;
            transcript.push({ textContent : paraText, className: paraClass });
        }
        avayaGlobal.setSessionStorage('transcript', JSON.stringify(transcript));
    },
    
    /**
     * Load the transcript from session storage after a refresh.
     */
    loadTranscript: function(){
        'use strict';
        var transcript = JSON.parse(avayaGlobal.getSessionStorage('transcript'));

        for (var i = 0; i < transcript.length; i++) {
            var message = transcript[i];
            var text = message.textContent;
            var className = message.className;
            webChat.writeResponse(text, className);
        }
        
    },
    
    clearRefresh: function() {
        'use strict';
        avayaGlobal.log.debug("WebChat: clearing refresh");
        avayaGlobal.clearSessionStorage();
        webChat.initCalled = false;
    }
};
