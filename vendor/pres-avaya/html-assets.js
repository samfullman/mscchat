/*
See /mscdirect-unminified.html for this string in actual HTML format
*/
var _AVAYA_HTML_ = 
'<!-- CHAT PANEL --> ' + 
'<div id="chatPanel" title="MSC Live Chat"> ' + 
    '<!-- Login form --> ' + 
    '<div id="chatForm"> ' + 
        '<div class="presav-chatInitLogo"> ' + 
            '<img src="images/msclogo.jpg"> ' + 
        '</div> ' + 
        '<div class="pres-chatInitInstructions"> ' + 
            'Please complete the following information to chat live now! ' + 
        '</div> ' + 
        '<div class="presav-notice"> ' + 
            '<sup class="presav-required">*</sup>Required field ' + 
        '</div> ' + 
        '<div class="formField"> ' + 
            '<div class="presav-w-50"> ' + 
                '<span id="firstNameLabel">First</span><br /> ' + 
                '<input type="text" id="user-chat" maxLength="10" placeholder="e.g. John" title="Max length 50 characters"> ' + 
            '</div> ' + 
            '<div class="presav-w-50"> ' + 
                '<span id="lastNameLabel">Last</span><br /> ' + 
                '<input type="text" id="user-chat-last" maxLength="10" placeholder="e.g. Smith" title="Max length 100 characters"> ' + 
            '</div> ' + 
        '</div> ' + 
        '<div class="formLabel presav-cb" id="emailLabel">E-mail</div> ' + 
        '<div class="formField"> ' + 
            '<input type="email" id="email-chat"  placeholder="e.g. m.smith@test.com"> ' + 
        '</div> ' + 
 '' + 
        '<div class="formLabel" id="phoneLabel">Phone</div> ' + 
        '<div class="formField"> ' + 
            '<div class="presav-w-50" style="width: 25%;"> ' + 
                '<input type="text" id="phone-country" placeholder="e.g +353" maxLength="10"> ' + 
            '</div> ' + 
            '<div class="presav-w-50" style="width: 33%;"> ' + 
                '<input type="text" id="phone-area" placeholder="e.g 011" maxLength="10" title="Area code. Numbers only" > ' + 
            '</div> ' + 
            '<div class="presav-w-50" style="width: 42%;"> ' + 
                '<input type="text" id="phone-chat" placeholder="e.g. 2112231" maxLength="32" title="Phone number. Numbers only"> ' + 
            '</div> ' + 
        '</div> ' + 
        '<!-- The Chat API requires this field. It will be used in a future release --> ' + 
        '<div class="formLabel addressClass">Address (optional)</div> ' + 
        '<div class="formField addressClass"> ' + 
            '<input type="text" id="address-chat" value=""> ' + 
        '</div> ' + 
        '<div class="formLabel presav-cb">I need help with...</div> ' + 
        '<div class="formField"> ' + 
            '<select id="reason"> ' + 
                '<option value="- Select One -" selected> - Select One -</option> ' + 
            '</select> ' + 
        '</div> ' + 
        '<div class="formLabel">Comments</div> ' + 
        '<div class="formField"> ' + 
            '<input type="text" id="pageTopic" maxLength="255" title="Denotes a topic for the contact" placeholder="e.g. Tool specifications"> ' + 
        '</div> ' + 
        '<div class="presav-w-50"> ' + 
            '<button id="openbutton-chat" onclick="chatLogon.gatherDetails()" class="button">Chat Now</button> ' + 
        '</div> ' + 
        '<div class="presav-w-50" style="margin-top: 12px;"> ' + 
            '<label class="presav-checkbox-label"><input type="checkbox" id="transcript-chat"> Email me the chat transcript</label> ' + 
        '</div> ' + 
        '<div id="loginErrorsDiv"></div> ' + 
        '<div class="formLabel"></div> ' + 
        '<div class="presav-chatPostInstructions"> ' + 
            'Chat is available Monday through Friday from 8:00AM - 8:00PM EST.  International Customers: For prompt service please call our dedicated International Customer Care team at 1-888-880-2048Call: 1-888-880-2048 (within the United States) or 001-248-200-4420 (outside the United States).  Thank you. ' + 
        '</div> ' + 
    '</div> ' + 
    '<!-- The chat interface, or what the user actually uses to chat with an agent --> ' + 
    '<div id="chatInterface"> ' + 
        '<!-- messages --> ' + 
        '<div id="messages"></div> ' + 
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
            '<input type="text" id="outmessage" class="chatField" placeholder="Type your message here"> ' + 
            '<button type="button" id="sendbutton-chat" onclick="webChat.sendChatMessage()" class="button">Send</button> ' + 
            '<button type="button" id="closebutton-chat" onclick="webChat.quitChat()" class="button">Close</button> ' + 
        '</div> ' + 
    '</div> ' + 
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
'</div> ';