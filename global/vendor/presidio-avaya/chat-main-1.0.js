/* Presidio concatenated file sfullman@presidio.com.  File manifest: 
    _AVAYA_HTML_.html
    libs/xmlToJSON.js
    avayaGlobal.js
    links.js
    webChatConfig.js
    webChatLogon.js
    webChatUI.js
    webChatSocket.js
    estimatedWaitTime.js
    webChat.js
    oceanaCoreData.js
    customerJourneyCommon.js
*/
/* ---- File (1): _AVAYA_HTML_.html; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
var _AVAYA_HTML_ = 
'<!-- ' + 
'This HTML is compiled by src/compile.php into a single JS variable _AVAYA_HTML_' + 
'note that jQuery UI will build HTML "around" a div that is specified as a dialog.  This is nice but makes overriding styling difficult.  .chatAssets provides an ancestor for better control of .ui elements if needed/wanted' + 
'-->' + 
'<!-- CHAT PANEL --> ' + 
'<div id="chatPanel" title="MSC Live Chat"> ' + 
    '<!-- Login form --> ' + 
    '<div id="chatForm"> ' + 
        '<div class="presav-chatInitLogo"> ' + 
            '&nbsp;' + 
        '</div> ' + 
        '<div class="pres-chatInitInstructions"> ' + 
            'Please complete the following information to chat live now! ' + 
        '</div> ' + 
        '<div class="presav-notice"> ' + 
            '<sup class="presav-required">*</sup>Required field ' + 
        '</div> ' + 
        '<div class="formField"> ' + 
            '<div class="presav-w-50"> ' + 
                '<span id="firstNameLabel" class="formLabel">First Name</span><br /> ' + 
                '<input type="text" id="user-chat" maxLength="50" title="Max length 50 characters"> ' + 
            '</div> ' + 
            '<div class="presav-w-50"> ' + 
                '<span id="lastNameLabel" class="formLabel">Last Name</span><br /> ' + 
                '<input type="text" id="user-chat-last" maxLength="50" title="Max length 50 characters"> ' + 
            '</div> ' + 
        '</div> ' + 
        '<div class="formLabel presav-cb" id="emailLabel">Email</div> ' + 
        '<div class="formField"> ' + 
            '<input type="text" id="email-chat" > ' + 
        '</div> ' + 
 '' + 
        '<div class="formLabel" id="phoneLabel">Phone</div> ' + 
        '<div class="formField"> ' + 
            '<div class="presav-w-50 phone-country-tip" style="width: 25%;"> ' + 
                '<input type="text" id="phone-country" placeholder="e.g. +1" maxLength="10" title="Country Code.\nFor example +1" pattern="[-+0-9]+"> ' + 
            '</div> ' + 
            '<div class="presav-w-50 phone-area-tip" style="width: 33%;"> ' + 
                '<input type="text" id="phone-area" placeholder="e.g. 904" maxLength="10" title="Area code. Numbers only.\nFor example 907" pattern="[0-9]+"> ' + 
            '</div> ' + 
            '<div class="presav-w-50 phone-chat-tip" style="width: 42%;"> ' + 
                '<input type="text" id="phone-chat" placeholder="e.g. 207-2231" maxLength="32" title="Phone number. Numbers only.\nFor example 555-1234" pattern="[-0-9]+"> ' + 
            '</div> ' + 
        '</div> ' + 
        '<!-- The Chat API requires this field. It will be used in a future release --> ' + 
        '<div class="formLabel addressClass">Address (optional)</div> ' + 
        '<div class="formField addressClass"> ' + 
            '<input type="text" id="address-chat" value=""> ' + 
        '</div> ' + 
        '<div id="reasonLabel" class="formLabel presav-cb">I need help with...</div> ' + 
        '<div class="formField"> ' + 
            '<select id="reason"> ' + 
                '<option value="" selected> - Select One -</option> ' + 
            '</select> ' + 
        '</div> ' + 
		'<!-- Removed as we could not find a suitable field in Avaya to show here' + 
        '<div class="formLabel">Comments</div> ' + 
        '<div class="formField"> ' + 
            '<input type="text" id="pageTopic" maxLength="255" title="Denotes a topic for the contact" placeholder="e.g. Tool specifications"> ' + 
        '</div> ' + 
		'-->' + 
        '<div class="presav-w-50"> ' + 
            '<!-- <button id="openbutton-chat" onclick="chatLogon.gatherDetails()" class="button">Chat Now</button> -->	' + 
			'<button id="openbutton-chat" onclick="chatLogon.gatherDetails()" class="button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">Chat Now</span></button>' + 
        '</div> ' + 
        '<div class="presav-w-50" style="margin-top: 12px;"> ' + 
            '<label class="presav-checkbox-label"><input type="checkbox" id="transcript-chat"> Email me the chat transcript</label> ' + 
        '</div> ' + 
        '<div id="loginErrorsDiv"></div> ' + 
        '<div class="formLabel"></div> ' + 
        '<div id="chatPostInstructions" class="presav-chatPostInstructions"> ' + 
             '' + 
        '</div> ' + 
    '</div>' + 
	'<!-- #chatInterface is display: flex so we need this to hide/show it -->' + 
	'<span id="chatInterfaceWrap">' + 
    '<!-- The chat interface, or what the user actually uses to chat with an agent --> ' + 
    '<div id="chatInterface"> ' + 
        '<!-- messages -->' + 
		'<div id="chatInterfaceHeader"> ' + 
			'<button type="button" class="chat-interface-print" onclick="chatUI.printTranscript()" tabindex="-1" title="Print a transcript of the chat"><span class="presav-base-icon presav-print"> </span>Print</button>' + 
			'<button type="button" class="chat-interface-copy" onclick="chatUI.copyTranscript()" tabindex="-1" title="Copy the chat transcript to clipboard"><span class="presav-base-icon presav-copy"> </span>Copy</button>' + 
		'</div>' + 
        '<div id="messages"></div> ' + 
		'<div id="otherThanMessages">' + 
        '<!-- participants --> ' + 
        '<div id="usersDiv"> ' + 
            '<div id="participants"> ' + 
                '<div class="hidden"> ' + 
                    '<img src="" class="hidden"> ' + 
                '</div> ' + 
                '<div class="hidden"> ' + 
                    '<img src="" class="hidden"> ' + 
                '</div> ' + 
                '<div class="hidden"> ' + 
                    '<img src="" class="hidden"> ' + 
                '</div> ' + 
            '</div> ' + 
        '</div> ' + 
        '<div id="controls"> ' + 
			'<div class="controls-user-message presav-w-50">' + 
				'<input type="text" id="outmessage" class="chatField" placeholder="Type your message here" maxlength="8000"> ' + 
			'</div>' + 
			'<div class="controls-user-submit presav-w-50">' + 
				'<!-- <button type="button" id="sendbutton-chat" onclick="webChat.sendChatMessage()" class="button">Send</button> -->' + 
				'<button type="button" id="sendbutton-chat" onclick="webChat.sendChatMessage()" class="button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false" disabled=""><span class="ui-button-text">Send</span></button>' + 
			'</div>' + 
        '</div> ' + 
		'<span>' + 
            '<button type="button" id="closebutton-chat" onclick="webChat.quitChat()" class="button">Close</button> ' + 
		'</span>' + 
		'</div>' + 
    '</div>' + 
	'</div>' + 
'</div> ' + 
'<!-- Generic div for a jQuery alert dialog --> ' + 
'<div id="alertDialog"></div> ' + 
'<!-- Configuration panel. Remove for production --> ' + 
'<div id="configPanel" class="configPanel" title="Web UI 3.5.0.0 Configuration"> ' + 
    '<div onclick="chatConfigPanel.toggleInfo()" class="configHeader"> ' + 
                '<span class="configHelpLink" ' + 
                      'title="This is a configuration panel for testing and configuring demos in a lab. It is not a deployment mechanism.">About this panel</span> ' + 
    '</div> ' + 
    '<div id="toggleUrls" class="configHeader"> ' + 
        '<span style="text-decoration: underline">Click here</span> to configure URLs ' + 
    '</div> ' + 
    '<div id="urlsListDiv" class="configCollapseDiv"> ' + 
        '<table> ' + 
            '<tr> ' + 
                '<td colspan="2"> ' + 
                    '<button id="loadCertsPage" class="configButton button">Accept certificates</button> ' + 
                '</td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td colspan="2"> ' + 
                    '<button class="configButton button" id="toggleSecurityButton" ' + 
                            'onclick="chatConfigPanel.toggleSecureConnections()">Enforce Secure Connections</button> ' + 
                '</td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" title="Covers WebChat and Estimated Wait Time">WebChat Host</td> ' + 
                '<td><input type="text" id="webChatUrlInput" placeholder="a.b.c.d" /></td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" ' + 
                    'title="Covers hosts for Customer Journey (Oceana Core Data Service, Customer Management)">Context ' + 
                                                                                                              'Store Host</td> ' + 
                '<td><input type="text" id="contextStoreHostInput" placeholder="e.f.g.h" /></td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" title="Covers Co-Browsing only">Co-Browsing Host</td> ' + 
                '<td><input type="text" id="coBrowseHostInput" placeholder="i.j.k.l" /></td> ' + 
            '</tr> ' + 
        '</table> ' + 
    '</div> ' + 
    '<div class="configHeader" id="toggleAttributes"> ' + 
        '<span style="text-decoration: underline">Click here</span> to configure attributes ' + 
    '</div> ' + 
    '<div id="attributesListDiv" class="configCollapseDiv"> ' + 
        '<table id="attributesTable"> ' + 
            '<tr id="newAttributeRow"> ' + 
                '<td><input id="newAttributeInput" placeholder="e.g. Language.English"></td> ' + 
                '<td><button class="button configButton" id="addAttributeButton">Add</button></td> ' + 
            '</tr> ' + 
        '</table> ' + 
    '</div> ' + 
    '<div class="configHeader" id="toggleWorkflow"> ' + 
        '<span style="text-decoration: underline">Click here</span> to configure workflow and routepoints ' + 
    '</div> ' + 
    '<div id="chatConfigDiv" class="configCollapseDiv"> ' + 
        '<table> ' + 
            '<tr> ' + 
                '<td>Workflow Type</td> ' + 
                '<td><input type="text" id="workflowInput" /></td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td>Routepoint Identifer</td> ' + 
                '<td><input type="text" id="routepointInput" /></td> ' + 
            '</tr> ' + 
        '</table> ' + 
    '</div> ' + 
    '<div class="configHeader" id="toggleReconnectionSettings"> ' + 
        '<span style="text-decoration: underline">Click here</span> to configure reconnections ' + 
    '</div> ' + 
    '<div id="reconnectionConfigDiv" class="configCollapseDiv"> ' + 
        '<table> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" ' + 
                    'title="How many times should the UI attempt to reconnect after losing connection during a chat">Maximum ' + 
                                                                                                                    'Reconnection Attempts</td> ' + 
                '<td><input type="number" min="1" id="connectionAttemptsInput" /></td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" ' + 
                    'title="How often should the UI attempt to reconnect after losing connection during a chat">Reconnection ' + 
                                                                                                               'Frequency (seconds)</td> ' + 
                '<td><input type="number" min="1" max="10" id="connectionFrequencyInput" /></td> ' + 
            '</tr> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" ' + 
                    'title="If the user leaves this page during a chat, how long should we retain the session before clearing it out?">Idle timeout (seconds)</td> ' + 
                '<td><input type="number" id="connectionIdleTimeout" value="180" /></td> ' + 
            '</tr> ' + 
        '</table> ' + 
    '</div> ' + 
    '<div class="configHeader" onclick="chatConfigPanel.toggleCustomData()"> ' + 
        '<span style="text-decoration:underline">Click here</span> to configure custom data (Watson) ' + 
    '</div> ' + 
    '<div id="customDataInputDiv" class="configCollapseDiv configHeader"> ' + 
        '<textarea id="customDataInput"></textarea> ' + 
        '<button class="button configButton" onclick="chatConfigPanel.loadCustomData()">Create custom data</button> ' + 
    '</div> ' + 
    '<div class="configHeader" id="toggleCoBrowse"> ' + 
        '<span style="text-decoration: underline">Click here</span> to configure Co-Browse ' + 
    '</div> ' + 
    '<div id="coBrowseConfigDiv" class="configCollapseDiv"> ' + 
        '<table> ' + 
            '<tr> ' + 
                '<td class="configHelpLink" ' + 
                    'title="If this is not enabled, an agent will not be able to initated a Co-Browsing session">Co-Browse Enabled</td> ' + 
                '<td><input type="checkbox" id="coBrowseEnabledInput"></td> ' + 
            '</tr> ' + 
        '</table> ' + 
    '</div> ' + 
    '<div class="configHeader" id="toggleRequiredContactDetails"> ' + 
        '<span style="text-decoration: underline">Click here</span> to toggle require contact details ' + 
    '</div> ' + 
    '<div id="requireContactDetailsDiv" class="configCollapseDiv"> ' + 
        '<input type="checkbox" id="toggleRequireFirstName" > ' + 
        '<label for="toggleRequireFirstName">Require first name</label> ' + 
        '<input type="checkbox" id="toggleRequireLastName" > ' + 
        '<label for="toggleRequireLastName">Require last name</label> ' + 
        '<input type="checkbox" id="toggleRequirePhone" > ' + 
        '<label for="toggleRequirePhone">Require phone number</label> ' + 
        '<input type="checkbox" id="toggleRequireEmail" > ' + 
        '<label for="toggleRequireEmail">Require Email</label> ' + 
    '</div> ' + 
    '<div class="configHeader"> ' + 
        '<button class="configButton button" id="requestEwt">Request Estimated Wait Time</button> ' + 
        '<button class="configButton button" id="showChatPanel" ' + 
                'title="Testing tool to skip EWT and queue a chat anyway">Show Chat Panel Anyway</button> ' + 
        '<button class="configButton button" id="initCobrowse">Initialise Co-Browse Library</button> ' + 
        '<button class="configButton button" id="saveConfig">Save Configuration</button> ' + 
        '<button class="configButton button" id="resetConfig">Reset</button> ' + 
    '</div> ' + 
'</div>';


/* ---- File (2): libs/xmlToJSON.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
/* Copyright 2013 William Summers, metaTribal LLC
 * adapted from https://developer.mozilla.org/en-US/docs/JXON
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @author William Summers
 *
 */
var xmlToJSON = (function () {

    this.version = "1.1";

    var options = { // set up the default options
        mergeCDATA: true, // extract cdata and merge with text
        grokAttr: true, // convert truthy attributes to boolean, etc
        grokText: true, // convert truthy text/attr to boolean, etc
        normalize: true, // collapse multiple spaces to single space
        xmlns: true, // include namespaces as attribute in output
        namespaceKey: '_ns', // tag name for namespace objects
        textKey: '_text', // tag name for text nodes
        valueKey: '_value', // tag name for attribute values
        attrKey: '_attr', // tag for attr groups
        cdataKey: '_cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
        attrsAsObject: true, // if false, key is used as prefix to name, set prefix to '' to merge children and attrs.
        stripAttrPrefix: true, // remove namespace prefixes from attributes
        stripElemPrefix: true, // for elements of same name in diff namespaces, you can enable namespaces and access the nskey property
        childrenAsArray: true // force children into arrays
    };

    var prefixMatch = new RegExp(/(?!xmlns)^.*:/);
    var trimMatch = new RegExp(/^\s+|\s+$/g);

    this.grokType = function (sValue) {
        if (/^\s*$/.test(sValue)) {
            return null;
        }
        if (/^(?:true|false)$/i.test(sValue)) {
            return sValue.toLowerCase() === "true";
        }
        if (isFinite(sValue)) {
            return parseFloat(sValue);
        }
        return sValue;
    };

    this.parseString = function (xmlString, opt) {
        return this.parseXML(this.stringToXML(xmlString), opt);
    }

    this.parseXML = function (oXMLParent, opt) {

        // initialize options
        for (var key in opt) {
            options[key] = opt[key];
        }

        var vResult = {},
            nLength = 0,
            sCollectedTxt = "";

        // parse namespace information
        if (options.xmlns && oXMLParent.namespaceURI) {
            vResult[options.namespaceKey] = oXMLParent.namespaceURI;
        }

        // parse attributes
        // using attributes property instead of hasAttributes method to support older browsers
        if (oXMLParent.attributes && oXMLParent.attributes.length > 0) {
            var vContent, vAttribs = {};

            for (nLength; nLength < oXMLParent.attributes.length; nLength++) {
                var oAttrib = oXMLParent.attributes.item(nLength);
                vContent = {};
                var attribName = '';

                if (options.stripAttrPrefix) {
                    attribName = oAttrib.name.replace(prefixMatch, '');

                } else {
                    attribName = oAttrib.name;
                }

                if (options.grokAttr) {
                    vContent[options.valueKey] = this.grokType(oAttrib.value.replace(trimMatch, ''));
                } else {
                    vContent[options.valueKey] = oAttrib.value.replace(trimMatch, '');
                }

                if (options.xmlns && oAttrib.namespaceURI) {
                    vContent[options.namespaceKey] = oAttrib.namespaceURI;
                }

                if (options.attrsAsObject) { // attributes with same local name must enable prefixes
                    vAttribs[attribName] = vContent;
                } else {
                    vResult[options.attrKey + attribName] = vContent;
                }
            }

            if (options.attrsAsObject) {
                vResult[options.attrKey] = vAttribs;
            } else {}
        }

        // iterate over the children
        if (oXMLParent.hasChildNodes()) {
            for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
                oNode = oXMLParent.childNodes.item(nItem);

                if (oNode.nodeType === 4) {
                    if (options.mergeCDATA) {
                        sCollectedTxt += oNode.nodeValue;
                    } else {
                        if (vResult.hasOwnProperty(options.cdataKey)) {
                            if (vResult[options.cdataKey].constructor !== Array) {
                                vResult[options.cdataKey] = [vResult[options.cdataKey]];
                            }
                            vResult[options.cdataKey].push(oNode.nodeValue);

                        } else {
                            if (options.childrenAsArray) {
                                vResult[options.cdataKey] = [];
                                vResult[options.cdataKey].push(oNode.nodeValue);
                            } else {
                                vResult[options.cdataKey] = oNode.nodeValue;
                            }
                        }
                    }
                } /* nodeType is "CDATASection" (4) */
                else if (oNode.nodeType === 3) {
                    sCollectedTxt += oNode.nodeValue;
                } /* nodeType is "Text" (3) */
                else if (oNode.nodeType === 1) { /* nodeType is "Element" (1) */

                    if (nLength === 0) {
                        vResult = {};
                    }

                    // using nodeName to support browser (IE) implementation with no 'localName' property
                    if (options.stripElemPrefix) {
                        sProp = oNode.nodeName.replace(prefixMatch, '');
                    } else {
                        sProp = oNode.nodeName;
                    }

                    vContent = xmlToJSON.parseXML(oNode);

                    if (vResult.hasOwnProperty(sProp)) {
                        if (vResult[sProp].constructor !== Array) {
                            vResult[sProp] = [vResult[sProp]];
                        }
                        vResult[sProp].push(vContent);

                    } else {
                        if (options.childrenAsArray) {
                            vResult[sProp] = [];
                            vResult[sProp].push(vContent);
                        } else {
                            vResult[sProp] = vContent;
                        }
                        nLength++;
                    }
                }
            }
        } else if (!sCollectedTxt) { // no children and no text, return null
            if (options.childrenAsArray) {
                vResult[options.textKey] = [];
                vResult[options.textKey].push(null);
            } else {
                vResult[options.textKey] = null;
            }
        }

        if (sCollectedTxt) {
            if (options.grokText) {
                var value = this.grokType(sCollectedTxt.replace(trimMatch, ''));
                if (value !== null && value !== undefined) {
                    vResult[options.textKey] = value;
                }
            } else if (options.normalize) {
                vResult[options.textKey] = sCollectedTxt.replace(trimMatch, '').replace(/\s+/g, " ");
            } else {
                vResult[options.textKey] = sCollectedTxt.replace(trimMatch, '');
            }
        }

        return vResult;
    }


    // Convert xmlDocument to a string
    // Returns null on failure
    this.xmlToString = function (xmlDoc) {
        try {
            var xmlString = xmlDoc.xml ? xmlDoc.xml : (new XMLSerializer()).serializeToString(xmlDoc);
            return xmlString;
        } catch (err) {
            return null;
        }
    }

    // Convert a string to XML Node Structure
    // Returns null on failure
    this.stringToXML = function (xmlString) {
        try {
            var xmlDoc = null;

            if (window.DOMParser) {

                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(xmlString, "text/xml");

                return xmlDoc;
            } else {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = false;
                xmlDoc.loadXML(xmlString);

                return xmlDoc;
            }
        } catch (e) {
            return null;
        }
    }

    return this;
})();

if (typeof module != "undefined" && module !== null && module.exports) module.exports = xmlToJSON;
else if (typeof define === "function" && define.amd) define(function() {return xmlToJSON});


/* ---- File (3): avayaGlobal.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 */

/*
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * Holds functions and variables that are accessible across the entire site.
 * Import this before any other script, if not using a concatenated file.
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 */

var avayaGlobal = {

	/* \\\\\\\\\\\\\\\\\\\\\ SF added these \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
	
	/* Based on requirements we populate these the first time the user calls initChat via Live Chat 
	   Since MSC Direct hard reloads for login/out, these can persist for the duration of the page */
	client: {
		regState: 'G', //default
		firstName: '',
		lastName: '',
		email: '',
		phoneArea: '',
		phonePrefix: '',
		phoneBody: '',
	},
	
	
	/* \\\\\\\\\\\\\\\\\\\\\\\ end added \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */

    browserWarning : 'Your browser does not support required features for this website. The earliest supported versions are Internet Explorer 10, Firefox 11, Chrome 31, Safari 7.1 and Opera 12.1',
    language : 'en_GB',

    /**
     * The logger. By default, uses the browser console.
     */
    log : null,

    /**
     * Create a new logger, using the console.
     * @return AvayaClient.Base.Logger
     * previous version..
    makeLogger : function() {
        'use strict';
        // console.info("Creating a logger");
        var logger = AvayaClientServices.Base.Logger;
        if (logger !== null) {
            logger.addLogger(console);
        } else {
            console.warn("AvayaClientServices were null!");
            logger = console;
        }
    },
	*/
	
	/** Streamlined logger object; Presidio */
	makeLogger : function(){
		'use strict';
		var logger = {};
		['log','info','error','fatal','debug','trace','warn'].forEach(function(n){
			logger[n] = function(){
				if(typeof webChat.getSetEnvironment === 'undefined' || webChat.getSetEnvironment() === 'production' ) return;
				console[n].apply(null, arguments);
			}
		});
		return logger;
	},

    /**
     * Checks that a browser supports WebSockets, XMLHttpRequests and JSON. Also checks if jQuery is included (required for UI interactions).
     */
    detectBrowserSupport : function() {
        'use strict';
        if (!WebSocket || !XMLHttpRequest || !JSON || !window.jQuery) {
            window.alert(this.browserWarning);
        }
    },

    /**
     * Returns the element with the specified ID
     * @param el
     * @returns {Element}
     */
    getEl : function(el) {
        'use strict';
        return document.getElementById(el);
    },

    /**
     * Get an object from session storage.
     * @param key
     * @returns the resulting pair
     */
    getSessionStorage : function(key) {
        'use strict';
        return sessionStorage.getItem(key);
    },

    /**
     * Checks that a string is empty.
     * @param string
     * @returns {Boolean} true if string has length of zero
     */
    isStringEmpty : function(string) {
        'use strict';
        return (string.length === 0);
    },

    /**
     * Sets a specified key-value pair in session storage.
     * @param key
     * @param value
     */
    setSessionStorage : function(key, value) {
        'use strict';
        sessionStorage.setItem(key, value);
    },
    
    /**
     * Remove the specified item from session storage.
     * @param {String} key
     */
    removeFromSessionStorage: function(key) {
        'use strict';
        sessionStorage.removeItem(key);
    },

    /**
     * Clears session storage.
     */
    clearSessionStorage : function() {
        'use strict';
        sessionStorage.removeItem("guid");
        sessionStorage.removeItem("ak");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("reloadTimestamp");
        sessionStorage.removeItem("users");
        sessionStorage.removeItem("transcript");
        sessionStorage.removeItem("chatAttrCount");
        sessionStorage.removeItem("totalAttributes");
        sessionStorage.removeItem("contextId");
    },
    
    /**
     * Clear sessionStorage entirely. WARNING: This will clear CoBrowse state as well!
     */
    wipeSessionStorage: function() {
        "use strict";
        sessionStorage.clear();
    },
    
    /**
     * Detach all children from the specified element.
     */
    detachChildren: function(element) {
        'use strict';
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    },

    /**
     * Gets the value of path parameter from a URL by name.
     *
     * attribution:
     *     http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes#tab-top
     *
     * @param name
     * @param url
     * @returns the parameter value
     */
    getParameterByName : function(name, url) {
        'use strict';
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);

        if (!results || !results[2]) {
            return null;
        }

        return decodeURIComponent(results[2].replace(/([\+%]20)+/g, ' '));
    },

    /**
     * Alternative version of getParameterByName that doesn't use regexes.
     * @param name
     * @param url
     * @returns the parameter value
     */
    getParameter : function(name, url) {
        'use strict';
        var index = url.indexOf(name + '=');
        if (index < 0) {
            return null;
        }

        // find the index of the next parameter, if there is more than one
        var nextKeyIndex = url.indexOf('?', index);
        var param = url.substring(index, nextKeyIndex < 0 ? url.length : nextKeyIndex);
        param = param.replace(name + '=', '');

        // this automatically replaces %20 with an actual space
        return decodeURIComponent(param);
    },

    /**
     * Checks if a JSON object is empty. The constructor condition is due to the fact that
     * Object.keys(new Date()).length returns 0, but this is invalid:
     * http://stackoverflow.com/a/32108184/3861543
     * @param json
     * @returns {Boolean}
     */
    isJsonEmpty : function(json) {
        'use strict';
        return (Object.keys(json).length === 0 && json.constructor === Object);
    },

    /**
     * Find multiple occurences of a string inside another. Adapted from the answer at:
     * http://stackoverflow.com/a/3410557/3861543
     * @param {String} targetString - the string you wish to find
     * @param {String} str - the string to search inside
     * @param {Boolean} caseSensitive - if false, upper/lower case doesn't matter 
     */
    getIndicesOf : function(targetString, str, caseSensitive) {
        'use strict';
        var targetStringLength = targetString.length;
        if (targetStringLength === 0) {
            avayaGlobal.log.warn('Search string is empty!');
            return;
        }
        var startIndex = 0, index, indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            targetString = targetString.toLowerCase();
        }
        while ((index = str.indexOf(targetString, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + targetStringLength;
        }
        return indices;
    },

	fromRequestCookieDefault : function(variable, _default){
		// #1 return query string value first if present
		var vars = window.location.search.substring(1).split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (decodeURIComponent(pair[0]) == variable) {
				//set the cookie and return the value
				var found = decodeURIComponent(pair[1]);
				s_cookie(variable, found);
				return found;
			}
		}

		// #2 return existing cookie if found
		var found = g_cookie(variable);
		if(found !== null) return found;

		// #3 return default if the user wants compactness
		if(typeof _default !== 'undefined') return _default;
	}
};



/* ---- File (4): links.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Contains URLs to configure the Chat, Customer Journey or CoBrowsing. Replace the IP addresses here
 * with the FQDN or address of the Avaya Oceana server or reverse proxy.
 */

var links = {

    /**
     * Set to <em>true</em> to use secure connections across the board.
     */
    secureAllConnections : true,

    /**
     * The hostname or cluster of the OCP cluster
	   Value during testing: oce-stf-p-cc3-node-vip.mscpla.local
     */
    webChatHost : (window.location.host && window.location.host.match(/www\.mscdirect/) ? 'chat.mscdirect.com' : 'qachat.mscdirect.com'),

    /**
     * The hostname or address of the cluster that hosts the Co-Browsing service.
	   Value during testing: oce-stf-p-cc4-node-vip.mscpla.local
     */
    coBrowseHost : (window.location.host && window.location.host.match(/www\.mscdirect/) ? 'chat.mscdirect.com' : 'qachat.mscdirect.com'),

    /**
     * The hostname or address of the cluster that hosts Context Store, the CustomerManagement service,
     * and the OceanaCoreDataService.
	   Value during testing: oce-stf-p-cc1-node-vip.mscpla.local
     */
    contextStoreHost : (window.location.host && window.location.host.match(/www\.mscdirect/) ? 'chat.mscdirect.com' : 'qachat.mscdirect.com'),

    /**
     * Return the URL for the WebSocket. 
     * @return {String} the WebSocket URL.
     */
    getWebChatUrl : function() {
        'use strict';
        return ((links.secureAllConnections ? 'wss://' : 'ws://') + links.webChatHost + '/services/customer/chat');
    },

    /**
     * Return the URL for the Estimated Wait Time servlet.
     * @return {String} the EWT url, constructed from the OCP host
     */
    getEstimatedWaitTimeUrl : function() {
        'use strict';
        return ((links.secureAllConnections ? 'https://' : 'http://') + links.webChatHost + '/services/CustomerControllerService/gila/ewt/request');
    },

    /**
     * Return the common base for all the OceanaCoreDataServices urls.
     * @return {String} the URL for the OceanaCoreDataService, constructed from the ContextStore hostname
     */
    getOceanaCoreDataServicesUrl : function() {
        'use strict';
        return ((links.secureAllConnections ? 'https://' : 'http://') + links.contextStoreHost + '/services/OceanaCoreDataService/oceana/data/');
    },

    /**
     * Return the CustomerManagement service URL.
     * @return {String} the URL for the CustomerManagement service, constructed from the ContextStore hostname
     */
    getCustomerManagementUrl : function() {
        'use strict';
        return ((links.secureAllConnections ? 'https://' : 'http://') + links.contextStoreHost + '/services/CustomerManagement');
    },

    /**
     * Set up secure URLs. This will enforce HTTPS/WSS if the site itself is served over HTTPS. Call on page load.
     */
    setupSecurity : function() {
        'use strict';
        if (links.isPageSecure()) {
            links.secureAllConnections = true;
        }

        // set up coBrowse
        if (window.coBrowse !== undefined) {
            coBrowse.isSecure = links.secureAllConnections;
        }

    },

    /**
     * Return the pathname for the configuration panel. This will return the full path, minus the first slash
     * and the name of the page.
     */
    getPathNameForConfig : function() {
        'use strict';
        var pathName = window.location.pathname;
        var pageIndex = pathName.lastIndexOf('/');
        var actualPathName = pathName.substring(1, pageIndex);
        return actualPathName;
    },

    /**
     * Return the page name.
     */
    getPageName : function() {
        'use strict';
        var pathName = window.location.pathname;
        var pageIndex = pathName.lastIndexOf('/') + 1;
        var fileName = pathName.substring(pageIndex);
        return fileName;
    },

    /**
     * Extract the OCP hostname so that FileTransferNotifications can be passed through a proxy.
     */
    getOcpHostname : function() {
        'use strict';
        var hostIndex = links.webChatUrl.indexOf('//');
        var host = links.webChatUrl.substring(hostIndex + 2, links.webChatUrl.indexOf('/', hostIndex + 3));
        return host;
    },

    /**
     * Returns true if the page is served over HTTPS
     */
    isPageSecure : function() {
        'use strict';
        return (window.location.protocol === 'https:');
    }

};


/* ---- File (5): webChatConfig.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
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
    writeResponseClassError : 'presav-chat-error',
    writeResponseClassDate : 'date',
    writeResponseClassAgentDate : 'agentDate',
    writeResponseClassChatbot : 'chatbot',

    // links to various images
	// note that the base is considered xyz.cdn/global
    agentImage : 'vendor/presidio-avaya/agent.png',
    agentTypingImage : 'vendor/presidio-avaya/agent_typing.png',
    supervisorImage : 'vendor/presidio-avaya/supervisor.png',
    supervisorTypingImage : 'vendor/presidio-avaya/supervisor_typing.png',

    // used only by the configuration panel
    useSecureUrls : false,

    // lease time in Context Store, measured in hours
    leaseTime : 1,
    
    requireFirstName: true,
    requireLastName: true,
    requireEmail: true,
    requirePhone: true,
	requireReason: true,
   
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


/* ---- File (6): webChatLogon.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
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
        avayaGlobal.log.warn("Is email " + el.value + " valid? " + isEmailValid);
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
            if (isStringEmpty(l_email) || !l_email.match('@') || !l_email.match('.')) {
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
			
			if(webChat.settings && webChat.settings.userType === 'R'){
				webChat.addCustomFields('sessionId', 'abc123def987');
				webChat.addCustomFields('original_user', webChat.settings.firstName + ' ' + webChat.settings.lastName);
				webChat.addCustomFields('original_email', webChat.settings.email);
				webChat.addCustomFields('original_phone', webChat.settings.phoneNumber);
			}
            
            avayaGlobal.setSessionStorage('user', l_user);
            avayaGlobal.setSessionStorage('user_last', l_user_last);
            avayaGlobal.setSessionStorage('phone', phoneVal);
            avayaGlobal.setSessionStorage('email', l_email);

			oceanaCoreData.initialise();
			chatLogon.addAttribute(chatLogon.mscattribute);
			
			avayaGlobal.log.info('Webchat: Adding CS data and Inititialzing of OCP completed');
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
		
		var l_user = $.trim(avayaGlobal.getEl('user-chat').value), l_user_last = $.trim(avayaGlobal.getEl("user-chat-last").value), l_email = $.trim(avayaGlobal.getEl('email-chat').value);
		var phoneCountry = $.trim(avayaGlobal.getEl("phone-country").value);
        var phoneArea = $.trim(avayaGlobal.getEl("phone-area").value);
        var phone = $.trim(avayaGlobal.getEl('phone-chat').value);
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
				// commented out things relating to the original POST method. Remove later
//				customerJourneyCommon.setContextId(JSON.parse(this.response).data.contextId);
//				avayaGlobal.setSessionStorage('contextId', (JSON.parse(this.response).data.contextId));
//				avayaGlobal.log.info('webchatLogon: Created and set Context ID in CJ now ' + customerJourneyCommon.contextId);
//				avayaGlobal.log.info('webchatLogon: Created and set Context ID in AvayaGlobal = ' + avayaGlobal.getSessionStorage('contextId'));
				chatLogon.logon(l_user, l_user_last, l_email, phoneCountry, phoneArea, phone);

			}
		});

		
		//avayaGlobal.log.info('CustomerJourney: Context ID  for upsert ' + avayaGlobal.getSessionStorage('contextId');
		
		avayaGlobal.log.info('CustomerJourney: Context ID  for upsert ' + avayaGlobal.getSessionStorage('contextId'));
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


/* ---- File (7): webChatUI.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
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
			$('#chatForm').hide();
			$('#chatInterfaceWrap').show();
		}
		
		if(chatUI.panelStartingHeight){
			avayaGlobal.log.info('maintaining panel height');
			document.getElementById('chatPanel').style.height = chatUI.panelStartingHeight + 'px';
		}else{
			var width = Math.min( 475, $(window).width() - 20 );
			//testing
			width = avayaGlobal.fromRequestCookieDefault('width', width);
			$('#chatPanel').dialog({
				width : width,
				dialogClass : 'presav-chatPanel',
				open: function(event, ui){
					avayaGlobal.log.info('dialog re-opened');

					var resizeCalled = false, box = document.getElementsByClassName('presav-chatPanel')[0];
					
					var maxWithScrollbar = Math.min(
						parseInt(document.body.clientWidth), 
						parseInt(document.body.scrollWidth), 
						parseInt(window.innerWidth) - 17 /* note I am assuming a vertical scrollbar */
					);
					if(parseInt(box.style.width) > maxWithScrollbar){
						avayaGlobal.log.info('resizing panel 1');
						resizeCalled = true;
						//re-position the panel x-wise
						box.style.width = (maxWithScrollbar - 30) + 'px';
						box.style.left = '15px';
					}
					if(!webChat.mover.running){
						webChat.mover.running = setInterval(webChat.mover.monitor, 1000);
					}

			//MOBILETEST Start
			avayaGlobal.log.info('mobile test 2');
			var params = {
				'event': 'open panel',
				'innerWidth': window.innerWidth,
				document_body_clientWidth: document.body.clientWidth,
				document_body_scrollWidth: document.body.scrollWidth,
				resizeCalled: resizeCalled ? 1 : 0,
				userAgent: navigator.userAgent,
				comment: (typeof window.comment === 'undefined' ? '' : window.comment),
				panelWidth: box.style.width,
				panelLeft: box.style.left,
				url: window.location.href,
			};
			var str = '';
			for(var i in params) str += i + '=' + encodeURI(params[i]) + '&';
			min_ajax({
				uri: 'https://www.compasspoint-sw.com/mobiletest/',
				params: str,
			});
			//MOBILETEST End



					//2019-04-29
					if(typeof localStorage !== 'undefined' && localStorage.panelStartingTop){
						$('#chatPanel').parent().css('top', localStorage.panelStartingTop);
					}
					webChat.chatPanelMaximize();
					webChat.chatPanelConfigureMinimize();
					chatUI.showLiveChat(false);
				},
				close: function(event, ui){
					avayaGlobal.log.info('dialog closed after page nav');
					if (webSocket !== undefined ) {
						avayaGlobal.log.info('calling closePanel (2)');
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
		var width = Math.min( 475, $(window).width() - 20 );
        $('#chatPanel').dialog({
            width : width,
			dialogClass : 'presav-chatPanel',
			open: function(event, ui){
				chatUI.showLiveChat(false);
			}
        });
    },

    resetChatUI : function() {
        'use strict';
        chatUI.changeToLoginMode();
		// here is where after 5-6 hops we finally close the actual HTML UI..
        $('#chatPanel').dialog('close');
		chatUI.showLiveChat();
    },
	
	showLiveChat : function(show){
		/**
		 * Show or hide the listed Live Chat button.  Timeout because Presidio is not responsible for showing the button and it may be delayed.
		 * Note 2019-03-21 we want to show this only if it is appropriate to show it.  If we close the chat panel and chat has since become unavailable, the chatPanel is not designed to notify of this fact.  
		 * This is a demarcation that should be on the Live Chat button itself (showing and detecting if chat is available and if not popping up a I'm sorry we missed you message).  This is poorly demarcated between the v4-chat.js API and what Presidio did on the reference client
		 */
		setTimeout(function(){
			if(typeof show === 'undefined' || show === true){
				$('.bottom_chat_btn').fadeIn(400);
				return;
			}
			// Final case, show explicitly declared false
			$('.bottom_chat_btn').fadeOut(400);
		}, 250);
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
		avayaGlobal.log.info('step 1');
        avayaGlobal.log.debug("WebChat: closing chat panel");

        // when the chat dialog is closed, reset things
        // $('#liveChatLink').show();
        chatSocket.clearRefresh();
        chatSocket.manualClose = true;
        clearTimeout(chatSocket.closeTimer);
		avayaGlobal.log.info('webSocket.readyState = ' + webSocket.readyState);
        if (webSocket.readyState !== 2) {
			avayaGlobal.log.info('quitting chat');
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
        avayaGlobal.log.info("Reloading chat panel");
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


/* ---- File (8): webChatSocket.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
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
				/* ====== IMPORTANT =======
				//The following has been moved to a non-onunload event, specifically send/receive messages
                chatSocket.setupRefresh();
				   ======================== */
				avayaGlobal.log.info('refresh should already be set up');
            } else {
				
				
			//MOBILETEST Start
			avayaGlobal.log.info('mobile test 3');
			var params = {
				'event': 'close connection',
				'innerWidth': window.innerWidth,
				document_body_clientWidth: document.body.clientWidth,
				document_body_scrollWidth: document.body.scrollWidth,
				userAgent: navigator.userAgent,
				comment: ('Event code: ' + (event.code ? event.code : '[unknown]')) + ' ' + (typeof window.comment === 'undefined' ? '' : window.comment),
				panelWidth: '',
				panelLeft: '',
				url: window.location.href,
			};
			var str = '';
			for(var i in params) str += i + '=' + encodeURI(params[i]) + '&';
			min_ajax({
				uri: 'https://www.compasspoint-sw.com/mobiletest/',
				params: str,
			});
			//MOBILETEST End
			
			
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
			return;
        }
    },

    /**
     * Log errors to the console and alert the user that an error has occurred.
     * @param event
     */
    handleError : function(event) {
        'use strict';
        avayaGlobal.log.error("WebChat: WebSocket error", event);
        // webChat.writeResponse('A connection error has occurred... Check the console for more details',
        //        chatConfig.writeResponseClassSystem);
		webChat.writeResponse('Connection failed.  We apologize for the inconvenience.  Please start another chat session or contact us at customercare@mscdirect.com', chatConfig.writeResponseClassSystem);
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
            webChat.writeResponse('We apologize, but the chat service appears to be unresponsive or down for maintenance. Please try again later',
                    chatConfig.writeResponseClassSystem);
        } else {
            webChat.writeResponse('We\'re sorry, an error occurred (Error ' + error.code + ': ' + error.errorMessage + ')  Please try again, or if necessary close this chat window and re-open.',
                    chatConfig.writeResponseClassError);
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
		console.log('only place the webSocket object is actually nulled out, kinda');
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
			avayaGlobal.log.info('Reload timestamp has not yet been set');
			return false;
		}else if (isNaN(reloadTimestamp)) {
            avayaGlobal.log.warn("WebChat: Reload timestamp is not a valid UTC timestamp!");
            chatSocket.clearRefresh();
            return false;
        }
        
        var currentTimestamp = Date.now();
        var expired = (currentTimestamp - reloadTimestamp) >= (chatConfig.refreshTimeoutSeconds * 1000);
        avayaGlobal.log.debug("Current and closing timestamps are", currentTimestamp, reloadTimestamp);
        avayaGlobal.log.debug(ak, guid, expired);
        
        if (expired) {
            avayaGlobal.log.warn("WebChat: session has probably expired");
            chatSocket.clearRefresh();
            return false;
        }
        
        if (ak !== null && guid !== null && !isNaN(guid)) {
            avayaGlobal.log.debug("WebChat: reloading the chat");
            chatConfig.previouslyConnected = true;
            webChat.guid = guid;
            webChat.ak = ak;
            
            var email = avayaGlobal.getSessionStorage("email");
            var user = avayaGlobal.getSessionStorage("firstName");
            var user_last = avayaGlobal.getSessionStorage("lastName");
            var phone = JSON.parse(avayaGlobal.getSessionStorage("phone"));            
            var users = JSON.parse(avayaGlobal.getSessionStorage("users"));

            chatSocket.loadTranscript();
            chatUI.reloadChatPanel();
			
			$(document).ready(function(){
				chatUI.showLiveChat(false);
			});
			
            // 2019-04-26 - better to add a place holder "you navigated to xyz page"
			// webChat.writeResponse("Opening chat after page refresh", chatConfig.writeResponseClassSystem);
            webChat.initChat(false, user, user_last, email, phone.country, phone.area, phone.number);
            
            // account for a race condition caused by webChat.initChat calling disableControls(true)
            // Half a second (500 milliseconds) seems to be enough
            setTimeout(function(){                
                chatSocket.reloadUsers(users);
                webChat.disableControls(false);
            }, 500);
            return true;
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
                avayaGlobal.log.info(key, agent);
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
            transcript.push({ 
				textContent : messages[i].textContent, 
				className: messages[i].className,
				/* Added for embedded divs where textContent alone will not work */
				innerHTML: messages[i].innerHTML,
				tagName: messages[i].tagName
			});
        }
		var str = JSON.stringify(transcript);
        avayaGlobal.setSessionStorage('transcript', str);
		
    },
    
    /**
     * Load the transcript from session storage after a refresh.
     */
    loadTranscript: function(){
        'use strict';
        var transcript = JSON.parse(avayaGlobal.getSessionStorage('transcript'));
		var tag = '', str = '', message;
        for (var i = 0; i < transcript.length; i++) {
            message = transcript[i];
			if(message.innerHTML){
				tag = (message.tagName ? message.tagName.toLowerCase() : 'div');
				str = '<' + tag + ' class="' + (message.className ? message.className : '') + '">' + 
				message.innerHTML + 
				'</' + tag + '>';
				webChat.writeHtmlResponse(str);
			}else{
				webChat.writeResponse(message.textContent, message.className);
			}
        }
		// one last scrolldown
		setTimeout(function(){
			var messages = document.getElementById('messages');
			messages.scrollTop = messages.scrollHeight;
		}, 1000);
        
    },
    
    clearRefresh: function() {
        'use strict';
        avayaGlobal.log.debug("WebChat: clearing refresh");
        avayaGlobal.clearSessionStorage();
        webChat.initCalled = false;
    }
};


/* ---- File (9): estimatedWaitTime.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Handles the Estimated Wait Time functionality, keeping it independent of chat.
 */

(function (avayaGlobal, chatLogon, links, chatUI, ewt) {
    'use strict';

    // maximum wait time in seconds, and various status messages.
    var maxWaitTime = 600,
	chatAvailableMsgEwt = 'The chat is available. Your estimated wait time is {0} minutes. Click the "Live Chat" tab to open the chat',
	chatAvailableMsg = 'The chat is available. Click the "Live Chat" tab to open the chat.',
	chatNotAvailableMsg = 'The chat is not currently available. Please try again later',
	noAgentsAvailableMsg = 'No agents are currently available. Please try again later';
            
    // refactoring for test purposes. In production, these can be left unchanged.
    var minAgentCount = 1;
    var minWaitTime = 0;

    // This is the default priority. It ranges from 1 (max) to 10 (min)
    var priority = 5;
    
    // by default, only use one service map.
    var services = {
        "1" : {}
    };

    /**
     * Handle the REST response
     */
    var handleResponse = function () {
        var response = this.response;
        if (this.readyState === 4) {
            if (this.status === 200) {

                // if the response is empty, log an error.
                if (response === '') {
                    avayaGlobal.log.error('EWT: empty response! This may be caused by CORS issues or by blocking JavaScript (e.g. NoScript)');
                    return;
                }

                // use only the first for now. Replace this with the ID you
                // wish to use
                var mapId = '1';
                var json = JSON.parse(response);
                ewt.parseServiceMap(json.serviceMetricsResponseMap, mapId);
            } else {
                if (response === '') {
                    avayaGlobal.log
                            .error('EWT: empty response! This may be caused by CORS issues, the CustomerControllerService not being available, or by blocking JavaScript (e.g. NoScript). Response code: ' + this.status);
                } else {
                    avayaGlobal.log.error('EWT: ' + response);
                }
				if(webChat.settings.initiallyShowChatStatus){
					chatUI.showAlert(chatNotAvailableMsg);
				}

                chatUI.hideChatPanel();
            }
        }
    };
    
    /**
     * Parse the specified service map in the JSON response. Public method to enable unit testing.
     * @param {JSON} responseJson
     * @param {String} serviceId
     */
    ewt.parseServiceMap = function(responseJson, serviceId) {

        var serviceMap = responseJson[serviceId];
        
        // check if the EWT is defined here. We assume that chat is available,
        // unless specifically stated otherwise
        var alertMsg = chatAvailableMsg;
        var chatAvailable = false;
        var metrics = serviceMap.metrics;
        if (metrics !== undefined) {
            var waitTime = parseInt(metrics.EWT);
            var agentCount = parseInt(metrics.ResourceStaffedCount);
            avayaGlobal.log.debug('EWT: wait time is ' + waitTime + '. Maximum wait time is ' + maxWaitTime);
            avayaGlobal.log.debug('EWT: ' + agentCount + ' agents are logged in. Minimum allowed are ' + minAgentCount);

            // if waitTime is less than the maximum and agents are logged in, chat is available. Otherwise, it isn't
            // FYI: if agents are logged in, that doesn't necessarily mean they *can* take a call. They may be busy, or on a break.
            if (waitTime < maxWaitTime && waitTime >= minWaitTime && agentCount >= minAgentCount) {
                var waitTimeInMins = Math.round(waitTime / 60);
                alertMsg = chatAvailableMsgEwt.replace('{0}', waitTimeInMins);
                chatAvailable = true;
				//2019-02-26 SF: this is called below, don't think it needs called here
                chatUI.showChatPanel();
                chatUI.addEwtToChatTab(waitTimeInMins);
            } else {
                if (waitTime > maxWaitTime) {
                    // customise alert messages depending on the circumstances. 
                    alertMsg = chatNotAvailableMsg;
                } else {
                    alertMsg = noAgentsAvailableMsg;
                }
            }
        }

        if (!chatAvailable) {
            chatUI.hideChatPanel();
        } else {
            chatUI.showChatPanel();
        }

        // leave this in for ease of testing
        if(webChat.settings.initiallyShowChatStatus){
			chatUI.showAlert(alertMsg);
		}
    };
    
    /**
     * Converts the chatLogon attributes array into a service map
     * @returns {JSON}
     */
    var createAttributeMap = function (){        
        avayaGlobal.log.debug("EWT: Creating attribute map");
        
        // Channel.Chat is required for Web Chat, so hard-code this in here
        var attributes = {
            'Channel' : [ 'Chat']
        };
        
        var attributesArray = chatLogon.attributes;
        for (var i = 0; i < attributesArray.length; i++) {
            var attr = attributesArray[i];
            var array = attr.split('.'), key = array[0], value = array[1];
            var attrArray;
            
            // Check if the attribute key (e.g. Location) already exists. If not, add it.
            // Otherwise, update the attributes.
            if (Object.keys(attributes).indexOf(key) < 0) {
                attrArray = [value];
                attributes[key] = attrArray;
            } else {
                attrArray = attributes[key];
                if (attrArray.indexOf(value) < 0) {
                    attrArray.push(value);
                }
            }
        }
        
        return attributes;
    };
    
    /**
     * Set the new priority
     * @param {Number} newPriority - must be a valid integer between 1(highest) and 10 (lowest)
     */
    ewt.setPriority = function(newPriority) {
        if (typeof(newPriority) !== 'number' || newPriority < 1 || newPriority > 10) {
            avayaGlobal.log.warn("EWT: Invalid priority! Resetting to default (5)");
            newPriority = 5;
        }
        priority = newPriority;
    };
    
    /**
     * Set the minimum amount of live agents required to consider chat available.
     * Meant for testing purposes.
     * @param {Number} newMin
     */
    ewt.setMinimumAgentCount = function(newMin){
        if (typeof newMin !== 'number') {
            avayaGlobal.log.warn("EWT: Invalid min agent count! Using default (1)");
            newMin = 1;
        }
        minAgentCount = newMin;
    };
    
    /**
     * Set the minimum wait time for testing purposes.
     * @param {Number} newMin
     */
    ewt.setMinWaitTime = function(newMin) {
        if (typeof newMin !== 'number') {
            avayaGlobal.log.warn("EWT: Invalid min wait time! Using default (0)");
            newMin = 0;
        }
        minWaitTime = newMin;
    };
    
    /**
     * Set the maximum wait time.
     * @param {Number} newMax - measured in seconds
     */
    ewt.setMaxWaitTime = function(newMax) {
        if (typeof newMax !== 'number' || newMax < 0) {
            avayaGlobal.log.warn("EWT: Invalid max wait time! Using default (600)");
            newMax = 600;
        }
        maxWaitTime = newMax;
    };
    
    /**
     * Add a new service to the service map
     * @param {ServiceMap} serviceMap - JSON object with attributes and priority.
     * @param {String} id - where in the service this should go. Must be between 1 and 6 (inclusive of both).
     * @returns {undefined}
     */
    ewt.addService = function(serviceMap, id) {
        var idNumber = parseInt (id);
        if (idNumber < 1 || idNumber > 6) {
            avayaGlobal.log.error("EWT: Invalid service map ID! It must be between 1 and 6!");
            return;
        }
        services [id] = serviceMap;
    };
    
    /**
     * Return the current priority.
     * @returns {Number|priority}
     */
    ewt.getPriority = function() {
        return priority;
    };
    
    /**
     * Return the minimum wait time.
     * @returns {Number|minWaitTime}
     */
    ewt.getMinimumWaitTime = function() {
        return minWaitTime;
    };
    
    /**
     * Return the minimum number of agents/
     * @returns {Number|minAgentCount}
     */
    ewt.getMinimumAgentCount = function() {
        return minAgentCount;
    };
    
    /**
     * Get the maximum wait time.
     * @returns {Number|maxWaitTime}
     */
    ewt.getMaxWaitTime = function() {
        return maxWaitTime;
    };

    /**
     * Request EWT.
     */
    ewt.requestEwt = function (callback, forceCheck) {
        var url = links.getEstimatedWaitTimeUrl();
		if(typeof forceCheck === 'undefined') forceCheck = false;
        
        // account for local testing
        if (url.indexOf('localhost') > -1 || url.indexOf("127.0.0.1") > -1) {
            avayaGlobal.log.warn("EWT: Pointing at localhost, so EWT will not be available");
            return;
        }
        
        // no point in requesting EWT if reconnecting
        if (chatConfig.previouslyConnected && !forceCheck) {
			avayaGlobal.log.info('Reconnecting, no EWT requested');
            return;
        }

        // create the default one
        var attributes = createAttributeMap();
        services["1"].attributes = attributes;
        services["1"].priority = priority;
		avayaGlobal.log.info('Sending services to ewt with: ', services);

        // send the request
        var request = new XMLHttpRequest();
        request.open('POST', links.getEstimatedWaitTimeUrl());
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('readystatechange', handleResponse);
		// 2019-02-26 SF: add callback if sent
		if(typeof callback === 'function'){
			request.onload = function(response){
				callback(response);
			};
		}
        request.send(JSON.stringify({
            'serviceMap' : services
        }));
    };

    return ewt;

})(window.avayaGlobal, window.chatLogon, window.links, window.chatUI, window.ewt = window.ewt || {});



/* ---- File (10): webChat.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
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
	
	// Presidio build number
	build: '4a',

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
		avayaGlobal.log.info('webchat: Context ID  == workid ' + avayaGlobal.getSessionStorage('contextId'));

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
			// 2019-04-03 The way separation of concerns were originally coded with this chat client allowed for remnants of the previous chat(s) to remain such as Close Request Sent - this is always the start of the chat so we clear everything else.
			$('#messages').empty();
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
		var setupRefresh = true;
        var body = message.body, 
			method = message.body.method;
        if (method === chatConfig.jsonMethodRequestChat) {
            webChat.notifyRequestChat(body);
        } else if (method === chatConfig.jsonMethodRouteCancel) {
            webChat.notifyRouteCancel();
        } else if (method === chatConfig.jsonMethodRequestNewParticipant) {
            webChat.notifyNewParticipant(body);
        } else if (method === chatConfig.jsonMethodRequestIsTyping) {
			setupRefresh = false; // don't load the system down
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
            // do nothing with pings. They just confirm that the WebSocket is open.
			setupRefresh = false;
        } else if (method === chatConfig.jsonMethodFileTransfer) {
            webChat.notifyFileTransfer(body);
        } else {
            throw new TypeError('Received notification with unknown method: '.concat(method));
			return false;
        }
		if(setupRefresh){
			avayaGlobal.log.info('refresh placed (incoming) from ' + method);
			chatSocket.setupRefresh();
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
		//parse date
		var ampm = 'AM', date = new Date(body.timestamp), dateStr = '';
		var hours = parseInt(date.getHours());
		var minutes = date.getMinutes().toString();
		if(hours > 12){
			ampm = 'PM';
			hours -= 12;
		}
		dateStr = hours + ':' + (minutes.length === 1 ? '0' : '') + minutes + ' ' + ampm;

		//todo this needs to go into settings
		var channelUrl = 'mscdirect.com';
		var widget, widgets = [], widgetStr = '';
		var i, a = body.message.split(/(\s)+/), newtab;
		var href, span = document.createElement('span');
		for(i in a){
			//first handle any recognized URLs
			if(a[i].match(/^((www\.[-a-z0-9]+)|(http:\/\/)|(https:\/\/))/)){
				//note we assume that www's go to http vs. https
				//a good website will handle insecure redirects, but a non-existent cert would cause a failure
				//we want to remain in-tab for MSC Direct URLs
				href = document.createElement('a');
				if(!a[i].toLowerCase().match(channelUrl)) href.target = '_blank';
				href.href = (a[i].match(/^www/) ? 'http://' : '') + a[i];
				href.appendChild(document.createTextNode(a[i]));
				span.appendChild(href);
				
				/*
				newtab =  ? '' : 'target="_blank"';
				a[i] = '<a ' + newtab + ' href="' + (a[i].match(/^www/) ? 'http://' : '') + a[i] + '">' + a[i] + '</a>';
				*/
			/* not used..
			}else if(widget = webChat.widgetKeyword(a[i])){
				widgets.push([
					widget,
					a[i]
				]);
			*/
			}else{
				//2019-03-23: all other HTML is escaped; alas we'd like the agent to be able to send bold or underlined text but we're not ready for this yet
				//a[i] = htmlEntities(a[i]);
				span.appendChild(document.createTextNode(a[i]));
			}
			span.appendChild(document.createTextNode(' '));
		}
		// body.message = a.join(' ');

		var presavMessageWrap = document.createElement('div');
		presavMessageWrap.setAttribute('class', 'presav-message-wrap' + (chatMessageClass ? ' ' + chatMessageClass : ''));
		var presavTimestamp = document.createElement('div');
		presavTimestamp.setAttribute('class', 'presav-timestamp');
		presavTimestamp.setAttribute('data-timestamp', htmlEntities(body.timestamp));
		presavTimestamp.append(document.createTextNode(dateStr));
		presavMessageWrap.appendChild(presavTimestamp);
		var presavMessager = document.createElement('div');
		presavMessager.setAttribute('class', 'presav-messager');
		presavMessager.appendChild(document.createTextNode(htmlEntities(body.displayName ? body.displayName : 'Agent')));
		presavMessageWrap.appendChild(presavMessager);
		var presavMessage = document.createElement('div');
		presavMessage.setAttribute('class', 'presav-message');
		presavMessageWrap.appendChild(span);
		
		webChat.messages.appendChild(presavMessageWrap);
		webChat.messages.scrollTop = webChat.messages.scrollHeight;
		
		/*
		for(i in widgets){
			widgetStr += widgets[i][0](widgets[i][1])
		}
		var message = '<div class="presav-message-wrap ' + (chatMessageClass ? chatMessageClass : '') + '">' +
			'<div class="presav-timestamp" data-timestamp="' + body.timestamp + '">' + dateStr + '</div>' +
			'<div class="presav-messager">' + (body.displayName ? body.displayName : 'Agent') + '</div>' +
			'<div class="presav-message">' + body.message +
			(widgetStr ? '<span class="presav-widgets">' : '') +
				widgetStr +
			(widgetStr ? '</span>' : '') +
			'</div>' +
			'</div>';
		var chat = webChat.messages.innerHTML;
		webChat.messages.innerHTML = chat + message;
		*/
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
        avayaGlobal.log.info(leaveReason);

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
            //webChat.writeResponse('Successfully reconnected', chatConfig.writeResponseClassSystem);
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
        var url = body.address;	//tmpUrl
        var filename = body.name;
        var timestamp = new Date().toLocaleString();
        var message = chatConfig.fileTransferMessageText;
		
		url = webChat.replaceFileTransferHost(url);
		message = message.replace('{0}', agentname);
        message = message.replace('{1}', filename);
        message = message.replace('{2}', timestamp);
        message = message.replace('{3}', url);
		
		webChat.writeMessageBlock(message, chatConfig.writeResponseClassResponse);
        // webChat.writeResponse(message, chatConfig.writeResponseClassResponse);
    },

    /**
     * Replace the hostname in the file transfer URL. This will allow it to be passed through a proxy.
     */
    replaceFileTransferHost : function(url) {
        'use strict';
        var ocpHost = links.webChatHost;
        url = url.replace(/:\/\/[^\/]+/, '://' + ocpHost);
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
			avayaGlobal.log.info('Original logic block for calling close');
        }else{
			avayaGlobal.log.info('Criteria for close not met! Calling anyway');
		}
		var closeRequest = {
			apiVersion : '1.0',
			type : 'request',
			body : {
				method : 'closeConversation'
			}
		};
		
		// 2019-04-03 SF - note that session remnants of this can be in the #messages div or session storage
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
		
		/* Note that the writing the block, sending, and storing for refresh are disjointed and should be related by verification */
		
		//write message block locally
		webChat.writeMessageBlock({
			timestamp: (new Date()).getTime(),
			displayName: webChat.g_user,
			message: message
		}, chatConfig.writeResponseClassSent);

		//send message
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
		
		//setup refresh
		avayaGlobal.log.info('refresh placed (outgoing)');
		chatSocket.setupRefresh();
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

        if (!onHoldMessagesDefined && !onHoldUrlsDefined) {
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
                typingImage.src = this.cdnLocation + ((agent.type === 'supervisor_barge') ? chatConfig.supervisorImage
                        : chatConfig.agentImage);
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
    },
	
	
	/**
	 * Get or set current environment
	 * @environment string production|development
	 * @return string
	 */
	getSetEnvironment: function(environment){
		if(typeof environment !== 'undefined'){
			this.environment = environment;
			return environment;
		}
		return this.environment;
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
		if(this.settings.cdnLocation){
			// allow for a custom specified CDN location say for local testing
			this.cdnLocation = this.settings.cdnLocation;
		}else if(host.match(/quality\./)){
			this.cdnLocation = '//qacdn.mscdirect.com/';
		}else if(host.match(/dev\./)){
			this.cdnLocation = '//devcdn.mscdirect.com/';
		}else{
			// production
			this.cdnLocation = '//cdn.mscdirect.com/';
		}
		
		// set environment
		if(this.settings.environment){
			this.getSetEnvironment(this.settings.environment);
		}else if(!host || host.match(/quality\./) || host.match(/dev(elop)*\./)){
			this.getSetEnvironment('development');
		}else{
			//production by default, no logging
			this.getSetEnvironment('production');
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
		        
        // check if there was a chat in progress before reloading
        chatSocket.reloadAfterRefresh();
        
        ewt.requestEwt();
        chatLogon.saveAttributeCount();

        // If chat is in progress, prevent user from accidentally closing the page.
        // Can't override default message due to security restrictions
        // so the value returned here doesn't really matter.
        window.onunload = function() {
            if (webChat.initCalled) {				
                chatSocket.setupRefresh();
				if(document.getElementById('outmessage').value.length){
					return "You will lose the message you are typing to the agent if you leave now.  Continue?";
				}
            }

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
    },
	
	chatPanelConfigureMinimize: function(){
		//build the minimize button if not already built
		if(!$('.presav-chatPanel .ui-dialog-titlebar .ui-dialog-titlebar-minimize').length){
			$('.ui-dialog-titlebar').append('<a href="#" style="right:40px;" class="ui-dialog-titlebar-minimize ui-corner-all" role="button"><span class="ui-icon ui-icon-minusthick">minimize</span></a>');
			//rolled back from jQuery on(), not present in ancient 1.4.2
			if($('.presav-chatPanel .ui-dialog-titlebar .ui-dialog-titlebar-minimize')){
				document.querySelector('.presav-chatPanel .ui-dialog-titlebar .ui-dialog-titlebar-minimize').addEventListener('click', function(){
					var panel = $('.presav-chatPanel');
					var style = panel.attr('style');
					if(panel.hasClass('presav-minimize')){
						//maximize the panel
						panel
							.removeClass('presav-minimize')
							.attr('style', chatUI.panelStyleMaximized);
						$('.presav-chatPanel .ui-dialog-titlebar-minimize span')
							.removeClass('ui-icon-plusthick')
							.addClass('ui-icon-minusthick');
						//reposition for any new messages received
						webChat.messages.scrollTop = webChat.messages.scrollHeight;
					}else{
						//minimize the panel
						chatUI.panelStyleMaximized = style;
						
						panel
							.addClass('presav-minimize')
							.attr('style', 'width: 200px; z-index: 1015; bottom: 0px; right: 20px; top: inherit; left: inherit; position: fixed !important;');
						$('.presav-chatPanel .ui-dialog-titlebar-minimize span')
							.removeClass('ui-icon-minusthick')
							.addClass('ui-icon-plusthick');
					}
					return false;
				});
			}
		}
	},
	
	chatPanelMaximize: function(){
		var panel = $('.presav-chatPanel');
		if(panel.hasClass('presav-minimize')){
			//maximize the panel
			panel
				.removeClass('presav-minimize')
				.attr('style', chatUI.panelStyleMaximized);
			$('.presav-chatPanel .ui-dialog-titlebar-minimize span')
				.removeClass('ui-icon-plusthick')
				.addClass('ui-icon-minusthick');
			//reposition for any new messages received
			webChat.messages.scrollTop = webChat.messages.scrollHeight;

		}
	},
	
    mover: {
    	/*
    	our goal is to keep the window inside the <body>, and make sure that either the live chat button, or the dialog, are showing.  I think logical place for the last part is on opening the dialog; in theory that will never be called unless there's a live chat button + a user click, at which point it needs to be managed.  If NEITHER, we should fade in the live chat button.

    	 */
    	running: null,
        monitor: function(){

    		var width = $(window).width();
    		var height = $(window).height();
    		var el = $('.presav-chatPanel');
    		var elWidth = el.width();
    		var elHeight = el.height();
    		var offset = el.offset();

    		if(el.is(':visible') && $('.bottom_chat_btn').is(':visible')){
				chatUI.showLiveChat(false);
            }

			if(width > 768) return;

            if(offset.left + elWidth > width || offset.left < 0){

            	el.css('left', '10px');
            	el.css('width', (width - 20 - 7) + 'px');
            	//seems you need to reset the width for the original element
                $('#chatPanel').css('width', '');
            }
        }

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

	chatUI.showLiveChat(false);
	
	var width = Math.min( 475, $(window).width() - 20 );
	//testing
	width = avayaGlobal.fromRequestCookieDefault('width', width);
	$('#chatPanel').dialog({
		width : width,
		dialogClass : 'presav-chatPanel',
		open: function(event, ui){
			avayaGlobal.log.info('dialog opened 1');

			webChat.chatPanelMaximize();
			webChat.chatPanelConfigureMinimize();
			
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
			
			var resizeCalled = false, box = document.getElementsByClassName('presav-chatPanel')[0];
			
			var maxWithScrollbar = Math.min(
				parseInt(document.body.clientWidth), 
				parseInt(document.body.scrollWidth), 
				parseInt(window.innerWidth) - 17 /* note I am assuming a vertical scrollbar */
			);
			if(parseInt(box.style.width) > maxWithScrollbar){
				avayaGlobal.log.info('resizing panel 1');
				resizeCalled = true;
				//re-position the panel x-wise
				box.style.width = (maxWithScrollbar - 30) + 'px';
				box.style.left = '15px';
			}
			if(!webChat.mover.running){
				webChat.mover.running = setInterval(webChat.mover.monitor, 1000);
			}
			
			//MOBILETEST Start
			avayaGlobal.log.info('mobile test 1');
			var params = {
				'event': 'open panel',
				'innerWidth': window.innerWidth,
				document_body_clientWidth: document.body.clientWidth,
				document_body_scrollWidth: document.body.scrollWidth,
				resizeCalled: resizeCalled ? 1 : 0,
				userAgent: navigator.userAgent,
				comment: (typeof window.comment === 'undefined' ? '' : window.comment),
				panelWidth: box.style.width,
				panelLeft: box.style.left,
				url: window.location.href,
			};
			var str = '';
			for(var i in params) str += i + '=' + encodeURI(params[i]) + '&';
			if(false) min_ajax({
				uri: 'https://www.compasspoint-sw.com/mobiletest/',
				params: str,
			});
			//MOBILETEST End
			
						
			//2019-04-29 - facing a bug where reloading the page, the panel opens in a different css top value.  Unable to solve, this attribute handles this.  You can remove it if you have a better understanding of why esp. jQuery dialog
			//string value
			localStorage.panelStartingTop = $('#chatPanel').parent().css('top');			
		},
		close: function(event, ui){
			avayaGlobal.log.info('dialog closed');
			if (webSocket !== undefined ) {
				avayaGlobal.log.info('calling closePanel (1)');
				chatUI.closePanel(event);    
			}
			chatUI.showLiveChat();
		},
	});	
	
	return false;
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function g_cookie(ck){
	var cVal = document.cookie;
	var cStart = cVal.indexOf(" " + ck + "=");
	if(cStart==-1)	cStart = cVal.indexOf(ck + "=");
	if(cStart == -1){
		cVal = null;
	}else{
		cStart = cVal.indexOf("=", cStart) + 1;
		var cEnd = cVal.indexOf(';', cStart);
		if(cEnd==-1) cEnd=cVal.length;
		cVal = unescape(cVal.substring(cStart,cEnd));
	}
	return cVal;
}

function s_cookie(cName,cVal,cExp,cPath){
	if(typeof cVal=='undefined'){
		//remove the cookie (pass only one variable)
		var date = new Date();
		date.setTime(date.getTime()+(-1*24*60*60*1000));
		var expiry='; expires='+date.toGMTString();
		document.cookie = cName + "="+cVal + expiry+path;
		return;
	}
	cVal = escape(cVal);
	if(typeof cExp == 'undefined'){
		var nw = new Date();
		nw.setMonth(nw.getMonth() + 6);
		var expiry= ";expires="+nw.toGMTString();
	}else if(cExp==0){
		var expiry='';
	}else{
		var date = new Date();
		date.setTime(date.getTime()+(cExp*24*60*60*1000));
		var expiry='; expires='+date.toGMTString();
	}
	if(typeof cPath == 'undefined'){
		var path=';Path=/';
	}else{
		var path = ";Path="+cPath;
	}
	document.cookie = cName + "="+cVal + expiry+path;
}

function min_ajax(config){
	/**
	 * This function can be run with just config.uri,
	 * config.params is usually also required depending on what your API expects.
	 * config.params should be in name-value pair format and properly escaped
	 */
	var params = '', xhr = new XMLHttpRequest();
	xhr.open(config.method ? config.method.toUpperCase() : 'POST', config.uri);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.responseType = config.responseType ? config.responseType.toLowerCase() : 'json';
	xhr.onload = function() {
		// this normally happens in IE
		if(xhr.responseType === 'json' && xhr.response && typeof xhr.response === 'string'){
			xhr.response = JSON.parse(xhr.response);
		}
		if(typeof config.either === 'function'){
			config.either(xhr);
		}
		if (xhr.status === 200) {
			if(typeof config.success === 'function') config.success(xhr);
		} else {
			// handle this
			if(typeof config.error === 'function') config.error(xhr);
		}
	};
	// for processes that need to work on the xhr before the request is sent
	if(typeof config.before === 'function'){
		//currently no return value
		config.before(xhr);
	}
	//xhr.onload = config.onload;
	if(typeof config.params === 'object'){
		//process variables
	}else{
		//no action needed; assumed correct string format
		params = config.params ? config.params : '';
	}
	xhr.send(params);
	if(typeof config.immediately === 'function'){
		config.immediately(xhr);
	}
}





/* ---- File (11): oceanaCoreData.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Handles interactions with OceanaCoreDataService.
 */

var oceanaCoreData = {

    /**
     * Non-Oceana data.
     */
    data: {},
        
    /**
     * This is a holder for the attributes.
     */
    attributes : {
        'Channel' : [ 'Chat' ]
    }, 

    /**
     * Temporary attributes are used to hold things while creating a context or requesting attributes.
     */
    tempAttributes : {},
    requestingAttributes : false,

    /**
     * The initial priority. 5 is default.
     */
    priority : 5,

    /**
     * Issue a GET request to the Oceana Core Data Services to get the current context.
     */
    getContext : function() {
        'use strict';
        if (customerJourneyCommon.contextId === '') {
            avayaGlobal.log.warn('CustomerJourney: Cannot retrieve attributes if contextId is empty! Create a context first');
            return;
        }
        oceanaCoreData.requestingAttributes = true;

        // retrieve the service map
        var serviceMapRequest = new XMLHttpRequest();
        var URL = links.getOceanaCoreDataServicesUrl() + 'context/' + customerJourneyCommon.contextId;
        serviceMapRequest.open('GET', URL);
        serviceMapRequest.setRequestHeader('Content-Type', 'application/json');
        serviceMapRequest.addEventListener('readystatechange', oceanaCoreData.handleGetContextResponse);
        serviceMapRequest.send();
    },

    /**
     * Handle the response for the context. 'this' refers to the XMLHttpRequest in getContext.
     * If there were temporary attributes being added before the service map was returned, they will be added here. 
     */
    handleGetContextResponse : function() {
        'use strict';
        if (this.readyState === 4) {
            if (this.status === 200) {
                var json = JSON.parse(this.response);
                
                oceanaCoreData.nonOceanaData = json.data;
                oceanaCoreData.attributes = json.schema.ServiceMap["1"].attributes;
                oceanaCoreData.requestingAttributes = false;
                if (!avayaGlobal.isJsonEmpty(oceanaCoreData.tempAttributes)) {
                    oceanaCoreData.addTemporaryAttributes();
                }
            } else {
                avayaGlobal.log.warn("Customer Journey: ", this.responseText);
                
                if (this.status === 0) {
                    avayaGlobal.log.warn("Customer Journey: returned 0. This may be caused by CORS issues or by blocking JavaScript");
                }

                // if the user visits a page with the Context Store SDK, they may not have a schema.
                // if so, create one using the context ID
                if (this.responseText.indexOf('does not have a schema') > 0) {
                    oceanaCoreData.initialise();
                }

            }
        }
    },

    /**
     * Add temporary attributes (attributes that were added while creating context or requesting attributes). 
     */
    addTemporaryAttributes : function() {
        'use strict';
        for ( var key in oceanaCoreData.tempAttributes) {

            // filter properties before acting on them
            if (oceanaCoreData.tempAttributes.hasOwnProperty(key)) {
                avayaGlobal.log.debug('CustomerJourney: Examining key ' + key + '.' + oceanaCoreData.attributes[key]);

                // check if this key already exists
                if (oceanaCoreData.attributes[key] !== undefined) {
                    avayaGlobal.log.debug('The key ' + key +
                            ' exists in the temp attributes and CS attributes. Temp value ' +
                            oceanaCoreData.tempAttributes[key] + '; actual value ' + oceanaCoreData.attributes[key]);

                    // merge the arrays and add back into the attribute
                    var result = oceanaCoreData.mergeAttributeArrays(oceanaCoreData.attributes[key],
                            oceanaCoreData.tempAttributes[key]);
                    oceanaCoreData.attributes[key] = result;
                } else {
                    oceanaCoreData.attributes[key] = oceanaCoreData.tempAttributes[key];
                }
            }
        }

        avayaGlobal.log.debug('CustomerJourney: Temporary attributes merged. Attributes are now ' + oceanaCoreData.attributes);

        // update the attributes, and reset the temporary ones
        oceanaCoreData.updateAttributes();
        oceanaCoreData.tempAttributes = {};
    },

    /**
     * Merge the attribute arrays.
     * @param csArray - the values associated in Context Store with an attribute
     * @param tempArray - the values associcated locally with an attribute
     * @returns a merged array without duplicates.
     */
    mergeAttributeArrays : function(csArray, tempArray) {
        'use strict';
        var result = csArray;
        for (var i = 0; i < tempArray.length; i++) {
            var tmp = tempArray[i];
            avayaGlobal.log.debug('CustomerJourney: Checking if ' + tmp + ' exists in CS attributes');
            if (csArray.indexOf(tmp) < 0) {
                avayaGlobal.log.debug('CustomerJourney: The value ' + tmp + ' does not exist in the array');
                csArray.push(tmp);
            }
        }
        return result;
    },

    /**
     * Update the attributes by issuing a PUT request to the Oceana Core Data Services. If the
     * contextId hasn't been set, it will not send.
     */
    updateAttributes : function() {
        'use strict';

        if (customerJourneyCommon.contextId === '') {
            avayaGlobal.log.warn('CustomerJourney: Cannot update attributes without a context ID! Create a context first.');
            return;
        }

        avayaGlobal.log.debug('CustomerJourney: Updating attributes for ID ' + customerJourneyCommon.contextId);

        // updating the service map and data does not require the full schema
        var priority = oceanaCoreData.priority.toString();
        var json = {
                'data' : oceanaCoreData.data,
                'ServiceMap' : {
                    '1' : {
                        'attributes' : oceanaCoreData.attributes,
                        'priority' : priority
                    }
                }
        };
        
        var request = new XMLHttpRequest();
        var URL = links.getOceanaCoreDataServicesUrl() + 'update/serviceMap/' + customerJourneyCommon.contextId +
                '?journeyElement=' + customerJourneyCommon.pageTouchpoint;
        request.open('PUT', URL);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('readystatechange', oceanaCoreData.handleGenericUpdateResponse);
        request.send(JSON.stringify(json));
    },

    /**
     * Parse the response from the Oceana Core Data Services. If it returns HTTP 200, the request worked. 
     * Otherwise, log the response. This is for generic response, which do not contain any value to extract.
     */
    handleGenericUpdateResponse : function() {
        'use strict';
        if (this.readyState === 4) {
            if (this.status === 0) {
                avayaGlobal.log.warn("Customer Journey: returned 0 when updating data. This may be caused by CORS issues or by blocking JavaScript");
            } else {
                avayaGlobal.log.warn('CustomerJourney: Updating data returned HTTP ' + this.status + ' - ' + this.responseText);    
            }
        }
    },

    /**
     * Add or update a routing attribute.
     * @param newAttribute in format Attribute.Value e.g. Language.English
     */
    addAttribute : function(newAttribute) {
        'use strict';

        if (!customerJourneyCommon.canAddAttributes()) {
            avayaGlobal.log.warn('OCPROVIDER-1026: cannot have more than 10 attributes in total');
            return;
        }
        
        if (newAttribute.trim() === '' || newAttribute === undefined){
            avayaGlobal.log.error('CustomerJourney: Cannot add an undefined or empty attribute! Add an attribute in the format Key.Value, e.g. Language.English');
            return;
        }

        // get the attribute ID (e.g. Language)
        var array = newAttribute.split('.');
        var attributeId = array.shift();

        if (customerJourneyCommon.contextId === '') {
            avayaGlobal.log.warn('CustomerJourney: Cannot update attributes if context ID is empty! Initialising new context');
            oceanaCoreData.initialise();
        }

        // check if the attribute exists.
        var attributeExists = oceanaCoreData.attributes.hasOwnProperty(attributeId);
        var oldArray;
        if (!attributeExists) {
            avayaGlobal.log.debug('CustomerJourney: The attribute ' + attributeId + ' does not exist. It can be added');
            oldArray = [];
        } else {
            oldArray = oceanaCoreData.attributes[attributeId];
        }

        // add the new attribute to the current ones, if it doesn't exist
        if (oldArray.indexOf(array[0]) < 0) {
            oldArray.push(array[0]);

            // should now be e.g. 'Language' : ['English', 'French']
            oceanaCoreData.attributes[attributeId] = oldArray;
            avayaGlobal.log.debug('CustomerJourney: Attributes are now ' + JSON.stringify(oceanaCoreData.attributes));
            oceanaCoreData.updateAttributes();
            oceanaCoreData.totalAttributes++;
            avayaGlobal.setSessionStorage('totalAttributes', oceanaCoreData.totalAttributes);
        }

    },

    /**
     * Initialise the context.
     */
    initialise : function() {
        'use strict';
        if (avayaGlobal.log === null) {
            avayaGlobal.log = avayaGlobal.makeLogger();
        }

        var totalAttr = avayaGlobal.getSessionStorage('totalAttributes');
        oceanaCoreData.totalAttributes = (totalAttr !== null ? parseInt(totalAttr) : 0);
        avayaGlobal.log.debug('CustomerJourney: Total attributes are now ' + oceanaCoreData.totalAttributes);

        // load the customer ID
        customerJourneyCommon.loadCustomerId();

        // check if the context ID is empty or null. If it is, create a context;
        // otherwise, get the attributes
        var contextId = customerJourneyCommon.loadContextId();
        if (contextId === null || contextId === '') {
            avayaGlobal.log.info('CustomerJourney: Context ID is null. Creating a new context');
            oceanaCoreData.createContext();
        } else {
            avayaGlobal.log.info('CustomerJourney: Context ID is ' + contextId + '. Requesting previously-gathered attributes');
            oceanaCoreData.getContext();
        }
    },

    /**
     * Create a new Context using the Oceana Core Data Services.
     */
    createContext : function() {
        'use strict';
        if (oceanaCoreData.csInstance === null || avayaGlobal.isJsonEmpty(oceanaCoreData.attributes) ||
                oceanaCoreData.customerId === '') {
            avayaGlobal.log.warn('CustomerJourney: Cannot create context if customerID or attributes are empty! Request a customer ID and add attributes first');
            return;
        }
        avayaGlobal.log.info('CustomerJourney: Creating a context');
        
        // the API requires a String. However, it is easier for us to validate an Integer.
        var priority = oceanaCoreData.priority.toString();

        // create the full schema here
        var json = {
                'data' : oceanaCoreData.nonOceanaData,
                //'topic' : customerJourneyCommon.getPageTopic(),
                'schema' : {
                    'ServiceMap' : {
                        '1' : {
                            'attributes' : oceanaCoreData.attributes,
                            'priority' : priority
                        }
                    },
                    'CustomerId' : customerJourneyCommon.customerId,
                    "Strategy" : "Most Idle"
                },


                'groupId' : customerJourneyCommon.customerId,
                'contextId' : customerJourneyCommon.contextId,
                'persistToEDM' : true
        };
        
        var contextRequest = new XMLHttpRequest();
		try{
        contextRequest.timeout = 10000;
		} catch(e){}
        contextRequest.open('POST', links.getOceanaCoreDataServicesUrl() + 'context/schema?journeyElement=' +
                customerJourneyCommon.pageTouchpoint);
        contextRequest.setRequestHeader('Content-Type', 'application/json');
        contextRequest.addEventListener('readystatechange', oceanaCoreData.handleCreateContextResponse);
        contextRequest.send(JSON.stringify(json));
    },

    /**
     * Handle the response from the context request. 'this' refers to the XMLHttpRequest in createContext.
     */
    handleCreateContextResponse : function() {
        'use strict';
        if (this.readyState === 4) {
            if (this.status === 200) {
                // set the context ID if this was successful.
                customerJourneyCommon.setContextId(JSON.parse(this.response).data.contextId);
				chatLogon.addContextData();
				avayaGlobal.log.info('OCD: Context ID  after creation and add context ' + avayaGlobal.getSessionStorage('contextId'));
				} else if (this.status === 0) {
                avayaGlobal.log.warn("Customer Journey: Requesting a Context returned 0. This may be caused by CORS issues or by blocking JavaScript");
            } else {
                avayaGlobal.log.warn('CustomerJourney: Creating Context returned HTTP ' +this.status + ' - ' + this.responseText);
            }
        }
    },

    /**
     * Update the customer ID. This will return a 200 OK status if succesful.
     */
    updateCustomerId : function() {
        'use strict';
        var json = {
            'CustomerId' : customerJourneyCommon.customerId
        };
        var request = new XMLHttpRequest();
        request.open('PUT', links.getOceanaCoreDataServicesUrl() + 'update/customerId/' + customerJourneyCommon.contextId);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('readystatechange', oceanaCoreData.handleGenericUpdateResponse);
        request.send(JSON.stringify(json));
    },
    
    /**
     * Set the priority. If invalid (i.e. not a number, less than 1 or greater than 10), it resets it to 5.
     * @param priority - the new priority of the customer.
     */
    setPriority: function(newPriority) {
        'use strict';
        if (newPriority < 1 || newPriority > 10 || typeof newPriority !== 'number') {
            avayaGlobal.log.warn('Customer Journey: Priority (' + newPriority + ') is invalid! Resetting to default (5)');
            newPriority = 5;
        }
        oceanaCoreData.priority = newPriority;
    }, 
    
    /**
     * Add extra data that has nothing to do with routing.
     * @param {String} key - the key. Must be a string.
     * @param {Object} value
     */
    addDataPair: function(key, value) {
        'use strict';
        if (typeof(key) !== 'string') {
            avayaGlobal.log.warn('Customer Journey: Data entries must have a valid key that is of type String!');
            return;
        }
        
        oceanaCoreData.data[key] = value;
    },
    
    /**
     * Update the topic in OCDS.
     * @param {String} newTopic
     */
    updateTopic: function(newTopic){
        "use strict";
        
        // some basic validation
        if (newTopic === undefined || avayaGlobal.isStringEmpty(newTopic) || avayaGlobal.isStringEmpty(customerJourneyCommon.contextId)) {
            avayaGlobal.log.error("Customer Journey: The topic and context ID must not be empty or undefined when updating the topic!");
            return;
        }
        
        var url = links.getCustomerManagementUrl() + "/oceana/data/update/topic/"+customerJourneyCommon.contextId+"?topic=" + newTopic;
        var request = new XMLHttpRequest();
        request.open('PUT', url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('readystatechange', oceanaCoreData.handleGenericUpdateResponse);
        request.send();
    }
    
};


/* ---- File (12): customerJourneyCommon.js; compiled 2019-08-12 12:51:32 by /src/compile.php ---- */
/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Holds common data for Customer Journey requests.
 */

var customerJourneyCommon = {

    contextId : '',
    customerId : 'DefaultCustomerId',
    
    // the page touchpoint is referred to in Oceana as the "customer journey element".
    // For the sake of backwards compatibility, the name here is not changed.
    pageTouchpoint : 'web',

    /**
     * Work Assignment is limited to 10 attributes per context ID in total. This limit includes the attributes here
     * and those used to log into the chat.
     * Reduce this to match the default chat attributes in webChatLogon.js, e.g. if you have five attributes as defaults
     * in webChatLogon.js, lower this to 5.
     */
    maxAttributes : 10,
    totalAttributes : 0,

    // listeners are any cusomterjourney code here.
    listeners : [],

    /**
     * Set the page touchpoint
     */
    setPageTouchpoint : function(newPageTouchpoint) {
        'use strict';
        customerJourneyCommon.pageTouchpoint = newPageTouchpoint;
    },

    /**
     * Clears the context ID. Resets the total attributes as well.
     */
    clearContextId : function() {
        'use strict';
        customerJourneyCommon.setContextId('');
        avayaGlobal.setSessionStorage('totalAttributes', 0);
    },

    /**
     * Set the context ID.
     * @param newId
     */
    setContextId : function(newId) {
        'use strict';
        customerJourneyCommon.contextId = newId;
        customerJourneyCommon.saveContextId();
    },

    /**
     * Save the context ID to the browser's session storage
     */
    saveContextId : function() {
        'use strict';
        avayaGlobal.log.info('CustomerJourney: Context ID is now ' + customerJourneyCommon.contextId);
        avayaGlobal.setSessionStorage('contextId', customerJourneyCommon.contextId);
    },

    /**
     * Load the contextId.
     * @return contextId from sessionStorage
     */
    loadContextId : function() {
        'use strict';
        var id = avayaGlobal.getSessionStorage('contextId');
        customerJourneyCommon.contextId = id;
        return id;
    },

    setCustomerId : function(id) {
        'use strict';
        customerJourneyCommon.customerId = id;
        avayaGlobal.setSessionStorage('customerId', id);
    },

    loadCustomerId : function() {
        'use strict';
        var custId = avayaGlobal.getSessionStorage('customerId');
        customerJourneyCommon.customerId = custId || customerJourneyCommon.customerId;
    },
    
    clearCustomerId: function(){
        'use strict';
        customerJourneyCommon.setCustomerId('DefaultCustomerId');
    },

    /**
     * Set up the Customer Journey
     */
    setup : function() {
        'use strict';
        avayaGlobal.detectBrowserSupport();
        avayaGlobal.log = avayaGlobal.makeLogger(webChat);

        customerJourneyCommon.loadUrlsFromStorage();
        customerJourneyCommon.getTouchpointFromPage();
        customerJourneyCommon.loadCustomerId();
        customerJourneyCommon.addListeners();
        links.setupSecurity();
    },
    
    reset: function(){
        'use strict';
        customerJourneyCommon.clearContextId();
        customerJourneyCommon.clearCustomerId();
    },

    /**
     * Add listeners to the page
     */
    addListeners: function(){
        'use strict';
        var listeners = [];
        if (window.contextStore !== undefined) {
            listeners.push(window.contextStore);
        }
        if (window.oceanaCoreData !== undefined){
            listeners.push(window.oceanaCoreData);
        }
        if (listeners.count === 0){
            avayaGlobal.log.error('CustomerJourney: No customer journey listeners on the page');
        }
        customerJourneyCommon.listeners = listeners;
    },

    /**
     * Returns true if the customer has less than ten attributes.
     */
    canAddAttributes : function() {
        'use strict';
        return (customerJourneyCommon.totalAttributes < customerJourneyCommon.maxAttributes);
    },

    /**
     * Request a customer ID using a particular parameter.
     * @param paramName - name of the parameter e.g. 'email'.
     * @param paramValue - value of the parameter
     */
    requestCustomerId : function(paramName, paramValue) {
        'use strict';
        avayaGlobal.log.debug('CustomerJourney: Requesting Customer ID using parameter ' + paramName);
        var url = links.getCustomerManagementUrl() + '/rest/customers/customerId?' + paramName + '=' + paramValue;
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.addEventListener('readystatechange', customerJourneyCommon.parseCustomerId);
        request.send('');
    },

    /**
     * Parse the customer ID. This will initialise any listeners on the page. 'this' refers the XMLHttpRequest
     * in requestCustomerId().
     */
    parseCustomerId : function() {
        'use strict';
        if (this.readyState === 4) {
            var response = this.response;
            avayaGlobal.log.debug('CustomerJourney: Parsing customer ID');
            var ui = window.contextStoreUI;
            
            // if successful, let the customer know their customer ID.
            if (this.status === 200) {
                var id = JSON.parse(response).customerId;
                customerJourneyCommon.setCustomerId(id);
                ui.setSubscribeStatus('You have subscribed. Your ID is ' + id);
                var listeners = customerJourneyCommon.listeners;
                
                // initialise the context
                for (var i = 0; i < listeners.length; i++){
                    listeners[i].initialise();
                }
                ui.cleanSubscribePanel();
            } else {
                var json = JSON.parse(response);
                avayaGlobal.log.error('CustomerJourney: ' + response);
                var errorString = json.errors[0].type + ': ' + json.errors[0].message;
                ui.setSubscribeStatus(errorString);
            }
        }

    },

    /**
     * Utility function to use the page's location (e.g. products.html) as the touchpoint. This will be called by default.
     * to override this, call `customerJourneyCommon.setPageTouchpoint('foo');`
     */
    getTouchpointFromPage: function(){
        'use strict';
        var fileName = links.getPageName();
        customerJourneyCommon.setPageTouchpoint(fileName);
    },

    /**
     * Utility to load URLs from local storage while testing. Does not set up chat/EWT/CoBrowsing URLs.
     */
    loadUrlsFromStorage: function(){
        'use strict';
        var settings = localStorage.getItem('chatSettings');
        var json = JSON.parse(settings);
        var location = links.getPathNameForConfig();

        if (json !== null){
            var details = json[location];
            var urls = details.urls;
            links.contextStoreHost = urls.contextStoreHost;
            links.secureAllConnections = urls.secureAllConnections;
        }
        
    },
    
    /**
     * Returns the value of the "pageTopic" input. Will remove all spaces or forbidden characters
     * @returns {.document@call;getElementById.value|Element.value}
     */
    getPageTopic: function() {
        'use strict';
		/* Removed for now as it doesn't work as a comment
		*/
		return '';
        return avayaGlobal.getEl("pageTopic").value.replace(/[ #~?@$\s]/g, "");
    }

};


// append the HTML to to document body
$(document).ready(function(){
    $('body').append(_AVAYA_HTML_);
});
