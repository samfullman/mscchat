/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 *
 * Handles the UI side of the web chat library, which is based around jQuery UI. Replace the following with your own UI code, if you prefer.
 */

var chatUI = {

    /**
     * Hide the chat panel.
     */
    hideChatPanel : function() {
        'use strict';
        $('#liveChatLink').hide();
    },

    /**
     * Show the chat panel.
     */
    showChatPanel : function() {
        'use strict';
        $('#liveChatLink').show();
    },

    /**
     * Change the textContent of the specified element.
     * @param el
     * @param newText
     */
    changeElementText : function(el, newText) {
        'use strict';
        $(el).text(newText);
    },

    /**
     * Add the EWT to the chat tab. Included as an alternative to using an alert window.
     */
    addEwtToChatTab : function(waitTime) {
        'use strict';
        $('#liveChatLink').attr('title',
                'Click to chat with an agent! Wait time is approximately ' + waitTime + ' minutes');
    },

    /**
     * Changes the chat panel to chat mode.
     */
    changeToChatMode : function() {
        'use strict';
        $('#chatForm').hide();
        $('#chatInterface').show();
        $('#chatPanel').dialog({
            width : 400,
            'resize' : 'auto',
            dialogClass : 'fixedPosition'
        });
        
        $('#chatPanel').dialog('widget').attr('id', 'chatPanelHidden');    
    },

    /**
     * Changes the chat panel to login mode.
     */
    changeToLoginMode : function() {
        'use strict';
        $('#chatInterface').hide();
        $('#chatForm').show();
        $('#chatPanel').dialog({
            width : 400,
            'resize' : 'auto',
            dialogClass : 'fixedPosition'
        });
    },

    resetChatUI : function() {
        'use strict';
        chatUI.changeToLoginMode();
        $('#chatPanel').dialog('close');
        $('#liveChatLink').show();
    },

    resizeConfigPanel : function() {
        'use strict';
        $('#configPanel').dialog({
            width : 400,
            height : 350
        });
    },

    /**
     * Create and show an alert
     * @param {string} msg
     */
    showAlert : function(msg) {
        'use strict';
        $('#alertDialog').dialog({
            draggable : false,
            resizeable : false,
            buttons : {
                OK : function() {
                    $(this).dialog('close');
                }
            }
        }).text(msg);
    },
    
    showLoginErrors: function(msg) {
        "use strict";
        $('#loginErrorsDiv').show("fold");
        $('#loginErrorsDiv').text(msg);
        setTimeout(function(){
            $('#loginErrorsDiv').hide("fold");
        }, 2000);
    },
    
    markElAsRequired: function(id, isRequired){
        "use strict";
        
        var text = $(id).text();
        var newText;
        console.log(text);
        
        if (isRequired) {
            newText = text + " (required)";
        } else {
            newText = text.replace(" (required)", "");
        }
        
        $(id).text(newText);
    },

    /**
     * Shake the chat tab slightly to draw attention to it.
     */
    shakeChatTab : function() {
        'use strict';
        var shakes = 0, maxShakes = 6;
        var dir = 1;
        window.tabShakeInterval = setInterval(function() {
            shakes++;
            $('#liveChatLink').css('right', dir * 4);
            dir *= -1;

            if (shakes >= maxShakes) {
                clearTimeout(window.tabShakeInterval);
            }
        }, 1000);
    },
    
    closePanel : function(event) {
        'use strict';
        event.preventDefault();
        avayaGlobal.log.debug("WebChat: closing chat panel");

        // when the chat dialog is closed, reset things
        $('#liveChatLink').show();
        chatSocket.clearRefresh();
        chatSocket.manualClose = true;
        clearTimeout(chatSocket.closeTimer);
        if (webSocket.readyState !== 2) {
            chatConfig.dontRetryConnection = true;
            webChat.quitChat();
        }
    },

    /**
     * Sets up the UI code.
     */
    setup : function() {
        'use strict';

        // set up the link for liveChat - this is what the user clicks to open the chat
		/*
		// 2019-02-21 sfullman@presidio.com: taken care of in initChat()
        $('#liveChatLink').click(function(event) {
            event.preventDefault();
            $('#liveChatLink').hide();
            $('#chatPanel').dialog({
                width : 400,
                height : 'auto',
                dialogClass : 'fixedPosition',
            }).on('dialogclose', function(event) {
                if (webSocket !== undefined ) {
                    chatUI.closePanel(event);    
                }
            });
        });
		*/

        // gives the liveChatLink a fancier tooltip
        $('#liveChatLink').tooltip();

        $('#configLink').click(function(event) {
            $('#configPanel').dialog({
                width : 400,
                height : 350,
                'resize' : 'auto',
                dialogClass : 'fixedPosition'
            });
            event.preventDefault();
        });

        $('#showCoBrowseLink').click(function(event) {
            if (!coBrowseUI.checkDialogOpen(coBrowseUI.proactiveJoinDialogId)) {
                coBrowseUI.createProactiveJoinDialog(true);
            }
            event.preventDefault();
        });

        // show a tooltip for the configuration panel
        $('#configLink').tooltip();

        $('.configButton').tooltip();

        // Set jQuery UI button
        $('.button').button();

        // hide the alert header and shake the chat tab
        $('#chatJavaScriptAlertHeader').hide();
        chatUI.shakeChatTab();
        
        chatUI.markElAsRequired("#nameLabel", chatConfig.requireFirstName || chatConfig.requireLastName);
        chatUI.markElAsRequired("#emailLabel", chatConfig.requireEmail);
        chatUI.markElAsRequired("#phoneLabel", chatConfig.requirePhone);
    },
    
    /**
     * Reload the chat panel after a refresh
     */
    reloadChatPanel: function() {
        'use strict';
        console.log("Reloading chat panel");
        chatUI.changeToChatMode();
        
        // I honestly don't know WHY this line is required, but it's the only thing that works.
        $("#liveChatLink").click();
    }
};
