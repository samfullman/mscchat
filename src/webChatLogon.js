/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * 
 * Defines the functionality for the logon window
 */

var chatLogon = {

    /**
    * The attributes for the chat. There is a known issue where Work Assignment does not accept any contact
    * whose contextId has more than 10 attributes associated with it. Those attributes include this array *AND*
	* 
	* Removed the attributes - it must be passed in the `reason` field, or in webChat.settings.reasonIfBlank
    */
    attributes : [],

    // workaround for ED having issues with more than 10 attributes per context ID.
    attributeCount : 1,
    maxAttributes : 10,

    contactTypeMenu : null,
    openChatButton : null,
	
	clearAttributes : function(){
		chatLogon.attributes = [];
	},

    /**
     * Logs the customer into the chat.
     */
    logon : function(firstName, lastName, email, phoneCountry, phoneArea, phoneNumber) {
        'use strict';
        chatUI.changeToChatMode();
        webChat.initChat(true, firstName, lastName, email, phoneCountry, phoneArea, phoneNumber);
    },
    
    /**
     * Check the email validity while the customer is typing. Called from the email type input itself.
     * @param {HTMLElement} el - an email type input.
     */
    checkEmailValidity: function(el) {
        'use strict';
        var isEmailValid = el.checkValidity() && el.value.trim().length > 0;
        console.log("Is email " + el.value + " valid? " + isEmailValid);
        avayaGlobal.getEl("transcript-chat").disabled = !isEmailValid;    
        
        if (!isEmailValid) {
            avayaGlobal.getEl("transcript-chat").checked = false;    
        }
        
    },
	
    validatePhone : function() {
        'use strict';
        // get the phone number and validate it here.
        var phoneCountry = avayaGlobal.getEl("phone-country");
        var phoneArea = avayaGlobal.getEl("phone-area");
        var phone = avayaGlobal.getEl('phone-chat');
        var isValidNumber = chatLogon.isValidNumber(phoneCountry, phoneArea, phone);
		
        // Check if the phone number is valid. Note: some countries (e.g. Singapore) don't use area codes.
        // Allow blank if no phone number required
        return (isValidNumber || 
               (phoneCountry.value + phoneArea.value + phone.value === '' && !chatConfig.requirePhone));
	},
     
    /**
     * Gathers the customer's details before logging them in.
     */
    gatherDetails : function() {
        'use strict';
        var isStringEmpty = avayaGlobal.isStringEmpty;
        var l_user = avayaGlobal.getEl('user-chat').value, l_user_last = avayaGlobal.getEl("user-chat-last").value, l_email = avayaGlobal.getEl('email-chat').value;
	
		// gather custom fields
		var reason = avayaGlobal.getEl("reason").value;
		if(!reason && webChat.settings.reasonIfBlank){
			reason = webChat.settings.reasonIfBlank;
		}

        var errors = '';
        
        if (chatConfig.requireEmail) {
            if (isStringEmpty(l_email)) {
                errors += "A valid email address is required\n";    
            }
        }

        if (!chatLogon.validatePhone()) {
            errors += 'A valid phone number is required\n';
        }
		
        // check if the name is too long
		var firstlasterror = false;
        if (l_user.length > 50) {
            errors += 'Your name is too long. It must be less than 50 characters\n';
        }
        else if (chatConfig.requireFirstName && isStringEmpty(l_user)) {
			firstlasterror = true;
        }
        
        if (l_user_last.length > 100) {
            errors += 'Your surname is too long. It must be less than 100 characters\n';
        }
        else if (chatConfig.requireLastName && isStringEmpty(l_user_last)) {
			firstlasterror = true;
        }
		if(firstlasterror){
            errors += "You must provide a first name and last name\n";
		}
        
        if (!reason) {
            errors += "Please select what you need help with\n";
        }
				
        if (errors === '') {
			// Modified by Sam, simplified
			chatLogon.reason = reason;
			chatLogon.mscattribute = reason;

            var phoneCountryVal = avayaGlobal.getEl("phone-country").value;
            var phoneAreaVal = avayaGlobal.getEl("phone-area").value;
            var phoneVal = avayaGlobal.getEl('phone-chat').value;
            
			webChat.addCustomFields(reason);    
			
			if(_MSCGlobal_.userType === 'R'){
				webChat.addCustomFields('sessionId', 'abc123def987');
				webChat.addCustomFields('original_user', _MSCGlobal_.firstName + ' ' + _MSCGlobal_.lastName);
				webChat.addCustomFields('original_email', _MSCGlobal_.email);
				webChat.addCustomFields('original_phone', _MSCGlobal_.phoneNumber);
			}
            
            avayaGlobal.setSessionStorage('user', l_user);
            avayaGlobal.setSessionStorage('user_last', l_user_last);
            avayaGlobal.setSessionStorage('phone', phoneVal);
            avayaGlobal.setSessionStorage('email', l_email);

			oceanaCoreData.initialise();
			chatLogon.addAttribute(chatLogon.mscattribute);
			
			console.log('Webchat: Adding CS data and Inititialzing of OCP completed');
            chatLogon.logon(l_user, l_user_last, l_email, phoneCountryVal, phoneAreaVal, phoneVal);
        } else {
            var message = "Please correct the following errors:\n" + errors;
            chatUI.showLoginErrors(message);
        }

    },

/**
	 *	Update the context in CS before logging in
	 */
	addContextData: function(){
		'use strict';
		
		// get the users details here. Note: there is probably a simpler way to do this, but this works.
		
		var l_user = avayaGlobal.getEl('user-chat').value, l_user_last = avayaGlobal.getEl("user-chat-last").value, l_email = avayaGlobal.getEl('email-chat').value;
		var phoneCountry = avayaGlobal.getEl("phone-country").value;
        var phoneArea = avayaGlobal.getEl("phone-area").value;
        var phone = avayaGlobal.getEl('phone-chat').value;
		// Removed
		// var comments = avayaGlobal.getEl('pageTopic').value;
		var comments = '';

		var data = JSON.stringify({
				"groupId" : customerJourneyCommon.customerId,
                "persistToEDM" : true,
			  "data": {
				"FirstName": l_user,
				"LastName": l_user_last,
				"PhoneAreacode": phoneArea,
				"Phone": phone,
				"RoutingAtrribute": chatLogon.mscattribute,
				"Reason": chatLogon.reason,
				"Comments": comments,
				"Email": l_email
			  }
			});

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
				
				// commented out things relating to the original POST method. Remove later
//				customerJourneyCommon.setContextId(JSON.parse(this.response).data.contextId);
//				avayaGlobal.setSessionStorage('contextId', (JSON.parse(this.response).data.contextId));
//				avayaGlobal.log.info('webchatLogon: Created and set Context ID in CJ now ' + customerJourneyCommon.contextId);
//				avayaGlobal.log.info('webchatLogon: Created and set Context ID in AvayaGlobal = ' + avayaGlobal.getSessionStorage('contextId'));
				//chatLogon.logon(user, email, phone);
				chatLogon.logon(l_user, l_user_last, l_email, phoneCountry, phoneArea, phone);

			}
		});

		
		//avayaGlobal.log.info('CustomerJourney: Context ID  for upsert ' + avayaGlobal.getSessionStorage('contextId');
		
		console.log('CustomerJourney: Context ID  for upsert ' + avayaGlobal.getSessionStorage('contextId'));
		xhr.open("PUT", (links.secureAllConnections ? 'https://' : 'http://') + links.contextStoreHost + "/services/ContextStoreRest/cs/contexts/upsert/" + avayaGlobal.getSessionStorage('contextId') + "?touchpoint=WEB");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.send(data);
		
		// not needed
		//setTimeout('',5000);

	},

    
    /**
     * Verifies that the phone number is valid using a regex.
     * @param phoneCountry, phoneArea, phone
     * @returns {Boolean} true if the phone number is valid
     */

    isValidNumber : function(country, area, phone) {
        'use strict';
		        
        /*
         * This should approve any number that fits pattern of phone number fields
         * In the case of country code and area we also allow blank.
         */	
        var reCountry = new RegExp("^("+country.getAttribute("pattern")+"|)$");
        var reArea = new RegExp("^("+area.getAttribute("pattern") + "|)$");
        var rePhone = new RegExp("^"+phone.getAttribute("pattern")+"$");
		
        return reCountry.test(country.value) && reArea.test(area.value) && rePhone.test(phone.value);
    },

    /**
     * Add an attribute to the chat logon attributes. This does <em>not</em> affect Context Store.
     * @param newAttribute is a String that represents the attribute.
     */
    addAttribute : function(newAttribute) {
        'use strict';
        if (chatLogon.attributes.indexOf(newAttribute) < 0 && chatLogon.attributeCount < chatLogon.maxAttributes) {
            chatLogon.attributes.push(newAttribute);
            chatLogon.attributeCount++;
            chatLogon.saveAttributeCount();
        }
    },

    /**
     * Removes the specified attribute from the chat attributes. This does <em>not</em> affect Context Store.
     * @param oldAttribute is a String that represents the attribute to remove.
     */
    removeAttribute : function(oldAttribute) {
        'use strict';
        var index = chatLogon.attributes.indexOf(oldAttribute);
        chatLogon.attributes.splice(index, 1);
        if (chatLogon.attributeCount > 0) {
            chatLogon.attributeCount--;
            chatLogon.saveAttributeCount();
        }
    },

    /**
     * Save the total attribute count. Part of a workaround for OCPROVIDER-1206
     */
    saveAttributeCount : function() {
        'use strict';
        avayaGlobal.setSessionStorage('chatAttrCount', chatLogon.attributeCount);
    },

    loadAttributeCount : function() {
        'use strict';
        var attr = avayaGlobal.getSessionStorage('totalAttributes');
        chatLogon.attributeCount = attr !== null ? parseInt(attr) : 0;
    }
};
