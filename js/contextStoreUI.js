/**
 *  Copyright 2018 Avaya Inc. All Rights Reserved.
 *
 * Usage of this source is bound to the terms described in
 * licences/License.txt
 *
 * Avaya - Confidential & Proprietary. Use pursuant to your signed agreement or
 * Avaya Policy
 * 
 * Handles UI-specific functionality for Customer Journey (e.g. displaying attributes in a free-floating window).
 */

(function(cjc, ocds, csui, $j) {
    'use strict';
    var helpDialogId = '#contextDisplayDialog';
    var ocdsTextId = '#ocdsAttributes';

    var subscribePanelId = '#subscribePanel';
    var subscribeEmailId = '#subscribeEmail';
    var subscribeEntryId = '#subscribeInputDiv';
    var subscribeControlsId = '#subscribeControls';
    var subscribeResultsId = '#subscribeStatus';

    /**
     * Private function to create the help dialog.
     */
    var createHelpDialog = function() {
        var dialog = $j(helpDialogId).length;
        if (dialog === 0) {
            avayaGlobal.log.info('CustomerJourney: Help dialog does not exist');
            dialog = document.createElement('div');
            dialog.id = helpDialogId.substring(1);
            document.body.appendChild(dialog);

            var ocdsText = document.createElement('div');
            ocdsText.id = ocdsTextId.substring(1);
            dialog.appendChild(ocdsText);
        }
    };

    /**
     * Format the attributes in rows with an indent.
     * @param attributes as a JSON object
     */
    var formatAttributes = function(attr) {
        var string = '';
        for ( var key in attr) {
            // filter properties before acting on them.
            if (attr.hasOwnProperty(key)) {
                string += '\t' + key + ': [' + attr[key] + ']\n';
            }

        }
        return string;
    };

    var createFormattedText = function() {

        if (ocds !== undefined) {
            $j(ocdsTextId).text('Oceana Core Data\n' + formatAttributes(ocds.attributes));
        }
    };

    /**
     * Set up the UI properly. Uses a zero-millisecond timeout to "pause" it until the rendering has finished.
     */
    var setupUI = function() {
        setTimeout(function() {
            $j('.button').button();
        }, 0);
    };

    setupUI();

    /**
     * Add a function to the contextStoreUI object to create the dialog.
     */
    csui.showAttributes = function() {
        createHelpDialog();
        createFormattedText();
        $j(helpDialogId).dialog({
            width : 300,
            position : {
                my : 'top right',
                at : 'top+220',
                of : $j('#contextConfigLink'),
                collision : 'fit'
            }
        });
    };

    /**
     * Allows the user to suscribe.
     */
    csui.subscribe = function() {
        var email = $j(subscribeEmailId).val();
        if (avayaGlobal.isStringEmpty(email)) {
            $j('#subscribeStatus').text('Please enter your email address!');
        } else {
            cjc.requestCustomerId('email', email);
        }
    };

    csui.hideSubscribeDialog = function() {
        $j(subscribePanelId).dialog('close');
    };

    csui.showEmailDiv = function() {
        $j(subscribeEntryId).show();
        $j(subscribeControlsId).hide();
    };

    /**
     * Create the subscribe dialog. This will be positioned 150 pixels below the subscribe link.
     */
    csui.createSubscribeDialog = function() {
        $j(subscribePanelId).dialog({
            width : '300px',
            height : 'auto',
            create : function() {
                $j(this).parent().css({
                    'position' : 'fixed'
                });
            },
            position : {
                my : 'top left',
                at : 'top+150',
                of : $j('#subscribeLink'),
                collision : 'fit'
            }
        });
    };

    csui.setSubscribeStatus = function(text) {
        $j(subscribeResultsId).text(text);
    };

    /**
     * Clean up the subscribe panel.
     */
    csui.cleanSubscribePanel = function() {
        $j(subscribeEntryId).children().hide();
        $j(subscribeResultsId).show();
        setTimeout(csui.hideSubscribeDialog, 2000);
    };

    return csui;

})(window.customerJourneyCommon, window.oceanaCoreData,
        window.contextStoreUI = window.contextStoreUI || {}, window.jQuery.noConflict());
