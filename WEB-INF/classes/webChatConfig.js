/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Defines configuraiton parameters for chat.
 */

// the WebSocket is globally accessible - there should only ever be one on the page?
var webSocket;


/**
 * Defines keywords for various widget types.
 */
var widgetConfig ={
    radio :"radio",
    button : "button",
    selector : "selector",
    click : "click"
};

var chatConfig = {

    totalNumberOfRetries : 0,
    maxNumberOfRetries : 200,
    retryInterval : 3000,

    // If set to true, if the Websocket connection fails we will not attempt to re-establish the session
    dontRetryConnection : false,
    reconnectionTimeout : null,
    previouslyConnected : false,
    resetTimer : 5000,

    // message types
    messageTypeNewChatAck : 'newChatAcknowledgement',
    messageTypeAck : 'acknowledgement',
    messageTypeError : 'error',
    messageTypeNotification : 'notification',

    // notification messages are further broken down
    jsonMethodRequestChat : 'requestChat',
    jsonMethodRouteCancel : 'routeCancel',
    jsonMethodRequestNewParticipant : 'newParticipant',
    jsonMethodRequestIsTyping : 'isTyping',
    jsonMethodRequestNewMessage : 'newMessage',
    jsonMethodRequestCloseConversation : 'closeConversation',
    jsonMethodRequestParticipantLeave : 'participantLeave',
    jsonMethodRequestNewPushMessage : 'newPushPageMessage',
    jsonMethodRequestNewCoBrowseSessionKeyMessage : 'newCoBrowseSessionKeyMessage',
    jsonMethodPing : 'pong',
    jsonMethodFileTransfer : 'newAgentFileTransfer',

    // placeholder for new message. Format is displayName (timestamp): messageText
    newMessageText : '{0} ({1}): {2}',

    // placeholder for file transfer notifications. {0} is agent's name, {1} is the file name, {2} is the timestamp. {3} is the URL
    fileTransferMessageText : '{0} transferred a file ({1}) at {2}. Please visit {3} to download it',

    transferNotificationText : 'Transferring to another agent, please remain in the chat',
    chatbotTransferNotification : 'Transferring to a live agent, please remain in the chat',

    // placeholder for page push messages. {0} represents agent display name, {1} is the timestamp
    pagePushMessageText : '{0} sent the following URL at ({1}): ',
    coBrowseMessageText : '{0} initiated a Co-Browsing session at ({1})',

    notifyOfObserve : true,
    nofiyOfCoach : true,
    notifyOfBarge : true,

    // if set to true, the chatbot will not announce its arrival/departure
    suppressChatbotPresence : false,

    // how frequently the pings are sent
    pingTimer : 5000,

    typingTimeout : 10000,
    agentTypingTimeout : 3000,

    // default username for if the customer doesn't enter a name.
    defaultUsername : 'Customer',

    // CSS classes that distinguish customer from agent messages
    writeResponseClassResponse : 'response',
    writeResponseClassSent : 'sent',
    writeResponseClassSystem : 'system',
    writeResponseClassDate : 'date',
    writeResponseClassAgentDate : 'agentDate',
    writeResponseClassChatbot : 'chatbot',

    // links to various images
    agentImage : 'images/agent.png',
    agentTypingImage : 'images/agent_typing.png',
    supervisorImage : 'images/supervisor.png',
    supervisorTypingImage : 'images/supervisor_typing.png',

    // used only by the configuration panel
    useSecureUrls : false,

    // lease time in Context Store, measured in hours
    leaseTime : 1,
    
    requireFirstName: true,
    requireLastName: true,
    requireEmail: true,
    requirePhone: true,
   
    // how long should we hold session data after closing/leaving the page
    // this should mtch the refresh/idle timeout in the Administration Utility
    refreshTimeoutSeconds: 180,

    setLeaseTime : function(newLeaseTime) {
        'use strict';
        if (typeof (newLeaseTime) !== 'number' || newLeaseTime > 192) {
            avayaGlobal.log.warn("Invalid lease time! Resetting to default (1 hour)");
            newLeaseTime = 1;
        }
        chatConfig.leaseTime = newLeaseTime;
    },

    /**
     * Utility function to request the EWT manually. Acts as a wrapper for the config panel.
     */
    requestEwt : function() {
        'use strict';
        ewt.requestEwt();
    },

    showChatPanel : function() {
        'use strict';
        chatUI.showChatPanel();
    },

    initCobrowse : function() {
        'use strict';
        if (window.coBrowse !== undefined) {
            coBrowse.init();
        }
    }

};
