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
	
	panelStartingHeight : null,

    /**
     * Hide the chat panel.
     */
    hideChatPanel : function() {
        'use strict';
        $('.presav-chatPanel').fadeOut(400);
    },

    /**
     * Show the chat panel.
     */
    showChatPanel : function() {
        'use strict';
        $('.presav-chatPanel').fadeIn(400);
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
        $('.bottom_chat_btn').attr('title',
                'Click to chat with an agent! Wait time is approximately ' + waitTime + ' minutes');
    },

    /**
     * Changes the chat panel to chat mode.
     */
    changeToChatMode : function() {
        'use strict';
		
		if(chatUI.panelStartingHeight){
			console.log('maintaining panel height');
			console.log(document.getElementById('chatPanel').style.height = chatUI.panelStartingHeight + 'px');
		}else{
			$('#chatPanel').dialog({
				width : 475,
				'resize' : 'auto',
				dialogClass : 'fixedPosition presav-chatPanel',
				open: function(event, ui){
					console.log('dialog re-opened');
				},
				close: function(event, ui){
					console.log('dialog closed after page nav');
					if (webSocket !== undefined ) {
						console.log('closePanel');
						chatUI.closePanel(event);    
					}
					$('#liveChatLink').show();
				}
			});
		}
        $('#chatForm').fadeOut(400);
        $('#chatInterfaceWrap').delay(400).fadeIn(400);
        
        $('#chatPanel').dialog('widget').attr('id', 'chatPanelHidden');    
    },

    /**
     * Changes the chat panel to login mode.
     */
    changeToLoginMode : function() {
        'use strict';
        $('#chatInterfaceWrap').hide();
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
        }, 5000);
    },
    
	markElAsRequired: function(id, isRequired){
        "use strict";
		console.log('Setting ' + id + ' as ' + (isRequired ? 'required' : 'not required'));
        var html = $(id).html(), newHtml;
        if (isRequired) {
            newHtml = html + "<sup class='presav-required'>*</sup>";
        } else {
            newHtml = html.replace("<sup class='presav-required'>*</sup>", "");
        }
        $(id).html(newHtml);
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
		
		if(webChat.settings.reasonOptions){
			console.log('Appending reason field options');
			for(var i in webChat.settings.reasonOptions){
				var a = webChat.settings.reasonOptions[i];
				$('#reason').append('<option value="' + a[0] + '">' + a[1] + '</option>');
			}
		}

        $('#showCoBrowseLink').click(function(event) {
            if (!coBrowseUI.checkDialogOpen(coBrowseUI.proactiveJoinDialogId)) {
                coBrowseUI.createProactiveJoinDialog(true);
            }
            event.preventDefault();
        });

        // show a tooltip for the configuration panel
		try{
			$('#configLink').tooltip();
			$('.configButton').tooltip();
		}catch(e) { }


        // Set jQuery UI button
        //$('.button').button();

        // hide the alert header and shake the chat tab
        $('#chatJavaScriptAlertHeader').hide();
        chatUI.shakeChatTab();
        
        chatUI.markElAsRequired("#firstNameLabel", chatConfig.requireFirstName);
		chatUI.markElAsRequired("#lastNameLabel", chatConfig.requireLastName);
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
        
    },
	
	printTranscript : function(){
		// https://stackoverflow.com/questions/2255291/print-the-contents-of-a-div
		var win = window.open('', 'PRINT', 'height=400,width=600');

		win.document.write('<html><head><title>Chat Transcript</title>');
		
		win.document.write('<link rel="stylesheet" type="text/stylesheet" href="' + webChat.cdnLocation + 'presidio-avaya/chat-main-1.0.css" />');
		
		win.document.write('</head><body >');
		win.document.write('<h1>Chat Transcript</h1>');
		win.document.write(document.getElementById('messages').innerHTML);
		win.document.write('</body></html>');
		win.document.close(); // necessary for IE >= 10
		win.focus(); // necessary for IE >= 10*/
		win.print();
		win.close();
		return true;
	},
	
	copyTranscript : function(){
		// https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html

		// This function expects an HTML string and copies it as rich text.

		// Create container for the HTML
		// [1]
		var container = document.createElement('div')
		container.innerHTML = '<style>body{ background-color: transparent !important; }</style>' + document.getElementById('messages').innerHTML;
		console.log(container.innerHTML.length);
		// Hide element
		// [2]
		container.style.position = 'fixed'
		container.style.pointerEvents = 'none'
		container.style.opacity = 0

		// Detect all style sheets of the page
		var activeSheets = Array.prototype.slice.call(document.styleSheets)
		.filter(function (sheet) {
		  return !sheet.disabled
		});

		// Mount the container to the DOM to make `contentWindow` available
		// [3]
		document.body.appendChild(container);

		// Copy to clipboard
		// [4]
		window.getSelection().removeAllRanges();

		var range = document.createRange();
		
		range.selectNode(container);
		
		window.getSelection().addRange(range);

		// [5.1]
		document.execCommand('copy');

		// [5.2]
		//for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true;

		// [5.3]
		//document.execCommand('copy');

		// [5.4]
		//for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = false

		// Remove the container
		// [6]
		document.body.removeChild(container)
	}

};
