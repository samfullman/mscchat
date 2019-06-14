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
	panelStyleMaximized : '',
	requirementsSet : false,
	reasonOptionsSet : false,
	chatPostInstructionsSet : false,
	
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
    changeToChatMode : function(formNotNeeded) {
        'use strict';
		
		if(formNotNeeded){
			//we don't need a fade-in, hard set the condition
			console.log('called!');
			$('#chatForm').hide();
			$('#chatInterfaceWrap').show();
		}
		
		if(chatUI.panelStartingHeight){
			console.log('maintaining panel height');
			console.log(document.getElementById('chatPanel').style.height = chatUI.panelStartingHeight + 'px');
		}else{
			var width = Math.min( 475, $(window).width() - 20 );
			$('#chatPanel').dialog({
				width : width,
				dialogClass : 'fixedPosition presav-chatPanel',
				open: function(event, ui){
					console.log('dialog re-opened');

					var resizeCalled = false, box = document.getElementsByClassName('presav-chatPanel')[0];
					if(box.style.width > $(window).width()){
						resizeCalled = true;
						//re-position the panel x-wise
						var winwidth = parseInt($(window).width());
						box.style.width = (winwidth - 10) + 'px';
						box.style.left = '5px';
					}

					//2019-04-29
					if(typeof localStorage !== 'undefined' && localStorage.panelStartingTop){
						$('#chatPanel').parent().css('top', localStorage.panelStartingTop);
					}
					webChat.chatPanelMaximize();
					webChat.chatPanelConfigureMinimize();
				},
				close: function(event, ui){
					console.log('dialog closed after page nav');
					if (webSocket !== undefined ) {
						console.log('calling closePanel (2)');
						chatUI.closePanel(event);    
					}
					$('#liveChatLink').show();
				}
			});
		}
        $('#chatForm').fadeOut(400);
        $('#chatInterfaceWrap').delay(400).fadeIn(400);
        
        //we do not Cobrowse, this has been commented out - besides you can only have one id
		//$('#chatPanel').dialog('widget').attr('id', 'chatPanelHidden');    
    },

    /**
     * Changes the chat panel to login mode.
     */
    changeToLoginMode : function() {
        'use strict';
        $('#chatInterfaceWrap').fadeOut(400);
        $('#chatForm').delay(400).fadeIn(400);
		// SF: 2019-03-21 this is suspicious, will the open and close bindings be there or be overridden?
		var width = Math.min( 475, $(window).width() - 20 );
        $('#chatPanel').dialog({
            width : width,
			dialogClass : 'fixedPosition presav-chatPanel',
        });
    },

    resetChatUI : function() {
        'use strict';
        chatUI.changeToLoginMode();
		// here is where after 5-6 hops we finally close the actual HTML UI..
        $('#chatPanel').dialog('close');
		chatUI.showLiveChat();
    },
	
	showLiveChat : function(){
		// SF: 2019-03-21 we want to show this only if it is appropriate to show it.  If we close the chat panel and chat has since become unavailable, the chatPanel is not designed to notify of this fact.  This is a demarcation that should be on the Live Chat button itself (showing and detecting if chat is available and if not popping up a I'm sorry we missed you message).  This is poorly demarcated between the v4-chat.js API and what Presidio did on the reference client
		// @todo: improve the logic on this
		$('.bottom_chat_btn').fadeIn(400);
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
		console.log('step 1');
        avayaGlobal.log.debug("WebChat: closing chat panel");

        // when the chat dialog is closed, reset things
        // $('#liveChatLink').show();
        chatSocket.clearRefresh();
        chatSocket.manualClose = true;
        clearTimeout(chatSocket.closeTimer);
		console.log('webSocket.readyState = ' + webSocket.readyState);
        if (webSocket.readyState !== 2) {
			console.log('quitting chat');
            webChat.quitChat();
        }
    },

    /**
     * Sets up the UI code.
     */
    setup : function() {
        'use strict';
		
		$(document).ready(function(){
			if(!chatUI.chatPostInstructionsSet && webChat.settings.chatPostInstructions){
				chatUI.chatPostInstructionsSet = true;
				$('#chatPostInstructions').html(webChat.settings.chatPostInstructions);
			}
			
			if(!chatUI.reasonOptionsSet && webChat.settings.reasonOptions){
				chatUI.reasonOptionsSet = true;
				console.log('Appending reason field options');
				for(var i in webChat.settings.reasonOptions){
					var a = webChat.settings.reasonOptions[i];
					$('#reason').append('<option value="' + a[0] + '">' + a[1] + '</option>');
				}
			}
		});

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
        
		if(!chatUI.requirementsSet){
			chatUI.requirementsSet = true;
			chatUI.markElAsRequired("#firstNameLabel", chatConfig.requireFirstName);
			chatUI.markElAsRequired("#lastNameLabel", chatConfig.requireLastName);
			chatUI.markElAsRequired("#emailLabel", chatConfig.requireEmail);
			chatUI.markElAsRequired("#phoneLabel", chatConfig.requirePhone);
			chatUI.markElAsRequired('#reasonLabel', chatConfig.requireReason);
		}
    },
    
    /**
     * Reload the chat panel after a refresh
     */
    reloadChatPanel: function() {
        'use strict';
        console.log("Reloading chat panel");
        chatUI.changeToChatMode(true);
        
    },
	
	printTranscript : function(){
		// https://stackoverflow.com/questions/2255291/print-the-contents-of-a-div
		var win = window.open('', 'PRINT', 'height=400,width=600');

		win.document.write('<html><head><title>Chat Transcript</title>');
		
		win.document.write('<link rel="stylesheet" type="text/stylesheet" href="' + webChat.cdnLocation + 'global/presidio-avaya/chat-main-1.0.css" />');
		
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
