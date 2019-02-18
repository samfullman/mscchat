/**
 * Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 *
 *	Self-contained file to add a widget for a link to the SMSVendorSnapin.
 *	Requires the following files/libraries:
 *	- webChat.js
 *	- links.js
 *	- jQuery UI
 */
(function(webChat, links, smsWidget, $){
    'use strict';
	
    var smsVendorPath = "/services/SMSVendorSnapin/SMSTest.html";
    var smsIconPath = "smsVendorLinkElements/smsChat.jpg";
    var smsDivId = "smsVendorSnapinLink";
    var contactCentreNumber = "0871111111";
	
    /**
     *	Create the widget elements.
     */
    var createElements = function() {
        var smsDiv = document.createElement("div");
	smsDiv.title = "Click to open the SMSVendorSnapin";
	smsDiv.id = smsDivId;
	smsDiv.onclick = openSmsVendorPage;
		
	// set up the icon that the user sees
	var smsIcon = document.createElement("img");
	smsIcon.src = smsIconPath;
	smsDiv.appendChild(smsIcon);
	document.body.appendChild(smsDiv);
		
	// use jQuery UI to give it a shinier tooltip
	$("#"+smsDivId).tooltip();
    };
	
    /**
     *	Opens the SMS Vendor Snapin in a new tab.
     */
    var openSmsVendorPage = function() {
    	var webChatHost = links.webChatHost;
		
	// If the webChatHost isn't valid, alert the user
	if (webChatHost.trim() === '' || webChatHost.trim().indexOf("localhost") > -1) {
            alert ("The hostname for the SMSVendorSnapin is invalid! Check the webChatHost variable in links.js or configuration panel");
            return;
	}
		
	var protocol = links.secureAllConnections ? "https://" : "http://";
	var url = protocol + webChatHost + smsVendorPath;
	console.log("Opening SMSVendorSnapin. URL is " + url);
	var newWindow = window.open(url);
        
        // if the customer set a phone number, send it to the SMSVendorSnapin
        if (webChat.g_phone.trim().length > 0) {
            
            // get the origin of the SMSVendorSnapin
            // If running locally, the origin will be the string "null"
            var origin = protocol + webChatHost;
            if (origin === null || origin === "null") {
                origin = "*";
            }
            
            sendPhoneNumber(newWindow, webChat.g_phone, contactCentreNumber, origin);    
        }
        
    };
    
    /**
     * Post a message to the specified window.
     * See @link https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage 
     * @param {Window} smsWindow
     * @param {String} custPhone -  the customer's phone number.
     * @param {String} contactCentrePhone - the "To" field in the SMSVendorSnapin
     * @param {String} origin - what the origin must be. This can be "*" (all origins), but for security reasons this should not be used
     * @returns {undefined}
     */
    var sendPhoneNumber = function(smsWindow, custPhone, contactCentrePhone, origin) {
        var message = {
            "from": custPhone,
            "to" : contactCentrePhone
        };
        
        // use a brief delay to make sure the page is loaded.
        setTimeout(function(){
            smsWindow.postMessage(message, origin);    
        }, 2000);
        
    };
	
    /**
     *	Set up the widget.
     */
    var setup = function(){

        console.log("Setting up SMS Link widget");

	// catch any attempt to use this on a page that doesn't include chat
	if (webChat === undefined || links === undefined) {
            alert("This must be included on a page that includes Avaya Web Chat!");
            return;
	}
		
	createElements();
    };
    
    /**
     * Public method to set the contact centre phone number
     * @param {String} phone
     * @returns {undefined}
     */
    smsWidget.setPhoneNumber = function(phone){
        contactCentreNumber = phone;
    };
    
    /**
     * Public method to return the contact centre's SMS number.
     * @returns {phone|contactCentrePhone}
     */
    smsWidget.getPhoneNumber = function() {
        return contactCentreNumber;
    };
	
    // set up the widget when the rendering is finished
    setTimeout(setup, 0);

    return smsWidget;
	
})(window.webChat, window.links, window.smsWidget = window.smsWidget || {}, window.jQuery);
