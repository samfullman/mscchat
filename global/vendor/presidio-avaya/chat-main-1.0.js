/* Presidio concatenated file sfullman@presidio.com.  File manifest: 
    _AVAYA_HTML_.html
    libs/xmlToJSON.js
    libs/AvayaClientServices.min.js
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
/* ---- File (1): _AVAYA_HTML_.html; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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


/* ---- File (2): libs/xmlToJSON.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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


/* ---- File (3): libs/AvayaClientServices.min.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
!function(a){"use strict";function b(a){this.clientConfiguration=a,this.user=void 0,this.mediaEngine=void 0}b.prototype={createUser:function(a){return this.user||(this.user=new b.User(a)),this.user},registerLogger:function(a){b.Base.Logger.addLogger(a)},getMediaEngine:function(){if(void 0===this.mediaEngine){var a=new b.Base.AudioInterface,c=new b.Base.VideoInterface,d=new b.Base.UserMedia;this.mediaEngine=new b.Base.MediaEngine(a,c,d)}return this.mediaEngine}},a.AvayaClientServices=b}(window),function(a){"use strict";!function(a){a.Base=a.Base||{}}(a),function(a){a.Config=a.Config||{}}(a),function(a){a.Services=a.Services||{}}(a),function(a){a.Services.Call=a.Services.Call||{}}(a),function(a){a.Services.Collaboration=a.Services.Collaboration||{}}(a),function(a){a.Services.Messaging=a.Services.Messaging||{}}(a),function(a){a.Services.Conference=a.Services.Conference||{}}(a),function(a){a.Services.Contacts=a.Services.Contacts||{}}(a),function(a){a.Services.ContentSharing=a.Services.ContentSharing||{}}(a),function(a){a.Services.Presence=a.Services.Presence||{}}(a)}(AvayaClientServices),function(a){"use strict";!function(a){a.Base.Validators=a.Base.Validators||{}}(a),function(a){a.Providers=a.Providers||{}}(a),function(a){a.Providers.Interfaces=a.Providers.Interfaces||{}}(a),function(a){a.Providers.AMM=a.Providers.AMM||{}}(a),function(a){a.Providers.Call=a.Providers.Call||{}}(a),function(a){a.Providers.CallGateway=a.Providers.CallGateway||{}}(a),function(a){a.Providers.CallServiceGateway=a.Providers.CallServiceGateway||{}}(a),function(a){a.Providers.Scopia=a.Providers.Scopia||{}}(a),function(a){a.Providers.Focus=a.Providers.Focus||{}}(a),function(a){a.Providers.RTC=a.Providers.RTC||{}}(a),function(a){a.Providers.UCCP=a.Providers.UCCP||{}}(a),function(a){a.Providers.WCS=a.Providers.WCS||{}}(a),function(a){a.Providers.WSP=a.Providers.WSP||{}}(a),function(a){a.User=a.User||{}}(a),function(a){a.Services.Call=a.Services.Call||{}}(a),function(a){a.Services.SessionLogs=a.Services.SessionLogs||{}}(a),function(a){a.Services.Messaging.Common=a.Services.Messaging.Common||{}}(a),function(a){a.Providers.ACS=a.Providers.ACS||{}}(a),function(a){a.Services.SessionLogs=a.Services.SessionLogs||{}}(a),function(a){a.Providers.ContentSharing=a.Providers.ContentSharing||{}}(a)}(AvayaClientServices),function(a){"use strict";var b={CAPABILITY_NOT_DENIED:"CAPABILITY_NOT_DENIED",CAPABILITY_INVALID_STATE:"CAPABILITY_INVALID_STATE",CAPABILITY_NOT_SUPPORTED:"CAPABILITY_NOT_SUPPORTED",CAPABILITY_CALL_IS_REMOTE:"CAPABILITY_CALL_IS_REMOTE",CAPABILITY_CALL_IS_NOT_REMOTE:"CAPABILITY_CALL_IS_NOT_REMOTE",CAPABILITY_CALL_HAS_NO_AUDIO:"CAPABILITY_CALL_HAS_NO_AUDIO",CAPABILITY_CALL_HAS_NO_VIDEO:"CAPABILITY_CALL_HAS_NO_VIDEO",CAPABILITY_NOT_ALLOWED:"CAPABILITY_NOT_ALLOWED",CAPABILITY_NEED_SIGNIN:"CAPABILITY_NEED_SIGNIN",CAPABILITY_NEED_MODERATOR:"CAPABILITY_NEED_MODERATOR",CAPABILITY_NEED_SIGNIN_OR_MODERATOR:"CAPABILITY_NEED_SIGNIN_OR_MODERATOR"};a.Base.CapabilityDenialReason=b}(AvayaClientServices),function(a,b){"use strict";function c(c){this.isAllowed=c===a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this.denialReason=c,this._onChangedCallbacks=b.Callbacks()}c.prototype={addOnChangedCallback:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"function"}]}),this._onChangedCallbacks.add(b)},removeOnChangedCallback:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"function"}]}),this._onChangedCallbacks.remove(b)},_updateIfChanged:function(a,b){(this.isAllowed!==a||this.denialReason!==b)&&(this.isAllowed=a,this.denialReason=b,this._onChangedCallbacks.fire(this))}},a.Base.Capability=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a){this.dataSet=a,this.dataRetrievalProgress=$.Callbacks(),this.dataRetrievalDone=$.Callbacks(),this.dataRetrievalFailed=$.Callbacks()}b.prototype={getDataSet:function(){return this.dataSet},addOnDataRetrievalProgressCallback:function(a){this.dataRetrievalProgress.add(a)},removeOnDataRetrievalProgressCallback:function(a){this.dataRetrievalProgress.remove(a)},onDataRetrievalProgress:function(a,b,c){this.dataRetrievalProgress.fire(this,arguments)},addOnDataRetrievalDoneCallback:function(a){this.dataRetrievalDone.add(a)},removeOnDataRetrievalDoneCallback:function(a){this.dataRetrievalDone.remove(a)},onDataRetrievalDone:function(){this.dataRetrievalDone.fire(this,arguments)},addOnDataRetrievalFailedCallback:function(a){this.dataRetrievalFailed.add(a)},removeOnDataRetrievalFailedCallback:function(a){this.dataRetrievalFailed.remove(a)},onDataRetrievalFailed:function(a){this.dataRetrievalFailed.fireWith(this,arguments)}},a.Base.DataRetrieval=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(){this.dataSetChangeCallbacks=b.Callbacks(),this.dataSetInvalidatedCallbacks=b.Callbacks()}c.prototype=Object.create(Array.prototype),c.prototype.addOnDataSetChangedCallback=function(a){this.dataSetChangeCallbacks.add(a)},c.prototype.removeOnDataSetChangedCallback=function(a){this.dataSetChangeCallbacks.remove(a)},c.prototype.onDataSetChanged=function(){this.dataSetChangeCallbacks.fire(this)},c.prototype.addOnDataSetInvalidatedCallback=function(a){this.dataSetInvalidatedCallbacks.add(a)},c.prototype.removeOnDataSetInvalidatedCallback=function(a){this.dataSetInvalidatedCallbacks.remove(a)},c.prototype.onDataSetInvalidated=function(){this.dataSetInvalidatedCallbacks.fire(this)},a.Base.DataSet=c}(window.AvayaClientServices,jQuery),function(a){"use strict";function b(a){return"undefined"!=typeof c[a]?c[a]:void 0}var c={INDETERMINATE:"INDETERMINATE",DETERMINATE:"DETERMINATE"};a.Base.Determinateness=b}(AvayaClientServices=AvayaClientServices||{}),function(){"use strict";function a(a,b,c,d){AvayaClientServices.Base.Utils.isDefined(d)?a[b](c,d):a[b](c)}function b(a,b,c,d){AvayaClientServices.Base.Utils.isDefined(d)?a.log(b,c,d):a.log(b,c)}var c=[];AvayaClientServices.Base.Logger={log:function(a,d,e){c.forEach(function(c){b(c,a,d,e)})},info:function(d,e){c.forEach(function(c){"function"==typeof c.info?a(c,"info",d,e):b(c,"info",d,e)})},error:function(d,e){c.forEach(function(c){"function"==typeof c.error?a(c,"error",d,e):b(c,"error",d,e)})},fatal:function(d,e){c.forEach(function(c){"function"==typeof c.fatal?a(c,"fatal",d,e):b(c,"fatal",d,e)})},debug:function(d,e){c.forEach(function(c){"function"==typeof c.debug?a(c,"debug",d,e):b(c,"debug",d,e)})},trace:function(d,e){c.forEach(function(c){"function"==typeof c.trace?a(c,"trace",d,e):b(c,"trace",d,e)})},warn:function(d,e){c.forEach(function(c){"function"==typeof c.warn?a(c,"warn",d,e):b(c,"warn",d,e)})},addLogger:function(a){if(!a||"undefined"==typeof a.log)throw new TypeError("Logger should implement log method.");c.push(a)},removeLogger:function(a){var b=c.indexOf(a);if(-1===b)throw new Error("Specified error does not exist.");c.splice(b,1)}}}(),function(a,b){"use strict";function c(){this._audioCaptureDeviceId=void 0}c._currentChannelId=1,c.prototype={createAudioOnlyChannel:function(){return a.Base.MediaEngine.createChannel()},getAvailableRecordDevices:function(){},getUserRequestedMicrophone:function(){},setUserRequestedMicrophone:function(a){this._audioCaptureDeviceId=a.getDeviceId()}},a.Base.AudioInterface=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(a,b,c){this._audioInterface=a,this._videoInterface=b,this._userMedia=c}c._currentChannelId=1,c.createChannel=function(){return c._currentChannelId++},c.prototype={getAudioInterface:function(){return this._audioInterface},getVideoInterface:function(){return this._videoInterface},getRemoteMediaStream:function(a){},getLocalMediaStream:function(a){}},a.Base.MediaEngine=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){return this.isAvailable()?void 0:void console.info("UserMedia not available")}var c=navigator.getUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia;b.prototype.isAvailable=function(){return c},b.prototype.getUserMedia=function(a,b,d){var e={};a?(a.fake&&(e.fake=a.fake),a.audio&&(e.audio=a.audio),a.video&&(e.video=a.video)):(e.audio=!0,e.video=!0),console.debug("getUserMedia with mediaOptions "+JSON.stringify(e)),c.call(navigator,e,function(a){b(a)},function(){d()}.bind(b))},b.prototype.getStreamDescriptors=function(b){var c=[];return b.getTracks().forEach(function(b){"audio"===b.kind?c.push(new a.Providers.Interfaces.AudioStream(b.id,a.Providers.Interfaces.StreamDirection.SENDRECV)):"video"===b.kind&&c.push(new a.Providers.Interfaces.VideoStream(b.id,a.Providers.Interfaces.StreamDirection.SENDRECV))}),c},a.Base.UserMedia=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(){this._videoCaptureDeviceId=void 0}c.prototype={createVideoChannel:function(){return a.Base.MediaEngine.createChannel()},setSelectedCamera:function(a){this._videoCaptureDeviceId=a.getDeviceId()},getSelectedCamera:function(){}},a.Base.VideoInterface=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){this._config={},this._credentialProvider={}}b.prototype={start:function(a,b,c){this._config=a,this._credentialProvider=b,this.onOpen()},send:function(a,b){},_onCredentialsRequired:function(a){},close:function(){this.onClose()},onOpen:function(){},onClose:function(){},onMessage:function(a){},onError:function(a){}},a.Base.AbstractNetworkProvider=b}(AvayaClientServices),function(a){"use strict";function b(b,c){function d(a,b){a.onOpen=function(a){b.onOpen(a)},a.onMessage=function(a,c){b.onMessage(a,c)},a.onClose=function(a){b.onClose(a)},a.onError=function(a){b.onError(a)}}a.Base.AbstractNetworkProvider.apply(this),this._communicationAdapter={},this._mainProvider=b,this._fallbackProvider=c,this._onCredentialsRequired=function(){},d(this._mainProvider,this),this._fallbackProvider&&d(this._fallbackProvider,this),this._mainProvider.onConnectionUnavailable=function(){this._fallbackProvider?(this._communicationAdapter=this._fallbackProvider,this._communicationAdapter.start(this._config,this._credentialProvider)):this._communicationAdapter.onClose("Connection unavailable!")}.bind(this),this._communicationAdapter=this._mainProvider,this._config={},this._credentialProvider={}}b.prototype=Object.create(a.Base.AbstractNetworkProvider.prototype),b.prototype.start=function(a,b,c){this._config=a,this._credentialProvider=b;var d={message:void 0,options:c};this._credentialProvider&&this._onCredentialsRequired(d),this._communicationAdapter.start(this._config,this._credentialProvider,d.options)},b.prototype.send=function(a,b){var c={message:a,options:b};return this._credentialProvider&&this._onCredentialsRequired(c),this._communicationAdapter.send(c.message,c.options)},b.prototype.close=function(){return this._communicationAdapter.close()},b.prototype.isOpened=function(){return this._communicationAdapter.isOpened()},a.Base.NetworkProvider=b}(AvayaClientServices),function(a){"use strict";function b(){var b,d=this;this._url="",this._interval=1e3,this.startPolling=function(e,f,g,h){this._url=e,this._interval=f,b=setInterval(function(){a.Base.Logger.log("polling "+d._url),c(d._url,g,h,function(a){d.onMessage({data:a})},function(a){d.onError(a)})},d._interval)},this.stopPolling=function(){clearInterval(b)}}function c(b,c,d,e,f){var g={type:"GET",url:b,dataType:"text",data:$.param(c)};if(a.Base.Utils.isDefined(d)&&(d.crossDomain&&d.crossDomain===!0&&(g.xhrFields={withCredentials:!0},g.crossDomain=!0),d.authentication&&"Basic"===d.authentication.type)){var h="Basic "+btoa(d.authentication.username+":"+d.authentication.password);g.beforeSend=function(a){a.setRequestHeader("Authorization",h)}}return $.ajax(g).then(e,f)}a.Providers=a.Providers||{},b.prototype=Object.create(a.Base.AbstractNetworkProvider.prototype),a.Base.PollingRESTProvider=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(){this._config={},this._xhrPool=[]}c.prototype=Object.create(a.Base.AbstractNetworkProvider.prototype),c.prototype.defaultOptions={url:void 0,sendType:"POST",urlSuffix:"",dataType:"text",headers:{},processData:!0},c.prototype.send=function(a,c){var d=b.extend({},this.defaultOptions,c),e=this._getServerURL(d),f={url:e,type:d.sendType,dataType:d.dataType,headers:d.headers,processData:d.processData,beforeSend:function(a){this._xhrPool.push(a)}.bind(this)};if(a&&(f.data=a),d.crossDomain&&d.crossDomain===!0&&(f.xhrFields={withCredentials:!0},f.crossDomain=!0),d.authentication&&"Basic"===d.authentication.type){var g="Basic "+btoa(d.authentication.username+":"+d.authentication.password);f.beforeSend=function(a){a.setRequestHeader("Authorization",g),this._xhrPool.push(a)}.bind(this)}return b.ajax(f).then(function(a,b,c){return this._xhrPool.splice(this._xhrPool.indexOf(c),1),this.onMessage(a,c),a}.bind(this),function(a){return this.onError(a),a}.bind(this))},c.prototype._getServerURL=function(a){var b="";return"undefined"!=typeof a.url?b=a.url:(b+=this._config.isSecure?"https://":"http://",b+=this._config.hostName+":"+this._config.port,b+=a.urlSuffix),b},c.prototype.close=function(){this._xhrPool.forEach(function(a){a.abort()}),this._xhrPool=[],this.onClose()},a.Base.RESTProvider=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){a.Base.AbstractNetworkProvider.apply(this),this._socket=void 0,this._isOpened=!1,this._errorCount=0,this._isShutdown=!1}b.prototype=Object.create(a.Base.AbstractNetworkProvider.prototype),b.prototype.onConnectionUnavailable=function(){},b.prototype.start=function(a,b,c){if(this._isOpened)this.onOpen();else{if(this._config=a,this._isShutdown=!1,this._credentialProvider=b,void 0===WebSocket)return void this.onConnectionUnavailable();this._createSocket(c)}},b.prototype.send=function(a,b){var c=$.Deferred();return this.isOpened()?(this._socket.send(a),c.resolve()):c.reject("Socket is not opened!"),c.promise()},b.prototype.close=function(){this._isShutdown=!0,this._isOpened?(this._socket.close(),this._isOpened=!1):this.onClose(),this._errorCount=0,this._socket=void 0},b.prototype.isOpened=function(){return this._isOpened&&1===this._socket.readyState},b.prototype._getServerURL=function(a){var b="";return a&&"undefined"!=typeof a.url?b=a.url:(b+=this._config.isSecure?"wss://":"ws://",b+=this._config.hostName,this._config.port&&(b+=":"+this._config.port)),a&&"undefined"!=typeof a.urlSuffix&&(b+=a.urlSuffix),b},b.prototype._createSocket=function(a){this._isOpening=!0,this._socket=new WebSocket(this._config.webSocketURL||this._getServerURL(a)),this._socket.binaryType="arraybuffer",this._socket.onopen=function(){this._isOpening=!1,this._isShutdown?this._socket.close():(this._isOpened=!0,this._errorCount=0,this.onOpen())}.bind(this),this._socket.onmessage=function(a){this.onMessage(a)}.bind(this),this._socket.onclose=function(){this._isOpening||(this._isOpened=!1,this._socket=void 0,this.onClose())}.bind(this),this._socket.onerror=function(b){this.onError(b),this._handleReconnect(b,a)}.bind(this)},b.prototype._handleReconnect=function(a,b){this._isOpened||(this._errorCount+=1,this._errorCount>=this._config.maxConnectionErrorCount||this._errorCount>=5||this._isShutdown?(this._isOpening=!1,this.onConnectionUnavailable(a)):this._createSocket(b))},a.Base.WebSocketProvider=b}(AvayaClientServices),function(a,b){"use strict";function c(){this._listeners={}}c.prototype={on:function(a,b){return"function"!=typeof b?this:(this._listeners[a]=this._listeners[a]||[],this._listeners[a].push(b),this)},off:function(a,b){if("function"!=typeof b)return this;if(void 0===this._listeners[a])throw new Error("There is no such handler for event with name: "+a+".");var c=this._listeners[a].indexOf(b);if(-1===c)throw new Error("There is no such handler for event with name: "+a+".");return this._listeners[a].splice(c,1),this},trigger:function(a,c){var d=this._listeners[a];void 0!==d&&(c=c||[],b.each(d,function(a,b){b.apply(window,c)}))},_removeListeners:function(){for(var a in this._listeners)if(this._listeners.hasOwnProperty(a))for(var b=0;b<this._listeners[a].length;b++)this.off(a,this._listeners[a][b])}},a.Base.Observable=c}(window.AvayaClientServices=window.AvayaClientServices||{},jQuery=jQuery||{}),function(a){"use strict";function b(){}b.prototype={state:function(){},always:function(a){},done:function(a){},fail:function(a){},progress:function(a){},then:function(a,b,c){}},a.Base.Promise=b}(AvayaClientServices),function(a,b){"use strict";function c(){this.messagingProviders=[],this.conferenceProviders=[],this.callProviders=[],this.collaborationProviders=[],this._ammProviderFactory={},this._ammProvider={},this._wcsProviderFactory={},this._wcsProvider={},this._contactsProviders=[],this._directorySearchProviders=[],this._acsProviderFactory={},this._acsContactsProvider={},this._acsDirectorySearchProvider={},this._scopiaProvider={},this._scopiaCallProvider={},this._sgCallProvider={},this._scopiaConferenceProviderFactory={}}c.prototype={getMessagingProviders:function(a){if(this.messagingProviders.length>0)return this.messagingProviders;var c=this._getAMMProvider(this._getAMMProviderConfiguration(a));return b.isEmptyObject(c)||this.messagingProviders.push(c),this.messagingProviders},getContactsProviders:function(a){if(0===this._contactsProviders.length){var c=this._getACSContactsProvider();b.isEmptyObject(c)||this._contactsProviders.push(c)}return this._contactsProviders},_getACSContactsProvider:function(){return b.isEmptyObject(this._acsContactsProvider)&&(b.isEmptyObject(this._acsProviderFactory)&&(this._acsProviderFactory=new a.Providers.ACS.ACSProviderFactory),this._acsContactsProvider=this._acsProviderFactory.getACSContactsProvider()),this._acsContactsProvider},getDirectorySearchProviders:function(a){if(0===this._directorySearchProviders.length){var c=this._getACSDirectorySearchProvider();b.isEmptyObject(c)||this._directorySearchProviders.push(c)}return this._directorySearchProviders},_getACSDirectorySearchProvider:function(){return b.isEmptyObject(this._acsDirectorySearchProvider)&&(b.isEmptyObject(this._acsProviderFactory)&&(this._acsProviderFactory=new a.Providers.ACS.ACSProviderFactory),this._acsDirectorySearchProvider=this._acsProviderFactory.getACSDirectorySearchProvider()),this._acsDirectorySearchProvider},getConferenceProviders:function(a){if(this.conferenceProviders.length>0)return this.conferenceProviders;var c=this._getScopiaConferenceProvider(a.uccpConfiguration);return b.isEmptyObject(c)||this.conferenceProviders.push(c),this.conferenceProviders},getCallProviders:function(a){if(this.callProviders.length>0)return this.callProviders;if(a.sgConfiguration&&a.sgConfiguration.enabled){var c=this._getSGCallProvider(a.sgConfiguration);if(!b.isEmptyObject(c)){var d=this.getConferenceProviders(a)[0];c.setConferenceProvider(d),this.callProviders.push(c)}}else{var e=this._getScopiaCallProvider(a.uccpConfiguration);b.isEmptyObject(e)||this.callProviders.push(e)}return this.callProviders},_getAMMProvider:function(c){return b.isEmptyObject(this._ammProvider)?(b.isEmptyObject(this._ammProviderFactory)&&(this._ammProviderFactory=new a.Providers.AMM.AMMProviderFactory),this._ammProvider=this._ammProviderFactory.getAMMProvider(c),this._ammProvider):this._ammProvider},_getWCSProvider:function(c){return b.isEmptyObject(this._wcsProvider)?(b.isEmptyObject(this._wcsProviderFactory)&&(this._wcsProviderFactory=new a.Providers.WCS.WCSProviderFactory),this._wcsProvider=this._wcsProviderFactory.getWCSProvider(c),this._wcsProvider):this._wcsProvider},_getWCSProviderConfiguration:function(a){return a.wcsConfiguration},_getScopiaConferenceProvider:function(c){return b.isEmptyObject(this._scopiaProvider)?(b.isEmptyObject(this._scopiaConferenceProviderFactory)&&(this._scopiaConferenceProviderFactory=new a.Providers.Scopia.ScopiaConferenceProviderFactory),this._scopiaProvider=this._scopiaConferenceProviderFactory.getScopiaConferenceProvider(c),this._scopiaProvider):this._scopiaProvider},_getScopiaCallProvider:function(c){return b.isEmptyObject(this._scopiaCallProvider)?(b.isEmptyObject(this._scopiaConferenceProviderFactory)&&(this._scopiaConferenceProviderFactory=new a.Providers.Scopia.ScopiaConferenceProviderFactory),this._scopiaCallProvider=this._scopiaConferenceProviderFactory.getScopiaCallProvider(c),this._scopiaCallProvider):this._scopiaCallProvider},_getSGCallProvider:function(c){if(!b.isEmptyObject(this._sgCallProvider))return this._sgCallProvider;var d=(new a.Providers.CallServiceGateway.CallServiceGatewayProviderFactory).createCallServiceGatewayProvider();return this._sgCallProvider=new a.Providers.Call.CallProvider(c,d),this._sgCallProvider},_getAMMProviderConfiguration:function(a){return a.ammConfiguration},getCollaborationProviders:function(a){if(this.collaborationProviders.length>0)return this.collaborationProviders;var c=this._getWCSProvider(this._getWCSProviderConfiguration(a));return b.isEmptyObject(c)||this.collaborationProviders.push(c),this.collaborationProviders}},a.Base.ProviderFactory=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){this.isAvailable()&&this.createPeerConnection()}var c=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection||window.msRTCPeerConnection,d=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription||window.msRTCSessionDescription;b.prototype.isAvailable=function(){return c&&d},b.prototype.addStream=function(a){this._pc.addStream(a)},b.prototype.createPeerConnection=function(a){this._pc&&this._pc.close(),a?this._pc=new c({iceServers:[{urls:"stun:ec2-52-6-206-240.compute-1.amazonaws.com:3478"}],iceTransportPolicy:"all",bundlePolicy:"balanced",peerIdentity:null},a):this._pc=new c({iceServers:[{urls:"stun:ec2-52-6-206-240.compute-1.amazonaws.com:3478"}],iceTransportPolicy:"all",bundlePolicy:"balanced",peerIdentity:null}),this._pc.onaddstream=this.onAddStreamInternal.bind(this),this._receivedIce=!1},b.prototype.createOffer=function(b,c,e){this._pc.onicecandidate=this._onIceCandidate.bind(this,b),this._pc.oniceconnectionstatechange=this._oniceConnectionStateChange.bind(this,function(){}),this._pc.createOffer(function(b){var f=b.type,g=b.sdp;"function"==typeof e&&(g=e(g)),this._pc.setLocalDescription(new d({type:f,sdp:g}),function(){},function(b){a.Base.Logger.error("RTCConnectionProvider: Error setting local description for offer: "+b),c(b)})}.bind(this),function(b){a.Base.Logger.error("RTCConnectionProvider: Error creating offer: "+b),c(b)})},b.prototype.receiveAnswer=function(a,b,c){this._pc.setRemoteDescription(new d({type:"answer",sdp:a}),b,c)},b.prototype.createAnswer=function(b,c,e,f){a.Base.Logger.debug("createAnswer offer SDP:\n"+b),this._pc.setRemoteDescription(new d({type:"offer",sdp:b}),function(){this._pc.onicecandidate=this._onIceCandidate.bind(this,c),this._pc.oniceconnectionstatechange=this._oniceConnectionStateChange.bind(this,c),this._pc.createAnswer(function(b){var c=b.type,g=b.sdp;"function"==typeof f&&(g=f(g)),this._pc.setLocalDescription(new d({type:c,sdp:g}),function(){}.bind(this),function(b){a.Base.Logger.error("Error while setting answer as local description: "+b),e(b)})}.bind(this),function(b){a.Base.Logger.error("Error while creating answer for offer: "+b),e(b)})}.bind(this),function(b){a.Base.Logger.error("Error setting remote description while creating answer: "+b),e(b)})},b.prototype.close=function(){this._pc.close()},b.prototype.onAddStreamInternal=function(a){this.onAddStream&&a.stream&&this.onAddStream(a.stream)},b.prototype.onAddStream=function(a){},b.prototype._onIceCandidate=function(b,c){a.Base.Logger.debug("RTCConnectionProvider _onIceCandidate "+this._pc.iceGatheringState),null===c.candidate?(a.Base.Logger.debug("NO more ICE candidate. GatheringState: "+this._pc.iceGatheringState),a.Base.Logger.debug("local SDP:\n"+this._pc.localDescription.sdp),b(this._pc.localDescription)):a.Base.Logger.debug("Candidate: "+c.candidate.candidate)},b.prototype._oniceConnectionStateChange=function(b,c){a.Base.Logger.debug("RTCConnectionProvider _oniceConnectionStateChange "+this._pc.iceConnectionState)},b.prototype.stopAllStreams=function(){this._pc.getLocalStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.stop()}),a.getVideoTracks().forEach(function(a){a.stop()})}),this._pc.getRemoteStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.stop()}),a.getVideoTracks().forEach(function(a){a.stop()})})},b.prototype.enableAllStreams=function(){this._pc.getLocalStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.enabled=!0}),a.getVideoTracks().forEach(function(a){console.debug("Enabling local video track: "+a.id),a.enabled=!0})}),this._pc.getRemoteStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.enabled=!0}),a.getVideoTracks().forEach(function(a){console.debug("Enabling remote video track: "+a.id),a.enabled=!0})})},b.prototype.disableStream=function(a){this.disableAudioStream(a),this.disableVideoStream(a)},b.prototype.enableStream=function(a){this.enableAudioStream(a),this.enableVideoStream(a)},b.prototype.disableAudioStream=function(a){a.getAudioTracks().forEach(function(a){a.enabled=!1})},b.prototype.enableAudioStream=function(a){a.getAudioTracks().forEach(function(a){a.enabled=!0})},b.prototype.disableVideoStream=function(a){a.getVideoTracks().forEach(function(a){a.enabled=!1})},b.prototype.enableVideoStream=function(a){a.getVideoTracks().forEach(function(a){a.enabled=!0})},a.Base.RTCConnectionProvider=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){this._handlers={},this.currentState=null}a.Base.SimpleFsm=function(){},b.prototype={handleEvent:function(b){if(!b.stringValue)return void a.Base.Logger.error("Unknown event: "+b);if(!this.currentState||!this._handlers)return void a.Base.Logger.error("State machine's state was not initialized");if(!this._handlers[this.currentState.stringValue])return void a.Base.Logger.error("No handler bound for state "+this.currentState.stringValue+" and event "+b.stringValue);if(!this._handlers[this.currentState.stringValue][b.stringValue])return void a.Base.Logger.error("No handler bound for state "+this.currentState.stringValue+" and event "+b.stringValue);a.Base.Logger.debug("Executing handler for state "+this.currentState.stringValue+" and event "+b.stringValue+" "+this._handlers[this.currentState.stringValue][b.stringValue].name);var c=this._handlers[this.currentState.stringValue][b.stringValue](b);a.Base.Logger.debug("Executed handler "+this._handlers[this.currentState.stringValue][b.stringValue].name),c&&c.nextState&&(a.Base.Logger.debug("Next state: "+c.nextState.stringValue),this.currentState=c.nextState),c&&c.nextEvent&&(a.Base.Logger.debug("Next state: "+c.nextEvent.stringValue),this.handleEvent(c.nextEvent))},registerHandler:function(b,c,d){if(this._handlers[b.stringValue]||(this._handlers[b.stringValue]={}),this._handlers[b.stringValue][c.stringValue])throw"Duplicate FSM registration state "+b.stringValue+" event "+c.stringValue;this._handlers[b.stringValue][c.stringValue]=d,a.Base.Logger.debug("registered Handler for "+b.stringValue+" event "+c.stringValue)},registerNoOpHandler:function(a,b){this.registerHandler(a,b,function(){})},start:function(a){this.currentState=a}},a.Base.SimpleFsm.SimpleFsm=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b){this.stringValue=a,this.data=b}b.prototype={},a.Base.SimpleFsm.SimpleFsmEvent=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a){this.stringValue=a}b.prototype={},a.Base.SimpleFsm.SimpleFsmState=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c){Error.call(this,a),this.message=a,this.validatedObject=b,this.violatedRule=c,this.name="ValidationError"}b.prototype=Object.create(Error.prototype),a.Base.ValidationError=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={validate:function(){throw new Error("Function is not implemented!")},_processCondition:function(a,b,c,d){if(a)return!0;var e=c.message||this.defaultMessage;return this._handleValidationError(e,b,c,d)},_handleValidationError:function(b,c,d,e){if(e)return!1;throw new a.Base.ValidationError(b,c,d)}},a.Base.Validators.BaseValidator=b}(AvayaClientServices),function(a){"use strict";function b(){this.defaultMessage="Provided element is not defined."}b.prototype=Object.create(a.Base.Validators.BaseValidator.prototype),b.prototype.validate=function(a,b,c){var d="undefined"!=typeof a;return this._processCondition(d,a,b,c)},a.Base.Validators.DefinedValidator=b}(AvayaClientServices),function(a){"use strict";function b(){this.defaultMessage="Provided element is not compatible with required type."}b.prototype=Object.create(a.Base.Validators.BaseValidator.prototype),b.prototype.validate=function(a,b,c){var d=typeof a===b.expected||"object"==typeof a&&a instanceof b.expected;return this._processCondition(d,a,b,c)},a.Base.Validators.TypeValidator=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.credentialProvider=new a.Config.CredentialProvider,this.serverInfo=new a.Config.ServerInfo}b.prototype={},a.Config.ACSConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.allowPrevalidation=!1,this.pollIntervalInMinutes=0,this.serverInfo=new a.Config.ServerInfo,this.credentialProvider=new a.Config.CredentialProvider}b.prototype={},a.Config.AMMConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.incomingCall=!1,this.videoEnabled=!1}b.prototype={},a.Config.CallUserConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.serverInfo=new a.Config.ServerInfo,this.voicemailPIN=""}b.prototype={},a.Config.CESConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.conferenceFactoryURI="",this.conferencePortalURI="",this.moderatorCode="",this.participantCode="",this.moderatorURL="",this.participantURL="",this.virtualRoomID=""}b.prototype={},a.Config.ConferenceConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c){this.username=a,this.password=b,this.domain=c}b.prototype={onAuthenticationChallenge:function(a,b){b({username:this.username,password:this.password,domain:this.domain,isGuest:!1,displayName:""})},isGuest:function(){return!1}},a.Config.CredentialProvider=b}(AvayaClientServices),function(a){"use strict";function b(a){this.token=a}b.prototype={onAuthenticationChallenge:function(a,b){b({token:this.token})}},a.Config.CredentialTokenProvider=b}(AvayaClientServices),function(a){"use strict";function b(a){this._displayName=a,this._username=this._createGuestUser(),this._password="",this._domain=""}b.prototype={onAuthenticationChallenge:function(a,b){b({username:this._username,password:this._password,domain:this._domain,isGuest:!0,displayName:this.getDisplayName()})},getDisplayName:function(){return encodeURI(this._displayName)},setDisplayName:function(a){this._displayName=a},isGuest:function(){return!0},_generateUUID:function(){var a=window.crypto||window.msCrypto,b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=a.getRandomValues(new Uint8Array(1))[0]%16|0,d="x"===b?c:3&c|8;return d.toString(16)});return b},_createGuestUser:function(){return"csaGuest/"+this._generateUUID()}},a.Config.GuestCredentialProvider=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.serverInfo=new a.Config.ServerInfo,this.baseDistinguishName="",this.userIMDomain=!1,this.imAttribute="",this.useGssBind=!1,this.directoryType=""}b.prototype={},a.Config.LDAPConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.serverInfo=new a.Config.ServerInfo,this.contactsEnabled=!1}b.prototype={},a.Config.PPMConfiguration=b}(AvayaClientServices),function(a){"use strict";
function b(){this.enabled=!1,this.sendAllCallsOnDoNotDisturb=!1,this.serverAddress="",this.autoAwayTimeout=0}b.prototype={isEnabled:function(){},setEnabled:function(a){},getServerAddress:function(){},setServerAddress:function(a){},isSendAllCallsOnDoNotDisturb:function(){},setSendAllCallsOnDoNotDisturb:function(a){},isExportWindowsIMProvider:function(){},setExportWindowsIMProvider:function(a){}},a.Config.PresenceConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.hostName="",this.port=0,this.isSecure=!1}b.prototype={},a.Config.ServerInfo=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.serverInfo=new a.Config.ServerInfo,this.credentialProvider=new a.Config.CredentialProvider,this.gatewayProvider={}}b.prototype={},a.Config.SGConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!0,this.serverInfo=new a.Config.ServerInfo,this.credentialProvider=new a.Config.CredentialProvider,this.promptAdmissionPasscodeHandler=function(a){var b=$.Deferred(),c=prompt("Admission passcode prompt");return null===c?b.reject({name:"ConferenceError",message:"Admission passcode prompt canceled"}):b.resolve(c),b.promise()},this.confirmAdmissionHandler=function(a){var b=$.Deferred();return confirm("Confirm admission")?b.resolve():b.reject({name:"ConferenceError",message:"Admission confirm canceled"}),b.promise()}}b.prototype={},a.Config.UCCPConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.userAgentName="",this.userAgentInstanceId="",this.ammConfiguration=new a.Config.AMMConfiguration,this.acsConfiguration=new a.Config.ACSConfiguration,this.cesConfiguration=new a.Config.CESConfiguration,this.ldapConfiguration=new a.Config.LDAPConfiguration,this.conferenceConfiguration=new a.Config.ConferenceConfiguration,this.dialingRulesConfiguration={},this.ec500Configuration={},this.ppmConfiguration=new a.Config.PPMConfiguration,this.uccpConfiguration=new a.Config.UCCPConfiguration,this.sgConfiguration=new a.Config.SGConfiguration,this.callUserConfiguration=new a.Config.CallUserConfiguration,this.videoUserConfiguration={},this.wcsConfiguration=new a.Config.WCSConfiguration,this.localDeviceConfiguration={},this.presenceConfiguration=new a.Config.PresenceConfiguration}b.prototype={},a.Config.UserConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(){this.enabled=!1,this.serverInfo=new a.Config.ServerInfo,this.credentialProvider=new a.Config.CredentialProvider}b.prototype={},a.Config.WCSConfiguration=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this.token=a,this.username=b,this.attendeeId=c,this.sessionId=d}b.prototype={onAuthenticationChallenge:function(b,c){c(new a.Config.WCSCredentials(this.token,this.username,this.attendeeId,this.sessionId))}},a.Config.WCSCredentialTokenProvider=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this.token=a,this.username=b,this.participantId=c,this.sessionId=d}a.Config.WCSCredentials=b}(AvayaClientServices),function(a,b){"use strict";function c(){this._defaultProvenance=[{subType:"User",type:"User"}]}c.prototype={convertACSContactsV1toContactList:function(a,b){var c=[];if(a&&a.contacts&&a.contacts.length>0)for(var d=0;d<a.contacts.length;d++)c.push(this.convertACSContactV1toContact(a.contacts[d],b));return c},convertACSContactV1toContact:function(b,c){var d=new a.Services.Contacts.Contact,e=a.Services.Contacts.ProviderSourceType.PROVIDER_SOURCE_ACS;if(b){var f=new a.Base.Capability(c?a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED:a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED);if(d.getGivenName().setWriteCapability(f),d.getSurname().setWriteCapability(f),d.getDisplayName().setWriteCapability(f),d.getASCIIGivenName().setWriteCapability(f),d.getASCIISurname().setWriteCapability(f),d.getASCIIDisplayName().setWriteCapability(f),d.getAlias().setWriteCapability(f),d.getASCIIAlias().setWriteCapability(f),d.getLocation().setWriteCapability(f),d.getWorkRoomNo().setWriteCapability(f),d.getStreetAddress().setWriteCapability(f),d.getCity().setWriteCapability(f),d.getState().setWriteCapability(f),d.getCountry().setWriteCapability(f),d.getPostalCode().setWriteCapability(f),d.getCompany().setWriteCapability(f),d.getManager().setWriteCapability(f),d.getDepartment().setWriteCapability(f),d.getLanguage().setWriteCapability(f),d.getNotes().setWriteCapability(f),d.getRank().setWriteCapability(f),d.isBuddy().setWriteCapability(f),d.isFavorite().setWriteCapability(f),b.contactIdentifier&&b.contactIdentifier.value&&(d._uniqueAddressForMatching=b.contactIdentifier.value),b.surName&&b.surName.value&&(d.getSurname().setValue(b.surName.value),d.getSurname().setSource(e)),b.givenName&&b.givenName.value&&(d.getGivenName().setValue(b.givenName.value),d.getGivenName().setSource(e)),b.displayName&&b.displayName.value&&(d.getDisplayName().setValue(b.displayName.value),d.getDisplayName().setSource(e)),b.asciiSurName&&b.asciiSurName.value&&(d.getASCIISurname().setValue(b.asciiSurName.value),d.getASCIISurname().setSource(e)),b.asciiGivenName&&b.asciiGivenName.value&&(d.getASCIIGivenName().setValue(b.asciiGivenName.value),d.getASCIIGivenName().setSource(e)),b.asciiDisplayName&&b.asciiDisplayName.value&&(d.getASCIIDisplayName().setValue(b.asciiDisplayName.value),d.getASCIIDisplayName().setSource(e)),b.aliasGivenName&&b.aliasGivenName.value&&(d.getAlias().setValue(b.aliasGivenName.value),d.getAlias().setSource(e)),b.aliasSurName&&b.aliasSurName.value&&(d.getASCIIAlias().setValue(b.aliasSurName.value),d.getASCIIAlias().setSource(e)),b.location&&b.location.value&&(d.getLocation().setValue(b.location.value),d.getLocation().setSource(e)),b.workRoomNo&&b.workRoomNo.value&&(d.getWorkRoomNo().setValue(b.workRoomNo.value),d.getWorkRoomNo().setSource(e)),b.streetAddress&&b.streetAddress.value&&(d.getStreetAddress().setValue(b.streetAddress.value),d.getStreetAddress().setSource(e)),b.city&&b.city.value&&(d.getCity().setValue(b.city.value),d.getCity().setSource(e)),b.state&&b.state.value&&(d.getState().setValue(b.state.value),d.getState().setSource(e)),b.country&&b.country.value&&(d.getCountry().setValue(b.country.value),d.getCountry().setSource(e)),b.postalCode&&b.postalCode.value&&(d.getPostalCode().setValue(b.postalCode.value),d.getPostalCode().setSource(e)),b.company&&b.company.value&&(d.getCompany().setValue(b.company.value),d.getCompany().setSource(e)),b.manager&&b.manager.value&&(d.getManager().setValue(b.manager.value),d.getManager().setSource(e)),b.department&&b.department.value&&(d.getDepartment().setValue(b.department.value),d.getDepartment().setSource(e)),b.preferredLanguage&&b.preferredLanguage.value&&(d.getLanguage().setValue(b.preferredLanguage.value),d.getLanguage().setSource(e)),b.notes&&b.notes.value&&(d.getNotes().setValue(b.notes.value),d.getNotes().setSource(e)),b.rank&&b.rank.value&&(d.getRank().setValue(parseFloat(b.rank.value)),d.getRank().setSource(e)),b.isBuddy&&b.isBuddy.value&&(d.isBuddy().setValue("true"===b.isBuddy.value),d.isBuddy().setSource(e)),b.favourite&&b.favourite.value&&(d.isFavorite().setValue("true"===b.favourite.value),d.isFavorite().setSource(e)),b.videoCapable&&b.videoCapable.value&&(d.isVideoCapable().setValue("true"===b.videoCapable.value),d.isVideoCapable().setSource(e)),b.pictureUrl&&b.pictureUrl.value)for(var g in a.Services.Contacts.ContactPictureSize)a.Services.Contacts.ContactPictureSize.hasOwnProperty(g)&&d.addPictureUrl(g,b.pictureUrl.value+"?size="+a.Services.Contacts.ContactPictureSize[g].toLowerCase());var h;if(b.emailAddresses){var i=b.emailAddresses.length;for(h=0;i>h;h++){var j=new a.Services.Contacts.ContactEmailAddressField;j.setSource(e),j.setWriteCapability(f),b.emailAddresses[h].value&&j.setAddress(b.emailAddresses[h].value),b.emailAddresses[h].type&&j.setEmailAddressType(this._convertACSEmailAddressTypeToContactEmailAddressType(b.emailAddresses[h].type)),d.getEmailAddresses().push(j)}}if(b.phoneNumberList){var k=b.phoneNumberList.length;for(h=0;k>h;h++){var l=new a.Services.Contacts.ContactPhoneField;l.setSource(e),l.setWriteCapability(f),b.phoneNumberList[h].phoneNumber&&l.setPhoneNumber(b.phoneNumberList[h].phoneNumber),b.phoneNumberList[h].label1&&l.setLabel1(b.phoneNumberList[h].label1),b.phoneNumberList[h].label2&&l.setLabel2(b.phoneNumberList[h].label2),b.phoneNumberList[h].type&&l.setPhoneNumberType(this._convertACSPhoneNumberTypeToContactPhoneNumberType(b.phoneNumberList[h].type)),b.phoneNumberList[h].speedDialEnabled&&l.setSpeedDialEnabled("true"===b.phoneNumberList[h].speedDialEnabled),b.phoneNumberList[h].isPrimary&&l.setDefault("true"===b.phoneNumberList[h].isPrimary),d.getPhoneNumbers().push(l)}}if(b.imaddresses){var m=b.imaddresses.length;for(h=0;m>h;h++){var n=new a.Services.Contacts.ContactHandleField;n.setSource(e),n.setWriteCapability(f),b.imaddresses[h].value&&n.setHandle(b.imaddresses[h].value),b.imaddresses[h].type&&n.setHandleType(this._convertACSHandleTypeToContactHandleType(b.imaddresses[h].type)),d.getHandles().push(n)}}if(b.custom1&&b.custom1.value){var o=new a.Services.Contacts.ContactStringField;o.setValue(b.custom1.value),o.setSource(e),d.getCustom1().push(o)}if(b.custom2&&b.custom2.value){var p=new a.Services.Contacts.ContactStringField;p.setValue(b.custom2.value),p.setSource(e),d.getCustom2().push(p)}if(b.custom3&&b.custom3.value){var q=new a.Services.Contacts.ContactStringField;q.setValue(b.custom3.value),q.setSource(e),d.getCustom3().push(q)}}return d},convertContactToACSContactV1:function(b){return this.mergeContactWithACSContactV1(b,new a.Providers.ACS.ContactV1)},mergeContactWithACSContactV1:function(c,d){var e;if(c&&d){e=b.extend(!0,{},d),c.getUniqueAddressForMatching()&&(e.contactIdentifier.value=c.getUniqueAddressForMatching()),e.asciiSurName.value=c.getASCIISurname().getValue(),e.asciiGivenName.value=c.getASCIIGivenName().getValue(),e.asciiDisplayName.value=c.getASCIIDisplayName().getValue(),e.surName.value=c.getSurname().getValue(),e.givenName.value=c.getGivenName().getValue(),e.displayName.value=c.getDisplayName().getValue(),e.aliasGivenName.value=c.getAlias().getValue(),e.aliasSurName.value=c.getASCIIAlias().getValue(),e.location.value=c.getLocation().getValue(),e.workRoomNo.value=c.getWorkRoomNo().getValue(),e.streetAddress.value=c.getStreetAddress().getValue(),e.city.value=c.getCity().getValue(),e.state.value=c.getState().getValue(),e.country.value=c.getCountry().getValue(),e.postalCode.value=c.getPostalCode().getValue(),e.company.value=c.getCompany().getValue(),e.manager.value=c.getManager().getValue(),e.department.value=c.getDepartment().getValue(),e.preferredLanguage.value=c.getLanguage().getValue(),e.notes.value=c.getNotes().getValue(),e.rank.value=c.getRank().getValue().toString(),e.isBuddy.value=c.isBuddy().getValue().toString(),e.favourite.value=c.isFavorite().getValue().toString(),e.videoCapable.value=c.isVideoCapable().getValue().toString();var f,g=[],h=c.getEmailAddresses();for(f=0;f<h.length;f++){var i=new a.Providers.ACS.ContactEmailData;i.value=h[f].getAddress(),i.type=this._convertContactEmailAddressTypeToACSEmailAddressType(h[f].getEmailAddressType()),i.provenance=this._getProvenance(i,e.emailAddresses,"value"),g.push(i)}e.emailAddresses=g;var j=[],k=c.getPhoneNumbers();for(f=0;f<k.length;f++){var l=new a.Providers.ACS.ContactPhoneData;l.phoneNumber=k[f].getPhoneNumber(),l.label1=k[f].getLabel1(),l.label2=k[f].getLabel2(),l.type=this._convertContactPhoneNumberTypeToACSPhoneType(k[f].getPhoneNumberType()),l.speedDialEnabled=k[f].isSpeedDialEnabled().toString(),l.isPrimary=k[f].isDefault().toString(),l.provenance=this._getProvenance(l,e.phoneNumberList,"value"),j.push(l)}e.phoneNumberList=j;var m=[],n=c.getHandles();for(f=0;f<n.length;f++){var o=new a.Providers.ACS.ContactHandleData;o.value=n[f].getHandle(),o.type=this._convertContactHandleTypeToACSHandleType(n[f].getHandleType()),o.provenance=this._getProvenance(o,e.imaddresses,"value"),m.push(o)}e.imaddresses=m}return e},_convertACSPhoneNumberTypeToContactPhoneNumberType:function(b){if(!b)return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_OTHER;switch(b){case a.Providers.ACS.ACSPhoneNumberType.WORK:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_WORK;case a.Providers.ACS.ACSPhoneNumberType.HOME:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_HOME;case a.Providers.ACS.ACSPhoneNumberType.MOBILE:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_MOBILE;case a.Providers.ACS.ACSPhoneNumberType.FAX:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_FAX;case a.Providers.ACS.ACSPhoneNumberType.PAGER:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_PAGER;case a.Providers.ACS.ACSPhoneNumberType.OTHER:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_OTHER;default:return a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_OTHER}},_convertContactPhoneNumberTypeToACSPhoneType:function(b){if(!b)return a.Providers.ACS.ACSPhoneNumberType.OTHER;switch(b){case a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_WORK:return a.Providers.ACS.ACSPhoneNumberType.WORK;case a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_HOME:return a.Providers.ACS.ACSPhoneNumberType.HOME;case a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_MOBILE:return a.Providers.ACS.ACSPhoneNumberType.MOBILE;case a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_FAX:return a.Providers.ACS.ACSPhoneNumberType.FAX;case a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_PAGER:return a.Providers.ACS.ACSPhoneNumberType.PAGER;case a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_OTHER:return a.Providers.ACS.ACSPhoneNumberType.OTHER;default:return a.Providers.ACS.ACSPhoneNumberType.OTHER}},_convertACSEmailAddressTypeToContactEmailAddressType:function(b){if(!b)return a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_OTHER;switch(b){case a.Providers.ACS.ACSEmailAddressType.WORK:return a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_WORK;case a.Providers.ACS.ACSEmailAddressType.OTHER:return a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_OTHER;default:return a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_OTHER}},_convertContactEmailAddressTypeToACSEmailAddressType:function(b){if(!b)return a.Providers.ACS.ACSEmailAddressType.OTHER;switch(b){case a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_WORK:return a.Providers.ACS.ACSEmailAddressType.WORK;case a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_OTHER:return a.Providers.ACS.ACSEmailAddressType.OTHER;default:return a.Providers.ACS.ACSEmailAddressType.OTHER}},_convertACSHandleTypeToContactHandleType:function(b){if(!b)return a.Services.Contacts.ContactHandleType.HANDLE_OTHER;switch(b){case a.Providers.ACS.ACSHandleType.WORK:return a.Services.Contacts.ContactHandleType.HANDLE_WORK;case a.Providers.ACS.ACSHandleType.OTHER:return a.Services.Contacts.ContactHandleType.HANDLE_OTHER;default:return a.Services.Contacts.ContactHandleType.HANDLE_OTHER}},_convertContactHandleTypeToACSHandleType:function(b){if(!b)return a.Providers.ACS.ACSHandleType.OTHER;switch(b){case a.Services.Contacts.ContactHandleType.HANDLE_WORK:return a.Providers.ACS.ACSHandleType.WORK;case a.Services.Contacts.ContactHandleType.HANDLE_OTHER:return a.Providers.ACS.ACSHandleType.OTHER;default:return a.Providers.ACS.ACSHandleType.OTHER}},_getProvenance:function(a,b,c){for(var d=0;d<b.length;d++)if(a[c]===b[d][c])return b[d].provenance&&b[d].provenance.length>0?b[d].provenance:this._defaultProvenance;return this._defaultProvenance},extendAcsContact:function(c){c=b.extend(!0,new a.Providers.ACS.ContactV1,c);var d;if(c.emailAddresses){var e=c.emailAddresses.length;for(d=0;e>d;d++)c.emailAddresses[d]=b.extend(!0,new a.Providers.ACS.ContactEmailData,c.emailAddresses[d])}if(c.phoneNumberList){var f=c.phoneNumberList.length;for(d=0;f>d;d++)c.phoneNumberList[d]=b.extend(!0,new a.Providers.ACS.ContactPhoneData,c.phoneNumberList[d])}if(c.imaddresses){var g=c.imaddresses.length;for(d=0;g>d;d++)c.imaddresses[d]=b.extend(!0,new a.Providers.ACS.ContactHandleData,c.imaddresses[d])}return c}},a.Providers.ACS.ACSContactsConverter=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a,b){Error.call(this,a),this.displayMessage=a,this.errorMessage=b}b.prototype=Object.create(Error.prototype),a.Providers.ACS.ACSError=b}(AvayaClientServices),function(a,b){"use strict";function c(c,d){a.Base.Observable.call(this),this._requestBuilder=c,this._restProvider=d,this._restProvider._onCredentialsRequired=this.onCredentialsRequired.bind(this),this._started=!1,this._acsAvailable=!1,this._acsConfig={},this._acsResources={},this._eTag=null,this._startPromise=b.Deferred(),this._stopPromise=b.Deferred()}c.prototype=b.extend({},a.Base.Observable.prototype),c.prototype.start=function(a){if(this._started===!1){this._started=!0,this._startPromise=b.Deferred(),this._acsConfig=a,this._restProvider.onMessage=function(a,b){if(this._setAcsAvailable(!0),"undefined"!=typeof b){var c=b.getResponseHeader("ETag");null!==c&&"undefined"!=typeof c&&(this._eTag=c)}}.bind(this),this._restProvider.start(this._acsConfig.serverInfo,this._acsConfig.credentialProvider);var c=function(){this.sendDiscoverResources().then(function(){this._startPromise.resolve()}.bind(this),function(a){this._startPromise.reject(a),this._started=!1}.bind(this))}.bind(this);this.sendInvalidateSession().then(c)}return this._startPromise.promise()},c.prototype.stop=function(){return this._started===!0&&(this._started=!1,this._stopPromise=b.Deferred(),this._restProvider.onClose=function(){this._setAcsAvailable(!1),this._acsResources={},this._eTag=null,this._stopPromise.resolve()}.bind(this),this._restProvider.close()),this._stopPromise.promise()},c.prototype.sendDiscoverResources=function(){return this.send(null,this._requestBuilder.buildResourcesOptions()).then(function(a){this.parseResources(a)}.bind(this))},c.prototype.sendInvalidateSession=function(){return this.send(null,this._requestBuilder.buildInvalidateSessionOptions())},c.prototype.send=function(a,b){return this._restProvider.send(a,b).then(function(a){return a},function(a){return this._handleError(a)}.bind(this))},c.prototype._handleError=function(b){var c,d;return b&&a.Base.Utils.isDefined(b.readyState)?b.readyState<4?(this._setAcsAvailable(!1),d=c="Connection to ACS failed",a.Base.Logger.warn("Connection to ACS failed")):4===b.readyState&&a.Base.Utils.isDefined(b.status)&&(this._setAcsAvailable(!0),b.responseJSON&&(b.responseJSON.errorMsg&&(c=b.responseJSON.errorMsg),b.responseJSON.displayMsg&&(c=b.responseJSON.displayMsg)),b.status<600&&b.status>=500?(this._setAcsAvailable(!1),c=c?c:"Unknown ACS Server Error",d=d?d:c):b.status<500&&b.status>=400&&(c=c?c:"Unknown Client Error",d=d?d:c),a.Base.Logger.warn("Request to ACS has failed",[c,d])):(d=c="Unknown Error",a.Base.Logger.warn("Unable to handle unknown error",JSON.stringify(b))),new a.Providers.ACS.ACSError(d,c)},c.prototype.onCredentialsRequired=function(a){var b;this._acsConfig.credentialProvider.onAuthenticationChallenge(b,function(b){this.onCredentialsRetrieved(b,a)}.bind(this))},c.prototype.onCredentialsRetrieved=function(b,c){var d=btoa(b.username+":"+b.password);a.Base.Utils.isDefined(c.options)&&(c.options.headers.Authorization="Basic "+d)},c.prototype.parseResources=function(c){this._acsResources=b.extend({},new a.Providers.ACS.ResourcesV1,c),this._requestBuilder.setResources(this._acsResources)},c.prototype.getETag=function(){return this._eTag},c.prototype.getResources=function(){return this._acsResources},c.prototype.isAcsAvailable=function(){return this._acsAvailable},c.prototype.isStarted=function(){return this._started},c.prototype._setAcsAvailable=function(a){this._acsAvailable!==a&&(this._acsAvailable=a,this.trigger("acs_availability_changed"))},a.Providers.ACS.ACSNetworkProvider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){this._acsRequestBuilder=null,this._acsContactsConverter=null,this._acsNetworkProvider=null,this._acsContactsProvider=null,this._acsDirectorySearchProvider=null}c.prototype={getACSContactsProvider:function(){if(!this._acsContactsProvider){var b=this._createACSContactsProviderV1();this._acsContactsProvider=new a.Providers.ACS.ACSContactsProvider,this._acsContactsProvider.registerACSContactsProvider(1,b)}return this._acsContactsProvider},getACSDirectorySearchProvider:function(){if(!this._acsDirectorySearchProvider){var b=this._createACSDirectorySearchProviderV1();this._acsDirectorySearchProvider=new a.Providers.ACS.ACSDirectorySearchProvider,this._acsDirectorySearchProvider.registerACSDirectorySearchProvider(1,b)}return this._acsDirectorySearchProvider},_createACSContactsProviderV1:function(){return new a.Providers.ACS.ACSContactsProviderV1(this._getACSNetworkProvider(),this._getACSContactsConverter(),this._getACSRequestBuilder())},_createACSDirectorySearchProviderV1:function(){return new a.Providers.ACS.ACSDirectorySearchProviderV1(this._getACSNetworkProvider(),this._getACSContactsConverter(),this._getACSRequestBuilder())},_getACSContactsConverter:function(){return this._acsContactsConverter||(this._acsContactsConverter=new a.Providers.ACS.ACSContactsConverter),this._acsContactsConverter},_getACSRequestBuilder:function(){return this._acsRequestBuilder||(this._acsRequestBuilder=new a.Providers.ACS.ACSRequestBuilder),this._acsRequestBuilder},_getACSNetworkProvider:function(){if(!this._acsNetworkProvider){var b=new a.Base.RESTProvider,c=new a.Base.NetworkProvider(b);this._acsNetworkProvider=new a.Providers.ACS.ACSNetworkProvider(this._getACSRequestBuilder(),c)}return this._acsNetworkProvider}},a.Providers.ACS.ACSProviderFactory=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={STARTING:"STARTING",STARTED:"STARTED",STOPPING:"STOPPING",STOPPED:"STOPPED"};a.Providers.ACS.ACSProviderStates=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){this._acsResources={},this._endpoints={},this._contentTypes={resourcesV1:"application/vnd.avaya.acs.resources.v1+json",errorV1:"application/vnd.avaya.acs.error.v1+json",contactsV1:"application/vnd.avaya.acs.contacts.v1+json",contactV1:"application/vnd.avaya.acs.contact.v1+json"}}c.prototype={},c.prototype.setResources=function(a){this._acsResources=a,this._endpoints.getContacts=this._acsResources.resources.contacts.GET.getContacts.href,this._endpoints.addUpdateContact=this._acsResources.resources.contacts.POST.addUpdateContact.href},c.prototype.buildResourcesOptions=function(){return{urlSuffix:"/acs/resources",sendType:"GET",dataType:"JSON",headers:{Accept:[this._contentTypes.resourcesV1,this._contentTypes.errorV1].join(", ")}}},c.prototype.buildInvalidateSessionOptions=function(){return{urlSuffix:"/acs/resources/sessions?action=logout",sendType:"POST",headers:{Accept:this._contentTypes.errorV1}}},c.prototype.buildGetContactsOptions=function(a,b,c){var d={headers:{}};if(d.url=this._endpoints.getContacts,b&&(d.url+="?after="+b),d.sendType="GET",d.dataType="JSON",d.headers.Accept=[this._contentTypes.contactsV1,this._contentTypes.errorV1].join(", "),a){var e=120;this._acsResources.avayaRequestTimeout&&this._acsResources.avayaRequestTimeout.recommended&&(e=this._acsResources.avayaRequestTimeout.recommended),c&&(d.headers["If-None-Match"]=c),d.headers["Avaya-Request-Timeout"]=e}return d},c.prototype.buildAddContactOptions=function(){return{url:this._endpoints.addUpdateContact,sendType:"POST",dataType:"JSON",headers:{Accept:[this._contentTypes.contactsV1,this._contentTypes.errorV1].join(", "),"Content-Type":this._contentTypes.contactsV1}}},c.prototype.buildUpdateContactOptions=function(){return{url:this._endpoints.addUpdateContact,sendType:"PUT",dataType:"JSON",headers:{Accept:[this._contentTypes.contactsV1,this._contentTypes.errorV1].join(", "),"Content-Type":this._contentTypes.contactsV1}}},c.prototype.buildAddUpdateContactData=function(a){return JSON.stringify({userEmail:this._acsResources.self,contacts:[a]},this._stringifyReplacer)},c.prototype.buildDeleteContactOptions=function(a){return{url:a,sendType:"DELETE",headers:{Accept:this._contentTypes.errorV1}}},c.prototype.buildSearchContactsOptions=function(b,c){var d={headers:{}};d.url=this._endpoints.getContacts+"?searchDirectory=true";var e=b.getMaxChunkSize();e&&(d.url+="&count="+e);var f=b.getSearchString(),g=b.getSearchScope();return g===a.Services.Contacts.SearchScopeType.GIVEN_NAME?d.url+='&searchCriteria=["FirstName","'+f+'"]':g===a.Services.Contacts.SearchScopeType.SURNAME?d.url+='&searchCriteria=["LastName","'+f+'"]':g===a.Services.Contacts.SearchScopeType.PHONE_NUMBER?d.url+='&searchCriteria=["PhoneNumber","'+f+'"]':g===a.Services.Contacts.SearchScopeType.EMAIL_ADDRESS?d.url+='&searchCriteria=["EmailAddress","'+f+'"]':g===a.Services.Contacts.SearchScopeType.IM_HANDLE?d.url+='&searchCriteria=["IMHandle","'+f+'"]':g===a.Services.Contacts.SearchScopeType.ALL&&(d.url+='&searchCriteria=["ALL","'+f+'"]'),c&&(d.url+="&after="+c),d.sendType="GET",d.dataType="JSON",d.headers.Accept=[this._contentTypes.contactsV1,this._contentTypes.errorV1].join(", "),d},c.prototype._stringifyReplacer=function(a,b){return b&&b.hasOwnProperty("value")&&void 0===b.value?void 0:b},a.Providers.ACS.ACSRequestBuilder=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={WORK:"work",OTHER:"other"};a.Providers.ACS.ACSEmailAddressType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={WORK:"work",OTHER:"other"};a.Providers.ACS.ACSHandleType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={WORK:"work",MOBILE:"mobile",HOME:"home",FAX:"fax",PAGER:"pager",OTHER:"other"};a.Providers.ACS.ACSPhoneNumberType=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){this.value=void 0}b.prototype={equals:function(a){return this.value===a.value}},a.Providers.ACS.ContactAttribute=b}(AvayaClientServices),function(a,b){"use strict";function c(){this.value=void 0,this.type=a.Providers.ACS.ACSEmailAddressType.OTHER}c.prototype={equals:function(a){return this.value===a.value&&this.type===a.type}},a.Providers.ACS.ContactEmailData=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){this.value=void 0,this.type=a.Providers.ACS.ACSHandleType.OTHER}c.prototype={equals:function(a){return this.value===a.value&&this.type===a.type}},a.Providers.ACS.ContactHandleData=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){this.phoneNumber=void 0,this.label1=void 0,this.label2=void 0,this.type=a.Providers.ACS.ACSPhoneNumberType.OTHER,this.speedDialEnabled=!1,this.isPrimary=!1}c.prototype={equals:function(a){return this.phoneNumber===a.phoneNumber&&this.label1===a.label1&&this.label2===a.label2&&this.type===a.type&&this.speedDialEnabled===a.speedDialEnabled&&this.isPrimary===a.isPrimary}},a.Providers.ACS.ContactPhoneData=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){this.id=new a.Providers.ACS.ContactAttribute,this.contactIdentifier=new a.Providers.ACS.ContactAttribute,this.contactUrl=new a.Providers.ACS.ContactAttribute,this.surName=new a.Providers.ACS.ContactAttribute,this.givenName=new a.Providers.ACS.ContactAttribute,this.displayName=new a.Providers.ACS.ContactAttribute,this.aliasGivenName=new a.Providers.ACS.ContactAttribute,this.aliasSurName=new a.Providers.ACS.ContactAttribute,this.company=new a.Providers.ACS.ContactAttribute,this.location=new a.Providers.ACS.ContactAttribute,this.workRoomNo=new a.Providers.ACS.ContactAttribute,this.streetAddress=new a.Providers.ACS.ContactAttribute,this.city=new a.Providers.ACS.ContactAttribute,this.state=new a.Providers.ACS.ContactAttribute,this.country=new a.Providers.ACS.ContactAttribute,this.postalCode=new a.Providers.ACS.ContactAttribute,this.manager=new a.Providers.ACS.ContactAttribute,this.department=new a.Providers.ACS.ContactAttribute,this.asciiGivenName=new a.Providers.ACS.ContactAttribute,this.asciiSurName=new a.Providers.ACS.ContactAttribute,this.asciiDisplayName=new a.Providers.ACS.ContactAttribute,this.pictureUrl=new a.Providers.ACS.ContactAttribute,this.isBuddy=new a.Providers.ACS.ContactAttribute,this.favourite=new a.Providers.ACS.ContactAttribute,this.videoCapable=new a.Providers.ACS.ContactAttribute,this.preferredLanguage=new a.Providers.ACS.ContactAttribute,this.notes=new a.Providers.ACS.ContactAttribute,this.rank=new a.Providers.ACS.ContactAttribute,this.custom1=new a.Providers.ACS.ContactAttribute,this.custom2=new a.Providers.ACS.ContactAttribute,this.custom3=new a.Providers.ACS.ContactAttribute,this.phoneNumberList=[],this.emailAddresses=[],this.imaddresses=[]}b.prototype={equals:function(a){var b=this.id.equals(a.id)&&this.contactIdentifier.equals(a.contactIdentifier)&&this.contactUrl.equals(a.contactUrl)&&this.surName.equals(a.surName)&&this.givenName.equals(a.givenName)&&this.displayName.equals(a.displayName)&&this.aliasGivenName.equals(a.aliasGivenName)&&this.aliasSurName.equals(a.aliasSurName)&&this.company.equals(a.company)&&this.location.equals(a.location)&&this.workRoomNo.equals(a.workRoomNo)&&this.streetAddress.equals(a.streetAddress)&&this.city.equals(a.city)&&this.state.equals(a.state)&&this.country.equals(a.country)&&this.postalCode.equals(a.postalCode)&&this.manager.equals(a.manager)&&this.department.equals(a.department)&&this.asciiGivenName.equals(a.asciiGivenName)&&this.asciiSurName.equals(a.asciiSurName)&&this.asciiDisplayName.equals(a.asciiDisplayName)&&this.pictureUrl.equals(a.pictureUrl)&&this.isBuddy.equals(a.isBuddy)&&this.favourite.equals(a.favourite)&&this.videoCapable.equals(a.videoCapable)&&this.preferredLanguage.equals(a.preferredLanguage)&&this.notes.equals(a.notes)&&this.rank.equals(a.rank)&&this.custom1.equals(a.custom1)&&this.custom2.equals(a.custom2)&&this.custom3.equals(a.custom3);if(!b||this.phoneNumberList.length!==a.phoneNumberList.length||this.emailAddresses.length!==a.emailAddresses.length||this.imaddresses.length!==a.imaddresses.length)return!1;for(var c=0;c<this.phoneNumberList.length;c++)if(!this.phoneNumberList[c].equals(a.phoneNumberList[c]))return!1;for(c=0;c<this.emailAddresses.length;c++)if(!this.emailAddresses[c].equals(a.emailAddresses[c]))return!1;for(c=0;c<this.imaddresses.length;c++)if(!this.imaddresses[c].equals(a.imaddresses[c]))return!1;return!0}},a.Providers.ACS.ContactV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.userEmail="",this.contacts=[],this.hasMoreResults=!1}b.prototype={},a.Providers.ACS.ContactsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.displayMsg="",this.errorMsg=""}b.prototype={},a.Providers.ACS.ErrorV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.version=1,this.resources={avayaRequestTimeout:{maximum:void 0,minimum:void 0,recommended:void 0},capabilities:[],resources:{notification:{websocket:{href:void 0},sse:{href:void 0}},contacts:{POST:{addUpdateContact:{href:void 0}},GET:{getContacts:{href:void 0,limits:{maxSearchResultsPerPage:void 0,maxSearchResultsTotal:void 0}}}},pictures:{GET:{getUserPicture:{href:void 0}}}},self:void 0}}b.prototype={},a.Providers.ACS.ResourcesV1=b}(AvayaClientServices),function(a){"use strict";var b={TYPING:"typing",RECORDING_AUDIO:"recordingAudio",RECORDING_VIDEO:"recordingVideo",ATTACHING_FILE:"attachingFile",TAKING_PICTURE:"takingPicture",OTHER:"other"};a.Providers.AMM.ChatStateActions=b}(AvayaClientServices),function(a){"use strict";var b={COMPOSING:"composing",PAUSED:"paused"};a.Providers.AMM.ChatStates=b}(AvayaClientServices),function(a){"use strict";function b(a,b){Error.call(this,a,b),this.message=a,this.code=b}b.prototype=Object.create(Error.prototype),a.Providers.AMM.AMMError=b}(AvayaClientServices),function(a,b){"use strict";function c(){this._ammProvider={}}c.prototype={getAMMProvider:function(c){if(a.Base.Utils.isDefined(c)&&c.enabled){if(b.isEmptyObject(this._ammProvider)){var d=this._createAMM2Provider(),e=this._createAMM3Provider();this._ammProvider=new a.Providers.AMM.AMMProvider,this._ammProvider.registerAMMProvider(2.1,d),
this._ammProvider.registerAMMProvider(3,e)}return this._ammProvider}},_createAMM2Provider:function(){var b=new a.Base.RESTProvider,c=new a.Base.NetworkProvider(b);return new a.Providers.AMM.AMM2Provider(c)},_createAMM3Provider:function(){var b=new a.Base.RESTProvider,c=new a.Base.NetworkProvider(b),d=new a.Base.WebSocketProvider,e=new a.Base.NetworkProvider(d);return new a.Providers.AMM.AMM3Provider(c,e)}},a.Providers.AMM.AMMProviderFactory=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){this.active=!1,this.closed=!1,this.href="",this.sensitivity=""}b.prototype={},a.Providers.AMM.ConversationFlagsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.href="",this.id="",this.lastAccessedTime="",this.lastUpdated=""}b.prototype={},a.Providers.AMM.ConversationIdV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.conversationIds=[],this.href="",this.lastUpdated=""}b.prototype={},a.Providers.AMM.ConversationIdsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.attachmentCount=0,this.href="",this.id="",this.flags=new a.Providers.AMM.ConversationFlagsV1,this.lastAccessedTime="",this.lastUpdated="",this.latestEntryTimestamp="",this.messages=[],this.name="",this.owner="",this.participants={href:""},this.totalCount=0,this.type="",this.unreadAttachmentCount=0,this.unreadCount=0,this.counts={eventCount:0,eventUnreadMessage:0,messageAttachment:0,messageCount:0,messageUnreadAttachment:0,messageUnreadMessage:0}}b.prototype={},a.Providers.AMM.ConversationV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.conversations=[],this.href="",this.lastUpdated="",this.moreSearchResults=!1}b.prototype={},a.Providers.AMM.ConversationsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.address="",this.givenName="",this.language="",this.modalities=[],this.nativeGivenName="",this.nativeSurname="",this.picture="",this.surname="",this.subType="",this.type=""}b.prototype={},a.Providers.AMM.EntityV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.displayMsg="",this.errorMsg="",this.errorCode=0}b.prototype={},a.Providers.AMM.ErrorV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.participants=[],this.reason="",this.type="",this.units="",this.value=0}b.prototype={},a.Providers.AMM.EventV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.doNotForward=!1,this.href="",this.importance="",this.read=!1,this.sensitivity=""}b.prototype={},a.Providers.AMM.MessageFlagsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.body="",this.event=new a.Providers.AMM.EventV1,this.flags=new a.Providers.AMM.MessageFlagsV1,this.from=new a.Providers.AMM.EntityV1,this.href="",this.id="",this.inReplyTo="",this.lastModifiedDate="",this.parts=[],this.receivedDate="",this.subject="",this.threadId="",this.to=[]}b.prototype={},a.Providers.AMM.MessageV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.action="",this.address="",this.state="",this.timestamp=""}b.prototype={},a.Providers.AMM.NotificationContentsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.disposition="",this.duration=0,this.media="",this.mimeType="",this.partId="",this.size=0}b.prototype={},a.Providers.AMM.PartV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.participants=[]}b.prototype={},a.Providers.AMM.ParticipantsV1=b}(AvayaClientServices),function(a){"use strict";function b(){this.version=2,this.addresses="",this.avayaRequestTimeout={recommended:0,maximum:0,minimum:0},this.capabilities={richContent:!1},this.conversationsResource={href:"",maxMessageCount:0},this.limits={maxAudioSize:0,maxGenericAttachmentSize:0,maxImageSize:0,maxTextLength:0,maxVideoSize:0},this.messages="",this.outbox="",this.self="",this.services={markAsReadIf:"",validateAddress:""}}b.prototype={},a.Providers.AMM.ResourcesV2=b}(AvayaClientServices),function(a){"use strict";function b(){this.version=3,this.avayaRequestTimeout={recommended:0,maximum:0,minimum:0},this.capabilities={richContent:!1},this.conversationsResource={href:"",maxMessageCount:0},this.limits={maxAudioSize:0,maxGenericAttachmentSize:0,maxImageSize:0,maxTextLength:0,maxVideoSize:0},this.messages="",this.outbox="",this.self="",this.services={markAsReadIf:"",validateAddress:""}}b.prototype={},a.Providers.AMM.ResourcesV3=b}(AvayaClientServices),function(a){"use strict";function b(){this.version=4,this.avayaRequestTimeout={recommended:0,maximum:0,minimum:0},this.capabilities={richContent:!1},this.contacts={href:""},this.conversationsResource={href:"",capabilities:{automaticLastAccessedDate:!1,postSessionEvent:!1,subjectChange:!1},limits:{maxMessageCount:0,maxIdsLimit:0}},this.domains=[],this.messages={href:""},this.notifications={href:""},this.outbox={href:"",capabilities:{richContent:!1},limits:{maxAudioSize:0,maxGenericAttachmentSize:0,maxImageSize:0,maxTextLength:0,maxVideoSize:0}},this.picture={href:""},this.self="",this.services={markAsReadIf:{href:""},validateAddress:{href:""},markAsReadBatch:{href:"",limits:{maxBatchSize:0}}}}b.prototype={},a.Providers.AMM.ResourcesV4=b}(AvayaClientServices),function(a){"use strict";function b(){this.query="",this.addresses=[]}b.prototype={},a.Providers.AMM.ValidatedAddressesV1=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c){a.Base.Logger.debug("Initializing CallProvider"),a.Base.Observable.call(this),this._config=b,this._callGatewayProvider=c,this._conferenceProvider=void 0,this._cpCalls={},this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.PROCESS_MEDIA_REQUEST,this._processMediaRequestHandler.bind(this)),this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.CALL_RINGING,this._callRingingHandler.bind(this)),this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.CALL_ESTABLISHED,this._callEstablishedHandler.bind(this)),this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.CREATE_MEDIA_REQUEST,this._createMediaRequestHandler.bind(this)),this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.CALL_ENDED,this._callEndedHandler.bind(this)),this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.CALL_INCOMING,this._incomingCallHandler.bind(this)),this._callGatewayProvider.on(a.Providers.CallServiceGateway.ObservableEvents.CALL_FAILURE,this._callFailureHandler.bind(this)),a.Base.Logger.debug("Initialized CallProvider")}a.Providers.Call={};var d=a.Providers.Call;c.prototype=Object.create(a.Base.Observable.prototype),c.prototype.start=function(a){return this._callGatewayProvider.start(this._config,a)},c.prototype.stop=function(){return this._terminateCalls(),this._callGatewayProvider.stop()},c.prototype.startCall=function(a,c,e){var f=b.Deferred(),g=this._createCPCall(a),h={video:c,webCollab:e};h.remoteAddress=a.getRemoteAddress();var i=new d.StartCallEvent(h);return g.handleEvent(i),f.resolve()},c.prototype._createCPCall=function(b){return new a.Providers.Call.CPCall(b,this,this._callGatewayProvider)},c.prototype.stopCall=function(a){var c=b.Deferred(),d=this._cpCalls[a.getCallId()];return d&&d.end("normal"),c.resolve()},c.prototype.accept=function(a){var c=b.Deferred(),e=this._cpCalls[a.getCallId()];e.call=a,this.registerCall(a.getCallId(),a,e);var f=new d.AcceptCallEvent;return e.handleEvent(f),c.resolve()},c.prototype.getCalls=function(){return this._callGatewayProvider.getCalls()},c.prototype.getClients=function(){return this._callGatewayProvider.getClients()},c.prototype.getCall=function(a){return this._callGatewayProvider.getCall(a)},c.prototype.getClient=function(a){return this._callGatewayProvider.getClient(a)},c.prototype.muteAudio=function(a){var c=b.Deferred(),d=this._cpCalls[a.getCallId()];return d?(d.muteAudio(),c.resolve()):c.reject("Unable to find CpCall")},c.prototype.unmuteAudio=function(a){var c=b.Deferred(),d=this._cpCalls[a.getCallId()];return d?(d.unmuteAudio(),c.resolve()):c.reject("Unable to find CpCall")},c.prototype.hold=function(a){var b=this._cpCalls[a.getCallId()];return this._callGatewayProvider.holdCall(b.callId)},c.prototype.unhold=function(a){var b=this._cpCalls[a.getCallId()];return this._callGatewayProvider.unholdCall(b.callId)},c.prototype._terminateCalls=function(){for(;this._cpCalls.length;){var b=this._cpCalls.pop();b?b.end():a.Base.Logger.log("Call not found: "+callId)}},c.prototype.getOfferSDP=function(a){var b=this._cpCalls[a];b?b.getOfferSDP():this._retryGetOfferSDP(0,a)},c.prototype._retryGetOfferSDP=function(b,c){setTimeout(function(){var d=this._cpCalls[c];!d&&3>b?this._retryGetOfferSDP(b+1,c):d?d.getOfferSDP():b>=3&&a.Base.Logger.log("Failed to find call to send getOfferSDP")}.bind(this),500)},c.prototype.offerSDP=function(b,c,d,e,f){var g=this._cpCalls[b];g?g.offerSDP(d,c,e,f):a.Base.Logger.log("Call not found: "+b)},c.prototype.callRinging=function(b,c,d){var e=this._cpCalls[b];e?e.callRinging(c,d):a.Base.Logger.log("Call not found: "+b)},c.prototype.answerSDP=function(b,c,d,e,f){var g=this._cpCalls[b];g?g.answerSDP(d,c,e,f):a.Base.Logger.log("Call not found: "+b)},c.prototype.callEstablished=function(b,c,d,e,f,g){var h=this._cpCalls[b];h?h.callEstablished(c,d,e,f,g):a.Base.Logger.log("Call not found: "+b)},c.prototype.callEndedRemotely=function(b){var c=this._cpCalls[b];c?c.callEndedRemotely():a.Base.Logger.log("Call not found: "+b)},c.prototype.callFailed=function(b,c,d){var e=this._cpCalls[b];e?e.end(d):a.Base.Logger.log("Call not found: "+b)},c.prototype.triggerCallStarted=function(b){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.CALL_STARTED,[b])},c.prototype.triggerCallRinging=function(b){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.CALL_RINGING,[b])},c.prototype.triggerCallEstablished=function(b,c,d,e){c&&this.triggerConferenceEscalation(b,d,e),this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.CALL_ESTABLISHED,[b,c])},c.prototype.triggerRemoteStreamAdded=function(b,c){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.REMOTE_STREAM_ADDED,[b,c])},c.prototype.triggerLocalStreamAdded=function(b,c){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.LOCAL_STREAM_ADDED,[b,c])},c.prototype.triggerCallEnded=function(b,c){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.CALL_ENDED,[b,c])},c.prototype.triggerIncomingCall=function(b,c,d){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.INCOMING_CALL,[b,c,d])},c.prototype.triggerConferenceEscalation=function(b,c,d){this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.CONFERENCE_ESCALATION,[b,c,d])},c.prototype.registerCall=function(b,c,d){a.Base.Logger.log("callProvider registerCall: "+b),c.setCallId(b),this._cpCalls[b]=d},c.prototype.unRegisterCall=function(b){b&&(a.Base.Logger.log("callProvider unregisterCall: "+b.getCallId()),delete this._cpCalls[b.getCallId()])},c.prototype.setConferenceProvider=function(a){this._conferenceProvider=a},c.prototype._processMediaRequestHandler=function(b,c,d,e,f,g){a.Base.Logger.debug("Received Process Media Request: "+d),"answer"===d?this.answerSDP(b,c,e,f,g):this.offerSDP(b,c,e,f,g)},c.prototype._callRingingHandler=function(b,c,d,e,f){a.Base.Logger.debug("Received Call Ringing"),this.callRinging(b,c,d,e,f)},c.prototype._callEstablishedHandler=function(b,c,d,e,f,g){a.Base.Logger.debug("Received Call Established"),this.callEstablished(b,c,d,e,f,g)},c.prototype._createMediaRequestHandler=function(b){a.Base.Logger.debug("Received Create Media Request"),this.getOfferSDP(b)},c.prototype._callEndedHandler=function(b){a.Base.Logger.log("Received Call Ended"),this.callEndedRemotely(b)},c.prototype._incomingCallHandler=function(b,c,d,e,f,g,h){a.Base.Logger.debug("Received Incoming Call");var i=new a.Providers.Call.CPCall(null,this,this._callGatewayProvider);i.callId=b,i.incomingCallInfo={remoteAddress:c,remoteDisplayName:d,sdp:f,audioChannel:g,videoChannels:h},this._cpCalls[b]=i,this.triggerIncomingCall(b,c,d)},c.prototype._callFailureHandler=function(b,c,d){a.Base.Logger.log("Received Call Failure: ["+c+":"+d+"]"),this.callFailed(b,c,d)},a.Providers.Call.CallProvider=c}(window.AvayaClientServices=window.AvayaClientServices||{},window.jQuery=window.jQuery||{}),function(a){"use strict";var b=a.Providers.Call;b.StartCallEvent=function c(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,c.stringValue,b)},b.StartCallEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.StartCallEvent.stringValue="START_CALL",b.StartCallResponseEvent=function d(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,d.stringValue,b)},b.StartCallResponseEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.StartCallResponseEvent.stringValue="START_CALL_RESPONSE",b.GetOfferSDPEvent=function e(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,e.stringValue,b)},b.GetOfferSDPEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.GetOfferSDPEvent.stringValue="GET_OFFER_SDP",b.OfferSDPEvent=function f(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,f.stringValue,b)},b.OfferSDPEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.OfferSDPEvent.stringValue="OFFER_SDP",b.CallRingingEvent=function g(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,g.stringValue,b)},b.CallRingingEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.CallRingingEvent.stringValue="CALL_RINGING",b.AnswerSDPEvent=function h(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,h.stringValue,b)},b.AnswerSDPEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.AnswerSDPEvent.stringValue="ANSWER_SDP",b.CallEstablishedEvent=function i(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,i.stringValue,b)},b.CallEstablishedEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.CallEstablishedEvent.stringValue="CALL_ESTABLISHED",b.EndCallEvent=function j(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,j.stringValue,b)},b.EndCallEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.EndCallEvent.stringValue="END_CALL",b.EndCallResponseEvent=function k(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,k.stringValue,b)},b.EndCallResponseEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.EndCallResponseEvent.stringValue="END_CALL_RESPONSE",b.OnAddStreamEvent=function l(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,l.stringValue,b)},b.OnAddStreamEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.OnAddStreamEvent.stringValue="ON_ADD_STREAM",b.IncomingCallEvent=function m(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,m.stringValue,b)},b.IncomingCallEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.IncomingCallEvent.stringValue="INCOMING_CALL",b.AcceptCallEvent=function n(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,n.stringValue,b)},b.AcceptCallEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.AcceptCallEvent.stringValue="ACCEPT_CALL",b.MuteAudioEvent=function o(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,o.stringValue,b)},b.MuteAudioEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.MuteAudioEvent.stringValue="MUTE_AUDIO",b.UnmuteAudioEvent=function p(b){a.Base.SimpleFsm.SimpleFsmEvent.call(this,p.stringValue,b)},b.UnmuteAudioEvent.prototype=Object.create(a.Base.SimpleFsm.SimpleFsmEvent.prototype),b.UnmuteAudioEvent.stringValue="UNMUTE_AUDIO"}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b=a.Providers.Call.States={};b.INITIAL=new a.Base.SimpleFsm.SimpleFsmState("INITIAL"),b.STARTING=new a.Base.SimpleFsm.SimpleFsmState("STARTING"),b.STARTING_SLOW_START=new a.Base.SimpleFsm.SimpleFsmState("STARTING_SLOW_START"),b.ALERTING=new a.Base.SimpleFsm.SimpleFsmState("ALERTING"),b.ACTIVE=new a.Base.SimpleFsm.SimpleFsmState("ACTIVE"),b.FAILED=new a.Base.SimpleFsm.SimpleFsmState("FAILED"),b.ENDING=new a.Base.SimpleFsm.SimpleFsmState("ENDING"),b.ENDED=new a.Base.SimpleFsm.SimpleFsmState("ENDED")}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b="m=audio",c="m=video",d="a=recvonly",e="a=sendonly",f="a=sendrecv ",g="a=inactive";a.Providers.Call.Utils={updateAudioSdpInactive:function(c){return a.Providers.Call.Utils.updateSdp(c,b,g)},updateAudioSdpRecvOnly:function(c){return a.Providers.Call.Utils.updateSdp(c,b,d)},updateAudioSdpSendOnly:function(c){return a.Providers.Call.Utils.updateSdp(c,b,e)},updateAudioSdpSendRecv:function(c){return a.Providers.Call.Utils.updateSdp(c,b,f)},updateVideoSdpInactive:function(b){return a.Providers.Call.Utils.updateSdp(b,c,g)},updateVideoSdpRecvOnly:function(b){return a.Providers.Call.Utils.updateSdp(b,c,d)},updateVideoSdpSendOnly:function(b){return a.Providers.Call.Utils.updateSdp(b,c,e)},updateVideoSdpSendRecv:function(b){return a.Providers.Call.Utils.updateSdp(b,c,f)},updateSdp:function(a,d,e){var f=a.indexOf(d);if(-1===f)return a;var g=a.indexOf(b),h=a.indexOf(c);return d===b?h>g?a.substring(0,g)+a.substring(g,h).replace(/a=inactive|a=sendrecv|a=recvonly|a=sendonly/,e)+a.substring(h):a.substring(0,g)+a.substring(g).replace(/a=inactive|a=sendrecv|a=recvonly|a=sendonly/,e):g>h?a.substring(0,h)+a.substring(h,g).replace(/a=inactive|a=sendrecv|a=recvonly|a=sendonly/,e)+a.substring(g):a.substring(0,h)+a.substring(h).replace(/a=inactive|a=sendrecv|a=recvonly|a=sendonly/,e)}},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(a){var b=this;return function(){var c=Array.prototype.slice.call(arguments);return b.apply(a||null,c)}})}(AvayaClientServices),function(a){"use strict";function b(b,d,e){console.debug("Initializing CallProvider"),this._config={},this._callGatewayProvider=e,this._callProvider=d,this._userMedia=new a.Base.UserMedia,this.call=b,this.localStream=null,this.remoteStream=null,this.callId=null,this.incomingCallInfo={remoteAddress:void 0,remoteDisplayName:void 0,sdp:""},this.audioChannel=null,this.videoChannels=[],this._rtConnection=new a.Base.RTCConnectionProvider,this._fsm=new a.Base.SimpleFsm.SimpleFsm,this._fsm.registerHandler(c.States.INITIAL,c.StartCallEvent,c.StartCallEventInInitialHandler),this._fsm.registerHandler(c.States.INITIAL,c.AcceptCallEvent,c.AcceptCallEventInInitialHandler),this._fsm.registerHandler(c.States.INITIAL,c.EndCallEvent,c.EndCallEventInMultipleHandler),this._fsm.registerHandler(c.States.STARTING,c.StartCallResponseEvent,c.StartCallResponseEventInStartingHandler),this._fsm.registerHandler(c.States.STARTING,c.GetOfferSDPEvent,c.GetOfferSDPEventInStartingHandler),this._fsm.registerHandler(c.States.STARTING,c.OfferSDPEvent,c.OfferSDPEventInStartingHandler),this._fsm.registerHandler(c.States.STARTING,c.CallRingingEvent,c.CallRingingEventInStartingHandler),this._fsm.registerHandler(c.States.STARTING,c.AnswerSDPEvent,c.AnswerSDPEventInMultipleHandler),this._fsm.registerHandler(c.States.STARTING,c.MuteAudioEvent,c.MuteAudioEventInMultipleHandler),this._fsm.registerHandler(c.States.STARTING,c.UnmuteAudioEvent,c.UnmuteAudioEventInMultipleHandler),this._fsm.registerHandler(c.States.STARTING,c.CallEstablishedEvent,c.CallEstablishedEventInMultipleHandler),this._fsm.registerHandler(c.States.STARTING,c.EndCallEvent,c.EndCallEventInMultipleHandler),this._fsm.registerHandler(c.States.ALERTING,c.AnswerSDPEvent,c.AnswerSDPEventInMultipleHandler),this._fsm.registerHandler(c.States.ALERTING,c.MuteAudioEvent,c.MuteAudioEventInMultipleHandler),this._fsm.registerHandler(c.States.ALERTING,c.UnmuteAudioEvent,c.UnmuteAudioEventInMultipleHandler),this._fsm.registerHandler(c.States.ALERTING,c.CallEstablishedEvent,c.CallEstablishedEventInMultipleHandler),this._fsm.registerHandler(c.States.ALERTING,c.EndCallEvent,c.EndCallEventInMultipleHandler),this._fsm.registerHandler(c.States.ACTIVE,c.OfferSDPEvent,c.OfferSDPEventInActiveHandler),this._fsm.registerHandler(c.States.ACTIVE,c.MuteAudioEvent,c.MuteAudioEventInMultipleHandler),this._fsm.registerHandler(c.States.ACTIVE,c.UnmuteAudioEvent,c.UnmuteAudioEventInMultipleHandler),this._fsm.registerHandler(c.States.ACTIVE,c.EndCallEvent,c.EndCallEventInActiveHandler),this._fsm.registerNoOpHandler(c.States.ENDING,c.EndCallEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.StartCallResponseEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.GetOfferSDPEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.CallRingingEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.AnswerSDPEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.MuteAudioEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.UnmuteAudioEvent),this._fsm.registerNoOpHandler(c.States.ENDING,c.CallEstablishedEvent),this._fsm.registerHandler(c.States.ENDING,c.EndCallResponseEvent,c.EndCallResponseEventInEndingHandler),this._fsm.registerNoOpHandler(c.States.ENDED,c.EndCallEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.StartCallResponseEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.GetOfferSDPEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.CallRingingEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.AnswerSDPEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.MuteAudioEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.UnmuteAudioEvent),this._fsm.registerNoOpHandler(c.States.ENDED,c.CallEstablishedEvent),this._fsm.start(c.States.INITIAL),console.debug("Initialized CPCall")}var c=a.Providers.Call;b.prototype={},b.prototype.prepareEvent=function(a){return a.data||(a.data={}),a.data.cpCall=this,a.data.callProvider=this._callProvider,a},b.prototype.handleEvent=function(a){this.prepareEvent(a),this._fsm.handleEvent(a)},b.prototype.start=function(){var a=new c.StartCallEvent;a.data={},a.data.remoteAddress=this.call.getRemoteAddress(),this.handleEvent(a)},b.prototype.getOfferSDP=function(){var a=new c.GetOfferSDPEvent;this.handleEvent(a)},b.prototype.offerSDP=function(a,b,d,e){var f=new c.OfferSDPEvent;f.data={offer:a,action:b,audioChannel:d,videoChannels:e},this.handleEvent(f)},b.prototype.callRinging=function(a,b){var d=new c.CallRingingEvent;d.data={address:a,displayName:b},this.handleEvent(d)},b.prototype.answerSDP=function(a,b,d,e){var f=new c.AnswerSDPEvent;f.data={answer:a,action:b,audioChannel:d,videoChannels:e},this.handleEvent(f)},b.prototype.callEstablished=function(a,b,d,e,f){var g=new c.CallEstablishedEvent;g.data={address:a,displayName:b,isConf:d},d&&(g.data.uccpUrl=e,g.data.webCollabUrl=f),this.handleEvent(g)},b.prototype.muteAudio=function(){var a=new c.MuteAudioEvent;this.handleEvent(a)},b.prototype.unmuteAudio=function(){var a=new c.UnmuteAudioEvent;this.handleEvent(a)},b.prototype.end=function(a){var b=new c.EndCallEvent;b.data={remote:!1,reason:a},this.handleEvent(b)},b.prototype.callEndedRemotely=function(){var a=new c.EndCallEvent;a.data={remote:!0},this.handleEvent(a)},b.prototype.incomingCall=function(){var a=new c.IncomingCallEvent;this.handleEvent(a)},b.prototype.callFailed=function(a,b,d){var e=new c.EndCallEvent;e.data={remote:!1,reason:d},this.handleEvent(e)},b.prototype.setAVChannels=function(b){if(a.Base.Utils.isDefined(b)){var c=0;b.forEach(function(a){var b=this._getStreamDirection(a.direction);"audio"===a.type?this.audioChannel={channelId:a.id,state:"ENABLE",direction:b}:"video"===a.type&&(this.videoChannels[c]={channelId:a.id,state:"ENABLE",direction:b},c++)}.bind(this))}},b.prototype._getStreamDirection=function(b){return b===a.Providers.Interfaces.StreamDirection.SENDRECV?a.Providers.CallServiceGateway.Constants.SEND_RECV:b===a.Providers.Interfaces.StreamDirection.RECVONLY?a.Providers.CallServiceGateway.Constants.RECV_ONLY:b===a.Providers.Interfaces.StreamDirection.SEND_ONLY?a.Providers.CallServiceGateway.Constants.SEND_ONLY:a.Providers.CallServiceGateway.Constants.INACTIVE},b.prototype.getAudioChannel=function(){return this.audioChannel},b.prototype.getVideoChannels=function(){return this.videoChannels},b.prototype.updateAudioChannel=function(b){if(a.Base.Utils.isDefined(b))switch(b.direction){case"SEND_ONLY":this.audioChannel.direction="RECEIVE_ONLY";break;case"RECEIVE_ONLY":this.audioChannel.direction="SEND_ONLY"}},b.prototype.updateVideoChannels=function(b){if(a.Base.Utils.isDefined(b))for(var c=0;c<b.length;c++)if(b[c])switch(b[c].direction){case"SEND_ONLY":this.videoChannels[c].direction="RECEIVE_ONLY";break;case"RECEIVE_ONLY":this.videoChannels[c].direction="SEND_ONLY"}},a.Providers.Call.CPCall=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider,e=c._callGatewayProvider,f=c._userMedia;return f.getUserMedia(null,function(b){console.debug("getUserMedia success");var f=[];c._rtConnection.disableStream(b),b.getTracks().forEach(function(b){"audio"===b.kind?f.push(new a.Providers.Interfaces.AudioStream(b.id,a.Providers.Interfaces.StreamDirection.SENDRECV)):"video"===b.kind&&f.push(new a.Providers.Interfaces.VideoStream(b.id,a.Providers.Interfaces.StreamDirection.SENDRECV))}),c.localStream=b,d.triggerLocalStreamAdded(c.call,b);var g=c.incomingCallInfo.sdp.indexOf("a=fingerprint:")>0?!0:!1;if(!g){var h={optional:[{DtlsSrtpKeyAgreement:!1}]};c._rtConnection.createPeerConnection(h)}var i=c._rtConnection;i.addStream(c.localStream),i.onAddStream=function(a){a.getTracks().forEach(function(a){a.enabled=!1}),c.remoteStream=a,d.triggerRemoteStreamAdded(c.call,a)},i.createAnswer(c.incomingCallInfo.sdp,function(a){e.acceptCall(c.callId,a.type,a.sdp)},function(b){var d="Error while creating answer: "+b;a.Base.Logger.error(d),c.end(d)})},function(b){var d="Error while retrieving local stream: "+b;a.Base.Logger.error(d),c.end(d)}),{nextState:a.Providers.Call.States.ALERTING}}a.Providers.Call.AcceptCallEventInInitialHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider,e=c._callGatewayProvider,f=c._rtConnection;f.onAddStream=function(b){a.Base.Logger.debug("Added REMOTE stream"),b.getTracks().forEach(function(a){a.enabled=!1}),c.remoteStream=b,d.triggerRemoteStreamAdded(c.call,b)},c.updateAudioChannel(b.data.audioChannel),c.updateVideoChannels(b.data.videoChannels),f.receiveAnswer(b.data.answer,function(){e.answerSDPResponse(c.callId,c.getAudioChannel(),c.getVideoChannels())},function(b){a.Base.Logger.error("Error receiving answer SDP: "+b)})}a.Providers.Call.AnswerSDPEventInMultipleHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider;c._callGatewayProvider,c._userMedia;return c._rtConnection.enableAllStreams(),a.Base.Utils.isDefined(b.data.displayName)?c.call.setRemoteDisplayName(b.data.displayName):c.call.setRemoteDisplayName(b.data.remoteAddress),d.triggerCallEstablished(c.call,b.data.isConf,b.data.uccpUrl,b.data.webCollabUrl),{nextState:a.Providers.Call.States.ACTIVE}}a.Providers.Call.CallEstablishedEventInMultipleHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider;c._callGatewayProvider,c._userMedia;return a.Base.Utils.isDefined(b.data.displayName)?c.call.setRemoteDisplayName(b.data.displayName):c.call.setRemoteDisplayName(b.data.remoteAddress),d.triggerCallRinging(c.call),{nextState:a.Providers.Call.States.ALERTING}}a.Providers.Call.CallRingingEventInStartingHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=c._callGatewayProvider,e=new a.Providers.Call.EndCallResponseEvent;return e.data={},c._rtConnection.stopAllStreams(),b.data.remote?(e.data.reason="remote",{nextState:a.Providers.Call.States.ENDING,nextEvent:c.prepareEvent(e)}):(e.data.reason=b.data.reason,d.endCall(c.callId).then(function(){c.handleEvent(e)},function(a){c.handleEvent(e)}),{nextState:a.Providers.Call.States.ENDING})}a.Providers.Call.EndCallEventInActiveHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=c._callGatewayProvider,e=new a.Providers.Call.EndCallResponseEvent;return e.data={},b.data.reason?e.data.reason=b.data.reason:e.data.reason="normal",c._rtConnection.stopAllStreams(),d.endCall(c.callId).then(function(){c.handleEvent(e)},function(a){c.handleEvent(e)}),{nextState:a.Providers.Call.States.ENDING}}a.Providers.Call.EndCallEventInMultipleHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider;c._callGatewayProvider;return c.localStream=null,c.remoteStream=null,c._rtConnection.close(),c._rtConnection=null,d.triggerCallEnded(c.call,b.data.reason),d.unRegisterCall(c.call),{nextState:a.Providers.Call.States.ENDED}}a.Providers.Call.EndCallResponseEventInEndingHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=c._callGatewayProvider,e=c.call.getConferenceEntryOptions();if(a.Base.Utils.isDefined(e)&&e.getToken()&&!e.isDtlsSrtpKeyAgreement()){var f={optional:[{DtlsSrtpKeyAgreement:!1}]};c._rtConnection.createPeerConnection(f)}var g=c._rtConnection;g.addStream(c.localStream),g.onAddStream=function(b){c.handleEvent(new a.Base.CallProvider.OnAddStreamEvent(b))},g.createOffer(function(a){d.getOfferSDPResponse(c.callId,a)},function(b){var d="Error while creating offer: "+b;a.Base.Logger.error(d),c.end(d)})}a.Providers.Call.GetOfferSDPEventInStartingHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a){var b=a.data.cpCall;a.data.callProvider;b.localStream&&b._rtConnection.disableAudioStream(b.localStream)}a.Providers.Call.MuteAudioEventInMultipleHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider,e=c._callGatewayProvider,f=c._rtConnection;f.addStream(c.localStream),f.onAddStream=function(a){a.getTracks().forEach(function(a){a.enabled=!1}),c.remoteStream=a,d.triggerRemoteStreamAdded(c.call,a)},f.createAnswer(b.data.offer,function(a){e.offerSDPResponse(c.callId,a)},function(b){var d="Error while creating answer: "+b;a.Base.Logger.error(d),c.end(d)})}a.Providers.Call.OfferSDPEventInActiveHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var c=b.data.cpCall,d=b.data.callProvider,e=c._callGatewayProvider,f=c._rtConnection;f.addStream(c.localStream),f.onAddStream=function(a){a.getTracks().forEach(function(a){a.enabled=!1}),c.remoteStream=a,d.triggerRemoteStreamAdded(c.call,a)},c.updateAudioChannel(b.data.audioChannel),c.updateVideoChannels(b.data.videoChannels),f.createAnswer(b.data.offer,function(a){e.offerSDPResponse(c.callId,a,b.data.action,c.getAudioChannel(),c.getVideoChannels())},function(b){var d="Error while creating offer: "+b;a.Base.Logger.error(d),c.end(d)})}a.Providers.Call.OfferSDPEventInStartingHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){var d=b.data.cpCall,e=b.data.callProvider,f=d._callGatewayProvider,g=d._userMedia,h=d.call.getVideoChannels(),i={audio:!0};if(a.Base.Utils.isDefined(h))for(var j=0;j<h.length;j++)if(h[j].getRequestedDirection()===a.Services.Call.MediaDirection.SEND_RECV){i.video=!0;break}return g.getUserMedia(i,function(g){a.Base.Logger.debug("getUserMedia success");var i=[];d._rtConnection.disableStream(g);var j=0;if(g.getTracks().forEach(function(b){if("audio"===b.kind)i.push(new a.Providers.Interfaces.AudioStream(b.id,a.Providers.Interfaces.StreamDirection.SENDRECV));else if("video"===b.kind){var d=a.Providers.Interfaces.StreamDirection.SENDRECV;a.Base.Utils.isDefined(h)&&j<h.length&&(d=c(h[j].getRequestedDirection()),j++),i.push(new a.Providers.Interfaces.VideoStream(b.id,d))}}),0===j&&a.Base.Utils.isDefined(h))for(var k=0;k<h.length;k++){var l=c(h[k].getRequestedDirection());i.push(new a.Providers.Interfaces.VideoStream(k+1,l));
}d.setAVChannels(i),d.localStream=g,e.triggerLocalStreamAdded(d.call,g),f.startCall(b.data.remoteAddress,d.call.getConferenceEntryOptions(),b.data.video,b.data.webCollab,d.getAudioChannel(),d.getVideoChannels()).then(function(b){a.Base.Logger.debug("callGateway startCallResponse: "+JSON.stringify(b));var c=new a.Providers.Call.StartCallResponseEvent;c.data={},c.data.callId=b.callId,d.handleEvent(c)},function(a){d.end("Error while staring call: "+a)}),e.triggerCallStarted(d.call)},function(){a.Base.Logger.error("Failed to get local media streams for call."),d.end("Failed to get local media streams")}),{nextState:a.Providers.Call.States.STARTING}}function c(b){if(a.Base.Utils.isDefined(b))switch(b){case a.Services.Call.MediaDirection.RECV_ONLY:return a.Providers.Interfaces.StreamDirection.RECVONLY;case a.Services.Call.MediaDirection.SEND_ONLY:return a.Providers.Interfaces.StreamDirection.SENDONLY;case a.Services.Call.MediaDirection.INACTIVE:return a.Providers.Interfaces.StreamDirection.INACTIVE;case a.Services.Call.MediaDirection.SEND_RECV:return a.Providers.Interfaces.StreamDirection.SENDRECV;default:return a.Providers.Interfaces.StreamDirection.SENDRECV}return a.Providers.Interfaces.StreamDirection.SENDRECV}a.Providers.Call.StartCallEventInInitialHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a){var b=a.data.cpCall,c=a.data.callProvider,d=(b._callGatewayProvider,a.data.callId);b.callId=d,c.registerCall(d,b.call,b)}a.Providers.Call.StartCallResponseEventInStartingHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a){var b=a.data.cpCall;a.data.callProvider;b.localStream&&b._rtConnection.enableAudioStream(b.localStream)}a.Providers.Call.UnmuteAudioEventInMultipleHandler=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b,c,d){a.Base.Observable.call(this),this._networkProvider=b,this._config={},this._notificationProvider=c,this._notificationParser=d}b.prototype=Object.create(a.Base.Observable.prototype),b.prototype.init=function(b){return this._config=b,this._networkProvider.onMessage=function(a){},this._networkProvider.onError=function(b){a.Base.Logger.error(b)},this._networkProvider.init(this._config),this._notificationProvider.onMessage=function(a){var b,c,d=JSON.parse(a.data);try{b=JSON.parse(d.message),c=this._notificationParser.parse(b),c=c||b}catch(e){c=d}c.type?this.trigger("call."+c.type,[c]):this.trigger("call.message",[c])}.bind(this),this._notificationProvider.onError=function(b){a.Base.Logger.error(b)},this._notificationProvider.init(this._config),this},b.prototype.startCall=function(b){var c={sendType:"POST",urlSuffix:"/restgateway/calls",dataType:"json",headers:{Accept:"application/json","Content-Type":"application/json"}},d=JSON.stringify({remoteAddress:b});return this._networkProvider.send(d,c).then(function(b){return new a.Providers.CallGateway.StartCallData(b.callHref,b.callId)})},b.prototype.endCall=function(a){var b={sendType:"DELETE",urlSuffix:"/restgateway/calls/"+a,dataType:"text",headers:{Accept:"application/json","Content-Type":"application/json"}};return this._networkProvider.send(null,b)},b.prototype.acceptCall=function(a,b){var c={sendType:"POST",urlSuffix:"/restgateway/calls/"+a+"/connections/"+b,dataType:"json",headers:{Accept:"application/json","Content-Type":"application/json;"}};return this._networkProvider.send(null,c)},b.prototype.holdCall=function(a,b){var c={sendType:"POST",urlSuffix:"/restgateway/calls/"+a+"/connections/"+b+"/hold",dataType:"text",headers:{Accept:"application/json","Content-Type":"application/json;"}};return this._networkProvider.send(null,c)},b.prototype.unholdCall=function(a,b){var c={sendType:"POST",urlSuffix:"/restgateway/calls/"+a+"/connections/"+b+"/unhold",dataType:"text",headers:{Accept:"application/json","Content-Type":"application/json;"}};return this._networkProvider.send(null,c)},a.Providers.CallGateway.CallGatewayProvider=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j){this.type="active",this.callEvent="ACTIVE",this.originalCallingParticipant=a,this.originalCalledParticipant=b,this.participants=c,this.callId=d,this.ucId=e,this.callHref=f,this.connectionId=g,this.connectionHref=h,this.address=i,this.operations=j}a.Providers.CallGateway.ActiveCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j,k){this.type="alerting",this.callEvent="ALERTING",this.originalCallingParticipant=a,this.originalCalledParticipant=b,this.participants=c,this.callId=d,this.ucId=e,this.callHref=f,this.connectionId=g,this.connectionHref=h,this.address=i,this.operations=j,this.alertingParticipant=k}a.Providers.CallGateway.AlertingCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j,k){this.type="answered",this.callEvent="ANSWERED",this.originalCallingParticipant=a,this.originalCalledParticipant=b,this.participants=c,this.callId=d,this.ucId=e,this.callHref=f,this.connectionId=g,this.connectionHref=h,this.address=i,this.operations=j,this.answeringParticipant=k}a.Providers.CallGateway.AnsweredCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e,f,g,h){this.type="failed",this.callEvent="FAILED",this.originalCallingParticipant=a,this.originalCalledParticipant=b,this.participants=c,this.callId=d,this.ucId=e,this.callHref=f,this.address=g,this.reason=h}a.Providers.CallGateway.FailedCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j){this.type="held",this.callEvent="HELD",this.originalCallingParticipant=a,this.originalCalledParticipant=b,this.participants=c,this.callId=d,this.ucId=e,this.callHref=f,this.connectionId=g,this.connectionHref=h,this.address=i,this.operations=j}a.Providers.CallGateway.HeldCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e){this.type="participantDropped",this.callEvent="PARTICIPANTDROPPED",this.participants=a,this.callId=b,this.callHref=c,this.address=d,this.droppingParticipant=e}a.Providers.CallGateway.ParticipantDroppedCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b){this.callId=b,this.callHref=a}a.Providers.CallGateway.StartCallData=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c){this.type="subscription",this.callEvent="SUBSCRIPTION",this.status=a,this.subscriptionId=b,this.additionalProperties=c}a.Providers.CallGateway.SubscriptionCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j){this.type="unheld",this.callEvent="UNHELD",this.originalCallingParticipant=a,this.originalCalledParticipant=b,this.participants=c,this.callId=d,this.ucId=e,this.callHref=f,this.connectionId=g,this.connectionHref=h,this.address=i,this.operations=j}a.Providers.CallGateway.UnheldCallMessage=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype={parse:function(a){throw new Error("Method not implemented!")}},a.Providers.CallGateway.AbstractParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.ActiveCallMessage(b.originalCallingParticipant,b.originalCalledParticipant,b.participants,b.callId,b.ucId,b.callHref,b.connectionId,b.connectionHref,b.address,b.operations)},a.Providers.CallGateway.ActiveCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.AlertingCallMessage(b.originalCallingParticipant,b.originalCalledParticipant,b.participants,b.callId,b.ucId,b.callHref,b.connectionId,b.connectionHref,b.address,b.operations,b.alertingParticipant)},a.Providers.CallGateway.AlertingCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.AnsweredCallMessage(b.originalCallingParticipant,b.originalCalledParticipant,b.participants,b.callId,b.ucId,b.callHref,b.connectionId,b.connectionHref,b.address,b.operations,b.answeringParticipant)},a.Providers.CallGateway.AnsweredCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){this._parsers=[]}b.prototype={register:function(a,b){this._parsers[a]=b},unregister:function(a){this._parsers[a]=void 0},parse:function(a){return a.callEvent?this._delegateParser(a.callEvent,a):a.subscriptionId?this._delegateParser("subscription",a):a},_delegateParser:function(b,c){return void 0!==this._parsers[b]?this._parsers[b].parse(c):void a.Base.Logger.error("No parser specified!",b)}},a.Providers.CallGateway.CallNotificationParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.FailedCallMessage(b.originalCallingParticipant,b.originalCalledParticipant,b.participants,b.callId,b.ucId,b.callHref,b.address,b.reason)},a.Providers.CallGateway.FailedCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.HeldCallMessage(b.originalCallingParticipant,b.originalCalledParticipant,b.participants,b.callId,b.ucId,b.callHref,b.connectionId,b.connectionHref,b.address,b.operations)},a.Providers.CallGateway.HeldCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.ParticipantDroppedCallMessage(b.participants,b.callId,b.callHref,b.address,b.droppingParticipant)},a.Providers.CallGateway.ParticipantDroppedCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.SubscriptionCallMessage(b.status,b.subscriptionId,b.additionalProperties)},a.Providers.CallGateway.SubscriptionCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.CallGateway.AbstractParser.prototype),b.prototype.parse=function(b){return new a.Providers.CallGateway.UnheldCallMessage(b.originalCallingParticipant,b.originalCalledParticipant,b.participants,b.callId,b.ucId,b.callHref,b.connectionId,b.connectionHref,b.address,b.operations)},a.Providers.CallGateway.UnheldCallMessageParser=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a){this._credentials=a,this._requestId=Date.now()}var c={CSA_RESOURCE:"application/vnd.avaya.csa.resources.v1+json",CSA_ERROR:"application/vnd.avaya.csa.error.v1+json",CSA_CALL:"application/vnd.avaya.csa.call.v1+json",CSA_CALLS:"application/vnd.avaya.csa.calls.v1+json",CSA_CLIENT:"application/vnd.avaya.csa.client.v1+json",CSA_CLIENTS:"application/vnd.avaya.csa.clients.v1+json",CSA_SERVICES:"application/vnd.avaya.csa.services.v1+json",CSA_CALL_ACTION:"application/vnd.avaya.csa.callaction+v1.json"},d={CALL_PREFERENCE:"application/vnd.avaya.csa.callpreferences.v1+json",CALL_ACTION:"application/vnd.avaya.csa.callaction.v1+json",SERVICES:"application/vnd.avaya.csa.services.v1+json"};b.prototype={buildStartCallOptions:function(b){var e={urlSuffix:"",url:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_POST,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:c.CSA_CALL,"Content-Type":d.CALL_PREFERENCE,Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}};return e},buildActivateServiceOptions:function(b){var e={urlSuffix:"",url:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_POST,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:c.CSA_SERVICES,"Content-Type":d.SERVICES,Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}};return e},buildDeactivateServiceOptions:function(b){var e={urlSuffix:"",url:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_DELETE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:c.CSA_SERVICES,"Content-Type":d.SERVICES,Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}};return e},buildResourceDiscoveryOptions:function(){var b=a.Providers.CallServiceGateway.Constants.CSA_RESOURCE_PATH;this._credentials.isGuest&&(b+="?"+this._credentials.displayName);var d={urlSuffix:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_GET,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:[c.CSA_RESOURCE,c.CSA_ERROR].join(", "),Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}};return d},buildUpdateCallOptions:function(b,c){var e=($.Deferred(),{urlSuffix:"",url:b+"/"+c,sendType:a.Providers.CallServiceGateway.Constants.HTTP_POST,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{"Content-Type":d.CALL_ACTION,Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}});return e},buildGetCallsOptions:function(b){var d=($.Deferred(),{urlSuffix:"",url:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_GET,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:[c.CSA_CALLS,c.CSA_ERROR].join(", "),Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}});return d},buildGetCallOptions:function(b,d){var e=($.Deferred(),{urlSuffix:"",url:b+"/"+d,sendType:a.Providers.CallServiceGateway.Constants.HTTP_GET,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:[c.CSA_CALL,c.CSA_ERROR].join(", "),Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}});return e},buildGetClientsOptions:function(b){var d=($.Deferred(),{urlSuffix:"",url:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_GET,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:[c.CSA_CLIENTS,c.CSA_ERROR].join(", "),Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}});return d},buildGetClientOptions:function(b,d){var e=($.Deferred(),{urlSuffix:"",url:b+"/"+d,sendType:a.Providers.CallServiceGateway.Constants.HTTP_GET,dataType:a.Providers.CallServiceGateway.Constants.JSON_DATA_TYPE,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Accept:[c.CSA_CLIENT,c.CSA_ERROR].join(", "),Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}});return e},buildKeepAliveOptions:function(b){var c={urlSuffix:b,sendType:a.Providers.CallServiceGateway.Constants.HTTP_GET,crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password},headers:{Authorization:a.Providers.CallServiceGateway.Constants.BASIC_AUTHORIZATION_WITH_SPACE+this._getBasicCredentials()}};return c},buildSubscription:function(b){var c={subscribe:{requestId:this.requestId++,resources:[{application:a.Providers.CallServiceGateway.Constants.CSA_APPLICATION,service:a.Providers.CallServiceGateway.Constants.TELEPHONY_SERVICE,resource:b}],version:a.Providers.CallServiceGateway.Constants.CSA_VERSION_1}};return c},buildProcessMediaOfferResponseNotification:function(b,c,e,f,g,h,i){var j={action:e,actionDetails:{targetCallId:null,participants:null,sdpType:f,sdp:g,audioChannel:a.Base.Utils.isDefined(h)?h:null,videoChannels:a.Base.Utils.isDefined(i)?i:null,conferenceData:null}},k={notify:{requestId:this._requestId++,notifications:[{application:a.Providers.CallServiceGateway.Constants.CSA_APPLICATION,service:a.Providers.CallServiceGateway.Constants.TELEPHONY_SERVICE,version:a.Providers.CallServiceGateway.Constants.CSA_VERSION_1,resource:b,contents:{callId:c,messageType:a.Providers.CallServiceGateway.Constants.PROCESS_MEDIA_RESPONSE,messageDataType:d.CALL_ACTION,messageData:JSON.stringify(j)}}]}};return k},buildProcessMediaAnswerResponseNotification:function(b,c,d,e){var f={notify:{requestId:this._requestId++,notifications:[{application:a.Providers.CallServiceGateway.Constants.CSA_APPLICATION,service:a.Providers.CallServiceGateway.Constants.TELEPHONY_SERVICE,version:a.Providers.CallServiceGateway.Constants.CSA_VERSION_1,resource:b,contents:{callId:c,messageType:a.Providers.CallServiceGateway.Constants.PROCESS_MEDIA_RESPONSE,messageDataType:null,messageData:null}}]}};return f},buildCreateMediaResponseNotification:function(b,c,e,f,g,h){var i={action:null,actionDetails:{targetCallId:null,participants:null,sdpType:e,sdp:f,audioChannel:a.Base.Utils.isDefined(g)?g:null,videoChannels:a.Base.Utils.isDefined(h)?h:null,conferenceData:null}},j={notify:{requestId:this._requestId++,notifications:[{application:a.Providers.CallServiceGateway.Constants.CSA_APPLICATION,service:a.Providers.CallServiceGateway.Constants.TELEPHONY_SERVICE,version:a.Providers.CallServiceGateway.Constants.CSA_VERSION_1,resource:b,contents:{callId:c,messageType:a.Providers.CallServiceGateway.Constants.CREATE_MEDIA_RESPONSE,messageDataType:d.CALL_ACTION,messageData:JSON.stringify(i)}}]}};return j},updateCredentials:function(a){this._credentials=a},_getBasicCredentials:function(){return btoa(decodeURI(this._credentials.username+":"+this._credentials.password))}},a.Providers.CallServiceGateway.CallServiceGatewayProviderMessageBuilder=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(b,c){a.Base.Observable.call(this),this._networkProvider=b,this._webSocketProvider=c,this._eTag=void 0,this._credentials=void 0,this._isServiceActivated=!1,this._resourceHrefs=[],this._parsers=[],this._registerParsers(),this._registerUser=!1,this._resourceKeepAliveProvider=new a.Base.PollingRESTProvider,this._notificationKeepAliveProvider=new a.Base.PollingRESTProvider,this._optionsBuilder=new a.Providers.CallServiceGateway.CallServiceGatewayProviderMessageBuilder(this._credentials)}var d={CallInfo:"0",ClientCalls:"1",Notification:"2",Subscription:"3",UserClients:"4"},e=.8;c.prototype=Object.create(a.Base.Observable.prototype),c.prototype.start=function(c,d){var e=b.Deferred();return this._config=c,this._registerUser=d,this._networkProvider._onCredentialsRequired=this._onCredentialsRequired.bind(this),this._networkProvider.onOpen=function(){this._discoverResources().then(function(){this.activateService().then(function(){e.resolve()}.bind(this),function(a){e.reject(a)}.bind(this))}.bind(this),function(a){e.reject(a)}.bind(this))}.bind(this),this._networkProvider.onMessage=function(a,b){if("undefined"!=typeof b){var c=b.getResponseHeader("ETag");null!==c&&"undefined"!=typeof c&&(this._eTag=c)}}.bind(this),this._networkProvider.onConnectionUnavailable=function(b){this._handleError("Unable to communicate with REST server"),this.trigger(a.Providers.CallServiceGateway.ObservableEvents.NETWORK_PROVIDER_IS_UNAVAILABLE,["REST",b])}.bind(this),this._networkProvider.start(this._config.serverInfo,this._config.credentialProvider),e.promise()},c.prototype.stop=function(){var a=b.Deferred();this.deactivateService();try{this._networkProvider.close(),this._webSocketProvider.close(),a.resolve()}catch(c){a.reject(c)}return a.promise()},c.prototype.getCalls=function(){var c=b.Deferred(),e=this._optionsBuilder.buildGetCallsOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls]);return this._networkProvider.send(null,e).then(function(b){a.Base.Logger.debug("CSGWProvider: Received get calls response");var e=this._parsers[d.ClientCalls].parse(b);c.resolve(e)}.bind(this),function(a){this._handleError("getCalls() network provider failed - "+a.statusText),c.reject(a)}.bind(this)),c.promise()},c.prototype.getCall=function(c){var e=b.Deferred(),f=this._optionsBuilder.buildGetCallOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls],c);return this._networkProvider.send(null,f).then(function(b){a.Base.Logger.debug("CSGWProvider: Received get call response");var c=this._parsers[d.CallInfo].parse(b);e.resolve(c)}.bind(this),function(a){this._handleError("getCall() network provider failed - "+a.statusText),e.reject(a)}.bind(this)),e.promise()},c.prototype.getClients=function(){var c=b.Deferred(),e=this._optionsBuilder.buildGetClientsOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Clients]);return this._networkProvider.send(null,e).then(function(b){a.Base.Logger.debug("CSGWProvider: Received get clients response");var e=this._parsers[d.UserClients].parse(b);c.resolve(e)}.bind(this),function(a){this._handleError("getClients() network provider failed - "+a.statusText),c.reject(a)}.bind(this)),c.promise()},c.prototype.getClient=function(c){var e=b.Deferred(),f=this._optionsBuilder.buildGetClientOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Clients],c);return this._networkProvider.send(null,f).then(function(b){a.Base.Logger.debug("CSGWProvider: Received get client response");var c=this._parsers[d.UserClients].parseClient(b);e.resolve(c)}.bind(this),function(a){this._handleError("getClient() network provider failed - "+a.statusText),e.reject(a)}.bind(this)),e.promise()},c.prototype.startCall=function(c,e,f,g,h,i){var j=b.Deferred(),k=this._optionsBuilder.buildStartCallOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls]),l="";this._credentials.isGuest&&(l=this._credentials.displayName);var m={subject:"JS-CSDK Call",priority:null,privacy:null,participants:[{participantId:null,remoteDisplayName:l,remoteAddress:c}],conferenceData:{uccp:!0,userAgentCalling:null,video:f,webCollaboration:g}};return e?(m.conferenceData.meetingToken=e.getToken(),m.conferenceData.meetingId=e.getMeetingId(),m.conferenceData.meetingPasscode=e.getPasscode(),m.conferenceData.ott=e.isOTT(),m.conferenceData.ott&&(m.conferenceData.webRTCAbleRemote=e.isWebRTCAbleConference())):(m.conferenceData.meetingToken=null,m.conferenceData.meetingId=null,m.conferenceData.meetingPasscode=null,m.conferenceData.ott=null,m.conferenceData.webRTCAbleRemote=null),m=b.extend({},m,{audiochannel:h},{videoChannels:i}),a.Base.Logger.debug("StartCall sending: "+JSON.stringify(m)),this._networkProvider.send(JSON.stringify(m),k).then(function(b){a.Base.Logger.debug("CSGWProvider: Received make call response");var c=this._parsers[d.CallInfo].parse(b);j.resolve(c)}.bind(this),function(a){this._handleError("startCall() network provider failed - "+a.statusText),j.reject(a)}.bind(this)),j.promise()},c.prototype.offerSDPResponse=function(c,d,e,f,g){var h=b.Deferred(),i=this._optionsBuilder.buildProcessMediaOfferResponseNotification(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls],c,e,d.type,d.sdp,f,g);a.Base.Logger.debug("CSGWProvider: Sending offer notification");try{this._webSocketProvider.send(JSON.stringify(i)),h.resolve()}catch(j){h.reject(j)}return h.promise()},c.prototype.answerSDPResponse=function(c,d,e){var f=b.Deferred(),g=this._optionsBuilder.buildProcessMediaAnswerResponseNotification(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls],c,d,e);a.Base.Logger.debug("CSGWProvider: Sending answer notification");try{this._webSocketProvider.send(JSON.stringify(g)),f.resolve()}catch(h){f.reject(h)}return f.promise()},c.prototype.getOfferSDPResponse=function(c,d){var e=b.Deferred(),f=this._optionsBuilder.buildCreateMediaResponseNotification(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls],c,d.type,d.sdp);a.Base.Logger.debug("CSGWProvider: Sending getOffer notification:\n"+d.sdp),a.Base.Logger.debug(JSON.stringify(f));try{this._webSocketProvider.send(JSON.stringify(f)),e.resolve()}catch(g){e.reject(g)}return e.promise()},c.prototype.endCall=function(b){return this._updateCall(b,a.Providers.CallServiceGateway.CallActionType.END)},c.prototype.acceptCall=function(b,c,d,e,f){var g={actionDetails:{targetCallId:null,participants:null,conferenceData:null,sdpType:c,sdp:d,audioChannel:e,videoChannels:a.Base.Utils.isDefined(f)?f:[]}};return this._updateCall(b,a.Providers.CallServiceGateway.CallActionType.ANSWER,g)},c.prototype.holdCall=function(b){return this._updateCall(b,a.Providers.CallServiceGateway.CallActionType.HOLD)},c.prototype.unholdCall=function(b){return this._updateCall(b,a.Providers.CallServiceGateway.CallActionType.UNHOLD)},c.prototype.startRinging=function(b){return this._updateCall(b,a.Providers.CallServiceGateway.CallActionType.RINGING)},c.prototype.activateService=function(){var a=b.Deferred();return this._performServiceActivation(a,this._registerUser),a.promise()},c.prototype._performServiceActivation=function(b){this._sendServiceActivation().then(function(){a.Base.Logger.debug("CSGWProvider: Service activated"),this._isServiceActivated=!0,b.resolve()}.bind(this),function(a){this._handleError("Retry activateService() due network provider failed: "+a.statusText),this._resendActivationRequest(this._sendServiceActivation.bind(this),function(){this._isServiceActivated=!0,b.resolve()}.bind(this))}.bind(this))},c.prototype._sendServiceActivation=function(){var b=this._optionsBuilder.buildActivateServiceOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Services]),c={action:a.Providers.CallServiceGateway.CallActionType.ACTIVATE,service:a.Providers.CallServiceGateway.Constants.CALLS,extendedData:{mode:a.Providers.CallServiceGateway.Constants.COMPUTER,mediaServiceType:a.Providers.CallServiceGateway.Constants.WEBRTC,recoveryToken:null,register:this._registerUser}};return this._networkProvider.send(JSON.stringify(c),b)},c.prototype._resendActivationRequest=function(a,b){var c=3200,d=6e4,e=0,f=function(g){if(0>g)e=500;else{var h=c*Math.pow(2,g);e=h>d?d:Math.min(d,h),e*=~~(1e3*Math.random())+500}this._sendRegistrationTimer=setTimeout(function(){a().then(function(){b()},function(a){f(e,g+1)})}.bind(this),e)}.bind(this);f(-1)},c.prototype.deactivateService=function(){var c=b.Deferred();return this._isServiceActivated?this._sendDeactiveServices().then(function(b){a.Base.Logger.debug("CSGWProvider: Service deactivated"),this._isServiceActivated=!1,c.resolve()}.bind(this),function(a){this._handleError("Retry deactiveService() network provider failed - "+a.statusText),this._resendDeactivationRequest(this._sendDeactiveServices.bind(this),function(){this._isServiceActivated=!1,c.resolve()}.bind(this),function(a){c.reject("Failed to deactivate service: "+a)}.bind(this))}.bind(this)):c.reject("Service resource not available"),c.promise()},c.prototype._sendDeactiveServices=function(){var b={action:a.Providers.CallServiceGateway.CallActionType.DEACTIVATE,service:a.Providers.CallServiceGateway.Constants.CALLS,extendedData:{mode:a.Providers.CallServiceGateway.Constants.COMPUTER,mediaServiceType:a.Providers.CallServiceGateway.Constants.WEBRTC,recoveryToken:null,register:!1}},c=this._optionsBuilder.buildDeactivateServiceOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Services]);return this._networkProvider.send(JSON.stringify(b),c)},c.prototype._resendDeactivationRequest=function(a,b,c){var d=5,e=function(f){d>f?setTimeout(function(){a().then(function(){b()},function(a){e(f+1)})}.bind(this),500):c("Max retry reached")};e(0)},c.prototype._handleError=function(b){a.Base.Logger.log("CSGWProvider: Error detected: "+b)},c.prototype._discoverResources=function(){var c=b.Deferred(),d=this._optionsBuilder.buildResourceDiscoveryOptions();return this._networkProvider.send(null,d).then(function(b){if(null!==b){if(b.resources){for(var d=0;d<b.resources.length;d++)this._resourceHrefs[b.resources[d].name]=b.resources[d].serviceReference.href,"calls"===b.resources[d].name&&console.debug("Calls Href: "+this._resourceHrefs[b.resources[d].name]);var f={crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password}};this._resourceKeepAliveProvider.startPolling(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.KeepAlive],b.resourceKeepaliveTimeout*e,{},f)}b.notificationService?(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Websocket]=b.notificationService.websocket.href,this._subscribeForNotifications().then(function(){this._isServiceReady=!0,c.resolve()}.bind(this),function(a){c.reject(a)})):c.reject("Notification service is undefined")}}.bind(this),function(a){this._handleError("_discoverResources() network provider failed - "+a.statusText),c.reject(a)}.bind(this)),c.promise()},c.prototype._subscribeForNotifications=function(){var c=b.Deferred(),d=this._addCrendentialsToWebsocketUrl(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Websocket]);return this._startWebsocket(d).then(function(){c.resolve()}.bind(this),function(a){c.reject(a)}.bind(this)),c.promise()},c.prototype._startWebsocket=function(c){var d=b.Deferred();return a.Base.Utils.isDefined(c)&&!this._webSocketProvider.isOpened()?(this._webSocketProvider.onOpen=function(){a.Base.Logger.log("CSGWProvider: Notification service websocket connected"),this._webSocketProvider.onMessage=function(a){this._processNotification(a)}.bind(this),d.resolve()}.bind(this),this._webSocketProvider.onError=function(b){a.Base.Logger.log("CSGWProvider: Notification service websocket connection failed: "+b);
}.bind(this),this._webSocketProvider.onClose=function(){a.Base.Logger.log("CSGWProvider: Notification service websocket connection is closed"),this._subscribeForNotifications().then(function(){a.Base.Logger.log("CSGWProvider: Successfully resubscribed for notification service")}.bind(this),function(b){this.trigger(a.Providers.CallServiceGateway.ObservableEvents.NETWORK_PROVIDER_IS_UNAVAILABLE,["Websocket",b])}.bind(this))}.bind(this),this._webSocketProvider.onConnectionUnavailable=function(b){a.Base.Logger.log("CSGWProvider: Notification service websocket connection unavailable: "+b),this._subscribeForNotifications().then(function(){a.Base.Logger.log("CSGWProvider: Successfully resubscribed for notification service")}.bind(this),function(b){this.trigger(a.Providers.CallServiceGateway.ObservableEvents.NETWORK_PROVIDER_IS_UNAVAILABLE,["Websocket",b])}.bind(this))}.bind(this),this._webSocketProvider.start({webSocketURL:c,maxConnectionErrorCount:5})):d.reject("WebSocket URL is undefined"),d.promise()},c.prototype._resubscribeForNotificationsc=function(){},c.prototype._processNotification=function(b){var c=JSON.parse(b.data);if(null!==c)if(c.discovery){var f={crossDomain:!0,authentication:{type:a.Providers.CallServiceGateway.Constants.BASIC_AUTHENTICATION,username:this._credentials.username,password:this._credentials.password}};this._notificationKeepAliveProvider.startPolling(c.discovery.keepalive.href,c.discovery.keepalive.timeout*e,{},f),a.Base.Logger.debug("CSGWProvider: Subscribing to telephony service notifications...");var g=this._optionsBuilder.buildSubscription(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls]);try{this._webSocketProvider.send(JSON.stringify(g))}catch(h){a.Base.Logger.log("CSGWProvider: ERROR while sending subscription: "+h),this.trigger(a.Providers.CallServiceGateway.ObservableEvents.SUBSCRIPTION_FAILED,[h])}}else if(c.subscribed){a.Base.Logger.debug("CSGWProvider: Received subscription notification");var i=this._parsers[d.Subscription].parse(c.subscribed);this.trigger(a.Providers.CallServiceGateway.ObservableEvents.SUBSCRIBED,[i])}else c.notification&&(a.Base.Logger.debug("CSGWProvider: Received notification: "+c.notification.contents.messageType),this._parsers[d.Notification].parse(c.notification))},c.prototype._onCredentialsRequired=function(a,b){var c;this._config.credentialProvider.onAuthenticationChallenge(c,function(a){this._onCredentialsRetrieved(a,b)}.bind(this))},c.prototype._onCredentialsRetrieved=function(b,c){(a.Base.Utils.isUndefined(this._credentials)||this._credentials.username!==b.username||this._credentials.password!==b.password)&&(this._credentials=b,this._optionsBuilder.updateCredentials(this._credentials))},c.prototype._updateCall=function(c,d,e){var f=b.Deferred(),g=this._optionsBuilder.buildUpdateCallOptions(this._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls],c),h={action:d};return e&&(h=b.extend(h,e)),this._networkProvider.send(JSON.stringify(h),g).then(function(b){a.Base.Logger.debug("CSGWProvider: Sent call action: "+d),f.resolve()}.bind(this),function(b){b.status>=200&&b.status<300?(a.Base.Logger.debug("CSGWProvider: Sent call action: "+d),f.resolve()):(this._handleError(d+" call action network provider failed - "+b.statusText),f.reject(b))}.bind(this)),f.promise()},c.prototype._addCrendentialsToWebsocketUrl=function(a){var b=a.split("://"),c=b[0]+"://"+this._credentials.username.replace(/\//g,"%2F")+":"+this._credentials.password+"@"+b[1];return c},c.prototype._registerParsers=function(){this._parsers[d.Subscription]=new a.Providers.CallServiceGateway.SubscriptionParser,this._parsers[d.CallInfo]=new a.Providers.CallServiceGateway.CallInfoParser,this._parsers[d.Notification]=new a.Providers.CallServiceGateway.NotificationParser(this),this._parsers[d.ClientCalls]=new a.Providers.CallServiceGateway.ClientCallsParser(this._parsers[d.CallInfo]),this._parsers[d.UserClients]=new a.Providers.CallServiceGateway.UserClientsParser},c.prototype._startResourceKeepAliveTimer=function(a,b){this._resourceKeepAliveProvider.startPolling(a,b,{})},a.Providers.CallServiceGateway.CallServiceGatewayProvider=c}(AvayaClientServices=window.AvayaClientServices||{},jQuery),function(a){"use strict";function b(){}b.prototype={createCallServiceGatewayProvider:function(){var b=new a.Base.RESTProvider,c=new a.Base.NetworkProvider(b),d=new a.Base.WebSocketProvider,e=new a.Base.NetworkProvider(d);return new a.Providers.CallServiceGateway.CallServiceGatewayProvider(c,e)}},a.Providers.CallServiceGateway.CallServiceGatewayProviderFactory=b}(AvayaClientServices),function(a){"use strict";var b={ACCEPT_AUDIO:"ACCEPT_AUDIO",ACCEPT_VIDEO:"ACCEPT_VIDEO",ACTIVATE:"ACTIVATE",ADD_PARTICIPANT:"ADD_PARTICIPANT",ADD_VIDEO:"ADD_VIDEO",ANSWER:"ANSWER",DEACTIVATE:"DEACTIVATE",DENY_AUDIO:"DENY_AUDIO",DENY_VIDEO:"DENY_VIDEO",END:"END",HOLD:"HOLD",REMOVE_VIDEO:"REMOVE_VIDEO",REMOTE_VIDEO_REMOVED_ACK:"REMOTE_VIDEO_REMOVED_ACK",RINGING:"RINGING",TRANSFER:"TRANSFER",UNHOLD:"UNHOLD",UPDATE_VIDEO:"UPDATE_VIDEO"};a.Providers.CallServiceGateway.CallActionType=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b={TELEPHONY_SERVICE:"telephony",CSA_APPLICATION:"CSA",CREATE_MEDIA_RESPONSE:"createMediaResponse",PROCESS_MEDIA_RESPONSE:"processMediaResponse",BASIC_AUTHENTICATION:"Basic",BASIC_AUTHORIZATION_WITH_SPACE:"Basic ",HTTP_POST:"POST",HTTP_GET:"GET",JSON_DATA_TYPE:"json",CSA_RESOURCE_PATH:"/csa/resources/tenants/default",CSA_VERSION_1:"1",COMPUTER:"COMPUTER",CALLS:"CALLS",WEBRTC:"WEBRTC",SEND_ONLY:"SEND_ONLY",RECV_ONLY:"RECEIVE_ONLY",SEND_RECV:"SEND_RECEIVE",INACTIVE:"INACTIVE"};a.Providers.CallServiceGateway.Constants=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b={Users:"users",Clients:"clients",Calls:"calls",Services:"services",KeepAlive:"keepalive",PresenceSubscription:"presencesubscriptions",PresencePublish:"presencepublish",Websocket:"websocket"};a.Providers.CallServiceGateway.ResourceType=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){this.type=a.Providers.CallServiceGateway.CallMessageTypes.UNDEFINED}a.Providers.CallServiceGateway.AbstractCallMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){a.Providers.CallServiceGateway.AbstractCallMessage.call(this),this.type=a.Providers.CallServiceGateway.CallMessageTypes.CALLINFO,this.callId=b,this.isAudioMuted=!1,this.isCallerIdentityPrivate=!1,this.isCallIgnored=!1,this.isConference=!1,this.isIncoming=!1,this.isMissed=!1,this.isRemote=!1,this.isServiceAvailable=!1,this.state="IDLE",this.useAMSAsMediaGateway=!1,this.callHeldTimeStamp=0,this.participants=[]}b.prototype=Object.create(a.Providers.CallServiceGateway.AbstractCallMessage.prototype),a.Providers.CallServiceGateway.CallInfoMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b={UNDEFINED:"Undefined",SUBSCRIPTION:"Subscription",CALLINFO:"CallInfo",CLIENT_CALLS:"ClientCalls",USER_CLIENTS:"UserClients",PROCESS_MEDIA_REQUEST:"ProcessMediaRequest"};a.Providers.CallServiceGateway.CallMessageTypes=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){a.Providers.CallServiceGateway.AbstractCallMessage.call(this),this.type=a.Providers.CallServiceGateway.CallMessageTypes.CLIENT_CALLS,this._callInfoMsgs=[]}b.prototype=Object.create(a.Providers.CallServiceGateway.AbstractCallMessage.prototype),b.prototype.add=function(a){this._callInfoMsgs.push(a)},b.prototype.getCalls=function(){return _callInfoMsgs},a.Providers.CallServiceGateway.ClientCallsMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b,c){a.Providers.CallServiceGateway.AbstractCallMessage.call(this),this.type=a.Providers.CallServiceGateway.CallMessageTypes.PROCESS_MEDIA_REQUEST,this.callId=b,this.sdp=c}b.prototype=Object.create(a.Providers.CallServiceGateway.AbstractCallMessage.prototype),a.Providers.CallServiceGateway.ProcessMediaRequestMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){a.Providers.CallServiceGateway.AbstractCallMessage.call(this),this.type=a.Providers.CallServiceGateway.CallMessageTypes.CALLINFO,this.registrationId=b,this.href=void 0,this.mode="Computer"}b.prototype=Object.create(a.Providers.CallServiceGateway.AbstractCallMessage.prototype),a.Providers.CallServiceGateway.RegistrationInfoMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b){a.Providers.CallServiceGateway.AbstractCallMessage.call(this),this.type=a.Providers.CallServiceGateway.CallMessageTypes.SUBSCRIPTION,this.isSubscribed=!1,this.subscriptionId=b,this.application=void 0,this.service=void 0,this.resource=void 0}b.prototype=Object.create(a.Providers.CallServiceGateway.AbstractCallMessage.prototype),a.Providers.CallServiceGateway.SubscriptionCallMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a){this.clientId=a,this.version=void 0,this.endpointLabel=void 0,this.productName=void 0}a.Providers.CallServiceGateway.UserClient=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){a.Providers.CallServiceGateway.AbstractCallMessage.call(this),this.type=a.Providers.CallServiceGateway.CallMessageTypes.USER_CLIENTS,this._clients=[]}b.prototype=Object.create(a.Providers.CallServiceGateway.AbstractCallMessage.prototype),b.prototype.add=function(a){this._clients.push(a)},b.prototype.getClients=function(){return _clients},a.Providers.CallServiceGateway.UserClientsMessage=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b={CREATE_MEDIA_REQUEST:"csgwprovider.createMediaRequest",PROCESS_MEDIA_REQUEST:"csgwprovider.processMediaRequest",PROCESS_ANSWER_REQUEST:"csgwprovider.processAnswerRequest",CALL_ENDED:"csgwprovider.call.ended",CALL_ESTABLISHED:"csgwprovider.call.established",CALL_HELD:"csgwprovider.call.held",CALL_INCOMING:"csgwprovider.call.incoming",CALL_RINGING:"csgwprovider.call.ringing",CALL_UNHELD:"csgwprovider.call.unheld",SUBSCRIBED:"csgwprovider.subscribed",SUBSCRIPTION_FAILED:"csgwprovider.subscription.failed",NETWORK_PROVIDER_IS_UNAVAILABLE:"csgwprovider.network.unavailable"};a.Providers.CallServiceGateway.ObservableEvents=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(){}c.prototype={parse:function(c){var d=new a.Providers.CallServiceGateway.CallInfoMessage(c.callId);return d.isAudioMuted=c.audioMuted,d.isCallIgnored=c.callIgnored,d.isCallerIdentityPrivate=c.callerIdentityPrivate,d.isConference=c.conference,d.isIncoming=c.incoming,d.isMissed=c.missed,d.isRemote=c.remote,d.isServiceAvailable=c.serviceAvailable,d.callHeldTimeStamp=c.callHeldTimeStamp,d.useAMSAsMediaGateway=c.useAMSAsMediaGateway,d.participants=b.extend(!0,[],c.participants),d}},a.Providers.CallServiceGateway.CallInfoParser=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a){this._callInfoParser=a}b.prototype={parse:function(b){for(var c=new a.Providers.CallServiceGateway.ClientCallsMessage,d=0;d<b.calls.length;d++){var e=this._callInfoParser.parse(b.calls[d]);c.add(e)}return c}},a.Providers.CallServiceGateway.ClientCallsParser=b}(AvayaClientServices),function(a,b){"use strict";function c(a){this._provider=a}c.prototype={parse:function(b){if(b.service===a.Providers.CallServiceGateway.Constants.TELEPHONY_SERVICE&&b.application===a.Providers.CallServiceGateway.Constants.CSA_APPLICATION&&b.resource===this._provider._resourceHrefs[a.Providers.CallServiceGateway.ResourceType.Calls]&&b.contents){var c=b.contents,d=a.Base.Utils.isDefined(c.messageData)?JSON.parse(c.messageData):void 0;c.messageType===a.Providers.CallServiceGateway.NotificationType.CallFailure?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_FAILURE,[c.callId,c.protocolErrorCode,c.failure,c.failureReason]):c.messageType===a.Providers.CallServiceGateway.NotificationType.IncomingCall?(this._provider.startRinging(c.callId),this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_INCOMING,[c.callId,d.actionDetails.participants[0].remoteAddress,d.actionDetails.participants[0].remoteDisplayName,d.actionDetails.sdpType,d.actionDetails.sdp,d.actionDetails.audioChannel,d.actionDetails.videoChannels])):c.messageType===a.Providers.CallServiceGateway.NotificationType.CallRinging?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_RINGING,[c.callId,d.actionDetails.participants[0].remoteAddress,d.actionDetails.participants[0].remoteDisplayName,d.actionDetails.audioChannel,d.actionDetails.videoChannels]):c.messageType===a.Providers.CallServiceGateway.NotificationType.CallEstablished?d.actionDetails.conferenceData?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_ESTABLISHED,[c.callId,d.actionDetails.participants[0].remoteAddress,d.actionDetails.participants[0].remoteDisplayName,!0,d.actionDetails.conferenceData.uccpUrl,d.actionDetails.conferenceData.webCollaborationUrl]):this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_ESTABLISHED,[c.callId,d.actionDetails.participants[0].remoteAddress,d.actionDetails.participants[0].remoteDisplayName,!1]):c.messageType===a.Providers.CallServiceGateway.NotificationType.CallHeld?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_HELD,[c.callId]):c.messageType===a.Providers.CallServiceGateway.NotificationType.CallUnheld?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_UNHELD,[c.callId]):c.messageType===a.Providers.CallServiceGateway.NotificationType.CallEnded?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CALL_ENDED,[c.callId]):c.messageType===a.Providers.CallServiceGateway.NotificationType.CreateMediaRequest?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.CREATE_MEDIA_REQUEST,[c.callId]):c.messageType===a.Providers.CallServiceGateway.NotificationType.ProcessMediaRequest?this._provider.trigger(a.Providers.CallServiceGateway.ObservableEvents.PROCESS_MEDIA_REQUEST,[c.callId,d.action,d.actionDetails.sdpType,d.actionDetails.sdp,d.actionDetails.audioChannel,d.actionDetails.videoChannels]):a.Base.Logger.info("Ignoring telephony notification: [Id:"+c.callId+",Type:"+c.messageType+"]")}}},a.Providers.CallServiceGateway.NotificationParser=c}(AvayaClientServices,jQuery),function(a){"use strict";var b={CreateMediaRequest:"createMediaRequest",ProcessMediaRequest:"processMediaRequest",ProcessMediaResponse:"processMediaResponse",IncomingCall:"callIncoming",CallRinging:"callRinging",CallEstablished:"callEstablished",CallEnded:"callEnded",CallFailure:"callFailure",CallHeld:"onCallRemoteHeld",CallUnheld:"onCallRemoteUnheld"};a.Providers.CallServiceGateway.NotificationType=b}(AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.CallServiceGateway.SubscriptionCallMessage(b.requestId);return b&&b.results&&b.results.successful?(c.isSubscribed=!0,c.service=b.results.successful[0].service,c.application=b.results.successful[0].application,c.resource=b.results.successful[0].resource):c.isSubscribed=!1,c}},a.Providers.CallServiceGateway.SubscriptionParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){for(var c=new a.Providers.CallServiceGateway.UserClientsMessage,d=0;d<b.clients.length;d++){var e=this.parseClient(b.clients[d]);c.add(e)}return c},parseClient:function(b){var c=new a.Providers.CallServiceGateway.UserClient(b.clientId);return c.version=b.version,c.endpointLabel=b.endpointLabel,c.productName=b.productName,c}},a.Providers.CallServiceGateway.UserClientsParser=b}(AvayaClientServices),function(a){"use strict";function b(a){this._serverManager=a,this._queue=[],this._intervals=[],this._run=!1,this._minimalInterval=100,this._lastIntervalsToConsiderCount=10,this._maxBytesPerSecond=38400,this._bytesSentLastSecond=0}a.Providers.ContentSharing.BandwidthManager=b,a.Providers.ContentSharing.BandwidthManager.prototype={start:function(a){this._interval=a.captureInterval,this._maxBytesPerSecond=a.maxBytesPerSecond;for(var b=0;b<this._lastIntervalsToConsiderCount;b++)this._intervals.push(a.captureInterval);this._serverManager.onBandwidthAvailable=function(){this._process()}.bind(this),this._serverManager.start(a)},addToQueue:function(a){if(a._keyFrame){this._lostSize=0,this._queue.forEach(function(a){this._lostSize+=a.byteLength}.bind(this));var b=(this._bytesSentLastSecond+this._lostSize)/this._maxBytesPerSecond;this._intervals.push(Math.floor(this._interval*b)),this._determineInterval(),this._queue=[],this._queue.push(a)}else this._queue.push(a);this._run||(this._run=!0,this._process())},onIntervalChanged:function(a){},_determineInterval:function(){for(var a=0,b=this._intervals.length-this._lastIntervalsToConsiderCount;b<this._intervals.length;b++)a+=this._intervals[b];var c=a/this._lastIntervalsToConsiderCount;c<this._minimalInterval&&(c=this._minimalInterval),this._interval=Math.floor(c),this.onIntervalChanged(this._interval)},_process:function(){var a=this._queue.shift();return a?void(this._serverManager.canSend(a.byteLength)?(this._send(a),this._process()):this._queue.unshift(a)):void(this._run=!1)},_send:function(a){this._serverManager.send(a),this._bytesSentLastSecond+=a.getByteLength(),setTimeout(function(){this._bytesSentLastSecond-=a.getByteLength()}.bind(this),1e3)}}}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={createStartTag:function(b,c,d){var e=new a.Providers.WCS.ScreenSharingStartTag;return e.isKeyFrame=b,e.width=c,e.height=d,e.creationTime=Date.now(),e},createBlockTag:function(b){var c=new a.Providers.WCS.ScreenSharingBlockTag;c.x=b._x,c.y=b._y,c.width=b._width,c.height=b._height,c.imageType=b._type||a.Providers.WCS.ScreenSharingImageTypes.JPEG;var d=this._getImageData(b._imgData,b._type);return c.length=d.length,c.data=d,c},createEndTag:function(){return new a.Providers.WCS.ScreenSharingEndTag},_getImageData:function(b,c){var d=document.createElement("canvas");d.width=b.width,d.height=b.height;var e=d.getContext("2d");e.putImageData(b,0,0);var f=c===a.Providers.WCS.ScreenSharingImageTypes.JPEG?"jpeg":"png",g=d.toDataURL("image/"+f,.3);return this._getImageBuffer(g)},_getImageBuffer:function(a){for(var b=a.split(","),c=atob(b[1]),d=c.length,e=new Uint8Array(d);d--;)e[d]=c.charCodeAt(d);return e}},a.Providers.ContentSharing.ContentSharingTagBuilder=b}(AvayaClientServices),function(a,b,c){"use strict";function d(b){this._pingTimer=void 0,this._pingTime=0,this._pongTime=0,this._pingInterval=500,this._requestBuilder=b,this._installedExtensionType=a.Providers.ContentSharing.InstalledExtensionType.INVALID,this._onMediaAvailableCallbacks=c.Callbacks(),this._onCapabilityChangeCallbacks=c.Callbacks(),this._onMediaCancelledCallbacks=c.Callbacks()}var e={SCREEN_SHARING:"SCREEN_SHARING",PONG:"PONG",START:"START",CHROME:"Chrome",FIREFOX:"Firefox",MESSAGE:"message",CANCELED:"CANCELED"},f=2e3;a.Providers.ContentSharing.ExtensionNetworkProvider=d,a.Providers.ContentSharing.ExtensionNetworkProvider.prototype={start:function(){this._startWindowEventListener(),this._startPingTask()},send:function(a){b.postMessage(a,"*")},stop:function(){this._stopPingTimer(),this._removeWindowEventListener()},addOnMediaAvailableCallback:function(a){this._onMediaAvailableCallbacks.add(a)},removeOnMediaAvailableCallback:function(a){this._onMediaAvailableCallbacks.remove(a)},addOnMediaCancelledCallback:function(a){this._onMediaCancelledCallbacks.add(a)},removeOnMediaCancelledCallback:function(a){this._onMediaCancelledCallbacks.remove(a)},addOnCapabilityChange:function(a){this._onCapabilityChangeCallbacks.add(a)},removeOnCapabilityChange:function(a){this._onCapabilityChangeCallbacks.remove(a)},getInstalledExtensionType:function(){return this._installedExtensionType},_stopPingTimer:function(){this._pingTimer&&b.clearTimeout(this._pingTimer)},_startWindowEventListener:function(){b.addEventListener(e.MESSAGE,function(c){if(c.source===b&&c.data.type)if(c.data.type===e.START)this._onMediaAvailableCallbacks.fire(c);else if(c.data.type===e.CANCELED)this._onMediaCancelledCallbacks.fire(c);else if(c.data.type===e.PONG&&c.data.app===e.SCREEN_SHARING){this._pongTime=Date.now();var d=this._installedExtensionType;c.data.extension===e.CHROME?this._installedExtensionType=a.Providers.ContentSharing.InstalledExtensionType.CHROME:c.data.extension===e.FIREFOX&&(this._installedExtensionType=a.Providers.ContentSharing.InstalledExtensionType.FIREFOX),d!==a.Providers.ContentSharing.InstalledExtensionType.CHROME&&d!==a.Providers.ContentSharing.InstalledExtensionType.FIREFOX&&(this._onCapabilityChangeCallbacks.fire(this._installedExtensionType,!0),this._pingInterval=f)}}.bind(this),!1),this._pingTime=Date.now(),this.send(this._requestBuilder.createPingRequest())},_removeWindowEventListener:function(){b.removeEventListener(e.MESSAGE,function(){console.debug("Removed message event listener")},!1)},_startPingTask:function(){this._pingTimer=b.setTimeout(function(){if(0===this._pongTime&&this._installedExtensionType===a.Providers.ContentSharing.InstalledExtensionType.INVALID)this._installedExtensionType=a.Providers.ContentSharing.InstalledExtensionType.NOT_INSTALLED,this._onCapabilityChangeCallbacks.fire(this._installedExtensionType,!1),this._pingInterval=this._pingInterval>=f?f:Math.max(f,2*this._pingInterval);else if(this._pingTime-this._pongTime>this._pingInterval&&(this._installedExtensionType===a.Providers.ContentSharing.InstalledExtensionType.CHROME||this._installedExtensionType===a.Providers.ContentSharing.InstalledExtensionType.FIREFOX)){var b=this._installedExtensionType;this._installedExtensionType=a.Providers.ContentSharing.InstalledExtensionType.NOT_INSTALLED,this._onCapabilityChangeCallbacks.fire(b,!1)}this._pingTime=Date.now(),this.send(this._requestBuilder.createPingRequest()),this._startPingTask()}.bind(this),this._pingInterval)}}}(AvayaClientServices,window,jQuery),function(a){"use strict";function b(){}var c={SCREEN_SHARING_PAGE:"SCREEN_SHARING_PAGE"},d={STOP:"STOP",START:"START",PING:"PING"};b.prototype={createStartSharingRequest:function(a){var b={type:c.SCREEN_SHARING_PAGE,text:d.START,capture:a};return b},createStopSharingRequest:function(a){var b={type:c.SCREEN_SHARING_PAGE,text:d.STOP,mediaSourceId:a};return b},createPingRequest:function(){var a={type:c.SCREEN_SHARING_PAGE,text:d.PING};return a}},a.Providers.ContentSharing.ExtensionRequestBuilder=b}(AvayaClientServices),function(a){"use strict";function b(a){this._blocks=[],this.byteLength=0,this._keyFrame=a}b.prototype={addBlock:function(a){this._blocks.push(a),this.byteLength+=a.byteLength},getBlocks:function(){return this._blocks},getByteLength:function(){return this.byteLength}},a.Providers.ContentSharing.FrameBlocks=b}(AvayaClientServices),function(a){"use strict";var b={CHROME:"Chrome",FIREFOX:"Firefox",NOT_INSTALLED:"Not Installed",INVALID:"Invalid"};a.Providers.ContentSharing.InstalledExtensionType=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h,i){this._x=b,this._y=c,this._row=d,this._column=e,this._height=g,this._width=f,this._imgData=h,this._previousBase64=void 0,this._blocks=i||[],this._type=a.Providers.WCS.ScreenSharingImageTypes.JPEG}a.Providers.ContentSharing.ScreenBlock=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Base.Observable.call(this),this._config=void 0,this._video=void 0,this._videoTrack=void 0,this._screenScraper=b,this._capturingTimeout=void 0,this._captureKeyFrameTimeout=void 0,this._isCapturingKeyFrame=!1,this._width=-1,this._height=-1}b.prototype=Object.create(a.Base.Observable.prototype),a.Providers.ContentSharing.ScreenCapturer=b,b.prototype.start=function(b,c){var d=$.Deferred();return this._manuallyStopped=!1,this._config=c,this._videoTrack=b.getVideoTracks()[0],this._videoTrack.onended=function(){this._manuallyStopped||this.trigger(a.Providers.ContentSharing.ScreenCapturerEvents.WINDOW_CLOSED,[])}.bind(this),this._video=window.document.createElement("video"),this._video.setAttribute("hidden","true"),void 0!==this._video.mozSrcObject?this._video.mozSrcObject=b:this._video.src=window.URL&&window.URL.createObjectURL(b)||b,this._video.play(),this._width=this._video.videoWidth,this._height=this._video.videoHeight,this._captureKeyFrame(),this._capture(),d.resolve(),d.promise()},b.prototype.stop=function(){var a=$.Deferred();return this._video&&this._video.srcObject&&this._video.srcObject.stop(),this._video=void 0,this._videoTrack&&(this._manuallyStopped=!0,this._videoTrack.stop(),this._videoTrack=void 0),clearTimeout(this._capturingTimeout),clearTimeout(this._captureKeyFrameTimeout),a.resolve(),a.promise()},b.prototype.pause=function(){var a=$.Deferred(),b=!0;return this._video.paused||(b=!1,this._video.pause()),clearTimeout(this._capturingTimeout),clearTimeout(this._captureKeyFrameTimeout),a.resolve(b),a.promise()},b.prototype.getWidth=function(){return this._video.videoWidth},b.prototype.getHeight=function(){return this._video.videoHeight},b.prototype.resume=function(){var a=$.Deferred(),b=!1;return this._video.paused&&(b=!0,this._video.play(),this._captureKeyFrame(),this._capture()),a.resolve(b),a.promise()},b.prototype._capture=function(){if(this._videoTrack&&"ended"!==this._videoTrack.readyState&&!this._video.paused){this._checkSize();var b=this._screenScraper.getChangedBlocks(this._video,this._config.blockSize,this._config.losslessColorLimit);b.length>0&&(1===b.length&&b[0]._width===this.getWidth()&&b[0]._height===this.getHeight()?this.trigger(a.Providers.ContentSharing.ScreenCapturerEvents.KEY_FRAME,[b[0]]):this.trigger(a.Providers.ContentSharing.ScreenCapturerEvents.BLOCKS_CHANGED,[b])),this._capturingTimeout=setTimeout(function(){this._capturingTimeout=void 0,this._capture()}.bind(this),this._config.captureInterval)}},b.prototype._captureKeyFrame=function(){this._captureKeyFrameTimeout=setTimeout(function(){this._isCapturingKeyFrame=!0,this._captureKeyFrameTimeout=void 0,this._captureKeyFrame()}.bind(this),this._config.keyFrameInterval)},b.prototype._checkSize=function(){(this._isCapturingKeyFrame||this._video.videoWidth!==this._width||this._video.videoHeight!==this._height)&&(this._width=this._video.videoWidth,this._height=this._video.videoHeight,this._screenScraper._previousBlocks=[],this._screenScraper._captureKeyFrame=!0,this._isCapturingKeyFrame=!1)}}(AvayaClientServices),function(a){"use strict";function b(){this.captureInterval=100,this.keyFrameInterval=3e4,this.losslessColorLimit=128,this.blockSize=64,this.maxBytesPerSecond=38400}a.Providers.ContentSharing.ScreenCapturerConfig=b}(AvayaClientServices),function(a){"use strict";var b={BLOCKS_CHANGED:"blocks_changed",KEY_FRAME:"key_frame",WINDOW_CLOSED:"window_changed"};a.Providers.ContentSharing.ScreenCapturerEvents=b}(AvayaClientServices),function(a){"use strict";function b(){this._previousBlocks=[],this._blockWidth=64,this._blockHeight=64,this._previousBase64=void 0,this._captureKeyFrame=!1}a.Providers.ContentSharing.ScreenScraper=b,a.Providers.ContentSharing.ScreenScraper.prototype={getChangedBlocks:function(a,b,c){if(!a.videoWidth)return[];this._blockWidth=b,this._blockHeight=b;var d=window.document.createElement("canvas");d.width=a.videoWidth,d.height=a.videoHeight;var e=d.getContext("2d");e.drawImage(a,0,0);var f=this._determineChangedBlocks(a,e);return f.length>0&&(f=this._mergeBlocks(f),f=this._determineTypes(f,c)),f},_determineTypes:function(b,c){return b.forEach(function(b){var d=this._getColorsCount(b._imgData);d>c?b._type=a.Providers.WCS.ScreenSharingImageTypes.JPEG:b._type=a.Providers.WCS.ScreenSharingImageTypes.PNG}.bind(this)),b},_mergeBlocks:function(a){return a=this._sortByColumn(a),a=this._mergeByColumn(a),a=this._sortByRow(a),a=this._mergeByRow(a),a.map(this._createMergedBlock)},_createMergedBlock:function(b){var c=document.createElement("canvas");c.width=b._width,c.height=b._height;var d=c.getContext("2d");b._blocks.forEach(function(a){d.putImageData(a._imgData,a._x-b._x,a._y-b._y)});var e=d.getImageData(0,0,b._width,b._height);return new a.Providers.ContentSharing.ScreenBlock(b._x,b._y,b._row,b._column,b._width,b._height,e)},_determineChangedBlocks:function(b,c){var d=[],e=[],f=Math.ceil(b.videoHeight/this._blockHeight);if(!this._imageChanged(b,c))return d;for(var g=0;g<b.videoWidth;g+=this._blockWidth)for(var h=g/this._blockWidth,i=g+this._blockWidth>b.videoWidth?b.videoWidth-g:this._blockWidth,j=0;j<b.videoHeight;j+=this._blockHeight){var k=j+this._blockHeight>b.videoHeight?b.videoHeight-j:this._blockHeight,l=c.getImageData(g,j,i,k),m=new a.Providers.ContentSharing.ScreenBlock(g,j,j/this._blockHeight,h,i,k,l);if(m._previousBase64=this._getBase64Image(m._imgData),this._previousBlocks.length>0&&!this._captureKeyFrame){var n=m._column*f+m._row,o=this._previousBlocks[n];o&&o._previousBase64===m._previousBase64||e.push(m)}else e.push(m);d.push(m)}return this._captureKeyFrame&&(this._captureKeyFrame=!1),this._previousBlocks=d,e},_imageChanged:function(a,b){var c=!0,d=b.getImageData(0,0,a.videoWidth,a.videoHeight),e=this._getBase64Image(d);return e!==this._previousBase64||this._captureKeyFrame?this._previousBase64=e:c=!1,c},_getColorsCount:function(a){var b,c={},d=new Uint32Array(a.data.buffer),e=0,f=d.length;for(b=0;f>b;b++){var g=""+(16777215&d[b]);c[g]||(c[g]=0,e++),c[g]++}return e},_getBase64Image:function(a){var b=document.createElement("canvas");b.width=a.width,b.height=a.height;var c=b.getContext("2d");c.putImageData(a,0,0);var d=b.toDataURL("image/png");return d.replace(/^data:image\/(png|jpg);base64,/,"")},_mergeByColumn:function(a){return this._merge(a,this._compareBlocksByColumn,function(a,b){a._height+=b._height})},_mergeByRow:function(a){return this._merge(a,this._compareBlocksByRow,function(a,b){a._width+=b._width})},_merge:function(a,b,c){for(var d=[],e=this._copyBlock(a[0]),f=1;f<a.length;f++)b(e,a[f])?(a[f]._blocks.length>0?this._copyBlocks(a,f,e):e._blocks.push(a[f]),c(e,a[f])):(d.push(e),e=this._copyBlock(a[f]));return d.push(e),d},_copyBlocks:function(a,b,c){a[b]._blocks.forEach(function(a){c._blocks.push(a)})},_copyBlock:function(b){var c;return 0===b._blocks.length?(c=new a.Providers.ContentSharing.ScreenBlock(b._x,b._y,b._row,b._column,b._width,b._height),c._blocks.push(b)):c=b,c},_sortByColumn:function(a){return a.sort(function(a,b){return a._column===b._column?a._row-b._row:a._column-b._column})},_sortByRow:function(a){return a.sort(function(a,b){return a._row===b._row?a._column-b._column:a._row-b._row})},_compareBlocksByColumn:function(a,b){return a._x===b._x&&a._width===b._width&&(a._y+a._height===b._y||b._y+b._height===a._y)},_compareBlocksByRow:function(a,b){return a._y===b._y&&a._height===b._height&&(a._x+a._width===b._x||b._x+b._width===a._x)}}}(AvayaClientServices),function(a){"use strict";function b(b){this._collaborationProvider=b,this._extensionNetworkProvider=new a.Providers.ContentSharing.ExtensionNetworkProvider(new a.Providers.ContentSharing.ExtensionRequestBuilder),this._screenCapturer=new a.Providers.ContentSharing.ScreenCapturer(new a.Providers.ContentSharing.ScreenScraper),this._extensionRequestBuilder=new a.Providers.ContentSharing.ExtensionRequestBuilder,this._contentSharingTagBuilder=new a.Providers.ContentSharing.ContentSharingTagBuilder;var c=new a.Providers.ContentSharing.ServerManager(b.sendMessage.bind(b));this._bandwidthManager=new a.Providers.ContentSharing.BandwidthManager(c),this._screenSharingTagEncoder=new a.Providers.WCS.ScreenSharingTagEncoder}b.prototype={getScreenSharingProvider:function(){return navigator.webkitGetUserMedia&&window.chrome?new a.Providers.ContentSharing.ChromeScreenSharingProvider(this._collaborationProvider,this._extensionNetworkProvider,this._screenCapturer,this._extensionRequestBuilder,this._contentSharingTagBuilder,this._bandwidthManager,this._screenSharingTagEncoder):new a.Providers.ContentSharing.FirefoxScreenSharingProvider(this._collaborationProvider,this._extensionNetworkProvider,this._screenCapturer,this._extensionRequestBuilder,this._contentSharingTagBuilder,this._bandwidthManager,this._screenSharingTagEncoder);
}},a.Providers.ContentSharing.ScreenSharingProviderFactory=b}(AvayaClientServices),function(a){"use strict";function b(a){this._sentData=0,this._maxBytesPerSecond=38400,this._sendingFunction=a}b.prototype={start:function(a){this._maxBytesPerSecond=a.maxBytesPerSecond},send:function(a){this._sentData+=a.getByteLength();var b=a.getByteLength()/this._maxBytesPerSecond*1e3;a.getBlocks().forEach(function(a){this._sendingFunction(a)}.bind(this)),setTimeout(function(){this._sentData-=a.getByteLength(),this.onBandwidthAvailable()}.bind(this),b)},canSend:function(a){return 0===this._sentData||a+this._sentData<=this._maxBytesPerSecond},onBandwidthAvailable:function(){}},a.Providers.ContentSharing.ServerManager=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Base.Observable.call(this),this._networkProvider=b}b.prototype=Object.create(a.Base.Observable.prototype),b.prototype.init=function(a){this._networkProvider.init(a)},b.prototype.login=function(a){return this._networkProvider.send({loginId:a.username,password:a.password},{sendType:"GET"}).then(function(a){return this.trigger("focus.login.success",[a]),a}.bind(this),function(a){this.trigger("focus.login.error",[a])}.bind(this))},a.Providers.Focus.FocusProvider=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){a.Base.Observable.call(this)}b.prototype=Object.create(a.Base.Observable.prototype),b.prototype.start=function(){},b.prototype.stop=function(){},a.Providers.Interfaces.AbstractProvider=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){this.type=b,this.id=c,this.enabled=d!==a.Providers.Interfaces.StreamDirection.INACTIVE,this.direction=d}a.Providers.Interfaces.AbstractStream=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b,c){a.Providers.Interfaces.AbstractStream.call(this,"audio",b,c)}b.prototype=Object.create(a.Providers.Interfaces.AbstractStream.prototype),a.Providers.Interfaces.AudioStream=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.accept=function(){},b.prototype.ignore=function(){},b.prototype.deny=function(){},b.prototype.hold=function(){},b.prototype.unhold=function(){},b.prototype.sendDigits=function(){},b.prototype.getRemoteAddress=function(){},b.prototype.getAccessCode=function(){},b.prototype.getRemoteName=function(){},b.prototype.getSessionDetails=function(){},b.prototype.isConference=function(){},b.prototype.isIncoming=function(){},b.prototype.canAutoAnswer=function(){},b.prototype.isRemote=function(){},b.prototype.isServiceAvailable=function(){},b.prototype.isCallerIdentityPrivate=function(){},b.prototype.getAlertType=function(){},b.prototype.setRemoteAddress=function(a){},b.prototype.setSubject=function(a){},b.prototype.getSubject=function(){},b.prototype.getState=function(){},b.prototype.join=function(){},b.prototype.addCall=function(a){},b.prototype.addParticipant=function(a){},b.prototype.isAudioMuted=function(){},b.prototype.muteAudio=function(a,b){},a.Providers.Interfaces.CallProvider=b}(AvayaClientServices),function(a){"use strict";var b={CALL_STARTED:"callStarted",CALL_RINGING:"callRinging",CALL_ESTABLISHED:"callEstablished",REMOTE_STREAM_ADDED:"remoteStreamAdded",LOCAL_STREAM_ADDED:"localStreamAdded",CALL_ENDED:"callEnded",CONFERENCE_ESCALATION:"conferenceEscalation",INCOMING_CALL:"incomingCall"};a.Providers.Interfaces.CallProviderCallbackIds=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";var b={INCOMING_CALL:"incomingCall"};a.Providers.Interfaces.CallServiceCallbackIds=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.sendSDP=function(a,b,c,d){},a.Providers.Interfaces.CallSignalingProvider=b}(AvayaClientServices),function(a){"use strict";a.Providers.Interfaces.StreamDirection={RECVONLY:"recvonly",SENDONLY:"sendonly",SENDRECV:"sendrecv",INACTIVE:"inactive"}}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(b,c){a.Providers.Interfaces.AbstractStream.call(this,"video",b,c)}b.prototype=Object.create(a.Providers.Interfaces.AbstractStream.prototype),a.Providers.Interfaces.VideoStream=b}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(){a.Base.Observable.call(this)}b.prototype=Object.create(a.Base.Observable.prototype),b.prototype.start=function(){},b.prototype.stop=function(){},b.prototype.startWhiteboard=function(a){},b.prototype.endWhiteboard=function(a){},b.prototype.addWhiteboardSurface=function(){},b.prototype.removeWhiteboardSurface=function(a){},b.prototype.observeCollaboration=function(){},b.prototype.addCircle=function(){},b.prototype.addShape=function(){},b.prototype.startDrawShape=function(){},b.prototype.liveDrawShape=function(){},b.prototype.endDrawShape=function(){},b.prototype.addText=function(){},b.prototype.getReceivingBitrate=function(){},b.prototype.sendStartScreenSharing=function(){},b.prototype.sendMessage=function(a){},b.prototype.sendLiveEvent=function(a){},b.prototype.removeShape=function(a,b){},b.prototype.clearContent=function(a){},b.prototype.getParticipants=function(){},b.prototype.isOpened=function(){},b.prototype.isFeatureAvailable=function(a){},a.Providers.Interfaces.CollaborationProvider=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.sendHandshake=function(a){},b.prototype.subscribeMeetingInfo=function(a){},b.prototype.subscribeRoster=function(a){},b.prototype.subscribeActiveTalker=function(a){},b.prototype.subscribePermissions=function(a){},b.prototype.subscribeSlider=function(a){},b.prototype.subscribeMeetingNote=function(a){},b.prototype.subscribeWebCollab=function(a){},b.prototype.subscribeAvailableLayouts=function(a){},b.prototype.getCurrentVideoLayout=function(a){},b.prototype.setAsLecturer=function(a,b){},b.prototype.disconnectParticipant=function(a,b){},b.prototype.terminateConference=function(a){},b.prototype.requestToBecomeModerator=function(a,b){},b.prototype.unsetAsLecturer=function(a){},b.prototype.muteUnmute=function(a,b,c,d){},b.prototype.sendChatMessage=function(a,b,c){},b.prototype.muteUnmuteAll=function(a,b){},b.prototype.setContinuation=function(a,b){},b.prototype.raiseLowerHand=function(a,b){},b.prototype.moderatorLowerHand=function(a,b,c){},b.prototype.sendModeratorAdmissionRequest=function(a){},b.prototype.sendAdmissionRequest=function(a,b){},a.Providers.Interfaces.ConferenceDataProvider=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.start=function(a){},b.prototype.observeConference=function(a){},b.prototype.disconnectParticipant=function(a){},b.prototype.setAsLecturer=function(a){},b.prototype.setLocked=function(a){},b.prototype.setVideoLayoutTextOverlay=function(a){},b.prototype.setVideoLayoutSelfSee=function(a){},b.prototype.setVideoLayout=function(a){},b.prototype.terminateConference=function(){},b.prototype.requestToBecomeModerator=function(a){},b.prototype.startRecording=function(a,b,c){},b.prototype.stopRecording=function(a){},b.prototype.pauseRecording=function(a){},b.prototype.resumeRecording=function(a){},b.prototype.unsetAsLecturer=function(){},b.prototype.muteUnmute=function(a,b,c){},b.prototype.sendChatMessage=function(a,b){},b.prototype.muteUnmuteAll=function(a){},b.prototype.setContinuation=function(a){},b.prototype.raiseLowerHand=function(a){},b.prototype.moderatorLowerHand=function(a,b){},a.Providers.Interfaces.ConferenceProvider=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.start=function(a){},b.prototype.stop=function(){},b.prototype.getProviderType=function(){},b.prototype.createContactForAdd=function(){},b.prototype.addContact=function(a){},b.prototype.updateContact=function(a){},b.prototype.deleteContact=function(a){},b.prototype.retrieveAllContacts=function(){},b.prototype.getContactsChanges=function(){},b.prototype.getAddContactCapability=function(){},b.prototype.getUpdateContactCapability=function(){},b.prototype.getDeleteContactCapability=function(){},a.Providers.Interfaces.ContactsProvider=b}(AvayaClientServices),function(a,b){"use strict";var c={CONTACT_ADDED:"contact_added",CONTACT_UPDATED:"contact_updated",CONTACT_DELETED:"contact_deleted",CAPABILITIES_CHANGED:"capabilities_changed"};a.Providers.Interfaces.ContactsProviderCallbackIds=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.start=function(a){},b.prototype.stop=function(){},b.prototype.getProviderType=function(){},b.prototype.startDirectorySearch=function(a){},b.prototype.stopDirectorySearch=function(a){},b.prototype.getSearchContactCapability=function(){},a.Providers.Interfaces.DirectorySearchProvider=b}(AvayaClientServices),function(a,b){"use strict";var c={CAPABILITIES_CHANGED:"capabilities_changed"};a.Providers.Interfaces.DirectorySearchProviderCallbackIds=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){a.Providers.Interfaces.AbstractProvider.call(this)}b.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),b.prototype.start=function(a){},b.prototype.getRoutableDomains=function(){},b.prototype.getConversations=function(a){},b.prototype.getConversationIds=function(a){},b.prototype.getConversationsByQuery=function(a){},b.prototype.discoverResources=function(){},b.prototype.getResources=function(){},b.prototype.validateUsers=function(a){},b.prototype.getParticipants=function(a,b){},b.prototype.sendMessage=function(a,b){},b.prototype.sendMessageWithAttachments=function(a,b,c){},b.prototype.leaveConversation=function(a){},b.prototype.markAllAsRead=function(a){},b.prototype.changeSubject=function(a){},b.prototype.markAsReadBatch=function(a){},b.prototype.getMessages=function(a,b,c,d){},b.prototype.reportTyping=function(){},b.prototype.observeConversations=function(){},b.prototype.callEscalationEvent=function(a,b){},b.prototype.setLastAccessTime=function(a,b){},b.prototype.addParticipantsToConversation=function(a,b){},b.prototype.close=function(a){},a.Providers.Interfaces.MessagingProvider=b}(AvayaClientServices),function(a){"use strict";function b(a){this._sdpParser=a}b.prototype={getConnection:function(a){var b=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,c=null;a&&(c={iceServers:a});var d={optional:[{DtlsSrtpKeyAgreement:!1}]};return new b(c,d)},getLocalSDP:function(b){var c=$.Deferred();return b.onicecandidate=function(d){d.candidate?a.Base.Logger.debug(d.candidate.sdpMid,d.candidate.sdpMLineIndex,d.candidate.candidate):c.resolve(b.localDescription.sdp)},b.createOffer(function(a){a.sdp=this._sdpParser.process(a.sdp),b.setLocalDescription(a,function(){},function(a){c.reject(a)})}.bind(this),function(a){c.reject(a)}),c.promise()},createAnswer:function(a){var b=$.Deferred();return a.createAnswer(function(c){c.sdp=this._sdpParser.process(c.sdp),a.setLocalDescription(c,function(){b.resolve(a.localDescription.sdp)},function(a){b.reject(a)})}.bind(this),function(a){b.reject(a)}),b.promise()},setRemoteDescription:function(a,b,c){var d=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription||window.msRTCSessionDescription,e=$.Deferred(),f=new d({type:b,sdp:c});return a.setRemoteDescription(f,function(){e.resolve()},function(a){e.reject(a)}),e.promise()},stopAllStreams:function(a){a.getLocalStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.stop()}),a.getVideoTracks().forEach(function(a){a.stop()})}),a.getRemoteStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.stop()}),a.getVideoTracks().forEach(function(a){a.stop()})})}},a.Providers.RTC.RTCPeerConnectionProvider=b}(AvayaClientServices),function(a){"use strict";function b(){this._items=[],this._sdpParserValuesForDelete=["extmap:","group:BUNDLE","ice-options:","mid:","msid-semantic:","rtcp-mux","rtcp:9 IN IP4 0.0.0.0"],this._sdpParserValuesForUpdate=[{oldValue:"maxptime:60",newValue:"maxptime:20"}]}b.prototype={process:function(a){return this._parse(a),this._validate(),a=this._join()},_join:function(){for(var a=0;a<this._items.length;a++){var b=this._items[a];b.key&&(this._items[a]=b.key+"="+b.value)}return this._items.join("\n")},_parse:function(a){this._items=a.split("\n");for(var b=0;b<this._items.length;b++){var c=this._items[b];if(c){var d=c.split("="),e={};e.key=d[0],d.shift(),e.value=d.join("="),this._items[b]=e}}},_validate:function(){this._deleteProcess(),this._updatedProcess()},_deleteProcess:function(){for(var b=0;b<this._sdpParserValuesForDelete.length;b++){for(var c=this._sdpParserValuesForDelete[b],d=!1,e=0;e<this._items.length;){var f=this._items[e];f.key&&-1!==f.value.indexOf(c)?(this._items.splice(e,1),d=!0,a.Base.Logger.debug("deleted",c)):e++}d||a.Base.Logger.warn("not deleted",c)}},_updatedProcess:function(){for(var b=0;b<this._sdpParserValuesForUpdate.length;b++){for(var c=this._sdpParserValuesForUpdate[b],d=!1,e=0;e<this._items.length;e++){var f=this._items[e];if(f.key&&-1!==f.value.indexOf(c.oldValue)){var g=f.value;f.value=f.value.replace(c.oldValue,c.newValue),d=!0,a.Base.Logger.debug("updated",g+" -> "+f.value)}}d||a.Base.Logger.warn("not updated",c)}}},a.Providers.RTC.SDPParser=b}(AvayaClientServices),function(a,b){"use strict";function c(){}c.prototype={getStream:function(a){var c=$.Deferred(),d=navigator.getUserMedia?"getUserMedia":navigator.mozGetUserMedia?"mozGetUserMedia":navigator.webkitGetUserMedia?"webkitGetUserMedia":"getUserMedia";return b.navigator[d]?b.navigator[d](a,function(a){c.resolve(a)},function(a){c.reject(a)}):c.reject({message:"Browser do not support getUserMedia function."}),c.promise()}},a.Providers.RTC.UserMediaProvider=c}(AvayaClientServices,window),function(a){"use strict";function b(b,c,d,e,f){a.Providers.Interfaces.CallProvider.call(this),this._signalingProvider=b,this._userMediaProvider=c,this._rtcPeerConnectionProvider=d,this._conferenceProvider=e,this._rtcPeerConnection=void 0,this._transaction={id:1},this._isClosed=!0,this._config=f}b.prototype=Object.create(a.Providers.Interfaces.CallProvider.prototype),b.prototype.startCall=function(b){return this._signalingProvider.start(this._config).then(function(){this._signalingProvider.on(a.Providers.WSP.WSPMessageTypes.SERVER_SDP_REQUEST,this._handleServerSDPRequest.bind(this)),this._signalingProvider.on(a.Providers.WSP.WSPMessageTypes.DISCONNECT_REQUEST,function(a){this._handleDisconnectRequest(b,a)}.bind(this)),this.trigger(a.Providers.Interfaces.CallProviderCallbackIds.CONFERENCE_ESCALATION,[b])}.bind(this)).then(function(){return this._rtcPeerConnection=this._rtcPeerConnectionProvider.getConnection(),this._rtcPeerConnection.onaddstream=function(a){b._remoteVideoAddedCallbacks.fire(b,a.stream)}.bind(this),this._userMediaProvider.getStream(this._config.conferenceConfiguration.supportedMedia)}.bind(this)).then(function(a){return this._rtcPeerConnection.addStream(a),b._localVideoAddedCallbacks.fire(b,a),this._rtcPeerConnectionProvider.getLocalSDP(this._rtcPeerConnection)}.bind(this)).then(function(a){return this._signalingProvider.sendSDP(a,this._config.conferenceConfiguration.displayName,this._config.conferenceConfiguration.meetingId,this._transaction.id++)}.bind(this)).then(function(a){return this._rtcPeerConnectionProvider.setRemoteDescription(this._rtcPeerConnection,"answer",a.params.sdp)}.bind(this)).then(function(){return this._conferenceProvider._transaction=this._transaction,b._conference.start(this._config).then(function(a){return this._isClosed=!1,a}.bind(this))}.bind(this))},b.prototype.stopCall=function(a){var b=$.Deferred();return this._removeListeners(),this._rtcPeerConnection.oniceconnectionstatechange=function(c){"closed"===c.target.iceConnectionState&&(this._rtcPeerConnectionProvider.stopAllStreams(this._rtcPeerConnection),this._isClosed?(this._rtcPeerConnection=void 0,this._transaction.id=0,b.resolve()):this._signalingProvider.stop(this._transaction.id++).then(function(){return this._rtcPeerConnection=void 0,this._transaction.id=0,a.getConference().stop()}.bind(this)).then(function(){b.resolve()}.bind(this),function(a){b.reject(a)}))}.bind(this),"closed"!==this._rtcPeerConnection.signalingState&&this._rtcPeerConnection.close(),b.promise()},b.prototype.muteAudio=function(a,b){var c=$.Deferred();return this._rtcPeerConnection.getLocalStreams().forEach(function(a){a.getAudioTracks().forEach(function(a){a.enabled=!b})}),this._conferenceProvider.sendLocalMuteEvent(a.getConference()._selfParticipantId,b),c.resolve(),c.promise()},b.prototype._handleServerSDPRequest=function(a){this._transaction.id=parseFloat(a.params.transId),this._rtcPeerConnectionProvider.setRemoteDescription(this._rtcPeerConnection,"offer",a.params.sdp).then(function(){return this._rtcPeerConnectionProvider.createAnswer(this._rtcPeerConnection)}.bind(this)).then(function(b){this._signalingProvider.answerSDP(b,a.params.transId)}.bind(this))},b.prototype._handleDisconnectRequest=function(b,c){this._transaction.id=parseFloat(c.params.transId);try{this._signalingProvider.sendDisconnectResponse(c.params.transId)}catch(d){a.Base.Logger.error(d)}this._isClosed=!0,b.end().then(function(a){return b._onCallEndedCallbacks.fire(b),a})},a.Providers.Scopia.ScopiaCallProvider=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype.updateMeetingInfo=function(b,c){if(c.meetingName&&c.meetingName!==b._subject&&(b._subject=c.meetingName,b._onConferenceSubjectChangedCallbacks.fire(b,c.meetingName)),c.lecturerId&&"none"!==c.lecturerId!==b._isLectureModeActive&&(b._isLectureModeActive="none"!==c.lecturerId,b._onConferenceLectureModeStatusChangedCallbacks.fire(b,b._isLectureModeActive)),c.lecturerId&&c.lecturerId!==b._lecturerId){var d=b._activeParticipants.filter(function(a){return a._participantId===b._lecturerId})[0];d&&(d._lecturer=!1,d._onParticipantUnsetAsLecturerCallbacks.fire(d)),b._lecturerId=c.lecturerId;var e=b._activeParticipants.filter(function(a){return a._participantId===b._lecturerId})[0];e&&(e._lecturer=!0,e._onParticipantSetAsLecturerCallbacks.fire(e))}switch(c.recorderAvailable&&c.recorderAvailable!==b._recorderStatus&&(b._recorderStatus=c.recorderAvailable),c.recording){case"true":c.recording=a.Services.Conference.RecordingStatus.ON;break;case"false":c.recording=a.Services.Conference.RecordingStatus.OFF}c.recording&&c.recording!==b._recordingStatus&&(b._recordingStatus=c.recording,b._onConferenceRecordingStatusChangedCallbacks.fire(b,b._recordingStatus)),!c.locked&&c.locked!==!1||c.locked===b._isLocked||(b._isLocked=c.locked,b._onConferenceLockStatusChangedCallbacks.fire(b,b._isLocked)),c.media&&"video"===c.media!==b._isVideoAllowed&&(b._isVideoAllowed="video"===c.media,b._onConferenceVideoStatusChangedCallbacks.fire(b,b._isVideoAllowed)),c.presenterId&&"none"!==c.presenterId!==b._isPresentationModeActive&&(b._isPresentationModeActive="none"!==c.presenterId,b._onConferencePresentationModeStatusChangedCallbacks.fire(b,b._isPresentationModeActive)),c.encrypted&&c.encrypted!==b._encryptionStatus&&(b._encryptionStatus=c.encrypted,b._onConferenceEncryptionStatusChangedCallbacks.fire(b,b._encryptionStatus)),void 0!==c.streaming&&c.streaming!==b._isStreamingActive&&(b._isStreamingActive=c.streaming,b._onConferenceStreamingStatusChangedCallbacks.fire(b,b._isStreamingActive)),c.terminationTime&&c.terminationTime!==b._terminationTime&&(b._terminationTime=c.terminationTime,b._onConferenceMeetingTerminationTimeChangedCallbacks.fire(b,b._terminationTime)),void 0!==c.moderatorPinNeeded&&c.moderatorPinNeeded!==b._isPinRequiredToBecomeModerator&&(b._isPinRequiredToBecomeModerator=c.moderatorPinNeeded)},b.prototype.updateRoster=function(b,c){var d=[],e={},f=!1;c.participants.forEach(function(c){c.status===a.Services.Conference.ParticipantAuthorizationStatus.ACTIVE?(e=this._buildActiveParticipant(c,b),f=b._activeParticipants.filter(function(a){return a._participantId===e._participantId}).length>0,f||(e._participantId===b._selfParticipantId&&(e._isLocalUser=!0),d.push(e),b._activeParticipants.push(e)),e._participantId===b._selfParticipantId&&(b._selfParticipant=e,b.getInConferenceChat()._setSelfParticipant(e),e._isSelfParticipant=!0,e._audioFromParticipant===a.Services.Conference.MediaFromParticipantStatus.MODERATOR_MUTED&&call.muteAudio())):(e=this._buildPendingParticipant(c,b),f=b._pendingParticipants.filter(function(a){return a._participantId===e._participantId}).length>0,f||(b._pendingParticipants.push(e),b._onConferencePendingParticipantCallbacks.fire(b,e)))}.bind(this)),b._activeParticipants.forEach(function(a){a._recalculateAllCapabilities()}),d.length>0&&b._onConferenceParticipantsAddedCallbacks.fire(b,d)},b.prototype.updateSlider=function(a,b){},b.prototype.addParticipant=function(a,b){var c=a._activeParticipants.filter(function(a){return a._participantId===b.participantId}).length>0;if(!c){var d=this._buildActiveParticipant(b,a);a._activeParticipants.push(d),a._onConferenceParticipantsAddedCallbacks.fire(a,[d]),d._recalculateAllCapabilities()}},b.prototype.addPendingParticipant=function(a,b){var c=a._pendingParticipants.filter(function(a){return a._participantId===b.participantId}).length>0;if(!c){console.log("addPendingParticipant",a,b);var d=this._buildPendingParticipant(b,a);a._pendingParticipants.push(d),a._onConferencePendingParticipantCallbacks.fire(a,d)}},b.prototype.removePendingParticipant=function(b,c){var d=b._pendingParticipants.filter(function(a){return a._participantId===c.participantId})[0];if(a.Base.Utils.isDefined(d)){var e=b._pendingParticipants.indexOf(d);b._pendingParticipants.splice(e,1),b._onConferencePendingParticipantRemovedCallbacks.fire(b,d)}},b.prototype.pendingParticipantAccepted=function(a,b){a._onPendingParticipantAcceptedCallbacks.fire(a,b.anotherModerator)},b.prototype.pendingParticipantCancelled=function(b,c){var d=b._pendingParticipants.filter(function(a){return a._participantId===c.participantId})[0];a.Base.Utils.isDefined(d)&&d._onPendingParticipantCancelledCallbacks.fire(d,c.reason,c.anotherModerator)},b.prototype.pendingParticipantDenied=function(a,b){a._onPendingParticipantDeniedCallbacks.fire(a,b.anotherModerator)},b.prototype.dropParticipant=function(b,c){var d=b._activeParticipants.filter(function(a){return a._participantId===c.participantId})[0],e=b._pendingParticipants.filter(function(a){return a._participantId===c.participantId})[0];if(a.Base.Utils.isDefined(d)){b._activeParticipants.splice(b._activeParticipants.indexOf(d),1);var f=this._buildDroppedParticipant(d,b);b._droppedParticipants.push(f),b._onConferenceParticipantsRemovedCallbacks.fire(b,[d]),b._onConferenceDroppedParticipantAddedCallbacks.fire(b,f)}else a.Base.Utils.isDefined(e)&&(b._pendingParticipants.splice(b._pendingParticipants.indexOf(e),1),b._onConferencePendingParticipantRemovedCallbacks.fire(b,e))},b.prototype.updateMeetingNote=function(a,b){},b.prototype.updateActiveTalker=function(b,c){if(c.participantId!==b._activeTalkerId){var d=b._activeParticipants.filter(function(a){return a._participantId===b._activeTalkerId})[0];a.Base.Utils.isDefined(d)&&d._onParticipantActiveTalkerStatusChangedCallbacks.fire(d,!1);var e=b._activeParticipants.filter(function(a){return a._participantId===c.participantId})[0];a.Base.Utils.isDefined(e)&&(b._activeTalkerId=c.participantId,b._onConferenceActiveTalkersChangedCallbacks.fire(b,e),e._onParticipantActiveTalkerStatusChangedCallbacks.fire(e,!0))}},b.prototype.updateWebCollab=function(a,b){a._collaborationURI=b.webCollabUrl,a._onConferenceCollaborationURIChangedCallbacks.fire(a,a._collaborationURI)},b.prototype.updatePermissions=function(b,c){a.Base.Utils.isDefined(c.dialout)&&c.dialout!==b._dialoutPermissions&&(b._dialoutPermissions=c.dialout),a.Base.Utils.isDefined(c.recording)&&c.recording!==b._recordingPermissions&&(b._recordingPermissions=c.recording),b._recalculateAllCapabilities()},b.prototype.updateAvailableLayouts=function(b,c){if(a.Base.Utils.isDefined(c.textOverlay)&&c.textOverlay!==b._isVideoParticipantNameDisplayChangeAllowed&&(b._isVideoParticipantNameDisplayChangeAllowed=c.textOverlay,b._onConferenceDisplayParticipantNameOnVideoAllowedCallbacks.fire(b,b._isVideoParticipantNameDisplayChangeAllowed)),a.Base.Utils.isDefined(c.noSelfSee)&&c.noSelfSee!==b._isVideoSelfSeeChangeAllowed&&(b._isVideoSelfSeeChangeAllowed=c.noSelfSee,b._onConferenceVideoSelfSeeAllowedCallbacks.fire(b,b._isVideoSelfSeeChangeAllowed)),a.Base.Utils.isDefined(c.geometries)){var d=b._supportedVideoLayouts.slice(0);b._supportedVideoLayouts=c.geometries.slice(0);var e=!1;if(d.length===b._supportedVideoLayouts.length){for(var f=0;f<d.length;f++)if(d[f]!==b._supportedVideoLayouts[f]){e=!0;break}}else e=!0;e&&b._onConferenceSupportedVideoLayoutsChangedCallbacks.fire(b,b._supportedVideoLayouts)}},b.prototype.updateCurrentLayout=function(b,c){if(a.Base.Utils.isDefined(c.textOverlay)&&c.textOverlay!==b._isVideoParticipantNameDisplayActive&&(b._isVideoParticipantNameDisplayActive=c.textOverlay,b._onConferenceDisplayParticipantNameOnVideoChangedCallbacks.fire(b,b._isVideoParticipantNameDisplayActive)),a.Base.Utils.isDefined(c.noSelfSee)){var d=b._isVideoSelfSeeActive;b._isVideoSelfSeeActive=!c.noSelfSee,b._isVideoSelfSeeActive!==d&&b._onConferenceVideoSelfSeeChangedCallbacks.fire(b,b._isVideoSelfSeeActive)}a.Base.Utils.isDefined(c.geometry)&&c.geometry!==b._currentVideoLayout&&(b._currentVideoLayout=c.geometry,b._onConferenceVideoLayoutChangedCallbacks.fire(b,b._currentVideoLayout))},b.prototype.addChatMessage=function(b,c){var d=b.getInConferenceChat(),e=b._activeParticipants.filter(function(a){return a._participantId===c.participantId})[0];if(c.participantId!==b._selfParticipantId){var f=new a.Services.Conference.ChatMessage(c.text,e,d._selfParticipant,c.type===a.Services.Conference.ChatType.PRIVATE);d._addMessage(f)}},b.prototype._buildActiveParticipant=function(b,c){var d=new a.Services.Conference.ActiveParticipant(c._participantService,c);return d._participantId=b.participantId,d._participantName=b.participantName,d._userId=b.userId,d._joinTime=b.joinTime,d._sourceID=b.sourceID,d._status=b.status,d._handRaised=b.handRaised,d._role=b.role,d._feccRecvSupport=b.feccRecvSupport,d._audioFromParticipant=b.audioFromParticipant,d._audioToParticipant=b.audioToParticipant,d._videoFromParticipant=b.videoFromParticipant,d._videoToParticipant=b.videoToParticipant,d._contentFromParticipant=b.contentFromParticipant,d._contentToParticipant=b.contentToParticipant,d},b.prototype._buildDroppedParticipant=function(b,c){var d=new a.Services.Conference.DroppedParticipant(c._participantService,c);return d._participantId=b._participantId,d._userId=b._userId,d._participantName=b._participantName,d._isLocalUser=!1,d._conference=b._conference,d._recalculateAllCapabilities(),d},b.prototype._buildPendingParticipant=function(b,c){var d=new a.Services.Conference.PendingParticipant(c._participantService,c);return d._participantId=b.participantId,d._userId=b.userId,d._participantName=b.participantName,d._status=b.status,d._isLocalUser=!1,d._conference=c,d._recalculateAllCapabilities(),d},b.prototype.updateParticipant=function(b,c){var d=b._activeParticipants.filter(function(a){return a._participantId===c.participantId});if(a.Base.Utils.isDefined(d[0]))this._updateParticipantsData(d[0],c);else{var e=b._pendingParticipants.filter(function(a){return a._participantId===c.participantId});a.Base.Utils.isDefined(e[0])&&a.Base.Utils.isDefined(c.status)&&e[0]._status!==c.status&&c.status===a.Services.Conference.ParticipantAuthorizationStatus.ACTIVE&&(this.removePendingParticipant(b,c),this.addParticipant(b,c))}},b.prototype._updateParticipantsData=function(b,c){if(a.Base.Utils.isDefined(c.audioFromParticipant)&&b._audioFromParticipant!==c.audioFromParticipant&&(b._audioFromParticipant=c.audioFromParticipant,b._onParticipantAudioStatusChangedCallbacks.fire(b,b._audioFromParticipant),b._isLocalUser&&b._audioFromParticipant===a.Services.Conference.MediaFromParticipantStatus.MODERATOR_MUTED&&call.muteAudio()),a.Base.Utils.isDefined(c.videoFromParticipant)&&b._videoFromParticipant!==c.videoFromParticipant&&(b._videoFromParticipant=c.videoFromParticipant,b._onParticipantVideoStatusChangedCallbacks.fire(b,b._videoFromParticipant)),a.Base.Utils.isDefined(c.status)&&b._status!==c.status&&(b._status=c.status,b._onParticipantStatusChangedCallbacks.fire(b,b._status)),a.Base.Utils.isDefined(c.handRaised)&&b._handRaised!==c.handRaised&&(b._handRaised=c.handRaised,b._handRaised?b._onParticipantHandRaisedCallbacks.fire(b):b._onParticipantHandLoweredCallbacks.fire(b)),a.Base.Utils.isDefined(c.role)&&b._role!==c.role){var d=b._role;b._role=c.role,b._moderator=b._role===a.Services.Conference.ParticipantRole.MODERATOR,b._role===a.Services.Conference.ParticipantRole.MODERATOR?b._onParticipantSetAsModeratorCallbacks.fire(b):d===a.Services.Conference.ParticipantRole.MODERATOR&&b._role!==a.Services.Conference.ParticipantRole.MODERATOR&&b._onParticipantUnsetAsModeratorCallbacks.fire(b)}a.Base.Utils.isDefined(c.feccRecvSupport)&&b._feccRecvSupport!==c.feccRecvSupport&&(b._feccRecvSupport=c.feccRecvSupport),a.Base.Utils.isDefined(c.audioToParticipant)&&b._audioToParticipant!==c.audioToParticipant&&(b._audioToParticipant=c.audioToParticipant),a.Base.Utils.isDefined(c.videoToParticipant)&&b._videoToParticipant!==c.videoToParticipant&&(b._videoToParticipant=c.videoToParticipant),a.Base.Utils.isDefined(c.contentFromParticipant)&&b._contentFromParticipant!==c.contentFromParticipant&&(b._contentFromParticipant=c.contentFromParticipant),a.Base.Utils.isDefined(c.contentToParticipant)&&b._contentToParticipant!==c.contentToParticipant&&(b._contentToParticipant=c.contentToParticipant)},b.prototype.recordingFailed=function(a,b){a._onConferenceRecordingFailedCallbacks.fire(a)},b.prototype.meetingTerminationInProgress=function(a,b){a._onConferenceMeetingTerminationInProgressCallbacks.fire(a,b.reason,b.userName),a.stop()},a.Providers.Scopia.ScopiaConferenceBuilder=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.Interfaces.ConferenceProvider.call(this),this._dataProvider=b,this._conferenceBuilder=c,this._transaction={id:1}}b.prototype=Object.create(a.Providers.Interfaces.ConferenceProvider.prototype),b.prototype.start=function(a,b){return this._dataProvider.start(b).then(function(){return this._dataProvider.sendHandshake(this._transaction.id++)}.bind(this)).then(function(c){return a._selfParticipantId=c.participantId,c.admissionPermissionNeeded||c.admissionPasscodeNeeded?this._processAdmission(a,b,c):void 0}.bind(this))},b.prototype.observeConference=function(a){this._dataProvider.subscribeMeetingInfo(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateMeetingInfo(a,b),a._recalculateAllCapabilities(),b}.bind(this)),this._dataProvider.subscribeRoster(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateRoster(a,b),a._recalculateAllCapabilities(),b}.bind(this)),this._dataProvider.subscribeActiveTalker(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateActiveTalker(a,b),b}.bind(this)),this._dataProvider.subscribeSlider(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateSlider(a,b),
b}.bind(this)),this._dataProvider.subscribeMeetingNote(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateMeetingNote(a,b),b}.bind(this)),this._dataProvider.subscribeWebCollab(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateWebCollab(a,b),b}.bind(this)),this._dataProvider.subscribeAvailableLayouts(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateAvailableLayouts(a,b),a._recalculateAllCapabilities(),b}.bind(this)),this._dataProvider.getCurrentVideoLayout(this._transaction.id++).then(function(b){return this._conferenceBuilder.updateCurrentLayout(a,b),a._recalculateAllCapabilities(),b}.bind(this)),this._dataProvider.subscribePermissions(this._transaction.id++).then(function(b){return this._conferenceBuilder.updatePermissions(a,b),b}.bind(this))},b.prototype._requestAdmission=function(b,c,d,e){return this._dataProvider.sendAdmissionRequest(this._transaction.id++,e).then(function(e){return e.responseCode===a.Services.Conference.AdmissionResponseCode.INCORRECT_PASSCODE_TRY_AGAIN?this._processAdmission(b,c,d):void 0}.bind(this))},b.prototype._processAdmission=function(a,b,c){return c.admissionPasscodeNeeded?b.promptAdmissionPasscodeHandler(c).then(function(d){return this._requestAdmission(a,b,c,d)}.bind(this)):b.confirmAdmissionHandler(c).then(function(){return this._requestAdmission(a,b,c)}.bind(this))},b.prototype.addConferenceEventListeners=function(b){var c=this._dataProvider.getSelectedProvider();c.on(a.Providers.UCCP.UCCPMessageTypes.PARTICIPANT_JOINED_EVENT,function(c){var d=b._pendingParticipants.filter(function(a){return a._participantId===c.participantId}).length>0,e=c.status===a.Services.Conference.ParticipantAuthorizationStatus.ACTIVE;e?(d&&this._conferenceBuilder.removePendingParticipant(b,c),this._conferenceBuilder.addParticipant(b,c)):this._conferenceBuilder.addPendingParticipant(b,c)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.PARTICIPANT_LEFT_EVENT,function(a){this._conferenceBuilder.dropParticipant(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.ACTIVE_TALKER_CHANGED_EVENT,function(a){this._conferenceBuilder.updateActiveTalker(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.PERMISSIONS_CHANGED_EVENT,function(a){this._conferenceBuilder.updatePermissions(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.PARTICIPANT_INFO_CHANGED_EVENT,function(a){this._conferenceBuilder.updateParticipant(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.MEETING_INFO_CHANGED_EVENT,function(a){this._conferenceBuilder.updateMeetingInfo(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.AVAILABLE_LAYOUTS_CHANGED_EVENT,function(a){this._conferenceBuilder.updateAvailableLayouts(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.CURRENT_LAYOUT_CHANGED_EVENT,function(a){this._conferenceBuilder.updateCurrentLayout(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.MEETING_TERMINATION_IN_PROGRESS_EVENT,function(a){this._conferenceBuilder.meetingTerminationInProgress(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_EVENT,function(a){this._conferenceBuilder.addPendingParticipant(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_CANCELED_EVENT,function(a){this._conferenceBuilder.pendingParticipantCancelled(b,a),this._conferenceBuilder.removePendingParticipant(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.CHAT_EVENT,function(a){this._conferenceBuilder.addChatMessage(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.RECORDING_FAILED_EVENT,function(a){this._conferenceBuilder.recordingFailed(b,a)}.bind(this)),c.on(a.Providers.UCCP.UCCPMessageTypes.WEB_COLLAB_CHANGED_EVENT,function(a){this._conferenceBuilder.updateWebCollab(b,a)}.bind(this))},b.prototype.stop=function(){return this._dataProvider.stop()},b.prototype.setAsLecturer=function(a){return this._dataProvider.setAsLecturer(this._transaction.id++,a)},b.prototype.setLocked=function(a){return this._dataProvider.setLocked(this._transaction.id++,a)},b.prototype.unsetAsLecturer=function(){return this._dataProvider.unsetAsLecturer(this._transaction.id++)},b.prototype.disconnectParticipant=function(a){return this._dataProvider.disconnectParticipant(this._transaction.id++,a)},b.prototype.startRecording=function(a,b,c){return this._dataProvider.startRecording(this._transaction.id++,b,c)},b.prototype.stopRecording=function(a){return this._dataProvider.stopRecording(this._transaction.id++)},b.prototype.pauseRecording=function(a){return this._dataProvider.pauseRecording(this._transaction.id++)},b.prototype.resumeRecording=function(a){return this._dataProvider.resumeRecording(this._transaction.id++)},b.prototype.muteUnmute=function(a,b,c){return this._dataProvider.muteUnmute(this._transaction.id++,a,b,c)},b.prototype.muteUnmuteAll=function(a){return this._dataProvider.muteUnmuteAll(this._transaction.id++,a)},b.prototype.setContinuation=function(a){return this._dataProvider.setContinuation(this._transaction.id++,a)},b.prototype.sendLocalMuteEvent=function(a,b){return this._dataProvider.sendLocalMuteEvent(this._transaction.id++,a,b)},b.prototype.setVideoLayout=function(a){return this._dataProvider.setVideoLayout(this._transaction.id++,a)},b.prototype.setVideoLayoutSelfSee=function(a){return this._dataProvider.setVideoLayoutSelfSee(this._transaction.id++,a)},b.prototype.setVideoLayoutTextOverlay=function(a){return this._dataProvider.setVideoLayoutTextOverlay(this._transaction.id++,a)},b.prototype.getCurrentVideoLayout=function(){return this._dataProvider.getCurrentVideoLayout(this._transaction.id++)},b.prototype.terminateConference=function(){return this._dataProvider.terminateConference(this._transaction.id++)},b.prototype.requestToBecomeModerator=function(a){return this._dataProvider.requestToBecomeModerator(this._transaction.id++,a)},b.prototype.sendChatMessage=function(a,b){return this._dataProvider.sendChatMessage(this._transaction.id++,a,b)},b.prototype.moderatorAdmission=function(b,c){return this._dataProvider.moderatorAdmission(this._transaction.id++,b.getParticipantId(),c).then(function(d){switch(c){case a.Services.Conference.ModeratorAdmissionActions.ADMIT:this._conferenceBuilder.pendingParticipantAccepted(b,d);break;case a.Services.Conference.ModeratorAdmissionActions.REJECT:this._conferenceBuilder.pendingParticipantDenied(b,d)}return d}.bind(this))},b.prototype.raiseLowerHand=function(a){return this._dataProvider.raiseLowerHand(this._transaction.id++,a)},b.prototype.moderatorLowerHand=function(a,b){return this._dataProvider.moderatorLowerHand(this._transaction.id++,a,b)},a.Providers.Scopia.ScopiaConferenceProvider=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={getScopiaConferenceProvider:function(b,c){if(a.Base.Utils.isDefined(b)&&b.enabled){var d=new a.Providers.UCCP.UCCPMessageBuilder,e=new a.Providers.UCCP.UCCPMessageParser;e.register(a.Providers.UCCP.UCCPMessageTypes.HANDSHAKE_RESPONSE,new a.Providers.UCCP.UCCPHandshakeResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_ROSTER_RESPONSE,new a.Providers.UCCP.UCCPSubscribeRosterResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_ACTIVE_TALKER_RESPONSE,new a.Providers.UCCP.UCCPSubscribeActiveTalkerResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_PERMISSIONS_RESPONSE,new a.Providers.UCCP.UCCPSubscribePermissionsResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_SLIDER_RESPONSE,new a.Providers.UCCP.UCCPSubscribeSliderResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_MEETING_NOTE_RESPONSE,new a.Providers.UCCP.UCCPSubscribeMeetingNoteResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_MEETING_INFO_RESPONSE,new a.Providers.UCCP.UCCPSubscribeMeetingInfoResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_WEB_COLLAB_RESPONSE,new a.Providers.UCCP.UCCPSubscribeWebCollabResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_AVAILABLE_LAYOUTS_RESPONSE,new a.Providers.UCCP.UCCPSubscribeAvailableLayoutsResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.PARTICIPANT_JOINED_EVENT,new a.Providers.UCCP.UCCPParticipantJoinedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.PARTICIPANT_LEFT_EVENT,new a.Providers.UCCP.UCCPParticipantLeftEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.ACTIVE_TALKER_CHANGED_EVENT,new a.Providers.UCCP.UCCPActiveTalkerChangedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.PERMISSIONS_CHANGED_EVENT,new a.Providers.UCCP.UCCPPermissionsChangedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MEETING_INFO_CHANGED_EVENT,new a.Providers.UCCP.UCCPMeetingInfoChangedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.PARTICIPANT_INFO_CHANGED_EVENT,new a.Providers.UCCP.UCCPParticipantInfoChangedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.LECTURE_MODE_START_RESPONSE,new a.Providers.UCCP.UCCPLectureModeStartResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.LECTURE_MODE_STOP_RESPONSE,new a.Providers.UCCP.UCCPLectureModeStopResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_MUTE_RESPONSE,new a.Providers.UCCP.UCCPModeratorMuteResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MUTE_ALL_RESPONSE,new a.Providers.UCCP.UCCPMuteAllResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.DISCONNECT_PARTICIPANT_RESPONSE,new a.Providers.UCCP.UCCPDisconnectParticipantResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_MUTE_RESPONSE,new a.Providers.UCCP.UCCPModeratorMuteResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MEETING_TERMINATION_IN_PROGRESS_EVENT,new a.Providers.UCCP.UCCPMeetingTerminationInProgressEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.TERMINATE_MEETING_RESPONSE,new a.Providers.UCCP.UCCPTerminateMeetingResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.START_MODERATION_RESPONSE,new a.Providers.UCCP.UCCPStartModerationResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CHAT_RESPONSE,new a.Providers.UCCP.UCCPChatResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CHAT_EVENT,new a.Providers.UCCP.UCCPChatEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.LOCK_MEETING_RESPONSE,new a.Providers.UCCP.UCCPLockMeetingResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.RECORDING_RESPONSE,new a.Providers.UCCP.UCCPRecordingResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.EXTEND_MEETING_RESPONSE,new a.Providers.UCCP.UCCPExtendMeetingResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.RECORDING_REQUEST,new a.Providers.UCCP.UCCPRecordingResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CURRENT_LAYOUT_RESPONSE,new a.Providers.UCCP.UCCPCurrentLayoutResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_GEOMETRY_RESPONSE,new a.Providers.UCCP.UCCPChangeLayoutGeometryResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_OVERLAY_RESPONSE,new a.Providers.UCCP.UCCPChangeLayoutTextOverlayResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_SELF_SEE_RESPONSE,new a.Providers.UCCP.UCCPChangeLayoutSelfSeeResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.AVAILABLE_LAYOUTS_CHANGED_EVENT,new a.Providers.UCCP.UCCPAvailableLayoutsChangedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.CURRENT_LAYOUT_CHANGED_EVENT,new a.Providers.UCCP.UCCPCurrentLayoutChangedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.VIDEO_PIN_RESPONSE,new a.Providers.UCCP.UCCPVideoPinResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.RAISE_HAND_RESPONSE,new a.Providers.UCCP.UCCPRaiseHandResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_LOWER_HAND_RESPONSE,new a.Providers.UCCP.UCCPModeratorLowerHandResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.ADMISSION_RESPONSE,new a.Providers.UCCP.UCCPAdmissionResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_RESPONSE,new a.Providers.UCCP.UCCPModeratorAdmissionResponseParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_EVENT,new a.Providers.UCCP.UCCPModeratorAdmissionEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_CANCELED_EVENT,new a.Providers.UCCP.UCCPModeratorAdmissionCanceledEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.RECORDING_FAILED_EVENT,new a.Providers.UCCP.UCCPRecordingFailedEventParser),e.register(a.Providers.UCCP.UCCPMessageTypes.WEB_COLLAB_CHANGED_EVENT,new a.Providers.UCCP.UCCPWebCollabChangedEventParser);var f=null;f=a.Base.Utils.isDefined(c)?c.getUCCPProvider():this._createUccpNetworkProvider();var g=new a.Providers.UCCP.UCCPProviderFactory(f,d,e),h=g.getUCCPProvider(),i=new a.Providers.Scopia.ScopiaConferenceBuilder,j=new a.Providers.Scopia.ScopiaConferenceProvider(h,i);return j}},getScopiaCallProvider:function(b){if(a.Base.Utils.isDefined(b)&&b.enabled){var c=new a.Providers.RTC.UserMediaProvider,d=new a.Providers.RTC.SDPParser,e=new a.Providers.RTC.RTCPeerConnectionProvider(d),f=this._initializeIntegrationProvider(),g=this.getScopiaConferenceProvider(b,f),h=new a.Providers.WSP.WSPMessageBuilder,i=new a.Providers.WSP.WSPProvider(f.getWSPProvider(),h),j=new a.Providers.Scopia.ScopiaCallProvider(i,c,e,g,b);return j}},_initializeIntegrationProvider:function(){var b=new a.Base.TransactionalWebSocketProvider,c=new a.Base.NetworkProvider(b),d=new a.Providers.Scopia.UCCPWSPIntegrationProvider(c);return d.initialize(),d},_createUccpNetworkProvider:function(){var b=new a.Base.TransactionalWebSocketProvider,c=new a.Base.NetworkProvider(b);return c}},a.Providers.Scopia.ScopiaConferenceProviderFactory=b}(AvayaClientServices),function(a){"use strict";function b(a){this._networkProvider=a,this._dummyUCCPProvider=void 0,this._dummyWSPProvider=void 0}b.prototype={initialize:function(){this._dummyUCCPProvider=new a.Base.AbstractNetworkProvider,this._dummyWSPProvider=new a.Base.AbstractNetworkProvider,this._setupPassThrough(),this._setupCallbacks()},_setupPassThrough:function(){this._dummyUCCPProvider.send=function(a,b){return this._networkProvider.send(a,b)}.bind(this),this._dummyWSPProvider.send=function(a,b){return this._networkProvider.send(a,b)}.bind(this),this._dummyUCCPProvider.start=function(a,b,c){return this._networkProvider.start(a,b,c)}.bind(this),this._dummyWSPProvider.start=function(a,b,c){return this._networkProvider.start(a,b,c)}.bind(this),this._dummyUCCPProvider.close=function(){return this._networkProvider.close()}.bind(this),this._dummyWSPProvider.close=function(){return this._networkProvider.close()}.bind(this)},_setupCallbacks:function(){this._networkProvider.onMessage=function(a){var b=JSON.parse(a.data);"UCCP"===b.protocolType?this._dummyUCCPProvider.onMessage(b):"WSP"===b.protocolType&&this._dummyWSPProvider.onMessage(b)}.bind(this),this._networkProvider.onOpen=function(){this._dummyWSPProvider.onOpen(),this._dummyUCCPProvider.onOpen()}.bind(this),this._networkProvider.onClose=function(){this._dummyWSPProvider.onClose(),this._dummyUCCPProvider.onClose()}.bind(this),this._networkProvider._onCredentialsRequired=function(a){if(a.message){var b=JSON.parse(a.message);"UCCP"===b.protocolType?this._dummyUCCPProvider._onCredentialsRequired(a):"WSP"===b.protocolType&&this._dummyWSPProvider._onCredentialsRequired(a)}else this._dummyWSPProvider._onCredentialsRequired(a),this._dummyUCCPProvider._onCredentialsRequired(a)}.bind(this),this._networkProvider.onError=function(a){this._dummyWSPProvider.onError(a),this._dummyUCCPProvider.onError(a)}.bind(this)},getUCCPProvider:function(){return this._dummyUCCPProvider},getWSPProvider:function(){return this._dummyWSPProvider}},a.Providers.Scopia.UCCPWSPIntegrationProvider=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c,d){a.Providers.Interfaces.ConferenceDataProvider.call(this),this._networkProvider=b,this._config=void 0,this._messageBuilder=c,this._messageParser=d,this._isStarted=!1}c.prototype=Object.create(a.Providers.Interfaces.ConferenceDataProvider.prototype),c.prototype.start=function(a){var c=b.Deferred();return this._config=a,this._isStarted=!0,c.resolve(),c.promise()},c.prototype.onCredentialsRequired=function(a){var b;this._config.credentialProvider.onAuthenticationChallenge(b,function(b){this.onCredentialsRetrieved(b,a)}.bind(this))},c.prototype.onCredentialsRetrieved=function(a,b){if(b.options=b.options||{},!b.options.alreadyApplied){if(b.message){var c=JSON.parse(b.message);"undefined"!=typeof c.params.token&&(c.params.token=a.token),b.message=JSON.stringify(c)}else{var d=b.options.urlSuffix.indexOf("?ticket=");d>0?b.options.urlSuffix=b.options.urlSuffix.slice(0,d):0===d&&(b.options.urlSuffix=""),b.options.urlSuffix+="?ticket="+a.token}b.options.alreadyApplied=!0}},c.prototype.sendHandshake=function(a){var b=this._messageBuilder.buildHandshakeRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribeMeetingInfo=function(a){var b=this._messageBuilder.buildSubscribeMeetingInfoRequest(a);return this._sendMessage(b,"success")},c.prototype.startRecording=function(b,c,d){var e=this._messageBuilder.buildSetRecordingRequest(b,a.Services.Conference.RecordingOperation.START,c,d);return this._sendMessage(e,"success")},c.prototype.stopRecording=function(b){var c=this._messageBuilder.buildSetRecordingRequest(b,a.Services.Conference.RecordingOperation.STOP);return this._sendMessage(c,"success")},c.prototype.pauseRecording=function(b){var c=this._messageBuilder.buildSetRecordingRequest(b,a.Services.Conference.RecordingOperation.PAUSE);return this._sendMessage(c,"success")},c.prototype.resumeRecording=function(b){var c=this._messageBuilder.buildSetRecordingRequest(b,a.Services.Conference.RecordingOperation.RESUME);return this._sendMessage(c,"success")},c.prototype.subscribeRoster=function(a){var b=this._messageBuilder.buildSubscribeRosterRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribeActiveTalker=function(a){var b=this._messageBuilder.buildSubscribeActiveTalkerRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribePermissions=function(a){var b=this._messageBuilder.buildSubscribePermissionsRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribeSlider=function(a){var b=this._messageBuilder.buildSubscribeSliderRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribeMeetingNote=function(a){var b=this._messageBuilder.buildSubscribeMeetingNoteRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribeWebCollab=function(a){var b=this._messageBuilder.buildSubscribeWebCollabRequest(a);return this._sendMessage(b,"success")},c.prototype.subscribeAvailableLayouts=function(a){var b=this._messageBuilder.buildSubscribeAvailableLayoutsRequest(a);return this._sendMessage(b,"success")},c.prototype.setAsLecturer=function(a,b){var c=this._messageBuilder.buildSetAsLecturerRequest(a,b);return this._sendMessage(c,"success")},c.prototype.unsetAsLecturer=function(a){var b=this._messageBuilder.buildUnsetAsLecturerRequest(a);return this._sendMessage(b,"success")},c.prototype.disconnectParticipant=function(a,b){var c=this._messageBuilder.buildDisconnectParticipantRequest(a,b._participantId);return this._sendMessage(c,"success")},c.prototype.setLocked=function(a,b){var c=this._messageBuilder.buildLockMeetingRequest(a,b);return this._sendMessage(c,"success")},c.prototype.muteUnmute=function(a,b,c,d){var e=this._messageBuilder.buildModeratorMuteRequest(a,b,c,d);return this._sendMessage(e,"success")},c.prototype.muteUnmuteAll=function(a,b){var c=this._messageBuilder.buildMuteAllRequest(a,b);return this._sendMessage(c,"success")},c.prototype.sendLocalMuteEvent=function(a,b,c){var d=this._messageBuilder.buildLocalMuteEvent(a,b,c);return this._networkProvider.send(JSON.stringify(d))},c.prototype.terminateConference=function(a){var b=this._messageBuilder.buildTerminateMeetingRequest(a);return this._sendMessage(b,"success")},c.prototype.requestToBecomeModerator=function(a,b){var c=this._messageBuilder.buildStartModerationRequest(a,b);return this._sendMessage(c,"success")},c.prototype.sendChatMessage=function(a,b,c){var d=this._messageBuilder.buildSendChatMessage(a,b,c);return this._sendMessage(d,"success")},c.prototype.setContinuation=function(a,b){var c=this._messageBuilder.buildExtendMeetingRequest(a,b);return this._sendMessage(c,"success")},c.prototype.setVideoLayout=function(a,b){var c=this._messageBuilder.buildChangeLayoutGeometryRequest(a,b);return this._sendMessage(c,"success")},c.prototype.setVideoLayoutSelfSee=function(a,b){var c=this._messageBuilder.buildChangeLayoutSelfSeeRequest(a,b);return this._sendMessage(c,"success")},c.prototype.setVideoLayoutTextOverlay=function(a,b){var c=this._messageBuilder.buildChangeLayoutTextOverlayRequest(a,b);return this._sendMessage(c,"success")},c.prototype.getCurrentVideoLayout=function(a){var b=this._messageBuilder.buildCurrentLayoutRequest(a);return this._sendMessage(b,"success")},c.prototype.raiseLowerHand=function(a,b){var c=this._messageBuilder.buildRaiseHandRequest(a,b);return this._sendMessage(c,"success")},c.prototype.moderatorLowerHand=function(a,b,c){var d=this._messageBuilder.buildModeratorLowerHandRequest(a,b,c);return this._sendMessage(d,"success")},c.prototype.moderatorAdmission=function(a,b,c){var d=this._messageBuilder.buildModeratorAdmissionRequest(a,b,c);return this._sendMessage(d,"success")},c.prototype.sendAdmissionRequest=function(c,d){var e=b.Deferred(),f=this._messageBuilder.buildAdmissionRequest(c,d);return this._sendMessage(f,[a.Services.Conference.AdmissionResponseCode.SUCCESS,a.Services.Conference.AdmissionResponseCode.INCORRECT_PASSCODE_TRY_AGAIN,a.Services.Conference.AdmissionResponseCode.PENDING_APPROVAL,a.Services.Conference.AdmissionResponseCode.INCORRECT_PASSCODE_DISCONNECTING,a.Services.Conference.AdmissionResponseCode.REJECTED]).then(function(a){this._resolveAdmissionResponse(e,a)}.bind(this),function(a){e.reject(a)}),this.on(a.Providers.UCCP.UCCPMessageTypes.ADMISSION_RESPONSE,function(a){this._resolveAdmissionResponse(e,a)}.bind(this)),e.promise()},c.prototype._resolveAdmissionResponse=function(b,c){switch(c.responseCode){case a.Services.Conference.AdmissionResponseCode.SUCCESS:case a.Services.Conference.AdmissionResponseCode.INCORRECT_PASSCODE_TRY_AGAIN:b.resolve(c);break;case a.Services.Conference.AdmissionResponseCode.INCORRECT_PASSCODE_DISCONNECTING:case a.Services.Conference.AdmissionResponseCode.REJECTED:b.reject({name:"UCCPServerError",code:c.responseCode,message:"UCCP server responded with "+c.responseCode});break;case a.Services.Conference.AdmissionResponseCode.PENDING_APPROVAL:}},c.prototype._sendMessage=function(a,c){var d=b.Deferred();return this._networkProvider.send(JSON.stringify(a)).then(function(a){this._resolveResponse(d,a,c)}.bind(this),function(a){d.reject(a)}),d.promise()},c.prototype._resolveResponse=function(a,b,c){var d;try{d=this._messageParser.parse(b)}catch(e){return void a.reject(e)}if(d&&d.responseCode&&(c.indexOf?c.indexOf(d.responseCode)>-1:d.responseCode===c))a.resolve(d);else{var f=400;b&&b.params&&b.params.responseCode&&(f=b.params.responseCode),a.reject({name:"UCCPServerError",code:f,message:"UCCP server responded with "+f})}},a.Providers.UCCP.AbstractUCCPProvider=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a){this.protocolType="UCCP",this.name=a}a.Providers.UCCP.UCCPMessage=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_CANCELED_EVENT),this.participantId=b,this.reason=c,this.anotherModerator=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPModeratorAdmissionCanceledEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_EVENT),this.participantId=b,this.participantName=c,this.userId=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPModeratorAdmissionEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_RESPONSE),this.transId=b,this.responseCode=c,this.anotherModerator=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPModeratorAdmissionResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.MODERATOR_LOWER_HAND_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPModeratorLowerHandResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.MODERATOR_MUTE_RESPONSE),this.transId=b,this.responseCode=c,this.audioMute=d,this.videoMute=e}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPModeratorMuteResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.MUTE_ALL_RESPONSE),this.transId=b,this.responseCode=c}a.Providers.UCCP.UCCPMuteAllResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h,i,j,k,l,m){a.Providers.UCCP.UCCPMessage.call(this,"participantInfoChangedEvent"),this.participantId=c,this.participantName=b,this.status=d,this.handRaised=e,this.role=f,this.feccRecvSupport=g,this.audioFromParticipant=h,this.audioToParticipant=i,this.videoFromParticipant=j,this.videoToParticipant=k,this.contentFromParticipant=l,this.contentToParticipant=m}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPParticipantInfoChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){a.Providers.UCCP.UCCPMessage.call(this,"participantJoinedEvent"),this.participantId=b,this.participantName=c,this.userId=d,this.sourceID=e,this.status=f,this.handRaised=g,this.role=h,this.feccRecvSupport=i,this.audioFromParticipant=j,this.audioToParticipant=k,this.videoFromParticipant=l,this.videoToParticipant=m,this.contentFromParticipant=n,this.contentToParticipant=o,this.joinTime=p}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPParticipantJoinedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.UCCP.UCCPMessage.call(this,"participantLeftEvent"),this.participantId=b}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPParticipantLeftEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.PERMISSIONS_CHANGED_EVENT),this.dialout=b,this.recording=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPPermissionsChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.RAISE_HAND_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPRaiseHandResponse=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.UCCP.UCCPMessage.call(this,"recordingFailedEvent")}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPRecordingFailedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,"recordingResponse"),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPRecordingResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.START_MODERATION_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPStartModerationResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,"subscribeActiveTalkerResponse"),this.transId=b,this.responseCode=c,this.participantId=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeActiveTalkerResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_AVAILABLE_LAYOUTS_RESPONSE),this.transId=b,this.responseCode=c,this.textOverlay=d,this.noSelfSee=e,this.geometries=f}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeAvailableLayoutsResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){a.Providers.UCCP.UCCPMessage.call(this,"subscribeMeetingInfoResponse"),this.transId=b,this.responseCode=c,this.meetingId=d,this.meetingName=e,this.virtualRoomName=f,this.virtualRoomOwnerId=g,this.media=h,this.locked=i,this.mediaStatus=j,this.lecturerId=k,this.lecturerName=l,this.presenterId=m,this.presenterName=n,this.recording=o,this.streaming=p,this.encrypted=q,this.moderatorPinNeeded=r,this.slidesAvailable=s,this.recorderAvailable=t,this.terminationTime=u}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeMeetingInfoResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,"subscribeMeetingNoteResponse"),this.transId=b,this.responseCode=c,this.notes=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeMeetingNoteResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_PERMISSIONS_RESPONSE),this.transId=b,this.responseCode=c,this.dialout=d,this.recording=e}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribePermissionsResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e){a.Providers.UCCP.UCCPMessage.call(this,"subscribeRosterResponse"),this.transId=b,this.responseCode=c,this.fragmentation=d,this.participants=e}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeRosterResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,"subscribeSliderResponse"),this.transId=b,this.responseCode=c,this.slides=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeSliderResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,"subscribeWebCollabResponse"),this.transId=b,this.responseCode=c,this.webCollabUrl=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPSubscribeWebCollabResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,"terminateMeetingResponse"),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPTerminateMeetingResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.VIDEO_PIN_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPVideoPinResponse=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.WEB_COLLAB_CHANGED_EVENT),this.webCollabUrl=b}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),
a.Providers.UCCP.UCCPWebCollabChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPActiveTalkerChangedEvent(b.params.participantId);return c}},a.Providers.UCCP.UCCPActiveTalkerChangedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPAdmissionResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPAdmissionResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPAvailableLayoutsChangedEvent(b.params.textOverlay?"true"===b.params.textOverlay:void 0,b.params.noSelfSee?"true"===b.params.noSelfSee:void 0,b.params.geometries);return c}},a.Providers.UCCP.UCCPAvailableLayoutsChangedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPChangeLayoutGeometryResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPChangeLayoutGeometryResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPChangeLayoutSelfSeeResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPChangeLayoutSelfSeeResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPChangeLayoutTextOverlayResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPChangeLayoutTextOverlayResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPChatEvent(b.params.participantId,b.params.type,b.params.text);return c}},a.Providers.UCCP.UCCPChatEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPChatResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPChatResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPCurrentLayoutChangedEvent(b.params.textOverlay?"true"===b.params.textOverlay:void 0,b.params.noSelfSee?"true"===b.params.noSelfSee:void 0,b.params.geometry);return c}},a.Providers.UCCP.UCCPCurrentLayoutChangedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPCurrentLayoutResponse(b.params.transId,b.params.responseCode,"true"===b.params.textOverlay,"true"===b.params.noSelfSee,b.params.geometry);return c}},a.Providers.UCCP.UCCPCurrentLayoutResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPDisconnectParticipantResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPDisconnectParticipantResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(a){var b=new AvayaClientServices.Providers.UCCP.UCCPExtendMeetingResponse(a.params.transId,a.params.responseCode);return b}},a.Providers.UCCP.UCCPExtendMeetingResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPHandshakeResponse(b.params.transId,b.params.responseCode,b.params.version,b.params.participantId,"true"===b.params.admissionPasscodeNeeded,"true"===b.params.admissionPermissionNeeded,b.params.commands);return c}},a.Providers.UCCP.UCCPHandshakeResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPLectureModeStartResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPLectureModeStartResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPLectureModeStopResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPLectureModeStopResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPLockMeetingResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPLockMeetingResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=b.params.terminationTime?new Date(Date.parse(b.params.terminationTime)):void 0,d=b.params.locked?"true"===b.params.locked:void 0,e=new a.Providers.UCCP.UCCPMeetingInfoChangedEvent(b.params.media,d,b.params.mediaStatus,b.params.lecturerId,b.params.lecturerName,b.params.presenterId,b.params.presenterName,b.params.recording,b.params.streaming?"enabled"===b.params.streaming:void 0,b.params.encrypted,"true"===b.params.slidesAvailable,c);return e}},a.Providers.UCCP.UCCPMeetingInfoChangedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPMeetingTerminationInProgressEvent(b.params.reason,b.params.userName);return c}},a.Providers.UCCP.UCCPMeetingTerminationInProgressEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPModeratorAdmissionCanceledEvent(b.params.participantId,b.params.reason,b.params.anotherModerator);return c}},a.Providers.UCCP.UCCPModeratorAdmissionCanceledEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPModeratorAdmissionEvent(b.params.participantId,b.params.name,b.params.userId);return c}},a.Providers.UCCP.UCCPModeratorAdmissionEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPModeratorAdmissionResponse(b.params.transId,b.params.responseCode,b.params.anotherModerator);return c}},a.Providers.UCCP.UCCPModeratorAdmissionResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPModeratorLowerHandResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPModeratorLowerHandResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPModeratorMuteResponse(b.params.transId,b.params.responseCode,"true"===b.params.audioMute,"true"===b.params.videoMute);return c}},a.Providers.UCCP.UCCPModeratorMuteResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPMuteAllResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPMuteAllResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c,d;a.Base.Utils.isDefined(b.params.handRaised)&&(c="true"===b.params.handRaised),a.Base.Utils.isDefined(b.params.feccRecvSupport)&&(d="true"===b.params.feccRecvSupport);var e=new a.Providers.UCCP.UCCPParticipantInfoChangedEvent(b.params.name,b.params.participantId,b.params.status,c,b.params.role,d,b.params.audioFromParticipant,b.params.audioToParticipant,b.params.videoFromParticipant,b.params.videoToParticipant,b.params.contentFromParticipant,b.params.contentToParticipant);return e}},a.Providers.UCCP.UCCPParticipantInfoChangedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPParticipantJoinedEvent(b.params.participantId,b.params.name,b.params.userId,b.params.sourceID,b.params.status,"true"===b.params.handRaised,b.params.role,"true"===b.params.feccRecvSupport,b.params.audioFromParticipant,b.params.audioToParticipant,b.params.videoFromParticipant,b.params.videoToParticipant,b.params.contentFromParticipant,b.params.contentToParticipant,new Date(Date.parse(b.params.joinTime)));return c}},a.Providers.UCCP.UCCPParticipantJoinedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPParticipantLeftEvent(b.params.participantId);return c}},a.Providers.UCCP.UCCPParticipantLeftEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPPermissionsChangedEvent(b.params.dialout,b.params.recording);return c}},a.Providers.UCCP.UCCPPermissionsChangedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPRaiseHandResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPRaiseHandResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPRecordingFailedEvent;return c}},a.Providers.UCCP.UCCPRecordingFailedEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPRecordingResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPRecordingResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPStartModerationResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPStartModerationResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPSubscribeActiveTalkerResponse(b.params.transId,b.params.responseCode,b.params.participantId);return c}},a.Providers.UCCP.UCCPSubscribeActiveTalkerResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPSubscribeAvailableLayoutsResponse(b.params.transId,b.params.responseCode,"true"===b.params.textOverlay,"true"===b.params.noSelfSee,b.params.geometries);return c}},a.Providers.UCCP.UCCPSubscribeAvailableLayoutsResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new Date(Date.parse(b.params.terminationTime)),d=new a.Providers.UCCP.UCCPSubscribeMeetingInfoResponse(b.params.transId,b.params.responseCode,b.params.meetingId,b.params.meetingName,b.params.virtualRoomName,b.params.virtualRoomOwnerId,b.params.media,"true"===b.params.locked,b.params.mediaStatus,b.params.lecturerId,b.params.lecturerName,b.params.presenterId,b.params.presenterName,b.params.recording,"enabled"===b.params.streaming,b.params.encrypted,"true"===b.params.moderatorPinNeeded,"true"===b.params.slidesAvailable,b.params.recorderAvailable,c);return d}},a.Providers.UCCP.UCCPSubscribeMeetingInfoResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=b.params.notes.map(function(a){return{participantId:a.participantId,participantDisplayName:a.participantDisplayName,noteId:a.noteId,text:a.text,time:new Date(Date.parse(a.time))}}),d=new a.Providers.UCCP.UCCPSubscribeMeetingNoteResponse(b.params.transId,b.params.responseCode,c);return d}},a.Providers.UCCP.UCCPSubscribeMeetingNoteResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPSubscribePermissionsResponse(b.params.transId,b.params.responseCode,b.params.dialout,b.params.recording);return c}},a.Providers.UCCP.UCCPSubscribePermissionsResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=b.params.participants.map(function(a){return this._buildActiveParticipant(a)}.bind(this)),d=new a.Providers.UCCP.UCCPSubscribeRosterResponse(b.params.transId,b.params.responseCode,b.params.fragmentation,c);return d},_buildActiveParticipant:function(a){var b={};if(b.participantId=a.participantId,b.participantName=a.name,b.userId=a.userId,a.joinTime){var c=new RegExp(/(\d{2}:\d{2}:\d{2})\s(\d{2})-(\d{2})-(\d{4})\s(-?\+?\d{4})/g).exec(a.joinTime),d=c[4]+"-"+c[3]+"-"+c[2]+" "+c[1]+" GMT"+c[5];b.joinTime=new Date(Date.parse(d))}return b.sourceID=a.sourceID,b.status=a.status,b.handRaised="true"===a.handRaised,b.role=a.role,b.feccRecvSupport="true"===a.feccRecvSupport,b.audioFromParticipant=a.audioFromParticipant,b.audioToParticipant=a.audioToParticipant,b.videoFromParticipant=a.videoFromParticipant,b.videoToParticipant=a.videoToParticipant,b.contentFromParticipant=a.contentFromParticipant,b.contentToParticipant=a.contentToParticipant,b}},a.Providers.UCCP.UCCPSubscribeRosterResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPSubscribeSliderResponse(b.params.transId,b.params.responseCode,b.params.slides);return c}},a.Providers.UCCP.UCCPSubscribeSliderResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPSubscribeWebCollabResponse(b.params.transId,b.params.responseCode,b.params.webCollabUrl);return c}},a.Providers.UCCP.UCCPSubscribeWebCollabResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPTerminateMeetingResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPTerminateMeetingResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPVideoPinResponse(b.params.transId,b.params.responseCode);return c}},a.Providers.UCCP.UCCPVideoPinResponseParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(b){var c=new a.Providers.UCCP.UCCPWebCollabChangedEvent(b.params.webCollabUrl);return c}},a.Providers.UCCP.UCCPWebCollabChangedEventParser=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c,d){a.Providers.UCCP.AbstractUCCPProvider.call(this),this._networkProvider=b,this._config=void 0,this._messageBuilder=c,this._messageParser=d}c.prototype=Object.create(a.Providers.UCCP.AbstractUCCPProvider.prototype),c.prototype.start=function(c){this._config=c;var d=b.Deferred();return this._networkProvider._onCredentialsRequired=this.onCredentialsRequired.bind(this),this._networkProvider.onOpen=function(){this._networkProvider.onClose=function(){d.reject()},this._networkProvider.isOpened()?d.resolve():this._waitForSocketConnection(this._networkProvider,function(){d.resolve()}.bind(this),function(a){d.reject("Failed to open")}.bind(this))}.bind(this),this._networkProvider.onClose=function(){d.reject()},this._networkProvider.onMessage=function(b){var c=this._messageParser.parse(b);c instanceof a.Providers.UCCP.UCCPMessage&&(a.Base.Logger.debug("UCCP: Received message "+c.name),this.trigger(c.name,[c]))}.bind(this),this._networkProvider.start(c.serverInfo,c.credentialProvider,{urlSuffix:"/uwd/ws",transactionIDLocation:"params.transId"}),d.promise()},c.prototype._waitForSocketConnection=function(a,b,c){var d=10,e=function(f){d>f?setTimeout(function(){a.isOpened()?b():e(f+1)}.bind(this),100):c("Max retry reached")};e(0)},c.prototype.stop=function(){this._removeListeners();var a=b.Deferred();return this._networkProvider.onClose=function(){a.resolve()},this._networkProvider.onError=function(b){a.reject(b)},this._networkProvider.close(),a.promise()},a.Providers.UCCP.UCCP1Provider=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){}b.prototype={buildHandshakeRequest:function(b){var c={transId:b.toString(),version:"1.0",features:[{featureName:"passcode",version:"1.0"},{featureName:"knockOnTheDoorParticipant",version:"1.0"},{featureName:"knockOnTheDoorModerator",version:"1.0"}]};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.HANDSHAKE_REQUEST,c)},buildSubscribeMeetingInfoRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_MEETING_INFO_REQUEST,c)},buildSubscribeSliderRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_SLIDER_REQUEST,c)},buildSubscribeActiveTalkerRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_ACTIVE_TALKER_REQUEST,c)},buildSubscribePermissionsRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_PERMISSIONS_REQUEST,c)},buildSubscribeMeetingNoteRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_MEETING_NOTE_REQUEST,c)},buildSubscribeRosterRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_ROSTER_REQUEST,c)},buildSubscribeWebCollabRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_WEB_COLLAB_REQUEST,c)},buildSubscribeAvailableLayoutsRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.SUBSCRIBE_AVAILABLE_LAYOUTS_REQUEST,c)},buildSetAsLecturerRequest:function(b,c){var d={transId:b.toString(),participantId:c};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.LECTURE_MODE_START_REQUEST,d)},buildUnsetAsLecturerRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.LECTURE_MODE_STOP_REQUEST,c)},buildMuteAllRequest:function(b,c){var d={transId:b.toString(),audioMute:c.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.MUTE_ALL_REQUEST,d)},buildModeratorMuteRequest:function(b,c,d,e){var f={transId:b.toString(),participantId:c,mediaType:d,mute:e.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_MUTE_REQUEST,f)},buildDisconnectParticipantRequest:function(b,c){var d={transId:b.toString(),participantId:c};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.DISCONNECT_PARTICIPANT_REQUEST,d)},buildLocalMuteEvent:function(b,c,d){var e={transId:b.toString(),participantId:c,audioMute:d.toString(),videoMute:"false"};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.LOCAL_MUTE_EVENT,e)},buildTerminateMeetingRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.TERMINATE_MEETING_REQUEST,c)},buildStartModerationRequest:function(b,c){var d={transId:b.toString()};return a.Base.Utils.isDefined(c)&&(d.pin=c),this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.START_MODERATION_REQUEST,d)},buildSendChatMessage:function(b,c,d){var e={transId:b.toString(),text:c.toString(),participantId:d||"public"};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.CHAT_REQUEST,e)},buildExtendMeetingRequest:function(b,c){var d={transId:b.toString(),additionalTimeInMinutes:c.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.EXTEND_MEETING_REQUEST,d)},buildLockMeetingRequest:function(b,c){var d={transId:b.toString(),lock:c.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.LOCK_MEETING_REQUEST,d)},buildCurrentLayoutRequest:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.CURRENT_LAYOUT_REQUEST,c)},buildChangeLayoutGeometryRequest:function(b,c){var d={transId:b.toString(),geometry:c};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_GEOMETRY_REQUEST,d)},buildChangeLayoutTextOverlayRequest:function(b,c){var d={transId:b.toString(),textOverlay:c.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_OVERLAY_REQUEST,d)},buildChangeLayoutSelfSeeRequest:function(b,c){var d={transId:b.toString(),enableSelfSee:c.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_SELF_SEE_REQUEST,d)},buildSetRecordingRequest:function(b,c,d,e){var f={transId:b.toString(),recording:c};return a.Base.Utils.isDefined(d)&&(f.name=d),a.Base.Utils.isDefined(e)&&(f.description=e),this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.RECORDING_REQUEST,f)},buildVideoPinRequest:function(b,c,d,e,f,g){var h={transId:b.toString(),destXCord:f.toString(),destYCord:g.toString()};return a.Base.Utils.isDefined(c)?h.sourceParticipantId=c.toString():a.Base.Utils.isDefined(d)&&a.Base.Utils.isDefined(e)&&(h.sourceXCord=d.toString(),h.sourceYCord=e.toString()),this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.VIDEO_PIN_REQUEST,h)},buildRaiseHandRequest:function(b,c){var d={transId:b.toString(),action:c};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.RAISE_HAND_REQUEST,d)},buildModeratorLowerHandRequest:function(b,c,d){var e={transId:b.toString(),participantId:c.toString(),unmuteAudio:d.toString()};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_LOWER_HAND_REQUEST,e)},buildAdmissionRequest:function(b,c){var d={transId:b.toString()};return a.Base.Utils.isDefined(c)&&(d.passcode=c),this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.ADMISSION_REQUEST,d)},buildModeratorAdmissionRequest:function(b,c,d){var e={transId:b.toString(),participantId:c,action:d};return this._wrapParams(a.Providers.UCCP.UCCPMessageTypes.MODERATOR_ADMISSION_REQUEST,e)},_wrapParams:function(a,b){return{protocolType:"UCCP",name:a,params:b}}},a.Providers.UCCP.UCCPMessageBuilder=b}(AvayaClientServices),function(a){"use strict";function b(){this._parsers={}}b.prototype={parse:function(a){return this._parsers[a.name]?this._parsers[a.name].parse(a):a},register:function(a,b){this._parsers[a]=b}},a.Providers.UCCP.UCCPMessageParser=b}(AvayaClientServices),function(a){"use strict";var b={HANDSHAKE_REQUEST:"handshakeRequest",HANDSHAKE_RESPONSE:"handshakeResponse",SUBSCRIBE_MEETING_INFO_REQUEST:"subscribeMeetingInfoRequest",SUBSCRIBE_MEETING_INFO_RESPONSE:"subscribeMeetingInfoResponse",SUBSCRIBE_ROSTER_REQUEST:"subscribeRosterRequest",SUBSCRIBE_ROSTER_RESPONSE:"subscribeRosterResponse",SUBSCRIBE_ACTIVE_TALKER_REQUEST:"subscribeActiveTalkerRequest",SUBSCRIBE_ACTIVE_TALKER_RESPONSE:"subscribeActiveTalkerResponse",SUBSCRIBE_PERMISSIONS_REQUEST:"subscribePermissionsRequest",SUBSCRIBE_PERMISSIONS_RESPONSE:"subscribePermissionsResponse",SUBSCRIBE_SLIDER_REQUEST:"subscribeSliderRequest",SUBSCRIBE_SLIDER_RESPONSE:"subscribeSliderResponse",SUBSCRIBE_MEETING_NOTE_REQUEST:"subscribeMeetingNoteRequest",SUBSCRIBE_MEETING_NOTE_RESPONSE:"subscribeMeetingNoteResponse",SUBSCRIBE_WEB_COLLAB_REQUEST:"subscribeWebCollabRequest",SUBSCRIBE_WEB_COLLAB_RESPONSE:"subscribeWebCollabResponse",SUBSCRIBE_AVAILABLE_LAYOUTS_REQUEST:"subscribeAvailableLayoutsRequest",SUBSCRIBE_AVAILABLE_LAYOUTS_RESPONSE:"subscribeAvailableLayoutsResponse",START_MODERATION_REQUEST:"startModerationRequest",START_MODERATION_RESPONSE:"startModerationResponse",TERMINATE_MEETING_REQUEST:"terminateMeetingRequest",TERMINATE_MEETING_RESPONSE:"terminateMeetingResponse",DIRECTORY_LOOKUP_REQUEST:"directoryLookupRequest",DIRECTORY_LOOKUP_NOTE_RESPONSE:"directoryLookupResponse",DIALOUT_REQUEST:"dialoutRequest",DIALOUT_RESPONSE:"dialoutResponse",DIALOUT_CANCEL_REQUEST:"dialoutCancelRequest",DIALOUT_CANCEL_RESPONSE:"dialoutCancelResponse",DISCONNECT_PARTICIPANT_REQUEST:"disconnectParticipantRequest",DISCONNECT_PARTICIPANT_RESPONSE:"disconnectParticipantResponse",LECTURE_MODE_START_REQUEST:"lectureModeStartRequest",LECTURE_MODE_START_RESPONSE:"lectureModeStartResponse",LECTURE_MODE_STOP_REQUEST:"lectureModeStopRequest",LECTURE_MODE_STOP_RESPONSE:"lectureModeStopResponse",RECORDING_REQUEST:"recordingRequest",RECORDING_RESPONSE:"recordingResponse",LOCK_MEETING_REQUEST:"lockMeetingRequest",LOCK_MEETING_RESPONSE:"lockMeetingResponse",EXTEND_MEETING_REQUEST:"extendMeetingRequest",EXTEND_MEETING_RESPONSE:"extendMeetingResponse",MUTE_ALL_REQUEST:"muteAllRequest",MUTE_ALL_RESPONSE:"muteAllResponse",MODERATOR_MUTE_REQUEST:"moderatorMuteRequest",MODERATOR_MUTE_RESPONSE:"moderatorMuteResponse",RAISE_HAND_REQUEST:"raiseHandRequest",RAISE_HAND_RESPONSE:"raiseHandResponse",MODERATOR_LOWER_HAND_REQUEST:"moderatorLowerHandRequest",MODERATOR_LOWER_HAND_RESPONSE:"moderatorLowerHandResponse",CURRENT_LAYOUT_REQUEST:"currentLayoutRequest",CURRENT_LAYOUT_RESPONSE:"currentLayoutResponse",CHANGE_LAYOUT_GEOMETRY_REQUEST:"changeLayoutGeometryRequest",CHANGE_LAYOUT_GEOMETRY_RESPONSE:"changeLayoutGeometryResponse",CHANGE_LAYOUT_SELF_SEE_REQUEST:"changeLayoutSelfSeeRequest",CHANGE_LAYOUT_SELF_SEE_RESPONSE:"changeLayoutSelfSeeResponse",VIDEO_PIN_REQUEST:"videoPinRequest",VIDEO_PIN_RESPONSE:"videoPinResponse",FECC_REQUEST:"feccRequest",FECC_RESPONSE:"feccResponse",CHANGE_LAYOUT_OVERLAY_REQUEST:"changeLayoutTextOverlayRequest",CHANGE_LAYOUT_OVERLAY_RESPONSE:"changeLayoutTextOverlayResponse",CHAT_REQUEST:"chatRequest",CHAT_RESPONSE:"chatResponse",ADD_MEETING_NOTE_REQUEST:"addMeetingNoteRequest",ADD_MEETING_NOTE_RESPONSE:"addMeetingNoteResponse",UPDATE_MEETING_NOTE_REQUEST:"updateMeetingNoteRequest",UPDATE_MEETING_NOTE_RESPONSE:"updateMeetingNoteResponse",DELETE_MEETING_NOTE_REQUEST:"deleteMeetingNoteRequest",DELETE_MEETING_NOTE_RESPONSE:"deleteMeetingNoteResponse",LOGGING_REQUEST:"loggingRequest",LOGGING_RESPONSE:"loggingResponse",ADMISSION_REQUEST:"admissionRequest",ADMISSION_RESPONSE:"admissionResponse",MODERATOR_ADMISSION_REQUEST:"moderatorAdmissionRequest",MODERATOR_ADMISSION_RESPONSE:"moderatorAdmissionResponse",MOBILE_LINK_ID_REQUEST:"mobileLinkIdRequest",MOBILE_LINK_ID_RESPONSE:"mobileLinkIdResponse",MOBILE_LINK_ROOM_SYSTEM_LIST_REQUEST:"mobileLinkRoomSystemListRequest",MOBILE_LINK_ROOM_SYSTEM_LIST_RESPONSE:"mobileLinkRoomSystemListResponse",MOBILE_LINK_CHOOSE_ROOM_SYSTEM_REQUEST:"mobileLinkChooseRoomSystemRequest",MOBILE_LINK_CHOOSE_ROOM_SYSTEM_RESPONSE:"mobileLinkChooseRoomSystemResponse",MOBILE_LINK_MANUAL_CHOOSE_ROOM_SYSTEM_REQUEST:"mobileLinkManualChooseRoomSystemRequest",MOBILE_LINK_MANUAL_CHOOSE_ROOM_SYSTEM_RESPONSE:"mobileLinkManualChooseRoomSystemResponse",MOBILE_LINK_DISCONNECT_REQUEST:"mobileLinkDisconnectRequest",MOBILE_LINK_DISCONNECT_RESPONSE:"mobileLinkDisconnectResponse",SIGN_IN_REQUEST:"signinRequest",SIGN_IN_RESPONSE:"signinResponse",DIAL_IN_INFO_REQUEST:"dialInInfoRequest",DIAL_IN_INFO_RESPONSE:"dialInInfoResponse",UNSUBSCRIBE_MEETING_INFO_REQUEST:"unsubscribeMeetingInfoRequest",UNSUBSCRIBE_MEETING_INFO_RESPONSE:"unsubscribeMeetingInfoResponse",UNSUBSCRIBE_ROSTER_REQUEST:"unsubscribeRosterRequest",UNSUBSCRIBE_ROSTER_RESPONSE:"unsubscribeRosterResponse",UNSUBSCRIBE_SLIDER_REQUEST:"unsubscribeSliderRequest",UNSUBSCRIBE_SLIDER_RESPONSE:"unsubscribeSliderResponse",UNSUBSCRIBE_ACTIVE_TALKER_REQUEST:"unsubscribeActiveTalkerRequest",UNSUBSCRIBE_ACTIVE_TALKER_RESPONSE:"unsubscribeActiveTalkerResponse",UNSUBSCRIBE_PERMISSIONS_REQUEST:"unsubscribePermissionsRequest",UNSUBSCRIBE_PERMISSIONS_RESPONSE:"unsubscribePermissionsResponse",UNSUBSCRIBE_MEETING_NOTE_REQUEST:"unsubscribeMeetingNoteRequest",UNSUBSCRIBE_MEETING_NOTE_RESPONSE:"unsubscribeMeetingNoteResponse",UNSUBSCRIBE_WEB_COLLAB_REQUEST:"unsubscribeWebCollabRequest",UNSUBSCRIBE_WEB_COLLAB_RESPONSE:"unsubscribeWebCollabResponse",UNSUBSCRIBE_AVAILABLE_LAYOUTS_REQUEST:"unsubscribeAvailableLayoutsRequest",UNSUBSCRIBE_AVAILABLE_LAYOUTS_RESPONSE:"unsubscribeAvailableLayoutsResponse",PARTICIPANT_JOINED_EVENT:"participantJoinedEvent",PARTICIPANT_LEFT_EVENT:"participantLeftEvent",ACTIVE_TALKER_CHANGED_EVENT:"activeTalkerChangedEvent",PERMISSIONS_CHANGED_EVENT:"permissionsChangedEvent",CHAT_EVENT:"chatEvent",MEETING_NOTE_ADDED_EVENT:"meetingNoteAddedEvent",MEETING_NOTE_UPDATED_EVENT:"meetingNoteUpdatedEvent",MEETING_NOTE_DELETED_EVENT:"meetingNoteDeletedEvent",LOGGING_EVENT:"loggingEvent",MEETING_INFO_CHANGED_EVENT:"meetingInfoChangedEvent",MEETING_TERMINATION_IN_PROGRESS_EVENT:"meetingTerminationInProgressEvent",NEW_SLIDE_EVENT:"newSlideEvent",PARTICIPANT_INFO_CHANGED_EVENT:"participantInfoChangedEvent",USER_MOVED_EVENT:"userMovedEvent",DIALOUT_COMPLETED_EVENT:"dialoutCompletedEvent",LOCAL_MUTE_EVENT:"localMuteEvent",AVAILABLE_LAYOUTS_CHANGED_EVENT:"availableLayoutsChangedEvent",CURRENT_LAYOUT_CHANGED_EVENT:"currentLayoutChangedEvent",RECORDING_FAILED_EVENT:"recordingFailedEvent",MODERATOR_ADMISSION_EVENT:"moderatorAdmissionEvent",MODERATOR_ADMISSION_CANCELED_EVENT:"moderatorAdmissionCanceledEvent",WEB_COLLAB_CHANGED_EVENT:"webCollabChangedEvent"};a.Providers.UCCP.UCCPMessageTypes=b}(AvayaClientServices),function(a,b){"use strict";function c(){a.Providers.UCCP.AbstractUCCPProvider.call(this),this._config=void 0,this._providers=[],this._selectedProvider=void 0}c.prototype=Object.create(a.Providers.UCCP.AbstractUCCPProvider.prototype),c.prototype.start=function(a){return b.isEmptyObject(a)||this._config===a||(this._config=a),this._selectedProvider=this._determineServerVersion(),this._selectedProvider.start(a)},c.prototype.stop=function(){return this._selectedProvider.stop()},c.prototype._determineServerVersion=function(){return this._providers[0].provider},c.prototype.getSelectedProvider=function(){return this._selectedProvider},c.prototype.registerUCCPProvider=function(a,b){return this._providers.push({version:a,provider:b})},c.prototype.sendHandshake=function(a){return this._selectedProvider.sendHandshake(a)},c.prototype.subscribeMeetingInfo=function(a){return this._selectedProvider.subscribeMeetingInfo(a)},c.prototype.startRecording=function(a,b,c){return this._selectedProvider.startRecording(a,b,c)},c.prototype.stopRecording=function(a){return this._selectedProvider.stopRecording(a)},c.prototype.pauseRecording=function(a){return this._selectedProvider.pauseRecording(a)},c.prototype.resumeRecording=function(a){return this._selectedProvider.resumeRecording(a)},c.prototype.subscribeRoster=function(a){return this._selectedProvider.subscribeRoster(a)},c.prototype.subscribeActiveTalker=function(a){return this._selectedProvider.subscribeActiveTalker(a)},c.prototype.subscribePermissions=function(a){return this._selectedProvider.subscribePermissions(a)},c.prototype.subscribeSlider=function(a){return this._selectedProvider.subscribeSlider(a)},c.prototype.subscribeMeetingNote=function(a){return this._selectedProvider.subscribeMeetingNote(a)},c.prototype.subscribeWebCollab=function(a){return this._selectedProvider.subscribeWebCollab(a)},c.prototype.subscribeAvailableLayouts=function(a){return this._selectedProvider.subscribeAvailableLayouts(a)},c.prototype.raiseHand=function(a){return this._selectedProvider.raiseHand(a)},c.prototype.setAsLecturer=function(a,b){return this._selectedProvider.setAsLecturer(a,b)},c.prototype.unsetAsLecturer=function(a){return this._selectedProvider.unsetAsLecturer(a)},c.prototype.disconnectParticipant=function(a,b){return this._selectedProvider.disconnectParticipant(a,b)},c.prototype.setLocked=function(a,b){return this._selectedProvider.setLocked(a,b)},c.prototype.setVideoLayout=function(a,b){return this._selectedProvider.setVideoLayout(a,b)},c.prototype.setVideoLayoutSelfSee=function(a,b){return this._selectedProvider.setVideoLayoutSelfSee(a,b)},c.prototype.setVideoLayoutTextOverlay=function(a,b){return this._selectedProvider.setVideoLayoutTextOverlay(a,b)},c.prototype.getCurrentVideoLayout=function(a){return this._selectedProvider.getCurrentVideoLayout(a)},c.prototype.muteUnmute=function(a,b,c,d){return this._selectedProvider.muteUnmute(a,b,c,d)},c.prototype.muteUnmuteAll=function(a,b){return this._selectedProvider.muteUnmuteAll(a,b)},c.prototype.sendLocalMuteEvent=function(a,b,c){return this._selectedProvider.sendLocalMuteEvent(a,b,c)},c.prototype.terminateConference=function(a){return this._selectedProvider.terminateConference(a)},c.prototype.requestToBecomeModerator=function(a,b){return this._selectedProvider.requestToBecomeModerator(a,b)},c.prototype.sendChatMessage=function(a,b,c){return this._selectedProvider.sendChatMessage(a,b,c)},c.prototype.setContinuation=function(a,b){
return this._selectedProvider.setContinuation(a,b)},c.prototype.raiseLowerHand=function(a,b){return this._selectedProvider.raiseLowerHand(a,b)},c.prototype.moderatorLowerHand=function(a,b,c){return this._selectedProvider.moderatorLowerHand(a,b,c)},c.prototype.sendAdmissionRequest=function(a,b){return this._selectedProvider.sendAdmissionRequest(a,b)},c.prototype.moderatorAdmission=function(a,b,c){return this._selectedProvider.moderatorAdmission(a,b,c)},a.Providers.UCCP.UCCPProvider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(a,b,c){this._networkProvider=a,this._messageBuilder=b,this._messageParser=c,this._uccpProvider={}}c.prototype={getUCCPProvider:function(){if(b.isEmptyObject(this._uccpProvider)){var c=this._createUCCP1Provider();this._uccpProvider=new a.Providers.UCCP.UCCPProvider,this._uccpProvider.registerUCCPProvider(1,c)}return this._uccpProvider},_createUCCP1Provider:function(){return new a.Providers.UCCP.UCCP1Provider(this._networkProvider,this._messageBuilder,this._messageParser)}},a.Providers.UCCP.UCCPProviderFactory=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(b,c,d,e){a.Providers.Interfaces.CollaborationProvider.call(this),this._networkProvider=b,this._wcsEventsParser=c,this._wcsBinaryParser=d,this._wcsMessageBuilder=e,this._config={}}b.prototype=Object.create(a.Providers.Interfaces.CollaborationProvider.prototype),b.prototype.onCredentialsRequired=function(a){var b;this._config.credentialProvider.onAuthenticationChallenge(b,function(b){this.onCredentialsRetrieved(b,a)}.bind(this))},b.prototype.onCredentialsRetrieved=function(a,b){},b.prototype.addShape=function(a){},b.prototype.addCircle=function(a){},b.prototype.getParticipants=function(){},a.Providers.WCS.AbstractWCSProvider=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={_validateTagLength:function(b,c){var d=0;switch(c){case a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG:d=14;break;case a.Providers.WCS.WCSScreenSharingTagTypes.CURSOR_TAG:d=13;break;case a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG:d=14;break;case a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG:d=1}return b>=d?!0:(a.Base.Logger.warn("Byte array size: {0} < Min Tag length: {1} Tag type: {2}",b,d,c),!1)},_get64bitNumber:function(a){var b=a.readBytes(8),c=b.readUnsignedInt(),d=b.readUnsignedInt();return 4294967296*c+d}},a.Providers.WCS.AbstractBinaryParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractBinaryParser.prototype),b.prototype.parse=function(b){if(this._validateTagLength(b.length,a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG)){var c=new a.Providers.WCS.ScreenSharingBlockTag;if(c.width=b.readShort(),c.height=b.readShort(),c.x=b.readShort(),c.y=b.readShort(),c.imageType=b.readByte(),c.length=b.readInt(),c.length===b.getBytesAvailable())c.data=b.readBytes(c.length);else{if(c.length+4!==b.getBytesAvailable())return void a.Base.Logger.error("Invalid type "+a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG+". Tried to read: "+c.length+". BytesAvailable "+b.getBytesAvailable());b.readInt();c.data=b.readBytes(c.length)}return c}},a.Providers.WCS.BlockTagBinaryParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractBinaryParser.prototype),b.prototype.parse=function(b){if(this._validateTagLength(b.length,a.Providers.WCS.WCSScreenSharingTagTypes.CURSOR_TAG)){var c=new a.Providers.WCS.ScreenSharingCursorTag;return c.x=b.readShort(),c.y=b.readShort(),c.creationTime=this._get64bitNumber(b),c}},a.Providers.WCS.CursorTagBinaryParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractBinaryParser.prototype),b.prototype.parse=function(b){return this._validateTagLength(b.length,a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG)?new a.Providers.WCS.ScreenSharingEndTag:void 0},a.Providers.WCS.EndTagBinaryParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractBinaryParser.prototype),b.prototype.parse=function(b){if(this._validateTagLength(b.length,a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG)){var c=new a.Providers.WCS.ScreenSharingStartTag;return c.isKeyFrame=Boolean(b.readByte()),c.width=b.readShort(),c.height=b.readShort(),c.creationTime=this._get64bitNumber(b),a.Base.Logger.debug("Start Tag [keyframe={0}]: {1}x{2}",c.isKeyFrame,c.width,c.height),c}},a.Providers.WCS.StartTagBinaryParser=b}(AvayaClientServices),function(a){"use strict";function b(a){this.type=a}a.Providers.WCS.AbstractEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractEvent.call(this,b),c&&(this.from=c.from,this.fromname=c.fromname,this.eventId=c.eventId,this.senderId=c.senderId,this.senderName=c.senderName,this.time=c.time,this.useragent=c.useragent,this.wsConnectionId=c.wsConnectionId,this.data={})}b.prototype=Object.create(a.Providers.WCS.AbstractEvent),a.Providers.WCS.AbstractLiveEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.ADD_NOTE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.AddNoteEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e){this.noteType=a,this.text=b,this.meetingOwner=c,this.isPersonal=d,e&&(this.targetId=e)}b.prototype={},a.Providers.WCS.AddNoteEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.ADD_WHITEBOARD),this.liveEventCommonData=b}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.AddWhiteboardEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.ALLOW_PRESENTING),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.AllowPresentingEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b){this.targetId=a,this.targetName=b}b.prototype={},a.Providers.WCS.AllowPresentingEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.CLEAR_DRAWING),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.ClearDrawingEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b){this.groupId=a,this.layerType=b}b.prototype={},a.Providers.WCS.ClearDrawingEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DELETE_NOTE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DeleteNoteEvent=b}(AvayaClientServices),function(a){"use strict";function b(a){this.noteId=a}b.prototype={},a.Providers.WCS.DeleteNoteEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DELETE_SELECTION),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DeleteSelectionEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e){this.groupId=a,this.layerType=b,this.shapeId=c,this.selectionX=d,this.selectionY=e}b.prototype={},a.Providers.WCS.DeleteSelectionEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DELETE_WHITEBOARD),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DeleteWhiteboardEvent=b}(AvayaClientServices),function(a){"use strict";function b(a){this.id=a}b.prototype={},a.Providers.WCS.DeleteWhiteboardEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.REQUEST_CONTROL),this.liveEventCommonData=b}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DenyControlEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DENY_PRESENTING),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DenyPresentingEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b){this.targetId=a,this.targetName=b}b.prototype={},a.Providers.WCS.DenyPresentingEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DRAW_CIRCLE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DrawCircleEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j,k,l){this.alpha=a,b&&(this.fillColor=b),c&&(this.color=c),k&&(this.filled=k),l&&(this.contour=l),this.groupId=d,this.layerType=e,this.width=f,this.x0=g,this.x1=h,this.y0=i,this.y1=j}b.prototype={},a.Providers.WCS.DrawCircleEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DRAW_SHAPE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DrawShapeEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i,j){a&&(this.alpha=a),b&&(this.fillColor=b),c&&(this.color=c),d&&(this.groupId=d),e&&(this.layerType=e),(f||0===f)&&(this.width=f),(g||0!==g.length)&&(this.l=g),(h||0!==h.length)&&(this.m=h),j&&(this.contour=j),i&&(this.filled=i)}b.prototype={},a.Providers.WCS.DrawShapeEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.DRAW_TEXT),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.DrawTextEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g){this.fillColor=a,this.fontSize=b,this.groupId=c,this.layerType=d,this.text=e||"",this.x=f,this.y=g}b.prototype={},a.Providers.WCS.DrawTextEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.EJECT_PARTICIPANT),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.EjectParticipantEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c){this.targetId=a,this.targetName=b,this.targetParticipantId=c}b.prototype={},a.Providers.WCS.EjectParticipantEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.END_CONTROL),this.liveEventCommonData=b}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.EndControlEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.END_DRAW_SHAPE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.EndDrawShapeEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b){this.groupId=a,this.layerType=b}b.prototype={},a.Providers.WCS.EndDrawShapeEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.END_MEETING),this.liveEventCommonData=b}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.EndMeetingEvent=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.END_SCREEN_SHARING,b)}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.EndScreenSharingEvent=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.END_WHITEBOARD),this.liveEventCommonData=b}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.EndWhiteboardEvent=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.ERROR),this.data=b}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.ErrorEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this.code=a,this.message=b,this.requestId=c,this.wsConnectionId=d}b.prototype={},a.Providers.WCS.ErrorEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractEvent.call(this,a.Providers.WCS.WCSEventTypes.FRAME_REPORT),this.data=b}b.prototype=Object.create(a.Providers.WCS.AbstractEvent.prototype),a.Providers.WCS.FrameReportEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f){this.droppedFrames=a,this.droppedFramesPercentageRounded=b,this.period=c,this.successfulFrames=d,this.timeEnd=e,this.timeStart=f}b.prototype={},a.Providers.WCS.FrameReportEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.GRANT_CONTROL),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.GrantControlEvent=b}(AvayaClientServices),function(a){"use strict";function b(a){this.osType=a}b.prototype={},a.Providers.WCS.GrantControlEventData=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g,h){this.attendeeId=a,this.clientVersion=b,this.privateChatSupported=c,this.startTime=d,this.userAgent=e,this.userIp=f,this.userName=g,this.wsConnectionId=h}b.prototype={},a.Providers.WCS.LiveAttendeeEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractEvent.call(this,a.Providers.WCS.WCSEventTypes.LIVE_ATTENDEES),this.data=b}b.prototype=Object.create(a.Providers.WCS.AbstractEvent.prototype),a.Providers.WCS.LiveAttendeesEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g,h,i){this.from=a,this.fromname=b,this.eventId=c,this.senderId=d,this.senderName=e,this.time=f,this.type=g,this.useragent=h,this.wsConnectionId=i}a.Providers.WCS.LiveEventCommonData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractEvent.call(this,a.Providers.WCS.WCSEventTypes.LIVE_SESSION),this.data=b}b.prototype=Object.create(a.Providers.WCS.AbstractEvent.prototype),a.Providers.WCS.LiveSessionEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g){this.requestId=a,this.idleTimeout=b,this.serverTimeDiff=c,this.wsConnectionId=d,this.meeting=e,this.liveAttendee=f,this.features=g}b.prototype={},a.Providers.WCS.LiveSessionEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.MOVE_SELECTION),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.MoveSelectionEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g){this.groupId=a,this.layerType=b,this.shapeId=c,this.moveToX=d,this.moveToY=e,this.selectionX=f,this.selectionY=g}b.prototype={},a.Providers.WCS.MoveSelectionEventData=b}(AvayaClientServices),function(a){"use strict";function b(b){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.PAUSE_SCREEN_SHARING,b)}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.PauseScreenSharingEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.SEND_DOCUMENT),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.SendDocumentEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c){this.filename=a,this.filesize=b,this.fileurl=c}b.prototype={},a.Providers.WCS.SendDocumentEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.SEND_MESSAGE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.SendMessageEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this.message=a,this.targetName=b,this.isPrivate=c,d&&(this.targetId=d)}b.prototype={},a.Providers.WCS.SendMessageEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.SEND_SLIDE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.SendSlideEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g,h){this.count=a,this.index=b,this.title=c,this.presentationId=d,this.slideUrl=e,this.slideBaseUrl=f,this.tocUrl=g,this.includeToc=h}b.prototype={},a.Providers.WCS.SendSlideEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.SET_NOTE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.SetNoteEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f){this.noteId=a,this.noteType=b,this.text=c,this.attendeeId=d,this.isPersonal=e,f&&(this.targetId=f)}b.prototype={},a.Providers.WCS.SetNoteEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.START_DRAW_SHAPE),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.StartDrawShapeEvent=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e){this.alpha=a,this.color=b,this.groupId=c,this.layerType=d,this.width=e}a.Providers.WCS.StartDrawShapeEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.START_MEETING),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.StartMeetingEvent=b}(AvayaClientServices),function(a){"use strict";function b(a){this.userkey=a}b.prototype={},a.Providers.WCS.StartMeetingEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.START_SCREEN_SHARING,b),this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.StartScreenSharingEvent=b}(AvayaClientServices),function(a){"use strict";function b(a){this.transportVersion=a}b.prototype={},a.Providers.WCS.StartScreenSharingEventData=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.WCS.AbstractLiveEvent.call(this,a.Providers.WCS.WCSEventTypes.START_WHITEBOARD),this.liveEventCommonData=b,this.data=c}b.prototype=Object.create(a.Providers.WCS.AbstractLiveEvent.prototype),a.Providers.WCS.StartWhiteboardEvent=b}(AvayaClientServices),function(a){"use strict";function b(a){this.id=a}b.prototype={},a.Providers.WCS.StartWhiteboardEventData=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={parse:function(a){throw new Error("Method not implemented!")},colorIntToHex:function(a){return"#"+parseInt(a).toString(16).toUpperCase()},colorHexToInt:function(a){return parseInt("0x".concat(a.slice(1))).toString()},stringToCamel:function(a){return a.replace(/(_[a-z])/g,function(a){return a.toUpperCase().replace("_","")})}},a.Providers.WCS.AbstractParser=b}(AvayaClientServices=AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractParser.prototype),b.prototype.parse=function(b){var c={};c.droppedFrames=a.Base.Utils.queryJSONObject(b,"dropped_frames[0]._text"),c.droppedFramesPercentageRounded=a.Base.Utils.queryJSONObject(b,"dropped_frames_percentage_rounded[0]._text"),c.period=a.Base.Utils.queryJSONObject(b,"period[0]._text"),c.successfulFrames=a.Base.Utils.queryJSONObject(b,"successful_frames[0]._text"),c.timeEnd=a.Base.Utils.queryJSONObject(b,"time_end[0]._text"),c.timeStart=a.Base.Utils.queryJSONObject(b,"time_start[0]._text");var d=new a.Providers.WCS.FrameReportEventData(c.droppedFrames,c.droppedFramesPercentageRounded,c.period,c.successfulFrames,c.timeEnd,c.timeStart);return new a.Providers.WCS.FrameReportEvent(d)},a.Providers.WCS.FrameReportParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractParser.prototype),b.prototype.parse=function(b){for(var c={liveAttendees:[]},d=0;d<b.live_attendee.length;d++){var e=a.Base.Utils.queryJSONObject(b.live_attendee[d],"attendee_id[0]._text"),f=a.Base.Utils.queryJSONObject(b.live_attendee[d],"client_version[0]._text"),g=a.Base.Utils.queryJSONObject(b.live_attendee[d],"private_chat_supported[0]._text"),h=a.Base.Utils.queryJSONObject(b.live_attendee[d],"start_time[0]._text"),i=a.Base.Utils.queryJSONObject(b.live_attendee[d],"user_agent[0]._text"),j=a.Base.Utils.queryJSONObject(b.live_attendee[d],"user_ip[0]._text"),k=a.Base.Utils.queryJSONObject(b.live_attendee[d],"user_name[0]._text"),l=a.Base.Utils.queryJSONObject(b.live_attendee[d],"ws_connection_id[0]._text");c.liveAttendees.push(new a.Providers.WCS.LiveAttendeeEventData(e,f,g,h,i,j,k,l))}return new a.Providers.WCS.LiveAttendeesEvent(c)},a.Providers.WCS.LiveAttendeesParser=b}(AvayaClientServices),function(a){"use strict";function b(){}var c={whiteboard:"whiteboard_",slide:"slide_"};b.prototype=Object.create(a.Providers.WCS.AbstractParser.prototype),b.prototype.stripCommonData=function(b){var c={};return $.each(b._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),new a.Providers.WCS.LiveEventCommonData(c.from,c.fromname,c.id,c.senderId,c.senderName,c.time,c.type,c.useragent,c.wsConnectionId)},b.prototype.convertGroup=function(a){var b;return $.each(c,function(c,d){return 0===a.indexOf(d)?(b={groupId:parseInt(a.split(d)[1]),layerType:c},!1):void 0}.bind(this)),b?b:void console.error("Unknown group prefix type!")},a.Providers.WCS.LiveEventParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractParser.prototype),b.prototype.parse=function(b){var c={request_id:a.Base.Utils.queryJSONObject(b,"request_id[0]._text"),idle_timeout:a.Base.Utils.queryJSONObject(b,"idle_timeout[0]._text"),ws_connection_id:a.Base.Utils.queryJSONObject(b,"ws_connection_id[0]._text"),server_time_diff:a.Base.Utils.queryJSONObject(b,"server_time_diff[0]._text")},d={},e={attendeeId:a.Base.Utils.queryJSONObject(b,"attendee_id[0]._text"),userName:a.Base.Utils.queryJSONObject(b,"username[0]._text")},f={},g=new a.Providers.WCS.LiveSessionEventData(c.request_id,c.idle_timeout,c.ws_connection_id,c.server_time_diff,d,e,f);return new a.Providers.WCS.LiveSessionEvent(g)},a.Providers.WCS.LiveSessionParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.selection[0]._attr&&$.each(b.selection[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.MoveSelectionEventData(c.groupId,c.layerType,c.id,c.moveToX,c.moveToY,c.selectionX,c.selectionY);return new a.Providers.WCS.MoveSelectionEvent(this.stripCommonData(b),e)},a.Providers.WCS.MoveSelectionParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.PauseScreenSharingEvent(this.stripCommonData(b))},a.Providers.WCS.PauseScreenSharingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};c.filename=a.Base.Utils.queryJSONObject(b,"documentinfo[0]._attr.filename._value"),c.filesize=a.Base.Utils.queryJSONObject(b,"documentinfo[0]._attr.filesize._value"),c.fileurl=a.Base.Utils.queryJSONObject(b,"documentinfo[0]._attr.fileurl._value");var d=new a.Providers.WCS.SendDocumentEventData(c.filename,c.filesize,c.fileurl);return new a.Providers.WCS.SendDocumentEvent(this.stripCommonData(b),d)},a.Providers.WCS.SendDocumentParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};b.message&&(c.message=a.Base.Utils.queryJSONObject(b,"message[0]._text")),c.targetName=a.Base.Utils.queryJSONObject(b,"_attr.target_name._value"),b._attr.target_id?(c.targetId=a.Base.Utils.queryJSONObject(b,"_attr.target_id._value"),c["private"]=!0):c["private"]=!1;var d=new a.Providers.WCS.SendMessageEventData(c.message,c.targetName,c["private"],c.targetId);return new a.Providers.WCS.SendMessageEvent(this.stripCommonData(b),d)},a.Providers.WCS.SendMessageParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={},d=a.Base.Utils.queryJSONObject(b,"slide[0]._attr");c.count=d.count._value,c.index=d.index._value,c.title=d.title._value,c.presentationId=d.presentationid._value,c.slideUrl=d.slideurl._value,c.slideBaseUrl=d.slideurl._value,c.tocUrl=d.toc._value,c.includeToc="true"===d.includetoc._value;var e=new a.Providers.WCS.SendSlideEventData(c.count,c.index,c.title,c.presentationId,c.slideUrl,c.slideBaseUrl,c.tocUrl,c.includeToc);return new a.Providers.WCS.SendSlideEvent(this.stripCommonData(b),e)},a.Providers.WCS.SendSlideParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};b.note&&(c.type=a.Base.Utils.queryJSONObject(b,"note[0]._attr.type._value"),c.text=a.Base.Utils.queryJSONObject(b,"note[0]._text"),c.noteId=a.Base.Utils.queryJSONObject(b,"note[0]._attr.event_id._value"),c.attendeeId=a.Base.Utils.queryJSONObject(b,"note[0]._attr.attende_id._value")),b._attr.target_id?(c.targetId=a.Base.Utils.queryJSONObject(b,"_attr.target_id._value"),c.personal=!0):c.personal=!1;var d=new a.Providers.WCS.SetNoteEventData(c.noteId,c.type,c.text,c.attendeeId,c.personal,c.targetId);return new a.Providers.WCS.SetNoteEvent(this.stripCommonData(b),d)},a.Providers.WCS.SetNoteParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.lines[0]._attr&&$.each(b.lines[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),c.color&&(c.color=this.colorIntToHex(c.color)),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.StartDrawShapeEventData(c.alpha,c.color,c.groupId,c.layerType,c.width);return new a.Providers.WCS.StartDrawShapeEvent(this.stripCommonData(b),e)},a.Providers.WCS.StartDrawShapeParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c="173621",d=new a.Providers.WCS.StartMeetingEventData(c);return new a.Providers.WCS.StartMeetingEvent(this.stripCommonData(b),d)},a.Providers.WCS.StartMeetingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c=a.Base.Utils.queryJSONObject(b,"transport_version[0]._text"),d=new a.Providers.WCS.StartScreenSharingEventData(c);return new a.Providers.WCS.StartScreenSharingEvent(this.stripCommonData(b),d)},a.Providers.WCS.StartScreenSharingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c=a.Base.Utils.queryJSONObject(b,"whiteboard[0]._attr.index._value"),d=new a.Providers.WCS.StartWhiteboardEventData(c);return new a.Providers.WCS.StartWhiteboardEvent(this.stripCommonData(b),d)},a.Providers.WCS.StartWhiteboardParser=b}(AvayaClientServices),function(a){"use strict";function b(a){this._position=0,this._buffer=a,this.length=this._buffer.byteLength}b.prototype={getBuffer:function(){return this._buffer},setPosition:function(a){this._position=a},getPosition:function(){return this._position},getBytesAvailable:function(){return this._buffer.byteLength-this._position},readBytes:function(b){var c=new a.Providers.WCS.ByteArray(this._buffer.slice(this._position,this._position+b));return this._position+=b,c},readByte:function(){var a=new Int8Array(this._buffer.slice(this._position,this._position+1));return this._position++,a[0]},readUnsignedInt:function(){var a=new DataView(this._buffer.slice(this._position,this._position+4));return this._position+=4,a.getUint32(0)},readShort:function(){var a=new DataView(this._buffer.slice(this._position,this._position+2));return this._position+=2,a.getInt16(0)},readInt:function(){var a=new DataView(this._buffer.slice(this._position,this._position+4));return this._position+=4,a.getInt32(0)}},a.Providers.WCS.ByteArray=b}(AvayaClientServices),function(a){"use strict";function b(){this._bitmapElements=[],this.width=0,this.height=0,this.isKeyFrame=!1}b.prototype={setStartTag:function(a){return this.width=a.width,this.height=a.height,this.isKeyFrame=a.isKeyFrame,this},addBitmapElement:function(a){return this._bitmapElements.push(a),this}},a.Providers.WCS.Frame=b}(AvayaClientServices),function(a){"use strict";function b(a){this.x=a.x,this.y=a.y,this.width=a.width,this.height=a.height,this.bitmapData=a.data.getBuffer(),this.imageType=a.imageType}b.prototype={},a.Providers.WCS.FrameBitmapLoader=b}(AvayaClientServices),function(a){"use strict";function b(){this._frame=void 0}b.prototype={processTag:function(b,c){switch(b.type){case a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG:this._startFrame(b);break;case a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG:this._addBinaryBlock(b);break;case a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG:this._endFrame(c)}},_startFrame:function(b){a.Base.Logger.debug("Add start Tag"),this._frame=new a.Providers.WCS.Frame,this._frame.setStartTag(b)},_addBinaryBlock:function(b){if(b.data.length>0){var c=new a.Providers.WCS.FrameBitmapLoader(b);this._frame.addBitmapElement(c)}},_endFrame:function(b){a.Base.Logger.debug("Add End Tag - end Frame",this._frame._bitmapElements.length),b(this._frame),this._frame=void 0}},a.Providers.WCS.FrameBuilder=b}(AvayaClientServices),function(a){"use strict";var b={JPEG:0,PNG:1};a.Providers.WCS.ScreenSharingImageTypes=b}(AvayaClientServices),function(a){"use strict";var b={INTRA_FRAME:0,KEY_FRAME:1};a.Providers.WCS.ScreenSharingKeyFrameTypes=b}(AvayaClientServices),function(a){"use strict";function b(){}a.Providers.WCS.ScreenSharingTagEncoder=b,a.Providers.WCS.ScreenSharingTagEncoder.prototype={encodeTag:function(b){switch(b.type){
case a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG:return this._encodeStartFrame(b);case a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG:return this._encodeBinaryBlock(b);case a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG:return this._encodeEndFrame()}},_encodeStartFrame:function(b){var c=new ArrayBuffer(14),d=new DataView(c);d.setInt8(0,a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG),d.setInt8(1,b.isKeyFrame?a.Providers.WCS.ScreenSharingKeyFrameTypes.KEY_FRAME:a.Providers.WCS.ScreenSharingKeyFrameTypes.INTRA_FRAME),d.setInt16(2,b.width),d.setInt16(4,b.height);for(var e=this._getCurrentTimeStamp(b.creationTime),f=0;f<e.length;f++)d.setInt8(6+f,e[f]);return c},_encodeBinaryBlock:function(b){var c=new ArrayBuffer(18+b.data.length),d=new Uint8Array(c),e=new DataView(c);return e.setInt8(0,a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG),e.setInt16(1,b.width),e.setInt16(3,b.height),e.setInt16(5,b.x),e.setInt16(7,b.y),e.setInt8(9,b.imageType),0===b.length?e.setInt32(10,b.data.length):e.setInt32(10,b.length),e.setInt32(14,0),d.set(b.data,18),c},_encodeEndFrame:function(){var b=new ArrayBuffer(1),c=new DataView(b);return c.setInt8(0,a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG),b},_getCurrentTimeStamp:function(a){var b=this._longToByteArray(a);return b.reverse(),b},_longToByteArray:function(a){for(var b=[0,0,0,0,0,0,0,0],c=0;c<b.length;c++){var d=255&a;b[c]=d,a=(a-d)/256}return b}}}(AvayaClientServices),function(a){"use strict";var b={START_TAG:0,BLOCK_TAG:1,CURSOR_TAG:2,END_TAG:3};a.Providers.WCS.WCSScreenSharingTagTypes=b}(AvayaClientServices),function(a){"use strict";function b(a){this.type=a}a.Providers.WCS.WCSSharingTag=b}(AvayaClientServices),function(a){"use strict";function b(){this._parsers={}}b.prototype={parse:function(b){var c;if(b.byteLength>0){var d=new a.Providers.WCS.ByteArray(b),e=d.readByte(),f=e>>4,g=15&e;this._parsers[f]&&this._parsers[f][g]&&(c=this._parsers[f][g].parse(d))}else a.Base.Logger.warn("Buffer length = 0. Parse process skipped.");return c},registerParser:function(a,b,c){this._parsers[a]||(this._parsers[a]={}),this._parsers[a][b]=c}},a.Providers.WCS.WCSBinaryParser=b}(AvayaClientServices),function(a){"use strict";function b(a){this._frameBuilder=a,this._lastPoint=void 0,this._timeout=void 0}b.prototype={updateFrame:function(b,c){this._frameBuilder.processTag(c,function(c){var d=c._bitmapElements.map(function(b){return new a.Services.Collaboration.Bitmap(b.x,b.y,b.width,b.height,b.imageType,b.bitmapData)}),e=new a.Services.Collaboration.Frame(c.width,c.height,d,c.isKeyFrame);e.isKeyFrame()?b._contentSharing._onFrameReceivedCallbacks.fire(b._contentSharing,e):b._contentSharing._onFrameChangedCallbacks.fire(b._contentSharing,e)}.bind(this))},updateCursor:function(b,c){this._lastPoint=new a.Services.Collaboration.Point(c.x,c.y),this._timeout||(this._timeout=setTimeout(function(){b._contentSharing._onCursorReceivedCallbacks.fire(b._contentSharing,this._lastPoint),this._timeout=void 0}.bind(this),100))},startScreenSharing:function(a,b){var c=this._getParticipant(a,b);a._contentSharing._isPaused===!0?(a._contentSharing._isPaused=!1,a._contentSharing._onContentSharingResumedCallbacks.fire(a._contentSharing,c)):a._contentSharing._onContentSharingStartedCallbacks.fire(a._contentSharing,c)},pauseScreenSharing:function(a,b){a._contentSharing._isPaused=!0;var c=this._getParticipant(a,b);a._contentSharing._onContentSharingPausedCallbacks.fire(a._contentSharing,c)},endScreenSharing:function(a,b){var c=this._getParticipant(a,b);a._contentSharing._onContentSharingEndedCallbacks.fire(a._contentSharing,c)},frameReport:function(a,b){a._contentSharing._onFrameReportReceivedCallbacks.fire(a._contentSharing,b)},_getParticipant:function(b,c){var d=b._participants.filter(function(a){return a.getId()===c.senderId})[0];return d||(d=new a.Services.Collaboration.Participant,d._id=c.senderId,d._name=c.senderName,b._participants.push(d)),d}},a.Providers.WCS.WCSContentSharingHandler=b}(AvayaClientServices),function(a){"use strict";var b={START_WHITEBOARD:"StartWhiteboard",ADD_WHITEBOARD:"AddWhiteboard",DELETE_WHITEBOARD:"DeleteWhiteboard",START_DRAW_SHAPE:"StartDrawShape",DRAW_SHAPE:"DrawShape",END_DRAW_SHAPE:"EndDrawShape",DRAW_CIRCLE:"DrawCircle",DRAW_TEXT:"DrawText",MOVE_SELECTION:"MoveSelection",DELETE_SELECTION:"DeleteSelection",CLEAR_DRAWING:"ClearDrawing",END_WHITEBOARD:"EndWhiteboard",SEND_SLIDE:"SendSlide",END_PRESENTATION:"EndPresentation",SEND_MESSAGE:"SendMessage",ADD_NOTE:"AddNote",SET_NOTE:"SetNote",DELETE_NOTE:"DeleteNote",START_SCREEN_SHARING:"StartScreenSharing",PAUSE_SCREEN_SHARING:"PauseScreenSharing",END_SCREEN_SHARING:"EndScreenSharing",REQUEST_CONTROL:"RequestControl",GRANT_CONTROL:"GrantControl",START_CONTROL:"StartControl",DECLINE_CONTROL:"DeclineControl",DENY_CONTROL:"DenyControl",SEND_DOCUMENT:"SendDocument",END_CONTROL:"EndControl",ALLOW_PRESENTING:"AllowPresenting",DENY_PRESENTING:"DenyPresenting",EJECT_PARTICIPANT:"EjectParticipant",START_MEETING:"StartMeeting",END_MEETING:"EndMeeting",DRAW_CURSOR:"DrawCursor",DRAW_FRAME:"DrawFrame",FRAME_REPORT:"FrameReport",ERROR:"Error",LIVE_SESSION:"LiveSession",LIVE_ATTENDEES:"LiveAttendees",LIVE_ATTENDEE:"LiveAttendee"};a.Providers.WCS.WCSEventTypes=b}(AvayaClientServices),function(a,b){"use strict";function c(){this.parsers=[]}c.prototype={register:function(a,b){this.parsers[a]=b},unregister:function(a){this.parsers[a]=void 0},parse:function(c){var d;"string"==typeof c?d=b.parseString(c):"object"==typeof c&&(d=c);var e,f=d.response[0],g=[];if(f.error){e=a.Providers.WCS.WCSEventTypes.ERROR;var h=f.error[0];return g.push(this.delegateParser(e,h)),g}if(f.live_events)return $.each(f.live_events[0].event,function(a,b){e=b._attr.type._value;var c=this.delegateParser(e,b);void 0!==c&&g.push(c)}.bind(this)),g;if(f.live_event)return[];if(f.live_session)return e=a.Providers.WCS.WCSEventTypes.LIVE_SESSION,g.push(this.delegateParser(e,f.live_session[0])),g;if(f.frame_report)return e=a.Providers.WCS.WCSEventTypes.FRAME_REPORT,g.push(this.delegateParser(e,f.frame_report[0])),g;if(f.live_attendees)return e=a.Providers.WCS.WCSEventTypes.LIVE_ATTENDEES,g.push(this.delegateParser(e,f.live_attendees[0])),g;throw new Error("No parser specified!")},delegateParser:function(a,b){return console.debug("DATA TO PARSE:",b),void 0!==this.parsers[a]?this.parsers[a].parse(b):void 0}},a.Providers.WCS.WCSEventsParser=c}(AvayaClientServices,xmlToJSON),function(a){"use strict";function b(){this._config=void 0,this._participant=void 0,this._meetingId=void 0}b.prototype={buildDrawCircleMessage:function(b,c,d,e,f){var g=this._buildDrawCircleEventData(b,c);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DRAW_CIRCLE,d,e,f,g)},buildMoveSelectionMessage:function(b,c,d,e,f,g,h){var i=this._buildMoveSelectionEventData(b,c,d,e);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.MOVE_SELECTION,f,g,h,i)},buildDrawShapeMessage:function(b,c,d,e,f){var g=this._buildDrawShapeEventData(b,c);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DRAW_SHAPE,d,e,f,g)},buildLiveDrawShapeMessage:function(b,c,d,e){var f=this._buildLiveDrawShapeEventData(b);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DRAW_SHAPE,c,d,e,f)},buildFirstPointLiveDrawShapeMessage:function(b,c,d,e){var f=this._buildFirstPointLiveDrawShapeEventData(b);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DRAW_SHAPE,c,d,e,f)},buildStartDrawShapeMessage:function(b,c,d,e,f){var g=this._buildStartDrawShapeEventData(b,c);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.START_DRAW_SHAPE,d,e,f,g)},buildEndDrawShapeMessage:function(b,c,d,e,f){var g=this._buildEndDrawShapeEventData(b,c);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.END_DRAW_SHAPE,d,e,f,g)},buildDrawTextMessage:function(b,c,d,e,f){var g=this._buildDrawTextEventData(b,c);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DRAW_TEXT,d,e,f,g)},buildAddWhiteboardMessage:function(b,c,d){return this._decorateRequest(a.Providers.WCS.WCSEventTypes.ADD_WHITEBOARD,b,c,d)},buildEndWhiteboardMessage:function(b,c,d){return this._decorateRequest(a.Providers.WCS.WCSEventTypes.END_WHITEBOARD,b,c,d)},buildRemoveWhiteboardMessage:function(b,c,d,e){var f='<whiteboard index="'+b+'"/>';return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DELETE_WHITEBOARD,c,d,e,f)},buildStartWhiteboardMessage:function(b,c,d,e){var f='<whiteboard index="';return a.Base.Utils.isDefined(e)&&(f+=e),f+='"/>',this._decorateRequest(a.Providers.WCS.WCSEventTypes.START_WHITEBOARD,b,c,d,f)},buildLiveEventMessage:function(a,b,c,d){return this._decorateRequest(a,b,c,d)},buildStartScreenSharingMessage:function(b,c,d){var e="<transport_version>1</transport_version>";return this._decorateRequest(a.Providers.WCS.WCSEventTypes.START_SCREEN_SHARING,b,c,d,e)},buildClearContentMessage:function(b,c,d,e){var f='<selection group="whiteboard_'+b+'"/>';return this._decorateRequest(a.Providers.WCS.WCSEventTypes.CLEAR_DRAWING,c,d,e,f)},buildGetParticipantsMessage:function(b){return"live_attendees?rc_only="+!!b+"&request_id="+a.Base.Utils.makeId(32,"abcdefgijklmnopqrstuvwxyz0123456789")},_buildMoveSelectionEventData:function(a,b,c,d){var e=a.getTranslation();return'<selection group="whiteboard_'+b+'" id="'+a.getId()+'" moveToX="'+e.getX()+'" moveToY="'+e.getY()+'" selectionX="'+c+'" selectionY="'+d+'"/>'},buildDeleteSelectionMessage:function(b,c,d,e,f,g,h){var i=this._buildDeleteSelectionEventData(b,c,d,e);return this._decorateRequest(a.Providers.WCS.WCSEventTypes.DELETE_SELECTION,f,g,h,i)},_buildDeleteSelectionEventData:function(a,b,c,d){var e='<selection group="whiteboard_'+b+'" id="'+a._id+'" selectionX="'+c+'" selectionY="'+d+'"/>';return e},_buildDrawCircleEventData:function(a,b){var c='<circle alpha="'+a.getAlpha()+'" group="whiteboard_'+b+'" x0="'+a.getTopLeft().getX()+'" x1="'+a.getBottomRight().getX()+'" y0="'+a.getTopLeft().getY()+'" y1="'+a.getBottomRight().getY()+'"';return c+=a.isFilled()?' fillColor="'+a.getColor()+'"':' color="'+a.getColor()+'"',c=c+' width="'+a.getWidth()+'" />'},_buildDrawShapeEventData:function(a,b){var c='<lines group="whiteboard_'+b+'" alpha="'+a.getAlpha()+'" width="'+a.getWidth()+'"';c+=a.isFilled()?' fillColor="'+a.getColor()+'"':' color="'+a.getColor()+'"',c+=">";var d=0,e=a.getPoints();for(d;d<e.length;d++){var f=e[d];c+=f.isMove?'<m x="'+f.point.getX()+'" y="'+f.point.getY()+'"/>':'<l x="'+f.point.getX()+'" y="'+f.point.getY()+'"/>'}return c+="</lines>"},_buildFirstPointLiveDrawShapeEventData:function(a){return'<m x="'+a.getX()+'" y="'+a.getY()+'"/>'},_buildLiveDrawShapeEventData:function(a){var b="",c=0;for(a[0].isMove&&(c=1,b+='<m x="'+a[0].point.getX()+'" y="'+a[0].point.getY()+'"/>'),b+="<lines>",c;c<a.length;c++){var d=a[c];b+=d.isMove?'<m x="'+d.point.getX()+'" y="'+d.point.getY()+'"/>':'<l x="'+d.point.getX()+'" y="'+d.point.getY()+'"/>'}return b+="</lines>"},_buildStartDrawShapeEventData:function(a,b){var c='<lines group="whiteboard_'+b+'" alpha="'+a.getAlpha()+'" width="'+a.getWidth()+'"';return c+=a.isFilled()?' fillColor="'+a.getColor()+'"':' color="'+a.getColor()+'"',c+="/>"},_buildEndDrawShapeEventData:function(a,b){return'<lines group="whiteboard_'+b+'"/>'},_buildDrawTextEventData:function(a,b){return'<drawText fillColor="'+a.getColor()+'" fontSize="'+a.getFontSize()+'" group="whiteboard_'+b+'" text="'+a.getContent()+'" x="'+a.getPosition().getX()+'" y="'+a.getPosition().getY()+'"/>'},_translateColor:function(a){return parseInt("0x".concat(a.slice(1))).toString()},_decorateRequest:function(b,c,d,e,f){var g=f?"?event_data="+encodeURIComponent(f)+"&":"?";return"live_event"+g+"event_type="+b+"&meeting_id="+c+"&sender_id="+d+"&sender_name="+e+"&request_id="+a.Base.Utils.makeId(32,"0123456789abcdef")}},a.Providers.WCS.WCSMessageBuilder=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.Interfaces.CollaborationProvider.call(this),this._providers=[],this._selectedProvider=void 0,this._config={}}b.prototype=Object.create(a.Providers.Interfaces.CollaborationProvider.prototype),b.prototype.stop=function(){return this._selectedProvider.stop()},b.prototype.registerWCSProvider=function(a,b){this._providers.push({version:a,provider:b})},b.prototype.start=function(a,b){return $.isEmptyObject(a)||this._config===a||(this._config=a.wcsConfiguration),this._selectedProvider=this._providers[0].provider,this._selectedProvider.start(a.wcsConfiguration,b)},b.prototype.on=function(a,b){this._selectedProvider.on(a,b)},b.prototype.getReceivingBitrate=function(){return this._selectedProvider.getReceivingBitrate()},b.prototype.addCircle=function(a,b){return this._selectedProvider.addCircle(a,b)},b.prototype.addText=function(a,b){return this._selectedProvider.addText(a,b)},b.prototype.addShape=function(a,b){return this._selectedProvider.addShape(a,b)},b.prototype.startDrawShape=function(a,b){return this._selectedProvider.startDrawShape(a,b)},b.prototype.liveDrawShape=function(a,b){return this._selectedProvider.liveDrawShape(a,b)},b.prototype.endDrawShape=function(a,b){return this._selectedProvider.endDrawShape(a,b)},b.prototype.moveSelection=function(a,b,c){return this._selectedProvider.moveSelection(a,b,c)},b.prototype.observeCollaboration=function(a){this._selectedProvider.observeCollaboration(a)},b.prototype.startWhiteboard=function(a){return this._selectedProvider.startWhiteboard(a)},b.prototype.endWhiteboard=function(a){return this._selectedProvider.endWhiteboard(a)},b.prototype.addWhiteboardSurface=function(){return this._selectedProvider.addWhiteboardSurface()},b.prototype.removeWhiteboardSurface=function(a){return this._selectedProvider.removeWhiteboardSurface(a)},b.prototype.sendMessage=function(a){return this._selectedProvider.sendMessage(a)},b.prototype.sendStartScreenSharing=function(){return this._selectedProvider.sendStartScreenSharing()},b.prototype.sendLiveEvent=function(a){return this._selectedProvider.sendLiveEvent(a)},b.prototype.removeShape=function(a,b,c){return this._selectedProvider.removeShape(a,b,c)},b.prototype.clearContent=function(a){return this._selectedProvider.clearContent(a)},b.prototype.getParticipants=function(){return this._selectedProvider.getParticipants()},b.prototype.isOpened=function(){return this._selectedProvider.isOpened()},b.prototype.isFeatureAvailable=function(a){return this._selectedProvider.isFeatureAvailable(a)},a.Providers.WCS.WCSProvider=b}(AvayaClientServices),function(a){"use strict";function b(){this._collaborationProvider={}}b.prototype={getWCSProvider:function(b){if(a.Base.Utils.isDefined(b)&&b.enabled){if($.isEmptyObject(this._collaborationProvider)){var c=this._createWCSv1_1Provider();this._collaborationProvider=new a.Providers.WCS.WCSProvider,this._collaborationProvider.registerWCSProvider("1.1",c)}return this._collaborationProvider}},_createWCSv1_1Provider:function(){var b=new a.Providers.WCS.WCSTransactionalWebSocketProvider,c=new a.Base.NetworkProvider(b),d=this._createEventsParser(),e=this._createBinaryParser(),f=new a.Providers.WCS.FrameBuilder,g=new a.Providers.WCS.WCSMessageBuilder,h=new a.Providers.WCS.WCSContentSharingHandler(f),i=new a.Providers.WCS.WCSShapeConverter,j=new a.Providers.WCS.WCSWhiteboardHandler(i);return new a.Providers.WCS.WCSv1_1Provider(c,d,e,g,h,j)},_createEventsParser:function(){var b=new a.Providers.WCS.WCSEventsParser;return b.register(a.Providers.WCS.WCSEventTypes.ERROR,new a.Providers.WCS.ErrorParser),b.register(a.Providers.WCS.WCSEventTypes.LIVE_SESSION,new a.Providers.WCS.LiveSessionParser),b.register(a.Providers.WCS.WCSEventTypes.SEND_MESSAGE,new a.Providers.WCS.SendMessageParser),b.register(a.Providers.WCS.WCSEventTypes.DRAW_SHAPE,new a.Providers.WCS.DrawShapeParser),b.register(a.Providers.WCS.WCSEventTypes.DRAW_CIRCLE,new a.Providers.WCS.DrawCircleParser),b.register(a.Providers.WCS.WCSEventTypes.MOVE_SELECTION,new a.Providers.WCS.MoveSelectionParser),b.register(a.Providers.WCS.WCSEventTypes.DELETE_SELECTION,new a.Providers.WCS.DeleteSelectionParser),b.register(a.Providers.WCS.WCSEventTypes.CLEAR_DRAWING,new a.Providers.WCS.ClearDrawingParser),b.register(a.Providers.WCS.WCSEventTypes.DRAW_TEXT,new a.Providers.WCS.DrawTextParser),b.register(a.Providers.WCS.WCSEventTypes.START_DRAW_SHAPE,new a.Providers.WCS.StartDrawShapeParser),b.register(a.Providers.WCS.WCSEventTypes.END_DRAW_SHAPE,new a.Providers.WCS.EndDrawShapeParser),b.register(a.Providers.WCS.WCSEventTypes.START_WHITEBOARD,new a.Providers.WCS.StartWhiteboardParser),b.register(a.Providers.WCS.WCSEventTypes.ADD_WHITEBOARD,new a.Providers.WCS.AddWhiteboardParser),b.register(a.Providers.WCS.WCSEventTypes.DELETE_WHITEBOARD,new a.Providers.WCS.DeleteWhiteboardParser),b.register(a.Providers.WCS.WCSEventTypes.END_WHITEBOARD,new a.Providers.WCS.EndWhiteboardParser),b.register(a.Providers.WCS.WCSEventTypes.START_MEETING,new a.Providers.WCS.StartMeetingParser),b.register(a.Providers.WCS.WCSEventTypes.START_SCREEN_SHARING,new a.Providers.WCS.StartScreenSharingParser),b.register(a.Providers.WCS.WCSEventTypes.PAUSE_SCREEN_SHARING,new a.Providers.WCS.PauseScreenSharingParser),b.register(a.Providers.WCS.WCSEventTypes.END_SCREEN_SHARING,new a.Providers.WCS.EndScreenSharingParser),b.register(a.Providers.WCS.WCSEventTypes.GRANT_CONTROL,new a.Providers.WCS.GrantControlParser),b.register(a.Providers.WCS.WCSEventTypes.ADD_NOTE,new a.Providers.WCS.AddNoteParser),b.register(a.Providers.WCS.WCSEventTypes.DELETE_NOTE,new a.Providers.WCS.DeleteNoteParser),b.register(a.Providers.WCS.WCSEventTypes.SET_NOTE,new a.Providers.WCS.SetNoteParser),b.register(a.Providers.WCS.WCSEventTypes.DENY_CONTROL,new a.Providers.WCS.DenyControlParser),b.register(a.Providers.WCS.WCSEventTypes.END_CONTROL,new a.Providers.WCS.EndControlParser),b.register(a.Providers.WCS.WCSEventTypes.END_MEETING,new a.Providers.WCS.EndMeetingParser),b.register(a.Providers.WCS.WCSEventTypes.SEND_DOCUMENT,new a.Providers.WCS.SendDocumentParser),b.register(a.Providers.WCS.WCSEventTypes.ALLOW_PRESENTING,new a.Providers.WCS.AllowPresentingParser),b.register(a.Providers.WCS.WCSEventTypes.DENY_PRESENTING,new a.Providers.WCS.DenyPresentingParser),b.register(a.Providers.WCS.WCSEventTypes.EJECT_PARTICIPANT,new a.Providers.WCS.EjectParticipantParser),b.register(a.Providers.WCS.WCSEventTypes.LIVE_ATTENDEES,new a.Providers.WCS.LiveAttendeesParser),b.register(a.Providers.WCS.WCSEventTypes.FRAME_REPORT,new a.Providers.WCS.FrameReportParser),b},_createBinaryParser:function(){var b=new a.Providers.WCS.WCSBinaryParser;return b.registerParser(a.Providers.WCS.WCSTransmissionTypes.SCREEN_SHARING,a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG,new a.Providers.WCS.StartTagBinaryParser),b.registerParser(a.Providers.WCS.WCSTransmissionTypes.SCREEN_SHARING,a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG,new a.Providers.WCS.BlockTagBinaryParser),b.registerParser(a.Providers.WCS.WCSTransmissionTypes.SCREEN_SHARING,a.Providers.WCS.WCSScreenSharingTagTypes.CURSOR_TAG,new a.Providers.WCS.CursorTagBinaryParser),b.registerParser(a.Providers.WCS.WCSTransmissionTypes.SCREEN_SHARING,a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG,new a.Providers.WCS.EndTagBinaryParser),b}},a.Providers.WCS.WCSProviderFactory=b}(AvayaClientServices),function(a,b){"use strict";function c(){a.Base.PollingRESTProvider.call(this),this._connectionId="",this._config={},this._isOpened=!1,this._startLiveSessionURL="/StartLiveSession",this._endLiveSessionURL="/EndLiveSession",this._dataTransportURL="/Data";var b=this,c=function(a){b._connectionId=Date.now().toString(),b.startPolling(b._config.fallbackURL+b._dataTransportURL,b._config.fallbackPollInterval,{ws_id:b._connectionId}),b.onOpen(),b._isOpened=!0},e=function(a){b.onError({status:a.status,statusText:a.statusText})};this.init=function(a){this._config=a,d(this._config.fallbackURL+this._startLiveSessionURL,{},c,e)},this.close=function(){if(!this._isOpened)throw new Error("Socket is not yet opened!");var a=function(){b._isOpened=!1};d(this._config.fallbackURL+this._endLiveSessionURL,{},a,e),this.stopPolling(),this.onClose()}}function d(a,c,d,e){return b.ajax({type:"POST",url:a,data:c,dataType:"text",contentType:"application/x-www-form-urlencoded; charset=utf-8"}).then(d,e)}c.prototype=Object.create(a.Base.PollingRESTProvider.prototype),c.prototype.send=function(a){if(!this._isOpened)throw new Error("Socket is not yet opened!");var b={ws_id:this._connectionId,message:a},c=this,e=function(a){c.onMessage({data:a})},f=function(a){c.onError({status:a.status,statusText:a.statusText})};d(this._config.fallbackURL+this._dataTransportURL,b,e,f)},a.Providers.WCS.WCSRestFallbackAdapter=c}(AvayaClientServices=AvayaClientServices||{},jQuery=jQuery||{}),function(a){"use strict";function b(){}b.prototype={convertShape:function(b,c){var d=this._determineColor(b.data),e=b.liveEventCommonData.fromname,f=b.data.filled,g=b.liveEventCommonData.senderName===c,h=b.data.alpha,i=b.data.width,j=new a.Services.Collaboration.Shape(e,f,g,d,h,i);if(j.setId(b.liveEventCommonData.eventId),a.Base.Utils.isDefined(b.data.m)){var k=0;for(k;k<b.data.m.length;k++)j.addMovePoint(new a.Services.Collaboration.Point(b.data.m[k].x,b.data.m[k].y))}if(a.Base.Utils.isDefined(b.data.l)){var l=0;for(l;l<b.data.l.length;l++)j.addLinePoint(new a.Services.Collaboration.Point(b.data.l[l].x,b.data.l[l].y))}return j},convertLiveShape:function(b,c){var d=b.liveEventCommonData.fromname,e=!1,f=b.liveEventCommonData.senderName===c,g=this._convertColor(b.data.color),h=b.data.alpha,i=b.data.width,j=new a.Services.Collaboration.Shape(d,e,f,g,h,i);return j.setId(b.liveEventCommonData.eventId),j},convertText:function(b,c){var d,e=b.data.text,f=b.liveEventCommonData.fromname,g=b.data.filled,h=b.liveEventCommonData.senderName===c,i=this._convertColor(b.data.fillColor),j=b.data.fontSize,k=new a.Services.Collaboration.WhiteboardText(e,j,f,g,h,i,d);return k.setId(b.liveEventCommonData.eventId),k.setPosition(new a.Services.Collaboration.Point(b.data.x,b.data.y)),k},convertCircle:function(b,c){var d=this._determineColor(b.data),e=b.liveEventCommonData.fromname,f=b.data.filled,g=b.liveEventCommonData.senderName===c,h=b.data.width,i=b.data.alpha,j=this._calculatePoints(b.data),k=new a.Services.Collaboration.Circle(j.topLeft,j.bottomRight,e,f,g,d,i,h);return k.setId(b.liveEventCommonData.eventId),k},_determineColor:function(a){return a.filled&&a.fillColor?this._convertColor(a.fillColor):a.contour&&a.color?this._convertColor(a.color):void 0},_convertColor:function(a){return 0===a.indexOf("#")?parseInt(a.slice(1),16):parseInt(a,16)},_calculatePoints:function(b){var c,d;return b.x0<b.x1&&b.y0<b.y1?(c=new a.Services.Collaboration.Point(b.x0,b.y0),d=new a.Services.Collaboration.Point(b.x1,b.y1)):b.x0>=b.x1&&b.y0>=b.y1?(c=new a.Services.Collaboration.Point(b.x1,b.y1),d=new a.Services.Collaboration.Point(b.x0,b.y0)):b.x0<b.x1&&b.y0>=b.y1?(c=new a.Services.Collaboration.Point(b.x0,b.y1),d=new a.Services.Collaboration.Point(b.x1,b.y0)):(c=new a.Services.Collaboration.Point(b.x1,b.y0),d=new a.Services.Collaboration.Point(b.x0,b.y1)),{topLeft:c,bottomRight:d}}},a.Providers.WCS.WCSShapeConverter=b}(AvayaClientServices),function(a){"use strict";var b={SCREEN_SHARING:0,SLIDE_SHARING:2};a.Providers.WCS.WCSTransmissionTypes=b}(AvayaClientServices),function(a){"use strict";function b(a){this._shapeConverter=a}b.prototype={addWhiteboard:function(b,c){console.debug("WCSWhiteboardHandler: addWhiteboard",b,c);var d=b.getWhiteboard(),e=this._createNewSurface(d,c.liveEventCommonData.eventId),f=d.getActiveSurface();a.Base.Utils.isDefined(f)&&(f._active=!1),e._active=!0,d._activeSurface=e,d._onWhiteboardSurfaceAddedCallbacks.fire(c,e),d._onWhiteboardSurfaceSetActiveCallbacks.fire(d,e),d._recalculateRemoveWhiteboardCapability()},startWhiteboard:function(b,c){console.debug("WCSWhiteboardHandler: startWhiteboard",b,c);var d=b.getWhiteboard(),e=d.getSurfaceById(c.data.id),f=d.getActiveSurface(),g=this._getParticipant(b,c);if(a.Base.Utils.isDefined(f)&&(f._active=!1),a.Base.Utils.isDefined(e))e._active=!0,d._activeSurface=e,d._onWhiteboardSurfaceSetActiveCallbacks.fire(d,e,g);else{var h=this._createNewSurface(d,c.liveEventCommonData.eventId);h._active=!0,d._activeSurface=h,d._onWhiteboardStartedCallbacks.fire(d,h,g),d._onWhiteboardSurfaceAddedCallbacks.fire(d,h),d._onWhiteboardSurfaceSetActiveCallbacks.fire(d,h)}d._recalculateRemoveWhiteboardCapability()},endWhiteboard:function(a,b){console.debug("WCSWhiteboardHandler: endWhiteboard",a,b);var c=a.getWhiteboard(),d=this._getParticipant(a,b);c._onWhiteboardEndedCallbacks.fire(c,d),c._recalculateRemoveWhiteboardCapability()},deleteWhiteboard:function(a,b){console.debug("WCSWhiteboardHandler: deleteWhiteboard",a,b);var c,d=a.getWhiteboard(),e=d.getSurfaceById(b.data.id);if(e){c=e;var f=this._chooseNewActiveSurface(d,b.data.id);d._activeSurface=f;var g=d.getSurfaces().indexOf(e);g>-1&&d.getSurfaces().splice(g,1),d._onWhiteboardSurfaceRemovedCallbacks.fire(d,c),d._onWhiteboardSurfaceSetActiveCallbacks.fire(d,d.getActiveSurface())}d._recalculateRemoveWhiteboardCapability()},startDrawShape:function(a,b){console.debug("WCSWhiteboardHandler: startDrawShape",a,b);var c=a.getWhiteboard(),d=c.getSurfaceById(b.data.groupId);if(d){var e=this._shapeConverter.convertLiveShape(b,a._selfParticipant.getId());e._tempId=b.liveEventCommonData.eventId,d._appendShape(b.liveEventCommonData.eventId,e),c._currentLiveDrawingWhiteboardId=b.data.groupId,c._currentLiveDrawingShape=e,d._onShapeAddedCallbacks.fire(d,e)}},drawShape:function(b,c){console.debug("WCSWhiteboardHandler: drawShape",b,c);var d=b.getWhiteboard(),e=d.getSurfaceById(c.data.groupId);if(e){var f=this._shapeConverter.convertShape(c,b._selfParticipant.getId());e._appendShape(c.liveEventCommonData.eventId,f),e._onShapeAddedCallbacks.fire(e,f)}else if(a.Base.Utils.isDefined(d._currentLiveDrawingShape)&&(e=d.getSurfaceById(d._currentLiveDrawingWhiteboardId),!e._getShapeById(d._currentLiveDrawingShape.getId())||!d._currentLiveDrawingShape.isMine())){if(c.data.m.length>0&&d._currentLiveDrawingShape.addMovePoint(new a.Services.Collaboration.Point(c.data.m[0].x,c.data.m[0].y)),c.data.l.length>0)for(var g=0;g<c.data.l.length;g++)d._currentLiveDrawingShape.addLinePoint(new a.Services.Collaboration.Point(c.data.l[g].x,c.data.l[g].y));e._onShapeUpdatedCallbacks.fire(e,d._currentLiveDrawingShape)}},endDrawShape:function(a,b){console.debug("WCSWhiteboardHandler: endDrawShape",b);var c=a.getWhiteboard(),d=c.getSurfaceById(b.data.groupId);if(d){var e=d._getShapeById(c._currentLiveDrawingShape.getId());d._removeShapeById(c._currentLiveDrawingShape.getId()),e.setId(b.liveEventCommonData.eventId),d._appendShape(b.liveEventCommonData.eventId,e),d._onShapeUpdatedCallbacks.fire(d,e),e._tempId=b.liveEventCommonData.eventId,c._currentLiveDrawingWhiteboardId=void 0,c._currentLiveDrawingShape.finishDrawing(),c._currentLiveDrawingShape=void 0}},drawCircle:function(a,b){console.debug("WCSWhiteboardHandler: drawCircle",a,b);var c=a.getWhiteboard(),d=c.getSurfaceById(b.data.groupId);if(d){var e=this._shapeConverter.convertCircle(b,a._selfParticipant.getId());d._appendShape(b.liveEventCommonData.eventId,e),d._onShapeAddedCallbacks.fire(d,e)}},drawText:function(a,b){console.debug("WCSWhiteboardHandler: drawText",a,b);var c=a.getWhiteboard(),d=c.getSurfaceById(b.data.groupId);if(d){var e=this._shapeConverter.convertText(b,a._selfParticipant.getId());d._appendShape(b.liveEventCommonData.eventId,e),d._onShapeAddedCallbacks.fire(d,e)}},clearDrawing:function(a,b){console.debug("WCSWhiteboardHandler: clearDrawing",a,b);var c=a.getWhiteboard(),d=c.getSurfaceById(b.data.groupId);d&&(d._clearShapes(),d._onSurfaceClearedCallbacks.fire(d))},moveSelection:function(b,c){var d=b.getWhiteboard(),e=d.getSurfaceById(c.data.groupId);if(e){var f=e._getShapeById(c.data.shapeId);f.setTranslation(new a.Services.Collaboration.Point(c.data.moveToX,c.data.moveToY)),e._onShapeUpdatedCallbacks.fire(e,f)}},deleteSelection:function(a,b){console.debug("WCSWhiteboardHandler: deleteSelection",a,b);var c=a.getWhiteboard(),d=c.getSurfaceById(b.data.groupId);if(d){var e=d._getShapeById(b.data.shapeId);e&&(d._onShapeDeletedCallbacks.fire(d,e),d._removeShapeById(e.getId()))}},_createNewSurface:function(b,c){var d=new a.Services.Collaboration.WhiteboardSurface(b,b._whiteboardService);return b.getSurfaces().push(d),d._surfaceId=c,d},_chooseNewActiveSurface:function(a,b){var c=a.getSurfaces(),d=a.getSurfaceById(b),e=c.indexOf(d);return a.getActiveSurface()._active=!1,0===e?c.length>1?(c[1]._active=!0,c[1]):(c[0]._active=!0,c[0]):(c[e-1]._active=!0,c[e-1])},_getParticipant:function(b,c){var d=b._participants.filter(function(a){return a.getId()===c.liveEventCommonData.senderId})[0];return d||(d=new a.Services.Collaboration.Participant,d._id=c.liveEventCommonData.senderId,d._name=c.liveEventCommonData.senderName,b._participants.push(d)),d}},a.Providers.WCS.WCSWhiteboardHandler=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g){a.Providers.WCS.AbstractWCSProvider.call(this,b,c,d,e),this._meetingId=void 0,this._wcsContentSharingHandler=f,this._wcsWhiteboardHandler=g,this._version="1.1",this._bytesReceivedLastSecond=0}b.prototype=Object.create(a.Providers.WCS.AbstractWCSProvider.prototype),b.prototype.start=function(b,c){var d=$.Deferred();return this._config=b,this._meetingId=c,this._credentials=void 0,this._participant=void 0,this._networkProvider.onOpen=function(){console.log("Socket opened"),this._sendLiveSession().then(function(b){var c=a.Base.Utils.queryJSONObject(b,"response[0].live_session[0].live_attendee[0].attendee_id[0]._text");if(c){var e=a.Base.Utils.queryJSONObject(b,"response[0].live_session[0].live_attendee[0].user_name[0]._text");this._participant=new a.Services.Collaboration.Participant(c,e)}d.resolve(this._participant)}.bind(this),d.reject)}.bind(this),this._networkProvider._onCredentialsRequired=this._onCredentialsRequired.bind(this),this._networkProvider.onClose=function(){console.log("Socket was closed")},this._networkProvider.onError=function(a){console.log("Error on socket: ",a)},this._networkProvider.start(b.serverInfo,b.credentialProvider,{urlSuffix:"/wcsws/WebSocket"}),d.promise()},b.prototype.stop=function(){var a=$.Deferred();return this._networkProvider.onClose=function(){a.resolve()},this._networkProvider.onError=function(b){a.reject(b)},this._networkProvider.close(),a.promise()},b.prototype._sendLiveSession=function(){var b=Date.now(),c=a.Base.Utils.makeId(10,"abcdefgijklmnopqrstuvwxyz0123456789"),d="live_session?token="+this._credentials.token+"&brand=Avaya&meeting_id="+this._meetingId+"&participant_id="+this._credentials.participantId+"&username="+this._credentials.username+"&local_time="+b+"&session_id="+this._credentials.sessionId+"&remote_control_enabled=true&webserver_id=1000&private_chat_enabled=true&user_agent="+navigator.userAgent+"&client_version=PC;WebCollab;local_version&request_id="+c;return this._networkProvider.send(d)},b.prototype._onCredentialsRequired=function(b,c){if(a.Base.Utils.isUndefined(this._credentials)){var d;this._config.credentialProvider.onAuthenticationChallenge(d,function(a){this._onCredentialsRetrieved(a,c)}.bind(this))}},b.prototype._onCredentialsRetrieved=function(a,b){this._credentials=a},b.prototype.observeCollaboration=function(a){this._networkProvider.onMessage=function(b){var c=[];if(b.data instanceof ArrayBuffer)this._updateReceivingBitrate(b.data.byteLength),c.push(this._wcsBinaryParser.parse(b.data));else{var d=this._wcsEventsParser.parse(b.data);$.each(d,function(a,b){c.push(b)}.bind(this))}c.forEach(function(b){this._delegateEvent(b,a)}.bind(this))}.bind(this)},b.prototype.startDrawShape=function(a,b){var c=this._wcsMessageBuilder.buildStartDrawShapeMessage(a,b,this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(c).then(this._getEventIdFromResponse)},b.prototype.liveDrawShape=function(a){var b,c=a.getPointsToSend();return c&&c[0]&&c[0].isMove?(b=this._wcsMessageBuilder.buildFirstPointLiveDrawShapeMessage(c[0].point,this._meetingId,this._credentials.participantId,this._credentials.username),
a.markPointsAsSent(1)):(b=this._wcsMessageBuilder.buildLiveDrawShapeMessage(c,this._meetingId,this._credentials.participantId,this._credentials.username),a.markPointsAsSent(a.getPoints().length)),this._networkProvider.send(b).then(this._getEventIdFromResponse)},b.prototype.endDrawShape=function(a,b){var c=this._wcsMessageBuilder.buildEndDrawShapeMessage(a,b,this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(c).then(this._getEventIdFromResponse)},b.prototype.addShape=function(a,b){var c=this._wcsMessageBuilder.buildDrawShapeMessage(a,b,this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(c).then(this._getEventIdFromResponse)},b.prototype.moveSelection=function(a,b,c){var d=this._wcsMessageBuilder.buildMoveSelectionMessage(a,b,c.getX(),c.getY(),this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(d).then(this._getEventIdFromResponse)},b.prototype._updateReceivingBitrate=function(a){this._bytesReceivedLastSecond+=a,setTimeout(function(){this._bytesReceivedLastSecond-=a}.bind(this),1e3)},b.prototype.getReceivingBitrate=function(){return 8*this._bytesReceivedLastSecond},b.prototype.addCircle=function(a,b){var c=this._wcsMessageBuilder.buildDrawCircleMessage(a,b,this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(c).then(this._getEventIdFromResponse)},b.prototype.addText=function(a,b){var c=this._wcsMessageBuilder.buildDrawTextMessage(a,b,this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(c).then(this._getEventIdFromResponse)},b.prototype.sendStartScreenSharing=function(){var a=this._wcsMessageBuilder.buildStartScreenSharingMessage(this._meetingId,this._participant._id,this._participant._name);return this._networkProvider.send(a)},b.prototype.sendLiveEvent=function(a){var b=this._wcsMessageBuilder.buildLiveEventMessage(a,this._meetingId,this._participant._id,this._participant._name);return this._networkProvider.send(b)},b.prototype.sendMessage=function(a){return this._networkProvider.send(a)},b.prototype.startWhiteboard=function(a){var b=this._wcsMessageBuilder.buildStartWhiteboardMessage(this._meetingId,this._participant._id,this._participant._name,a);return this._networkProvider.send(b)},b.prototype.endWhiteboard=function(a){var b=this._wcsMessageBuilder.buildEndWhiteboardMessage(this._meetingId,this._participant._id,this._participant._name);return this._networkProvider.send(b)},b.prototype.addWhiteboardSurface=function(){var a=this._wcsMessageBuilder.buildAddWhiteboardMessage(this._meetingId,this._participant._id,this._participant._name);return this._networkProvider.send(a)},b.prototype.removeWhiteboardSurface=function(a){var b=this._wcsMessageBuilder.buildRemoveWhiteboardMessage(a,this._meetingId,this._participant._id,this._participant._name);return this._networkProvider.send(b)},b.prototype.removeShape=function(a,b,c){var d=this._wcsMessageBuilder.buildDeleteSelectionMessage(a,b,c.getX(),c.getY(),this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(d)},b.prototype.clearContent=function(a){var b=this._wcsMessageBuilder.buildClearContentMessage(a,this._meetingId,this._credentials.participantId,this._credentials.username);return this._networkProvider.send(b)},b.prototype.getParticipants=function(){var b=this._wcsMessageBuilder.buildGetParticipantsMessage(!1);return this._networkProvider.send(b).then(function(b){for(var c=[],d=this._wcsEventsParser.parse(b),e=0;e<d[0].data.liveAttendees.length;e++){var f=a.Base.Utils.queryJSONObject(d[0],"data.liveAttendees["+e+"].attendeeId"),g=a.Base.Utils.queryJSONObject(d[0],"data.liveAttendees["+e+"].userIp"),h=a.Base.Utils.queryJSONObject(d[0],"data.liveAttendees["+e+"].userName");c.push(new a.Services.Collaboration.Participant(f,h,g))}return c}.bind(this))},b.prototype.isOpened=function(){return this._networkProvider.isOpened()},b.prototype.isFeatureAvailable=function(b){switch(b){case a.Services.Collaboration.FeaturesAvailable.LIBRARY:return!0;case a.Services.Collaboration.FeaturesAvailable.POLLING:return!0;case a.Services.Collaboration.FeaturesAvailable.MINUTES:return!0;case a.Services.Collaboration.FeaturesAvailable.WHITEBOARD:return!0;case a.Services.Collaboration.FeaturesAvailable.MESSAGES:return!0;case a.Services.Collaboration.FeaturesAvailable.REPORTS:return!0;case a.Services.Collaboration.FeaturesAvailable.SCREEN_SHARING:return!0;case a.Services.Collaboration.FeaturesAvailable.SLIDER:return!0;case a.Services.Collaboration.FeaturesAvailable.REMOTE_CONTROL:return!0}return!1},b.prototype._delegateEvent=function(b,c){if(!a.Base.Utils.isUndefined(b)&&!a.Base.Utils.isUndefined(b.type))switch(b.type){case a.Providers.WCS.WCSScreenSharingTagTypes.CURSOR_TAG:this._wcsContentSharingHandler.updateCursor(c,b);break;case a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG:this._wcsContentSharingHandler.updateFrame(c,b);break;case a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG:this._wcsContentSharingHandler.updateFrame(c,b);break;case a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG:this._wcsContentSharingHandler.updateFrame(c,b);break;case a.Providers.WCS.WCSEventTypes.START_SCREEN_SHARING:this._wcsContentSharingHandler.startScreenSharing(c,b);break;case a.Providers.WCS.WCSEventTypes.PAUSE_SCREEN_SHARING:this._wcsContentSharingHandler.pauseScreenSharing(c,b);break;case a.Providers.WCS.WCSEventTypes.END_SCREEN_SHARING:this._wcsContentSharingHandler.endScreenSharing(c,b);break;case a.Providers.WCS.WCSEventTypes.FRAME_REPORT:this._wcsContentSharingHandler.frameReport(c,b);break;case a.Providers.WCS.WCSEventTypes.START_WHITEBOARD:this._wcsWhiteboardHandler.startWhiteboard(c,b);break;case a.Providers.WCS.WCSEventTypes.ADD_WHITEBOARD:this._wcsWhiteboardHandler.addWhiteboard(c,b);break;case a.Providers.WCS.WCSEventTypes.END_WHITEBOARD:this._wcsWhiteboardHandler.endWhiteboard(c,b);break;case a.Providers.WCS.WCSEventTypes.DELETE_WHITEBOARD:this._wcsWhiteboardHandler.deleteWhiteboard(c,b);break;case a.Providers.WCS.WCSEventTypes.START_DRAW_SHAPE:this._wcsWhiteboardHandler.startDrawShape(c,b);break;case a.Providers.WCS.WCSEventTypes.DRAW_SHAPE:this._wcsWhiteboardHandler.drawShape(c,b);break;case a.Providers.WCS.WCSEventTypes.END_DRAW_SHAPE:this._wcsWhiteboardHandler.endDrawShape(c,b);break;case a.Providers.WCS.WCSEventTypes.DRAW_CIRCLE:this._wcsWhiteboardHandler.drawCircle(c,b);break;case a.Providers.WCS.WCSEventTypes.MOVE_SELECTION:this._wcsWhiteboardHandler.moveSelection(c,b);break;case a.Providers.WCS.WCSEventTypes.DRAW_TEXT:this._wcsWhiteboardHandler.drawText(c,b);break;case a.Providers.WCS.WCSEventTypes.DELETE_SELECTION:this._wcsWhiteboardHandler.deleteSelection(c,b);break;case a.Providers.WCS.WCSEventTypes.CLEAR_DRAWING:this._wcsWhiteboardHandler.clearDrawing(c,b)}},b.prototype._getEventIdFromResponse=function(b){return a.Base.Utils.queryJSONObject(b,"response[0].live_event[0].event_id[0]._text")},a.Providers.WCS.WCSv1_1Provider=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={buildClientSDPRequest:function(b,c,d,e){var f={transId:e.toString(),version:"1.0",token:"",displayName:c,destinationAddress:d+"@scopia.avaya.com",sdp:b};return this._wrapParams(a.Providers.WSP.WSPMessageTypes.CLIENT_SDP_REQUEST,f)},buildDisconnectRequest:function(b){var c={transId:b.toString(),reasonCode:"closed",displayText:"Closed connection"};return this._wrapParams(a.Providers.WSP.WSPMessageTypes.DISCONNECT_REQUEST,c)},buildServerSDPResponse:function(b,c){var d={transId:c.toString(),sdp:b};return this._wrapParams(a.Providers.WSP.WSPMessageTypes.SERVER_SDP_RESPONSE,d)},buildDisconnectResponse:function(b){var c={transId:b.toString()};return this._wrapParams(a.Providers.WSP.WSPMessageTypes.DISCONNECT_RESPONSE,c)},_wrapParams:function(a,b){return{protocolType:"WSP",name:a,params:b}}},a.Providers.WSP.WSPMessageBuilder=b}(AvayaClientServices),function(a){"use strict";var b={CLIENT_SDP_REQUEST:"clientSdpRequest",CLIENT_SDP_RESPONSE:"clientSdpResponse",SERVER_SDP_REQUEST:"serverSdpRequest",SERVER_SDP_RESPONSE:"serverSdpResponse",DISCONNECT_REQUEST:"disconnectRequest",DISCONNECT_RESPONSE:"disconnectResponse"};a.Providers.WSP.WSPMessageTypes=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c){a.Providers.Interfaces.CallSignalingProvider.call(this),this._networkProvider=b,this._wspMessageBuilder=c,this._config=void 0}c.prototype=Object.create(a.Providers.Interfaces.CallSignalingProvider.prototype),c.prototype.start=function(a){this._config=a;var c=b.Deferred();return this._networkProvider._onCredentialsRequired=this.onCredentialsRequired.bind(this),this._networkProvider.onOpen=function(){this._networkProvider.onClose=function(){},c.resolve()}.bind(this),this._networkProvider.onClose=function(){c.reject()},this._networkProvider.onMessage=function(a){"serverSdpRequest"===a.name&&this.trigger("serverSdpRequest",[a]),"disconnectRequest"===a.name&&this.trigger("disconnectRequest",[a])}.bind(this),this._networkProvider.start(a.serverInfo,a.credentialProvider,{urlSuffix:"/uwd/ws",transactionIDLocation:"params.transId"}),c.promise()},c.prototype.onCredentialsRequired=function(a){var b;this._config.credentialProvider.onAuthenticationChallenge(b,function(b){this.onCredentialsRetrieved(b,a)}.bind(this))},c.prototype.onCredentialsRetrieved=function(a,b){if(b.options=b.options||{},!b.options.alreadyApplied){if(b.message){var c=JSON.parse(b.message);"undefined"!=typeof c.params.token&&(c.params.token=a.token),b.message=JSON.stringify(c)}else{var d=b.options.urlSuffix.indexOf("?ticket=");d>-1&&(b.options.urlSuffix=b.options.urlSuffix.slice(d)),b.options.urlSuffix+="?ticket="+a.token}b.options.alreadyApplied=!0}},c.prototype.sendSDP=function(a,c,d,e){var f=b.Deferred(),g=this._wspMessageBuilder.buildClientSDPRequest(a,c,d,e);return this._networkProvider.send(JSON.stringify(g)).then(function(a){"200"===a.params.responseCode?f.resolve(a):f.reject({name:"WSPServerError",code:a.params.responseCode,message:"WSP server responded with "+a.params.responseCode})},function(a){f.reject(a)}),f.promise()},c.prototype.disconnect=function(a){var b=this._wspMessageBuilder.buildDisconnectRequest(a);return this._networkProvider.send(JSON.stringify(b))},c.prototype.answerSDP=function(a,b){var c=this._wspMessageBuilder.buildServerSDPResponse(a,b);return this._networkProvider.send(JSON.stringify(c))},c.prototype.sendDisconnectResponse=function(a){var b=this._wspMessageBuilder.buildDisconnectResponse(a);return this._networkProvider.send(JSON.stringify(b))},c.prototype.stop=function(a){this._removeListeners();var c=b.Deferred();this._networkProvider.onClose=function(){c.resolve()},this._networkProvider.onError=function(a){this._networkProvider.close(),c.reject(a)}.bind(this);try{this.disconnect(a).then(function(){this._networkProvider.close()}.bind(this))}catch(d){this._networkProvider.close(),c.resolve()}return c.promise()},a.Providers.WSP.WSPProvider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={BUSY:"BUSY ",FORBIDDEN:"NONE",TEMPORARILY_UNAVAILABLE:"REMOTE_CALL_ESTABLISHED"};a.Services.Call.CallDenialReason=c}(window.AvayaClientServices=window.AvayaClientServices||{}),function(){"use strict";function a(a,b,c,d,e,f){this.callId=a,this.callingParticipant=b,this.calledParticipant=c,this.participants=d,this.connectionId=e,this.status=f}AvayaClientServices.Services.Call.CallDetails=a}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(b,c){this._providerFactory=c,this._callService={},this._callManager=new a.Services.Call.CallManager,this.calls=void 0,this._callProvider={},this._participantService=void 0,this._chatService=void 0,this._conferenceService=void 0}c.prototype={init:function(b){this._callProvider=this._providerFactory.getCallProviders(b)[0],this._chatService=new a.Services.Conference.ChatService(this._callProvider._conferenceProvider),this._conferenceService=new a.Services.Conference.ConferenceService(this._callProvider._conferenceProvider),this._participantService=new a.Services.Conference.ParticipantService(this._callProvider._conferenceProvider),this._callService=new a.Services.Call.CallService(b,this._callProvider,this._callManager,this._conferenceService,this._participantService,this._chatService),this.calls=new a.Services.Call.Calls(this._callManager,this._callService)}},a.Services.Call.CallFactory=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){this._incomingCallCallbacks=b.Callbacks(),this._calls=[]}c.prototype={createCall:function(b){var c=new a.Services.Call.Call(b);return this._calls.push(c),b.isVideoEnabled()?c._videoChannelsCapability._updateIfChanged(!0,"Application supports video"):c._videoChannelsCapability._updateIfChanged(!1,"Application does not support video"),c},deleteCall:function(a){var b=this._calls.indexOf(a);b>-1&&this._calls.splice(b,1)},getCallCount:function(){return this._calls.length},hasActiveCall:function(){for(var b in this._calls)if(b.getState()===a.Services.Call.CallStates.ESTABLISHED||b.getState()===a.Services.Call.CallStates.ACTIVE)return!0;return!1},hasHeldCall:function(){for(var b in this._calls)if(b.getState()===a.Services.Call.CallStates.HELD)return!0;return!1},hasInitiatingCall:function(){for(var b in this._calls)if(b.getState()===a.Services.Call.CallStates.STARTING||b.getState()===a.Services.Call.CallStates.INCOMING)return!0;return!1}},a.Services.Call.CallManager=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b,c,d,e,f,g){a.Base.Observable.call(this),this._config=b,this._callProvider=c,this._callManager=d,this._conferenceService=e,this._participantService=f,this._chatService=g,this._callProvider.on(a.Providers.Interfaces.CallProviderCallbackIds.INCOMING_CALL,function(b,c,d){var e=this._callManager.createCall(this);e.setCallId(b),e.setRemoteAddress(c),e.setRemoteDisplayName(d),e._setState(a.Services.Call.CallStates.INCOMING),this.trigger(a.Providers.Interfaces.CallServiceCallbackIds.INCOMING_CALL,[e])}.bind(this))}c.prototype=Object.create(a.Base.Observable.prototype),c.prototype.startCall=function(b){return a.Base.Logger.info("Call Service is starting..."),this._registerCallbacks(),this._callProvider.startCall(b,this.isVideoEnabled(),this.isWebCollaborationEnabled())},c.prototype.endCall=function(a){return this._callProvider.stopCall(a).then(function(b){return a._localVideoRemovedCallbacks.fire(a),a._remoteVideoRemovedCallbacks.fire(a),b})},c.prototype.mute=function(a){var b=this._callProvider.muteAudio(a,!0);return b.then(function(){a._isAudioMuted=!0,a._onCallAudioMuteStatusChangedCallbacks.fire(a,!0)}),b},c.prototype.unmute=function(a){var b=this._callProvider.muteAudio(a,!1);return b.then(function(){a._isAudioMuted=!1,a._onCallAudioMuteStatusChangedCallbacks.fire(a,!1)}),b},c.prototype.hold=function(b){var c=this._callProvider.hold(b);return c.then(function(){b._setState(a.Services.Call.CallStates.HELD),b._onCallHeldCallbacks.fire(b)}),c},c.prototype.unhold=function(b){var c=this._callProvider.unhold(b);return c.then(function(){b._setState(a.Services.Call.CallStates.ACTIVE),b._onCallUnheldCallbacks.fire(b)}),c},c.prototype.accept=function(a){return this._registerCallbacks(),this._callProvider.accept(a)},c.prototype.setRemoteParticipant=function(a){},c.prototype.start=function(a){return this._callProvider.start(a)},c.prototype.stop=function(){return this._callProvider.stop()},c.prototype.isVideoEnabled=function(){return a.Base.Utils.isDefined(this._config.callUserConfiguration)&&a.Base.Utils.isDefined(this._config.callUserConfiguration.videoEnabled)?this._config.callUserConfiguration.videoEnabled:!0},c.prototype.isWebCollaborationEnabled=function(){return a.Base.Utils.isDefined(this._config.wcsConfiguration)&&a.Base.Utils.isDefined(this._config.wcsConfiguration.enabled)?this._config.wcsConfiguration.enabled:!0},c.prototype._registerCallbacks=function(){var b=a.Providers.Interfaces.CallProviderCallbackIds;this._callProvider.on(b.CONFERENCE_ESCALATION,function(b,c,d){var e=new a.Services.Conference.Chat(this._chatService);b._conference=new a.Services.Conference.Conference(this._conferenceService,this._participantService,e),a.Base.Utils.isDefined(d)&&(b._conference._collaborationURI=d),b._onCallConferenceStatusChangedCallbacks.fire(b,!0,c,d)}.bind(this)),this._callProvider.on(b.CALL_STARTED,function(a){a._onCallStartedCallbacks.fire(a)}.bind(this)),this._callProvider.on(b.CALL_RINGING,function(b){b._setState(a.Services.Call.CallStates.ALERTING),b._onCallRemoteAlertingCallbacks.fire(b)}.bind(this)),this._callProvider.on(b.CALL_ESTABLISHED,function(b,c){b._setState(a.Services.Call.CallStates.ESTABLISHED),b._onCallEstablishedCallbacks.fire(b)}.bind(this)),this._callProvider.on(b.LOCAL_STREAM_ADDED,function(a,b){b.getVideoTracks()[0]&&a._localVideoAddedCallbacks.fire(a,b)}.bind(this)),this._callProvider.on(b.REMOTE_STREAM_ADDED,function(a,b){b.getVideoTracks()[0]&&a._remoteVideoAddedCallbacks.fire(a,b)}.bind(this)),this._callProvider.on(b.CALL_ENDED,function(b,c){b._setState(a.Services.Call.CallStates.ENDED),b._onCallEndedCallbacks.fire(b,c),this._callManager.deleteCall(b)}.bind(this))},c.prototype._buildUccpConfig=function(a){var b=this._config.uccpConfiguration;return b.serverInfo.webSocketURL=a,b},a.Services.Call.CallService=c}(window.AvayaClientServices=window.AvayaClientServices||{},window.jQuery=window.jQuery||{}),function(a,b){"use strict";var c={ACTIVE:"active",FAILED:"failed",ANSWERED:"answered",INCOMING:"incoming",ALERTING:"alerting",HELD:"held",ENDED:"ended",REMOTELY_ENDED:"remotely ended",STARTING:"starting",ENDING:"ending",ACCEPTING:"accepting",HOLDING:"holding",UNHOLDING:"unholding",REMOTELY_HELD:"remotely held",ESTABLISHED:"established"};a.Services.Call.CallStates=c}(window.AvayaClientServices=window.AvayaClientServices||{},window.jQuery=window.jQuery||{}),function(a,b){"use strict";function c(c){this._callService=c,this._conference="",this._remoteAddress="",this._remoteDisplayName="",this._callId=void 0,this._incoming=!1,this._startTime=void 0,this._holdTime=void 0,this._calledParticipant=void 0,this._callingParticipant=void 0,this._activeParticipants=[],this._scopiaToken=void 0,this._callState="",this._isOTTCall=!1,this._isWebRTCConf=!1,this._confEntryOptions=void 0,this._videoChannels=void 0,this._participantDroppedCallbacks=b.Callbacks(),this._onCallStartedCallbacks=b.Callbacks(),this._onCallRemoteAlertingCallbacks=b.Callbacks(),this._onCallRedirectedCallbacks=b.Callbacks(),this._onCallQueuedCallbacks=b.Callbacks(),this._onCallIgnoredCallbacks=b.Callbacks(),this._onCallEstablishedCallbacks=b.Callbacks(),this._onCallRemoteAddressChangedCallbacks=b.Callbacks(),this._onCallHeldCallbacks=b.Callbacks(),this._onCallUnheldCallbacks=b.Callbacks(),this._onCallHeldRemotelyCallbacks=b.Callbacks(),this._onCallUnheldRemotelyCallbacks=b.Callbacks(),this._onCallJoinedCallbacks=b.Callbacks(),this._onCallEndedCallbacks=b.Callbacks(),this._onCallAudioMuteStatusChangedCallbacks=b.Callbacks(),this._onCallIncomingVideoAddRequestReceivedCallbacks=b.Callbacks(),this._onCallIncomingVideoAddRequestAcceptedCallbacks=b.Callbacks(),this._onCallIncomingVideoAddRequestDeniedCallbacks=b.Callbacks(),this._onCallIncomingVideoAddRequestTimedoutCallbacks=b.Callbacks(),this._onCallDeniedCallbacks=b.Callbacks(),this._onCallConferenceStatusChangedCallbacks=b.Callbacks(),this._localVideoAddedCallbacks=b.Callbacks(),this._remoteVideoAddedCallbacks=b.Callbacks(),this._localVideoRemovedCallbacks=b.Callbacks(),this._remoteVideoRemovedCallbacks=b.Callbacks(),this._callFailedCallbacks=b.Callbacks(),this._callServiceAvailableCallbacks=b.Callbacks(),this._callServiceUnavailableCallbacks=b.Callbacks(),this._isAudioMuted=!1,this._muteCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._videoChannelsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={setRemoteAddress:function(a){this._remoteAddress=a,this._callService.setRemoteParticipant(this)},getRemoteAddress:function(){return this._remoteAddress},getRemoteDisplayName:function(){return this._remoteDisplayName},isIncoming:function(){return this._incoming},getStartTime:function(){return this._startTime},getHoldTime:function(){return this._holdTime},setRemoteDisplayName:function(a){this._remoteDisplayName=a},getRemoteParticipant:function(){return this._calledParticipant.isSelf()?this._callingParticipant:this._calledParticipant},start:function(){return this._callState=a.Services.Call.CallStates.STARTING,this._callService.startCall(this)},end:function(){return this._callState=a.Services.Call.CallStates.ENDING,this._callService.endCall(this)},getConference:function(){return this._conference},hold:function(){this._callState=a.Services.Call.CallStates.HOLDING},unhold:function(){this._callState=a.Services.Call.CallStates.UNHOLDING},ignore:function(){},accept:function(){this._callState=a.Services.Call.CallStates.ACCEPTING,this._callService.accept(this)},deny:function(){return this.end(this)},denyWithReason:function(a){},sendDTMF:function(a){},getState:function(){return this._callState},getRemoteName:function(){return this._remoteDisplayName},getRemoteNumber:function(){return this._remoteAddress},isConference:function(){return"undefined"!=typeof this._conference},canAutoAnswer:function(){},isIgnored:function(){},isRemote:function(){},isHeldRemotely:function(){},isMissed:function(){},isCallerIdentityPrivate:function(){},isServiceAvailable:function(){},getAlertType:function(){},getSubject:function(){},getCallEstablishedTimeStamp:function(){},getCallHeldTimeStamp:function(){},setSubject:function(a){},join:function(){},acceptVideo:function(a){},denyVideo:function(){},getVideoChannels:function(){return this._videoChannels},setVideoChannels:function(a){this._videoChannels=a},removeAllVideoChannels:function(){},getIncomingVideoOffered:function(){},getAudioOnlyChannelId:function(){return this._videoChannels?1:void 0},getCallId:function(){return this._callId},setCallId:function(a){this._callId=a},isAudioMuted:function(){return this._isAudioMuted},muteAudio:function(){var a=b.Deferred();return this._isAudioMuted===!1?this._callService.mute(this).then(function(){this._isAudioMuted=!0,this._muteCapability._updateIfChanged(!1,"Muted"),a.resolve()}.bind(this),function(b){a.reject("Failed to mute audio: "+b)}.bind(this)):a.reject("Audio already muted"),a},unmuteAudio:function(){var a=b.Deferred();return this._isAudioMuted===!0?this._callService.unmute(this).then(function(){this._isAudioMuted=!1,this._muteCapability._updateIfChanged(!0,"Unmuted"),a.resolve()}.bind(this),function(b){a.reject("Failed to unmute audio: "+b)}.bind(this)):a.reject("Audio is already unmuted"),a},transfer:function(a){},attendedTransfer:function(a){},setConferenceEntryOptions:function(a){this._confEntryOptions=a},getConferenceEntryOptions:function(){return this._confEntryOptions},_setState:function(a){this._callState=a}},a.Services.Call.Call=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(c,d){this._callManager=c,this._callService=d,this._callCreatedCallbacks=b.Callbacks(),this._callRemovedCallbacks=b.Callbacks(),this._incomingCallCallbacks=b.Callbacks(),this._undeliveredCallCallbacks=b.Callbacks(),this._callService.on(a.Providers.Interfaces.CallServiceCallbackIds.INCOMING_CALL,function(a){this._incomingCallCallbacks.fire(a)}.bind(this))}c.prototype={createCall:function(){return this._callManager.createCall(this._callService)},getCallCount:function(){return this._callManager.getCallCount()},getVideoCapability:function(){},hasActiveCall:function(){return this._callManager.hasActiveCall()},hasActiveLocalCall:function(){},hasHeldCall:function(){return this._callManager.hasHeldCall()},hasInitiatingCall:function(){return this._callManager.hasInitiatingCall()},isAutoAnswerAdministered:function(){},_start:function(a){return this._callService.start(a)},_stop:function(){return this._callService.stop()}},a.Services.Call.Calls=c}(window.AvayaClientServices=window.AvayaClientServices||{},window.jQuery=window.jQuery||{}),function(a){"use strict";function b(b,c,d,e){this._token=b,this._isOTT=a.Base.Utils.isDefined(c)?c:!1,this._meetingId=a.Base.Utils.isDefined(d)?d:null,this._passcode=a.Base.Utils.isDefined(e)?e:null,this._isWebRTCAbleConf=this._isOTT,this._useDTLS=!1}b.prototype={getToken:function(){return this._token},setToken:function(a){this._token=a},isOTT:function(){return this._isOTT},enableOTT:function(a){this._isOTT=a,this._isWebRTCAbleConf=this._isOTT},getMeetingId:function(){return this._meetingId},setMeetingId:function(a){this._meetingId=a},getPasscode:function(){return this._passcode},setPasscode:function(a){this._passcode=a},enableDtlsSrtpKeyAgreement:function(a){this._useDTLS=a},isDtlsSrtpKeyAgreement:function(){return this._useDTLS},setWebRTCAbleConference:function(a){this._isWebRTCAbleConf=a},isWebRTCAbleConference:function(){return this._isWebRTCAbleConf}},a.Services.Call.ConferenceEntryOptions=b}(AvayaClientServices),function(a,b){"use strict";var c={A:"A",B:"B",C:"C",D:"D",STAR:"*",POUND:"#",ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,SIX:6,SEVEN:7,EIGHT:8,NINE:9,ZERO:0};a.Services.Call.DTMFType=c}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";a.Services.Call.MediaDirection={RECV_ONLY:"recvonly",SEND_ONLY:"sendonly",SEND_RECV:"sendrecv",INACTIVE:"inactive",UNDEFINED:"undefined"}}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b){this._remoteAddress=a.address,this._number=a.number,this._contact=void 0,this._self=b,this._audioMuted=!1,this._handRaised=!1,this._lecturer=!1,this._moderator=!1,this._presenter=!1}b.prototype={getRemoteAddress:function(){return this._remoteAddress},getRemoteDisplayName:function(){},isAudioMuted:function(){return this._audioMuted},isHandRaised:function(){return this._handRaised},isLecturer:function(){return this._lecturer},isModerator:function(){return this._moderator},isPresenter:function(){return this._presenter},hasContact:function(){return void 0!==this._contact},isSelf:function(){return this._self},getContact:function(){return this._contact}},a.Services.Call.Participant=b}(AvayaClientServices),function(a){"use strict";function b(){this._activeParticipants=[],this._selfParticipant=void 0}b.prototype={getOrCreateParticipant:function(b){var c=b.address,d=this._getParticipant(c);if(!d){var e=this._selfParticipant?this._selfParticipant.getRemoteAddress()===c:!1;d=new a.Services.Messaging.Participant(b,e),this._activeParticipants.push(d)}return d},_getParticipant:function(a){return this._activeParticipants.filter(function(b){return b.getAddress()===a})[0]},setSelfParticipant:function(a){this._selfParticipant=a,this._selfParticipant.self=!0},getSelfParticipant:function(){return this._selfParticipant}},a.Services.Call.ParticipantService=b}(AvayaClientServices),function(a,b){"use strict";var c={ACCEPTED:"ACCEPTED",NONE:"NONE",REMOTE_CALL_ESTABLISHED:"REMOTE_CALL_ESTABLISHED",REMOTE_CALL_IN_PROGRESS:"REMOTE_CALL_IN_PROGRESS",REMOTE_CALL_STARTED:"REMOTE_CALL_STARTED",STARTED:"STARTED"};a.Services.Call.TransferProgressCode=c}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";function c(a){this._channelId=a,this._requestedDirection=void 0,this._negotiatedDirection=void 0}c.prototype={getNegotiatedDirection:function(a){return this._negotiatedDirection},getRequestedDirection:function(){return this._requestedDirection},setRequestedDirection:function(a){this._requestedDirection=a},_setNegotiatedDirection:function(a){this._negotiatedDirection=a}},a.Services.Call.VideoChannel=c}(AvayaClientServices,jQuery),function(a){"use strict";a.Services.Call.VideoNetworkSignalingType={INDEFINITE:"indefinite",OFF:"off",SUPPORTED:"supported"}}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a){"use strict";function b(a,b){var c=b.getCollaborationProviders(a);this._whiteboardService=this._createWhiteboardService(c[0]),this._collaborationService=this._createCollaborationService(c[0]),this._contentSharingService=this._createContentSharingService(c[0])}b.prototype={create:function(){var b=this._createWhiteboard(),c=this._createContentSharing();return new a.Services.Collaboration.Collaboration(this._collaborationService,b,c)},_createCollaborationService:function(b){return this._identity=void 0,this._collaborationProviderInitialized=!1,new a.Services.Collaboration.CollaborationService(b)},_createWhiteboardService:function(b){return new a.Services.Collaboration.WhiteboardService(b)},_createContentSharingService:function(b){var c=new a.Providers.ContentSharing.ScreenSharingProviderFactory(b);return new a.Services.Collaboration.ContentSharingService(b,c.getScreenSharingProvider())},_createWhiteboard:function(){return new a.Services.Collaboration.Whiteboard(this._whiteboardService)},_createContentSharing:function(){return new a.Services.Collaboration.ContentSharing(this._contentSharingService)}},a.Services.Collaboration.CollaborationFactory=b}(AvayaClientServices),function(a){"use strict";function b(a){this._collaborationProvider=a,this._collaborationProviderInitialized=!1,this._whiteboards={},this._nextCollaborationId=1}b.prototype={start:function(b,c,d){return a.Base.Logger.debug("CollaborationService start"),this._collaborationProvider.start(c,d).then(function(a){b._selfParticipant=a,b._participants.push(a),b._participants.onDataSetChanged(),this._collaborationProvider.observeCollaboration(b),b.getContentSharing()._recalculateShareApplicationWindowCapability(),b.getContentSharing()._recalculateShareFullScreenCapability(),this._recalculateAllCollaborationCapabilities(b)}.bind(this))},stop:function(b){return a.Base.Logger.debug("CollaborationService start"),b._selfParticipant=void 0,b._participants.length=0,b._participants.onDataSetChanged(),b._onCollaborationStartedCallbacks.empty(),b._onCollaborationEndedCallbacks.empty(),b._onCollaborationServiceAvailableCallbacks.empty(),b._onCollaborationServiceUnavailableCallbacks.empty(),b._onCollaborationNearEndByEjectCallbacks.empty(),b._onCollaborationPresenterPrivilegeChangedCallbacks.empty(),b._onCollaborationModeratorPrivilegeChangedCallbacks.empty(),b._onCollaborationInitializedCallbacks.empty(),b._onCollaborationGetParticipantsResultCallbacks.empty(),b._isPaused=!1,b._callId=void 0,this._collaborationProvider.stop()},getNextCollaborationId:function(){return this._nextCollaborationId++},getParticipants:function(b){a.Base.Logger.debug("getParticipants"),this._collaborationProvider.getParticipants(b).then(function(a){this.updateParticipantList(b,a),b._onCollaborationGetParticipantsResultCallbacks.fire(b._participants)}.bind(this))},updateParticipantList:function(a,b){function c(a,c){return c.getId()===b[a].getId()}for(var d=!1,e=0;e<b.length;e++){var f=a._participants.filter(c.bind(this,e));0===f.length&&(a._participants.push(b[e]),d=!0)}d&&a._participants.onDataSetChanged()},_recalculateAllCollaborationCapabilities:function(a){a._recalculateContentSharingCapability()}},a.Services.Collaboration.CollaborationService=b}(AvayaClientServices),function(a,b){"use strict";function c(c,d,e){this._collaborationService=c,this._whiteboard=d,this._contentSharing=e,this._collaborationId=c?c.getNextCollaborationId():void 0,this._callId=void 0,this._participants=new a.Base.DataSet,this._selfParticipant=void 0,this._onCollaborationStartedCallbacks=b.Callbacks("unique"),this._onCollaborationEndedCallbacks=b.Callbacks("unique"),this._onCollaborationServiceAvailableCallbacks=b.Callbacks("unique"),this._onCollaborationServiceUnavailableCallbacks=b.Callbacks("unique"),this._onCollaborationNearEndByEjectCallbacks=b.Callbacks("unique"),this._onCollaborationPresenterPrivilegeChangedCallbacks=b.Callbacks("unique"),this._onCollaborationModeratorPrivilegeChangedCallbacks=b.Callbacks("unique"),
this._onCollaborationInitializedCallbacks=b.Callbacks("unique"),this._onCollaborationGetParticipantsResultCallbacks=b.Callbacks("unique"),this._isPaused=!1,this._contentSharingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={start:function(a,b){return this._collaborationService.start(this,a,b)},stop:function(){return this._contentSharing.end(),this._whiteboard.stop(),this._collaborationService.stop(this)},getContentSharing:function(){return this._contentSharing},getLibraryManager:function(){},getLibrarySharing:function(){},getWhiteboard:function(){return this._whiteboard},getParticipants:function(){return this._collaborationService.getParticipants(this),this._participants},getCallId:function(){return this._callId},getCollaborationId:function(){return this._collaborationId},hasPresenterPrivilege:function(){},isEjected:function(){},hasModeratorPrivilege:function(){}},a.Services.Collaboration.Collaboration=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a,b,c,d,e,f){this._x=a,this._y=b,this._width=c,this._height=d,this._bitmapData=f,this._imageType=e}b.prototype={getXOffset:function(){return this._x},getYOffset:function(){return this._y},getRawBitmapData:function(){return this._bitmapData},getBlobData:function(){var a=new Blob([this._bitmapData],{type:"image/"+(0===this._imageType?"jpeg":"png")});return window.URL.createObjectURL(a)},getBase64BitmapData:function(){return"data:image/"+(0===this._imageType?"jpeg":"png")+";base64,"+this._toBase64(this._bitmapData)},getWidth:function(){return this._width},getHeight:function(){return this._height},_toBase64:function(a){for(var b,c,d,e,f,g="",h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(a),j=i.byteLength,k=j%3,l=j-k,m=0;l>m;m+=3)f=i[m]<<16|i[m+1]<<8|i[m+2],b=(16515072&f)>>18,c=(258048&f)>>12,d=(4032&f)>>6,e=63&f,g+=h[b]+h[c]+h[d]+h[e];return 1===k?(f=i[l],b=(252&f)>>2,c=(3&f)<<4,g+=h[b]+h[c]+"=="):2===k&&(f=i[l]<<8|i[l+1],b=(64512&f)>>10,c=(1008&f)>>4,d=(15&f)<<2,g+=h[b]+h[c]+h[d]+"="),g}},a.Services.Collaboration.Bitmap=b}(AvayaClientServices),function(a){"use strict";var b={LIBRARY:"LIBRARY",POLLING:"POLLING",MINUTES:"MINUTES",WHITEBOARD:"WHITEBOARD",MESSAGES:"MESSAGES",REPORTS:"REPORTS",SCREEN_SHARING:"SCREEN_SHARING",SLIDER:"SLIDER",REMOTE_CONTROL:"REMOTE_CONTROL"};a.Services.Collaboration.FeaturesAvailable=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this._keyFrame=d,this._height=b,this._width=a,this._bitmaps=c}b.prototype={getBitmaps:function(){return this._bitmaps},getWidth:function(){return this._width},getHeight:function(){return this._height},isKeyFrame:function(){return this._keyFrame}},a.Services.Collaboration.Frame=b}(AvayaClientServices),function(a){"use strict";var b={PRESENTATION:"PRESENTATION",DOCUMENT:"DOCUMENT",PICTURE:"PICTURE",UNKNOWN:"UNKNOWN"};a.Services.Collaboration.LibraryDocumentType=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={getPage:function(a){},getPagePreview:function(a){},getPageFileName:function(a){},getPagePreviewFileName:function(a){},getPageBaseUrl:function(a){}},a.Services.Collaboration.LibraryDocument=b}(AvayaClientServices),function(a){"use strict";function b(a,b){this._x=a,this._y=b}b.prototype={getX:function(){return this._x},getY:function(){return this._y},setX:function(a){this._x=a},setY:function(a){this._y=a}},a.Services.Collaboration.Point=b}(AvayaClientServices),function(a){"use strict";var b={PENDING:"PENDING",CONFIRMED:"CONFIRMED",ERROR:"ERROR"};a.Services.Collaboration.SelectionStatus=b}(AvayaClientServices),function(a){"use strict";var b={SMALL:"4",MEDIUM:"8",LARGE:"12"};a.Services.Collaboration.WhiteboardLineWidths=b}(AvayaClientServices),function(a){"use strict";var b={SMALL:"19",MEDIUM:"23",LARGE:"27"};a.Services.Collaboration.WhiteboardTextSizes=b}(AvayaClientServices),function(a){"use strict";var b={STROKE:"STROKE",FILLED:"FILLED"};a.Services.Collaboration.WhiteboardToolModes=b}(AvayaClientServices),function(a){"use strict";var b={SELECTION:"SELECTION",RECTANGLE:"RECTANGLE",CIRCLE:"CIRCLE",MARKER:"MARKER",PEN:"PEN",LINE:"LINE",STAMP:"STAMP",TEXT:"TEXT",DELETE:"DELETE",CLEAR:"CLEAR"};a.Services.Collaboration.WhiteboardToolTypes=b}(AvayaClientServices),function(a){"use strict";function b(){this._contentSharing=void 0}b.prototype={init:function(a){this._contentSharing=a,a.addOnCursorReceivedCallback(function(a,b){this.showCursor(b)}.bind(this)),a.addOnContentSharingStartedCallback(function(a,b){this.start()}.bind(this)),a.addOnContentSharingEndedCallback(function(a,b){this.stop()}.bind(this)),a.addOnContentSharingPausedCallback(function(a,b){this.pause()}.bind(this)),a.addOnContentSharingResumedCallback(function(a,b){this.unpause()}.bind(this)),a.addOnFrameReceivedCallback(function(a,b){this.drawFrame(b)}.bind(this)),a.addOnFrameChangedCallback(function(a,b){this.drawFrame(b)}.bind(this))},showCursor:function(a){},start:function(){},stop:function(){},pause:function(){},unpause:function(){},drawFrame:function(a){}},a.Services.Collaboration.ContentSharingRenderer=b}(AvayaClientServices),function(a){"use strict";function b(b,d){this._collaborationProvider=b,this._contentSharingType=c.NONE,this._sharingState=a.Services.Collaboration.ContentSharingState.NOT_SHARING,this._contentSharing=void 0,this._screenSharingProvider=d}var c={NONE:"none",FULL_SCREEN_SHARING:"full screen",APPL_WINDOW_SHARING:"application window"};b.prototype={startScreenSharingFullScreen:function(b){return console.log("Content Screen Sharing Service: Start full screen sharing..."),this._contentSharing=b,this._contentSharingType=c.FULL_SCREEN_SHARING,this._initSharingEventHandler(b),this._screenSharingProvider.startFullScreen().then(function(b){return this._sharingState=a.Services.Collaboration.ContentSharingState.SHARING,b}.bind(this))},isSharingFullScreen:function(){return this._sharingState!==a.Services.Collaboration.ContentSharingState.NOT_SHARING&&this._contentSharingType===c.FULL_SCREEN_SHARING},startSharingApplicationWindow:function(b){return console.log("Content Screen Sharing Service: Start appl window sharing..."),this._contentSharing=b,this._contentSharingType=c.APPL_WINDOW_SHARING,this._initSharingEventHandler(b),this._screenSharingProvider.startApplicationWindow().then(function(b){return this._sharingState=a.Services.Collaboration.ContentSharingState.SHARING,b}.bind(this))},isSharingApplicationWindow:function(){return this._sharingState!==a.Services.Collaboration.ContentSharingState.NOT_SHARING&&this._contentSharingType===c.APPL_WINDOW_SHARING},end:function(){if(this._sharingState!==a.Services.Collaboration.ContentSharingState.NOT_SHARING)return console.log("Content Screen Sharing Service: Stop sharing..."),this._sharingState=a.Services.Collaboration.ContentSharingState.NOT_SHARING,this._removeSharingEventHandler(),this._screenSharingProvider.stop();var b=$.Deferred();return b.resolve(),b.promise()},isPresenting:function(){return this._sharingState!==a.Services.Collaboration.ContentSharingState.NOT_SHARING},pause:function(){if(this._sharingState===a.Services.Collaboration.ContentSharingState.SHARING)return console.log("Content Screen Sharing Service: Pause sharing..."),this._sharingState=a.Services.Collaboration.ContentSharingState.PAUSED,this._screenSharingProvider.pause();var b=$.Deferred();return b.resolve(),b.promise()},resume:function(){if(this._sharingState===a.Services.Collaboration.ContentSharingState.PAUSED)return console.log("Content Screen Sharing Service: Resume sharing..."),this._sharingState=a.Services.Collaboration.ContentSharingState.SHARING,this._screenSharingProvider.resume();var b=$.Deferred();return b.resolve(),b.promise()},getShareApplicationWindowCapability:function(){return this._screenSharingProvider.getShareApplicationWindowCapability()},getReceivingBitrate:function(){return this._collaborationProvider.getReceivingBitrate()},getShareFullScreenCapability:function(){return this._screenSharingProvider.getShareFullScreenCapability()},isOpened:function(){return this._screenSharingProvider.isOpened()},isFeatureAvailable:function(a){return this._collaborationProvider.isFeatureAvailable(a)},_initSharingEventHandler:function(a){this._startScreenSharingEventHandler=this._startScreenSharingHandler(),this._endScreenSharingEventHandler=this._endScreenSharingHandler(),a.addOnContentSharingStartedCallback(this._startScreenSharingEventHandler),a.addOnContentSharingEndedCallback(this._endScreenSharingEventHandler)},_removeSharingEventHandler:function(){this._contentSharing.removeOnContentSharingStartedCallback(this._startScreenSharingEventHandler),this._contentSharing.removeOnContentSharingEndedCallback(this._endScreenSharingEventHandler)},_startScreenSharingHandler:function(){return function(a){}.bind(this)},_endScreenSharingHandler:function(){return function(b){this._sharingState!==a.Services.Collaboration.ContentSharingState.NOT_SHARING&&this.end()}.bind(this)},_pauseScreenSharingHandler:function(a){return function(b){a._onContentSharingPausedCallbacks.fire(b)}},_recalculateAllContentSharingCapabilities:function(a){a._recalculateShareApplicationWindowCapability(),a._recalculateShareFullScreenCapability()}},a.Services.Collaboration.ContentSharingService=b}(AvayaClientServices),function(a){"use strict";var b={NOT_SHARING:"not sharing",SHARING:"sharing",PAUSED:"paused"};a.Services.Collaboration.ContentSharingState=b}(AvayaClientServices),function(a,b){"use strict";function c(c){this._contentSharingService=c,this._onContentSharingStartedCallbacks=b.Callbacks(),this._onContentSharingEndedCallbacks=b.Callbacks(),this._onContentSharingPausedCallbacks=b.Callbacks(),this._onContentSharingResumedCallbacks=b.Callbacks(),this._onCursorReceivedCallbacks=b.Callbacks(),this._onFrameStartReceivedCallbacks=b.Callbacks(),this._onFrameEndReceivedCallbacks=b.Callbacks(),this._onFrameReceivedCallbacks=b.Callbacks(),this._onFrameChangedCallbacks=b.Callbacks(),this._onBlockReceivedCallbacks=b.Callbacks(),this._onContentSharingRemoteControlEndCallbacks=b.Callbacks(),this._onContentSharingRemoteControlStartCallbacks=b.Callbacks(),this._onContentSharingRemoteControlOutgoingRequestDenyCallbacks=b.Callbacks(),this._onContentSharingRemoteControlOutgoingRequestGrantCallbacks=b.Callbacks(),this._onContentSharingRemoteControlIncomingOfferCallbacks=b.Callbacks(),this._onContentSharingRemoteControlIncomingDeclineCallbacks=b.Callbacks(),this._onContentSharingRemoteControlIncomingRequestCallbacks=b.Callbacks(),this._onFrameReportReceivedCallbacks=b.Callbacks(),this._shareApplicationWindowCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._shareFullScreenCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={startScreenSharingFullScreen:function(){return this._contentSharingService.startScreenSharingFullScreen(this)},isSharingFullScreen:function(){return this._contentSharingService.isSharingFullScreen()},getReceivingBitrate:function(){return this._contentSharingService.getReceivingBitrate()},startSharingApplicationWindow:function(){return this._contentSharingService.startSharingApplicationWindow(this)},isSharingApplicationWindow:function(){return this._contentSharingService.isSharingApplicationWindow()},end:function(){return this._contentSharingService.end()},isPresenting:function(){return this._contentSharingService.isPresenting()},pause:function(){return this._contentSharingService.pause()},resume:function(){return this._contentSharingService.resume()}},a.Services.Collaboration.ContentSharing=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){}b.prototype={getLibraryContent:function(){},deleteDocument:function(a,b){},renameDocument:function(a,b,c){},uploadDocument:function(a,b,c,d){}},a.Services.Collaboration.LibraryManager=b}(AvayaClientServices=AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype={getContent:function(){},getDocument:function(a){},deleteDocument:function(a){},renameDocument:function(a,b){},uploadDocument:function(a){},getUploadDocumentProgress:function(){},cancelUploadDocument:function(){}},a.Services.Collaboration.LibraryManager=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={isPresenting:function(){},startSharing:function(a){},sharePage:function(a,b,c){},stopSharing:function(a){},addShape:function(a,b){},moveShape:function(a,b){},updateShape:function(a,b){},deleteShape:function(a,b){},getShapes:function(){},clearContent:function(){},onLibrarySharingStarted:function(a,b){},onLibrarySharingEnded:function(a){},onLibrarySharingDocumentPageContentReceived:function(a,b,c,d){}},a.Services.Collaboration.LibrarySharing=b}(AvayaClientServices=AvayaClientServices||{}),function(a){"use strict";function b(){this._onLibrarySlideSharedCallback=$.Callbacks(),this._onLibrarySharingEndedCallback=$.Callbacks()}b.prototype={sharePage:function(a,b){},stopSharing:function(){},getSlides:function(){},getActiveSlide:function(){}},a.Services.Collaboration.LibrarySharing=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c){this._id=a,this._name=b,this._userIp=c}b.prototype={getId:function(){return this._id},getName:function(){return this._name},getUserIp:function(){return this._userIp}},a.Services.Collaboration.Participant=b}(AvayaClientServices),function(a){"use strict";function b(){this.possibleColors=["#cd2029","#f58521","#f3e913","#652d90","#3659a7","#2a8b45","#211e1e","#ffffff","#959595"],this._whiteboard=void 0,this._ended=!1}b.prototype={init:function(a,b){this._whiteboard=a,a.addOnWhiteboardStartedCallback(function(a,c){this._ended=!1,this.start(b)}.bind(this)),a.addOnWhiteboardEndedCallback(function(a){this._ended=!0,this.end()}.bind(this)),a.addOnWhiteboardSurfaceAddedCallback(function(a,b){b.addOnShapeAddedCallback(function(a,b){this.drawShape(b)}.bind(this)),b.addOnShapeDeletedCallback(function(a,b){this.removeShape(b)}.bind(this)),b.addOnShapeUpdatedCallback(function(a,b){this.updateShape(b)}.bind(this)),b.addOnSurfaceClearedCallback(function(){this.clearContent()}.bind(this))}.bind(this)),a.addOnWhiteboardSurfaceRemovedCallback(function(a,b){}.bind(this)),a.addOnWhiteboardSurfaceSetActiveCallback(function(a,c){if(this._ended&&this.start(b),this.clearContent(),c){var d=c.getShapes();for(var e in d)c.getShapes().hasOwnProperty(e)&&this.drawShape(c.getShapes()[e])}}.bind(this))},start:function(){},end:function(){},drawShape:function(a){},removeShape:function(a){},updateShape:function(a){},clearContent:function(){}},a.Services.Collaboration.WhiteboardRenderer=b}(AvayaClientServices),function(a){"use strict";function b(a){this._collaborationProvider=a,this._checkOnNewPoints=void 0,this._throttlingInterval=100}b.prototype={start:function(b,c){var d=jQuery.Deferred();if(!a.Base.Utils.isDefined(c)){var e=b.getSurfaces();return 0===e.length?this._collaborationProvider.startWhiteboard():this._collaborationProvider.startWhiteboard(e[0].getSurfaceId())}return c.isActive()?(d.reject(),d.promise()):this._collaborationProvider.startWhiteboard(c.getSurfaceId())},end:function(a){return this._collaborationProvider.endWhiteboard(a)},stop:function(b){var c=$.Deferred();return b._currentLiveDrawingWhiteboardId=void 0,b._activeSurface=void 0,b._surfaces.length=0,b._onWhiteboardStartedCallbacks.empty(),b._onWhiteboardEndedCallbacks.empty(),b._onWhiteboardSurfaceAddedCallbacks.empty(),b._onWhiteboardSurfaceRemovedCallbacks.empty(),b._onWhiteboardSurfaceSetActiveCallbacks.empty(),b._removeWhiteboardCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),c.resolve(),c.promise()},requestNewSurface:function(){return this._collaborationProvider.addWhiteboardSurface()},removeSurface:function(a,b){var c=jQuery.Deferred();return a.getSurfaces().length>1?this._collaborationProvider.removeWhiteboardSurface(b.getSurfaceId()).then(function(a){c.resolve(a)},function(a){c.reject(a)}):c.reject(),c.promise()},addCircle:function(a,b){return this._collaborationProvider.addCircle(b,a.getSurfaceId()).then(function(c){var d=b.getId();return b.setId(c),delete a.getShapes()[d],a.getShapes()[c]=b,c})},addShape:function(a,b){return b.isFinished()?this._collaborationProvider.addShape(b,a.getSurfaceId()).then(function(c){var d=b.getId();return b.setId(c),delete a.getShapes()[d],a.getShapes()[c]=b,c}):(b._readyToSendCallbacks.add(this._throttleLiveDrawing.bind(this,b,a)),this._collaborationProvider.startDrawShape(b,a.getSurfaceId()).then(function(c){var d=b.getId();return b.setId(c),a.getShapes()[d]=void 0,a.getShapes()[c]=b,c}))},addText:function(a,b){return this._collaborationProvider.addText(b,a.getSurfaceId()).then(function(c){var d=b.getId();return b.setId(c),delete a.getShapes()[d],a.getShapes()[c]=b,c})},moveSelection:function(b,c){return c instanceof a.Services.Collaboration.Shape?this._collaborationProvider.moveSelection(c,b.getSurfaceId(),c.getPoints()[0].point):c instanceof a.Services.Collaboration.Circle?this._collaborationProvider.moveSelection(c,b.getSurfaceId(),c.getTopLeft()):c instanceof a.Services.Collaboration.WhiteboardText?this._collaborationProvider.moveSelection(c,b.getSurfaceId(),c.getPosition()):this._collaborationProvider.moveSelection(c,b.getSurfaceId())},removeShape:function(b,c){if(c.isMine()){var d;return c instanceof a.Services.Collaboration.Shape?d=c.getPoints()[0].point:c instanceof a.Services.Collaboration.Circle?d=c.getTopLeft():c instanceof a.Services.Collaboration.WhiteboardText&&(d=c.getPosition()),this._collaborationProvider.removeShape(c,b.getSurfaceId(),d)}var e=$.Deferred();return e.reject(),e.promise()},clearContent:function(a){return this._collaborationProvider.clearContent(a.getSurfaceId())},endDrawShape:function(a,b){return b.hasPointsToSend()?this._collaborationProvider.liveDrawShape(b,a.getSurfaceId()).then(function(){return this._collaborationProvider.endDrawShape(b,a.getSurfaceId())}.bind(this)):this._collaborationProvider.endDrawShape(b,a.getSurfaceId())},_throttleLiveDrawing:function(a,b){return a.hasPointsToSend()?this._collaborationProvider.liveDrawShape(a,b.getSurfaceId()):void 0}},a.Services.Collaboration.WhiteboardService=b}(AvayaClientServices),function(a){"use strict";function b(a,b){this._whiteboard=a,this._whiteboardService=b,this._shapes={},this._surfaceId=void 0,this._isDrawing=!1,this._active=!1,this._onShapeAddedCallbacks=$.Callbacks(),this._onShapeDeletedCallbacks=$.Callbacks(),this._onShapeUpdatedCallbacks=$.Callbacks(),this._onSurfaceClearedCallbacks=$.Callbacks(),this._onSurfaceStartedCallbacks=$.Callbacks()}b.prototype={getSurfaceId:function(){return this._surfaceId},setAsCurrent:function(){return this._whiteboardService.start(this._whiteboard,this)},addCircle:function(a){return this._appendShape(a._id,a),this._whiteboardService.addCircle(this,a)},addShape:function(a){return this._appendShape(a._id,a),a._onShapeFinished=function(){return this._whiteboardService.endDrawShape(this,a)}.bind(this),this._whiteboardService.addShape(this,a)},addText:function(a){return this._appendShape(a._id,a),this._whiteboardService.addText(this,a)},getShapes:function(){return this._shapes},isActive:function(){return this._active},clearContent:function(){return this._whiteboardService.clearContent(this)},updateShape:function(a){return this._whiteboardService.moveSelection(this,a)},removeShape:function(a){return this._removeShapeById(a._id),this._whiteboardService.removeShape(this,a)},_appendShape:function(a,b){this._shapes[a]||(this._shapes[a]=b)},_getShapeById:function(b){return a.Base.Utils.isDefined(this._shapes[b])?this._shapes[b]:void 0},_removeShapeById:function(a){delete this._shapes[a]},_clearShapes:function(){this._shapes={}}},a.Services.Collaboration.WhiteboardSurface=b}(AvayaClientServices),function(){"use strict";function a(){this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.SELECTION]={name:"Selection",type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.SELECTION},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.PEN]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.PEN,name:"Pen",drag:!1,live:!0},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.MARKER]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.MARKER,name:"Marker",drag:!1,live:!0},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.LINE]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.LINE,name:"Line",drag:!0,live:!1,modes:AvayaClientServices.Services.Collaboration.WhiteboardLineWidths,startFunction:function(){},endFunction:function(){}},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.RECTANGLE]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.RECTANGLE,name:"Rect",drag:!0,live:!1,modes:AvayaClientServices.Services.Collaboration.WhiteboardToolModes,startFunction:function(){},endFunction:function(){}},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.CIRCLE]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.CIRCLE,name:"Circle",drag:!0,live:!1,modes:AvayaClientServices.Services.Collaboration.WhiteboardToolModes,startFunction:function(){},endFunction:function(){}},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.STAMP]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.STAMP,name:"Stamp",drag:!1,live:!1,drawFunction:function(){}},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.TEXT]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.TEXT,name:"Text",drag:!1,live:!1,modes:AvayaClientServices.Services.Collaboration.WhiteboardTextSizes},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.DELETE]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.DELETE,name:"Delete"},this[AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.CLEAR]={type:AvayaClientServices.Services.Collaboration.WhiteboardToolTypes.CLEAR,name:"Clear All"}}AvayaClientServices.Services.Collaboration.WhiteboardTools=a}(),function(a){"use strict";function b(b){this._whiteboardService=b,this._activeSurface=void 0,this._currentLiveDrawingWhiteboardId=void 0,this._onWhiteboardStartedCallbacks=$.Callbacks(),this._onWhiteboardEndedCallbacks=$.Callbacks(),this._onWhiteboardSurfaceAddedCallbacks=$.Callbacks(),this._onWhiteboardSurfaceRemovedCallbacks=$.Callbacks(),this._onWhiteboardSurfaceSetActiveCallbacks=$.Callbacks(),this._surfaces=[],this._removeWhiteboardCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}b.prototype={start:function(){return this._whiteboardService.start(this)},end:function(){return this._whiteboardService.end(this)},stop:function(){return this._whiteboardService.stop(this)},requestNewSurface:function(){return this._whiteboardService.requestNewSurface()},removeSurface:function(a){return this._whiteboardService.removeSurface(this,a)},getSurfaces:function(){return this._surfaces},getSurfaceById:function(a){return this._surfaces.filter(function(b){return b.getSurfaceId()===a})[0]},getActiveSurface:function(){return this._activeSurface},finishShape:function(a){return a.finishDrawing()}},a.Services.Collaboration.Whiteboard=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this.messageContent=a,this.sender=b,this.recipient=c,this.isPrivate=d,this.status=void 0}b.prototype={setStatus:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.status=b}},a.Services.Conference.ChatMessage=b}(AvayaClientServices),function(a){"use strict";function b(a){this._conferenceProvider=a}b.prototype={sendMessage:function(b,c,d){var e=d?d._participantId:void 0,f=d?!0:!1,g=new a.Services.Conference.ChatMessage(c,b._selfParticipant,d,f);return g.setStatus(a.Services.Conference.ChatMessageStatus.PENDING),this.addMessage(b,g),this._conferenceProvider.sendChatMessage(c,e).then(function(){g.setStatus(a.Services.Conference.ChatMessageStatus.CONFIRMED)}.bind(this),function(){g.setStatus(a.Services.Conference.ChatMessageStatus.ERROR)}.bind(this))},addMessage:function(a,b){b.isPrivate?a._privateMessages.push(b):a._publicMessages.push(b),a._allMessages.push(b),a._onChatMessageReceivedCallbacks.fire(a,b)}},a.Services.Conference.ChatService=b}(AvayaClientServices),function(a){"use strict";function b(b){this._chatService=b,this._selfParticipant=void 0,this._privateMessages=new a.Base.DataSet,this._publicMessages=new a.Base.DataSet,this._allMessages=new a.Base.DataSet,this._onChatMessageReceivedCallbacks=$.Callbacks(),this._onChatServiceAvailableCallbacks=$.Callbacks(),this._onChatServiceUnavailableCallbacks=$.Callbacks()}b.prototype={sendPrivateMessage:function(b,c){return a.Base.Utils.validate(c,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Conference.Participant}]}),this._chatService.sendMessage(this,c,b)},sendPublicMessage:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this._chatService.sendMessage(this,b)},getAllPrivateMessages:function(){return this._privateMessages},getAllPublicMessages:function(){return this._publicMessages},getAllMessages:function(){return this._allMessages},_setSelfParticipant:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Conference.Participant}]}),this._selfParticipant=b},_addMessage:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Conference.ChatMessage}]}),this._chatService.addMessage(this,b)}},a.Services.Conference.Chat=b}(AvayaClientServices),function(a){"use strict";function b(a){this._conferenceProvider=a}b.prototype={start:function(b,c){return a.Base.Utils.isDefined(this._conferenceProvider)?(a.Base.Logger.info("Conference Service is starting..."),this._conferenceProvider.start(b,c).then(function(){return this._conferenceProvider.addConferenceEventListeners(b),this._conferenceProvider.observeConference(b),a.Base.Logger.info("Conference Service is started."),b}.bind(this),function(b){a.Base.Logger.error("Failed to start conference service: "+b.message)}.bind(this))):void a.Base.Logger.info("Conference Service is not enabled")},stop:function(b){return this._conferenceProvider.stop().then(function(c){return b._selfParticipantId="",b._activeTalkerId="",b._lecturerId="",b._activeParticipants=[],b._droppedParticipants=[],b._pendingParticipants=[],b._isLectureModeActive=!1,b._isContinuationActive=!1,b._recordingStatus=a.Services.Conference.RecordingStatus.OFF,b._isVideoAllowed=!1,b._isEntryExitToneActive=!1,b._areMultiplePresentersAllowed=!1,b._isWebCollaborationActive=!1,b._isLocked=!1,b._isPinRequiredToBecomeModerator=!1,b._isVideoParticipantNameDisplayActive=!1,b._isVideoSelfSeeActive=!1,b._isVideoSelfSeeChangeAllowed=!1,b._isVideoParticipantNameDisplayChangeAllowed=!1,b._currentVideoLayout="",b._supportedVideoLayouts=[],b._subject="",b._webURI="",b._sipURI="",b._isPresentationModeActive=!1,b._brandName="",b._collaborationURI="",c})},terminateConference:function(a){return this._conferenceProvider.terminateConference()},requestToBecomeModerator:function(a,b){return this._conferenceProvider.requestToBecomeModerator(b)},setAsLecturer:function(a){return this._conferenceProvider.setAsLecturer(a._participantId)},setLocked:function(a,b){return this._conferenceProvider.setLocked(b)},startRecording:function(a,b,c){return this._conferenceProvider.startRecording(a,b,c)},stopRecording:function(a){return this._conferenceProvider.stopRecording(a)},pauseRecording:function(a){return this._conferenceProvider.pauseRecording(a)},resumeRecording:function(a){return this._conferenceProvider.resumeRecording(a)},setVideoLayout:function(a,b){return this._conferenceProvider.setVideoLayout(b)},setVideoLayoutSelfSee:function(a,b){return this._conferenceProvider.setVideoLayoutSelfSee(b)},setVideoLayoutTextOverlay:function(a,b){return this._conferenceProvider.setVideoLayoutTextOverlay(b)},getCurrentVideoLayout:function(a){return this._conferenceProvider.getCurrentVideoLayout()},muteAllParticipants:function(a){return this._conferenceProvider.muteUnmuteAll(!0)},unmuteAllParticipants:function(a){return this._conferenceProvider.muteUnmuteAll(!1)},setContinuation:function(a,b){return this._conferenceProvider.setContinuation(b)},raiseLowerHand:function(b){return b?this._conferenceProvider.raiseLowerHand(a.Services.Conference.ParticipantHandState.RAISE):this._conferenceProvider.raiseLowerHand(a.Services.Conference.ParticipantHandState.LOWER)},disconnectParticipant:function(a){return this._conferenceProvider.disconnectParticipant(a)},_recalculateAllCapabilities:function(a){a._recalculateSetLockCapability(),a._recalculateDisplayVideoParticipantNameCapability(),a._recalculateVideoSelfSeeCapability(),a._recalculateSetVideoLayoutCapability(),a._recalculateStartStopRecordingCapability(),a._recalculatePauseResumeRecordingCapability(),a._recalculateMuteUnmuteAllCapability(),a._recalculateSetContinuationStatusCapability(),a._recalculateRaiseHandSupportCapability(),a._recalculateLowerHandSupportCapability(),a._recalculateRequestToBecomeModeratorCapability(),a._recalculateRemoveSelectParticipantCapability()}},a.Services.Conference.ConferenceService=b}(AvayaClientServices),function(a,b){"use strict";function c(c,d,e){this._conferenceService=c,this._participantService=d,this._chat=e,this._selfParticipantId="",this._selfParticipant=void 0,this._activeTalkerId="",this._dialoutPermissions=void 0,this._recordingPermissions=void 0,this._lecturerId="",this._activeParticipants=[],this._droppedParticipants=[],this._pendingParticipants=[],this._isLectureModeActive=!1,this._isContinuationActive=!1,this._recordingStatus=a.Services.Conference.RecordingStatus.OFF,this._recorderStatus="none",this._isVideoAllowed=!1,this._encryptionStatus=a.Services.Conference.MeetingEncryptionStatus.NO,this._isEntryExitToneActive=!1,this._areMultiplePresentersAllowed=!1,this._isWebCollaborationActive=!1,this._isLocked=!1,this._isPinRequiredToBecomeModerator=!1,this._isVideoParticipantNameDisplayActive=!1,this._isVideoSelfSeeActive=!1,this._currentVideoLayout=void 0,this._supportedVideoLayouts=[],this._isVideoSelfSeeChangeAllowed=!1,this._isVideoParticipantNameDisplayChangeAllowed=!1,this._isStreamingActive=!1,this._terminationTime=void 0,this._subject="",this._webURI="",this._sipURI="",this._isPresentationModeActive=!1,this._brandName="",this._collaborationURI="",this._onConferenceCapabilitiesChangedCallbacks=b.Callbacks(),this._onConferenceLockStatusChangedCallbacks=b.Callbacks(),this._onConferenceDisplayParticipantNameOnVideoChangedCallbacks=b.Callbacks(),this._onConferenceVideoSelfSeeChangedCallbacks=b.Callbacks(),this._onConferenceVideoLayoutChangedCallbacks=b.Callbacks(),this._onConferenceDisplayParticipantNameOnVideoAllowedCallbacks=b.Callbacks(),this._onConferenceVideoSelfSeeAllowedCallbacks=b.Callbacks(),this._onConferenceSupportedVideoLayoutsChangedCallbacks=b.Callbacks(),this._onConferenceSubjectChangedCallbacks=b.Callbacks(),this._onConferenceContinuationStatusChangedCallbacks=b.Callbacks(),this._onConferenceRecordingStatusChangedCallbacks=b.Callbacks(),this._onConferenceRecordingFailedCallbacks=b.Callbacks(),this._onConferenceVideoStatusChangedCallbacks=b.Callbacks(),this._onConferenceLectureModeStatusChangedCallbacks=b.Callbacks(),this._onConferenceEntryExitToneChangedCallbacks=b.Callbacks(),this._onConferencePresentationModeStatusChangedCallbacks=b.Callbacks(),this._onConferenceActiveTalkersChangedCallbacks=b.Callbacks(),this._onConferenceActiveVideoParticipantsChangedCallbacks=b.Callbacks(),this._onConferenceParticipantRoleChangedCallbacks=b.Callbacks(),this._onConferenceParticipantAudioMuteStatusChangedCallbacks=b.Callbacks(),this._onConferenceParticipantVideoBlockStatusChangedCallbacks=b.Callbacks(),
this._onConferenceAllParticipantsMutedCallbacks=b.Callbacks(),this._onConferenceAllParticipantsUnmutedCallbacks=b.Callbacks(),this._onConferenceEncryptionStatusChangedCallbacks=b.Callbacks(),this._onConferenceStreamingStatusChangedCallbacks=b.Callbacks(),this._onConferenceParticipantRaiseHandStatusChangedCallbacks=b.Callbacks(),this._onConferencePendingParticipantCallbacks=b.Callbacks(),this._onConferencePendingParticipantRemovedCallbacks=b.Callbacks(),this._onConferenceDroppedParticipantAddedCallbacks=b.Callbacks(),this._onConferenceDroppedParticipantRemovedCallbacks=b.Callbacks(),this._onConferenceServiceAvailableCallbacks=b.Callbacks(),this._onConferenceServiceUnavailableCallbacks=b.Callbacks(),this._onConferenceParticipantsAddedCallbacks=b.Callbacks(),this._onConferenceParticipantsRemovedCallbacks=b.Callbacks(),this._onConferenceMeetingTerminationTimeChangedCallbacks=b.Callbacks(),this._onConferenceMeetingTerminationInProgressCallbacks=b.Callbacks(),this._onConferenceCollaborationURIChangedCallbacks=b.Callbacks(),this._setAsLecturerCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setLectureModeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._muteUnmuteParticipantCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._blockUnblockParticipantVideoCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setLockCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._startRecordingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._stopRecordingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._pauseRecordingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._resumeRecordingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._muteUnmuteAllCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setContinuationStatusCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._raiseHandSupportCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._lowerHandSupportCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setDisplayVideoParticipantNameCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setVideoSelfSeeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setVideoLayoutCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setRequestToBecomeModeratorCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeSelectParticipantCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={start:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"}]}),this._conferenceService.start(this,b)},stop:function(){return this._conferenceService.stop(this)},getInConferenceChat:function(){return this._chat},getMeetingMinutes:function(){},getCollaborationURI:function(){return this._collaborationURI},isLocked:function(){return this._isLocked},setLocked:function(a){return this._conferenceService.setLocked(this,a)},isVideoSelfSeeActive:function(){return this._isVideoSelfSeeActive},setVideoSelfSee:function(a){return this._conferenceService.setVideoLayoutSelfSee(this,a)},isVideoParticipantNameDisplayActive:function(){return this._isVideoParticipantNameDisplayActive},setDisplayVideoParticipantName:function(a){return this._conferenceService.setVideoLayoutTextOverlay(this,a)},getSupportedVideoLayoutList:function(){return this._supportedVideoLayouts},isLectureModeActive:function(){return this._isLectureModeActive},setLectureMode:function(a){},isContinuationActive:function(){return this._isContinuationActive},setContinuation:function(a){return this._conferenceService.setContinuation(this,a)},startRecording:function(a,b){return this._conferenceService.startRecording(this,a,b)},stopRecording:function(){return this._conferenceService.stopRecording(this)},pauseRecording:function(){return this._conferenceService.pauseRecording(this)},resumeRecording:function(){return this._conferenceService.resumeRecording(this)},isVideoAllowed:function(){return this._isVideoAllowed},setVideoAllowed:function(a){},isEntryExitToneActive:function(){return this._isEntryExitToneActive},setEntryExitTone:function(a){},areMultiplePresentersAllowed:function(){return this._areMultiplePresentersAllowed},setMultiplePresentersAllowed:function(a){},getCurrentVideoLayout:function(){return this._currentVideoLayout},setVideoLayout:function(a){return this._conferenceService.setVideoLayout(this,a)},getActiveParticipants:function(){return this._activeParticipants},getDroppedParticipants:function(){return this._droppedParticipants},getPendingParticipants:function(){return this._pendingParticipants},muteAllParticipants:function(){return this._conferenceService.muteAllParticipants(this)},unmuteAllParticipants:function(){return this._conferenceService.unmuteAllParticipants(this)},addParticipant:function(a){},addParticipantFromExistingCall:function(a){},removeParticipant:function(a){return this._conferenceService.disconnectParticipant(a)},removeLastParticipant:function(){},terminateConference:function(){return this._conferenceService.terminateConference(this)},isPinRequiredToBecomeModerator:function(){return this._isPinRequiredToBecomeModerator},requestToBecomeModerator:function(a){return this._conferenceService.requestToBecomeModerator(this,a)},raiseHand:function(){return this._conferenceService.raiseLowerHand(!0)},lowerHand:function(){return this._conferenceService.raiseLowerHand(!1)},_recalculateAllCapabilities:function(){this._conferenceService._recalculateAllCapabilities(this)},getSelfParticipant:function(){return this._selfParticipant},isRecordingActive:function(){return this._recordingStatus===a.Services.Conference.RecordingStatus.ON||this._recordingStatus===a.Services.Conference.RecordingStatus.PAUSE},isRecordingPaused:function(){return this._recordingStatus===a.Services.Conference.RecordingStatus.PAUSE},getEncryptionStatus:function(){return this._encryptionStatus},getSubject:function(){return this._subject},isStreamingActive:function(){return this._isStreamingActive}},a.Services.Conference.Conference=c}(AvayaClientServices,jQuery),function(a){"use strict";var b={SUCCESS:"success",INCORRECT_PASSCODE_TRY_AGAIN:"incorrectPasscodeTryAgain",INCORRECT_PASSCODE_DISCONNECTING:"incorrectPasscodeDisconnecting",PENDING_APPROVAL:"pendingApproval",REJECTED:"rejected"};a.Services.Conference.AdmissionResponseCode=b}(AvayaClientServices),function(a){"use strict";var b={PENDING:"pending",CONFIRMED:"confirmed",ERROR:"error"};a.Services.Conference.ChatMessageStatus=b}(AvayaClientServices),function(a){"use strict";var b={PRIVATE:"private",PUBLIC:"public"};a.Services.Conference.ChatType=b}(AvayaClientServices),function(a){"use strict";var b={ACTIVE:"active",ALLOWED:"allowed",NOT_ALLOWED:"notAllowed"};a.Services.Conference.ContentFromParticipantStatus=b}(AvayaClientServices),function(a){"use strict";var b={ACTIVE:"active",NA:"na",SELF_MUTED:"selfMuted",MODERATOR_MUTED:"moderatorMuted",BOTH_MUTED:"bothMuted"};a.Services.Conference.MediaFromParticipantStatus=b}(AvayaClientServices),function(a){"use strict";var b={AVAILABLE:"available",NA:"na"};a.Services.Conference.MediaToParticipantStatus=b}(AvayaClientServices),function(a){"use strict";var b={AUDIO:"audio",VIDEO:"video"};a.Services.Conference.MediaType=b}(AvayaClientServices),function(a){"use strict";var b={YES:"yes",NO:"no",PARTIAL:"partial"};a.Services.Conference.MeetingEncryptionStatus=b}(AvayaClientServices),function(a){"use strict";var b={ADMIT:"admit",REJECT:"reject"};a.Services.Conference.ModeratorAdmissionActions=b}(AvayaClientServices),function(a){"use strict";var b={ACTIVE:"active",AUTHORIZING:"authorizing"};a.Services.Conference.ParticipantAuthorizationStatus=b}(AvayaClientServices),function(a){"use strict";var b={CONNECTION_STATUS_UNKNOWN:"CONNECTION_STATUS_UNKNOWN",CONNECTION_STATUS_CONNECTING:"CONNECTION_STATUS_CONNECTING",CONNECTION_STATUS_CONNECTED:"CONNECTION_STATUS_CONNECTED",CONNECTION_STATUS_DISCONNECTING:"CONNECTION_STATUS_DISCONNECTING",CONNECTION_STATUS_DISCONNECTED:"CONNECTION_STATUS_DISCONNECTED"};a.Services.Conference.ParticipantConnectionStatus=b}(AvayaClientServices),function(a){"use strict";var b={DISCONNECT_REASON_UNKNOWN:"DISCONNECT_REASON_UNKNOWN",DISCONNECT_REASON_DEPARTED:"DISCONNECT_REASON_DEPARTED",DISCONNECT_REASON_DISCONNECTED_BY_MODERATOR:"DISCONNECT_REASON_DISCONNECTED_BY_MODERATOR"};a.Services.Conference.ParticipantDisconnectionReason=b}(AvayaClientServices),function(a){"use strict";var b={RAISE:"raise",LOWER:"lower"};a.Services.Conference.ParticipantHandState=b}(AvayaClientServices),function(a){"use strict";var b={MEDIA_STATUS_NO_MEDIA:"MEDIA_STATUS_NO_MEDIA",MEDIA_STATUS_INACTIVE:"MEDIA_STATUS_INACTIVE",MEDIA_STATUS_RECEIVE_ONLY:"MEDIA_STATUS_RECEIVE_ONLY",MEDIA_STATUS_SEND_ONLY:"MEDIA_STATUS_SEND_ONLY",MEDIA_STATUS_SEND_RECEIVE:"MEDIA_STATUS_SEND_RECEIVE"};a.Services.Conference.ParticipantMediaState=b}(AvayaClientServices),function(a){"use strict";var b={MODERATOR:"moderator",PARTICIPANT:"participant",GUEST:"guest",OPERATOR:"operator"};a.Services.Conference.ParticipantRole=b}(AvayaClientServices),function(a){"use strict";var b={ALLOWED:"allowed",NOT_ALLOWED:"notAllowed",NEED_SIGNIN:"needSignin",NEED_MODERATOR:"needModerator",NEED_SIGNIN_OR_MODERATOR:"needSigninOrModerator"};a.Services.Conference.PermissionStatus=b}(AvayaClientServices),function(a){"use strict";var b={NONE:"none",START_STOP:"start/stop",WITH_PAUSE:"withPause"};a.Services.Conference.RecorderStatus=b}(AvayaClientServices),function(a){"use strict";var b={START:"start",STOP:"stop",PAUSE:"pause",RESUME:"resume"};a.Services.Conference.RecordingOperation=b}(AvayaClientServices),function(a){"use strict";var b={ON:"on",OFF:"off",PAUSE:"pause"};a.Services.Conference.RecordingStatus=b}(AvayaClientServices),function(a){"use strict";var b={LAYOUT_AUTOMATIC:"0",LAYOUT_SINGLE_SCREEN:"10",LAYOUT_DOUBLE_SCREEN_LANDSCAPE:"20",LAYOUT_DOUBLE_SCREEN_HORIZONTAL:"21",LAYOUT_DOUBLE_SCREEN_VERTICAL:"22",LAYOUT_OVER_1:"23",LAYOUT_OVER_2:"24",LAYOUT_OVER_3:"25",LAYOUT_OVER_4:"26",LAYOUT_DOUBLE_SCREEN_4_TO_1:"27",LAYOUT_1_HOST_1_PIP:"28",LAYOUT_PYRAMID_3:"32",LAYOUT_LANDSCAPE_PLUS_2_ASYM:"33",LAYOUT_1_HOST_2_PIP:"34",LAYOUT_2x2:"40",LAYOUT_4_PYRAMID:"41",LAYOUT_3_PLUS_1:"42",LAYOUT_1_HOST_3_PIP:"43",LAYOUT_5_PYRAMID:"51",LAYOUT_1_HOST_4_PIP:"52",LAYOUT_5_PLUS_1:"60",LAYOUT_3x2:"61",LAYOUT_3_PLUS_4_2:"72",LAYOUT_3_PLUS_4_4:"74",LAYOUT_6_PLUS_1_1:"75",LAYOUT_7_PLUS_1_NEW:"81",LAYOUT_4x2:"82",LAYOUT_3x3:"90",LAYOUT_9_PYRAMID:"91",LAYOUT_8_PLUS_2_1_2:"101",LAYOUT_8_PLUS_2_3_4:"103",LAYOUT_4x3:"120",LAYOUT_12_PLUS_1_1:"131",LAYOUT_12_PLUS_1_2:"132",LAYOUT_12_PLUS_1_3:"133",LAYOUT_12_PLUS_1_4:"134",LAYOUT_12_PLUS_1_5:"135",LAYOUT_4x4:"160",LAYOUT_20_PLUS_1:"210",LAYOUT_20_PLUS_1_LEFT:"211",LAYOUT_1_PLUS_27:"280"};a.Services.Conference.VideoLayout=b}(AvayaClientServices),function(a){"use strict";function b(){this.id="",this.time=void 0,this.content="",this.type=void 0,this.sender=void 0,this.personal=!1,this.mine=!1,this.status=void 0}b.prototype={getId:function(){return this.id},getTime:function(){return this.time},getContent:function(){return this.content},getType:function(){return this.type},getSender:function(){return this.sender},isPersonal:function(){return this.personal},isMine:function(){return this.mine},getStatus:function(){return this.status}},a.Services.Conference.MeetingMinute=b}(AvayaClientServices),function(a){"use strict";function b(){this._onMeetingMinutesServiceAvailableCallbacks=$.Callbacks(),this._onMeetingMinutesServiceUnavailableCallbacks=$.Callbacks()}b.prototype={addMinute:function(a){},updateMinute:function(a){},removeMinute:function(a){},getMinutes:function(){},addOnMeetingMinutesServiceAvailableCallback:function(a){this._onMeetingMinutesServiceAvailableCallbacks.add(a)},removeOnMeetingMinutesServiceAvailableCallback:function(a){this._onMeetingMinutesServiceAvailableCallbacks.remove(a)},addOnMeetingMinutesServiceUnavailableCallback:function(a){this._onMeetingMinutesServiceUnavailableCallbacks.add(a)},removeOnMeetingMinutesServiceUnavailableCallback:function(a){this._onMeetingMinutesServiceUnavailableCallbacks.remove(a)}},a.Services.Conference.MeetingMinutes=b}(AvayaClientServices),function(a){"use strict";function b(a){this._conferenceProvider=a}b.prototype={setAsLecturer:function(a){return this._conferenceProvider.setAsLecturer(a.getParticipantId())},unsetAsLecturer:function(){return this._conferenceProvider.unsetAsLecturer()},mute:function(b){return this._conferenceProvider.muteUnmute(b.getParticipantId(),a.Services.Conference.MediaType.AUDIO,!0)},unmute:function(b){return this._conferenceProvider.muteUnmute(b.getParticipantId(),a.Services.Conference.MediaType.AUDIO,!1)},accept:function(b){return this._conferenceProvider.moderatorAdmission(b,a.Services.Conference.ModeratorAdmissionActions.ADMIT)},deny:function(b){return this._conferenceProvider.moderatorAdmission(b,a.Services.Conference.ModeratorAdmissionActions.REJECT)},blockVideo:function(b){return this._conferenceProvider.muteUnmute(b.getParticipantId(),a.Services.Conference.MediaType.VIDEO,!0)},unblockVideo:function(b){return this._conferenceProvider.muteUnmute(b.getParticipantId(),a.Services.Conference.MediaType.VIDEO,!1)},lowerHand:function(a,b){return this._conferenceProvider.moderatorLowerHand(a.getParticipantId(),b)},recalculateAllCapabilities:function(a){a._recalculateBlockUnblockVideoCapability(),a._recalculateMuteUnmuteCapability(),a._recalculateLowerHandCapability(),a._recalculateSetAsLecturerCapability()}},a.Services.Conference.ParticipantService=b}(AvayaClientServices),function(a){"use strict";function b(b,c){this._participantService=b,this._conference=c,this._address="",this._participantId=void 0,this._participantName="",this._status="",this._isLocalUser=!1,this._onParticipantStatusChangedCallbacks=$.Callbacks(),this._setUnsetAsLecturerCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._muteUnmuteCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._blockUnblockVideoCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._lowerHandCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}b.prototype={getAddress:function(){return this._address},getDisplayName:function(){return this._participantName},getParticipantId:function(){return this._participantId},getParticipantAuthorizationStatus:function(){return this._status},isPendingParticipant:function(){return this._status===a.Services.Conference.ParticipantAuthorizationStatus.AUTHORIZING},isActiveParticipant:function(){return this._status===a.Services.Conference.ParticipantAuthorizationStatus.ACTIVE},isLocalUser:function(){return this._isLocalUser},getBestContactMatch:function(){},getAllPossibleContactMatches:function(){},setMatchedContacts:function(){},_recalculateAllCapabilities:function(){this._participantService.recalculateAllCapabilities(this)}},a.Services.Conference.Participant=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Services.Conference.Participant.call(this,b,c),this._onPendingParticipantAcceptedCallbacks=$.Callbacks(),this._onPendingParticipantCancelledCallbacks=$.Callbacks(),this._onPendingParticipantDeniedCallbacks=$.Callbacks()}b.prototype=Object.create(a.Services.Conference.Participant.prototype),b.prototype.accept=function(){return this._participantService.accept(this)},b.prototype.deny=function(){return this._participantService.deny(this)},a.Services.Conference.PendingParticipant=b}(AvayaClientServices),function(a,b){"use strict";function c(){this._source="",this._writeCapability=new a.Base.Capability}c.prototype={getSource:function(){return this._source},setSource:function(a){this._source=a},getWriteCapability:function(){return this._writeCapability},setWriteCapability:function(a){this._writeCapability=a}},a.Services.Contacts.ContactField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Services.Contacts.ContactField.call(this),this._handle=void 0,this._handleType=a.Services.Contacts.ContactHandleType.HANDLE_WORK}c.prototype=Object.create(a.Services.Contacts.ContactField.prototype),c.prototype.getHandle=function(){return this._phoneNumber},c.prototype.setHandle=function(a){this._phoneNumber=a},c.prototype.getHandleType=function(){return this._handleType},c.prototype.setHandleType=function(a){this._handleType=a},a.Services.Contacts.ContactHandleField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Services.Contacts.ContactField.call(this),this._value=0}c.prototype=Object.create(a.Services.Contacts.ContactField.prototype),c.prototype.getValue=function(){return this._value},c.prototype.setValue=function(a){this._value=a},a.Services.Contacts.ContactNumberField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Services.Contacts.ContactField.call(this),this._phoneNumber=void 0,this._label1=void 0,this._label2=void 0,this._phoneNumberType=a.Services.Contacts.ContactPhoneNumberType.PHONE_NUMBER_WORK,this._speedDialEnabled=!1,this._default=!1}c.prototype=Object.create(a.Services.Contacts.ContactField.prototype),c.prototype.getPhoneNumber=function(){return this._phoneNumber},c.prototype.setPhoneNumber=function(a){this._phoneNumber=a},c.prototype.getLabel1=function(){return this._label1},c.prototype.setLabel1=function(a){this._label1=a},c.prototype.getLabel2=function(){return this._label2},c.prototype.setLabel2=function(a){this._label2=a},c.prototype.getPhoneNumberType=function(){return this._phoneNumberType},c.prototype.setPhoneNumberType=function(a){this._phoneNumberType=a},c.prototype.isSpeedDialEnabled=function(){return this._speedDialEnabled},c.prototype.setSpeedDialEnabled=function(a){this._speedDialEnabled=a},c.prototype.isDefault=function(){return this._default},c.prototype.setDefault=function(a){this._default=a},a.Services.Contacts.ContactPhoneField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Services.Contacts.ContactField.call(this),this._value=void 0}c.prototype=Object.create(a.Services.Contacts.ContactField.prototype),c.prototype.getValue=function(){return this._value},c.prototype.setValue=function(a){this._value=a},a.Services.Contacts.ContactStringField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b,c,d,e,f){this._uniqueSearchId=a.Base.Utils.makeId(16),this._searchString=b,this._searchScope=c,this._searchSource=d,this._maxResults=e,this._maxChunkSize=f}c.prototype={getUniqueSearchId:function(){return this._uniqueSearchId},getSearchString:function(){return this._searchString},getSearchScope:function(){return this._searchScope},getSearchSource:function(){return this._searchSource},getMaxResults:function(){return this._maxResults},getMaxChunkSize:function(){return this._maxChunkSize}},a.Services.Contacts.ContactSearchRequest=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){this._uniqueAddressForMatching="",this._givenName=new a.Services.Contacts.ContactStringField,this._surname=new a.Services.Contacts.ContactStringField,this._displayName=new a.Services.Contacts.ContactStringField,this._asciiGivenName=new a.Services.Contacts.ContactStringField,this._asciiSurname=new a.Services.Contacts.ContactStringField,this._asciiDisplayName=new a.Services.Contacts.ContactStringField,this._asciiAlias=new a.Services.Contacts.ContactStringField,this._alias=new a.Services.Contacts.ContactStringField,this._company=new a.Services.Contacts.ContactStringField,this._location=new a.Services.Contacts.ContactStringField,this._workRoomNo=new a.Services.Contacts.ContactStringField,this._streetAddress=new a.Services.Contacts.ContactStringField,this._city=new a.Services.Contacts.ContactStringField,this._state=new a.Services.Contacts.ContactStringField,this._country=new a.Services.Contacts.ContactStringField,this._postalCode=new a.Services.Contacts.ContactStringField,this._manager=new a.Services.Contacts.ContactStringField,this._department=new a.Services.Contacts.ContactStringField,this._language=new a.Services.Contacts.ContactStringField,this._emailAddresses=[],this._phoneNumbers=[],this._handles=[],this._buddy=new a.Services.Contacts.ContactBooleanField,this._favorite=new a.Services.Contacts.ContactBooleanField,this._videoCapable=new a.Services.Contacts.ContactBooleanField,this._rank=new a.Services.Contacts.ContactNumberField,this._notes=new a.Services.Contacts.ContactStringField,this._custom1=[],this._custom2=[],this._custom3=[],this._pictureUrlMap={}}c.prototype={getUniqueAddressForMatching:function(){return this._uniqueAddressForMatching},setUniqueAddressForMatching:function(a){this._uniqueAddressForMatching=a},getGivenName:function(){return this._givenName},getSurname:function(){return this._surname},getDisplayName:function(){return this._displayName},getASCIIGivenName:function(){return this._asciiGivenName},getASCIISurname:function(){return this._asciiSurname},getASCIIDisplayName:function(){return this._asciiDisplayName},getASCIIAlias:function(){return this._asciiAlias},getAlias:function(){return this._alias},getLocation:function(){return this._location},getWorkRoomNo:function(){return this._workRoomNo},getStreetAddress:function(){return this._streetAddress},getCity:function(){return this._city},getState:function(){return this._state},getCountry:function(){return this._country},getPostalCode:function(){return this._postalCode},getCompany:function(){return this._company},getManager:function(){return this._manager},getDepartment:function(){return this._department},getPictureUrl:function(b){return b&&a.Services.Contacts.ContactPictureSize[b]||(b=a.Services.Contacts.ContactPictureSize.MEDIUM),this._pictureUrlMap[b]},addPictureUrl:function(b,c){b&&a.Services.Contacts.ContactPictureSize[b]&&c&&(this._pictureUrlMap[b]=c)},getLanguage:function(){return this._language},getEmailAddresses:function(){return this._emailAddresses},getPhoneNumbers:function(){return this._phoneNumbers},getHandles:function(){return this._handles},isBuddy:function(){return this._buddy},isFavorite:function(){return this._favorite},isVideoCapable:function(){return this._videoCapable},getNotes:function(){return this._notes},getRank:function(){return this._rank},getCustom1:function(){return this._custom1},getCustom2:function(){return this._custom2},getCustom3:function(){return this._custom3},startPresence:function(){},stopPresence:function(){},getPresence:function(){},addOnPresenceChangedCallback:function(a){},removeOnPresenceChangedCallback:function(a){}},a.Services.Contacts.Contact=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a,b){Error.call(this,b),this._reason=a,this._message=b}b.prototype=Object.create(Error.prototype),b.prototype.getReason=function(){return this._reason},b.prototype.getMessage=function(){return this._message},a.Services.Contacts.ContactsError=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c){this._started=!1,this._contactsModule=void 0,this._contactsProvider=b,this._directorySearchProvider=c,this._addContactCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._updateContactCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._deleteContactCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._searchContactCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED)}c.prototype={start:function(a,c){var d=b.Deferred();this._started=!0,this._contactsModule=a;var e=function(a){this._started=!1,d.reject(a)}.bind(this),f=function(){return this._contactsProvider.start(c).fail(e.bind(this))}.bind(this),g=function(){return this._directorySearchProvider.start(c).fail(e.bind(this))}.bind(this);return f().then(g).then(function(){this._registerContactChangesCallbacks(),this._recalculateCapabilities(),d.resolve()}.bind(this)),d.promise()},stop:function(a){var c=b.Deferred();this._started||c.reject({code:401,message:"Contacts service is not running"}),this._started=!1;var d=function(a){this._started=!0,c.reject(a)}.bind(this),e=function(){return this._contactsProvider.stop().fail(d)}.bind(this),f=function(){return this._directorySearchProvider.stop().fail(d)}.bind(this);return e().then(f).then(function(){c.resolve()}),c.promise()},createEditableContact:function(){return this._contactsProvider.createContactForAdd()},createEditableContactFromContact:function(c){var d=this._contactsProvider.createContactForAdd(),e=b.extend(!0,new a.Services.Contacts.EditableContact,c);e.getGivenName().setWriteCapability(d.getGivenName().getWriteCapability()),e.getSurname().setWriteCapability(d.getSurname().getWriteCapability()),e.getDisplayName().setWriteCapability(d.getDisplayName().getWriteCapability()),e.getASCIIGivenName().setWriteCapability(d.getASCIIGivenName().getWriteCapability()),e.getASCIISurname().setWriteCapability(d.getASCIISurname().getWriteCapability()),e.getASCIIDisplayName().setWriteCapability(d.getASCIIDisplayName().getWriteCapability()),e.getAlias().setWriteCapability(d.getAlias().getWriteCapability()),e.getASCIIAlias().setWriteCapability(d.getASCIIAlias().getWriteCapability()),e.getLocation().setWriteCapability(d.getLocation().getWriteCapability()),e.getWorkRoomNo().setWriteCapability(d.getWorkRoomNo().getWriteCapability()),e.getStreetAddress().setWriteCapability(d.getStreetAddress().getWriteCapability()),e.getCity().setWriteCapability(d.getCity().getWriteCapability()),e.getState().setWriteCapability(d.getState().getWriteCapability()),e.getCountry().setWriteCapability(d.getCountry().getWriteCapability()),e.getPostalCode().setWriteCapability(d.getPostalCode().getWriteCapability()),e.getCompany().setWriteCapability(d.getCompany().getWriteCapability()),e.getManager().setWriteCapability(d.getManager().getWriteCapability()),e.getDepartment().setWriteCapability(d.getDepartment().getWriteCapability()),e.getLanguage().setWriteCapability(d.getLanguage().getWriteCapability()),e.getNotes().setWriteCapability(d.getNotes().getWriteCapability()),e.getRank().setWriteCapability(d.getRank().getWriteCapability()),e.isBuddy().setWriteCapability(d.isBuddy().getWriteCapability()),e.isFavorite().setWriteCapability(d.isFavorite().getWriteCapability());for(var f=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),g=e.getEmailAddresses(),h=0;h<g.length;h++)g[h].setWriteCapability(f);var i=e.getPhoneNumbers();for(h=0;h<i.length;h++)i[h].setWriteCapability(f);var j=e.getHandles();for(h=0;h<j.length;h++)j[h].setWriteCapability(f);var k=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),l=e.getCustom1();for(h=0;h<l.length;h++)l[h].setWriteCapability(k);var m=e.getCustom2();for(h=0;h<m.length;h++)m[h].setWriteCapability(k);var n=e.getCustom3();for(h=0;h<n.length;h++)n[h].setWriteCapability(k);return e},addContact:function(a){return this._contactsProvider.addContact(a)},editContact:function(a,b){return this._contactsProvider.updateContact(a)},deleteContact:function(a){return this._contactsProvider.deleteContact(a)},getContacts:function(b){var c=new a.Base.DataSet,d=new a.Base.DataRetrieval(c),e=function(a){for(var b=a.length,d=0;b>d;d++)c.push(a[d]);c.onDataSetChanged()}.bind(this),f=function(a){e(a)}.bind(this),g=function(a){e(a),d.onDataRetrievalDone()}.bind(this);return this._contactsProvider.retrieveAllContacts().then(g,d.onDataRetrievalFailed.bind(d),f),d},searchContacts:function(b){var c=new a.Base.DataSet,d=new a.Base.DataRetrieval(c),e=function(a){for(var b=a.length,d=0;b>d;d++)c.push(a[d]);c.onDataSetChanged()}.bind(this),f=function(a){e(a)}.bind(this),g=function(a){e(a),d.onDataRetrievalDone()}.bind(this);return this._directorySearchProvider.startDirectorySearch(b).then(g,d.onDataRetrievalFailed.bind(d),f),d},cancelSearchContacts:function(a){return this._directorySearchProvider.stopDirectorySearch(a)},getContactsChanges:function(){this._contactsProvider.getContactsChanges()},getAddContactCapability:function(){return this._addContactCapability},getUpdateContactCapability:function(){return this._updateContactCapability},getDeleteContactCapability:function(){return this._deleteContactCapability},getSearchContactCapability:function(){return this._searchContactCapability},_recalculateCapabilities:function(){var a=!1,b=this._contactsProvider.getAddContactCapability();this._addContactCapability!==b&&(this._addContactCapability=b,a=!0);var c=this._contactsProvider.getUpdateContactCapability();this._updateContactCapability!==c&&(this._updateContactCapability=c,a=!0);var d=this._contactsProvider.getDeleteContactCapability();this._deleteContactCapability!==d&&(this._deleteContactCapability=d,a=!0);var e=this._directorySearchProvider.getSearchContactCapability();this._searchContactCapability!==e&&(this._searchContactCapability=e,a=!0),a&&this._contactsModule._onCapabilitiesChangedCallbacks.fire(this)},_registerContactChangesCallbacks:function(){var b=a.Providers.Interfaces.ContactsProviderCallbackIds;this._contactsProvider.on(b.CONTACT_ADDED,function(a,b){this._contactsModule._onContactAddedCallbacks.fire(this._contactsModule,a)}.bind(this)),this._contactsProvider.on(b.CONTACT_UPDATED,function(a,b){this._contactsModule._onContactUpdatedCallbacks.fire(this._contactsModule,a)}.bind(this)),this._contactsProvider.on(b.CONTACT_DELETED,function(a,b){this._contactsModule._onContactDeletedCallbacks.fire(this._contactsModule,a)}.bind(this)),this._contactsProvider.on(b.CAPABILITIES_CHANGED,this._recalculateCapabilities.bind(this)),this._directorySearchProvider.on(b.CAPABILITIES_CHANGED,this._recalculateCapabilities.bind(this))}},a.Services.Contacts.ContactsService=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(a){this._contactsService=a,this._onContactAddedCallbacks=b.Callbacks(),this._onContactUpdatedCallbacks=b.Callbacks(),this._onContactDeletedCallbacks=b.Callbacks(),this._onContactLoadingCompleteCallbacks=b.Callbacks(),this._onCapabilitiesChangedCallbacks=b.Callbacks()}c.prototype={createEditableContact:function(){return this._contactsService.createEditableContact()},createEditableContactFromContact:function(a){return this._contactsService.createEditableContactFromContact(a)},addContact:function(a){return this._contactsService.addContact(a)},editContact:function(a,b){return this._contactsService.editContact(a,b)},deleteContact:function(a){return this._contactsService.deleteContact(a)},getContacts:function(){return this._contactsService.getContacts()},searchContacts:function(b,c,d,e,f){var g=new a.Services.Contacts.ContactSearchRequest(b,c,d,e,f);return this._contactsService.searchContacts(g)},cancelSearchContacts:function(a){},refineSearchContacts:function(a,b){},start:function(a){return this._contactsService.start(this,a)},stop:function(){return this._contactsService.stop(this).then(function(){this._onContactAddedCallbacks.empty(),this._onContactUpdatedCallbacks.empty(),this._onContactDeletedCallbacks.empty(),this._onContactLoadingCompleteCallbacks.empty(),this._onCapabilitiesChangedCallbacks.empty()}.bind(this))}},a.Services.Contacts.Contacts=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a,b){Error.call(this,b),this._reason=a,this._message=b}b.prototype=Object.create(Error.prototype),b.prototype.getReason=function(){return this._reason},b.prototype.getMessage=function(){return this._message},a.Services.Contacts.DirectorySearchError=b;
}(AvayaClientServices),function(a,b){"use strict";function c(){a.Services.Contacts.Contact.call(this)}c.prototype=Object.create(a.Services.Contacts.Contact.prototype),c.prototype.setGivenName=function(a){this._givenName=a},c.prototype.setSurname=function(a){this._surname=a},c.prototype.setDisplayName=function(a){this._displayName=a},c.prototype.setASCIIGivenName=function(a){this._asciiGivenName=a},c.prototype.setASCIISurname=function(a){this._asciiSurName=a},c.prototype.setASCIIDisplayName=function(a){this._asciiDisplayName=a},c.prototype.setAlias=function(a){this._alias=a},c.prototype.setASCIIAlias=function(a){this._asciiAlias=a},c.prototype.setLocation=function(a){this._location=a},c.prototype.setWorkRoomNo=function(a){this._workRoomNo=a},c.prototype.setStreetAddress=function(a){this._streetAddress=a},c.prototype.setCity=function(a){this._city=a},c.prototype.setState=function(a){this._state=a},c.prototype.setCountry=function(a){this._country=a},c.prototype.setPostalCode=function(a){this._postalCode=a},c.prototype.setCompany=function(a){this._company=a},c.prototype.setManager=function(a){this._manager=a},c.prototype.setDepartment=function(a){this._department=a},c.prototype.setLanguage=function(a){this._language=a},c.prototype.setEmailAddresses=function(a){this._emailAddresses=a},c.prototype.setPhoneNumbers=function(a){this._phoneNumbers=a},c.prototype.setHandles=function(a){this._handles=a},c.prototype.setBuddy=function(a){this._buddy=a},c.prototype.setFavorite=function(a){this._favorite=a},c.prototype.setNotes=function(a){this._notes=a},c.prototype.setRank=function(a){this._rank=a},a.Services.Contacts.EditableContact=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={EMAIL_ADDRESS_WORK:"EMAIL_ADDRESS_WORK",EMAIL_ADDRESS_OTHER:"EMAIL_ADDRESS_OTHER"};a.Services.Contacts.ContactEmailAddressType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={HANDLE_WORK:"HANDLE_WORK",HANDLE_OTHER:"HANDLE_OTHER"};a.Services.Contacts.ContactHandleType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={PHONE_NUMBER_WORK:"PHONE_NUMBER_WORK",PHONE_NUMBER_MOBILE:"PHONE_NUMBER_MOBILE",PHONE_NUMBER_HOME:"PHONE_NUMBER_HOME",PHONE_NUMBER_FAX:"PHONE_NUMBER_FAX",PHONE_NUMBER_PAGER:"PHONE_NUMBER_PAGER",PHONE_NUMBER_OTHER:"PHONE_NUMBER_OTHER"};a.Services.Contacts.ContactPhoneNumberType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={XSMALL:"XSMALL",SMALL:"SMALL",MEDIUM:"MEDIUM",LARGE:"LARGE",XLARGE:"XLARGE",XXLARGE:"XXLARGE"};a.Services.Contacts.ContactPictureSize=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={UNKNOWN_REASON:"UNKNOWN_REASON",INTERNAL_ERROR:"INTERNAL_ERROR",RETRY:"RETRY",SOURCE_NOT_CONNECTED:"SOURCE_NOT_CONNECTED",AUTHENTICATION_FAILED:"AUTHENTICATION_FAILED",REQUEST_TIMEOUT:"REQUEST_TIMEOUT",REQUEST_CANCELLED:"REQUEST_CANCELLED",DUPLICATE_CONTACT:"DUPLICATE_CONTACT",INVALID_CONTACT:"INVALID_CONTACT",REQUIRED_DATA_MISSING:"REQUIRED_DATA_MISSING",DELETE_CONTACT_NOT_SUPPORTED:"DELETE_CONTACT_NOT_SUPPORTED",ADD_CONTACT_NOT_SUPPORTED:"ADD_CONTACT_NOT_SUPPORTED",UPDATE_CONTACT_NOT_SUPPORTED:"UPDATE_CONTACT_NOT_SUPPORTED",NOT_FOUND:"NOT_FOUND"};a.Services.Contacts.ContactsErrorReason=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={UNKNOWN_REASON:"UNKNOWN_REASON",INTERNAL_ERROR:"INTERNAL_ERROR",RETRY:"RETRY",SOURCE_NOT_CONNECTED:"SOURCE_NOT_CONNECTED",AUTHENTICATION_FAILED:"AUTHENTICATION_FAILED",REQUEST_TIMEOUT:"REQUEST_TIMEOUT",REQUEST_CANCELLED:"REQUEST_CANCELLED",INVALID_SEARCH_REQUEST:"INVALID_SEARCH_SOURCE_TYPE",INVALID_SEARCH_STRING:"INVALID_SEARCH_STRING",INVALID_SEARCH_SOURCE:"INVALID_SEARCH_SOURCE",INVALID_SEARCH_SCOPE:"INVALID_SEARCH_SCOPE",INVALID_MAX_CHUNK_SIZE:"INVALID_CHUNK_SIZE",INVALID_MAX_RESULTS:"INVALID_MAX_RESULTS"};a.Services.Contacts.DirectorySearchErrorReason=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={PROVIDER_SOURCE_ACS:"PROVIDER_SOURCE_ACS",PROVIDER_SOURCE_OTHER:"PROVIDER_SOURCE_OTHER"};a.Services.Contacts.ProviderSourceType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={GIVEN_NAME:"GIVEN_NAME",SURNAME:"SURNAME",PHONE_NUMBER:"PHONE_NUMBER",EMAIL_ADDRESS:"EMAIL_ADDRESS",IM_HANDLE:"IM_HANDLE",ALL:"ALL"};a.Services.Contacts.SearchScopeType=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={LOCAL:"LOCAL",NETWORK:"NETWORK",ALL:"ALL"};a.Services.Contacts.SearchSourceType=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a){this._attachmentBuilder=a}b.prototype={_resizeImage:function(a,b){var c,d,e=document.createElement("canvas");return b.scale?(d=a.width*b.scale,c=a.height*b.scale):b.width&&!b.height?(d=b.width,c=parseInt(b.width*a.height/a.width)):b.height&&!b.width?(d=parseInt(b.height*a.width/a.height),c=b.height):(d=a.width,c=a.height),e.height=c,e.width=d,e.getContext("2d").drawImage(a,0,0,d,c),e.toDataURL("image/jpeg")},create:function(){}},a.Services.Messaging.AbstractThumbnailCreator=b}(AvayaClientServices),function(){"use strict";function a(a){this._thumbnailCreator=a}a.prototype={build:function(a,b){var c=new AvayaClientServices.Services.Messaging.Attachment(this._thumbnailCreator);return a=a||{},c.disposition=a.disposition,c.duration=a.duration,c.mimeType=a.mimeType,c.id=a.partId,c.location=a.location||a.media,c.size=a.size,c.name=c.getName(),c.file=b,c.status=a.status||AvayaClientServices.Services.Messaging.ResourceStatus.PUBLISHED,this._recalculateCapabilities(c),c},update:function(a,b){b.thumbnail&&(a.thumbnail.location=b.thumbnail.location),a.id=b.partId,a.location=b.location||b.media,a.duration!==b.duration&&(a.duration=b.duration,a._onDurationChangedCallbacks.fire(a,b.duration)),a.status!==AvayaClientServices.Services.Messaging.ResourceStatus.PUBLISHED&&(a.status=AvayaClientServices.Services.Messaging.ResourceStatus.PUBLISHED,a._onResourceStatusChangedCallbacks.fire(a,AvayaClientServices.Services.Messaging.ResourceStatus.PUBLISHED)),a.file&&(a.file=void 0)},_recalculateCapabilities:function(a){a._recalculateUpdateNameCapability(),a._recalculateUpdateMimeTypeCapability(),a._recalculateUpdateDurationCapability(),a._recalculateUpdateSizeCapability(),a._recalculateUpdateLocationCapability(),a._recalculateUpdateIsSelfGeneratedCapability(),a._recalculateCreateThumbnailCapability(),a._recalculateRemoveThumbnailCapability(),a._recalculateCanDownloadCapability(),a._recalculateCanConsumeCapability(),a._recalculateRemoveCapability()}},AvayaClientServices.Services.Messaging.AttachmentBuilder=a}(AvayaClientServices),function(a,b){"use strict";function c(c){this._thumbnailCreator=c,this.disposition="",this.duration=-1,this.mimeType="",this.id="",this.size=-1,this.file=void 0,this.status="",this.name="",this.location="",this.thumbnail=void 0,this._onNameChangedCallbacks=b.Callbacks(),this._onMimeTypeChangedCallbacks=b.Callbacks(),this._onDurationChangedCallbacks=b.Callbacks(),this._onSizeChangedCallbacks=b.Callbacks(),this._onResourceStatusChangedCallbacks=b.Callbacks(),this._onConsumptionStatusChangedCallbacks=b.Callbacks(),this._onTypeChangedCallbacks=b.Callbacks(),this._onHasThumbnailChangedCallbacks=b.Callbacks(),this._onIsSelfGeneratedCallbacks=b.Callbacks(),this._updateNameCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateMimeTypeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateDurationCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateSizeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateLocationCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateIsSelfGeneratedCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createThumbnailCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeThumbnailCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._canDownloadCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._canConsumeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={getAttachmentStatus:function(){return this.status},getName:function(){return this.name?this.name:this.disposition&&-1!==this.disposition.search("filename")?(this.name=new RegExp(/filename="([^"\\]*(?:\\.[^"\\]*)*)"/i).exec(this.disposition)[1],this.name):void 0},getMimeType:function(){return this.mimeType},isThumbnail:function(){return-1!==this.disposition.indexOf("inline")},getDuration:function(){return this.duration},getSize:function(){return this.size},getLocation:function(){return this.location},getAttachmentConsumptionStatus:function(){},getType:function(){return this.disposition?-1!==this.disposition.indexOf("inline")?a.Services.Messaging.AttachmentType.THUMBNAIL:a.Services.Messaging.AttachmentType.MAIN:void 0},isGeneratedContent:function(){},getThumbnail:function(){return this.isThumbnail()?this:this.thumbnail},setName:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.name=b},setMimeType:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.mimeType=b},setDuration:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"number"}]}),this.duration=b},setSize:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"number"}]}),this.size=b},setLocation:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.location=b},setIsGeneratedContent:function(a){},download:function(){return this.location},createThumbnail:function(){return this.getCreateThumbnailCapability().isAllowed?this._thumbnailCreator.create(this):!1},createThumbnailFromResource:function(a){},removeThumbnail:function(){},setResourceStatus:function(a){this.status=a,this._onResourceStatusChangedCallbacks.fire(a)}},a.Services.Messaging.Attachment=c}(AvayaClientServices,jQuery),function(a){"use strict";var b={READY_TO_DOWNLOAD:"READY_TO_DOWNLOAD",DOWNLOADING:"DOWNLOADING",READY_TO_CONSUME:"READY_TO_CONSUME",CONSUMED:"CONSUMED",ERROR:"ERROR"};a.Services.Messaging.AttachmentStatus=b}(AvayaClientServices),function(a){"use strict";var b={MAIN:"MAIN",THUMBNAIL:"THUMBNAIL"};a.Services.Messaging.AttachmentType=b}(AvayaClientServices),function(a,b){"use strict";function c(a,b){this.action=a?a.action||"typing":"typing",this.participant=b,this.state=a?a.state||"paused":"paused",this.timestamp=a?a.timestamp:void 0}c.prototype={getAction:function(){return this.action},getParticipant:function(){return this.participant},getState:function(){return this.state},getTimestamp:function(){return this.timestamp}},a.Services.Messaging.ChatStateEvent=c}(AvayaClientServices,jQuery),function(a){"use strict";var b={TOPIC:"TOPIC",THREAD:"THREAD"};a.Services.Messaging.ConversationType=b}(AvayaClientServices),function(a){"use strict";var b={DISPLAY_ORDER_FIRST:"DISPLAY_ORDER_FIRST",DISPLAY_ORDER_LAST:"DISPLAY_ORDER_LAST"};a.Services.Messaging.DisplayOrder=b}(AvayaClientServices),function(a){"use strict";var b={HIGH:"HIGH",LOW:"LOW",NORMAL:"NORMAL"};a.Services.Messaging.MessageImportance=b}(AvayaClientServices),function(a){"use strict";var b={MESSAGE:"MESSAGE",JOINED:"JOINED",LEFT:"LEFT",SESSION:"SESSION",SUBJECT_CHANGED:"SUBJECT_CHANGED",CLOSED:"CLOSED",START:"START"};a.Services.Messaging.MessageType=b}(AvayaClientServices),function(a){"use strict";function b(){this._searchBody=!1,this._searchParticipants=!1,this._searchSubject=!1,this._resultsPerConversation=0,this._query="",this._after=void 0}b.prototype={isSearchParticipants:function(){return this._searchParticipants},isSearchSubject:function(){return this._searchSubject},isSearchBody:function(){return this._searchBody},getQueryAfter:function(){return this._after},getQuery:function(){return this._query},getNumberResultsPerConversation:function(){return this._resultsPerConversation},searchParticipants:function(a){this._searchParticipants=a},searchSubject:function(a){this._searchSubject=a},searchBody:function(a){this._searchBody=a},setQueryAfter:function(a){this._after=a},setQuery:function(a){this._query=a.toLowerCase()},setNumberResultsPerConversation:function(a){this._resultsPerConversation=a}},a.Services.Messaging.MessagingQuery=b}(AvayaClientServices),function(a){"use strict";var b={POLL_PUSH_MODE:{value:0,description:"continous"},POLL_1_MIN:{value:1,description:"1 minutes"},POLL_2_MIN:{value:2,description:"2 minutes"},POLL_5_MIN:{value:5,description:"5 minutes"},POLL_15_MIN:{value:15,description:"15 minutes"},POLL_60_MIN:{value:60,description:"60 minutes"},POLL_MANUAL_MODE:{value:1e3,description:"manual"}};a.Services.Messaging.RefreshMode=b}(AvayaClientServices),function(a){"use strict";var b={DRAFT_UNSENT:"DRAFT_UNSENT",DRAFT_SENDING:"DRAFT_SENDING",DRAFT_REMOVING:"DRAFT_REMOVING",DRAFT_ERROR:"DRAFT_ERROR",PUBLISHED:"PUBLISHED",PUBLISHED_SENT_PENDING_DELIVERY_OFFLINE:"PUBLISHED_SENT_PENDING_DELIVERY_OFFLINE",PUBLISHED_SENT_PENDING_DELIVERY_DND:"PUBLISHED_SENT_PENDING_DELIVERY_DND"};a.Services.Messaging.ResourceStatus=b}(AvayaClientServices),function(a){"use strict";var b={NORMAL:"NORMAL",PERSONAL:"PERSONAL",PRIVATE:"PRIVATE",CONFIDENTIAL:"CONFIDENTIAL"};a.Services.Messaging.SensitivityLevel=b}(AvayaClientServices),function(a){"use strict";var b={AUDIO:"AUDIO",VIDEO:"VIDEO"};a.Services.Messaging.SessionType=b}(AvayaClientServices),function(a){"use strict";function b(a){this._href=a?a.href||"":"",this._id=a?a.id||"":"",this._lastAccessedTime=a?a.lastAccessedTime||"":"",this._lastUpdated=a?a.lastUpdated||"":""}b.prototype={getHref:function(){return this._href},getId:function(){return this._id},getLastAccessedTime:function(){return this._lastAccessedTime},getLastUpdatedTime:function(){return this._lastUpdated}},a.Services.Messaging.ConversationId=b}(AvayaClientServices),function(a,b){"use strict";function c(a,b,c,d,e,f){this._provider=a,this._messageService=b,this._participantsService=c,this._escalationService=d,this._messageBuilder=e,this._messagingService=void 0,this.TIMEOUT_FOR_TYPING=3e3,this._conversationBuilder=f}c.prototype={getParticipants:function(a,b,c){return a.participants},createMessage:function(b){var c={subject:b.subject,threadId:b.id,to:b.participants,event:{type:a.Services.Messaging.MessageType.MESSAGE},resourceStatus:a.Services.Messaging.ResourceStatus.DRAFT_UNSENT,flags:{sensitivity:b.getSensitivity()}},d=this._messageBuilder.build(c,this._participantsService.getSelfParticipant(),this._messageService,b);return b.getLastMessage()&&(d.coalesced=this._messageBuilder.isMessageCoalesced(d,b.getLastMessage())),d.addOnResourceStatusChangedCallback(function(c,e){if(e===a.Services.Messaging.ResourceStatus.PUBLISHED){var f=b._draftMessages.indexOf(c);b._draftMessages.splice(f,1),b.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_SENDING&&(b.id=c.getThreadId(),b.getParticipants(),b.setResourceStatus(a.Services.Messaging.ResourceStatus.PUBLISHED))}else e===a.Services.Messaging.ResourceStatus.DRAFT_ERROR?(b.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_SENDING&&b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_ERROR),b.messages.onDataSetChanged()):e===a.Services.Messaging.ResourceStatus.DRAFT_SENDING&&(b.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT&&b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_SENDING),b._onMessagesAddedCallbacks.fire(b,[d]),b.messages.onDataSetChanged());this._messageService._recalculateAllMessageCapabilities(d)}.bind(this)),b._draftMessages.push(d),b.messages.unshift(d),d},getMessageById:function(a,b){for(var c=0;c<a.length;c++)if(a[c].id===b)return a[c]},createNewClientMessage:function(a,b){return this._messageBuilder.build(a,this._participantsService.getOrCreateParticipant(a.from),this._messageService,b)},leave:function(a){var c=b.Deferred();return this._provider.leaveConversation(a.id).then(function(){this._messagingService.conversations.splice(this._messagingService.conversations.indexOf(a),1),this._messagingService.conversations.onDataSetChanged(),c.resolve(!0)}.bind(this),function(a){c.reject(a)}),c.promise()},changeSubject:function(a,b){for(var c={threadId:a.id,body:"",event:{type:"SUBJECT_CHANGE"},subject:b,to:[]},d=a.getParticipants(),e=0;e<d.length;e++)c.to.push({address:d[e].address,type:d[e].type});return this._provider.changeSubject(c)},getOtherMessages:function(a,b,c,d){return this._provider.getMessages(d.id,c,a,b).then(function(a){return d.messages.length>0&&this._conversationBuilder.update(d,a,this),a}.bind(this),function(a){return a})},markAllAsRead:function(a){return this._provider.markAllAsRead(a.id)},markMultipleAsRead:function(a,b,c){return this._provider.markAllAsRead(a.id,b,c)},removeMessage:function(a,c,d){var e=b.Deferred();if(d)if(d.getRemoveCapability().isAllowed){var f=a.indexOf(d);f>=0&&(a.splice(f,1),a.onDataSetChanged()),f=c.indexOf(d),f>=0&&c.splice(f,1),e.resolve()}else e.reject(d.getRemoveCapability().denialReason);else e.reject();return e.promise()},createEscalation:function(b,c){var d={type:a.Services.Messaging.MessageType.SESSION,sessionType:c,extensions:{},conversation:b},e=new a.Services.Messaging.Escalation(d,this._escalationService);return e.addParticipants(this.getParticipants(b)),e.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_UNSENT),e.addOnResourceStatusChangedCallback(function(c,d){if(d===a.Services.Messaging.ResourceStatus.PUBLISHED){var f=b._draftEscalations.indexOf(c);b._draftEscalations.splice(f,1)}else d===a.Services.Messaging.ResourceStatus.DRAFT_ERROR?b.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_SENDING&&b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_ERROR):d===a.Services.Messaging.ResourceStatus.DRAFT_SENDING&&b.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT&&b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_SENDING);this._escalationService._recalculateAllEscalationCapabilities(e)}.bind(this)),e},removeEscalation:function(a,c){var d=b.Deferred();if(a)if(a.getRemoveCapability().isAllowed){var e=c.indexOf(a);e>=0&&c.splice(e,1),d.resolve()}else d.reject(a.getRemoveCapability().denialReason);else d.reject();return d.promise()},addParticipantsAddresses:function(c,d){var e=b.Deferred(),f=!1,g={participants:[]};a.Base.Utils.clean(d,"");for(var h=0;h<d.length;h++)g.participants.push({address:d[h],type:"CONTACT"}),f=!0;return this.validateUsers(d).then(function(b){c.getStatus()===a.Services.Messaging.ResourceStatus.PUBLISHED?f?this._provider.addParticipantsToConversation(c.id,g).then(function(a){this._updateParticipantsList(c,a.participants),e.resolve(a)}.bind(this),function(a){e.reject(a)}):e.reject("Empty list of participants to add."):c.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT&&this._updateParticipantsList(c,b)}.bind(this),function(a){e.reject(a)}),e.promise()},validateUsers:function(a){function c(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)}for(var d,e=b.Deferred(),f=this._provider.getRoutableDomains(),g=[],h=[],i=0;i<a.length;i++){d=!1;for(var j=0;j<f.length;j++)null!==a[i].match(f[j])&&c(a[i])&&(g.push(a[i]),d=!0);d||h.push(a[i])}return g.length===a.length?this._provider.validateUsers(a).then(function(a){if(a.validatedAddresses[0].addresses.length>0){for(var b=[],c=0;c<a.validatedAddresses.length;c++)b.push(a.validatedAddresses[c].addresses[0]);e.resolve(b)}else e.reject(a)}.bind(this),function(a){e.reject(a)}):e.reject(h),e.promise()},addParticipants:function(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].address);return this.addParticipantsAddresses(a,c)},_updateParticipantsList:function(a,b){for(var c,d=!1,e=[],f=0;f<b.length;f++){c=!0;for(var g=0;g<a.participants.length;g++)if(b[f].address===a.participants[g].address){c=!1;break}if(c){var h=this._participantsService.getOrCreateParticipant(b[f]);e.push(h),a.participants.push(h),d=!0}}return d&&(a.participants.onDataSetChanged(),a._onParticipantsAddedCallbacks.fire(a,e)),a.participants},getParticipantsFromMessage:function(b){for(var c=new a.Base.DataSet,d=0;d<b.to.length;d++){var e=this._participantsService.getOrCreateParticipant(b.to[d]);c.push(e)}if(a.Base.Utils.isDefined(b.event)&&b.event.type===a.Services.Messaging.MessageType.LEFT)for(var f=0;f<b.event.participants.length;f++){var g=this._participantsService.getOrCreateParticipant(b.event.participants[f]),h=c.indexOf(g);c.splice(h,1)}return c},removeParticipantsAddresses:function(c,d){var e=b.Deferred(),f=!1,g=[];if(a.Base.Utils.clean(d,""),c.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT){for(var h=0;h<d.length;h++)for(var i=c.participants.length-1;i>=0;i--)if(c.participants[i].address===d[h]){g.push(c.participants.splice(i,1)[0]),f=!0;break}f&&(c.participants.onDataSetChanged(),c._onParticipantsRemovedCallbacks.fire(c,g)),e.resolve()}else e.reject("Could not remove participants");return e.promise()},removeParticipants:function(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].address);return this.removeParticipantsAddresses(a,c)},close:function(a){return this._provider.close(a.id).then(function(b){return a.closed=!0,a._onClosedStatusChangedCallbacks.fire(a,a.closed),b}.bind(this))},setLastAccessTime:function(a){this._provider.setLastAccessTime(a.id,{}).then(function(){a._onLastAccessTimeChangedCallbacks.fire(a,a.lastAccessTime)})},subscribeForTypingEvents:function(b,c){var d=function(d){if(c){var e=new a.Services.Messaging.ChatStateEvent(d,this._participantsService._getParticipant(d.address));c(e)}"composing"===d.state?this.addComposingParticipantToConversation(b,this._participantsService._getParticipant(d.address)):"paused"===d.state&&this.removeComposingParticipantFromConversation(b,this._participantsService._getParticipant(d.address))}.bind(this);return this._provider.subscribeForTypingEventsInConversation(b.getId(),d).then(function(a){return b._isSubscribed=!0,this._recalculateAllConversationCapabilities(b),a}.bind(this))},unsubscribeForTypingEvents:function(a){return this._provider.unsubscribeForTypingEventsInConversation(a.getId()).then(function(b){return a._isSubscribed=!1,this._recalculateAllConversationCapabilities(a),b}.bind(this))},reportTyping:function(b){var c=this._participantsService.getSelfParticipant(),d=this.addComposingParticipantToConversation(b.conversation,c);d?(this._setTypingTimeout(b.conversation),this._provider.reportTyping(b.threadId,!0).then(function(a){},function(b){a.Base.Logger.error("Error on report typing: ",b)})):(clearTimeout(b.conversation._typingTimeout),this._setTypingTimeout(b.conversation))},pauseTyping:function(b){clearTimeout(b._typingTimeout),this._provider.reportTyping(b.id,!1).then(function(){var a=this._participantsService.getSelfParticipant();this.removeComposingParticipantFromConversation(b,a)}.bind(this),function(b){a.Base.Logger.error("Error on report paused typing: ",b)})},reportRecordingAudio:function(a){return this._provider.reportRecordingAudio(a.getId(),!0)},pauseRecordingAudio:function(a){return this._provider.reportRecordingAudio(a.getId(),!1)},reportRecordingVideo:function(a){return this._provider.reportRecordingVideo(a.getId(),!0)},pauseRecordingVideo:function(a){return this._provider.reportRecordingVideo(a.getId(),!1)},reportAttachingFile:function(a){return this._provider.reportAttachingFile(a.getId(),!0)},pauseAttachingFile:function(a){return this._provider.reportAttachingFile(a.getId(),!1)},reportTakingPicture:function(a){return this._provider.reportTakingPicture(a.getId(),!0)},pauseTakingPicture:function(a){return this._provider.reportTakingPicture(a.getId(),!1)},_setTypingTimeout:function(a){a._typingTimeout=setTimeout(function(){this.pauseTyping(a)}.bind(this),this.TIMEOUT_FOR_TYPING)},addComposingParticipantToConversation:function(a,b){return a.getComposingParticipants().indexOf(b)<0?(a.composingParticipants.push(b),a._onIsComposingStatusChangedCallbacks.fire(a,!0),!0):!1},removeComposingParticipantFromConversation:function(a,b){var c=a.composingParticipants.indexOf(b);c>=0&&(a.composingParticipants.splice(c,1),a._onIsComposingStatusChangedCallbacks.fire(a,!0))},isOpened:function(){return this._provider.isOpened()},_recalculateAllConversationCapabilities:function(a){a._recalculateUpdateSubjectCapability(),a._recalculateUpdateLastAccessTimeCapability(),a._recalculateUpdateSensitivityCapability(),a._recalculateOlderContentCapability(),a._recalculateAddParticipantsCapability(),a._recalculateRemoveParticipantsCapability(),a._recalculateCreateMessageCapability(),a._recalculateCreateEscalationCapability(),a._recalculateMarkAllContentAsReadCapability(),a._recalculateLeaveCapability(),a._recalculateRemoveCapability(),a._recalculateStartCapability(),a._recalculateUpdateTypeCapability(),a._recalculateIsTypingCapability()},isUpdateSubjectSupported:function(){return this._provider.isUpdateSubjectSupported()},isMarkAllContentAsReadSupported:function(){return this._provider.isMarkAllContentAsReadSupported()}},a.Services.Messaging.ConversationService=c}(AvayaClientServices,$),function(a,b){"use strict";function c(c){this._conversationService=c,this.attachmentCount=0,this.totalMessageCount=0,this.active=!1,this.closed=!1,this.sensitivity=a.Services.Messaging.SensitivityLevel.NORMAL,this.href="",this.id="",this.lastAccessedTime=void 0,this.lastUpdated=void 0,this.latestEntryTimestamp=void 0,this.subject="",this.totalCount=0,this.type=a.Services.Messaging.ConversationType.THREAD,this.unreadAttachmentCount=0,this.unreadCount=0,this.resourceStatus=a.Services.Messaging.ResourceStatus.PUBLISHED,this.messages=new a.Base.DataSet,this.previewText="",this.participants=[],this.composingParticipants=new a.Base.DataSet,this.multiparty=!1,this._draftMessages=[],this._draftEscalations=[],this._typingTimeout={},this._counts={eventCount:0,eventUnreadMessage:0,messageAttachment:0,messageCount:0,messageUnreadAttachment:0,messageUnreadMessage:0},this._isSubscribed=!1,this._onMessagesAddedCallbacks=b.Callbacks(),this._onSubjectChangedCallbacks=b.Callbacks(),this._onParticipantsAddedCallbacks=b.Callbacks(),this._onParticipantsRemovedCallbacks=b.Callbacks(),this._onActiveStatusChangedCallbacks=b.Callbacks(),this._onClosedStatusChangedCallbacks=b.Callbacks(),this._onMultiPartyStatusChangedCallbacks=b.Callbacks(),this._onIsComposingStatusChangedCallbacks=b.Callbacks(),this._onLastAccessTimeChangedCallbacks=b.Callbacks(),this._onLastUpdatedTimeChangedCallbacks=b.Callbacks(),this._onLatestEntryTimeChangedCallbacks=b.Callbacks(),this._onResourceStatusChangedCallbacks=b.Callbacks(),this._onPreviewTextChangedCallbacks=b.Callbacks(),this._onTotalMessagesCountChangedCallbacks=b.Callbacks(),this._onTotalUnreadMessageCountChangedCallbacks=b.Callbacks(),this._onTotalAttachmentCountChangedCallbacks=b.Callbacks(),this._onTotalUnreadAttachmentCountChangedCallbacks=b.Callbacks(),this._onTotalEventCountChangedCallbacks=b.Callbacks(),this._onTotalUnreadEventCountChangedCallbacks=b.Callbacks(),this._onSensitivityChangedCallbacks=b.Callbacks(),this._onTypeChangedCallbacks=b.Callbacks(),this._onMessagesRemovedCallbacks=b.Callbacks(),this._onOtherMessagesAddedCallbacks=b.Callbacks(),this._updateSubjectCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateLastAccessTimeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateSensitivityCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._olderContentCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._addParticipantsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeParticipantsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createMessageCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createEscalationCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._markAllContentAsReadCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._leaveCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._startCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateTypeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._isTypingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={getSensitivity:function(){return this.sensitivity},isActive:function(){return this.active},isClosed:function(){return this.closed},isActiveAndNotClosed:function(){return this.active&&!this.closed},isMultiParty:function(){return this.multiparty},isComposing:function(){return this.composingParticipants.length>0},isPrivate:function(){return this.sensitivity===a.Services.Messaging.SensitivityLevel.PRIVATE},hasUnviewedMessagesSinceLastAccess:function(){return this._counts.messageUnreadMessage>0},hasUnviewedAttachments:function(){return this._counts.messageUnreadAttachment>0},hasAttachments:function(){return this._counts.messageAttachment>0},isParticipantActive:function(a){},getLastAccessTime:function(){return this.lastAccessTime},getLastUpdatedTime:function(){return this.lastUpdated},getLastEntryTime:function(){return this.latestEntryTimestamp},getComposingParticipants:function(){return this.composingParticipants},getAllParticipants:function(){return this.participants},getActiveParticipants:function(){return this.getAllParticipants()},getActiveParticipantsSorted:function(a){},getType:function(){return this.type},getTotalMessageCount:function(){return this._counts.messageCount},getAttachmentCount:function(){return this._counts.messageAttachment},getUnreadAttachmentCount:function(){return this._counts.messageUnreadAttachment},getUnreadMessageCount:function(){return this._counts.messageUnreadMessage},getEventCount:function(){return this._counts.eventCount},getEventUnreadCount:function(){return this._counts.eventUnreadMessage},getPreviewText:function(){return this.previewText},getSubject:function(){return this.subject},getLastUpdatedByParticipant:function(){var a=this.getLastMessage();if("undefined"!=typeof a)return this.participants.filter(function(b){return b.address===a.from.address})[0]},getStatus:function(){return this.resourceStatus},setSensitivity:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.sensitivity!==b&&(this.sensitivity=b,this._onSensitivityChangedCallbacks.fire(this,b))},setResourceStatus:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.resourceStatus!==b&&(this.resourceStatus=b,this._onResourceStatusChangedCallbacks.fire(this,b))},setLastAccess:function(){this._conversationService.setLastAccessTime(this)},setSubject:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.subject!==b&&(this.getStatus()===a.Services.Messaging.ResourceStatus.PUBLISHED&&this._conversationService.changeSubject(this,b),this.subject=b,this._onSubjectChangedCallbacks.fire(this,this.subject))},setType:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.type!==b&&(this.type=b,this._onTypeChangedCallbacks.fire(this,b))},getLastMessage:function(){var b=this.messages.filter(function(b){return b.getType()===a.Services.Messaging.MessageType.MESSAGE});return b[0]},createMessage:function(){return this._conversationService.createMessage(this);
},getDraftMessages:function(){return this._draftMessages},removeAllDraftMessages:function(){this._draftMessages.forEach(function(a){var b=this.messages.indexOf(a);b>=0&&this.messages.splice(b,1)}.bind(this)),this._draftMessages.splice(0,this._draftMessages.length)},createEscalation:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]});var c=this._conversationService.createEscalation(this,b);return this._draftEscalations.push(c),c},getAllDraftEscalations:function(){return this._draftEscalations},removeEscalation:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Messaging.Escalation}]}),this._conversationService.removeEscalation(b,this._draftEscalations)},removeAllDraftEscalations:function(){this._draftEscalations.splice(0,this._draftEscalations.length)},getMessages:function(){return this.messages},getOtherMessages:function(b,c,d){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),a.Base.Utils.validate(c,{optional:!0,validators:[{type:"type",expected:a.Services.Messaging.Message}]}),a.Base.Utils.validate(d,{optional:!0,validators:[{type:"type",expected:"number"}]}),this._conversationService.getOtherMessages(b,c,d,this)},markAllContentAsRead:function(){return this._conversationService.markAllAsRead(this)},subscribeForTypingEvents:function(a){return this._conversationService.subscribeForTypingEvents(this,a)},unsubscribeForTypingEvents:function(){return this._conversationService.unsubscribeForTypingEvents(this)},addParticipantsAddresses:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:Array},{type:"arrayElementType",expected:"string"}]}),this._conversationService.addParticipantsAddresses(this,b)},addParticipants:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:Array},{type:"arrayElementType",expected:a.Services.Messaging.Participant}]}),this._conversationService.addParticipants(this,b)},removeParticipantsAddresses:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:Array},{type:"arrayElementType",expected:"string"}]}),this._conversationService.removeParticipantsAddresses(this,b)},removeParticipants:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:Array},{type:"arrayElementType",expected:a.Services.Messaging.Participant}]}),this._conversationService.removeParticipants(this,b)},getParticipants:function(b,c){return a.Base.Utils.validate(b,{optional:!0,validators:[{type:"type",expected:"boolean"}]}),a.Base.Utils.validate(c,{optional:!0,validators:[{type:"type",expected:"function"}]}),b?this.getActiveParticipants():this.getAllParticipants()},removeMessage:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Messaging.Message}]}),this._conversationService.removeMessage(this.messages,this._draftMessages,b)},start:function(){var a=b.Deferred();return setTimeout(function(){a.resolve()}),a.promise()},leave:function(){return this._conversationService.leave(this)},clearLocalAttachmentData:function(){},close:function(){return this._conversationService.close(this)},_updateParticipantsList:function(a){this._conversationService._updateParticipantsList(this,a)},getId:function(){return this.id},reportRecordingAudio:function(){return this._conversationService.reportRecordingAudio(this)},pauseRecordingAudio:function(){return this._conversationService.pauseRecordingAudio(this)},reportRecordingVideo:function(){return this._conversationService.reportRecordingVideo(this)},pauseRecordingVideo:function(){return this._conversationService.pauseRecordingVideo(this)},reportAttachingFile:function(){return this._conversationService.reportAttachingFile(this)},pauseAttachingFile:function(){return this._conversationService.pauseAttachingFile(this)},reportTakingPicture:function(){return this._conversationService.reportTakingPicture(this)},pauseTakingPicture:function(){return this._conversationService.pauseTakingPicture(this)}},a.Services.Messaging.Conversation=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(a){this._provider=a}c.prototype={start:function(b){for(var c={extensions:b.extensions,sessionType:b.sessionType,type:b.type,participants:[]},d=0;d<b.participants.length;d++)c.participants.push({address:b.participants[d].address});return b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_SENDING),this._provider.callEscalationEvent(c,b.conversation.id).then(function(c){return b.setResourceStatus(a.Services.Messaging.ResourceStatus.PUBLISHED),this._recalculateAllEscalationCapabilities(b),b._onStartSuccessCallbacks.fire(b),c}.bind(this),function(a){this._recalculateAllEscalationCapabilities(b),b._onStartFailedCallbacks.fire(b,a)}.bind(this))},addParticipantsAddresses:function(a,c){var d=b.Deferred(),e=this._provider.getRoutableDomains();if(a.getAddParticipantsCapability().isAllowed){for(var f=!1,g=0;g<c.length;g++)for(var h=0;h<e.length;h++)null!==c[g].match(e[h])&&(a.participants.push({address:c[g]}),f=!0);f&&a.participants.onDataSetChanged(),d.resolve(a)}else d.reject(a.getAddParticipantsCapability().denialReason);return d.promise()},addParticipants:function(a,c){var d=b.Deferred();if(a.getAddParticipantsCapability().isAllowed){for(var e=!1,f=0;f<c.length;f++)a.participants.push(c[f]),e=!0;e&&a.participants.onDataSetChanged(),d.resolve(a)}else d.reject(a.getAddParticipantsCapability().denialReason);return d.promise()},removeParticipantsAddresses:function(a,c){var d=b.Deferred();if(a.getRemoveParticipantsCapability().isAllowed){for(var e=!1,f=a.participants.length-1;f>=0;f--)for(var g=c.length-1;g>=0;g--)if(a.participants[f].address===c[g]){a.participants.splice(f,1),c.splice(g,1),e=!0;break}e&&a.participants.onDataSetChanged(),d.resolve(a)}else d.reject(a.getRemoveParticipantsCapability().denialReason);return d.promise()},removeParticipants:function(a,c){var d,e=b.Deferred();if(a.getRemoveParticipantsCapability().isAllowed){for(var f=a.participants.length-1;f>=0;f--)for(var g=c.length-1;g>=0;g--)if(a.participants[f].address===c[g].address){a.participants.splice(f,1),c.splice(g,1),d=!0;break}d&&a.participants.onDataSetChanged(),e.resolve(a)}else e.reject(a.getRemoveParticipantsCapability().denialReason);return e.promise()},setSessionType:function(b,c){if(!a.Base.Utils.isDefined(a.Services.Messaging.SessionType[c]))throw b._onSessionTypeChangedFailedCallbacks.fire(this,c),new Error("Unknown Session type");b.sessionType=c,b._onSessionTypeChangedSuccessCallbacks.fire(this,c)},_recalculateAllEscalationCapabilities:function(a){a._recalculateStartCapability(),a._recalculateAddParticipantsCapability(),a._recalculateRemoveParticipantsCapability(),a._recalculateUpdateSessionTypeCapability(),a._recalculateRemoveCapability()}},a.Services.Messaging.EscalationService=c}(AvayaClientServices,$),function(a,b){"use strict";function c(b){a.Services.Messaging.AbstractThumbnailCreator.call(this,b)}c.prototype=Object.create(a.Services.Messaging.AbstractThumbnailCreator.prototype),c.prototype.create=function(a,c){var d=b.Deferred(),e={disposition:a.disposition.replace("attachment","inline"),mimeType:"image/jpeg",status:a.status},f=new FileReader;return f.onloadend=function(){var b=new Image;b.src=f.result;var g=new Blob([this._resizeImage(b,c)],{type:"image/jpeg"});e.size=g.size,a.thumbnail=this._attachmentBuilder.build(e,g),d.resolve(a.thumbnail)}.bind(this),f.onerror=function(a){d.reject(a)}.bind(this),f.readAsDataURL(a.file),d.promise()},a.Services.Messaging.ImageThumbnailCreator=c}(AvayaClientServices,jQuery),function(){"use strict";function a(a,b){this._attachmentBuilder=a,this._participantService=b}var b=6e4;a.prototype={build:function(a,b,c,d){var e=new AvayaClientServices.Services.Messaging.Message(c,d);if(e.resourceStatus=a.resourceStatus||AvayaClientServices.Services.Messaging.ResourceStatus.PUBLISHED,e.body=a.body,a.event&&(e.type=a.event.type,e.eventRelatedParticipants=a.event.participants),a.flags&&(e.sensitivity=a.flags.sensitivity,e.importance=a.flags.importance,e.read=a.flags.read,e.doNotForward=a.flags.doNotForward),e.from=b,e.href=a.href,e.id=a.id,e.lastModifiedDate=a.lastModifiedDate?new Date(a.lastModifiedDate):new Date,e.receivedDate=new Date(a.receivedDate),e.subject=a.subject,e.threadId=a.threadId,e.to=[],a.to&&a.to.forEach&&(a.to.forEach(function(a){e.to.push(this._participantService.getOrCreateParticipant(a))}.bind(this)),d._updateParticipantsList(e.to)),a.parts){var f=[];a.parts.forEach(function(a){f.push(this._attachmentBuilder.build(a))}.bind(this)),e.parts=this.pairThumbnailsAndAttachments(f)}return c._recalculateAllMessageCapabilities(e),e},update:function(a,b){a.body!==b.body&&(a.body=b.body,a._onBodyChangedCallbacks.fire(a,a.body)),a.type!==b.event.type&&(a.type=b.event.type,a._onTypeChangedCallbacks.fire(a,a.type)),a.doNotForward!==b.flags.doNotForward&&(a.doNotForward=b.flags.doNotForward,a._onDoNotForwardStatusChangedCallbacks.fire(a,a.doNotForward)),a.importance!==b.flags.importance&&(a.importance=b.flags.importance,a._onImportanceChangedCallbacks.fire(a,a.importance)),a.sensitivity!==b.flags.sensitivity&&(a.sensitivity=b.flags.sensitivity,a._onSensitivityChangedCallbacks.fire(a,a.sensitivity)),a.read!==b.flags.read&&(a.read=b.flags.read,a._onIsReadStatusChangedCallbacks.fire(a,a.read)),a.href!==b.href&&(a.href=b.href);var c=new Date(b.lastModifiedDate);a.lastModifiedDate&&a.lastModifiedDate.toISOString()===c.toISOString()||(a.lastModifiedDate=c,a._onLastModifiedDateChangedCallbacks.fire(a,c)),c=new Date(b.receivedDate),a.receivedDate&&"Invalid Date"!==a.receivedDate.toString()&&a.receivedDate.toISOString()===c.toISOString()||(a.receivedDate=c),a.subject!==b.subject&&(a.subject=b.subject),a.id!==b.id&&(a.id=b.id),a.threadId!==b.threadId&&(a.threadId=b.threadId);var d=[];b.parts.forEach(function(a){d.push(this._attachmentBuilder.build(a))}.bind(this)),this.pairThumbnailsAndAttachments(d).forEach(function(b){var c=a.parts.filter(function(a){return a.disposition===b.disposition})[0];c&&this._attachmentBuilder.update(c,b)}.bind(this)),a._attachments.length>0&&a._attachments.splice(0,a._attachments.length)},isMessageCoalesced:function(a,c){if(null===a||void 0===a)return!1;if(null===c||void 0===c)return!1;if(a.getMessageStatus()===AvayaClientServices.Services.Messaging.ResourceStatus.DRAFT_ERROR)return!1;if(c.getMessageStatus()===AvayaClientServices.Services.Messaging.ResourceStatus.DRAFT_ERROR)return!1;if(void 0!==a.getFromParticipant()&&a.getFromParticipant().getAddress()!==c.getFromParticipant().getAddress())return!1;if(a.hasAttachment())return!1;if(a.getType()===AvayaClientServices.Services.Messaging.MessageType.JOINED||a.getType()===AvayaClientServices.Services.Messaging.MessageType.LEFT||a.getType()===AvayaClientServices.Services.Messaging.MessageType.CLOSED||a.getType()===AvayaClientServices.Services.Messaging.MessageType.START)return!1;if(c.getType()===AvayaClientServices.Services.Messaging.MessageType.JOINED||c.getType()===AvayaClientServices.Services.Messaging.MessageType.LEFT||c.getType()===AvayaClientServices.Services.Messaging.MessageType.CLOSED||c.getType()===AvayaClientServices.Services.Messaging.MessageType.START)return!1;if(a.getSensitivity()!==c.getSensitivity())return!1;if(c.hasAttachment())return!1;if(a.getReceivedDate()<c.getReceivedDate())return!1;var d=a.getReceivedDate()-c.getReceivedDate();return isNaN(d)||d>b?!1:!0},pairThumbnailsAndAttachments:function(a){var b,c={},d=[],e=function(a){return function(b){return b.getName()===a}};for(b=0;b<a.length;b++)c[a[b].getName()]=a.filter(e(a[b].getName()));for(var f in c)if(c.hasOwnProperty(f))if(2===c[f].length){var g=c[f][0].isThumbnail()?c[f][0]:c[f][1],h=c[f][0].isThumbnail()?c[f][1]:c[f][0];h.thumbnail=g,d.push(h)}else for(b=0;b<c[f].length;b++)d.push(c[f][b]);return d}},AvayaClientServices.Services.Messaging.MessageBuilder=a}(AvayaClientServices),function(a,b){"use strict";function c(a,b,c){this._provider=a,this._attachmentBuilder=c,this._messageBuilder=b,this._messagesToRead=[],this._promises=[]}c.prototype={_prepareMessage:function(b){var c={body:b.getBody(),subject:b.subject,threadId:b.getThreadId(),flags:{sensitivity:b.getSensitivity(),importance:b.getImportance()},to:[]};a.Base.Utils.isUndefined(b.inReplyTo)||(c.inReplyTo=b.inReplyTo.id);for(var d=0;d<b.to.length;d++)c.to.push({address:b.to[d].address,type:b.to[d].type});return c},send:function(b){var c,d=this._prepareMessage(b),e=function(c){return this._messageBuilder.update(b,c),b.lastModifiedDate=new Date,b.setResourceStatus(a.Services.Messaging.ResourceStatus.PUBLISHED),this._recalculateAllMessageCapabilities(b),b.getAttachments().length>0&&b.getAttachments().forEach(function(b){b.setResourceStatus(a.Services.Messaging.ResourceStatus.PUBLISHED)}.bind(this)),b},f=function(c){return b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_ERROR),this._recalculateAllMessageCapabilities(b),b.getAttachments().length>0&&b.getAttachments().forEach(function(b){b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_ERROR)}.bind(this)),c};return b.getAttachments().length>0?(b.getAttachments().forEach(function(b){b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_SENDING)}.bind(this)),c=this._provider.sendMessageWithAttachments(d,b.getAttachments()).then(e.bind(this),f.bind(this))):c=this._provider.sendMessage(d).then(e.bind(this),f.bind(this)),b.setResourceStatus(a.Services.Messaging.ResourceStatus.DRAFT_SENDING),c},getPartById:function(a,b){return a.filter(function(a){return a.id===b})[0]},markAsRead:function(a){var c=b.Deferred();return 0===this._messagesToRead.length&&setTimeout(function(){var a=[];this._messagesToRead.forEach(function(b){a.push(b.id)}),this._provider.markAsReadBatch(a).then(function(a){this._messagesToRead.forEach(function(a){a._recalculateMarkAsReadCapability()}),this._promises.forEach(function(b){b.resolve(a)})}.bind(this),function(a){this._messagesToRead.forEach(function(a){a._recalculateMarkAsReadCapability()}),this._promises.forEach(function(b){b.reject(a)})}.bind(this)),this._messagesToRead=[],this._promises=[]}.bind(this),2e3),this._messagesToRead.push(a),this._promises.push(c),c.promise()},removeDraftAttachment:function(a,b){var c=a.parts.indexOf(b);-1!==c&&(a.parts.splice(c,1),a.parts.onDataSetChanged()),c=a._attachments.indexOf(b),-1!==c&&a._attachments.splice(a._attachments.indexOf(b),1)},removeAllDraftAttachments:function(a){a._attachments.forEach(function(b){var c=a.parts.indexOf(b);-1!==c&&a.parts.splice(c,1)}.bind(a)),a._attachments.length>0&&a.parts.onDataSetChanged(),a._attachments.splice(0,a._attachments.length)},createAttachment:function(b,c){if(this._validateAttachmentSize(c)){var d={disposition:'attachment; filename="'+c.name+'"',mimeType:""!==c.type?c.type:"application/octet-stream",size:c.size,status:a.Services.Messaging.ResourceStatus.DRAFT_UNSENT},e=this._attachmentBuilder.build(d,c);return b._attachments.push(e),b.parts.push(e),b.parts.onDataSetChanged(),e.addOnResourceStatusChangedCallback(function(){this._recalculateAllAttachmentCapabilities(e)}.bind(this)),e}throw new Error("Size not valid.")},stop:function(){this._messagesToRead=[],this._promises=[]},_recalculateAllMessageCapabilities:function(a){a._recalculateUpdateBodyCapability(),a._recalculateUpdateSensitivityCapability(),a._recalculateUpdateInReplyToCapability(),a._recalculateUpdateDoNotForwardCapability(),a._recalculateUpdateImportanceCapability(),a._recalculateCreateAttachmentCapability(),a._recalculateSendCapability(),a._recalculateMarkAsReadCapability(),a._recalculateRemoveCapability()},_recalculateAllAttachmentCapabilities:function(a){a._recalculateUpdateNameCapability(),a._recalculateUpdateMimeTypeCapability(),a._recalculateUpdateDurationCapability(),a._recalculateUpdateSizeCapability(),a._recalculateUpdateLocationCapability(),a._recalculateUpdateIsSelfGeneratedCapability(),a._recalculateCreateThumbnailCapability(),a._recalculateRemoveThumbnailCapability(),a._recalculateCanDownloadCapability(),a._recalculateCanConsumeCapability(),a._recalculateRemoveCapability()},_validateAttachmentSize:function(a){var b,c=this._provider.getResources();return b=3===c.version&&c.limits?-1!==a.type.indexOf("image")&&c.limits.maxImageSize&&a.size>c.limits.maxImageSize?!1:-1!==a.type.indexOf("video")&&c.limits.maxVideoSize&&a.size>c.limits.maxVideoSize?!1:-1!==a.type.indexOf("audio")&&c.limits.maxAudioSize&&a.size>c.limits.maxAudioSize?!1:-1!==a.type.indexOf("text")&&c.limits&&c.limits.maxTextLength&&a.size>c.limits.maxTextLength?!1:c.limits.maxGenericAttachmentSize&&a.size>c.limits.maxGenericAttachmentSize?!1:!0:4===c.version&&c.outbox&&c.outbox.limits?-1!==a.type.indexOf("image")&&c.outbox.limits.maxImageSize&&a.size>c.outbox.limits.maxImageSize?!1:-1!==a.type.indexOf("video")&&c.outbox.limits.maxVideoSize&&a.size>c.outbox.limits.maxVideoSize?!1:-1!==a.type.indexOf("audio")&&c.outbox.limits.maxAudioSize&&a.size>c.outbox.limits.maxAudioSize?!1:-1!==a.type.indexOf("text")&&c.outbox.limits.maxTextLength&&a.size>c.outbox.limits.maxTextLength?!1:c.outbox.limits.maxGenericAttachmentSize&&a.size>c.outbox.limits.maxGenericAttachmentSize?!1:!0:!0}},a.Services.Messaging.MessageService=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(c,d){this._messageService=c,this.conversation=d,this.resourceStatus=a.Services.Messaging.ResourceStatus.PUBLISHED,this.body="",this.type=a.Services.Messaging.MessageType.MESSAGE,this.sensitivity=a.Services.Messaging.SensitivityLevel.NORMAL,this.importance=a.Services.Messaging.MessageImportance.NORMAL,this.read=!1,this.doNotForward=!1,this.from=void 0,this.href="",this.id="",this.lastModifiedDate=void 0,this.receivedDate=void 0,this.subject="",this.threadId="",this.to=void 0,this.parts=new a.Base.DataSet,this._attachments=[],this.coalesced=!1,this.inReplyTo=void 0,this._onTypeChangedCallbacks=b.Callbacks(),this._onBodyChangedCallbacks=b.Callbacks(),this._onInReplyToChangedCallbacks=b.Callbacks(),this._onLastModifiedDateChangedCallbacks=b.Callbacks(),this._onIsCoalescedStatusChangedCallbacks=b.Callbacks(),this._onHasAttachmentStatusChangedCallbacks=b.Callbacks(),this._onHasUnviewedAttachmentStatusChangedCallbacks=b.Callbacks(),this._onIsPrivateStatusChangedCallbacks=b.Callbacks(),this._onDoNotForwardStatusChangedCallbacks=b.Callbacks(),this._onIsReadStatusChangedCallbacks=b.Callbacks(),this._onResourceStatusChangedCallbacks=b.Callbacks(),this._onImportanceChangedCallbacks=b.Callbacks(),this._onSensitivityChangedCallbacks=b.Callbacks(),this._updateBodyCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateSensitivityCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateInReplyToCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateDoNotForwardCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateImportanceCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createAttachmentCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._sendCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._markAsReadCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={getType:function(){return this.type},getBody:function(){return this.body},getThreadId:function(){return this.threadId},getInReplyTo:function(){return this.inReplyTo},getLastModifiedDate:function(){return this.lastModifiedDate},getReceivedDate:function(){return this.receivedDate},isCoalesced:function(){return this.coalesced},hasAttachment:function(){return this.parts.length>0},hasUnviewedAttachment:function(){},isPrivate:function(){return this.sensitivity===a.Services.Messaging.SensitivityLevel.PRIVATE},isDoNotForward:function(){return this.doNotForward},isRead:function(){return this.read},isReceivedOfflineMessage:function(){},getFromParticipant:function(){return this.from},getParticipantsForType:function(){},getAttachments:function(){return this.parts},getMessageStatus:function(){return this.resourceStatus},getImportance:function(){return this.importance},getSensitivity:function(){return this.sensitivity},setBodyAndReportTyping:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.body!==b&&(this.body=b,this._onBodyChangedCallbacks.fire(this,b),this.conversation.getStatus()===a.Services.Messaging.ResourceStatus.PUBLISHED&&this.conversation.getIsTypingCapability().isAllowed&&this.conversation._conversationService.reportTyping(this))},setSensitivity:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.sensitivity!==b&&(this.sensitivity=b,this._onSensitivityChangedCallbacks.fire(this,b))},setIsCoalesced:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"boolean"}]}),this.coalesced!==b&&(this.coalesced=b,this._onIsCoalescedStatusChangedCallbacks.fire(this,b))},setInReplyTo:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Messaging.Message}]}),b instanceof a.Services.Messaging.Message&&"undefined"!=typeof b.id&&this.inReplyTo!==b&&(this.inReplyTo=b,this._onInReplyToChangedCallbacks.fire(this,b))},setDoNotForward:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"boolean"}]}),this.doNotForward!==b&&(this.doNotForward=b,this._onDoNotForwardStatusChangedCallbacks.fire(this,b))},setResourceStatus:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.resourceStatus!==b&&(this.resourceStatus=b,this._onResourceStatusChangedCallbacks.fire(this,b))},setMessageImportance:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:"string"}]}),this.importance!==b&&(this.importance=b,this._onImportanceChangedCallbacks.fire(this,b))},markAsRead:function(){return this._messageService.markAsRead(this)},send:function(){return this._messageService.send(this)},createAttachment:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:File}]}),this._messageService.createAttachment(this,b)},removeDraftAttachment:function(b){a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Messaging.Attachment}]}),this._messageService.removeDraftAttachment(this,b)},removeAllDraftAttachments:function(){this._messageService.removeAllDraftAttachments(this)}},a.Services.Messaging.Message=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(b,c){var d=new a.Services.Messaging.ThumbnailCreator,e=c.getMessagingProviders(b)[0];this._messagingService=this._createMessagingService(e,d)}b.prototype={create:function(){var b=new a.Services.Messaging.Messaging(this._messagingService);return this._messagingService._recalculateAllMessagingCapabilities(b),b},_createMessagingService:function(b,c){var d=new a.Services.Messaging.ParticipantService,e=new a.Services.Messaging.AttachmentBuilder(c);c.registerCreator("image/*",new a.Services.Messaging.ImageThumbnailCreator(e)),c.registerCreator("video/*",new a.Services.Messaging.VideoThumbnailCreator(e));var f=new a.Services.Messaging.MessageBuilder(e,d),g=new a.Services.Messaging.MessageService(b,f,e),h=new a.Services.Messaging.EscalationService(b),i=new a.Services.Messaging.ConversationBuilder(f),j=new a.Services.Messaging.ConversationService(b,g,d,h,f,i),k=new a.Services.Messaging.MessagingService(b,j,g,d,i);return j._messagingService=k,k}},a.Services.Messaging.MessagingFactory=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c,d,e,f){this._hasStarted=!1,this._provider=b,this._messageService=d,this._conversationService=c,this.conversations=new a.Base.DataSet,this._draftConversations=[],this._identity={},this._participantsService=e,this._conversationBuilder=f}c.prototype={getConversations:function(a,b){var c=a.getRetrieveConversationsCapability();if(c.isAllowed){if(0===this.conversations.length){var d=function(a){b&&"function"==typeof b&&b(a)}.bind(this),e=function(b){this._updateConversationsContainer(b,this.conversations,a),0===this.conversations.length&&this.conversations.onDataSetChanged(),this._provider.observeConversations(),this._provider.on("conversations.update",function(b){this._updateConversationsContainer(b,this.conversations,a)}.bind(this))}.bind(this);this._provider.getConversations().then(e,d)}return this.conversations}throw new Error(c.denialReason)},getConversationIds:function(){return this._provider.getConversationIds()},getConversationById:function(b,c){var d=new a.Base.DataSet,e=this.conversations.filter(function(a){return a.id===b});return e.length>0?d.push(e[0]):this._provider.getConversationsByQuery({id:b}).then(function(a){this._updateConversationsContainer(a,d,c)}.bind(this)),d},getDraftConversations:function(){return this._draftConversations},leaveAllConversations:function(){return this.leaveConversations(this.conversations)},leaveConversations:function(a){for(var c=[],d=b.Deferred(),e=a.length,f=0;e>f;f++)c.push(a[f].leave());return b.when.apply(this,c).then(function(){for(var b=0;e>b;b++)this.conversations.splice(this.conversations.indexOf(a[b]),1);this.conversations.onDataSetChanged(),d.resolve(!0)}.bind(this),function(a){d.reject(a)}),d.promise()},createConversation:function(b){var c=this._conversationBuilder.build({resourceStatus:a.Services.Messaging.ResourceStatus.DRAFT_UNSENT},this._conversationService);return c.participants.push(this._participantsService.getSelfParticipant()),this.conversations.push(c),this.conversations.onDataSetChanged(),this._draftConversations.push(c),c.addOnResourceStatusChangedCallback(function(b,c){if(c===a.Services.Messaging.ResourceStatus.PUBLISHED){var d=this._draftConversations.indexOf(b);this._draftConversations.splice(d,1)}this._conversationService._recalculateAllConversationCapabilities(b)}.bind(this)),c.addOnActiveStatusChangedCallback(function(a){this._conversationService._recalculateAllConversationCapabilities(a)}.bind(this)),c.addOnClosedStatusChangedCallback(function(a,c){var d=this.conversations.indexOf(a);d>-1&&(this.conversations.splice(d,1),this.conversations.onDataSetChanged(),b._onConversationsRemovedCallbacks.fire(a,c)),this._conversationService._recalculateAllConversationCapabilities(a)}.bind(this)),c.lastUpdated=new Date,c},start:function(b,c){return a.Base.Logger.debug("MessagingService start"),this._hasStarted=!0,this._provider.start(c.ammConfiguration).then(function(){return b._resources=this._provider.getResources(),b.validateUsers([b.getSelfAddress()])}.bind(this)).then(function(a){var c=this._participantsService.getOrCreateParticipant(a[0]);this._identity.participant=c,this._participantsService.setSelfParticipant(c),this._recalculateAllMessagingCapabilities(b)}.bind(this),function(a){return this._hasStarted=!1,this._recalculateAllMessagingCapabilities(b),a}.bind(this))},stop:function(c){if(!this._hasStarted){var d=b.Deferred();return d.reject({code:401,message:"Messaging has yet not started."}),d.promise()}return this._provider.stop().then(function(b){this._messageService.stop(),this._participantsService.stop(),this._draftConversations=[];for(var d=this.conversations.length,e=0;d>e;e++){for(var f=this.conversations[e].messages.length,g=0;f>g;g++){for(var h=this.conversations[e].messages[g].parts.length,i=0;h>i;i++)delete this.conversations[e].messages[g].parts[i];delete this.conversations[e].messages[g]}for(var j=this.conversations[e]._draftEscalations.length,k=0;j>k;k++)delete this.conversations[e]._draftEscalations[k];delete this.conversations[e]}return this.conversations=new a.Base.DataSet,this._hasStarted=!1,c._resources={},c._onConversationsAddedCallbacks.empty(),c._onConversationsRemovedCallbacks.empty(),c._onMessagingLimitsChangedCallbacks.empty(),c._onNumberOfConversationWithUnreadContentChangedCallbacks.empty(),c._onNumberOfConversationWithUnviewedContentSinceLastAccessChangedCallbacks.empty(),c._onRoutableDomainsChangedCallbacks.empty(),this._recalculateAllMessagingCapabilities(c),b}.bind(this))},getNumberOfConversationsWithUnreadContent:function(){return this.conversations.filter(function(a){return a.getUnreadMessageCount()>0||a.getUnreadAttachmentCount()>0}).length},validateUsers:function(a){return this._conversationService.validateUsers(a)},searchConversations:function(b,c,d){var e=new a.Base.DataSet,f={q:b.getQuery(),subject:b.isSearchSubject(),participants:b.isSearchParticipants(),body:b.isSearchBody()};b.getQueryAfter()&&(f.after=b.getQueryAfter().toISOString()),this._provider.getConversationsByQuery(f).then(function(a){this._updateConversationsContainer(a,e,d)}.bind(this),function(a){c&&"function"==typeof c&&c(a)});var g=this._searchLocalConversations(this.conversations,b);return g.forEach(function(a){e.push(a)}),setTimeout(function(){e.onDataSetChanged()},0),e},_createNewConversation:function(a,b){var c=this._conversationBuilder.build(a,this._conversationService);return this._conversationBuilder.update(c,a,this._conversationService),c.addOnClosedStatusChangedCallback(function(a,c){var d=this.conversations.indexOf(a);d>-1&&(this.conversations.splice(d,1),this.conversations.onDataSetChanged(),b._onConversationsRemovedCallbacks.fire(a,c))}.bind(this)),c},_getById:function(a,b){return a.filter(function(a){return a.id===b})[0]},_updateConversationsContainer:function(a,b,c){if(a&&a.conversations&&a.conversations.length>0){for(var d=[],e=!1,f=0;f<a.conversations.length;f++){var g=a.conversations[f],h=this._getById(b,g.id);if(h)h.getLastUpdatedTime().toISOString()!==new Date(g.lastUpdated).toISOString()&&(this._conversationBuilder.update(h,g,this._conversationService),e=!0);else{var i=this._createNewConversation(g,c);i.participants=this._conversationService.getParticipantsFromMessage(g.messages[0]),b.unshift(i),e=!0}d.push(g.id)}e&&b.onDataSetChanged()}},_searchLocalConversations:function(c,d){var e=[];return c.forEach(function(c){var f=!1;d.isSearchSubject()&&-1!==c.getSubject().toLowerCase().indexOf(d.getQuery())&&(f=!0),d.isSearchParticipants()&&c.getParticipants().forEach(function(a){(-1!==a.givenName.toLowerCase().indexOf(d.getQuery())||-1!==a.surname.toLowerCase().indexOf(d.getQuery()))&&(f=!0)});var g=c.getMessages();d.isSearchBody()&&(g=c.getMessages().filter(function(a){return d.isSearchBody()&&a.body&&-1!==a.body.toLowerCase().indexOf(d.getQuery())?(f=!0,!0):void 0}));var h=d.getQueryAfter();if(h&&f&&(f=c.getLastUpdatedTime()>=h),f){var i=b.extend(new a.Services.Messaging.Conversation,c);i.messages=new a.Base.DataSet,g.forEach(function(c){i.messages.push(b.extend(new a.Services.Messaging.Message(this._messageService,i),c))}.bind(this)),this._conversationBuilder._updatePreviewText(i),e.push(i)}}.bind(this)),e},removeConversation:function(a){var c=b.Deferred();if(a.getRemoveCapability().isAllowed){var d=this.conversations.indexOf(a);d>=0&&(this.conversations.splice(d,1),this.conversations.onDataSetChanged()),d=this._draftConversations.indexOf(a),d>=0&&this._draftConversations.splice(d,1),c.resolve()}else c.reject(a.getRemoveCapability().denialReason);return c.promise()},removeAllDraftConversations:function(){for(var a=this._draftConversations.length-1;a>=0;a--)this.removeConversation(this._draftConversations[a])},_recalculateAllMessagingCapabilities:function(a){a._recalculateRetrieveConversationsCapability(),a._recalculateStartServiceCapability(),a._recalculateCreateConversationCapability(),a._recalculateSearchConversationsCapability(),a._recalculateUpdateRefreshIntervalCapability(),a._recalculateValidateParticipantAddressCapability(),a._recalculateMarkContentAsReadCapability(),
a._recalculateClearLocalDataCapability()}},a.Services.Messaging.MessagingService=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(c){this._messagingService=c,this._resources={},this._onMessagingLimitsChangedCallbacks=b.Callbacks(),this._onRoutableDomainsChangedCallbacks=b.Callbacks(),this._onNumberOfConversationWithUnreadContentChangedCallbacks=b.Callbacks(),this._onNumberOfConversationWithUnviewedContentSinceLastAccessChangedCallbacks=b.Callbacks(),this._onConversationsAddedCallbacks=b.Callbacks(),this._onConversationsRemovedCallbacks=b.Callbacks(),this._retrieveConversationsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._startServiceCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createConversationCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._searchConversationsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateRefreshIntervalCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._validateParticipantAddressCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._markContentAsReadCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._clearLocalDataCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE)}c.prototype={getRefreshMode:function(){},getRoutableDomains:function(){return this._resources.domains},getSelfAddress:function(){return this._resources.self},getMessagingProviderType:function(){},getNumberOfConversationsWithUnviewedContentSinceLastAccess:function(){},getNumberOfConversationsWithUnreadContent:function(){return this._messagingService.getNumberOfConversationsWithUnreadContent()},createConversation:function(){return this._messagingService.createConversation(this)},getConversations:function(b){return a.Base.Utils.validate(b,{optional:!0,validators:[{type:"type",expected:"function"}]}),this._messagingService.getConversations(this,b)},getConversationIds:function(){return this._messagingService.getConversationIds()},getDraftConversations:function(){return this._messagingService.getDraftConversations()},searchConversations:function(b,c){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Messaging.MessagingQuery}]}),a.Base.Utils.validate(c,{optional:!0,validators:[{type:"type",expected:"function"}]}),this._messagingService.searchConversations(b,c,this)},getAllConversationsForContact:function(a){},refresh:function(){},setRefreshMode:function(a){},validateUsers:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:Array},{type:"arrayElementType",expected:"string"}]}),this._messagingService.validateUsers(b)},leaveConversations:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:Array},{type:"arrayElementType",expected:a.Services.Messaging.Conversation}]}),this._messagingService.leaveConversations(b)},leaveAllConversations:function(){return this._messagingService.leaveAllConversations()},markMessagesAsRead:function(a,b){},start:function(a){return this._messagingService.start(this,a)},stop:function(){return this._messagingService.stop(this)},clearAllLocalData:function(){},removeConversation:function(b){return a.Base.Utils.validate(b,{validators:[{type:"defined"},{type:"type",expected:a.Services.Messaging.Conversation}]}),this._messagingService.removeConversation(b)},removeAllDraftConversations:function(){this._messagingService.removeAllDraftConversations()}},a.Services.Messaging.Messaging=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(a,b){this.address=a.address,this.type=a.type,this.givenName=a.givenName,this.language=a.language,this.modalities=a.modalities,this.nativeGivenName=a.nativeGivenName,this.nativeSurname=a.nativeSurname,this.surname=a.surname,this.contact=void 0,this.self=b}b.prototype={getType:function(){return this.type},getAddress:function(){return this.address},getGivenName:function(){return this.givenName},getSurname:function(){return this.nativeSurname},getDisplayName:function(){var b;return b=this.givenName||this.surname?this.surname?this.givenName?this.displayOrder?this.displayOrder===a.Services.Messaging.DisplayOrder.DISPLAY_ORDER_FIRST?this.givenName+" "+this.surname:this.surname+" "+this.givenName:this.givenName+" "+this.surname:this.surname:this.givenName:this.address},getDisplayOrder:function(){return this.displayOrder},setDisplayOrder:function(a){this.displayOrder=a},getSupportedModalities:function(){return this.modalities},hasContact:function(){return void 0!==this.contact},isSelf:function(){return this.self},getContact:function(){return this.contact},getAllConversations:function(){}},a.Services.Messaging.Participant=b}(AvayaClientServices),function(a){"use strict";function b(){this._participants=[],this._selfParticipant=void 0}b.prototype={getOrCreateParticipant:function(b){var c=b.address||b.from.address,d=this._getParticipant(c);if(!d){var e=this._selfParticipant?this._selfParticipant.getAddress()===c:!1;d=new a.Services.Messaging.Participant(b,e),this._participants.push(d)}return d},_getParticipant:function(a){return this._participants.filter(function(b){return b.getAddress()===a})[0]},setSelfParticipant:function(a){this._selfParticipant=a,this._selfParticipant.self=!0},getSelfParticipant:function(){return this._selfParticipant},stop:function(){this._selfParticipant=void 0,this._participants=[]}},a.Services.Messaging.ParticipantService=b}(AvayaClientServices),function(a,b){"use strict";function c(a){var b={width:128};this._config=a||b,this._creators={}}c.prototype={getConfig:function(){return this._config},setConfig:function(a){this._config=a},registerCreator:function(a,b){this._creators[a]=b},unregisterCreator:function(a){this._creators[a]=void 0},create:function(a,b){if(b||(b=this._config),a.getCreateThumbnailCapability().isAllowed){var c;return c=this._creators[a.getMimeType()]?a.getMimeType():a.getMimeType().slice(0,a.getMimeType().indexOf("/")+1)+"*",this._creators[c].create(a,b)}}},a.Services.Messaging.ThumbnailCreator=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b){a.Services.Messaging.AbstractThumbnailCreator.call(this,b)}c.prototype=Object.create(a.Services.Messaging.AbstractThumbnailCreator.prototype),c.prototype.create=function(a,c){var d=b.Deferred(),e={disposition:a.disposition.replace("attachment","inline"),mimeType:"image/jpeg",status:a.status},f=new FileReader;return f.onloadend=function(){this._getFirstFrameFromVideo(f.result,function(b){var f=new Image;f.src=b;var g=new Blob([this._resizeImage(f,c)],{type:"image/jpeg"});e.size=g.size,a.thumbnail=this._attachmentBuilder.build(e,g),d.resolve(a.thumbnail)}.bind(this))}.bind(this),f.readAsDataURL(a.file),d.promise()},c.prototype._getFirstFrameFromVideo=function(a,c){var d,e,f=document.createElement("canvas"),g=document.createElement("video"),h=document.createElement("source");h.src=a,h.type="video/mp4",g.appendChild(h),b(g).on("loadedmetadata",function(){f.height=e=g.videoHeight,f.width=d=g.videoWidth}),b(g).on("loadeddata",function(){f.getContext("2d").drawImage(g,0,0,d,e),c(f.toDataURL("image/jpeg"))}),b(g).on("error",function(){throw new Error}),g.load()},a.Services.Messaging.VideoThumbnailCreator=c}(AvayaClientServices,jQuery),function(a){"use strict";var b={UNKNOWN:"UNKNOWN",UNSUPPORTED:"UNSUPPORTED",CANCELLED:"CANCELLED",INVALID_STATE:"INVALID_STATE",INTERNAL_ERROR:"INTERNAL_ERROR",SEND_ERROR:"SEND_ERROR",TIMEOUT:"TIMEOUT",RETRY_LIMIT_EXCEEDED:"RETRY_LIMIT_EXCEEDED",INVALID_RESPONSE:"INVALID_RESPONSE",AUTHENTICATION_ERROR:"AUTHENTICATION_ERROR",SERVER_ERROR:"SERVER_ERROR"};a.Services.Presence.PresenceError=b}(AvayaClientServices),function(a){"use strict";var b={PRESENCE_LOCATION_MODE_UNSPECIFIED:"PRESENCE_LOCATION_MODE_UNSPECIFIED",PRESENCE_LOCATION_MODE_OFFICE:"PRESENCE_LOCATION_MODE_OFFICE",PRESENCE_LOCATION_MODE_HOME:"PRESENCE_LOCATION_MODE_HOME",PRESENCE_LOCATION_MODE_MOBILE:"PRESENCE_LOCATION_MODE_MOBILE",PRESENCE_LOCATION_MODE_TRAVELING:"PRESENCE_LOCATION_MODE_TRAVELING"};a.Services.Presence.PresenceLocationMode=b}(AvayaClientServices),function(a){"use strict";var b={PRESENCE_OPTION_MANUAL_STATE:0,PRESENCE_OPTION_LOCATION_MODE:1,PRESENCE_OPTION_NOTE:2};a.Services.Presence.PresenceOptions=b}(AvayaClientServices),function(a){"use strict";var b={PRESENCE_STATE_UNSPECIFIED:"PRESENCE_STATE_UNSPECIFIED",PRESENCE_STATE_UNKNOWN:"PRESENCE_STATE_UNKNOWN",PRESENCE_STATE_AVAILABLE:"PRESENCE_STATE_AVAILABLE",PRESENCE_STATE_ON_A_CALL:"PRESENCE_STATE_ON_A_CALL",PRESENCE_STATE_BUSY:"PRESENCE_STATE_BUSY",PRESENCE_STATE_AWAY:"PRESENCE_STATE_AWAY",PRESENCE_STATE_DO_NOT_DISTURB:"PRESENCE_STATE_DO_NOT_DISTURB",PRESENCE_STATE_OUT_OF_OFFICE:"PRESENCE_STATE_OUT_OF_OFFICE",PRESENCE_STATE_OFFLINE:"PRESENCE_STATE_OFFLINE"};a.Services.Presence.PresenceState=b}(AvayaClientServices),function(a){"use strict";var b={PRESENCE_WATCHER_REQUEST_ALLOWED:"PRESENCE_WATCHER_REQUEST_ALLOWED",PRESENCE_WATCHER_REQUEST_DENIED:"PRESENCE_WATCHER_REQUEST_DENIED",PRESENCE_WATCHER_REQUEST_CANCELLED:"PRESENCE_WATCHER_REQUEST_CANCELLED"};a.Services.Presence.PresenceWatcherRequestResult=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d,e,f,g){}b.prototype={getError:function(){},getPresence:function(){}},a.Services.Presence.PresenceException=b}(AvayaClientServices),function(a){"use strict";function b(){this._onPresenceListSubscriptionStartedCallbacks=$.Callbacks(),this._onPresenceListSubscriptionPresenceReceivedCallbacks=$.Callbacks(),this._onPresenceListSubscriptionStoppedCallbacks=$.Callbacks()}b.prototype={addAddress:function(a){},removeAddress:function(a){},start:function(){},stop:function(){}},a.Services.Presence.PresenceListSubscription=b}(AvayaClientServices),function(a){"use strict";function b(){this._onSelfPresenceReceivedCallbacks=$.Callbacks(),this._onPresenceWatcherRequestReceivedCallbacks=$.Callbacks(),this._onPresenceServiceAvailableCallbacks=$.Callbacks(),this._onPresenceServiceUnavailableCallbacks=$.Callbacks()}b.prototype={createPresenceListSubscription:function(){},removePresenceListSubscription:function(a){},publishPresence:function(a){},setSendAllCallsOnDoNotDisturb:function(a){},getSendAllCallsOnDoNotDisturb:function(){},getSelfPresence:function(){}},a.Services.Presence.PresenceService=b}(AvayaClientServices),function(a){"use strict";function b(a,b,c,d){this._resource=a,this._id=b,this._uri=c,this._displayName=d}b.prototype={getId:function(){},getURI:function(){},getDisplayName:function(){},getWatchedResource:function(){}},a.Services.Presence.PresenceWatcherRequest=b}(AvayaClientServices),function(a){"use strict";function b(a){this._presentity=a}b.prototype={getSupportedOptions:function(){},setSupportedOptions:function(a){},getPresentity:function(){},getOverallState:function(){},setOverallState:function(a){},getManualState:function(){},setManualState:function(a){},getPhoneState:function(){},setPhoneState:function(a){},getPhoneContact:function(){},setPhoneContact:function(a){},getVideoState:function(){},setVideoState:function(a){},getVideoContact:function(){},setVideoContact:function(a){},getEnterpriseIMState:function(){},setEnterpriseIMState:function(a){},getEnterpriseIMContact:function(){},setEnterpriseIMContact:function(a){},getCalendarState:function(){},setCalendarState:function(a){},getCalendarStartTime:function(){},setCalendarStartTime:function(a){},getCalendarEndTime:function(){},setCalendarEndTime:function(a){},getLocationMode:function(){},setLocationMode:function(a){},getNote:function(){},setNote:function(a){},getPresenceStateString:function(){},getPresenceLocationModeString:function(){}},a.Services.Presence.Presence=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype={getCallLogId:function(){},getParticipantList:function(){},getStartTime:function(){},getCallDuration:function(){},isCallerIdPrivate:function(){},getSubject:function(){},getRemoteAddress:function(){},getLocalAddress:function(){},getCallType:function(){},getWebConferenceAddress:function(){},getChannelTypeList:function(){},isBridged:function(){},isIncoming:function(){},isMissed:function(){},isDeclined:function(){},isFailed:function(){},isRead:function(){},getCorrelatedCallLogIdList:function(){}},a.Services.SessionLogs.CallLogItem=b}(AvayaClientServices=AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype={getUnreadCount:function(){}},a.Services.SessionLogs.CallLogsDataSet=b}(AvayaClientServices=AvayaClientServices||{}),function(a){"use strict";a.Services.SessionLogs.create=function(){return new a.Services.SessionLogs.SessionLogs}}(AvayaClientServices=AvayaClientServices||{}),function(a){"use strict";function b(){}b.prototype={getCurrentCallLogItemList:function(){},markAsRead:function(a,b){},deleteCallLogItemList:function(a,b){}},a.Services.SessionLogs.SessionLogs=b}(AvayaClientServices=AvayaClientServices||{}),function(a,b){"use strict";function c(c){if(this._config=c,this._collaborationFactory=void 0,this._collaboration=void 0,this._callFactory=void 0,this._calls=void 0,this._messagingFactory=void 0,this._messaging=void 0,this._contactsProviders=[],this._userRegistrationSuccessfulCallbacks=b.Callbacks(),this._userUnregistrationSuccessfulCallbacks=b.Callbacks(),this._userRegistrationFailedCallbacks=b.Callbacks(),this._userUnregistrationFailedCallbacks=b.Callbacks(),this._providerFactory=new a.Base.ProviderFactory,this._config.sgConfiguration&&this._config.sgConfiguration.enabled?(this._callFactory=new a.Services.Call.CallFactory(this._config,this._providerFactory),this._callFactory.init(this._config),this._calls=this._callFactory.calls):this._config.uccpConfiguration&&this._config.uccpConfiguration.enabled&&(this._callFactory=new a.Services.Call.CallFactory(this._config,this._providerFactory),this._callFactory.init(this._config),this._calls=this._callFactory.calls),this._config.ammConfiguration&&this._config.ammConfiguration.enabled&&(this._messagingFactory=new a.Services.Messaging.MessagingFactory(this._config,this._providerFactory),this._messaging=this._messagingFactory.create()),this._config.wcsConfiguration&&this._config.wcsConfiguration.enabled&&(this._collaborationFactory=new a.Services.Collaboration.CollaborationFactory(this._config,this._providerFactory),this._collaboration=this._collaborationFactory.create()),this._config.gatewayConfig&&(this._callFactory=new a.Services.Call.CallFactory,this._callFactory.init(this._config),this._calls=this._callFactory.calls),this._config.acsConfiguration&&this._config.acsConfiguration.enabled){var d=this._providerFactory.getContactsProviders(this._config)[0],e=this._providerFactory.getDirectorySearchProviders(this._config)[0],f=new a.Services.Contacts.ContactsService(d,e);this._contacts=new a.Services.Contacts.Contacts(f)}}c.prototype={getCollaboration:function(){return this._collaboration},getMessaging:function(){return this._messaging},getContacts:function(){return this._contacts},getCalls:function(){return this._calls},stop:function(){var a=b.Deferred(),c=[];if(this._messaging){var d=this._messaging.stop();c.push(d)}if(this._contacts){var e=this._contacts.stop();c.push(e)}if(this._calls){var f=this._config.callUserConfiguration.incomingCall,g=this._calls._stop();g.then(function(){f&&this._userUnregistrationSuccessfulCallbacks.fire()}.bind(this),function(a){f&&this._userUnregistrationFailedCallbacks.fire(a)}.bind(this))}return b.when.apply(this,c).then(function(){a.resolve()},function(b){a.reject(b)}),a.promise()},start:function(){var a=b.Deferred(),c=[];if(this._messaging){var d=this._messaging.start(this._config);c.push(d)}if(this._contacts){var e=this._contacts.start(this._config);c.push(e)}if(this._calls){var f=this._config.callUserConfiguration.incomingCall,g=this._calls._start(f);g.then(function(){f&&this._userRegistrationSuccessfulCallbacks.fire()}.bind(this),function(a){f&&this._userRegistrationFailedCallbacks.fire(a)}.bind(this))}return b.when.apply(this,c).then(function(){a.resolve()},function(b){a.reject(b)}),a.promise()}},a.User=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Base.Observable.call(this),this._elements={},this._appliedElementIds=[]}c.prototype=Object.create(a.Base.Observable.prototype),c.prototype.getElement=function(a){return this._elements[a]},c.prototype.getElements=function(){},c.prototype.addElement=function(a,b){return a&&b&&!this.getElement(a)?(this._elements[a]=b,this.trigger("element_added",[b]),!0):!1},c.prototype.updateElement=function(a,b){if(a&&b){var c=this.getElement(a);if(c&&!this._areElementsEqual(c,b))return this._elements[a]=b,this.trigger("element_updated",[b]),!0}return!1},c.prototype.deleteElement=function(a){var b=this.getElement(a);return b?(delete this._elements[a],this.trigger("element_deleted",[b]),!0):!1},c.prototype.empty=function(){for(var a in this._elements)this.deleteElement(a)},c.prototype.applyElements=function(c,d){for(var e,f,g=c.length,h=0;g>h;h++)e=c[h].elementId,f=c[h].element,e&&f&&(this.addElement(e,f)||this.updateElement(e,f)||this.getElement(e)?this._appliedElementIds.push(e):a.Base.Logger.warn("Failed to add or update cache element",f));if(!d){for(e in this._elements)-1===b.inArray(e,this._appliedElementIds)&&this.deleteElement(e);this._appliedElementIds=[]}},c.prototype._areElementsEqual=function(a,b){return a===b?!0:"function"==typeof a.equals?a.equals(b):!1},a.Base.ElementCache=c}(AvayaClientServices,jQuery),function(a){"use strict";function b(){a.Base.WebSocketProvider.apply(this),this._deferreds={},this._transactionIDLocation=""}b.prototype=Object.create(a.Base.WebSocketProvider.prototype),b.prototype.start=function(b,c,d){d&&d.transactionIDLocation&&(this._transactionIDLocation=d.transactionIDLocation),a.Base.WebSocketProvider.prototype.start.call(this,b,c,d),this._socket.onmessage=function(b){var c,d,e,f=!0;try{c=this.parseResponse(b.data),d=this.getTransactionIDFromResponse(c,this._transactionIDLocation),e=this._deferreds[d]}catch(g){"string"==typeof b.data&&console.error(g)}d&&e&&(a.Base.Logger.debug("Resolving message "+c.name+" with transId "+d),delete this._deferreds[d],f=!1,e.resolve(c)),f&&this.onMessage(b)}.bind(this)},b.prototype.parseMessage=function(a){return JSON.parse(a)},b.prototype.send=function(b,c){var d=$.Deferred(),e=this.getTransactionIDFromRequest(this.parseRequest(b),this._transactionIDLocation);return e&&(this._deferreds[e]=d),a.Base.WebSocketProvider.prototype.send.call(this,b,c).then(function(){e||d.resolve()},function(a){d.reject(a)}),d.promise()},b.prototype.close=function(){for(var b in this._deferreds)if(this._deferreds.hasOwnProperty(b)){var c=this._deferreds[b];a.Base.Utils.isDefined(c)&&c.reject({message:"Request aborted due to close request"})}return this._deferreds={},a.Base.WebSocketProvider.prototype.close.call(this)},b.prototype._getTransactionID=function(b,c){return a.Base.Utils.queryJSONObject(b,c)},b.prototype.getTransactionIDFromResponse=function(a,b){return this._getTransactionID(a,b)},b.prototype.getTransactionIDFromRequest=function(a,b){return this._getTransactionID(a,b)},b.prototype.parseRequest=function(a){return this.parseMessage(a)},b.prototype.parseResponse=function(a){return this.parseMessage(a)},a.Base.TransactionalWebSocketProvider=b}(AvayaClientServices),function(a){"use strict";function b(){this.defaultMessage="One or more elements in provided array are not compatible with required type."}b.prototype=Object.create(a.Base.Validators.BaseValidator.prototype),b.prototype.validate=function(a,b,c){var d=a.filter(function(a){return typeof a===b.expected||"object"==typeof a&&a instanceof b.expected}),e=d.length===a.length;return this._processCondition(e,a,b,c)},a.Base.Validators.ArrayElementTypeValidator=b}(AvayaClientServices),function(a,b){"use strict";function c(b,c,d){a.Providers.Interfaces.AbstractProvider.call(this),this._acsNetworkProvider=b,this._contactsConverter=c,this._requestBuilder=d,this._state=a.Providers.ACS.ACSProviderStates.STOPPED,this._allowedCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._deniedCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._contactsCapability=this._deniedCapability}c.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),c.prototype.getProviderType=function(){return"ACS"},c.prototype.start=function(b){return this._changeState(a.Providers.ACS.ACSProviderStates.STARTING),this._acsNetworkProvider.start(b.acsConfiguration).then(function(){this._changeState(a.Providers.ACS.ACSProviderStates.STARTED),this.recalculateCapabilities(),this._acsNetworkProvider.on("acs_availability_changed",this.recalculateCapabilities.bind(this))}.bind(this))},c.prototype.stop=function(){return this._changeState(a.Providers.ACS.ACSProviderStates.STOPPING),this._acsNetworkProvider.stop().then(function(){this._changeState(a.Providers.ACS.ACSProviderStates.STOPPED),this.recalculateCapabilities(),this._removeListeners()}.bind(this))},c.prototype._changeState=function(a){a!==this._state&&(this._state=a,this._onStateChange(a))},c.prototype._onStateChange=function(a){},c.prototype.recalculateCapabilities=function(){var b,c=this._acsNetworkProvider.getResources();b=this._acsNetworkProvider.isAcsAvailable()&&c.capabilities&&c.capabilities.indexOf("contacts")>=0?this._allowedCapability:this._deniedCapability,this._contactsCapability!==b&&(this._contactsCapability=b,this.trigger(a.Providers.Interfaces.ContactsProviderCallbackIds.CAPABILITIES_CHANGED))},a.Providers.ACS.ACSBaseProviderV1=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Providers.Interfaces.ContactsProvider.call(this),this._providers={},this._selectedProvider=void 0,this._userConfig={}}c.prototype=b.extend({},a.Providers.Interfaces.ContactsProvider.prototype),c.prototype.registerACSContactsProvider=function(a,b){this._providers[a]=b},c.prototype.start=function(a){b.isEmptyObject(a)||this._userConfig===a||(this._userConfig=a);var c=this._determineServerVersion();return this._selectedProvider=this._providers[c],this._selectedProvider.start(a)},c.prototype._determineServerVersion=function(){return 1},c.prototype.getProviderType=function(){return this._selectedProvider.getProviderType()},c.prototype.stop=function(){return this._selectedProvider.stop()},c.prototype.createContactForAdd=function(){return this._selectedProvider.createContactForAdd()},c.prototype.addContact=function(a){return this._selectedProvider.addContact(a)},c.prototype.updateContact=function(a){return this._selectedProvider.updateContact(a)},c.prototype.deleteContact=function(a){return this._selectedProvider.deleteContact(a)},c.prototype.retrieveAllContacts=function(){return this._selectedProvider.retrieveAllContacts()},c.prototype.getContactsChanges=function(){return this._selectedProvider.getContactsChanges()},c.prototype.getAddContactCapability=function(){return this._selectedProvider.getAddContactCapability()},c.prototype.getUpdateContactCapability=function(){return this._selectedProvider.getUpdateContactCapability()},c.prototype.getDeleteContactCapability=function(){return this._selectedProvider.getDeleteContactCapability()},c.prototype.addOnContactAddedCallback=function(a){return this._selectedProvider.addOnContactAddedCallback(a)},c.prototype.removeOnContactAddedCallback=function(a){return this._selectedProvider.removeOnContactAddedCallback(a)},c.prototype.addOnContactUpdatedCallback=function(a){return this._selectedProvider.addOnContactUpdatedCallback(a)},c.prototype.removeOnContactUpdatedCallback=function(a){return this._selectedProvider.removeOnContactUpdatedCallback(a)},c.prototype.addOnContactDeletedCallback=function(a){return this._selectedProvider.addOnContactDeletedCallback(a)},c.prototype.removeOnContactDeletedCallback=function(a){return this._selectedProvider.removeOnContactDeletedCallback(a)},c.prototype.on=function(a,b){return this._selectedProvider.on(a,b)},c.prototype.off=function(a,b){return this._selectedProvider.off(a,b)},a.Providers.ACS.ACSContactsProvider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b,c,d){a.Providers.Interfaces.ContactsProvider.call(this),a.Providers.ACS.ACSBaseProviderV1.call(this,b,c,d),this._longPoll=!1,this._getContactsETag=null,this._contactsCache=new a.Base.ElementCache,this._contactsCache.on("element_added",function(b){this.trigger(a.Providers.Interfaces.ContactsProviderCallbackIds.CONTACT_ADDED,[this._contactsConverter.convertACSContactV1toContact(b,!0),this])}.bind(this)),this._contactsCache.on("element_updated",function(b){this.trigger(a.Providers.Interfaces.ContactsProviderCallbackIds.CONTACT_UPDATED,[this._contactsConverter.convertACSContactV1toContact(b,!0),this])}.bind(this)),this._contactsCache.on("element_deleted",function(b){this.trigger(a.Providers.Interfaces.ContactsProviderCallbackIds.CONTACT_DELETED,[this._contactsConverter.convertACSContactV1toContact(b,!0),this])}.bind(this))}c.prototype=b.extend({},a.Providers.Interfaces.ContactsProvider.prototype,a.Providers.ACS.ACSBaseProviderV1.prototype),c.prototype.createContactForAdd=function(){var b=new a.Services.Contacts.EditableContact,c=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED);return b.getGivenName().setWriteCapability(c),b.getSurname().setWriteCapability(c),b.getDisplayName().setWriteCapability(c),b.getASCIIGivenName().setWriteCapability(c),b.getASCIISurname().setWriteCapability(c),b.getASCIIDisplayName().setWriteCapability(c),b.getAlias().setWriteCapability(c),b.getASCIIAlias().setWriteCapability(c),b.getLocation().setWriteCapability(c),b.getWorkRoomNo().setWriteCapability(c),b.getStreetAddress().setWriteCapability(c),b.getCity().setWriteCapability(c),b.getState().setWriteCapability(c),b.getCountry().setWriteCapability(c),b.getPostalCode().setWriteCapability(c),b.getCompany().setWriteCapability(c),b.getManager().setWriteCapability(c),b.getDepartment().setWriteCapability(c),b.getLanguage().setWriteCapability(c),b.getNotes().setWriteCapability(c),b.getRank().setWriteCapability(c),b.isBuddy().setWriteCapability(c),b.isFavorite().setWriteCapability(c),b},c.prototype.addContact=function(a){var b=this._contactsConverter.convertContactToACSContactV1(a),c=this._requestBuilder.buildAddUpdateContactData(b),d=this._requestBuilder.buildAddContactOptions();return this._acsNetworkProvider.send(c,d).then(function(a){var b=this._contactsConverter.extendAcsContact(a);b.contactIdentifier&&b.contactIdentifier.value&&this._contactsCache.addElement(b.contactIdentifier.value,b)}.bind(this))},c.prototype.updateContact=function(a){var b=this._contactsCache.getElement(a._uniqueAddressForMatching),c=this._contactsConverter.mergeContactWithACSContactV1(a,b),d=this._requestBuilder.buildAddUpdateContactData(c),e=this._requestBuilder.buildUpdateContactOptions();return this._acsNetworkProvider.send(d,e).then(function(a){var b=this._contactsConverter.extendAcsContact(a);b.contactIdentifier&&b.contactIdentifier.value&&this._contactsCache.updateElement(b.contactIdentifier.value,b)}.bind(this))},c.prototype.deleteContact=function(a){var b=this._contactsCache.getElement(a._uniqueAddressForMatching),c=this._requestBuilder.buildDeleteContactOptions(b.contactUrl.value);return this._acsNetworkProvider.send(null,c).then(function(a){"true"===a&&b.contactIdentifier&&b.contactIdentifier.value&&this._contactsCache.deleteElement(b.contactIdentifier.value,b)}.bind(this))},c.prototype.retrieveAllContacts=function(){var a=b.Deferred();return this._getContacts(!1).then(function(b){this._applyContactsToCache(b.contacts),a.resolve(this._contactsConverter.convertACSContactsV1toContactList(b,!0)),this._startPolling()}.bind(this),function(b){a.reject(b)},function(b){this._applyContactsToCache(b.contacts,!0),a.notify(this._contactsConverter.convertACSContactsV1toContactList(b,!0))}.bind(this)),a.promise()},c.prototype._startPolling=function(){return this._longPoll?void a.Base.Logger.warn("Contacts polling has been already started"):(this._longPoll=!0,void this._longPollContacts())},c.prototype._stopPolling=function(){return this._longPoll?void(this._longPoll=!1):void a.Base.Logger.warn("Contacts polling is not running")},c.prototype._longPollContacts=function(){this._getContacts(!0).then(function(a){a&&this._applyContactsToCache(a.contacts,!1),this._longPoll&&setTimeout(this._longPollContacts.bind(this),0)}.bind(this),function(a){this._longPoll&&setTimeout(this._longPollContacts.bind(this),0)}.bind(this),function(a){this._applyContactsToCache(a.contacts,!0)}.bind(this))},c.prototype._applyContactsToCache=function(b,c){for(var d=b.length,e=[],f=0;d>f;f++)b[f].contactIdentifier&&b[f].contactIdentifier.value?e.push({elementId:b[f].contactIdentifier.value,element:this._contactsConverter.extendAcsContact(b[f])}):a.Base.Logger.warn("Received contact does not have contactIdentifier set, ignoring it",b[f]);this._contactsCache.applyElements(e,c)},c.prototype._getContacts=function(c){var d=b.Deferred(),e=this._requestBuilder.buildGetContactsOptions(c,null,this._getContactsETag),f=function(b){a.Base.Logger.error("Failed to retrieve contacts from ACSv1 (longpoll="+c+")",b),d.reject(b)},g=function(b){if(!b)return void d.resolve();if(b.hasMoreResults){d.notify(b);var c=b.contacts.length-1,h=b.contacts[c].id.value;if(!h)return a.Base.Logger.warn('Last contact of the partial response to retrieve contacts request does not have "id" property set (required for consequent requests)',b.contacts[c]),void f("Received invalid response from ACS");e=this._requestBuilder.buildGetContactsOptions(!1,h,this._getContactsETag),this._acsNetworkProvider.send(null,e).then(g.bind(this),f)}else this._getContactsETag=this._acsNetworkProvider.getETag(),d.resolve(b)};return this._acsNetworkProvider.send(null,e).then(g.bind(this),f),d.promise()},c.prototype.getContactsChanges=function(){},c.prototype.getAddContactCapability=function(){return this._contactsCapability},c.prototype.getUpdateContactCapability=function(){return this._contactsCapability},c.prototype.getDeleteContactCapability=function(){return this._contactsCapability},c.prototype._onStateChange=function(b){b===a.Providers.ACS.ACSProviderStates.STOPPING?this._stopPolling():b===a.Providers.ACS.ACSProviderStates.STOPPED&&this._contactsCache.empty()},a.Providers.ACS.ACSContactsProviderV1=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Providers.Interfaces.DirectorySearchProvider.call(this),this._providers={},this._selectedProvider=void 0,this._userConfig={}}c.prototype=b.extend({},a.Providers.Interfaces.DirectorySearchProvider.prototype),c.prototype.registerACSDirectorySearchProvider=function(a,b){this._providers[a]=b},c.prototype.start=function(a){b.isEmptyObject(a)||this._userConfig===a||(this._userConfig=a);var c=this._determineServerVersion();return this._selectedProvider=this._providers[c],this._selectedProvider.start(a)},c.prototype._determineServerVersion=function(){return 1},c.prototype.getProviderType=function(){return this._selectedProvider.getProviderType()},c.prototype.stop=function(){return this._selectedProvider.stop()},c.prototype.startDirectorySearch=function(a){return this._selectedProvider.startDirectorySearch(a)},c.prototype.stopDirectorySearch=function(a){return this._selectedProvider.stopDirectorySearch(a)},c.prototype.getSearchContactCapability=function(){return this._selectedProvider.getSearchContactCapability()},c.prototype.on=function(a,b){return this._selectedProvider.on(a,b)},c.prototype.off=function(a,b){return this._selectedProvider.off(a,b)},a.Providers.ACS.ACSDirectorySearchProvider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b,c,d){a.Providers.Interfaces.DirectorySearchProvider.call(this),a.Providers.ACS.ACSBaseProviderV1.call(this,b,c,d),this._activeSearches={}}c.prototype=b.extend({},a.Providers.Interfaces.DirectorySearchProvider.prototype,a.Providers.ACS.ACSBaseProviderV1.prototype),
c.prototype.startDirectorySearch=function(c){var d=b.Deferred();if(c)this._searchContacts(c).then(function(a){d.resolve(this._contactsConverter.convertACSContactsV1toContactList(a,!1))}.bind(this),function(a){d.reject(a)},function(a){d.notify(this._contactsConverter.convertACSContactsV1toContactList(a,!1))}.bind(this));else{var e="Search parameters weren't specified";d.reject(new a.Providers.ACS.ACSError(e,e))}return d.promise()},c.prototype._searchContacts=function(c){var d=b.Deferred(),e=this._requestBuilder.buildSearchContactsOptions(c),f=function(b){a.Base.Logger.error("Failed to retrieve directory contacts from ACSv1",b),d.reject(b)},g=function(b){if(this._activeSearches[c]){if(!b)return void d.resolve();if(b.hasMoreResults){d.notify(b);var h=b.contacts.length-1,i=b.contacts[h].id.value;if(!i)return a.Base.Logger.warn('Last contact of the partial response to retrieve contacts request does not have "id" property set (required for consequent requests)',b.contacts[h]),void f("Received invalid response from ACS");e=this._requestBuilder.buildSearchContactsOptions(c,i),this._acsNetworkProvider.send(null,e).then(g.bind(this),f)}else d.resolve(b),delete this._activeSearches[c]}};return this._activeSearches[c]=d,this._acsNetworkProvider.send(null,e).then(g.bind(this),f),d.promise()},c.prototype.stopDirectorySearch=function(c){var d=b.Deferred(),e=this._activeSearches[c];if(e){var f="Contact search has been canceled by user";e.reject(new a.Providers.ACS.ACSError(f,f)),delete this._activeSearches[c],d.resolve()}else{var g="Contact search is already completed/canceled or wasn't started";d.reject(new a.Providers.ACS.ACSError(g,g))}return d.promise()},c.prototype.getSearchContactCapability=function(){return this._contactsCapability},a.Providers.ACS.ACSDirectorySearchProviderV1=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b){a.Providers.Interfaces.MessagingProvider.call(this),this._eTag="",this._conversationsLastModified=void 0,this._isStarted=!1,this._networkProvider=b,this._resources={},this._config={},this._resourcesTypes={conversations:"application/vnd.avaya.aem.conversations.v1+json",error:"application/vnd.avaya.aem.error.v1+json",resources:"application/vnd.avaya.aem.resources.v1+json",validatedAddresses:"application/vnd.avaya.aem.validatedAddresses.v2+json",participants:"application/vnd.avaya.aem.participants.v1+json",message:"application/vnd.avaya.aem.message.v1+json",messageFlags:"application/vnd.avaya.aem.message.v1+json",messageIds:"application/vnd.avaya.aem.messageIds.v1+json",event:"application/vnd.avaya.aem.event.v1+json",conversation:"application/vnd.avaya.aem.conversation.v1+json",conversationIds:"application/vnd.avaya.aem.conversations.ids.v1+json",conversationAccessTime:"application/vnd.avaya.aem.conversation.access.time.v1+json",conversationFlags:"application/vnd.avaya.aem.conversation.flags.v1+json"},this._endpoints={conversations:"",validateAddresses:"",messages:"",outbox:"",markAsReadIf:"",markAsReadBatch:"",addresses:""}}c.prototype=Object.create(a.Providers.Interfaces.MessagingProvider.prototype),c.prototype.onCredentialsRequired=function(a){var b;this._config.credentialProvider.onAuthenticationChallenge(b,function(b){this.onCredentialsRetrieved(b,a)}.bind(this))},c.prototype.onCredentialsRetrieved=function(b,c){var d=btoa(b.username+":"+b.password);(a.Base.Utils.isDefined(c.message)||a.Base.Utils.isDefined(c.options))&&(c.options.headers.Authorization="Basic "+d)},c.prototype.start=function(a){this._config=a,this._isStarted=!0},c.prototype.getConversations=function(a){var b=a||{headers:{}};return b.url=this._endpoints.conversations,b.sendType="GET",b.dataType="JSON",b.headers.Accept=[this._resourcesTypes.conversations,this._resourcesTypes.error].join(", "),this._networkProvider.send(null,b).then(function(a){return a},this._handleError.bind(this))},c.prototype.getConversationIds=function(){var a=b.Deferred();return a.reject(),a.promise()},c.prototype.getConversationsByQuery=function(a){var b={};return b.url=this._endpoints.conversations,b.sendType="GET",b.dataType="JSON",b.headers={Accept:[this._resourcesTypes.conversations,this._resourcesTypes.error].join(", ")},this._networkProvider.send(a,b).then(function(a){return a},this._handleError.bind(this))},c.prototype.parseResources=function(a){this._resources=a,this._config.endpoints={}},c.prototype.discoverResources=function(){var a={};return a.urlSuffix="/aem/resources",a.sendType="GET",a.dataType="JSON",a.headers={Accept:[this._resourcesTypes.resources,this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,a).then(function(a){return this.parseResources(a),this._resources}.bind(this),this._handleError.bind(this))},c.prototype.getResources=function(){return this._resources},c.prototype.validateUsers=function(a){var b={},c=a.map(function(a){return"address="+a}).join("&");return b.sendType="GET",b.dataType="JSON",b.headers={Accept:[this._resourcesTypes.validatedAddresses,this._resourcesTypes.error].join(", ")},b.url=this._endpoints.validateAddresses,b.url+="?"+c,this._networkProvider.send(null,b).then(function(a){return a},this._handleError.bind(this))},c.prototype.getRoutableDomains=function(){return this._resources.domains},c.prototype.getParticipants=function(a,b){var c=b||{};return c.url=this._endpoints.conversations+"/"+a+"/participants",c.sendType="GET",c.dataType="JSON",c.headers={Accept:[this._resourcesTypes.participants,this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,c).then(function(a){return a},this._handleError.bind(this))},c.prototype.setLastAccessTime=function(a,b){var c=b||{};return c.url=this._endpoints.conversations+"/"+a,c.sendType="POST",c.headers={"Content-Type":[this._resourcesTypes.conversationAccessTime].join(", "),Accept:[this._resourcesTypes.conversationAccessTime,this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,c).then(function(a){return a},this._handleError.bind(this))},c.prototype.sendMessage=function(a,b){var c=b||{};return c.url=this._endpoints.outbox,c.dataType="JSON",c.headers={Accept:[this._resourcesTypes.message,this._resourcesTypes.error].join(", "),"Content-Type":this._resourcesTypes.message},this._networkProvider.send(JSON.stringify(a),c).then(function(a){return a},this._handleError.bind(this))},c.prototype._handleError=function(b){var c;try{c=b.responseJSON||JSON.parse(b.responseText)}catch(d){c=b.responseJSON}if(c){var e=c.error[0];return new a.Providers.AMM.AMMError(e.errorMsg,e.errorCode)}return new a.Providers.AMM.AMMError(b.responseText,b.status)},c.prototype.sendMessageWithAttachments=function(a,c,d){var e=d||{},f="boundary";e.url=this._endpoints.outbox,e.dataType="json",e.headers={Accept:[this._resourcesTypes.message,this._resourcesTypes.error].join(", "),"Content-Type":'multipart/related;boundary="'+f+'"'},e.processData=!1;var g=b.Deferred();return this._createThumbnailsPromises(c).then(function(){return this._createAttachmentsPromises(c)}.bind(this),function(a){g.reject(a)}).then(function(){var b=this._prepareRawBody(f,a,arguments[0]);this._networkProvider.send(b,e).then(function(a){g.resolve(a)},function(a){g.reject(this._handleError(a))}.bind(this))}.bind(this),function(a){g.reject(a)}),g.promise()},c.prototype._createThumbnailsPromises=function(a){var c=b.Deferred(),d=[];return a.forEach(function(a){d.push(a.createThumbnail())}),b.when.apply(this,d).then(function(){c.resolve(a)}),c.promise()},c.prototype._createAttachmentsPromises=function(a){var c=b.Deferred(),d=[];return a.forEach(function(a){d.push(this._readAttachment(a)),a.getCreateThumbnailCapability().isAllowed&&d.push(this._readAttachment(a.getThumbnail()))}.bind(this)),b.when.apply(this,d).then(function(){c.resolve(arguments)}),c.promise()},c.prototype._readAttachment=function(c){var d=b.Deferred(),e=new FileReader;return e.onload=function(b){var e={name:c.getName(),mime:c.getMimeType(),type:c.getType(),data:""},f="base64,";c.getType()===a.Services.Messaging.AttachmentType.THUMBNAIL&&-1!==b.target.result.indexOf(f)?e.data=atob(b.target.result.slice(b.target.result.indexOf(f)+f.length)):e.data=b.target.result,d.resolve(e)},e.onerror=function(a){d.reject(a)},e.readAsBinaryString(c.file),d.promise()},c.prototype._prepareRawBody=function(b,c,d){for(var e=JSON.stringify(c),f=["--boundary\n","Content-Type:application/vnd.avaya.aem.message.v1+json;\n\n",e,"\n"],g=0;g<d.length;g++){var h=d[g].type===a.Services.Messaging.AttachmentType.THUMBNAIL?"inline":"attachment";f.push("--"+b+"\n"),f.push("Content-Type:"+d[g].mime+"\n"),f.push("Content-Transfer-Encoding:binary\n"),f.push("Content-Disposition:"+h+'; filename="'+d[g].name+'"\n\n'),f.push(d[g].data+"\n")}f.push("--"+b+"--\n"),f=f.join("");for(var i=new Uint8Array(f.length),j=0;j<f.length;j++)i[j]=255&f.charCodeAt(j);return i},c.prototype.leaveConversation=function(a){var b={};return b.url=this._endpoints.conversations+"/"+a,b.sendType="DELETE",b.headers={Accept:[this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,b).then(function(a){return a},this._handleError.bind(this))},c.prototype.markAllAsRead=function(a,b,c){var d={};return d.url=this._endpoints.markAsReadIf,d.url+="?conversationId="+a,"undefined"!=typeof b&&(d.url+="&hasAttachment="+!!b),c&&(d.url+="&upTo="+c),d.sendType="POST",d.headers={Accept:[this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,d).then(function(a){return a},this._handleError.bind(this))},c.prototype.changeSubject=function(a){var b={};return b.url=this._endpoints.outbox,b.dataType="JSON",b.headers={"Content-Type":this._resourcesTypes.message},this._networkProvider.send(JSON.stringify(a),b).then(function(a){return a},this._handleError.bind(this))},c.prototype.markAsReadBatch=function(b){var c={};if(c.url=this._endpoints.markAsReadBatch,""===c.url)throw new a.Providers.AMM.AMMError("Service is unavailable");c.sendType="POST",c.headers={Accept:[this._resourcesTypes.error].join(", "),"Content-Type":this._resourcesTypes.messageIds};var d=JSON.stringify({messageIds:b});return this._networkProvider.send(d,c).then(function(a){return a},this._handleError.bind(this))},c.prototype.getMessages=function(a,b,c,d){var e={};e.url=this._endpoints.conversations+"/"+a;var f="?";return"undefined"!=typeof c&&(e.url+=f+"beforeId="+c.id,f="&"),"undefined"!=typeof d&&(e.url+=f+"afterId="+d.id,f="&"),"undefined"!=typeof b&&(e.url+=f+"maxEntries="+b),e.sendType="GET",e.dataType="JSON",e.headers={Accept:[this._resourcesTypes.conversation,this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,e).then(function(a){return a},this._handleError.bind(this))},c.prototype.start=function(){},c.prototype.stop=function(){},c.prototype.reportTyping=function(){},c.prototype.reportRecordingAudio=function(){},c.prototype.reportRecordingVideo=function(){},c.prototype.reportAttachingFile=function(){},c.prototype.reportTakingPicture=function(){},c.prototype.observeConversations=function(){},c.prototype.subscribeForTypingEventsInConversation=function(){},c.prototype.unsubscribeForTypingEventsInConversation=function(){},c.prototype.callEscalationEvent=function(a,b){var c={};return c.url=this._endpoints.conversations+"/"+b+"/events",c.sendType="POST",c.headers={"Content-Type":this._resourcesTypes.event},this._networkProvider.send(JSON.stringify(a),c).then(function(a){return a},this._handleError.bind(this))},c.prototype.addParticipantsToConversation=function(a,b){var c={};return c.url=this._endpoints.conversations+"/"+a+"/participants",c.sendType="POST",c.dataType="JSON",c.headers={"Content-Type":this._resourcesTypes.participants},this._networkProvider.send(JSON.stringify(b),c).then(function(a){return a},this._handleError.bind(this))},c.prototype.close=function(a){var b={};return b.url=this._endpoints.conversations+"/"+a+"/flags",b.sendType="POST",b.dataType="JSON",b.headers={"Content-Type":this._resourcesTypes.conversationFlags},this._networkProvider.send(JSON.stringify({closed:!0}),b).then(function(a){return a},this._handleError.bind(this))},c.prototype.stop=function(){this._isStarted=!1,this._eTag="";var a=b.Deferred();return this._networkProvider.onClose=function(){this._resources={},a.resolve()}.bind(this),this._networkProvider.onError=function(b){"abort"===b.statusText?a.resolve():a.reject(b)}.bind(this),this._networkProvider.close(),a.promise()},c.prototype.isUpdateSubjectSupported=function(){},c.prototype.isMarkAllContentAsReadSupported=function(){},a.Providers.AMM.AbstractAMMProvider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b){a.Providers.AMM.AbstractAMMProvider.call(this,b),this._networkProvider._onCredentialsRequired=this.onCredentialsRequired.bind(this),this._resources={},this._resourcesTypes.resources="application/vnd.avaya.aem.resources.v2+json"}c.prototype=Object.create(a.Providers.AMM.AbstractAMMProvider.prototype),c.prototype.start=function(a){return this._config=a,this._isStarted=!0,this._networkProvider.onMessage=function(a,b){if("undefined"!=typeof b){var c=b.getResponseHeader("ETag");a.conversations&&(a.lastUpdated?this._conversationsLastModified=new Date(new Date(a.lastUpdated).getTime()+1):this._conversationsLastModified=new Date(new Date(b.getResponseHeader("Last-Modified")).getTime()+1)),null!==c&&"undefined"!=typeof c&&(this._eTag=c)}}.bind(this),this._networkProvider.onError=function(a){return this._handleError(a)}.bind(this),this._networkProvider.start(this._config.serverInfo,this._config.credentialProvider)},c.prototype._longPollConversations=function(){if(!b.isEmptyObject(this._resources)){var a=30;this._resources.avayaRequestTimeout&&this._resources.avayaRequestTimeout.recommended&&(a=this._resources.avayaRequestTimeout.recommended);var c={headers:{"If-None-Match":this._eTag,"Avaya-Request-Timeout":a}};return this.getConversations(c)}},c.prototype.observeConversations=function(){return this._longPollConversations().then(function(a){return this._isStarted?(a&&a.conversations&&a.conversations.length>0&&this.trigger("conversations.update",[a]),this.observeConversations()):void 0}.bind(this))},c.prototype.isUpdateSubjectSupported=function(){return!0},c.prototype.isMarkAllContentAsReadSupported=function(){return!!this._resources&&!!this._resources.services&&!!this._resources.services.markAsReadIf},c.prototype.parseResources=function(c){this._resources=b.extend({},new a.Providers.AMM.ResourcesV2,c),this._endpoints.conversations=this._resources.conversationsResource.href,this._endpoints.validateAddresses=this._resources.services.validateAddresses,this._endpoints.messages=this._resources.messages,this._endpoints.outbox=this._resources.outbox,this._endpoints.markAsReadIf=this._resources.services.markAsReadIf,this._endpoints.addresses=this._resources.addresses},a.Providers.AMM.AMM2Provider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(b,c){a.Providers.AMM.AMM2Provider.call(this,b),this._networkProvider._onCredentialsRequired=this.onCredentialsRequired.bind(this),this._resources={},this._webSocketProvider=c,this._resourcesTypes.resources="application/vnd.avaya.aem.resources.v4+json",this._resourcesTypes.conversations="application/vnd.avaya.aem.conversations.v2+json",this._previousETag=void 0,this._isListening=!1,this._requests={},this._callbacksForTypingEvents={},this._identity={},this._onCredentialsRequired=this.onCredentialsRequired.bind(this),this._dfdSubscribed={},this._dfdUnsubscribed={}}c.prototype=Object.create(a.Providers.AMM.AMM2Provider.prototype),c.prototype.start=function(b){return a.Providers.AMM.AMM2Provider.prototype.start.call(this,b)},c.prototype.startWebSocket=function(){var c=b.Deferred(),d=this.getResources().notifications.href||this.getResources().notifications.websocket.href;if(a.Base.Utils.isDefined(d)&&!this._webSocketProvider.isOpened()){var e=function(){this._webSocketProvider.onMessage=function(c){var d,e,f=JSON.parse(c.data);if(f.notification)switch(f.notification.service){case"conversation":this._previousETag=this._eTag,this._eTag=a.Base.Utils.queryJSONObject(f.notification,"contents.entityTag"),this.getConversationsByQuery({after:this._conversationsLastModified.toISOString()}).then(function(a){a&&a.conversations&&a.conversations.length>0&&this.trigger("conversations.update",[a])}.bind(this));break;case"chatState":var g=b.extend({},new a.Providers.AMM.NotificationContentsV1,f.notification.contents);this._callbacksForTypingEvents[f.notification.resource].fire(g)}else f.notified?this._handleSocketNotified(f.notified):f.discovery||(f.subscribed?(d=a.Base.Utils.queryJSONObject(f.subscribed,"results.successful[0].service"),e=a.Base.Utils.queryJSONObject(f.subscribed,"results.successful[0].resource"),"chatState"===d&&void 0!==this._dfdSubscribed[e]&&"pending"===this._dfdSubscribed[e].state()&&this._dfdSubscribed[e].resolve(f.subscribed)):f.unsubscribed&&(d=a.Base.Utils.queryJSONObject(f.unsubscribed,"results.successful[0].service"),e=a.Base.Utils.queryJSONObject(f.unsubscribed,"results.successful[0].resource"),"chatState"===d&&void 0!==this._dfdUnsubscribed[e]&&"pending"===this._dfdUnsubscribed[e].state()&&this._dfdUnsubscribed[e].resolve(f.unsubscribed)))}.bind(this),c.resolve()}.bind(this);this._webSocketProvider.onOpen=e,this._webSocketProvider.start({webSocketURL:d,maxConnectionErrorCount:5})}else c.reject("WebSocket Url undefined");return c.promise()},c.prototype.stop=function(){var c=b.Deferred(),d=a.Providers.AMM.AMM2Provider.prototype.stop.call(this);return d.then(function(){this._webSocketProvider.onClose=function(){this._previousETag=void 0,this._conversationsLastModified=void 0,this._isListening=!1,c.resolve()}.bind(this);try{this._webSocketProvider.close()}catch(a){c.reject(a)}}.bind(this),function(a){c.reject(a)}),c.promise()},c.prototype.discoverResources=function(){var a={};return a.urlSuffix="/aem/resources",a.sendType="GET",a.dataType="JSON",a.headers={Accept:[this._resourcesTypes.resources,this._resourcesTypes.error].join(", ")},this._networkProvider.send(null,a).then(function(a){return this.parseResources(a),this.startWebSocket(),this._resources}.bind(this),this._handleError.bind(this))},c.prototype.parseResources=function(c){this._resources=b.extend({},new a.Providers.AMM.ResourcesV4,c),this._endpoints.conversations=this._resources.conversationsResource.href,this._endpoints.validateAddresses=this._resources.services.validateAddresses.href,this._endpoints.messages=this._resources.messages.href,this._endpoints.outbox=this._resources.outbox.href,this._endpoints.markAsReadIf=this._resources.services.markAsReadIf.href,this._endpoints.markAsReadBatch=this._resources.services.markAsReadBatch.href},c.prototype.getConversations=function(b){this._previousETag&&(b=b||{},b.headers=b.headers||{},b.headers["If-None-Match"]=this._previousETag);var c=a.Providers.AMM.AMM2Provider.prototype.getConversations.call(this,b);return c},c.prototype.getConversationIds=function(a){var b=a||{headers:{}};return b.url=this._endpoints.conversations,b.sendType="GET",b.dataType="JSON",b.headers["If-None-Match"]=this._previousETag,b.headers.Accept=[this._resourcesTypes.conversationIds,this._resourcesTypes.error].join(", "),this._networkProvider.send(null,b).then(function(a){return a},this._handleError.bind(this))},c.prototype.observeConversations=function(){var a={subscribe:{resources:[{application:"AMM",service:"conversation",resource:this._resources.conversationsResource.href}],version:"1"}};this._webSocketProvider.send(JSON.stringify(a))},c.prototype.reportTyping=function(b,c){return this._reportChatState(a.Providers.AMM.ChatStateActions.TYPING,b,c)},c.prototype.subscribeForTypingEventsInConversation=function(a,c){var d=this._resources.conversationsResource.href+"/"+a;this._dfdSubscribed[d]=b.Deferred();var e={subscribe:{resources:[{application:"AMM",service:"chatState",resource:d}]}},f=!1;return this._callbacksForTypingEvents[d]||(this._callbacksForTypingEvents[d]=b.Callbacks()),this._callbacksForTypingEvents[d].has()||(f=!0),this._callbacksForTypingEvents[d].has(c)||this._callbacksForTypingEvents[d].add(c),f&&this._webSocketProvider.send(JSON.stringify(e)),this._dfdSubscribed[d].promise()},c.prototype.unsubscribeForTypingEventsInConversation=function(a){var c=this._resources.conversationsResource.href+"/"+a;this._dfdUnsubscribed[c]=b.Deferred();var d={unsubscribe:{resources:[{application:"AMM",service:"chatState",resource:c}]}};return this._callbacksForTypingEvents[c]&&this._callbacksForTypingEvents[c].has()&&this._callbacksForTypingEvents[c].empty(),this._webSocketProvider.send(JSON.stringify(d)),this._dfdUnsubscribed[c].promise()},c.prototype.reportRecordingAudio=function(b,c){return this._reportChatState(a.Providers.AMM.ChatStateActions.RECORDING_AUDIO,b,c)},c.prototype.reportRecordingVideo=function(b,c){return this._reportChatState(a.Providers.AMM.ChatStateActions.RECORDING_VIDEO,b,c)},c.prototype.reportAttachingFile=function(b,c){return this._reportChatState(a.Providers.AMM.ChatStateActions.ATTACHING_FILE,b,c)},c.prototype.reportTakingPicture=function(b,c){return this._reportChatState(a.Providers.AMM.ChatStateActions.TAKING_PICTURE,b,c)},c.prototype._notifyThroughSocket=function(b,c){for(var d=a.Base.Utils.makeId();a.Base.Utils.isDefined(this._requests[d]);)d=a.Base.Utils.makeId();var e={notify:{requestId:d,notifications:[b]}};this._requests[d]=c,this._webSocketProvider.send(JSON.stringify(e))},c.prototype._handleSocketNotified=function(b){b.results.successful&&a.Base.Utils.isDefined(this._requests[b.requestId])?(this._requests[b.requestId].resolve(b.results.successful[0]),delete this._requests[b.requestId]):b.results.failed&&a.Base.Utils.isDefined(this._requests[b.requestId])&&(this._requests[b.requestId].reject(b.results.failed[0]),delete this._requests[b.requestId])},c.prototype.isUpdateSubjectSupported=function(){return!!(this._resources&&this._resources.conversationsResource&&this._resources.conversationsResource.capabilities&&this._resources.conversationsResource.capabilities.subjectChange)},c.prototype.isMarkAllContentAsReadSupported=function(){return!!this._resources&&!!this._resources.services&&!!this._resources.services.markAsReadIf},c.prototype._reportChatState=function(c,d,e){var f=b.Deferred(),g={application:"AMM",service:"chatState",resource:this._resources.conversationsResource.href+"/"+d,contents:{state:a.Providers.AMM.ChatStates.PAUSED}};return e&&(g.contents={action:c,state:a.Providers.AMM.ChatStates.COMPOSING}),this._notifyThroughSocket(g,f),f.promise()},c.prototype.isOpened=function(){return this._webSocketProvider.isOpened()},a.Providers.AMM.AMM3Provider=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Providers.AMM.AbstractAMMProvider.call(this),this._providers=[],this._selectedProvider=void 0,this._config={}}c.prototype=Object.create(a.Providers.AMM.AbstractAMMProvider.prototype),c.prototype.registerAMMProvider=function(a,b){this._providers.push({version:a,provider:b})},c.prototype.start=function(a){return b.isEmptyObject(a)||this._config===a||(this._config=a),this.determineServerVersion()},c.prototype.determineServerVersion=function(){var a=b.Deferred();this._providers.sort(function(a,b){return b.version-a.version});var c=0;return this._checkServer(c,a,this._config),a.promise()},c.prototype._checkServer=function(b,c,d){this._isProperVersion(b,d).then(function(){this._selectedProvider=this._providers[b].provider,a.Base.Logger.info("Determined AMM server version: "+this._selectedProvider._resourcesTypes.resources),c.resolve()}.bind(this),function(a){b+=1,406===a.statusCode||b===this._providers.length-1?this._checkServer(b,c,d):c.reject(a)}.bind(this))},c.prototype._isProperVersion=function(a,b){return this._providers[a].provider.start(b),this._providers[a].provider.discoverResources()},c.prototype.getRoutableDomains=function(){return this._selectedProvider.getRoutableDomains()},c.prototype.getConversations=function(a){return this._selectedProvider.getConversations(a)},c.prototype.getConversationIds=function(b){return this._selectedProvider.getConversationIds(b).then(function(b){for(var c=[],d=0;d<b.conversationIds.length;d++)c.push(new a.Services.Messaging.ConversationId(b.conversationIds[d]));return c})},c.prototype.getConversationsByQuery=function(a){return this._selectedProvider.getConversationsByQuery(a)},c.prototype.discoverResources=function(){return this._selectedProvider.discoverResources()},c.prototype.getResources=function(){return this._selectedProvider.getResources()},c.prototype.validateUsers=function(a){return this._selectedProvider.validateUsers(a)},c.prototype.getParticipants=function(a,b){return this._selectedProvider.getParticipants(a,b)},c.prototype.sendMessage=function(a,b){return this._selectedProvider.sendMessage(a,b)},c.prototype.sendMessageWithAttachments=function(a,b,c){return this._selectedProvider.sendMessageWithAttachments(a,b,c)},c.prototype.leaveConversation=function(a){return this._selectedProvider.leaveConversation(a)},c.prototype.markAllAsRead=function(a){return this._selectedProvider.markAllAsRead(a)},c.prototype.changeSubject=function(a){return this._selectedProvider.changeSubject(a)},c.prototype.markAsReadBatch=function(a){return this._selectedProvider.markAsReadBatch(a)},c.prototype.getMessages=function(a,b,c,d){return this._selectedProvider.getMessages(a,b,c,d)},c.prototype.reportTyping=function(a,b){return this._selectedProvider.reportTyping(a,b)},c.prototype.reportRecordingAudio=function(a,b){return this._selectedProvider.reportRecordingAudio(a,b)},c.prototype.reportRecordingVideo=function(a,b){return this._selectedProvider.reportRecordingVideo(a,b)},c.prototype.reportAttachingFile=function(a,b){return this._selectedProvider.reportAttachingFile(a,b)},c.prototype.reportTakingPicture=function(a,b){return this._selectedProvider.reportTakingPicture(a,b)},c.prototype.observeConversations=function(){return this._selectedProvider.observeConversations()},c.prototype.callEscalationEvent=function(a,b){return this._selectedProvider.callEscalationEvent(a,b)},c.prototype.setLastAccessTime=function(a,b){return this._selectedProvider.setLastAccessTime(a,b)},c.prototype.addParticipantsToConversation=function(a,b){return this._selectedProvider.addParticipantsToConversation(a,b)},c.prototype.subscribeForTypingEventsInConversation=function(a,b){return this._selectedProvider.subscribeForTypingEventsInConversation(a,b)},c.prototype.unsubscribeForTypingEventsInConversation=function(a){return this._selectedProvider.unsubscribeForTypingEventsInConversation(a)},c.prototype.close=function(a){return this._selectedProvider.close(a)},c.prototype.stop=function(){return this._selectedProvider.stop()},c.prototype.on=function(a,b){return this._selectedProvider.on(a,b)},c.prototype.off=function(a,b){return this._selectedProvider.off(a,b)},c.prototype.isUpdateSubjectSupported=function(){return this._selectedProvider.isUpdateSubjectSupported()},c.prototype.isMarkAllContentAsReadSupported=function(){return this._selectedProvider.isMarkAllContentAsReadSupported()},c.prototype.isOpened=function(){return this._selectedProvider.isOpened()},a.Providers.AMM.AMMProvider=c}(AvayaClientServices,jQuery),function(a,b,c){"use strict";function d(b,c,d,e,f,g,h){a.Providers.Interfaces.AbstractProvider.call(this),this._collaborationProvider=b,this._networkProvider=c,this._screenCapturer=d,this._sharingCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._extensionRequestBuilder=e,this._contentSharingTagBuilder=f,this._bandwidthManager=g,this._screenSharingTagEncoder=h,this._startDeferred=void 0,this._networkProvider.addOnCapabilityChange(this._capabilityUpdate()),this._networkProvider.start()}d.prototype=Object.create(a.Providers.Interfaces.AbstractProvider.prototype),d.prototype.start=function(){return this._screenCapturer.on(a.Providers.ContentSharing.ScreenCapturerEvents.BLOCKS_CHANGED,function(a){this.sendFrame(a,!1)}.bind(this)),this._screenCapturer.on(a.Providers.ContentSharing.ScreenCapturerEvents.KEY_FRAME,function(a){this.sendFrame([a],!0)}.bind(this)),this._screenCapturer.on(a.Providers.ContentSharing.ScreenCapturerEvents.WINDOW_CLOSED,function(){this.stop()}.bind(this)),this._sendStartScreenSharing()},d.prototype.sendFrame=function(b,c){var d=new a.Providers.ContentSharing.FrameBlocks(c),e=this._contentSharingTagBuilder.createStartTag(c,c?this._screenCapturer.getWidth():0,c?this._screenCapturer.getHeight():0);e=this._screenSharingTagEncoder.encodeTag(e),d.addBlock(e),b.forEach(function(a){var b=this._contentSharingTagBuilder.createBlockTag(a);b=this._screenSharingTagEncoder.encodeTag(b),d.addBlock(b)}.bind(this)),d.addBlock(this._screenSharingTagEncoder.encodeTag(this._contentSharingTagBuilder.createEndTag())),this._bandwidthManager.addToQueue(d)},d.prototype.startFullScreen=function(){throw console.debug("MUST override AbstractScreenSharingProvider.startFullScreen()"),new Error("Cannot start fullscreen sharing. Unknown provider.")},d.prototype.startApplicationWindow=function(){throw console.debug("MUST override AbstractScreenSharingProvider.startApplicationWindow()"),new Error("Cannot start window sharing. Unknown provider.")},d.prototype.stop=function(){return this._screenCapturer.stop().then(function(){return this._sendStopScreenSharing()}.bind(this))},d.prototype.pause=function(){return console.log("Content Screen Sharing Provider: Pause sharing..."),this._screenCapturer.pause().then(function(a){return a?a:this._sendPauseScreenSharing()}.bind(this))},d.prototype.resume=function(){return console.log("Content Screen Sharing Provider: Resume sharing..."),this._screenCapturer.resume().then(function(a){return a?this._sendStartScreenSharing():a}.bind(this))},d.prototype.getShareApplicationWindowCapability=function(){return this._sharingCapability},d.prototype.getShareFullScreenCapability=function(){return this._sharingCapability},d.prototype.isOpened=function(){return this._collaborationProvider.isOpened()},d.prototype._capabilityUpdate=function(){return function(a,b){console.debug("Extension: "+a+" is installed? "+b),b?this._sharingCapability._updateIfChanged(b,a+" extension was installed or enabled"):this._sharingCapability._updateIfChanged(b,a+" extension was uninstalled or disabled")}.bind(this)},d.prototype._sendStartScreenSharing=function(){return this._collaborationProvider.sendStartScreenSharing()},d.prototype._sendStopScreenSharing=function(){return this._collaborationProvider.sendLiveEvent(a.Providers.WCS.WCSEventTypes.END_SCREEN_SHARING)},d.prototype._sendPauseScreenSharing=function(){return this._collaborationProvider.sendLiveEvent(a.Providers.WCS.WCSEventTypes.PAUSE_SCREEN_SHARING)},d.prototype._getUserMedia=function(b){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia(b,function(b){a.Providers.ContentSharing.AbstractScreenSharingProvider.prototype.start.call(this).then(function(){this._screenCapturer.start(b,new a.Providers.ContentSharing.ScreenCapturerConfig),this._bandwidthManager.start(this._screenCapturer._config),"pending"===this._startDeferred.state()&&this._startDeferred.resolve()}.bind(this))}.bind(this),function(a){console.error(a),"pending"===this._startDeferred.state()&&this._startDeferred.reject(a)}.bind(this))},a.Providers.ContentSharing.AbstractScreenSharingProvider=d}(AvayaClientServices,window,jQuery),function(a,b,c){"use strict";function d(b,c,d,e,f,g,h){a.Providers.ContentSharing.AbstractScreenSharingProvider.call(this,b,c,d,e,f,g,h),this._mediaSourceId=void 0}d.prototype=Object.create(a.Providers.ContentSharing.AbstractScreenSharingProvider.prototype),d.prototype.startFullScreen=function(){return console.log("Chrome Content Screen Sharing Provider: Start full screen sharing..."),this._startDeferred=c.Deferred(),this._startEventListener(),this._networkProvider.send(this._extensionRequestBuilder.createStartSharingRequest("screen")),this._startDeferred.promise()},d.prototype.startApplicationWindow=function(){return console.log("Chrome Content Screen Sharing Provider: Start appl window sharing..."),
this._startDeferred=c.Deferred(),this._startEventListener(),this._networkProvider.send(this._extensionRequestBuilder.createStartSharingRequest("window")),this._startDeferred.promise()},d.prototype.stop=function(){return console.log("Chrome Content Screen Sharing Provider: Stop sharing..."),a.Providers.ContentSharing.AbstractScreenSharingProvider.prototype.stop.call(this).then(function(){this._networkProvider.send(this._extensionRequestBuilder.createStopSharingRequest(this._mediaSourceId)),this._mediaSourceId=void 0,this._removeEventListener()}.bind(this))},d.prototype._startEventListener=function(){this._networkProvider.addOnMediaAvailableCallback(this._handleMediaAvailableEvent.bind(this)),this._networkProvider.addOnMediaCancelledCallback(this._handleMediaCanceledEvent.bind(this))},d.prototype._removeEventListener=function(){this._networkProvider._onMediaAvailableCallbacks.empty(),this._networkProvider._onMediaCancelledCallbacks.empty()},d.prototype._handleMediaAvailableEvent=function(a){console.debug("User enabled screen sharing"),this._mediaSourceId=a.data.mediaSourceId;var c={audio:!1,video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:this._mediaSourceId,maxWidth:b.screen.width,maxHeight:b.screen.height,maxFrameRate:3}}};this._getUserMedia(c)},d.prototype._handleMediaCanceledEvent=function(a){console.error(a),"pending"===this._startDeferred.state()&&this._startDeferred.reject(a)},a.Providers.ContentSharing.ChromeScreenSharingProvider=d}(AvayaClientServices,window,jQuery),function(a,b,c){"use strict";function d(b,c,d,e,f,g,h){a.Providers.ContentSharing.AbstractScreenSharingProvider.call(this,b,c,d,e,f,g,h),this._startDeferred=void 0}d.prototype=Object.create(a.Providers.ContentSharing.AbstractScreenSharingProvider.prototype),d.prototype.startFullScreen=function(){return console.log("Firefox Content Screen Sharing Provider: Start full screen sharing..."),this._startDeferred=c.Deferred(),this._startScreenSharing("screen"),this._startDeferred.promise()},d.prototype.startApplicationWindow=function(){return console.log("Firefox Content Screen Sharing Provider: Start appl window sharing..."),this._startDeferred=c.Deferred(),this._startScreenSharing("window"),this._startDeferred.promise()},d.prototype.stop=function(){return console.log("Firefox Content Screen Sharing Provider: Stop sharing..."),a.Providers.ContentSharing.AbstractScreenSharingProvider.prototype.stop.call(this)},d.prototype._startScreenSharing=function(a){console.debug("User enabled screen sharing: "+a);var c={audio:!1,video:{mediaSource:a,mandatory:{maxWidth:b.screen.width,maxHeight:b.screen.height,maxFrameRate:3}}};this._getUserMedia(c)},a.Providers.ContentSharing.FirefoxScreenSharingProvider=d}(AvayaClientServices,window,jQuery),function(a){"use strict";function b(b){a.Providers.UCCP.UCCPMessage.call(this,"activeTalkerChangedEvent"),this.participantId=b}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPActiveTalkerChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.ADMISSION_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPAdmissionResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.AVAILABLE_LAYOUTS_CHANGED_EVENT),this.textOverlay=b,this.noSelfSee=c,this.geometries=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPAvailableLayoutsChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_GEOMETRY_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPChangeLayoutGeometryResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_SELF_SEE_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPChangeLayoutSelfSeeResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.CHANGE_LAYOUT_OVERLAY_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPChangeLayoutTextOverlayResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,"chatEvent"),this.participantId=b,this.type=c,this.text=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPChatEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.CHAT_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPChatResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.CURRENT_LAYOUT_CHANGED_EVENT),this.textOverlay=b,this.noSelfSee=c,this.geometry=d}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPCurrentLayoutChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.CURRENT_LAYOUT_RESPONSE),this.transId=b,this.responseCode=c,this.textOverlay=d,this.noSelfSee=e,this.geometry=f}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPCurrentLayoutResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,"disconnectParticipantResponse"),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPDisconnectParticipantResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.EXTEND_MEETING_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPExtendMeetingResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h){a.Providers.UCCP.UCCPMessage.call(this,"handshakeResponse"),this.transId=b,this.responseCode=c,this.version=d,this.participantId=e,this.admissionPasscodeNeeded=f,this.admissionPermissionNeeded=g,this.commands=h}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPHandshakeResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.LECTURE_MODE_START_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPLectureModeStartResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,a.Providers.UCCP.UCCPMessageTypes.LECTURE_MODE_STOP_RESPONSE),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPLectureModeStopResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,"lockMeetingResponse"),this.transId=b,this.responseCode=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPLockMeetingResponse=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h,i,j,k,l,m){a.Providers.UCCP.UCCPMessage.call(this,"meetingInfoChangedEvent"),this.media=b,this.locked=c,this.mediaStatus=d,this.lecturerId=e,this.lecturerName=f,this.presenterId=g,this.presenterName=h,this.recording=i,this.streaming=j,this.encrypted=k,this.slidesAvailable=l,this.terminationTime=m}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPMeetingInfoChangedEvent=b}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Providers.UCCP.UCCPMessage.call(this,"meetingTerminationInProgressEvent"),this.reason=b,this.userName=c}b.prototype=Object.create(a.Providers.UCCP.UCCPMessage.prototype),a.Providers.UCCP.UCCPMeetingTerminationInProgressEvent=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};b.note&&(c.type=a.Base.Utils.queryJSONObject(b,"note[0]._attr.type._value"),c.text=a.Base.Utils.queryJSONObject(b,"note[0]._text")),c.meetingOwner="Y"===a.Base.Utils.queryJSONObject(b,"_attr.meeting_owner._value"),b._attr.target_id?(c.targetId=a.Base.Utils.queryJSONObject(b,"_attr.target_id._value"),c.personal=!0):c.personal=!1;var d=new a.Providers.WCS.AddNoteEventData(c.type,c.text,c.meetingOwner,c.personal,c.targetId);return new a.Providers.WCS.AddNoteEvent(this.stripCommonData(b),d)},a.Providers.WCS.AddNoteParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.AddWhiteboardEvent(this.stripCommonData(b))},a.Providers.WCS.AddWhiteboardParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};c.targetId=a.Base.Utils.queryJSONObject(b,"_attr.target_id._value");var d=new a.Providers.WCS.AllowPresentingEventData(c.targetId);return new a.Providers.WCS.AllowPresentingEvent(this.stripCommonData(b),d)},a.Providers.WCS.AllowPresentingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.selection[0]._attr&&$.each(b.selection[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.ClearDrawingEventData(c.groupId,c.layerType);return new a.Providers.WCS.ClearDrawingEvent(this.stripCommonData(b),e)},a.Providers.WCS.ClearDrawingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};b.note&&(c.event_id=a.Base.Utils.queryJSONObject(b,"note[0]._attr.event_id._value"));var d=new a.Providers.WCS.DeleteNoteEventData(c.event_id);return new a.Providers.WCS.DeleteNoteEvent(this.stripCommonData(b),d)},a.Providers.WCS.DeleteNoteParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.selection[0]._attr&&$.each(b.selection[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.DeleteSelectionEventData(c.groupId,c.layerType,c.id,c.selectionX,c.selectionY);return new a.Providers.WCS.DeleteSelectionEvent(this.stripCommonData(b),e)},a.Providers.WCS.DeleteSelectionParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c=a.Base.Utils.queryJSONObject(b,"whiteboard[0]._attr.index._value"),d=new a.Providers.WCS.DeleteWhiteboardEventData(c);return new a.Providers.WCS.DeleteWhiteboardEvent(this.stripCommonData(b),d)},a.Providers.WCS.DeleteWhiteboardParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.DenyControlEvent(this.stripCommonData(b))},a.Providers.WCS.DenyControlParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};c.targetId=a.Base.Utils.queryJSONObject(b,"_attr.target_id._value"),c.targetName=a.Base.Utils.queryJSONObject(b,"_attr.target_name._value");var d=new a.Providers.WCS.DenyPresentingEventData(c.targetId,c.targetName);return new a.Providers.WCS.DenyPresentingEvent(this.stripCommonData(b),d)},a.Providers.WCS.DenyPresentingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.circle[0]._attr&&$.each(b.circle[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),(c.fillColor||0===c.fillColor)&&(c.fillColor=this.colorIntToHex(c.fillColor),c.filled=!0),(c.color||0===c.color)&&(c.color=this.colorIntToHex(c.color),c.contour=!0),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.DrawCircleEventData(c.alpha,c.fillColor,c.color,c.groupId,c.layerType,c.width,c.x0,c.x1,c.y0,c.y1,c.filled,c.contour);return new a.Providers.WCS.DrawCircleEvent(this.stripCommonData(b),e)},a.Providers.WCS.DrawCircleParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={},d=[],e=[];if(b.m)e.push({x:a.Base.Utils.queryJSONObject(b,"m[0]._attr.x._value"),y:a.Base.Utils.queryJSONObject(b,"m[0]._attr.y._value")});else{if(b.lines&&b.lines[0]._attr&&$.each(b.lines[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),(c.fillColor||0===c.fillColor)&&(c.fillColor=this.colorIntToHex(c.fillColor),c.filled=!0),(c.color||0===c.color)&&(c.color=this.colorIntToHex(c.color),c.contour=!0),c.group){var f=this.convertGroup(c.group);c.layerType=f.layerType,c.groupId=f.groupId,delete c.group}b.lines&&b.lines[0].l&&$.each(b.lines[0].l,function(a,b){d.push({x:b._attr.x._value,y:b._attr.y._value})}.bind(this)),b.lines&&b.lines[0].m&&$.each(b.lines[0].m,function(a,b){e.push({x:b._attr.x._value,y:b._attr.y._value})}.bind(this))}var g=new a.Providers.WCS.DrawShapeEventData(c.alpha,c.fillColor,c.color,c.groupId,c.layerType,c.width,d,e,c.filled,c.contour);return new a.Providers.WCS.DrawShapeEvent(this.stripCommonData(b),g)},a.Providers.WCS.DrawShapeParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.drawText[0]._attr&&$.each(b.drawText[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),c.fillColor&&(c.fillColor=this.colorIntToHex(c.fillColor)),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.DrawTextEventData(c.fillColor,c.fontSize,c.groupId,c.layerType,c.text,c.x,c.y);return new a.Providers.WCS.DrawTextEvent(this.stripCommonData(b),e)},a.Providers.WCS.DrawTextParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};c.targetId=a.Base.Utils.queryJSONObject(b,"_attr.target_id._value"),c.targetName=a.Base.Utils.queryJSONObject(b,"_attr.target_name._value"),c.targetParticipantId=a.Base.Utils.queryJSONObject(b,"_attr.targetParticipantId._value");var d=new a.Providers.WCS.EjectParticipantEventData(c.targetId,c.targetName,c.targetParticipantId);return new a.Providers.WCS.EjectParticipantEvent(this.stripCommonData(b),d)},a.Providers.WCS.EjectParticipantParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.EndControlEvent(this.stripCommonData(b))},a.Providers.WCS.EndControlParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c={};if(b.lines[0]._attr&&$.each(b.lines[0]._attr,function(a,b){c[this.stringToCamel(a)]=b._value}.bind(this)),c.group){var d=this.convertGroup(c.group);c.layerType=d.layerType,c.groupId=d.groupId,delete c.group}var e=new a.Providers.WCS.EndDrawShapeEventData(c.groupId,c.layerType);return new a.Providers.WCS.EndDrawShapeEvent(this.stripCommonData(b),e)},a.Providers.WCS.EndDrawShapeParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.EndMeetingEvent(this.stripCommonData(b))},a.Providers.WCS.EndMeetingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.EndScreenSharingEvent(this.stripCommonData(b))},a.Providers.WCS.EndScreenSharingParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){return new a.Providers.WCS.EndWhiteboardEvent(this.stripCommonData(b))},a.Providers.WCS.EndWhiteboardParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.AbstractParser.prototype),b.prototype.parse=function(b){var c={code:a.Base.Utils.queryJSONObject(b,"code[0]._text"),message:a.Base.Utils.queryJSONObject(b,"message[0]._text"),request_id:a.Base.Utils.queryJSONObject(b,"request_id[0]._text"),ws_connection_id:a.Base.Utils.queryJSONObject(b,"ws_connection_id[0]._text")},d=new a.Providers.WCS.ErrorEventData(c.code,c.message,c.request_id,c.ws_connection_id);return new a.Providers.WCS.ErrorEvent(d)},a.Providers.WCS.ErrorParser=b}(AvayaClientServices),function(a){"use strict";function b(){}b.prototype=Object.create(a.Providers.WCS.LiveEventParser.prototype),b.prototype.parse=function(b){var c=a.Base.Utils.queryJSONObject(b,"os_type[0]._text"),d=new a.Providers.WCS.GrantControlEventData(c);return new a.Providers.WCS.GrantControlEvent(this.stripCommonData(b),d)},a.Providers.WCS.GrantControlParser=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.WCS.WCSSharingTag.call(this,a.Providers.WCS.WCSScreenSharingTagTypes.BLOCK_TAG),this.width=0,this.height=0,this.x=0,this.y=0,this.imageType=0,this.length=0,this.data=[]}b.prototype=Object.create(a.Providers.WCS.WCSSharingTag.prototype),a.Providers.WCS.ScreenSharingBlockTag=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.WCS.WCSSharingTag.call(this,a.Providers.WCS.WCSScreenSharingTagTypes.CURSOR_TAG),this.x=0,this.y=0,this.creationTime=0}b.prototype=Object.create(a.Providers.WCS.WCSSharingTag.prototype),a.Providers.WCS.ScreenSharingCursorTag=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.WCS.WCSSharingTag.call(this,a.Providers.WCS.WCSScreenSharingTagTypes.END_TAG)}b.prototype=Object.create(a.Providers.WCS.WCSSharingTag.prototype),a.Providers.WCS.ScreenSharingEndTag=b}(AvayaClientServices),function(a){"use strict";function b(){a.Providers.WCS.WCSSharingTag.call(this,a.Providers.WCS.WCSScreenSharingTagTypes.START_TAG),this.isKeyFrame=!1,this.width=0,this.height=0,this.creationTime=0}b.prototype=Object.create(a.Providers.WCS.WCSSharingTag.prototype),a.Providers.WCS.ScreenSharingStartTag=b}(AvayaClientServices),function(a,b){"use strict";function c(){a.Base.TransactionalWebSocketProvider.apply(this),this._transactionIDLocation="request_id"}c.prototype=Object.create(a.Base.TransactionalWebSocketProvider.prototype),c.prototype.getTransactionIDFromRequest=function(a,b){return"undefined"==typeof a||a instanceof ArrayBuffer||a instanceof Blob?!1:a.match(b+"=(\\w*)&?")[1]},c.prototype.getTransactionIDFromResponse=function(a,b){if("undefined"==typeof a)return!1;var c=this._getTransactionID(a,"response[0].live_session[0].request_id[0]._text"),d=this._getTransactionID(a,"response[0].live_event[0].request_id[0]._text"),e=this._getTransactionID(a,"response[0].live_attendees[0].request_id[0]._text");return d||c||e},c.prototype.parseRequest=function(a){return a},c.prototype.parseResponse=function(a){return b.parseString(a)},a.Providers.WCS.WCSTransactionalWebSocketProvider=c}(AvayaClientServices,xmlToJSON),function(a,b){"use strict";var c={addOnLocalVideoAddedCallback:function(a){this._localVideoAddedCallbacks.add(a)},removeOnLocalVideoAddedCallback:function(a){this._localVideoAddedCallbacks.remove(a)},addOnLocalVideoRemovedCallback:function(a){this._localVideoRemovedCallbacks.add(a)},removeOnLocalVideoRemovedCallback:function(a){this._localVideoRemovedCallbacks.remove(a)},addOnRemoteVideoAddedCallback:function(a){this._remoteVideoAddedCallbacks.add(a)},removeOnRemoteVideoAddedCallback:function(a){this._remoteVideoAddedCallbacks.remove(a)},addOnRemoteVideoRemovedCallback:function(a){this._remoteVideoRemovedCallbacks.add(a)},removeOnRemoteVideoRemovedCallback:function(a){this._remoteVideoRemovedCallbacks.remove(a)},addOnCallStartedCallback:function(a){this._onCallStartedCallbacks.add(a)},removeOnCallStartedCallback:function(a){this._onCallStartedCallbacks.remove(a)},addOnCallRemoteAlertingCallback:function(a){this._onCallRemoteAlertingCallbacks.add(a)},removeOnCallRemoteAlertingCallback:function(a){this._onCallRemoteAlertingCallbacks.remove(a)},addOnCallRedirectedCallback:function(a){this._onCallRedirectedCallbacks.add(a)},removeOnCallRedirectedCallback:function(a){this._onCallRedirectedCallbacks.remove(a)},addOnCallQueuedCallback:function(a){this._onCallQueuedCallbacks.add(a)},removeOnCallQueuedCallback:function(a){this._onCallQueuedCallbacks.remove(a)},addOnCallIgnoredCallback:function(a){this._onCallIgnoredCallbacks.add(a)},removeOnCallIgnoredCallback:function(a){this._onCallIgnoredCallbacks.remove(a)},addOnCallEstablishedCallback:function(a){this._onCallEstablishedCallbacks.add(a)},removeOnCallEstablishedCallback:function(a){this._onCallEstablishedCallbacks.remove(a)},addOnCallRemoteAddressChangedCallback:function(a){this._onCallRemoteAddressChangedCallbacks.add(a)},removeOnCallRemoteAddressChangedCallback:function(a){this._onCallRemoteAddressChangedCallbacks.remove(a)},addOnCallHeldCallback:function(a){this._onCallHeldCallbacks.add(a)},removeOnCallHeldCallback:function(a){this._onCallHeldCallbacks.remove(a)},addOnCallUnheldCallback:function(a){this._onCallUnheldCallbacks.add(a)},removeOnCallUnheldCallback:function(a){this._onCallUnheldCallbacks.remove(a)},addOnCallHeldRemotelyCallback:function(a){this._onCallHeldRemotelyCallbacks.add(a)},removeOnCallHeldRemotelyCallback:function(a){this._onCallHeldRemotelyCallbacks.remove(a)},addOnCallUnheldRemotelyCallback:function(a){this._onCallUnheldRemotelyCallbacks.add(a)},removeOnCallUnheldRemotelyCallback:function(a){this._onCallUnheldRemotelyCallbacks.remove(a)},addOnCallJoinedCallback:function(a){this._onCallJoinedCallbacks.add(a)},removeOnCallJoinedCallback:function(a){this._onCallJoinedCallbacks.remove(a)},addOnCallEndedCallback:function(a){this._onCallEndedCallbacks.add(a)},removeOnCallEndedCallback:function(a){this._onCallEndedCallbacks.remove(a)},addOnCallAudioMuteStatusChangedCallback:function(a){this._onCallAudioMuteStatusChangedCallbacks.add(a)},removeOnCallAudioMuteStatusChangedCallback:function(a){this._onCallAudioMuteStatusChangedCallbacks.remove(a)},addOnCallIncomingVideoAddRequestReceivedCallback:function(a){this._onCallIncomingVideoAddRequestReceivedCallbacks.add(a)},removeOnCallIncomingVideoAddRequestReceivedCallback:function(a){this._onCallIncomingVideoAddRequestReceivedCallbacks.remove(a)},addOnCallIncomingVideoAddRequestAcceptedCallback:function(a){this._onCallIncomingVideoAddRequestAcceptedCallbacks.add(a)},removeOnCallIncomingVideoAddRequestAcceptedCallback:function(a){this._onCallIncomingVideoAddRequestAcceptedCallbacks.remove(a)},addOnCallIncomingVideoAddRequestDeniedCallback:function(a){this._onCallIncomingVideoAddRequestDeniedCallbacks.add(a)},removeOnCallIncomingVideoAddRequestDeniedCallback:function(a){this._onCallIncomingVideoAddRequestDeniedCallbacks.remove(a)},addOnCallIncomingVideoAddRequestTimedoutCallback:function(a){this._onCallIncomingVideoAddRequestTimedoutCallbacks.add(a)},removeOnCallIncomingVideoAddRequestTimedoutCallback:function(a){this._onCallIncomingVideoAddRequestTimedoutCallbacks.remove(a)},addOnCallDeniedCallback:function(a){this._onCallDeniedCallbacks.add(a)},removeOnCallDeniedCallback:function(a){this._onCallDeniedCallbacks.remove(a)},addOnCallConferenceStatusChangedCallback:function(a){this._onCallConferenceStatusChangedCallbacks.add(a)},removeOnCallConferenceStatusChangedCallback:function(a){this._onCallConferenceStatusChangedCallbacks.remove(a)},addOnParticipantDroppedCallback:function(a){this._participantDroppedCallbacks.add(a)},removeOnParticipantDroppedCallback:function(a){this._participantDroppedCallbacks.remove(a)},addOnCallFailedCallback:function(a){this._callFailedCallbacks.add(a)},removeOnCallFailedCallback:function(a){this._callFailedCallbacks.remove(a)},addOnCallServiceAvailableCallback:function(a){this._callServiceAvailableCallbacks.add(a)},removeOnCallServiceAvailableCallback:function(a){this._callServiceAvailableCallbacks.remove(a)},addOnCallServiceUnavailableCallback:function(a){this._callServiceUnavailableCallbacks.add(a)},removeOnCallServiceUnavailableCallback:function(a){this._callServiceUnavailableCallbacks.remove(a)}};b.extend(a.Services.Call.Call.prototype,c)}(window.AvayaClientServices=window.AvayaClientServices||{},jQuery=jQuery||{}),function(a){"use strict";var b={getHoldCapability:function(){},getUnholdCapability:function(){},getJoinCapability:function(){},getMuteCapability:function(){return this._muteCapability},getUnmuteCapability:function(){},getSendDTMFCapability:function(){},getTransferCapability:function(){},getTransferToCapability:function(a){},getUpdateVideoChannelsCapability:function(){return this._videoChannelsCapability}};$.extend(a.Services.Call.Call.prototype,b)}(window.AvayaClientServices=window.AvayaClientServices||{}),function(a,b){"use strict";var c={addOnCallCreatedCallback:function(a){this._callCreatedCallbacks.add(a)},removeOnCallCreatedCallback:function(a){this._callCreatedCallbacks.remove(a)},addOnCallRemovedCallback:function(a){this._callRemovedCallbacks.add(a)},removeOnCallRemovedCallback:function(a){this._callRemovedCallbacks.remove(a)},addOnIncomingCallCallback:function(a){this._incomingCallCallbacks.add(a)},removeOnIncomingCallCallback:function(a){this._incomingCallCallbacks.remove(a)},addOnUndeliveredCallCallback:function(a){this._undeliveredCallCallbacks.add(a)},removeOnUndeliveredCallCallback:function(a){this._undeliveredCallCallbacks.remove(a)}};b.extend(a.Services.Call.Calls.prototype,c)}(window.AvayaClientServices=window.AvayaClientServices||{},jQuery=jQuery||{}),function(a){"use strict";var b={addOnCollaborationStartedCallback:function(a){this._onCollaborationStartedCallbacks.add(a)},removeOnCollaborationStartedCallback:function(a){this._onCollaborationStartedCallbacks.remove(a)},addOnCollaborationEndedCallback:function(a){this._onCollaborationEndedCallbacks.add(a)},removeOnCollaborationEndedCallback:function(a){this._onCollaborationEndedCallbacks.remove(a)},addOnCollaborationServiceAvailableCallback:function(a){this._onCollaborationServiceAvailableCallbacks.add(a)},removeOnCollaborationServiceAvailableCallback:function(a){this._onCollaborationServiceAvailableCallbacks.remove(a)},addOnCollaborationServiceUnavailableCallback:function(a){this._onCollaborationServiceUnavailableCallbacks.add(a)},removeOnCollaborationServiceUnavailableCallback:function(a){this._onCollaborationServiceUnavailableCallbacks.remove(a)},addOnCollaborationNearEndByEjectCallback:function(a){this._onCollaborationNearEndByEjectCallbacks.add(a)},removeOnCollaborationNearEndByEjectCallback:function(a){this._onCollaborationNearEndByEjectCallbacks.remove(a)},addOnCollaborationPresenterPrivilegeChangedCallback:function(a){this._onCollaborationPresenterPrivilegeChangedCallbacks.add(a)},removeOnCollaborationPresenterPrivilegeChangedCallback:function(a){this._onCollaborationPresenterPrivilegeChangedCallbacks.remove(a)},addOnCollaborationModeratorPrivilegeChangedCallback:function(a){this._onCollaborationModeratorPrivilegeChangedCallbacks.add(a)},removeOnCollaborationModeratorPrivilegeChangedCallback:function(a){this._onCollaborationModeratorPrivilegeChangedCallbacks.remove(a)},addOnCollaborationInitializedCallback:function(a){this._onCollaborationInitializedCallbacks.add(a)},removeOnCollaborationInitializedCallback:function(a){this._onCollaborationInitializedCallbacks.remove(a)},addOnCollaborationGetParticipantsResultCallback:function(a){this._onCollaborationGetParticipantsResultCallbacks.add(a)},removeOnCollaborationGetParticipantsResultCallback:function(a){this._onCollaborationGetParticipantsResultCallbacks.remove(a)}};$.extend(a.Services.Collaboration.Collaboration.prototype,b)}(AvayaClientServices),function(a){"use strict";var b={getChatCapability:function(){},getMeetingMinutesCapability:function(){},getContentSharingCapability:function(){return this._contentSharingCapability},_recalculateContentSharingCapability:function(){var b,c,d=this._contentSharing.getShareApplicationWindowCapability();d.isAllowed?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._contentSharingCapability._updateIfChanged(b,c)},getNetworkLibraryCapability:function(){},getLibrarySharingCapability:function(){},getWhiteboardCapability:function(){},getRetrieveParticipantListCapability:function(){}};$.extend(a.Services.Collaboration.Collaboration.prototype,b)}(AvayaClientServices),function(a){"use strict";function b(b){a.Services.Collaboration.WhiteboardSurface.call(this,b)}b.prototype=Object.create(a.Services.Collaboration.WhiteboardSurface.prototype),b.prototype.requestSlideData=function(){},a.Services.Collaboration.Slide=b}(AvayaClientServices),function(a,b){"use strict";var c={addOnContentSharingStartedCallback:function(a){this._onContentSharingStartedCallbacks.add(a)},removeOnContentSharingStartedCallback:function(a){this._onContentSharingStartedCallbacks.remove(a)},addOnContentSharingEndedCallback:function(a){this._onContentSharingEndedCallbacks.add(a)},removeOnContentSharingEndedCallback:function(a){this._onContentSharingEndedCallbacks.remove(a)},addOnContentSharingPausedCallback:function(a){this._onContentSharingPausedCallbacks.add(a)},removeOnContentSharingPausedCallback:function(a){this._onContentSharingPausedCallbacks.remove(a)},addOnContentSharingResumedCallback:function(a){this._onContentSharingResumedCallbacks.add(a)},removeOnContentSharingResumedCallback:function(a){this._onContentSharingResumedCallbacks.remove(a)},addOnCursorReceivedCallback:function(a){this._onCursorReceivedCallbacks.add(a)},removeOnCursorReceivedCallback:function(a){this._onCursorReceivedCallbacks.remove(a)},addOnFrameChangedCallback:function(a){this._onFrameChangedCallbacks.add(a)},removeOnFrameChangedCallback:function(a){this._onFrameChangedCallbacks.remove(a)},addOnFrameReceivedCallback:function(a){this._onFrameReceivedCallbacks.add(a)},removeOnFrameReceivedCallback:function(a){this._onFrameReceivedCallbacks.remove(a)},addOnContentSharingRemoteControlOutgoingRequestDenyCallback:function(a){this._onContentSharingRemoteControlOutgoingRequestDenyCallbacks.add(a)},removeOnContentSharingRemoteControlOutgoingRequestDenyCallback:function(a){this._onContentSharingRemoteControlOutgoingRequestDenyCallbacks.remove(a)},addOnContentSharingRemoteControlOutgoingRequestGrantCallback:function(a){this._onContentSharingRemoteControlOutgoingRequestGrantCallbacks.add(a);
},removeOnContentSharingRemoteControlOutgoingRequestGrantCallback:function(a){this._onContentSharingRemoteControlOutgoingRequestGrantCallbacks.remove(a)},addOnContentSharingRemoteControlIncomingOfferCallback:function(a){this._onContentSharingRemoteControlIncomingOfferCallbacks.add(a)},removeOnContentSharingRemoteControlIncomingOfferCallback:function(a){this._onContentSharingRemoteControlIncomingOfferCallbacks.remove(a)},addOnContentSharingRemoteControlIncomingDeclineCallback:function(a){this._onContentSharingRemoteControlIncomingDeclineCallbacks.add(a)},removeOnContentSharingRemoteControlIncomingDeclineCallback:function(a){this._onContentSharingRemoteControlIncomingDeclineCallbacks.remove(a)},addOnFrameReportReceivedCallbacks:function(a){this._onFrameReportReceivedCallbacks.add(a)},removeOnFrameReportReceivedCallbacks:function(a){this._onFrameReportReceivedCallbacks.remove(a)}};b.extend(a.Services.Collaboration.ContentSharing.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={getShareApplicationWindowCapability:function(){return this._shareApplicationWindowCapability},_recalculateShareApplicationWindowCapability:function(){var b,c,d=this._contentSharingService.getShareApplicationWindowCapability(),e=this._contentSharingService.isOpened(),f=this._contentSharingService.isFeatureAvailable(a.Services.Collaboration.FeaturesAvailable.SCREEN_SHARING);d.isAllowed&&e&&f?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._shareApplicationWindowCapability._updateIfChanged(b,c)},getShareFullScreenCapability:function(){return this._shareFullScreenCapability},_recalculateShareFullScreenCapability:function(){var b,c,d=this._contentSharingService.getShareFullScreenCapability(),e=this._contentSharingService.isOpened(),f=this._contentSharingService.isFeatureAvailable(a.Services.Collaboration.FeaturesAvailable.SCREEN_SHARING);d.isAllowed&&e&&f?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._shareFullScreenCapability._updateIfChanged(b,c)},getSupportRemoteControlCapability:function(){},getRequestRemoteControlCapability:function(){}};b.extend(a.Services.Collaboration.ContentSharing.prototype,c)}(AvayaClientServices,jQuery),function(a){"use strict";var b={};$.extend(a.Services.Collaboration.LibraryManager,b)}(AvayaClientServices),function(a){"use strict";var b={addOnLibrarySlideSharedCallback:function(a){this._onLibrarySlideSharedCallback.add(a)},removeOnLibrarySlideSharedCallback:function(a){this._onLibrarySlideSharedCallback.remove(a)},addOnLibrarySharingEndedCallback:function(a){this._onLibrarySharingEndedCallback.add(a)},removeOnLibrarySharingEndedCallback:function(a){this._onLibrarySharingEndedCallback.remove(a)}};$.extend(a.Services.Collaboration.LibrarySharing,b)}(AvayaClientServices),function(a){"use strict";var b={addOnWhiteboardStartedCallback:function(a){this._onWhiteboardStartedCallbacks.add(a)},removeOnWhiteboardStartedCallback:function(a){this._onWhiteboardStartedCallbacks.remove(a)},addOnWhiteboardEndedCallback:function(a){this._onWhiteboardEndedCallbacks.add(a)},removeOnWhiteboardEndedCallback:function(a){this._onWhiteboardEndedCallbacks.remove(a)},addOnWhiteboardSurfaceAddedCallback:function(a){this._onWhiteboardSurfaceAddedCallbacks.add(a)},removeOnWhiteboardSurfaceAddedCallback:function(a){this._onWhiteboardSurfaceAddedCallbacks.remove(a)},addOnWhiteboardSurfaceRemovedCallback:function(a){this._onWhiteboardSurfaceRemovedCallbacks.add(a)},removeOnWhiteboardSurfaceRemovedCallback:function(a){this._onWhiteboardSurfaceRemovedCallbacks.remove(a)},addOnWhiteboardSurfaceSetActiveCallback:function(a){this._onWhiteboardSurfaceSetActiveCallbacks.add(a)},removeOnWhiteboardSurfaceSetActiveCallback:function(a){this._onWhiteboardSurfaceSetActiveCallbacks.remove(a)}};$.extend(a.Services.Collaboration.Whiteboard.prototype,b)}(AvayaClientServices),function(a,b){"use strict";var c={getRemoveWhiteboardCapability:function(){return this._removeWhiteboardCapability},_recalculateRemoveWhiteboardCapability:function(){var b,c;this._surfaces.length>1?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeWhiteboardCapability._updateIfChanged(b,c)}};b.extend(a.Services.Collaboration.Whiteboard.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnShapeAddedCallback:function(a){this._onShapeAddedCallbacks.add(a)},removeOnShapeAddedCallback:function(a){this._onShapeAddedCallbacks.remove(a)},addOnShapeUpdatedCallback:function(a){this._onShapeUpdatedCallbacks.add(a)},removeOnShapeUpdatedCallback:function(a){this._onShapeUpdatedCallbacks.remove(a)},addOnShapeDeletedCallback:function(a){this._onShapeDeletedCallbacks.add(a)},removeOnShapeDeletedCallback:function(a){this._onShapeDeletedCallbacks.remove(a)},addOnSurfaceClearedCallback:function(a){this._onSurfaceClearedCallbacks.add(a)},removeOnSurfaceClearedCallback:function(a){this._onSurfaceClearedCallbacks.remove(a)},addOnSurfaceStartedCallback:function(a){this._onSurfaceStartedCallbacks.add(a)},removeOnSurfaceStartedCallback:function(a){this._onSurfaceStartedCallbacks.remove(a)}};b.extend(a.Services.Collaboration.WhiteboardSurface.prototype,c)}(AvayaClientServices,jQuery),function(a){"use strict";function b(b,c){a.Services.Conference.Participant.call(this,b,c),this._remoteAddress="",this._participantURI="",this._remoteDisplayName="",this._applicationActive=!1,this._handRaised=!1,this._moderator=!1,this._presenter=!1,this._lecturer=!1,this._audioStatus=a.Services.Conference.ParticipantMediaState.MEDIA_STATUS_NO_MEDIA,this._videoStatus=a.Services.Conference.ParticipantMediaState.MEDIA_STATUS_NO_MEDIA,this._connectionStatus=a.Services.Conference.ParticipantConnectionStatus.CONNECTION_STATUS_UNKNOWN,this._disconnectionReason=void 0,this._audioId=void 0,this._videoId=void 0,this._participantId=void 0,this._lastSpokenTime=void 0,this._joinTime=void 0,this._leaveTimeStamp=void 0,this._audioFromParticipant="",this._audioToParticipant="",this._userId="",this._sourceID="",this._feccRecvSupport=!1,this._videoFromParticipant="",this._videoToParticipant="",this._contentFromParticipant="",this._contentToParticipant="",this._role="",this._isSelfParticipant=!1,this._onParticipantCollaborationStatusChangedCallbacks=$.Callbacks(),this._onParticipantConnectionStatusChangedCallbacks=$.Callbacks(),this._onParticipantSetAsModeratorCallbacks=$.Callbacks(),this._onParticipantUnsetAsModeratorCallbacks=$.Callbacks(),this._onParticipantSetAsLecturerCallbacks=$.Callbacks(),this._onParticipantUnsetAsLecturerCallbacks=$.Callbacks(),this._onParticipantSetAsPresenterCallbacks=$.Callbacks(),this._onParticipantUnsetAsPresenterCallbacks=$.Callbacks(),this._onParticipantAudioStatusChangedCallbacks=$.Callbacks(),this._onParticipantVideoStatusChangedCallbacks=$.Callbacks(),this._onParticipantActiveTalkerStatusChangedCallbacks=$.Callbacks(),this._onParticipantHandRaisedCallbacks=$.Callbacks(),this._onParticipantHandLoweredCallbacks=$.Callbacks()}b.prototype=Object.create(a.Services.Conference.Participant.prototype),b.prototype.mute=function(){return this._participantService.mute(this)},b.prototype.unmute=function(){return this._participantService.unmute(this)},b.prototype.blockVideo=function(){return this._participantService.blockVideo(this)},b.prototype.unblockVideo=function(){return this._participantService.unblockVideo(this)},b.prototype.lowerHand=function(a){return this._participantService.lowerHand(this,a)},b.prototype.setAsLecturer=function(){return this._participantService.setAsLecturer(this)},b.prototype.unsetAsLecturer=function(){return this._participantService.unsetAsLecturer()},b.prototype.setAsModerator=function(){},b.prototype.unsetAsModerator=function(){},b.prototype.setAsPresenter=function(){},b.prototype.unsetAsPresenter=function(){},b.prototype.isHandRaised=function(){return this._handRaised},b.prototype.getJoinTime=function(){return this._joinTime},b.prototype.isModerator=function(){return this._role===a.Services.Conference.ParticipantRole.MODERATOR},b.prototype.getParticipantAudioStatus=function(){return this._audioFromParticipant},b.prototype.getParticipantVideoStatus=function(){return this._videoFromParticipant},b.prototype.isLecturer=function(){return this._lecturer},b.prototype.getFeccRecvSupport=function(){return this._feccRecvSupport},b.prototype.getParticipantConnectionStatus=function(){return this._connectionStatus},a.Services.Conference.ActiveParticipant=b}(AvayaClientServices),function(a){"use strict";var b={addOnChatMessageReceivedCallback:function(a){this._onChatMessageReceivedCallbacks.add(a)},removeOnChatMessageReceivedCallback:function(a){this._onChatMessageReceivedCallbacks.remove(a)},addOnChatServiceAvailableCallback:function(a){this._onChatServiceAvailableCallbacks.add(a)},removeOnChatServiceAvailableCallback:function(a){this._onChatServiceAvailableCallbacks.remove(a)},addOnChatServiceUnavailableCallback:function(a){this._onChatServiceUnavailableCallbacks.add(a)},removeOnChatServiceUnavailableCallback:function(a){this._onChatServiceUnavailableCallbacks.remove(a)}};$.extend(a.Services.Conference.Chat.prototype,b)}(AvayaClientServices),function(a){"use strict";var b={addOnConferenceCapabilitiesChangedCallback:function(a){this._onConferenceCapabilitiesChangedCallbacks.add(a)},removeOnConferenceCapabilitiesChangedCallback:function(a){this._onConferenceCapabilitiesChangedCallbacks.remove(a)},addOnConferenceLockStatusChangedCallback:function(a){this._onConferenceLockStatusChangedCallbacks.add(a)},removeOnConferenceLockStatusChangedCallback:function(a){this._onConferenceLockStatusChangedCallbacks.remove(a)},addOnConferenceDisplayParticipantNameOnVideoChangedCallback:function(a){this._onConferenceDisplayParticipantNameOnVideoChangedCallbacks.add(a)},removeOnConferenceDisplayParticipantNameOnVideoChangedCallback:function(a){this._onConferenceDisplayParticipantNameOnVideoChangedCallbacks.remove(a)},addOnConferenceVideoSelfSeeChangedCallback:function(a){this._onConferenceVideoSelfSeeChangedCallbacks.add(a)},removeOnConferenceVideoSelfSeeChangedCallback:function(a){this._onConferenceVideoSelfSeeChangedCallbacks.remove(a)},addOnConferenceVideoLayoutChangedCallback:function(a){this._onConferenceVideoLayoutChangedCallbacks.add(a)},removeOnConferenceVideoLayoutChangedCallback:function(a){this._onConferenceVideoLayoutChangedCallbacks.remove(a)},addOnConferenceDisplayParticipantNameOnVideoAllowedCallback:function(a){this._onConferenceDisplayParticipantNameOnVideoAllowedCallbacks.add(a)},removeOnConferenceDisplayParticipantNameOnVideoAllowedCallback:function(a){this._onConferenceDisplayParticipantNameOnVideoAllowedCallbacks.remove(a)},addOnConferenceVideoSelfSeeAllowedCallback:function(a){this._onConferenceVideoSelfSeeAllowedCallbacks.add(a)},removeOnConferenceVideoSelfSeeAllowedCallback:function(a){this._onConferenceVideoSelfSeeAllowedCallbacks.remove(a)},addOnConferenceSupportedVideoLayoutsChangedCallback:function(a){this._onConferenceSupportedVideoLayoutsChangedCallbacks.add(a)},removeOnConferenceSupportedVideoLayoutsChangedCallback:function(a){this._onConferenceSupportedVideoLayoutsChangedCallbacks.remove(a)},addOnConferenceContinuationStatusChangedCallback:function(a){this._onConferenceContinuationStatusChangedCallbacks.add(a)},removeOnConferenceContinuationStatusChangedCallback:function(a){this._onConferenceContinuationStatusChangedCallbacks.remove(a)},addOnConferenceRecordingStatusChangedCallback:function(a){this._onConferenceRecordingStatusChangedCallbacks.add(a)},removeOnConferenceRecordingStatusChangedCallback:function(a){this._onConferenceRecordingStatusChangedCallbacks.remove(a)},addOnConferenceRecordingFailedCallbacks:function(a){this._onConferenceRecordingFailedCallbacks.add(a)},removeOnConferenceRecordingFailedCallbacks:function(a){this._onConferenceRecordingFailedCallbacks.remove(a)},addOnConferenceVideoStatusChangedCallback:function(a){this._onConferenceVideoStatusChangedCallbacks.add(a)},removeOnConferenceVideoStatusChangedCallback:function(a){this._onConferenceVideoStatusChangedCallbacks.remove(a)},addOnConferenceLectureModeStatusChangedCallback:function(a){this._onConferenceLectureModeStatusChangedCallbacks.add(a)},removeOnConferenceLectureModeStatusChangedCallback:function(a){this._onConferenceLectureModeStatusChangedCallbacks.remove(a)},addOnConferenceStreamingStatusChangedCallback:function(a){this._onConferenceStreamingStatusChangedCallbacks.add(a)},removeOnConferenceStreamingStatusChangedCallback:function(a){this._onConferenceStreamingStatusChangedCallbacks.remove(a)},addOnConferenceEncryptionStatusChangedCallback:function(a){this._onConferenceEncryptionStatusChangedCallbacks.add(a)},removeOnConferenceEncryptionStatusChangedCallback:function(a){this._onConferenceEncryptionStatusChangedCallbacks.remove(a)},addOnConferenceMeetingTerminationTimeChangedCallback:function(a){this._onConferenceMeetingTerminationTimeChangedCallbacks.add(a)},removeOnConferenceMeetingTerminationTimeChangedCallback:function(a){this._onConferenceMeetingTerminationTimeChangedCallbacks.remove(a)},addOnConferenceMeetingTerminationInProgressCallbacks:function(a){this._onConferenceMeetingTerminationInProgressCallbacks.add(a)},removeOnConferenceMeetingTerminationInProgressCallbacks:function(a){this._onConferenceMeetingTerminationInProgressCallbacks.remove(a)},addOnConferenceEntryExitToneChangedCallback:function(a){this._onConferenceEntryExitToneChangedCallbacks.add(a)},removeOnConferenceEntryExitToneChangedCallback:function(a){this._onConferenceEntryExitToneChangedCallbacks.remove(a)},addOnConferencePresentationModeStatusChangedCallback:function(a){this._onConferencePresentationModeStatusChangedCallbacks.add(a)},removeOnConferencePresentationModeStatusChangedCallback:function(a){this._onConferencePresentationModeStatusChangedCallbacks.remove(a)},addOnConferenceActiveTalkersChangedCallback:function(a){this._onConferenceActiveTalkersChangedCallbacks.add(a)},removeOnConferenceActiveTalkersChangedCallback:function(a){this._onConferenceActiveTalkersChangedCallbacks.remove(a)},addOnConferenceActiveVideoParticipantsChangedCallback:function(a){this._onConferenceActiveVideoParticipantsChangedCallbacks.add(a)},removeOnConferenceActiveVideoParticipantsChangedCallback:function(a){this._onConferenceActiveVideoParticipantsChangedCallbacks.remove(a)},addOnConferenceAllParticipantsMutedCallback:function(a){this._onConferenceAllParticipantsMutedCallbacks.add(a)},removeOnConferenceAllParticipantsMutedCallback:function(a){this._onConferenceAllParticipantsMutedCallbacks.remove(a)},addOnConferenceAllParticipantsUnmutedCallback:function(a){this._onConferenceAllParticipantsUnmutedCallbacks.add(a)},removeOnConferenceAllParticipantsUnmutedCallback:function(a){this._onConferenceAllParticipantsUnmutedCallbacks.remove(a)},addOnConferencePendingParticipantCallback:function(a){this._onConferencePendingParticipantCallbacks.add(a)},removeOnConferencePendingParticipantCallback:function(a){this._onConferencePendingParticipantCallbacks.remove(a)},addOnConferencePendingParticipantRemovedCallback:function(a){this._onConferencePendingParticipantRemovedCallbacks.add(a)},removeOnConferencePendingParticipantRemovedCallback:function(a){this._onConferencePendingParticipantRemovedCallbacks.remove(a)},addOnConferenceDroppedParticipantAddedCallback:function(a){this._onConferenceDroppedParticipantAddedCallbacks.add(a)},removeOnConferenceDroppedParticipantAddedCallback:function(a){this._onConferenceDroppedParticipantAddedCallbacks.remove(a)},addOnConferenceDroppedParticipantRemovedCallback:function(a){this._onConferenceDroppedParticipantRemovedCallbacks.add(a)},removeOnConferenceDroppedParticipantRemovedCallback:function(a){this._onConferenceDroppedParticipantRemovedCallbacks.remove(a)},addOnConferenceServiceAvailableCallback:function(a){this._onConferenceServiceAvailableCallbacks.add(a)},removeOnConferenceServiceAvailableCallback:function(a){this._onConferenceServiceAvailableCallbacks.remove(a)},addOnConferenceServiceUnavailableCallback:function(a){this._onConferenceServiceUnavailableCallbacks.add(a)},removeOnConferenceServiceUnavailableCallback:function(a){this._onConferenceServiceUnavailableCallbacks.remove(a)},addOnConferenceParticipantsAddedCallback:function(a){this._onConferenceParticipantsAddedCallbacks.add(a)},removeOnConferenceParticipantsAddedCallback:function(a){this._onConferenceParticipantsAddedCallbacks.remove(a)},addOnConferenceParticipantsRemovedCallback:function(a){this._onConferenceParticipantsRemovedCallbacks.add(a)},removeOnConferenceParticipantsRemovedCallback:function(a){this._onConferenceParticipantsRemovedCallbacks.remove(a)},addOnConferenceSubjectCallback:function(a){this._onConferenceSubjectChangedCallbacks.add(a)},removeOnConferenceSubjectCallback:function(a){this._onConferenceSubjectChangedCallbacks.remove(a)},addOnConferenceCollaborationURIChangedCallback:function(a){this._onConferenceCollaborationURIChangedCallbacks.add(a)},removeOnConferenceCollaborationURIChangedCallback:function(a){this._onConferenceCollaborationURIChangedCallbacks.remove(a)}};$.extend(a.Services.Conference.Conference.prototype,b)}(AvayaClientServices),function(a){"use strict";var b={getSupportInConferenceChatCapability:function(){},getSupportMeetingMinutesCapability:function(){},getModerateConferenceCapability:function(){},getUpdateLockStatusCapability:function(){return this._setLockCapability},_recalculateSetLockCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&this._selfParticipant.isModerator()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setLockCapability._updateIfChanged(b,c)},getUpdateContinuationStatusCapability:function(){return this._setContinuationStatusCapability},_recalculateSetContinuationStatusCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&this._selfParticipant.isModerator()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setContinuationStatusCapability._updateIfChanged(b,c)},getStartRecordingCapability:function(){return this._startRecordingCapability},getStopRecordingCapability:function(){return this._stopRecordingCapability},getPauseRecordingCapability:function(){return this._pauseRecordingCapability},getResumeRecordingCapability:function(){return this._resumeRecordingCapability},_recalculateStartStopRecordingCapability:function(){var b,c,d;a.Base.Utils.isDefined(this._selfParticipant)&&a.Base.Utils.isDefined(this._recorderStatus)&&a.Base.Utils.isDefined(this._recordingPermissions)?this._recordingPermissions===a.Services.Conference.PermissionStatus.NOT_ALLOWED||this._recorderStatus===a.Services.Conference.RecorderStatus.NONE?(b=!1,c=!1,d=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):this._recordingPermissions!==a.Services.Conference.PermissionStatus.NEED_MODERATOR||this._selfParticipant.isModerator()?(d=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this.isRecordingActive()?(b=!1,c=!0):(b=!0,c=!1)):(b=!1,c=!1,d=a.Base.CapabilityDenialReason.CAPABILITY_NEED_MODERATOR):(b=!1,c=!1,d=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._startRecordingCapability._updateIfChanged(b,d),this._stopRecordingCapability._updateIfChanged(c,d)},_recalculatePauseResumeRecordingCapability:function(){var b,c,d;a.Base.Utils.isDefined(this._selfParticipant)&&a.Base.Utils.isDefined(this._recorderStatus)&&a.Base.Utils.isDefined(this._recordingPermissions)?this._recordingPermissions===a.Services.Conference.PermissionStatus.NOT_ALLOWED||this._recorderStatus!==a.Services.Conference.RecorderStatus.WITH_PAUSE?(b=!1,c=!1,d=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):this._recordingPermissions!==a.Services.Conference.PermissionStatus.NEED_MODERATOR||this._selfParticipant.isModerator()?(d=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this.isRecordingPaused()?(b=!1,c=!0):(b=!0,c=!1)):(b=!1,c=!1,d=a.Base.CapabilityDenialReason.CAPABILITY_NEED_MODERATOR):(b=!1,c=!1,d=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._pauseRecordingCapability._updateIfChanged(b,d),this._resumeRecordingCapability._updateIfChanged(c,d)},getUpdateVideoAllowedStatusCapability:function(){},getUpdateEntryExitToneStatusCapability:function(){},getUpdateMultiplePresentersCapability:function(){},getSupportRaiseHandCapability:function(){return this._raiseHandSupportCapability},_recalculateRaiseHandSupportCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._raiseHandSupportCapability._updateIfChanged(b,c)},getSupportLowerHandCapability:function(){return this._lowerHandSupportCapability},_recalculateLowerHandSupportCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._lowerHandSupportCapability._updateIfChanged(b,c)},getRetrieveParticipantListCapability:function(){},getMuteAllParticipantsCapability:function(){return this._muteUnmuteAllCapability},getUnmuteAllParticipantsCapability:function(){return this._muteUnmuteAllCapability},_recalculateMuteUnmuteAllCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&this._selfParticipant.isModerator()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._muteUnmuteAllCapability._updateIfChanged(b,c)},getChangeParticipantRoleCapability:function(){},getSetAsLecturerCapability:function(){return this._setAsLecturerCapability},_recalculateSetAsLecturerCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&this._selfParticipant._isModerator?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setAsLecturerCapability._updateIfChanged(b,c)},getUpdateDisplayVideoParticipantNameCapability:function(){return this._setDisplayVideoParticipantNameCapability},_recalculateDisplayVideoParticipantNameCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&a.Base.Utils.isDefined(this._isVideoParticipantNameDisplayChangeAllowed)?this._isVideoParticipantNameDisplayChangeAllowed?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setDisplayVideoParticipantNameCapability._updateIfChanged(b,c)},getUpdateVideoSelfSeeCapability:function(){return this._setVideoSelfSeeCapability},_recalculateVideoSelfSeeCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&a.Base.Utils.isDefined(this._isVideoSelfSeeChangeAllowed)?this._isVideoSelfSeeChangeAllowed?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setVideoSelfSeeCapability._updateIfChanged(b,c)},getUpdateVideoLayoutCapability:function(){return this._setVideoLayoutCapability},_recalculateSetVideoLayoutCapability:function(){var b,c;if(a.Base.Utils.isDefined(this._selfParticipant)&&a.Base.Utils.isDefined(this._currentVideoLayout)&&a.Base.Utils.isDefined(this._supportedVideoLayouts)){b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED;for(var d=0;d<this._supportedVideoLayouts.length;++d)if(this._supportedVideoLayouts[d].geometry===this._currentVideoLayout){b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED;break}}else b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE;this._setVideoLayoutCapability._updateIfChanged(b,c)},getRequestToBecomeModeratorCapability:function(){return this._setRequestToBecomeModeratorCapability},_recalculateRequestToBecomeModeratorCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)?this._selfParticipant.isModerator()?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setRequestToBecomeModeratorCapability._updateIfChanged(b,c)},getAddParticipantViaDialoutCapability:function(){},getRemoveSelectParticipantCapability:function(){return this._removeSelectParticipantCapability},_recalculateRemoveSelectParticipantCapability:function(){var b,c;a.Base.Utils.isDefined(this._selfParticipant)&&this._selfParticipant.isModerator()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeSelectParticipantCapability._updateIfChanged(b,c)},getRemoveLastParticipantCapability:function(){},getAcceptPendingParticipantCapability:function(){},getDenyPendingParticipantCapability:function(){}};$.extend(a.Services.Conference.Conference.prototype,b)}(AvayaClientServices),function(a){"use strict";function b(b,c){a.Services.Conference.Participant.call(this,b,c)}b.prototype=Object.create(a.Services.Conference.Participant.prototype),b.prototype.reinvite=function(){},a.Services.Conference.DroppedParticipant=b}(AvayaClientServices),function(a){"use strict";var b={getMuteParticipantAudioCapability:function(){return this._muteUnmuteCapability},getUnmuteParticipantAudioCapability:function(){return this._muteUnmuteCapability},_recalculateMuteUnmuteCapability:function(){var b,c;this._audioFromParticipant===a.Services.Conference.MediaFromParticipantStatus.NA?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_CALL_HAS_NO_AUDIO):a.Base.Utils.isDefined(this._conference._selfParticipant)&&this._conference._selfParticipant.isModerator()||this.isSelfParticipant?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._muteUnmuteCapability._updateIfChanged(b,c)},getBlockParticipantVideoCapability:function(){return this._blockUnblockVideoCapability},getUnblockParticipantVideoCapability:function(){return this._blockUnblockVideoCapability},_recalculateBlockUnblockVideoCapability:function(){var b,c;this._videoFromParticipant===a.Services.Conference.MediaFromParticipantStatus.NA?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_CALL_HAS_NO_VIDEO):a.Base.Utils.isDefined(this._conference._selfParticipant)&&this._conference._selfParticipant.isModerator()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._blockUnblockVideoCapability._updateIfChanged(b,c)},getChangeRoleCapability:function(){},getAssignParticipantAsLecturerCapability:function(){return this._setUnsetAsLecturerCapability},_recalculateSetAsLecturerCapability:function(){var b,c;this._audioFromParticipant===a.Services.Conference.MediaFromParticipantStatus.NA?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_CALL_HAS_NO_AUDIO):a.Base.Utils.isDefined(this._conference._selfParticipant)&&this._conference._selfParticipant.isModerator()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._setUnsetAsLecturerCapability._updateIfChanged(b,c)},getLowerParticipantHandCapability:function(){return this._lowerHandCapability},_recalculateLowerHandCapability:function(){var b,c;a.Base.Utils.isDefined(this._conference._selfParticipant)&&this._conference._selfParticipant.isModerator()||this.isSelfParticipant?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._lowerHandCapability._updateIfChanged(b,c)}};$.extend(a.Services.Conference.Participant.prototype,b)}(AvayaClientServices),function(a){"use strict";var b={addOnPendingParticipantAcceptedCallback:function(a){this._onPendingParticipantAcceptedCallbacks.add(a)},removeOnPendingParticipantAcceptedCallback:function(a){this._onPendingParticipantAcceptedCallbacks.remove(a)},addOnPendingParticipantCancelledCallback:function(a){this._onPendingParticipantCancelledCallbacks.add(a)},removeOnPendingParticipantCancelledCallback:function(a){this._onPendingParticipantCancelledCallbacks.remove(a)},addOnPendingParticipantDeniedCallback:function(a){this._onPendingParticipantDeniedCallbacks.add(a)},removeOnPendingParticipantDeniedCallback:function(a){this._onPendingParticipantDeniedCallbacks.remove(a)},addOnParticipantStatusChangedCallback:function(a){this._onParticipantStatusChangedCallbacks.add(a)},removeOnParticipantStatusChangedCallback:function(a){this._onParticipantStatusChangedCallbacks.remove(a)}};$.extend(a.Services.Conference.PendingParticipant.prototype,b)}(AvayaClientServices),function(a,b){"use strict";function c(){a.Services.Contacts.ContactField.call(this),this._value=!1}c.prototype=Object.create(a.Services.Contacts.ContactField.prototype),c.prototype.getValue=function(){return this._value},c.prototype.setValue=function(a){this._value=a},a.Services.Contacts.ContactBooleanField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";function c(){a.Services.Contacts.ContactField.call(this),this._address=void 0,this._emailAddressType=a.Services.Contacts.ContactEmailAddressType.EMAIL_ADDRESS_WORK}c.prototype=Object.create(a.Services.Contacts.ContactField.prototype),c.prototype.getAddress=function(){return this._address},c.prototype.setAddress=function(a){this._address=a},c.prototype.getEmailAddressType=function(){return this._emailAddressType},c.prototype.setEmailAddressType=function(a){this._emailAddressType=a},a.Services.Contacts.ContactEmailAddressField=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnContactAddedCallback:function(a){this._onContactAddedCallbacks.add(a)},removeOnContactAddedCallback:function(a){this._onContactAddedCallbacks.remove(a)},addOnContactUpdatedCallback:function(a){this._onContactUpdatedCallbacks.add(a)},removeOnContactUpdatedCallback:function(a){this._onContactUpdatedCallbacks.remove(a)},addOnContactDeletedCallback:function(a){this._onContactDeletedCallbacks.add(a)},removeOnContactDeletedCallback:function(a){this._onContactDeletedCallbacks.remove(a)},addOnContactServicesCapabilitiesChangedCallback:function(a){this._onCapabilitiesChangedCallbacks.add(a)},removeOnContactServicesCapabilitiesChangedCallback:function(a){this._onCapabilitiesChangedCallbacks.remove(a)},addOnContactLoadingCompleteCallback:function(a){this._onContactLoadingCompleteCallbacks.add(a)},removeOnContactLoadingCompleteCallback:function(a){this._onContactLoadingCompleteCallbacks.remove(a)}};b.extend(a.Services.Contacts.Contacts.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={getAddContactCapability:function(){return this._contactsService.getAddContactCapability()},getUpdateContactCapability:function(){return this._contactsService.getUpdateContactCapability()},getDeleteContactCapability:function(){return this._contactsService.getDeleteContactCapability()},getSearchContactCapability:function(){return this._contactsService.getSearchContactCapability()}};b.extend(a.Services.Contacts.Contacts.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnNameChangedCallback:function(a){this._onNameChangedCallbacks.add(a)},removeOnNameChangedCallback:function(a){this._onNameChangedCallbacks.remove(a)},addOnMimeTypeChangedCallback:function(a){this._onMimeTypeChangedCallbacks.add(a)},removeOnMimeTypeChangedCallback:function(a){this._onMimeTypeChangedCallbacks.remove(a)},addOnDurationChangedCallback:function(a){this._onDurationChangedCallbacks.add(a)},removeOnDurationChangedCallback:function(a){this._onDurationChangedCallbacks.remove(a)},addOnSizeChangedCallback:function(a){
this._onSizeChangedCallbacks.add(a)},removeOnSizeChangedCallback:function(a){this._onSizeChangedCallbacks.remove(a)},addOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.add(a)},removeOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.remove(a)},addOnConsumptionStatusChangedCallback:function(a){this._onConsumptionStatusChangedCallbacks.add(a)},removeOnConsumptionStatusChangedCallback:function(a){this._onConsumptionStatusChangedCallbacks.remove(a)},addOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.add(a)},removeOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.remove(a)},addOnHasThumbnailChangedCallback:function(a){this._onHasThumbnailChangedCallbacks.add(a)},removeOnHasThumbnailChangedCallback:function(a){this._onHasThumbnailChangedCallbacks.remove(a)},addOnIsSelfGeneratedCallback:function(a){this._onIsSelfGeneratedCallbacks.add(a)},removeOnIsSelfGeneratedCallback:function(a){this._onIsSelfGeneratedCallbacks.remove(a)}};b.extend(a.Services.Messaging.Attachment.prototype,c)}(window.AvayaClientServices,jQuery),function(a,b){"use strict";var c={getUpdateNameCapability:function(){return this._updateNameCapability},_recalculateUpdateNameCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateNameCapability._updateIfChanged(b,c)},getUpdateMimeTypeCapability:function(){return this._updateMimeTypeCapability},_recalculateUpdateMimeTypeCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateMimeTypeCapability._updateIfChanged(b,c)},getUpdateDurationCapability:function(){return this._updateDurationCapability},_recalculateUpdateDurationCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateDurationCapability._updateIfChanged(b,c)},getUpdateSizeCapability:function(){return this._updateSizeCapability},_recalculateUpdateSizeCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateSizeCapability._updateIfChanged(b,c)},getUpdateLocationCapability:function(){return this._updateLocationCapability},_recalculateUpdateLocationCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateLocationCapability._updateIfChanged(b,c)},getUpdateIsSelfGeneratedCapability:function(){return this._updateIsSelfGeneratedCapability},_recalculateUpdateIsSelfGeneratedCapability:function(){var b,c;b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this._updateIsSelfGeneratedCapability._updateIfChanged(b,c)},getCreateThumbnailCapability:function(){return this._createThumbnailCapability},_recalculateCreateThumbnailCapability:function(){var b,c;b=!1;for(var d in this._thumbnailCreator._creators)if(this._thumbnailCreator._creators.hasOwnProperty(d)){var e=d;-1!==d.indexOf("/*")&&(e=d.slice(0,d.indexOf("/*"))),-1!==this.getMimeType().indexOf(e)&&(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED)}b||(c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createThumbnailCapability._updateIfChanged(b,c)},getRemoveThumbnailCapability:function(){return this._removeThumbnailCapability},_recalculateRemoveThumbnailCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._removeThumbnailCapability._updateIfChanged(b,c)},getCanDownloadCapability:function(){return this._canDownloadCapability},_recalculateCanDownloadCapability:function(){var b,c;b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this._canDownloadCapability._updateIfChanged(b,c)},getCanConsumeCapability:function(){return this._canConsumeCapability},_recalculateCanConsumeCapability:function(){var b,c;b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this._canConsumeCapability._updateIfChanged(b,c)},getRemoveCapability:function(){return this._removeCapability},_recalculateRemoveCapability:function(){var b,c;this.status!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._removeCapability._updateIfChanged(b,c)}};b.extend(a.Services.Messaging.Attachment.prototype,c)}(AvayaClientServices,jQuery),function(a){"use strict";function b(a){this._messageBuilder=a}b.prototype={build:function(b,c){var d=new a.Services.Messaging.Conversation(c);d.attachmentCount=b.attachmentCount||0,b.counts&&(d.totalMessageCount=b.counts.messageCount||0),b.flags&&(d.active=b.flags.active,d.closed=b.flags.closed,d.sensitivity=b.flags.sensitivity),d.href=b.href,d.id=b.id,d.lastAccessTime=new Date(b.lastAccessedTime),d.participants=new a.Base.DataSet,d.lastUpdated=new Date(b.lastUpdated),d.latestEntryTimestamp=new Date(b.latestEntryTimestamp),d.subject=b.subject,d.totalCount=b.totalCount||0,d.type=b.type||a.Services.Messaging.ConversationType.THREAD,d.unreadAttachmentCount=b.unreadAttachmentCount||0,d.unreadCount=b.unreadCount||0,d.resourceStatus=b.resourceStatus||a.Services.Messaging.ResourceStatus.PUBLISHED,b.counts&&(d._counts.eventCount=b.counts.eventCount||0,d._counts.eventUnreadMessage=b.counts.eventUnreadMessage||0,d._counts.messageAttachment=b.counts.messageAttachment||0,d._counts.messageCount=b.counts.messageCount||0,d._counts.messageUnreadAttachment=b.counts.messageUnreadAttachment||0,d._counts.messageUnreadMessage=b.counts.messageUnreadMessage||0);var e=d.getLastMessage();return d.previewText=e?e.from.givenName+": "+e.body:"",c._recalculateAllConversationCapabilities(d),d},update:function(a,b,c){a.attachmentCount!==b.attachmentCount&&(a.attachmentCount=b.attachmentCount,a._onTotalAttachmentCountChangedCallbacks.fire(a,a.attachmentCount)),b.counts&&a.totalMessageCount!==b.counts.messageCount&&(a.totalMessageCount=b.counts.messageCount,a._onTotalMessagesCountChangedCallbacks.fire(a,a.totalMessageCount)),b.flags&&(a.active!==b.flags.active&&(a.active=b.flags.active,a._onActiveStatusChangedCallbacks.fire(a,a.active)),a.closed!==b.flags.closed&&(a.closed=b.flags.closed,a._onClosedStatusChangedCallbacks.fire(a,a.closed)),a.sensitivity!==b.flags.sensitivity&&(a.sensitivity=b.flags.sensitivity,a._onSensitivityChangedCallbacks.fire(a,a.sensitivity))),a.multiparty!==b.isMultiparty&&(a.multiparty=b.isMultiparty,a._onMultiPartyStatusChangedCallbacks.fire(a,a.multiparty));var d=new Date(b.lastUpdated);a.lastUpdated&&a.lastUpdated.getTime()===d.getTime()||(a.lastUpdated=d,a._onLastUpdatedTimeChangedCallbacks.fire(a,a.lastUpdated)),d=new Date(b.lastAccessedTime),a.lastAccessTime&&a.lastAccessTime.getTime()===d.getTime()||(a.lastAccessTime=d,a._onLastAccessTimeChangedCallbacks.fire(a,a.lastAccessTime)),d=new Date(b.latestEntryTimestamp),a.latestEntryTimestamp&&a.latestEntryTimestamp.getTime()===d.getTime()||(a.latestEntryTimestamp=d,a._onLatestEntryTimeChangedCallbacks.fire(a,a.latestEntryTimestamp)),a.subject!==b.subject&&(a.subject=b.subject,a._onSubjectChangedCallbacks.fire(a,a.subject)),a.type!==b.type&&(a.type=b.type,a._onTypeChangedCallbacks.fire(a,a.type)),a.unreadAttachmentCount!==b.unreadAttachmentCount&&(a.unreadAttachmentCount=b.unreadAttachmentCount,a._onTotalUnreadAttachmentCountChangedCallbacks.fire(a,a.unreadAttachmentCount)),a.unreadCount!==b.unreadCount&&(a.unreadCount=b.unreadCount,a._onTotalUnreadMessageCountChangedCallbacks.fire(a,a.unreadCount)),b.counts&&(a._counts.eventCount!==b.counts.eventCount&&(a._counts.eventCount=b.counts.eventCount,a._onTotalEventCountChangedCallbacks.fire(a,a._counts.eventCount)),a._counts.eventUnreadMessage!==b.counts.eventUnreadMessage&&(a._counts.eventUnreadMessage=b.counts.eventUnreadMessage,a._onTotalUnreadEventCountChangedCallbacks.fire(a,a._counts.eventUnreadMessage)),a._counts.messageAttachment!==b.counts.messageAttachment&&(a._counts.messageAttachment=b.counts.messageAttachment,a._onTotalAttachmentCountChangedCallbacks.fire(a,a._counts.messageAttachment)),a._counts.messageCount!==b.counts.messageCount&&(a._counts.messageCount=b.counts.messageCount,a._onTotalMessagesCountChangedCallbacks.fire(a,a._counts.messageCount)),a._counts.messageUnreadAttachment!==b.counts.messageUnreadAttachment&&(a._counts.messageUnreadAttachment=b.counts.messageUnreadAttachment,a._onTotalUnreadAttachmentCountChangedCallbacks.fire(a,a._counts.messageUnreadAttachment)),a._counts.messageUnreadMessage!==b.counts.messageUnreadMessage&&(a._counts.messageUnreadMessage=b.counts.messageUnreadMessage,a._onTotalUnreadMessageCountChangedCallbacks.fire(a,a._counts.messageUnreadMessage)));for(var e,f=!1,g=b.messages.length-1;g>=0;g--){var h=b.messages[g],i=this._getMessageById(a.messages,h.id);"undefined"!=typeof i?i.getLastModifiedDate().toISOString()!==new Date(h.lastModifiedDate).toISOString()&&(b.messages[g+1]&&(e=this._getMessageById(a.messages,b.messages[g+1].id)),this._updateExistingMessage(i,h,e),f=!0):(b.messages[g+1]&&(e=this._getMessageById(a.messages,b.messages[g+1].id)),e=this._addNewMessage(a,h,e,c),a._onMessagesAddedCallbacks.fire(a,[e]),f=!0)}f&&(a.messages.onDataSetChanged(),this._updatePreviewText(a))},_getMessageById:function(a,b){for(var c=0;c<a.length;c++)if(a[c].id===b)return a[c]},_updatePreviewText:function(a){var b=a.getLastMessage(),c=b&&b.from?b.from.givenName+": "+b.getBody():"";c!==a.previewText&&(a.previewText=c,a._onPreviewTextChangedCallbacks.fire(a,c))},_removeParticipant:function(a,b){var c=a.participants.filter(function(a){return a.address===b.eventRelatedParticipants[0].address});if(c.length>0){var d=a.participants.indexOf(c[0]);a.participants.splice(d,1),a._onParticipantsRemovedCallbacks.fire(a,c[0])}},_updateExistingMessage:function(a,b,c){return this._messageBuilder.update(a,b),c&&a.setIsCoalesced(this._messageBuilder.isMessageCoalesced(a,c)),a},_addNewMessage:function(b,c,d,e){var f=e.createNewClientMessage(c,b);return d&&f.setIsCoalesced(this._messageBuilder.isMessageCoalesced(f,d)),b.messages.push(f),f.getType()===a.Services.Messaging.MessageType.LEFT&&this._removeParticipant(b,f),f}},a.Services.Messaging.ConversationBuilder=b}(AvayaClientServices),function(a,b){"use strict";var c={addOnMessagesAddedCallback:function(a){this._onMessagesAddedCallbacks.add(a)},removeOnMessagesAddedCallback:function(a){this._onMessagesAddedCallbacks.remove(a)},addOnSubjectChangedCallback:function(a){this._onSubjectChangedCallbacks.add(a)},removeOnSubjectChangedCallback:function(a){this._onSubjectChangedCallbacks.remove(a)},addOnTotalMessagesCountChangedCallback:function(a){this._onTotalMessagesCountChangedCallbacks.add(a)},removeOnTotalMessagesCountChangedCallback:function(a){this._onTotalMessagesCountChangedCallbacks.remove(a)},addOnParticipantsAddedCallback:function(a){this._onParticipantsAddedCallbacks.add(a)},removeOnParticipantsAddedCallback:function(a){this._onParticipantsAddedCallbacks.remove(a)},addOnParticipantsRemovedCallback:function(a){this._onParticipantsRemovedCallbacks.add(a)},removeOnParticipantsRemovedCallback:function(a){this._onParticipantsRemovedCallbacks.remove(a)},addOnActiveStatusChangedCallback:function(a){this._onActiveStatusChangedCallbacks.add(a)},removeOnActiveStatusChangedCallback:function(a){this._onActiveStatusChangedCallbacks.remove(a)},addOnClosedStatusChangedCallback:function(a){this._onClosedStatusChangedCallbacks.add(a)},removeOnClosedStatusChangedCallback:function(a){this._onClosedStatusChangedCallbacks.remove(a)},addOnMultiPartyStatusChangedCallback:function(a){this._onMultiPartyStatusChangedCallbacks.add(a)},removeOnMultiPartyStatusChangedCallback:function(a){this._onMultiPartyStatusChangedCallbacks.remove(a)},addOnIsComposingStatusChangedCallback:function(a){this._onIsComposingStatusChangedCallbacks.add(a)},removeOnIsComposingStatusChangedCallback:function(a){this._onIsComposingStatusChangedCallbacks.remove(a)},addOnLastAccessTimeChangedCallback:function(a){this._onLastAccessTimeChangedCallbacks.add(a)},removeOnLastAccessTimeChangedCallback:function(a){this._onLastAccessTimeChangedCallbacks.remove(a)},addOnLastUpdatedTimeChangedCallback:function(a){this._onLastUpdatedTimeChangedCallbacks.add(a)},removeOnLastUpdatedTimeChangedCallback:function(a){this._onLastUpdatedTimeChangedCallbacks.remove(a)},addOnLatestEntryTimeChangedCallback:function(a){this._onLatestEntryTimeChangedCallbacks.add(a)},removeOnLatestEntryTimeChangedCallback:function(a){this._onLatestEntryTimeChangedCallbacks.remove(a)},addOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.add(a)},removeOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.remove(a)},addOnPreviewTextChangedCallback:function(a){this._onPreviewTextChangedCallbacks.add(a)},removeOnPreviewTextChangedCallback:function(a){this._onPreviewTextChangedCallbacks.remove(a)},addOnTotalAttachmentCountChangedCallback:function(a){this._onTotalAttachmentCountChangedCallbacks.add(a)},removeOnTotalAttachmentCountChangedCallback:function(a){this._onTotalAttachmentCountChangedCallbacks.remove(a)},addOnTotalUnreadMessageCountChangedCallback:function(a){this._onTotalUnreadMessageCountChangedCallbacks.add(a)},removeOnTotalUnreadMessageCountChangedCallback:function(a){this._onTotalUnreadMessageCountChangedCallbacks.remove(a)},addOnTotalUnreadAttachmentCountChangedCallback:function(a){this._onTotalUnreadAttachmentCountChangedCallbacks.add(a)},removeOnTotalUnreadAttachmentCountChangedCallback:function(a){this._onTotalUnreadAttachmentCountChangedCallbacks.remove(a)},addOnTotalEventCountChangedCallback:function(a){this._onTotalEventCountChangedCallbacks.add(a)},removeOnTotalEventCountChangedCallback:function(a){this._onTotalEventCountChangedCallbacks.remove(a)},addOnTotalUnreadEventCountChangedCallback:function(a){this._onTotalUnreadEventCountChangedCallbacks.add(a)},removeOnTotalUnreadEventCountChangedCallback:function(a){this._onTotalUnreadEventCountChangedCallbacks.remove(a)},addOnSensitivityChangedCallback:function(a){this._onSensitivityChangedCallbacks.add(a)},removeOnSensitivityChangedCallback:function(a){this._onSensitivityChangedCallbacks.remove(a)},addOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.add(a)},removeOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.remove(a)},addOnMessagesRemovedCallback:function(a){this._onMessagesRemovedCallbacks.add(a)},removeOnMessagesRemovedCallback:function(a){this._onMessagesRemovedCallbacks.remove(a)},addOnOtherMessagesAddedCallback:function(a){this._onOtherMessagesAddedCallbacks.add(a)},removeOnOtherMessagesAddedCallback:function(a){this._onOtherMessagesAddedCallbacks.remove(a)}};b.extend(a.Services.Messaging.Conversation.prototype,c)}(window.AvayaClientServices,jQuery),function(a,b){"use strict";var c={getUpdateSubjectCapability:function(){return this._updateSubjectCapability},_recalculateUpdateSubjectCapability:function(){var b,c;this.closed?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):this.resourceStatus===a.Services.Messaging.ResourceStatus.PUBLISHED?this._conversationService.isUpdateSubjectSupported()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):this.resourceStatus===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT&&(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateSubjectCapability._updateIfChanged(b,c)},getUpdateLastAccessTimeCapability:function(){return this._updateLastAccessTimeCapability},_recalculateUpdateLastAccessTimeCapability:function(){var b,c;this.closed||this.resourceStatus!==a.Services.Messaging.ResourceStatus.PUBLISHED?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateLastAccessTimeCapability._updateIfChanged(b,c)},getUpdateSensitivityCapability:function(){return this._updateSensitivityCapability},_recalculateUpdateSensitivityCapability:function(){var b,c;this.closed||this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateSensitivityCapability._updateIfChanged(b,c)},getOlderContentCapability:function(){return this._olderContentCapability},_recalculateOlderContentCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.PUBLISHED?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):this.totalCount===this.messages.length?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._olderContentCapability._updateIfChanged(b,c)},getAddParticipantsCapability:function(){return this._addParticipantsCapability},_recalculateAddParticipantsCapability:function(){var b,c;this.isActive()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):this.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._addParticipantsCapability._updateIfChanged(b,c)},getRemoveParticipantsCapability:function(){return this._removeParticipantsCapability},_recalculateRemoveParticipantsCapability:function(){var b,c;this.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeParticipantsCapability._updateIfChanged(b,c)},getCreateMessageCapability:function(){return this._createMessageCapability},_recalculateCreateMessageCapability:function(){var b,c;this.closed?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._createMessageCapability._updateIfChanged(b,c)},getCreateEscalationCapability:function(){return this._createEscalationCapability},_recalculateCreateEscalationCapability:function(){var b,c;this.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._createEscalationCapability._updateIfChanged(b,c)},getMarkAllContentAsReadCapability:function(){return this._markAllContentAsReadCapability},_recalculateMarkAllContentAsReadCapability:function(){var b,c;0===this._counts.messageUnreadMessage?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):this._conversationService.isMarkAllContentAsReadSupported()?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED),this._markAllContentAsReadCapability._updateIfChanged(b,c)},getLeaveCapability:function(){return this._leaveCapability},_recalculateLeaveCapability:function(){var b,c;!this.active||this.closed?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._leaveCapability._updateIfChanged(b,c)},getRemoveCapability:function(){return this._removeCapability},_recalculateRemoveCapability:function(){var b,c;this.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeCapability._updateIfChanged(b,c)},getStartCapability:function(){return this._startCapability},_recalculateStartCapability:function(){var b,c;(this.closed||!this.active)&&(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this.resourceStatus===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?0===this.participants.filter(function(a){return!a.isSelf()}).length?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._startCapability._updateIfChanged(b,c)},getUpdateTypeCapability:function(){return this._updateTypeCapability},_recalculateUpdateTypeCapability:function(){var b,c;this.getStatus()===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateTypeCapability._updateIfChanged(b,c)},getIsTypingCapability:function(){return this._isTypingCapability},_recalculateIsTypingCapability:function(){var b,c,d=this._conversationService.isOpened();d&&this._isSubscribed?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._isTypingCapability._updateIfChanged(b,c)}};b.extend(a.Services.Messaging.Conversation.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.add(a)},removeOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.remove(a)},addOnBodyChangedCallback:function(a){this._onBodyChangedCallbacks.add(a)},removeOnBodyChangedCallback:function(a){this._onBodyChangedCallbacks.remove(a)},addOnInReplyToChangedCallback:function(a){this._onInReplyToChangedCallbacks.add(a)},removeOnInReplyToChangedCallback:function(a){this._onInReplyToChangedCallbacks.remove(a)},addOnLastModifiedDateChangedCallback:function(a){this._onLastModifiedDateChangedCallbacks.add(a)},removeOnLastModifiedDateChangedCallback:function(a){this._onLastModifiedDateChangedCallbacks.remove(a)},addOnIsCoalescedStatusChangedCallback:function(a){this._onIsCoalescedStatusChangedCallbacks.add(a)},removeOnIsCoalescedStatusChangedCallback:function(a){this._onIsCoalescedStatusChangedCallbacks.remove(a)},addOnHasAttachmentStatusChangedCallback:function(a){this._onHasAttachmentStatusChangedCallbacks.add(a)},removeOnHasAttachmentStatusChangedCallback:function(a){this._onHasAttachmentStatusChangedCallbacks.remove(a)},addOnHasUnviewedAttachmentStatusChangedCallback:function(a){this._onHasUnviewedAttachmentStatusChangedCallbacks.add(a)},removeOnHasUnviewedAttachmentStatusChangedCallback:function(a){this._onHasUnviewedAttachmentStatusChangedCallbacks.remove(a)},addOnIsPrivateStatusChangedCallback:function(a){this._onIsPrivateStatusChangedCallbacks.add(a)},removeOnIsPrivateStatusChangedCallback:function(a){this._onIsPrivateStatusChangedCallbacks.remove(a)},addOnDoNotForwardStatusChangedCallback:function(a){this._onDoNotForwardStatusChangedCallbacks.add(a)},removeOnDoNotForwardStatusChangedCallback:function(a){this._onDoNotForwardStatusChangedCallbacks.remove(a)},addOnIsReadStatusChangedCallback:function(a){this._onIsReadStatusChangedCallbacks.add(a)},removeOnIsReadStatusChangedCallback:function(a){this._onIsReadStatusChangedCallbacks.remove(a)},addOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.add(a)},removeOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.remove(a)},addOnImportanceChangedCallback:function(a){this._onImportanceChangedCallbacks.add(a)},removeOnImportanceChangedCallback:function(a){this._onImportanceChangedCallbacks.remove(a)},addOnSensitivityChangedCallback:function(a){this._onSensitivityChangedCallbacks.add(a)},removeOnSensitivityChangedCallback:function(a){this._onSensitivityChangedCallbacks.remove(a)}};b.extend(a.Services.Messaging.Message.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={getUpdateBodyCapability:function(){return this._updateBodyCapability},_recalculateUpdateBodyCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateBodyCapability._updateIfChanged(b,c)},getUpdateSensitivityCapability:function(){return this._updateSensitivityCapability},_recalculateUpdateSensitivityCapability:function(){var b,c;this.conversation.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateSensitivityCapability._updateIfChanged(b,c)},getUpdateInReplyToCapability:function(){return this._updateInReplyToCapability},_recalculateUpdateInReplyToCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateInReplyToCapability._updateIfChanged(b,c)},getUpdateDoNotForwardCapability:function(){return this._updateDoNotForwardCapability},_recalculateUpdateDoNotForwardCapability:function(){var b,c;b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this._updateDoNotForwardCapability._updateIfChanged(b,c)},getUpdateImportanceCapability:function(){return this._updateImportanceCapability},_recalculateUpdateImportanceCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._updateImportanceCapability._updateIfChanged(b,c)},getCreateAttachmentCapability:function(a){return this._createAttachmentCapability},_recalculateCreateAttachmentCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._createAttachmentCapability._updateIfChanged(b,c)},getSendCapability:function(){return this._sendCapability},_recalculateSendCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):this.conversation.active?this.conversation.closed?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._sendCapability._updateIfChanged(b,c)},getMarkAsReadCapability:function(){return this._markAsReadCapability},_recalculateMarkAsReadCapability:function(){var b,c;this.read?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._markAsReadCapability._updateIfChanged(b,c)},getRemoveCapability:function(){return this._removeCapability},_recalculateRemoveCapability:function(){var b,c;this.resourceStatus!==a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._removeCapability._updateIfChanged(b,c)}};b.extend(a.Services.Messaging.Message.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnMessagingLimitsChangedCallback:function(a){this._onMessagingLimitsChangedCallbacks.add(a)},removeOnMessagingLimitsChangedCallback:function(a){this._onMessagingLimitsChangedCallbacks.remove(a)},addOnRoutableDomainsChangedCallback:function(a){this._onRoutableDomainsChangedCallbacks.add(a)},removeOnRoutableDomainsChangedCallback:function(a){this._onRoutableDomainsChangedCallbacks.remove(a)},addOnNumberOfConversationWithUnreadContentChangedCallback:function(a){this._onNumberOfConversationWithUnreadContentChangedCallbacks.add(a)},removeOnNumberOfConversationWithUnreadContentChangedCallback:function(a){this._onNumberOfConversationWithUnreadContentChangedCallbacks.remove(a)},addOnNumberOfConversationWithUnviewedContentSinceLastAccessChangedCallback:function(a){this._onNumberOfConversationWithUnviewedContentSinceLastAccessChangedCallbacks.add(a)},removeOnNumberOfConversationWithUnviewedContentSinceLastAccessChangedCallback:function(a){this._onNumberOfConversationWithUnviewedContentSinceLastAccessChangedCallbacks.remove(a)},addOnConversationsAddedCallback:function(a){this._onConversationsAddedCallbacks.add(a)},removeOnConversationsAddedCallback:function(a){this._onConversationsAddedCallbacks.remove(a)},addOnConversationsRemovedCallback:function(a){this._onConversationsRemovedCallbacks.add(a)},removeOnConversationsRemovedCallback:function(a){this._onConversationsRemovedCallbacks.remove(a)}};b.extend(a.Services.Messaging.Messaging.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={getStartServiceCapability:function(){return this._startServiceCapability},_recalculateStartServiceCapability:function(){var b,c;this._messagingService._hasStarted?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE):(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED),this._startServiceCapability._updateIfChanged(b,c)},getCreateConversationCapability:function(){return this._createConversationCapability},_recalculateCreateConversationCapability:function(){var b,c;this._messagingService._hasStarted&&this._resources.conversationsResource.href?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):this._messagingService._hasStarted&&!this._resources.conversationsResource.href?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._createConversationCapability._updateIfChanged(b,c)},getRetrieveConversationsCapability:function(){return this._retrieveConversationsCapability},_recalculateRetrieveConversationsCapability:function(){var b,c;this._messagingService._hasStarted&&this._resources.conversationsResource.href?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._retrieveConversationsCapability._updateIfChanged(b,c)},getSearchConversationsCapability:function(){return this._searchConversationsCapability},_recalculateSearchConversationsCapability:function(){var b,c;this._messagingService._hasStarted&&this._resources.conversationsResource.href?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):this._messagingService._hasStarted&&!this._resources.conversationsResource.href?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._searchConversationsCapability._updateIfChanged(b,c)},getUpdateRefreshIntervalCapability:function(){return this._updateRefreshIntervalCapability},_recalculateUpdateRefreshIntervalCapability:function(){var b,c;this._messagingService._hasStarted?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateRefreshIntervalCapability._updateIfChanged(b,c)},getValidateParticipantAddressCapability:function(){return this._validateParticipantAddressCapability},_recalculateValidateParticipantAddressCapability:function(){var b,c;this._messagingService._hasStarted&&this._resources.services.validateAddress?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):this._messagingService._hasStarted&&!this._resources.services.validateAddress?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!1,
c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._validateParticipantAddressCapability._updateIfChanged(b,c)},getMarkContentAsReadCapability:function(){return this._markContentAsReadCapability},_recalculateMarkContentAsReadCapability:function(){var b,c;this._messagingService._hasStarted&&this._resources.services.markAsReadIf?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):this._messagingService._hasStarted&&!this._resources.services.markAsReadIf?(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_SUPPORTED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._markContentAsReadCapability._updateIfChanged(b,c)},getClearLocalDataCapability:function(){return this._clearLocalDataCapability},_recalculateClearLocalDataCapability:function(){var b,c;this._messagingService._hasStarted?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._clearLocalDataCapability._updateIfChanged(b,c)}};b.extend(a.Services.Messaging.Messaging.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnPresenceListSubscriptionStartedCallback:function(a){this._onPresenceListSubscriptionStartedCallbacks.add(a)},removeOnPresenceListSubscriptionStartedCallback:function(a){this._onPresenceListSubscriptionStartedCallbacks.remove(a)},addOnPresenceListSubscriptionPresenceReceivedCallback:function(a){this._onPresenceListSubscriptionPresenceReceivedCallbacks.add(a)},removeOnPresenceListSubscriptionPresenceReceivedCallback:function(a){this._onPresenceListSubscriptionPresenceReceivedCallbacks.remove(a)},addOnPresenceListSubscriptionStoppedCallback:function(a){this._onPresenceListSubscriptionStoppedCallbacks.add(a)},removeOnPresenceListSubscriptionStoppedCallback:function(a){this._onPresenceListSubscriptionStoppedCallbacks.remove(a)}};b.extend(a.Services.Presence.PresenceListSubscription,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnSelfPresenceReceivedCallback:function(a){this._onSelfPresenceReceivedCallbacks.add(a)},removeOnSelfPresenceReceivedCallback:function(a){this._onSelfPresenceReceivedCallbacks.remove(a)},addOnPresenceWatcherRequestReceivedCallback:function(a){this._onPresenceWatcherRequestReceivedCallbacks.add(a)},removeOnPresenceWatcherRequestReceivedCallback:function(a){this._onPresenceWatcherRequestReceivedCallbacks.remove(a)},addOnPresenceServiceAvailableCallback:function(a){this._onPresenceServiceAvailableCallbacks.add(a)},removeOnPresenceServiceAvailableCallback:function(a){this._onPresenceServiceAvailableCallbacks.remove(a)},addOnPresenceServiceUnavailableCallback:function(a){this._onPresenceServiceUnavailableCallbacks.add(a)},removeOnPresenceServiceUnavailableCallback:function(a){this._onPresenceServiceUnavailableCallbacks.remove(a)}};b.extend(a.Services.Presence.PresenceService,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnUserRegistrationSuccessful:function(a){this._userRegistrationSuccessfulCallbacks.add(a)},removeOnUserRegistrationSuccessful:function(a){this._userRegistrationSuccessfulCallbacks.remove(a)},addOnUserRegistrationFailed:function(a){this._userRegistrationFailedCallbacks.add(a)},removeOnUserRegistrationFailed:function(a){this._userRegistrationFailedCallbacks.remove(a)},addOnUserUnregistrationSuccessful:function(a){this._userUnregistrationSuccessfulCallbacks.add(a)},removeOnUserUnregistrationSuccessful:function(a){this._userUnregistrationSuccessfulCallbacks.remove(a)},addOnUserUnregistrationFailed:function(a){this._userUnregistrationFailedCallbacks.add(a)},removeOnUserUnregistrationFailed:function(a){this._userUnregistrationFailedCallbacks.remove(a)}};b.extend(a.User.prototype,c)}(window.AvayaClientServices=window.AvayaClientServices||{},jQuery=jQuery||{}),function(a){"use strict";var b=[];b.type=new a.Base.Validators.TypeValidator,b.arrayElementType=new a.Base.Validators.ArrayElementTypeValidator,b.defined=new a.Base.Validators.DefinedValidator,a.Base.Utils={isUndefined:function(a){return"undefined"==typeof a},isDefined:function(a){return"undefined"!=typeof a},validate:function(c,d,e){if(d.optional&&"undefined"==typeof c)return!1;var f=!0;return d.validators.forEach(function(d){if(a.Base.Utils.isUndefined(b[d.type]))throw new Error("Validator of specified type does not exist.");f=f&&b[d.type].validate(c,d,e)}.bind(this)),f},makeId:function(a,b){var c;a||(a=10),c=b?b:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var d="",e=0;a>e;e++)d+=c.charAt(Math.floor(Math.random()*c.length));return d},clean:function(a,b){for(var c=0;c<a.length;c++)a[c]===b&&(a.splice(c,1),c--);return a},queryJSONObject:function(a,b){if("undefined"!=typeof a){var c=a,d=b.match(/(\w+)/g);if(d){for(var e=0;e<d.length;e++){if(!c[d[e]])return;c=c[d[e]]}return c}}}},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(a){var b=this;return function(){var c=Array.prototype.slice.call(arguments);return b.apply(a||null,c)}})}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e){this._id=a.Base.Utils.makeId(10,"0123456789"),this._color=d,this._width=e,this._translation=void 0,this._status=a.Services.Collaboration.SelectionStatus.PENDING,this._isMine=c,this._ownerDisplayName=b,this._finished=!1}b.prototype={getId:function(){return this._id},setId:function(a){this._id=a},getColor:function(){return this._color},getWidth:function(){return this._width},getOwnerDisplayName:function(){return this._ownerDisplayName},getTranslation:function(){return this._translation},setTranslation:function(a){this._translation=a},getStatus:function(){return this._status},setStatus:function(a){this._status=a},isMine:function(){return this._isMine},isFinished:function(){return this._finished},finishDrawing:function(){return this._finished=!0,$.when(this._finished)}},a.Services.Collaboration.AbstractShape=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h,i){a.Services.Collaboration.AbstractShape.call(this,d,f,g,i),this._topLeft=b,this._bottomRight=c,this._filled=e||!1,this._alpha=h||100}b.prototype=Object.create(a.Services.Collaboration.AbstractShape.prototype),b.prototype.getTopLeft=function(){return this._topLeft},b.prototype.setTopLeft=function(a){this._topLeft=a},b.prototype.getBottomRight=function(){return this._bottomRight},b.prototype.setBottomRight=function(a){this._bottomRight=a},b.prototype.isFilled=function(){return this._filled},b.prototype.getAlpha=function(){return this._alpha},a.Services.Collaboration.Circle=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g){a.Services.Collaboration.AbstractShape.call(this,b,d,e,g),this._filled=c||!1,this._finished=!1,this._sentPointsPos=0,this._points=[],this._alpha=f||100,this._onShapeFinished=void 0,this._readyToSendCallbacks=$.Callbacks(),this._throttlingInterval=100}b.prototype=Object.create(a.Services.Collaboration.AbstractShape.prototype),b.prototype.addPoint=function(a,b){var c=(new Date).getTime();this._points.push({isMove:a,point:b,_timestamp:c}),0===this.getSentPointsCount()?c-this._points[this.getSentPointsCount()]._timestamp>this._throttlingInterval&&this._readyToSendCallbacks.fire():c-this._points[this.getSentPointsCount()-1]._timestamp>this._throttlingInterval&&this._readyToSendCallbacks.fire()},b.prototype.addMovePoint=function(a){this.addPoint(!0,a)},b.prototype.addLinePoint=function(a){this.addPoint(!1,a)},b.prototype.finishDrawing=function(){return this._finished=!0,a.Base.Utils.isDefined(this._onShapeFinished)?this._onShapeFinished():$.when(this._finished)},b.prototype.getPoints=function(){return this._points},b.prototype.setPoints=function(a){this._points=a,this._sentPointsPos=0},b.prototype.updatePoints=function(a){for(var b=0;b<a.length;b++)this._points.push(a[b])},b.prototype.isFilled=function(){return this._filled},b.prototype.setFilled=function(a){this._filled=a},b.prototype.hasPointsToSend=function(){return this._sentPointsPos!==this._points.length},b.prototype.getPointsToSend=function(){return this._points.slice(this._sentPointsPos)},b.prototype.markPointsAsSent=function(a){this._sentPointsPos=a},b.prototype.getSentPointsCount=function(){return this._sentPointsPos},b.prototype.getAlpha=function(){return this._alpha},a.Services.Collaboration.Shape=b}(AvayaClientServices),function(a){"use strict";function b(b,c,d,e,f,g,h){a.Services.Collaboration.AbstractShape.call(this,d,f,g,h),this._content=b,this._filled=e||!1,this._fontSize=c,this._position=void 0}b.prototype=Object.create(a.Services.Collaboration.AbstractShape.prototype),b.prototype.getPosition=function(){return this._position},b.prototype.setPosition=function(a){this._position=a},b.prototype.getContent=function(){return this._content},b.prototype.getFontSize=function(){return this._fontSize},a.Services.Collaboration.WhiteboardText=b}(AvayaClientServices),function(a){"use strict";var b={addOnParticipantCollaborationStatusChangedCallback:function(a){this._onParticipantCollaborationStatusChangedCallbacks.add(a)},removeOnParticipantCollaborationStatusChangedCallback:function(a){this._onParticipantCollaborationStatusChangedCallbacks.remove(a)},addOnParticipantConnectionStatusChangedCallback:function(a){this._onParticipantConnectionStatusChangedCallbacks.add(a)},removeOnParticipantConnectionStatusChangedCallback:function(a){this._onParticipantConnectionStatusChangedCallbacks.remove(a)},addOnParticipantSetAsModeratorCallback:function(a){this._onParticipantSetAsModeratorCallbacks.add(a)},removeOnParticipantSetAsModeratorCallback:function(a){this._onParticipantSetAsModeratorCallbacks.remove(a)},addOnParticipantUnsetAsModeratorCallback:function(a){this._onParticipantUnsetAsModeratorCallbacks.add(a)},removeOnParticipantUnsetAsModeratorCallback:function(a){this._onParticipantUnsetAsModeratorCallbacks.remove(a)},addOnParticipantSetAsLecturerCallback:function(a){this._onParticipantSetAsLecturerCallbacks.add(a)},removeOnParticipantSetAsLecturerCallback:function(a){this._onParticipantSetAsLecturerCallbacks.remove(a)},addOnParticipantUnsetAsLecturerCallback:function(a){this._onParticipantUnsetAsLecturerCallbacks.add(a)},removeOnParticipantUnsetAsLecturerCallback:function(a){this._onParticipantUnsetAsLecturerCallbacks.remove(a)},addOnParticipantSetAsPresenterCallback:function(a){this._onParticipantSetAsPresenterCallbacks.add(a)},removeOnParticipantSetAsPresenterCallback:function(a){this._onParticipantSetAsPresenterCallbacks.remove(a)},addOnParticipantUnsetAsPresenterCallback:function(a){this._onParticipantUnsetAsPresenterCallbacks.add(a)},removeOnParticipantUnsetAsPresenterCallback:function(a){this._onParticipantUnsetAsPresenterCallbacks.remove(a)},addOnParticipantAudioStatusChangedCallback:function(a){this._onParticipantAudioStatusChangedCallbacks.add(a)},removeOnParticipantAudioStatusChangedCallback:function(a){this._onParticipantAudioStatusChangedCallbacks.remove(a)},addOnParticipantVideoStatusChangedCallback:function(a){this._onParticipantVideoStatusChangedCallbacks.add(a)},removeOnParticipantVideoStatusChangedCallback:function(a){this._onParticipantVideoStatusChangedCallbacks.remove(a)},addOnParticipantActiveTalkerStatusChangedCallback:function(a){this._onParticipantActiveTalkerStatusChangedCallbacks.add(a)},removeOnParticipantActiveTalkerStatusChangedCallback:function(a){this._onParticipantActiveTalkerStatusChangedCallbacks.remove(a)},addOnParticipantHandRaisedCallback:function(a){this._onParticipantHandRaisedCallbacks.add(a)},removeOnParticipantHandRaisedCallback:function(a){this._onParticipantHandRaisedCallbacks.remove(a)},addOnParticipantHandLoweredCallback:function(a){this._onParticipantHandLoweredCallbacks.add(a)},removeOnParticipantHandLoweredCallback:function(a){this._onParticipantHandLoweredCallbacks.remove(a)}};$.extend(a.Services.Conference.ActiveParticipant.prototype,b)}(AvayaClientServices),function(a,b){"use strict";function c(c,d){this._escalationService=d,this.type=a.Services.Messaging.MessageType.SESSION,this.sessionType=a.Services.Messaging.SessionType.AUDIO,this.participants=new a.Base.DataSet,this.extensions={},this.resourceStatus=a.Services.Messaging.ResourceStatus.DRAFT_UNSENT,a.Base.Utils.isDefined(c)&&(this.type=c.type,this.sessionType=c.sessionType,this.extensions=c.extensions,this.conversation=c.conversation),this._onTypeChangedCallbacks=b.Callbacks(),this._onResourceStatusChangedCallbacks=b.Callbacks(),this._onSessionTypeChangedSuccessCallbacks=b.Callbacks(),this._onSessionTypeChangedFailedCallbacks=b.Callbacks(),this._onStartSuccessCallbacks=b.Callbacks(),this._onStartFailedCallbacks=b.Callbacks(),this._onMessagingEscalationCapabilitiesChangedCallbacks=b.Callbacks(),this._startCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._addParticipantsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeParticipantsCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateSessionTypeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeCapability=new a.Base.Capability(a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),d._recalculateAllEscalationCapabilities(this)}c.prototype={getEscalationStatus:function(){return this.resourceStatus},getSessionType:function(){return this.sessionType},getConversation:function(){return this.conversation},getAllParticipants:function(){return this.participants},getAllSupportedParticipants:function(){},getAllUnSupportedParticipants:function(){},setSessionType:function(a){this._escalationService.setSessionType(this,a)},addParticipantsAddresses:function(a){return this._escalationService.addParticipantsAddresses(this,a)},addParticipants:function(a){return this._escalationService.addParticipants(this,a)},removeParticipantsAddresses:function(a){return this._escalationService.removeParticipantsAddresses(this,a)},removeParticipants:function(a){return this._escalationService.removeParticipants(this,a)},getParticipants:function(){return this.participants},start:function(){return this._escalationService.start(this)},setResourceStatus:function(b){if(!a.Base.Utils.isDefined(a.Services.Messaging.ResourceStatus[b]))throw new Error("Unknown ResourceStatus");this.resourceStatus=b,this._onResourceStatusChangedCallbacks.fire(this,b)},canEscalateForAllParticipants:function(){}},a.Services.Messaging.Escalation=c}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={addOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.add(a)},removeOnTypeChangedCallback:function(a){this._onTypeChangedCallbacks.remove(a)},addOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.add(a)},removeOnResourceStatusChangedCallback:function(a){this._onResourceStatusChangedCallbacks.remove(a)},addOnSessionTypeChangedSuccessCallback:function(a){this._onSessionTypeChangedSuccessCallbacks.add(a)},removeOnSessionTypeChangedSuccessCallback:function(a){this._onSessionTypeChangedSuccessCallbacks.remove(a)},addOnSessionTypeChangedFailedCallback:function(a){this._onSessionTypeChangedFailedCallbacks.add(a)},removeOnSessionTypeChangedFailedCallback:function(a){this._onSessionTypeChangedFailedCallbacks.remove(a)},addOnStartSuccessCallback:function(a){this._onStartSuccessCallbacks.add(a)},removeOnStartSuccessCallback:function(a){this._onStartSuccessCallbacks.remove(a)},addOnStartFailedCallback:function(a){this._onStartFailedCallbacks.add(a)},removeOnStartFailedCallback:function(a){this._onStartFailedCallbacks.remove(a)},addOnMessagingEscalationCapabilitiesChangedCallback:function(a){this._onMessagingEscalationCapabilitiesChangedCallbacks.add(a)},removeOnMessagingEscalationCapabilitiesChangedCallback:function(a){this._onMessagingEscalationCapabilitiesChangedCallbacks.remove(a)}};b.extend(a.Services.Messaging.Escalation.prototype,c)}(AvayaClientServices,jQuery),function(a,b){"use strict";var c={getStartCapability:function(){return this._startCapability},_recalculateStartCapability:function(){var b,c;b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this._startCapability._updateIfChanged(b,c)},getAddParticipantsCapability:function(){return this._addParticipantsCapability},_recalculateAddParticipantsCapability:function(){var b,c;b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED,this._addParticipantsCapability._updateIfChanged(b,c)},getRemoveParticipantsCapability:function(){return this._removeParticipantsCapability},_recalculateRemoveParticipantsCapability:function(){var b,c;this.resourceStatus===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeParticipantsCapability._updateIfChanged(b,c)},getUpdateSessionTypeCapability:function(){return this._updateSessionTypeCapability},_recalculateUpdateSessionTypeCapability:function(){var b,c;this.resourceStatus===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._updateSessionTypeCapability._updateIfChanged(b,c)},getRemoveCapability:function(){return this._removeCapability},_recalculateRemoveCapability:function(){var b,c;this.resourceStatus===a.Services.Messaging.ResourceStatus.DRAFT_UNSENT?(b=!0,c=a.Base.CapabilityDenialReason.CAPABILITY_NOT_DENIED):(b=!1,c=a.Base.CapabilityDenialReason.CAPABILITY_INVALID_STATE),this._removeCapability._updateIfChanged(b,c)}};b.extend(a.Services.Messaging.Escalation.prototype,c)}(AvayaClientServices,jQuery);

/* ---- File (4): avayaGlobal.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
     */
    makeLogger : function() {
        'use strict';
        console.info("Creating a logger");
        var logger = AvayaClientServices.Base.Logger;
        if (logger !== null) {
            logger.addLogger(console);
        } else {
            console.warn("AvayaClientServices were null!");
            logger = console;
        }
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
    }
};



/* ---- File (5): links.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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


/* ---- File (6): webChatConfig.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
    agentImage : 'global/vendor/presidio-avaya/agent.png',
    agentTypingImage : 'global/vendor/presidio-avaya/agent_typing.png',
    supervisorImage : 'global/vendor/presidio-avaya/supervisor.png',
    supervisorTypingImage : 'global/vendor/presidio-avaya/supervisor_typing.png',

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


/* ---- File (7): webChatLogon.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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


/* ---- File (8): webChatUI.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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


/* ---- File (9): webChatSocket.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
            
            var email = avayaGlobal.getSessionStorage("email");
            var user = avayaGlobal.getSessionStorage("firstName");
            var user_last = avayaGlobal.getSessionStorage("lastName");
            var phone = JSON.parse(avayaGlobal.getSessionStorage("phone"));            
            var users = JSON.parse(avayaGlobal.getSessionStorage("users"));

            chatSocket.loadTranscript();
            chatUI.reloadChatPanel();
			
            // 2019-04-26 - better to add a place holder "you navigated to xyz page"
			// webChat.writeResponse("Opening chat after page refresh", chatConfig.writeResponseClassSystem);
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
            transcript.push({ 
				textContent : messages[i].textContent, 
				className: messages[i].className,
				/* Added for embedded divs where textContent alone will not work */
				innerHTML: messages[i].innerHTML,
				tagName: messages[i].tagName
			});
        }
        avayaGlobal.setSessionStorage('transcript', JSON.stringify(transcript));
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
			console.log(webChat.messsages);
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


/* ---- File (10): estimatedWaitTime.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
				console.log('ewt retrun JSON is: ', json);
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
				// Removed till we work out the conflict with MSC Direct - they also have an API call and they conflict
				// $('.bottom_chat_btn').fadeOut(400);
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
			console.log('Reconnecting, no EWT requested');
            return;
        }

        // create the default one
        var attributes = createAttributeMap();
        services["1"].attributes = attributes;
        services["1"].priority = priority;
		console.log('Sending services to ewt with: ', services);

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



/* ---- File (11): webChat.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
	build: '3b',

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
    coBrowseIframe : null,
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
		console.log('webchat: Context ID  == workid ' + avayaGlobal.getSessionStorage('contextId'));

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
        var body = message.body, method = body.method;
        if (method === chatConfig.jsonMethodRequestChat) {
            webChat.notifyRequestChat(body);
        } else if (method === chatConfig.jsonMethodRouteCancel) {
            webChat.notifyRouteCancel();
        } else if (method === chatConfig.jsonMethodRequestNewParticipant) {
            webChat.notifyNewParticipant(body);
        } else if (method === chatConfig.jsonMethodRequestIsTyping) {
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
            // do nothing with pings. They just confirm that the
            // WebSocket is open.
        } else if (method === chatConfig.jsonMethodFileTransfer) {
            webChat.notifyFileTransfer(body);
        } else {
            throw new TypeError('Received notification with unknown method: '.concat(method));
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
            coBrowseUI.showCoBrowseIframe(url);

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

        var contentWindow = webChat.coBrowseIframe.contentWindow;
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
        console.log(leaveReason);

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
        var url = body.address;
        var filename = body.name;
        var timestamp = new Date().toLocaleString();
        var message = chatConfig.fileTransferMessageText;
		
		/*
		var dateMessage = agentname + ' (' + timestamp + ')';
		webChat.writeResponse(dateMessage, chatConfig.writeResponseClassAgentDate);
		*/
        
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
			console.log('Original logic block for calling close');
        }else{
			console.log('Criteria for close not met! Calling anyway');
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
		
		webChat.writeMessageBlock({
			timestamp: (new Date()).getTime(),
			displayName: webChat.g_user,
			message: message
		}, chatConfig.writeResponseClassSent);

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
                typingImage.src = (agent.type === 'supervisor_barge') ? chatConfig.supervisorImage
                        : chatConfig.agentImage;
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
        webChat.coBrowseIframe = document.getElementById('cobrowse');
    },


    ////////////////////////////////////////////////////////////////////////////
    // Subscribed Co-Browse iFrame Events
    ////////////////////////////////////////////////////////////////////////////

    onLoadCoBrowseIframe : function() {
        'use strict';

        var contentWindow = webChat.coBrowseIframe.contentWindow;
        var iFramedCoBrowse = contentWindow.coBrowse;
        var iFramedCoBrowseUI = contentWindow.coBrowseUI;

        if (iFramedCoBrowse !== undefined && iFramedCoBrowseUI !== undefined) {
            iFramedCoBrowseUI.addListener(webChat);
            iFramedCoBrowse.init(webChat.coBrowseSDKPath, avayaGlobal.log, [ webChat,
                    iFramedCoBrowseUI ], links.coBrowseHost);

            contentWindow.onbeforeunload = webChat.onBeforeUnloadCoBrowseIframe;
        }
    },

    onBeforeUnloadCoBrowseIframe : function() {
        'use strict';

        var contentWindow = webChat.coBrowseIframe.contentWindow;
        var iFramedCoBrowse = contentWindow.coBrowse;
        var iFramedCoBrowseUI = contentWindow.coBrowseUI;

        if (iFramedCoBrowse !== undefined && iFramedCoBrowseUI !== undefined) {
            iFramedCoBrowseUI.closeHangingDialogs();
        }
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

        var iFramedCoBrowse = webChat.coBrowseIframe.contentWindow.coBrowse;
        if (iFramedCoBrowse) {
            var hiddenElements = webChat.hideElements.concat(coBrowseUI.hiddenElements);
            iFramedCoBrowse.joinSession(webChat.g_user, webChat.coBrowseKey, hiddenElements);
        } else {
            // TODO: Handle error.
        }
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
        coBrowseUI.hideCoBrowseIframe();
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
		if(host.match(/quality\./)){
			this.cdnLocation = '//qacdn.mscdirect.com/';
		}else if(host.match(/dev\./)){
			this.cdnLocation = '//devcdn.mscdirect.com/';
		}else if(this.settings.cdnLocation){
			// allow for a custom specified CDN location say for local testing
			this.cdnLocation = this.settings.cdnLocation;
		}else{
			// production
			this.cdnLocation = '//cdn.mscdirect.com/';
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

        if(this.settings.initCobrowse){
			// Set Co-Browsing iFrame onLoad handler. Comment out if not using Co-Browsing.
			webChat.coBrowseIframe.onload = webChat.onLoadCoBrowseIframe;

			// Setup Co-Browsing instance on this page. Comment out if not using Co-Browsing
			coBrowseUI.addListener(webChat);
			webChat.initCoBrowse();
		}
		        
        // check if there was a chat in progress before reloading
        chatSocket.reloadAfterRefresh();
        
        ewt.requestEwt();
        chatLogon.saveAttributeCount();

        // If chat is in progress, prevent user from accidentally closing the page.
        // Can't override default message due to security restrictions
        // so the value returned here doesn't really matter.
        window.onbeforeunload = function() {
            if (webChat.initCalled) {
                chatSocket.setupRefresh();
				if(document.getElementById('outmessage').value.length){
					return "You will lose the message you are typing to the agent if you leave now.  Continue?";
				}
            }
        };

		window.onunload = function() {
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
							.attr('style', 'width: 200px; z-index: 1015; bottom: 0px; right: 20px; top: inherit; left: inherit;');
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

	$('.bottom_chat_btn').fadeOut(400);
	
	var width = Math.min( 475, $(window).width() - 20 );
	$('#chatPanel').dialog({
		width : width,
		dialogClass : 'fixedPosition presav-chatPanel',
		open: function(event, ui){
			console.log('dialog opened');

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
			
			//2019-04-29 - facing a bug where reloading the page, the panel opens in a different css top value.  Unable to solve, this attribute handles this.  You can remove it if you have a better understanding of why esp. jQuery dialog
			//string value
			localStorage.panelStartingTop = $('#chatPanel').parent().css('top');
			
		},
		close: function(event, ui){
			console.log('dialog closed');
			if (webSocket !== undefined ) {
				console.log('calling closePanel (1)');
				chatUI.closePanel(event);    
			}
			$('.bottom_chat_btn').fadeIn(400);
		},
	});	
	
	return false;
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}



/* ---- File (12): oceanaCoreData.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
                console.log(this.response);
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
				console.log('OCD: Context ID  after creation and add context ' + avayaGlobal.getSessionStorage('contextId'));
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


/* ---- File (13): customerJourneyCommon.js; compiled 2019-05-02 15:33:16 by /src/compile.php ---- */
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
        avayaGlobal.log = avayaGlobal.makeLogger();

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
