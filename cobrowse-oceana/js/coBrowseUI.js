/* global coBrowse */

/**
 * @license coBrowse.js<br>
 *          Copyright 2018 Avaya Inc. All Rights Reserved.<br>
 *          <br>
 *          Usage of this source is bound to the terms described in
 *          licences/License.txt<br>
 *          <br>
 *          Avaya - Confidential & Proprietary. <br>
 *          Use pursuant to your signed agreement or Avaya Policy
 */

/**
 * Sample user interface implemented using jQuery UI that subscribes to the 
 * coBrowse object for notifications.
 * 
 * @type Object
 */
var coBrowseUI = {

    // Store the listeners interested in UI events.
    listeners: [],

    targetDocument: null,
    targetDiv: null,

    isIframed: false,

    // UI element IDs.
    proactiveJoinDialogId: '#proactiveJoinDialog',
    proactiveJoinTextId: 'proactiveJoinText',
    proactiveJoinNameInputId: 'proactiveJoinNameInput',
    proactiveJoinSessionKeyInputId: 'proactiveJoinSessionKeyInput',

    requestControlDialogId: '#requestControlDialog',
    requestControlTextId: 'requestControlText',

    coBrowseDialogId: '#coBrowseDialog',
    coBrowseTextId: 'coBrowseText',

    errorDialogId: '#errorDialog',
    errorTextId: 'errorText',
    
    hiddenPostFix: 'Hidden',
    hiddenElements: [
        'proactiveJoinDialogHidden',
        'requestControlDialogHidden',
        'coBrowseDialogHidden',
        'errorDialogHidden'
    ],

    // Button IDs used on the dialogs.
    joinButtonId: 'join-button',
    pauseButtonId: 'pause-button',
    stopButtonId: 'stop-button',
    inactiveStopId: 'inactive-stop-button',
    inactiveContinueId: 'inactive-continue-button',
    closeButtonId: 'close-button',
    grantButtonId: 'grant-button',
    denyButtonId: 'deny-button',
    revokeButtonId: 'revoke-button',

    // Image IDs used on the dialogs.
    statusImageId: '#statusImage',
    statusImage: '<img src="images/cobrowse/green.png" id="statusImage" class="status-image" />',
    redStatus: 'images/cobrowse/red.png',
    greenStatus: 'images/cobrowse/green.png',
    orangeStatus: 'images/cobrowse/orange.png',

    // iFrame associated IDs.
    coBrowseIframeWrapper: '.AvayaCoBrowseWrapper',
    coBrowseIframeId: '#cobrowse',

    // Element ID associated with the "Show Co-Browse" link.
    showCoBrowseLinkDivId: '#showCoBrowse',

    // Inactivity timer settings.
    inactiveCount: 0,
    inactiveTimer: null,
    inactiveLimit: 60,
    isInactiveClose: false,
    isInactiveContinueOpen: false,

    /**
     * Setups up the Co-Browse UI on page it is loaded from. If it is loaded in 
     * an iFrame the UI controls will be displayed in the top most document.
     * 
     * If the required DIVs for the dialogs do not exist on the page they will
     * be created by this function.
     * 
     * @returns {undefined}
     */
    setup: function () {
        'use strict';

        console.log('setup');
        

        // Get the top most document.
        try {
            coBrowseUI.targetDocument = window.top.document;
            coBrowseUI.isIframed = window.top !== window.self;
        } catch (e) { // May be thrown in an iFrame on some browsers if in an iFrame.
            coBrowseUI.targetDocument = parent.document; // Assumes iFrame is one level deep.
            coBrowseUI.isIframed = true;
        }

        // Solution for issue with jQuery getting unloaded from the 
        // iFrame and leaving broken dialogs.
        window.addEventListener('unload', coBrowseUI.closeHangingDialogs);

        coBrowseUI.targetDiv = coBrowseUI.targetDocument.body;

        // Check for the required DIVs on each page, if they exist already tear
        // them down and recreate them to ensure we have a clean state.
        try {
            console.log('Creating required dialogs.');

            var element = $(coBrowseUI.proactiveJoinDialogId, coBrowseUI.targetDocument).length;
			if (element === 1) {
                // Already exists, tear it down and recreate.
                $(coBrowseUI.proactiveJoinDialogId, coBrowseUI.targetDocument).remove();
            }
            coBrowseUI.addProactiveJoinDialog();

            element = $(coBrowseUI.requestControlDialogId, coBrowseUI.targetDocument).length;
            if (element === 1) {
                // Already exists, tear it down and recreate.
                $(coBrowseUI.requestControlDialogId, coBrowseUI.targetDocument).remove();
            }
            coBrowseUI.addRequestControlDialog();

            element = $(coBrowseUI.coBrowseDialogId, coBrowseUI.targetDocument).length;
            if (element === 1) {
                // Already exists, tear it down and recreate.
                $(coBrowseUI.coBrowseDialogId, coBrowseUI.targetDocument).remove();
            }
            coBrowseUI.addCoBrowseDialog();

            element = $(coBrowseUI.errorDialogId, coBrowseUI.targetDocument).length;
            if (element === 1) {
                // Already exists, tear it down and recreate.
                $(coBrowseUI.errorDialogId, coBrowseUI.targetDocument).remove();
            }
            coBrowseUI.addErrorDialog();
            
            // hide the JavaScript header
            $('#cobrowseJavaScriptAlertHeader').hide();

            console.log('Finished creating required dialogs');
        } catch (err) {
            console.error('Could not create the required dialogs.');
            console.error(err);
        }
    },

    /**
     * Adds a listener that wishes to be notified of UI events.
     * 
     * @param {Object} listener - an object that wants to subscribe to events
     * @returns {undefined}
     */
    addListener: function (listener) {
        'use strict';

        if (listener) {
            coBrowseUI.listeners.push(listener);
        }
    },

    /**
     * Adds to the ProactiveJoinDialog used for Voice Co-Browse to the DOM.
     * 
     * @returns {undefined}
     */
    addProactiveJoinDialog: function () {
        'use strict';

        var proactiveJoinDialog = coBrowseUI.targetDocument
                .createElement('div');
        proactiveJoinDialog.id = coBrowseUI.proactiveJoinDialogId.substring(1);

        var proactiveJoinText = coBrowseUI.targetDocument.createElement('div');
        proactiveJoinText.id = coBrowseUI.proactiveJoinTextId;

        proactiveJoinDialog.appendChild(proactiveJoinText);
        coBrowseUI.targetDiv.appendChild(proactiveJoinDialog);
    },

    /**
     * Adds the RequestControlDialog used for agent control requests to the DOM.
     * 
     * @returns {undefined}
     */
    addRequestControlDialog: function () {
        'use strict';

        var requestControlDialog = coBrowseUI.targetDocument
                .createElement('div');
        requestControlDialog.id = coBrowseUI.requestControlDialogId
                .substring(1);

        var requestControlText = coBrowseUI.targetDocument.createElement('div');
        requestControlText.id = coBrowseUI.requestControlTextId;

        requestControlDialog.appendChild(requestControlText);
        coBrowseUI.targetDiv.appendChild(requestControlDialog);
    },

    /** 
     * Adds the standard Pause/Stop dialog to the DOM.
     * 
     * @returns {undefined}
     */
    addCoBrowseDialog: function () {
        'use strict';

        var coBrowseDialog = coBrowseUI.targetDocument.createElement('div');
        coBrowseDialog.id = coBrowseUI.coBrowseDialogId.substring(1);

        var coBrowseText = coBrowseUI.targetDocument.createElement('div');
        coBrowseText.id = coBrowseUI.coBrowseTextId;

        coBrowseDialog.appendChild(coBrowseText);
        coBrowseUI.targetDiv.appendChild(coBrowseDialog);
    },

    /**
     * Adds the generic info/error dialog to the DOM.
     * 
     * @returns {undefined}
     */
    addErrorDialog: function () {
        'use strict';

        var errorDialog = coBrowseUI.targetDocument.createElement('div');
        errorDialog.id = coBrowseUI.errorDialogId.substring(1);

        var errorText = coBrowseUI.targetDocument.createElement('div');
        errorText.id = coBrowseUI.coBrowseTextId;

        errorDialog.appendChild(errorText);
        coBrowseUI.targetDiv.appendChild(errorDialog);
    },

    /**
     * Cleans up any remaining dialogs and informs any listeners of the event.
     * 
     * @returns {undefined}
     */
    cleanUp: function () {
        'use strict';
        
        console.log('cleanUp');

        // reset inactive close
        coBrowseUI.isInactiveClose = false;

        if (coBrowseUI.checkDialogOpen(coBrowseUI.requestControlDialogId) === true) {
            coBrowseUI.destroyDialog(coBrowseUI.requestControlDialogId);
        }

        if (coBrowseUI.checkDialogOpen(coBrowseUI.coBrowseDialogId) === true) {
            coBrowseUI.destroyDialog(coBrowseUI.coBrowseDialogId);
        }

        // Remove the dialog DIVs.
        try {
            console.log('Removing dialogs to ensure clean state.');

            var element = $(coBrowseUI.requestControlDialogId, coBrowseUI.targetDocument).length;
            if (element === 1) {
                $(coBrowseUI.requestControlDialogId, coBrowseUI.targetDocument).remove();
            }
            element = $(coBrowseUI.coBrowseDialogId, coBrowseUI.targetDocument).length;
            if (element === 1) {
                $(coBrowseUI.coBrowseDialogId, coBrowseUI.targetDocument).remove();
            }
            element = $(coBrowseUI.errorDialogId, coBrowseUI.targetDocument).length;
            if (element === 1) {
                $(coBrowseUI.errorDialogId, coBrowseUI.targetDocument).remove();
            }
        } catch (err) {
            console.error('Could not remove dialog DIVs!');
            console.error(err);
        }

        coBrowseUI.fireCleanUp();
    },

    ////////////////////////////////////////////////////////////////////////////
    // Co-Browse Event Triggers
    ////////////////////////////////////////////////////////////////////////////

    /**
     * Fires the cleanup event notifiying any listeners.
     * 
     * @returns {undefined}
     */
    fireCleanUp: function () {
        'use strict';
        
        console.log('fireCleanUp');

        coBrowseUI.listeners.forEach(function (listener) {
            if (listener.onCoBrowseUICleanUp !== undefined) {
                listener.onCoBrowseUICleanUp(coBrowseUI);
            }
        });
    },

    /**
     * Fires the JoinRequest event for Voice Co-Browse and notifies any listeners.
     * 
     * @returns {undefined}
     */
    fireJoinRequest: function () {
        'use strict';
        
        console.log('fireJoinRequest');

        var name = $('#' + coBrowseUI.proactiveJoinNameInputId,
                coBrowseUI.targetDocument).val();
        var coBrowseKey = $('#' + coBrowseUI.proactiveJoinSessionKeyInputId,
                coBrowseUI.targetDocument).val();

        // Basic check of input.
        if (!name) {
            coBrowseUI.createInfoDialog('Invalid Input',
                    'Please enter a name to join the Co-Browse session with.',
                    coBrowseUI.closeInfoDialog, true);
            return;
        }
        if (!coBrowseKey) {
            coBrowseUI.createInfoDialog('Invalid Input',
                    'Please enter a Co-Browse Session Key.',
                    coBrowseUI.closeInfoDialog, true);
            return;
        } else {
            // Get rid of any white spaces to make matching easier.
            coBrowseKey = coBrowseKey.replace(/\s+/g, '');

            var regex = /\b\d{8}\b/;
            var result = coBrowseKey.match(regex);

            if (!result) {
                coBrowseUI
                        .createInfoDialog(
                                'Invalid Input',
                                'Please enter a valid Co-Browse Session Key (e.g. "XXXX XXXX").',
                                coBrowseUI.closeInfoDialog, true);
                return;
            }

            if (coBrowseKey[4] !== ' ') {
                // They forgot the space in the key.
                coBrowseKey = [coBrowseKey.slice(0, 4), ' ',
                    coBrowseKey.slice(4)].join('');
            }
        }

        coBrowseUI.listeners
                .forEach(function (listener) {
                    if (listener.onCoBrowseUIJoinRequest !== undefined) {
                        listener.onCoBrowseUIJoinRequest(coBrowseUI, name,
                                coBrowseKey);
                    }
                });
    },

    /**
     * Fires the UIJoinFailure which tells any listeners that UI invoked join failed.
     * 
     * @returns {undefined}
     */
    fireCoBrowseUIJoinFailure: function () {
        'use strict';
        
        console.log('fireCoBrowseUIJoinFailure');

        coBrowseUI.closeDialog(coBrowseUI.errorDialogId);

        coBrowseUI.listeners.forEach(function (listener) {
            if (listener.onCoBrowseUIJoinFailure !== undefined) {
                listener.onCoBrowseUIJoinFailure(coBrowseUI);
            }
        });
    },

    ////////////////////////////////////////////////////////////////////////////
    // Subscribed Co-Browse Events
    ////////////////////////////////////////////////////////////////////////////

    /**
     * Fired when the coBrowse object has loaded the required dependencies.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseReady: function (source) {
        'use strict';
        
        console.log('onCoBrowseReady');
    },

    /**
     * Fired when a connection to the Co-Browse session has been established.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseConnection: function (source) {
        'use strict';

        console.log('onCoBrowseConnection');

        var data = source.coBrowseInstance.getCustomerData();
        if (data.cobrowseState !== undefined) {
            // Close all possible open dialogs.
            coBrowseUI.closeDialog(coBrowseUI.errorDialogId);
            coBrowseUI.closeDialog(coBrowseUI.coBrowseDialogId);
            coBrowseUI.closeDialog(coBrowseUI.requestControlDialogId);

            // Rebuild the user interface between pages.
            if (data.agentControlState === "pending") {
                coBrowseUI.createRequestControlDialog(true);
            } else if (data.agentControlState === "true") {
                coBrowseUI.createRevokeControlDialog(true);
            } else if (data.cobrowseState === "Paused") {
                coBrowseUI.onCoBrowsePauseSuccess(source);
                coBrowseUI.openDialog(coBrowseUI.coBrowseDialogId);
            } else { // Default state.
                coBrowseUI.openDialog(coBrowseUI.coBrowseDialogId);
            }
        }

        // TODO - test if fixed
        /*	$(coBrowseUI.statusImageId, coBrowseUI.targetDocument).attr('src',
         coBrowseUI.greenStatus);*/
    },

    onCoBrowseConnectionFailure: function (source, error) {
        'use strict';

        console.log('onCoBrowseConnectionFailure');

        coBrowseUI.closeInfoDialog(); // Close it if already open, check performed in closeInfoDialog.

        // Let the user know of the failure.
        coBrowseUI.createInfoDialog('Co-Browse Connection', 'Interrupted, attempting reconnect.', coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when the coBrowse is rebuilding, normally this happens when moving 
     * between pages.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseRebuild: function (source) {
        'use strict';

        console.log('onCoBrowseRebuild');

        // Reset the state of these dialogs.
        coBrowseUI.createPauseStopDialog(false);

        coBrowseUI
                .createInfoDialog(
                        'Co-Browse Status',
                        'Reconnection in progress.',
                        coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when a Co-Browse session has been closed. Updates the UI to reflect
     * this state.
     * 
     * @param {Object} source - the object that generated this event
     * @param {string} title - title to be used on the closing dialog
     * @param {string} text - text to be displayed on the closing dialog
     * @returns {undefined}
     */
    onCoBrowseSessionClose: function (source, title, text) {
        'use strict';
        
        console.log('onCoBrowseSessionClose');

        coBrowseUI.closeHangingDialogs();

        if (coBrowseUI.isInactiveContinueOpen) {
            coBrowseUI.destroyDialog(coBrowseUI.errorDialogId);
        }

        coBrowseUI.closeDialog(coBrowseUI.coBrowseDialogId);
        coBrowseUI.createCloseDialog(title, text, true);
    },

    /**
     * Fired when a control request has been received.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseControlRequest: function (source) {
        'use strict';
        
        console.log('onCoBrowseControlRequest');

        coBrowseUI.closeDialog(coBrowseUI.coBrowseDialogId);
        coBrowseUI.createRequestControlDialog(true);
    },

    /**
     * Fired when the other party has stopped controlling the session.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseControlRelease: function (source) {
        'use strict';
        
        console.log('onCoBrowseControlRelease');

        coBrowseUI.closeDialog(coBrowseUI.requestControlDialogId);
        coBrowseUI.openDialog(coBrowseUI.coBrowseDialogId);
    },

    /**
     * Fired when a succcessful join has taken place, makes the call to display
     * the Pause/Stop dialog.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseJoinSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowseJoinSuccess');

        if (!coBrowseUI.isIframed) {
            coBrowseUI.closeDialog(coBrowseUI.proactiveJoinDialogId);
        }

        coBrowseUI.createPauseStopDialog(true);
    },

    /**
     * Fired when a join request has failed.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the failure
     * @returns {undefined}
     */
    onCoBrowseJoinFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowseJoinFailure');

        coBrowseUI.createInfoDialog('Join Failed', error + '.',
                coBrowseUI.fireCoBrowseUIJoinFailure, true);
    },

    /**
     * Fired when control has been successfully granted to the other party.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseGrantControlSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowseGrantControlSuccess');

        coBrowseUI.closeDialog(coBrowseUI.requestControlDialogId);
        coBrowseUI.createRevokeControlDialog(true);
    },

    /**
     * Fired when a grant control request fails.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the failure
     * @returns {undefined}
     */
    onCoBrowseGrantControlFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowseGrantControlFailure');

        coBrowseUI.createInfoDialog('Grant Control Failed', error + '.',
                coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when a control request has been successfully denined.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseDenyControlSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowseDenyControlSuccess');

        coBrowseUI.closeDialog(coBrowseUI.requestControlDialogId);
        coBrowseUI.openDialog(coBrowseUI.coBrowseDialogId);
    },

    /**
     * Fired when a deny of control has failued.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the failure
     * @returns {undefined}
     */
    onCoBrowseDenyControlFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowseDenyControlFailure');

        coBrowseUI.createInfoDialog('Deny Control Failed', error + '.',
                coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when a revoke has been successful.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseRevokeControlSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowseRevokeControlSuccess');

        coBrowseUI.closeDialog(coBrowseUI.requestControlDialogId);
        coBrowseUI.openDialog(coBrowseUI.coBrowseDialogId);
    },

    /**
     * Fired when a request to revoke control has failed.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the failrue
     * @returns {undefined}
     */
    onCoBrowseRevokeControlFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowseRevokeControlFailure');

        coBrowseUI.createInfoDialog('Revoke Control Failed', error + '.',
                coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when the session has been successfully paused.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowsePauseSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowsePauseSuccess');

        $('#' + coBrowseUI.pauseButtonId, coBrowseUI.targetDocument).button(
                'option', 'label', 'Resume');
        $(coBrowseUI.statusImageId, coBrowseUI.targetDocument).attr('src',
                coBrowseUI.orangeStatus);
    },

    /**
     * Fired when a pause request has failed.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the error
     * @returns {undefined}
     */
    onCoBrowsePauseFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowsePauseFailure');

        coBrowseUI.createInfoDialog('Pause Failed', error + '.',
                coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when a request to resume the session has been successful.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseResumeSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowseResumeSuccess');

        $('#' + coBrowseUI.pauseButtonId, coBrowseUI.targetDocument).button(
                'option', 'label', 'Pause');
        $(coBrowseUI.statusImageId, coBrowseUI.targetDocument).attr('src',
                coBrowseUI.greenStatus);
    },

    /**
     * Fired when a request to resume the session has failed.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the failure
     * @returns {undefined}
     */
    onCoBrowseResumeFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowseResumeFailure');

        coBrowseUI.createInfoDialog('Resume Failed', error + '.',
                coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when a request to stop the session has been successful.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    onCoBrowseStopSuccess: function (source) {
        'use strict';
        
        console.log('onCoBrowseStopSuccess');
        
        // timeout close button
        if (!coBrowseUI.isInactiveClose) {
            coBrowseUI.cleanUp();
        }
    },

    /**
     * Fired when a request to stop the session has failed.
     * 
     * @param {Object} source - the object that generated this event
     * @param {Object} error - cause of the failure
     * @returns {undefined}
     */
    onCoBrowseStopFailure: function (source, error) {
        'use strict';
        
        console.log('onCoBrowseStopFailure');

        coBrowseUI.createInfoDialog('Stop Failed', error + '.',
                coBrowseUI.closeInfoDialog, true);
    },

    /**
     * Fired when a the session has become inactive.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    fireOnCoBrowseInactive: function (source) {
        'use strict';
        coBrowseUI.createInactivityDialog(true);
        coBrowseUI.startInactivityLocalTimer();
    },

    ////////////////////////////////////////////////////////////////////////////
    // Inactivity Functions
    ////////////////////////////////////////////////////////////////////////////

    /**
     * Stops the Co-Browse inactive timer.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    stopOnCoBrowseInactive: function (source) {
        'use strict';

        coBrowseUI.stopInactivityLocalTimer();
    },

    /**
     * Stops the inactivity timer and clears the interval.
     * 
     * @returns {undefined}
     */
    stopInactivityLocalTimer: function () {
        'use strict';

        if (coBrowseUI.inactiveTimer !== null) {
            clearInterval(coBrowseUI.inactiveTimer);
        }

        coBrowseUI.inactiveCount = 0;
    },

    /**
     * Stops the session when the timeout has been reached an cleans up any
     * open dialogs.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    stopSessionWithTidyUp: function (source) {
        'use strict';

        coBrowseUI.isInactiveContinueOpen = false;
        var reason = "inactive_timeout";
        var dialog = coBrowseUI.errorDialogId;
        coBrowse.updateIdleTimer(coBrowseUI.inactiveCount);
        coBrowse.stopSessionWithReason(reason);
        coBrowseUI.closeDialog(dialog);
        coBrowseUI.stopInactivityLocalTimer();
    },

    /**
     * Restarts the inactivity timer on the page.
     * 
     * @param {Object} source - the object that generated this event
     * @returns {undefined}
     */
    restartInactivityTimer: function (source) {
        'use strict';

        coBrowseUI.isInactiveContinueOpen = false;

        if (!coBrowseUI.checkDialogOpen(coBrowseUI.requestControlDialogId)) {
            coBrowseUI.openDialog(coBrowseUI.coBrowseDialogId);
        }

        var dialog = coBrowseUI.errorDialogId;
        coBrowse.updateIdleTimer(coBrowseUI.inactiveCount);
        coBrowseUI.closeDialog(dialog);
        coBrowseUI.stopInactivityLocalTimer();
    },

    /**
     * Starts the Inactivity timer, if there is not activity on the session
     * then the dialog will appear to the user.
     * 
     * Resets the timer if the there is already a value.
     * 
     * @returns {undefined}
     */
    startInactivityLocalTimer: function () {
        'use strict';

        if (coBrowseUI.inactiveTimer !== null) {
            clearInterval(coBrowseUI.inactiveTimer);
        }

        coBrowseUI.inactiveTimer = setInterval(function () {
            coBrowseUI.inactiveCount = coBrowseUI.inactiveCount + 1;
            if (coBrowseUI.inactiveCount >= coBrowseUI.inactiveLimit) {
                coBrowseUI.isInactiveClose = true;
                coBrowseUI.stopSessionWithTidyUp(coBrowseUI.errorDialogId);
                coBrowseUI.createInfoDialog('Cobrowse idle Timeout',
                        'The Co-browse session has been closed.',
                        coBrowseUI.closeInfoDialog, true);
            }
        }, 1000);
    },

    ///////////////////////////////////////////////////////////////////////////
    // UI Dialog Functions
    ////////////////////////////////////////////////////////////////////////////

    /**
     * Closes the generic info/error dialog.
     * 
     * @returns {undefined}
     */
    closeInfoDialog: function () {
        'use strict';

        coBrowseUI.closeDialog(coBrowseUI.errorDialogId);
    },

    /**
     * Removes the inactive warning dialog.
     * 
     * @returns {undefined}
     */
    removeInactiveCloseDialog: function () {
        coBrowseUI.destroyDialog(coBrowseUI.errorDialogId);
        coBrowseUI.cleanUp();
    },

    /**
     * Creates an instance of the Info dialog used for info and error notifications.
     * 
     * @param {string} title - title to display on the info dialog
     * @param {string} text - text to display on the info dialog
     * @param {Object} callback - function to invoke on close button click
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createInfoDialog: function (title, text, callback, autoOpen) {
        'use strict';

        if ($(coBrowseUI.errorDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addErrorDialog();
        }

        var isModal = true;
        var buttons = [];

        if (coBrowseUI.isInactiveClose) {
            buttons.push(coBrowseUI.createButton(coBrowseUI.closeButtonId,
                    'Close', coBrowseUI.removeInactiveCloseDialog
                    .bind(coBrowseUI)));
        } else {
            buttons.push(coBrowseUI.createButton(coBrowseUI.closeButtonId,
                    'Close', callback.bind(coBrowseUI)));
        }

        coBrowseUI.showDialog(coBrowseUI.errorDialogId, text, title, isModal, buttons, coBrowseUI.errorDialogId, null, null, false, autoOpen);
    },

    /**
     * Creates a instance of the Inactivity dialog.
     * 
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createInactivityDialog: function (autoOpen) {
		'use strict';
		
		if ($(coBrowseUI.errorDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addErrorDialog();
        }

        //TODO - hide grant/deny dialog show later
        var text = 'Do you wish to continue?.';
        var title = 'Co-Browse Inactive';
        var isModal = true;
        var buttons = [];
        var dialog = coBrowseUI.errorDialogId;
        coBrowseUI.isInactiveContinueOpen = true;
        buttons.push(coBrowseUI.createButton(coBrowseUI.inactiveContinueId,
                'Yes', coBrowseUI.restartInactivityTimer.bind(coBrowseUI)));

        buttons.push(coBrowseUI.createButton(coBrowseUI.inactiveStopId, 'No',
                coBrowseUI.stopSessionWithTidyUp.bind(coBrowseUI)));

        coBrowseUI.closeDialog(coBrowseUI.coBrowseDialogId);

        coBrowseUI.showDialog(dialog, text, title, isModal, buttons, '', null,
                null, false, autoOpen);
    },

    /**
     * Creates a instance of the ProactiveJoin dialog used for Voice.
     * 
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createProactiveJoinDialog: function (autoOpen) {
        'use strict';

		if ($(coBrowseUI.proactiveJoinDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addProactiveJoinDialog();
        }

        var text = '';
        var title = 'Join Co-browse';
        var isModal = false;
        var buttons = [];
        buttons.push(coBrowseUI.createButton(coBrowseUI.joinButtonId, 'Join',
                coBrowseUI.fireJoinRequest.bind(coBrowseUI)));

        var proactiveJoinNameInput = coBrowseUI.targetDocument
                .createElement('input');
        proactiveJoinNameInput.id = coBrowseUI.proactiveJoinNameInputId;
        proactiveJoinNameInput.type = 'text';
        proactiveJoinNameInput.size = 20;
        proactiveJoinNameInput.placeholder = 'Your Name';
        proactiveJoinNameInput.className = 'join-field';

        var proactiveJoinSessionKeyInput = coBrowseUI.targetDocument
                .createElement('input');
        proactiveJoinSessionKeyInput.id = coBrowseUI.proactiveJoinSessionKeyInputId;
        proactiveJoinSessionKeyInput.type = 'text';
        proactiveJoinSessionKeyInput.size = 20;
        proactiveJoinSessionKeyInput.placeholder = 'SESSION KEY';
        proactiveJoinSessionKeyInput.className = 'join-field';

        var children = [proactiveJoinNameInput, proactiveJoinSessionKeyInput];

        coBrowseUI.showDialog(coBrowseUI.proactiveJoinDialogId, text, title, isModal, buttons, coBrowseUI.proactiveJoinDialogId, null, children, true, autoOpen);
    },

    /**
     * Creates an instance of the Pause/Stop dialog.
     * 
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createPauseStopDialog: function (autoOpen) {
        'use strict';

        if ($(coBrowseUI.coBrowseDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addCoBrowseDialog();
        }

        var text = 'Co-Browsing is in progress.';
        var title = 'Connected to Co-Browse';
        var isModal = false;
        var buttons = [];
        buttons.push(coBrowseUI.createButton(coBrowseUI.pauseButtonId, 'Pause', coBrowse.togglePause.bind(coBrowse)));
        buttons.push(coBrowseUI.createButton(coBrowseUI.stopButtonId, 'Stop', coBrowse.stopSession.bind(coBrowse)));

        coBrowseUI.showDialog(coBrowseUI.coBrowseDialogId, text, title, isModal, buttons, coBrowseUI.coBrowseDialogId, coBrowseUI.statusImage, null, false, autoOpen);

        $(coBrowseUI.statusImageId, coBrowseUI.targetDocument).attr('src',
                coBrowseUI.greenStatus);
    },

    /**
     * Creates an instance of the close dialog.
     * 
     * @param {string} title - title to use on the close dialog
     * @param {string} text - text to use on the close dialog
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createCloseDialog: function (title, text, autoOpen) {
        'use strict';

        if ($(coBrowseUI.coBrowseDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addCoBrowseDialog();
        }

        var isModal = true;
        var buttons = [];
        buttons.push(coBrowseUI.createButton(coBrowseUI.closeButtonId, 'Close',
                coBrowseUI.cleanUp.bind(coBrowseUI)));

        coBrowseUI.showDialog(coBrowseUI.coBrowseDialogId, text, title, isModal, buttons, coBrowseUI.coBrowseDialogId, coBrowseUI.statusImage, null, false, autoOpen);
    },

    /**
     * Creates an instance of the RequestControl.
     * 
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createRequestControlDialog: function (autoOpen) {
        'use strict';

        if ($(coBrowseUI.requestControlDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addRequestControlDialog();
        }

        var text = 'The Agent would like to control your web page.';
        var title = 'Co-Browse Control Request';
        var isModal = true;
        var buttons = [];
        buttons.push(coBrowseUI.createButton(coBrowseUI.grantButtonId, 'Grant',
                coBrowse.grantControl.bind(coBrowse)));
        buttons.push(coBrowseUI.createButton(coBrowseUI.denyButtonId, 'Deny',
                coBrowse.denyControl.bind(coBrowse)));

        coBrowseUI.showDialog(coBrowseUI.requestControlDialogId, text, title, isModal, buttons, coBrowseUI.requestControlDialogId, null, null, false, autoOpen);
    },

    /**
     * Creates an instance of the RevokeControl dialog.
     * 
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    createRevokeControlDialog: function (autoOpen) {
        'use strict';

        if ($(coBrowseUI.requestControlDialogId, coBrowseUI.targetDocument).length === 0) {
            coBrowseUI.addRequestControlDialog();
        }

        var text = 'The agent is currently in control of the co-browse.';
        var title = 'Co-Browse Control';
        var isModal = false;
        var buttons = [];
        buttons.push(coBrowseUI.createButton(coBrowseUI.revokeButtonId,
                'Revoke', coBrowse.revokeControl.bind(coBrowse)));

        coBrowseUI.showDialog(coBrowseUI.requestControlDialogId, text, title, isModal, buttons, coBrowseUI.requestControlDialogId, null, null, false, autoOpen);
    },

    /**
     * Shows a dialog to the user.
     * 
     * @param {string} dialog - element ID
     * @param {string} text - text message for the dialog
     * @param {string} title - title message for the dialog
     * @param {boolean} isModal - is this a modal dialog
     * @param {Object[]} buttons - collection of buttons on the dialog
     * @param {string} hiddenId - ID passed to coBrowse to hide this dialog
     * @param {string} statusImage - image to display in the top left corner
     * @param {Object[]} children - child DOM elements
     * @param {boolean} isCloseable - can this dialog be closed using the X button
     * @param {boolean} autoOpen - should it open automatically
     * @returns {undefined}
     */
    showDialog: function (dialog, text, title, isModal, buttons, hiddenId,
            statusImage, children, isCloseable, autoOpen) {
        'use strict';

        var activeElement = coBrowseUI.targetDocument.activeElement;

        var width = '250px';
        if (dialog === coBrowseUI.proactiveJoinDialogId) {
            width = 'auto';
        }

        $(dialog, coBrowseUI.targetDocument).text(text);
        $(dialog, coBrowseUI.targetDocument)
                .dialog(
                        {
                            autoOpen: autoOpen,
                            width: width,
                            resizable: false,
                            dialogClass: 'cbe-container',
                            title: title,
                            modal: false,
                            closeOnEscape: false,
                            create: function () {
                                if (!isCloseable) {
                                    $(this, coBrowseUI.targetDocument).dialog(
                                            'widget').find(
                                            '.ui-dialog-titlebar-close')
                                            .remove();
                                }

                                if (statusImage) {
                                    $(this, coBrowseUI.targetDocument).parent()
                                            .children(".ui-dialog-titlebar")
                                            .prepend(statusImage);
                                }
                                
                                hiddenId = (hiddenId + coBrowseUI.hiddenPostFix).replace('#', '');
                                $(this, coBrowseUI.targetDocument).dialog('widget').attr('id', hiddenId);
                            },
                            open: function () {
                                $(this).blur();
                                $(this, coBrowseUI.targetDocument).dialog(
                                        'widget').position({
                                    my: 'center',
                                    at: 'center',
                                    of: window
                                });
                                if (activeElement) {
                                    console.log('Resetting focus to: ' + activeElement.id);
                                    activeElement.focus();
                                }
                            },
                            buttons: buttons
                        });

        if (children) {
            children.forEach(function (child) {
                $(dialog, coBrowseUI.targetDocument).append(child);
            });
        }
    },

    /**
     * Checks if a dialog is open in the DOM.
     * 
     * @param {string} dialog - element ID
     * @returns {Boolean}
     */
    checkDialogOpen: function (dialog) {
        'use strict';

        try {
            return $(dialog, coBrowseUI.targetDocument).hasClass("ui-dialog-content") && $(dialog, window.parent.document).dialog('isOpen') === true;
        } catch (ex) { // Thrown if the dialog hasn't been initialised for some reason.
            console.log('Dialog is not open: ' + dialog);
            return false;
        }
    },

    /**
     * Opens a dialog displaying it to the user.
     * 
     * @param {string} dialog - element ID
     * @returns {undefined}
     */
    openDialog: function (dialog) {
        'use strict';

        console.log('Opening dialog: ' + dialog);

        if ($(dialog, coBrowseUI.targetDocument).length === 0) {
            if (dialog === coBrowseUI.coBrowseDialogId) {
                coBrowseUI.addCoBrowseDialog();
                coBrowseUI.createPauseStopDialog(true);
            } else if (dialog === coBrowseUI.requestControlDialogId) {
                coBrowseUI.addRequestControlDialog();
                coBrowseUI.createRequestControlDialog(true);
            }
        } else {
            if (coBrowseUI.checkDialogOpen(dialog)) {
                console.log('Dialog is already open: ' + dialog);
                return; // Already open.
            }

            try {
                $(dialog, coBrowseUI.targetDocument).dialog('open');
            } catch (err) {
                // Looking for jQuery UI issues.
                console.error('Could not open dialog: ' + dialog);
                console.error(err);
            }
        }
    },

    /**
     * Closes a dialog hiding it from a user.
     * 
     * @param {string} dialog - element ID
     * @returns {undefined}
     */
    closeDialog: function (dialog) {
        'use strict';

        console.log('Closing dialog: ' + dialog);

        // Completely remove the dialog from the DOM to work around the
        // breaking jQuery dialog issue.
        try {
            $(dialog, coBrowseUI.targetDocument).remove();
        } catch (err) {
            console.warn('Could not remove dialog from the DOM: ' + dialog);
        }
    },

    /**
     * Completely destroys a dialog, used for cleanup routines.
     * 
     * @param {string} dialog - element ID
     * @returns {undefined}
     */
    destroyDialog: function (dialog) {
        'use strict';

        console.log('Destroying dialog: ' + dialog);

        // Completely remove the dialog from the DOM to work around the
        // breaking jQuery dialog issue.
        try {
            $(dialog, coBrowseUI.targetDocument).remove();
        } catch (err) {
            console.warn('Could not remove dialog from the DOM: ' + dialog);
        }
    },

    /**
     * Creates a button for use with the Co-Browse dialogs.
     * 
     * @param {string} id
     * @param {string} text
     * @param {Object} click - callback function to execute on button click
     * @returns {coBrowseUI.createButton.coBrowseUIAnonym$3}
     */
    createButton: function (id, text, click) {
        'use strict';

        return {
            id: id,
            text: text,
            click: click
        };
    },

    /**
     * Shows the Co-browse iFrame.
     * 
     * @param {string} url - URL to open in the iFrame
     * @returns {undefined}
     */
    showCoBrowseIframe: function (url) {
        'use strict';

        $(coBrowseUI.coBrowseIframeWrapper, coBrowseUI.targetDocument).hide();
        $(coBrowseUI.coBrowseIframeId, coBrowseUI.targetDocument).attr('src',
                url);
        $(coBrowseUI.coBrowseIframeId, coBrowseUI.targetDocument).show();
    },

    /**
     * Closes any potentially hanging dialogs.
     * 
     * @returns {undefined}
     */
    closeHangingDialogs: function () {
        'use strict';
        
        console.log('closeHangingDialogs');

        var dialogList = [
            coBrowseUI.errorDialogId,
            coBrowseUI.coBrowseDialogId,
            coBrowseUI.requestControlDialogId
        ];

        var size = dialogList.length;
        for (var i = 0; i < size; i++) {
            coBrowseUI.destroyDialog(dialogList[i]);
        }
    },

    /**
     * Hides the Co-Browsing iFrame.
     */
    hideCoBrowseIframe: function () {
        'use strict';

        $(coBrowseUI.coBrowseIframeId, coBrowseUI.targetDocument).hide();
        $(coBrowseUI.coBrowseIframeId, coBrowseUI.targetDocument).attr('src',
                '');
        $(coBrowseUI.coBrowseIframeWrapper, coBrowseUI.targetDocument).show();
    },

    /**
     * Shows the Co-Browse div link for toggling the proactive dialog.
     */
    showCoBrowseLinkDiv: function () {
        'use strict';

        $(coBrowseUI.showCoBrowseLinkDivId, coBrowseUI.targetDocument).show();
    },

    /**
     * Hides the Co-Browse div link for toggling the proactive dialog.
     */
    hideCoBrowseLinkDiv: function () {
        'use strict';

        $(coBrowseUI.showCoBrowseLinkDivId, coBrowseUI.targetDocument).hide();
    }

};

$(function () {
    'use strict';
    coBrowseUI.setup();
});
