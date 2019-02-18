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
    */
    attributes : [ 'Location.Inhouse' ],

    // workaround for ED having issues with more than 10 attributes per context ID.
    attributeCount : 1,
    maxAttributes : 10,

    contactTypeMenu : null,
    openChatButton : null,

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
        var customFieldTitle = avayaGlobal.getEl("customFieldTitle").value;
        var customFieldValue = avayaGlobal.getEl("customFieldValue").value;

        var errors = '';
        
        if (chatConfig.requireEmail) {
            console.log("Email required!");
            if (isStringEmpty(l_email)) {
                errors += "A valid email address is required\n";    
            }
            
        }

        if (!chatLogon.validatePhone()) {
            errors += 'A valid phone number is required\n';
        }

        // check if the name is too long
        if (l_user.length > 50) {
            errors += 'Your name is too long. It must be less than 50 characters\n';
        }
        else if (chatConfig.requireFirstName && isStringEmpty(l_user)) {
            errors += "You must provide a first name and last name\n";
        }
        
        if (l_user_last.length > 100) {
            errors += 'Your surname is too long. It must be less than 100 characters\n';
        }
        else if (chatConfig.requireLastName && isStringEmpty(l_user_last)) {
            errors += "You must provide a first name and last name\n";
        }
        
        if (customFieldTitle.length > 50) {
            errors += "Custom Fields titles must be less than 50 characters\n";
        }
        if (customFieldValue.length > 255) {
            errors += "Custom Fields values must be less than 255 characters\n";
        }
        if (isStringEmpty(customFieldTitle) && ! isStringEmpty(customFieldValue)) {
            errors += "A custom field cannot have an empty title\n";
        }

        if (errors === '') {
            var phoneCountryVal = avayaGlobal.getEl("phone-country").value;
            var phoneAreaVal = avayaGlobal.getEl("phone-area").value;
            var phoneVal = avayaGlobal.getEl('phone-chat').value;
            
            // do not add empty custom fields
            if (!isStringEmpty(customFieldTitle)) {
                webChat.addCustomFields(customFieldTitle, customFieldValue);    
            }
            
            avayaGlobal.setSessionStorage('user', l_user);
            avayaGlobal.setSessionStorage('user_last', l_user_last);
            avayaGlobal.setSessionStorage('phone', phoneVal);
            avayaGlobal.setSessionStorage('email', l_email);
            chatLogon.logon(l_user, l_user_last, l_email, phoneCountryVal, phoneAreaVal, phoneVal);
        } else {
            var message = "Please correct the following errors:\n" + errors;
            chatUI.showLoginErrors(message);
        }

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
