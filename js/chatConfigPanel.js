/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Manages the chat configuration panel. This is separate to chatConfig.js so that this can simply be removed
 * to convert a test/demo site to production.
 */

(function(chatConfig, webChat, avayaGlobal, chatLogon, links, coBrowse, chatConfigPanel, $) {
    'use strict';

    var findElement = function(id) {
        return document.getElementById(id);
    };

    /**
     * Configure from localStorage for testing.
     */
    chatConfigPanel.loadConfig = function() {
        var settings = localStorage.getItem('chatSettings');
        var json = JSON.parse(settings);
        var location = links.getPathNameForConfig();

        // if the settings aren't null, use them
        if (json !== null) {

            var details = json[location];
            if (details !== undefined) {
                console.log('WebChat: Loading webChat config settings');
                var urls = details.urls;
                console.log('WebChat: URLs in config are ' + urls);
                webChat.workflowType = details.workflowType;
                webChat.routePointIdentifier = details.routePointIdentifier;
                links.webChatHost = urls.webChatHost;
                links.contextStoreHost = urls.contextStoreHost;
                links.coBrowseHost = urls.coBrowseHost;
                links.secureAllConnections = urls.secureAllConnections;
                chatLogon.attributes = details.attributes;
                chatConfig.maxNumberOfRetries = parseInt(details.maxConnectionAttempts);
                chatConfig.retryInterval = parseInt(details.reconnectionFrequency);
                chatConfig.refreshTimeoutSeconds = parseInt(details.refreshTimeout);
                
                chatConfig.requireFirstName = details.requireFirstName;
                chatConfig.requireLastName = details.requireLastName;
                chatConfig.requireEmail = details.requireEmail;
                chatConfig.requirePhone = details.requirePhone;

                // if coBrowse isn't included on the page, don't bother.
                if (coBrowse !== undefined) {
                    coBrowse.isSecure = (urls.secureAllConnections !== undefined ? urls.secureAllConnections : false);
                }

                if (json.coBrowseEnabled !== undefined) {
                    webChat.coBrowseEnabled = details.coBrowseEnabled;
                }
            }

        }

        // update the settings now
        findElement('webChatUrlInput').value = links.webChatHost;
        findElement('contextStoreHostInput').value = links.contextStoreHost;
        findElement('coBrowseHostInput').value = links.coBrowseHost;
        findElement('workflowInput').value = webChat.workflowType;
        findElement('routepointInput').value = webChat.routePointIdentifier;
        for (var i = 0; i < chatLogon.attributes.length; i++) {
            addAttributeEntry(chatLogon.attributes[i]);
        }
        findElement('coBrowseEnabledInput').checked = webChat.coBrowseEnabled;
        findElement('connectionAttemptsInput').value = chatConfig.maxNumberOfRetries;
        findElement('connectionFrequencyInput').value = (chatConfig.retryInterval / 1000);
        findElement('connectionIdleTimeout').value = chatConfig.refreshTimeoutSeconds;

        // if the page is served over HTTPS, there is no point allowing the user
        // to configure unsecure URLs; the browser will refuse the connection.
        if (links.isPageSecure()) {
            avayaGlobal.log.info('WebChat: Secure page, disabling secure connections not allowed');
            findElement('toggleSecurityButton').style.display = 'none';
        }
        
        findElement("toggleRequireFirstName").checked = chatConfig.requireFirstName;
        findElement("toggleRequireLastName").checked = chatConfig.requireLastName;
        findElement("toggleRequireEmail").checked = chatConfig.requireEmail;
        findElement("toggleRequirePhone").checked = chatConfig.requirePhone;
    };

    /**
     * Save the WebChatConfig to localStorage for testing.
     */
    chatConfigPanel.saveConfig = function() {
        console.log('WebChat: Saving webChat config');
        links.webChatHost = findElement('webChatUrlInput').value;
        links.contextStoreHost = findElement('contextStoreHostInput').value;
        links.coBrowseHost = findElement('coBrowseHostInput').value;
        webChat.workflowType = findElement('workflowInput').value;
        webChat.routePointIdentifier = findElement('routepointInput').value;
        webChat.coBrowseEnabled = findElement('coBrowseEnabledInput').checked;
        chatConfig.maxNumberOfRetries = findElement('connectionAttemptsInput').value;
        chatConfig.retryInterval = findElement('connectionFrequencyInput').value * 1000;
        chatConfig.refreshTimeoutSeconds = findElement('connectionIdleTimeout').value;

        // save the details to a JSON object
        var details = {
            'urls' : {
                'webChatHost' : links.webChatHost,
                'contextStoreHost' : links.contextStoreHost,
                'coBrowseHost' : links.coBrowseHost,
                'secureAllConnections' : links.secureAllConnections
            },
            'attributes' : chatLogon.attributes,
            'workflowType' : webChat.workflowType,
            'routePointIdentifier' : webChat.routePointIdentifier,
            'coBrowseEnabled' : webChat.coBrowseEnabled,
            'maxConnectionAttempts' : chatConfig.maxNumberOfRetries,
            'reconnectionFrequency' : chatConfig.retryInterval,
            'refreshTimeout' : chatConfig.refreshTimeoutSeconds,
            'requireFirstName' : chatConfig.requireFirstName,
            'requireLastName' : chatConfig.requireLastName,
            'requirePhone' : chatConfig.requirePhone,
            'requireEmail' : chatConfig.requireEmail
        };

        // get the location of the page, and save the details as being specific to this lab.
        var location = links.getPathNameForConfig();
        var json = {};
        json[location] = details;

        localStorage.setItem('chatSettings', JSON.stringify(json));
        chatUI.showAlert('Configuration saved');
    };

    /**
     * Reset the configuration.
     */
    chatConfigPanel.resetConfig = function() {
        localStorage.setItem('chatSettings', null);
        chatUI.showAlert("Configuration reset. Please reload the page");
    };

    /**
     * Loads the help page
     */
    var loadCertsPage = function() {
        window.open('temporarilyAcceptLabCerts.html');
    };

    var toggleUrls = function() {
        $('#urlsListDiv').toggle('fold');
        resizeConfigPanel();
    };

    var toggleAttributes = function() {
        $('#attributesListDiv').toggle('fold');
        resizeConfigPanel();
    };

    var toggleConfig = function() {
        $('#chatConfigDiv').toggle('fold');
        resizeConfigPanel();
    };

    var toggleCoBrowse = function() {
        $('#coBrowseConfigDiv').toggle('fold');
        resizeConfigPanel();
    };

    var toggleReconnectionSettings = function() {
        $('#reconnectionConfigDiv').toggle('fold');
        resizeConfigPanel();
    };

    /**
     * Resize the config panel.
     */
    var resizeConfigPanel = function() {
        window.chatUI.resizeConfigPanel();
    };

    /**
     * Toggle secure connections.
     */
    var toggleSecureConnections = function() {
        chatConfig.useSecureUrls = !chatConfig.useSecureUrls;

        // prevent the user from setting unsecure URls on a secure page.
        if (window.location.protocol === 'https:') {
            avayaGlobal.log
                    .info('WebChat: Browsers will not allow unsecure URLs on a secure page. Forcing all URLs to HTTPS');
            chatConfig.useSecureUrls = true;
        }

        setupUrls(chatConfig.useSecureUrls);
    };

    var setupUrls = function(isSecure) {
        var button = findElement('toggleSecurityButton');

        // can adjust these immediately
        links.secureContextStore = isSecure;
        coBrowse.isSecure = isSecure;

        if (isSecure) {
            button.textContent = "Disable Secure Connections";
            links.secureAllConnections = true;
        } else {
            button.textContent = "Enable Secure Connections";
            links.secureAllConnections = false;
        }
    };

    /**
     * Add a new row to the attributes table. These are automatically added into the chat attributes.
     * @param attribute
     */
    var addAttributeEntry = function(attribute) {
        console.log('WebChat: Adding ' + attribute + ' to the table');
        if (avayaGlobal.isStringEmpty(attribute)) {
            console.warn('WebChat: Cannot have empty attributes!');
            return;
        }

        // create the elements
        var table = findElement('attributesTable');
        var newRow = document.createElement('tr');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var input = document.createElement('input');
        var button = document.createElement('button');

        button.onclick = function() {
            removeAttributeEntry(table, newRow);
        };
        button.textContent = 'Remove';
        button.className = 'button configButton';
        input.value = attribute;
        input.disabled = true;
        cell1.appendChild(input);
        cell2.appendChild(button);
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        table.appendChild(newRow);
        chatLogon.addAttribute(attribute);
    };

    /**
     * Insert a new attribute. This is called from the HTML page.
     */
    var insertNewAttribute = function() {
        var newAttr = findElement('newAttributeInput').value;
        console.log('WebChat: Inserting new attribute: ' + newAttr);

        if (chatLogon.attributes.indexOf(newAttr) >= 0) {
            console.warn('WebChat: The attribute ' + newAttr + ' already exists!');
            return;
        }

        addAttributeEntry(newAttr);
    };

    /**
     * Removes the specified entry from the table.
     * @param table
     * @param entry
     */
    var removeAttributeEntry = function(table, entry) {
        var attribute = entry.children[0].children[0].value;
        console.log('WebChat: Removing attribute: ' + attribute);
        chatLogon.removeAttribute(attribute);
        table.removeChild(entry);
    };
    
    chatConfigPanel.toggleCustomData = function(){
        $('#customDataInputDiv').toggle('fold');
        resizeConfigPanel();
    };
    
    /**
     * Loads custom data from the panel for Watson integration. 
     */
    chatConfigPanel.loadCustomData = function() {
        var dataString = avayaGlobal.getEl('customDataInput').value;
        avayaGlobal.log.debug("WebChat: custom data is ", dataString);
        try {
            webChat.customData = JSON.parse(dataString);
        } catch (syntaxError) {
            avayaGlobal.log.error("WebChat: the string is not valid JSON! ", syntaxError);
            chatUI.showAlert("This is not valid JSON!");
        }
    };
    
    var toggleRequireFirstName = function(){
        var isChecked = this.checked;
        console.log("Is firstname required? ", isChecked);
        chatConfig.requireFirstName = isChecked;
    };
    
    var toggleRequireLastName = function() {
        var isChecked = this.checked;
        console.log("Is lastname required? ", isChecked);
        chatConfig.requireLastName = isChecked;
    };
    
    var toggleRequireEmail = function(){
        var isChecked = this.checked;
        console.log("Is email required? ", isChecked);
        chatConfig.requireEmail = isChecked;
    };
    
    var toggleRequirePhone = function(){
        var isChecked = this.checked;
        console.log("Is email required? ", isChecked);
        chatConfig.requirePhone = isChecked;
    };
    
    var toggleRequiredContactDetails = function(){
        $('#requireContactDetailsDiv').toggle('fold');
        resizeConfigPanel();
    };

    /**
     * Public function to set up the configuration panel.
     */
    chatConfigPanel.setup = function() {
        chatConfigPanel.loadConfig();

        // set up event listeners to avoid onclick handlers in HTML (bad practice)
        findElement("toggleUrls").addEventListener("click", toggleUrls);
        findElement("toggleSecurityButton").addEventListener("click", toggleSecureConnections);
        findElement("toggleAttributes").addEventListener("click", toggleAttributes);
        findElement("addAttributeButton").addEventListener("click", insertNewAttribute);
        findElement("toggleWorkflow").addEventListener("click", toggleConfig);
        findElement("toggleReconnectionSettings").addEventListener("click", toggleReconnectionSettings);
        findElement("toggleCoBrowse").addEventListener("click", toggleCoBrowse);
        findElement("loadCertsPage").addEventListener("click", loadCertsPage);
        findElement("requestEwt").addEventListener("click", chatConfig.requestEwt);
        findElement("showChatPanel").addEventListener("click", chatConfig.showChatPanel);
        findElement("initCobrowse").addEventListener("click", chatConfig.initCobrowse);
        findElement("saveConfig").addEventListener("click", chatConfigPanel.saveConfig);
        findElement("resetConfig").addEventListener("click", chatConfigPanel.resetConfig);
        findElement("toggleRequiredContactDetails").addEventListener("click", toggleRequiredContactDetails);
        findElement("toggleRequireFirstName").addEventListener("click", toggleRequireFirstName);
        findElement("toggleRequireLastName").addEventListener("click", toggleRequireLastName);
        findElement("toggleRequirePhone").addEventListener("click", toggleRequirePhone);
        findElement("toggleRequireEmail").addEventListener("click", toggleRequireEmail);

        $('.button').button();
    };

    return chatConfigPanel;
    
})(window.chatConfig, window.webChat, window.avayaGlobal, window.chatLogon,
        window.links, window.coBrowse, window.chatConfigPanel = window.chatConfigPanel || {},
        window.jQuery);