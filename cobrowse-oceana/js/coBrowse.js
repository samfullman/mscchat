/* global AvayaCoBrowseClientServices, Storage, $LAB */

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
 * Sample Co-Browse wrapper for use with the Co-Browse SDK. It creates the 
 * underling connection needed to communicate with Co-Browse. 
 * 
 * This implementation follows the Observer pattern:
 *      http://www.dofactory.com/javascript/observer-design-pattern
 * 
 * It should not directly reference any other object besides the Co-Browse SDK.
 * Objects interested in processing Co-Browse events should instead subscribe 
 * to it through the listeners attribute and implement the event handlers.
 * 
 * @type Object
 */
var coBrowse = {

    coBrowseInstance: null,
    isSecure: true,
    logger: null,
    listeners: null,

    // Session storage keys.
    sessionKey: 'coBrowse.sessionKey',

    // TODO: Remove these in a future version.
    inCoBrowse: 'coBrowse.inCoBrowse',
    isPaused: 'coBrowse.isPaused',
    agentInControl: 'coBrowse.agentInControl',
    inControlRequest: 'coBrowse.inControlRequest',

    /**
     * Initialises the Co-Browse instance, this must be called before this 
     * object can be used.
     *
     * @param {string} coBrowseSDKPath - relative path to Co-Browse SDK
     * @param {Object} genericLogger - logging interface to use e.g. console
     * @param {Object[]} listeners - list of objects interested in Co-Browse events
     * @param {string} hostName - FQDN or IP address of the Co-Browse Snap-in
     * @returns {undefined}
     */
    init: function (coBrowseSDKPath, genericLogger, listeners, hostName) {
        'use strict';

        coBrowse.logger = genericLogger;
        coBrowse.listeners = listeners;

        // Setup the session storage if needed.
        if (coBrowse.getSessionItem(coBrowse.inCoBrowse) === null) {
            coBrowse.setSessionItem(coBrowse.inCoBrowse, "false");
        }
        if (coBrowse.getSessionItem(coBrowse.isPaused) === null) {
            coBrowse.setSessionItem(coBrowse.isPaused, "false");
        }
        if (coBrowse.getSessionItem(coBrowse.agentInControl) === null) {
            coBrowse.setSessionItem(coBrowse.agentInControl, "false");
        }

        // Load the Co-Browse SDK dependencies.
        $LAB.script(coBrowseSDKPath + 'sock.js').script(
                coBrowseSDKPath + 'Base64.js').script(
                coBrowseSDKPath + 'md5.js').script(
                coBrowseSDKPath + 'AvayaCoBrowseClientServices.min.js').wait(
                function () {
                    coBrowse.configureInstance(hostName);
                });
    },

    /**
     * Resets the coBrowse object, clearing any session storage settings.
     * 
     * @returns {undefined}
     */
    reset: function () {
        'use strict';

        coBrowse.logger.info('CoBrowse: Resetting Co-Browse back to initial state.');

        // Reset the state for the next Co-Browse session.
        coBrowse.setSessionItem(coBrowse.inCoBrowse, "false");
        coBrowse.setSessionItem(coBrowse.isPaused, "false");
        coBrowse.setSessionItem(coBrowse.inControlRequest, "false");
        coBrowse.setSessionItem(coBrowse.agentInControl, "false");
    },

    /**
     * Configures the underlying connection to the Co-Browse SDK.
     * 
     * @param {string} hostName - FQDN or IP address of the Co-Browse Snap-in
     * @returns {undefined}
     */
    configureInstance: function (hostName) {
        'use strict';

        coBrowse.logger
                .info("Successfully loaded all dependencies for coBrowse.");

        var config = new AvayaCoBrowseClientServices.Config.CoBrowseConfiguration();
        coBrowse.logger.info('CoBrowse: AVCOBROWSE Engine (Customer) Load Complete');
        coBrowse.logger.info('CoBrowse: jQuery version is ' + $().jquery);
        config.serverInfo.hostName = hostName;
        config.serverInfo.port = coBrowse.isSecure ? '443' : '80';
        config.serverInfo.isSecure = coBrowse.isSecure;
        config.enabled = true;

        var coBrowseCustomerClientService = new AvayaCoBrowseClientServices();
        coBrowseCustomerClientService.registerLogger(coBrowse.logger);

        coBrowse.coBrowseInstance = coBrowseCustomerClientService
                .createCustomerCobrowse(config);
		coBrowse.registerAPICallbacks();

        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseReady !== undefined) {
                listener.onCoBrowseReady(coBrowse);
            }
        });
    },

    /**
     * Registers all of the Co-Browse event listeners that we are interested in.
     * 
     * @returns {undefined}
     */
    registerAPICallbacks: function () { // NOSONAR cannot be simplified any further
        'use strict';

        var instance = coBrowse.coBrowseInstance;

        instance.addOnConnectionResetCallback(function (evt) {
            if (evt.resume) {
                coBrowse.rebuild();
            }
        });

        instance.addOnConnectionCallback(function (evt) {
            coBrowse.logger.info('CoBrowse: Connected to Co-Browse with ' + evt.agent);

            coBrowse.listeners.forEach(function (listener) {
                if (listener.onCoBrowseConnection !== undefined) {
                    listener.onCoBrowseConnection(coBrowse);
                }
            });
        });

        instance.addOnConnectionFailureCallback(function (evt) {
            coBrowse.logger.error('CoBrowse: Failed to connect to Co-Browse ' + evt.msg);
            coBrowse.logger.error(evt);

            coBrowse.listeners.forEach(function (listener) {
                if (listener.onCoBrowseConnection !== undefined) {
                    listener.onCoBrowseConnectionFailure(coBrowse, evt.msg);
                }
            });
        });

        instance.addOnSessionCloseCallback(function (evt) {
            coBrowse.logger.info('CoBrowse: Co-Browse session closed.');

            coBrowse.reset();

            var str = evt.msg.split(':');
            var title = '';
            var text = '';

            if (str.length > 0) {
                if (str[0] === 'inactive_timeout') {
                    title = 'Inactive Session by Agent';
                } else if (str[0] === 'session_timeout') {
                    title = 'Session Timeout by System';
                } else {
                    title = 'Session Closed by the Agent';
                }

                text = str[1];
            }

            coBrowse.listeners.forEach(function (listener) {
                if (listener.onCoBrowseSessionClose !== undefined) {
                    listener.onCoBrowseSessionClose(coBrowse, title, text);
                }
            });
        });

        instance.addOnControlRequestCallback(function (evt) {
            coBrowse.logger.info('CoBrowse: Received Control request from ' + evt.agent);

            coBrowse.setSessionItem(coBrowse.inControlRequest, "true");

            coBrowse.listeners.forEach(function (listener) {
                if (listener.onCoBrowseControlRequest !== undefined) {
                    listener.onCoBrowseControlRequest(coBrowse);
                }
            });
        });

        instance.addOnControlReleaseCallback(function (evt) {
            coBrowse.logger.info('CoBrowse: Agent ' + evt.agent
                    + ' has released Control.');

            coBrowse.setSessionItem(coBrowse.agentInControl, "false");

            coBrowse.listeners.forEach(function (listener) {
                if (listener.onCoBrowseControlRelease !== undefined) {
                    listener.onCoBrowseControlRelease(coBrowse);
                }
            });
        });

        instance.addOnfireInactivityCallback(function (evt) {

            coBrowse.logger.info('CoBrowse: addOnfireInactivityCallback fired.');
            coBrowse.listeners.forEach(function (listener) {
                if (listener.fireOnCoBrowseInactive !== undefined) {
                    listener.fireOnCoBrowseInactive(coBrowse);
                }
            });
        });

        instance.addOnStopInactivityTimerCallback(function (evt) {
            coBrowse.logger.info('CoBrowse: addOnStopInactivityTimerCallback fired.');

            coBrowse.listeners.forEach(function (listener) {
                if (listener.stopOnCoBrowseInactive !== undefined) {
                    listener.stopOnCoBrowseInactive(coBrowse);
                }
            });
        });

    },

    /**
     * Gets a session storage item by key.
     * 
     * @param {string} key - value of session item or null if undefined
     * @returns {DOMString}
     */
    getSessionItem: function (key) {
        'use strict';

        if (typeof (Storage) !== 'undefined') {
            return sessionStorage.getItem(key);
        } else {
            coBrowse.logger.error('CoBrowse: No session storage availabe for Co-Browse.');
            return null;
        }
    },

    /**
     * Sets a session storage item by key.
     * 
     * @param {string} key - unique identifier for this item
     * @param {string} value
     * @returns {undefined}
     */
    setSessionItem: function (key, value) {
        'use strict';

        if (typeof (Storage) !== 'undefined') {
            sessionStorage.setItem(key, value);
        } else {
            coBrowse.logger.error('CoBrowse: No session storage availabe for Co-Browse.');
        }
    },

    /**
     * Updates the status of the Co-Browse idle timer.
     *  
     * @param {number} idleTime
     * @returns {undefined}
     */
    updateIdleTimer: function (idleTime) {
        'use strict';

        coBrowse.coBrowseInstance.updateIdleTime(idleTime);
    },

    /**
     * Notifies listeners of this object that a Co-Browse rebuild has occured.
     * This is usually fired when moving between Co-Browse pages.
     * 
     * @returns {undefined}
     */
    rebuild: function () {
        'use strict';

        // Let any listeners know that they need to rebuild their internal states.
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseRebuild !== undefined) {
                listener.onCoBrowseRebuild(coBrowse);
            }
        });
    },

    /**
     * Performs the actual join.
     * 
     * @param {string} displayName - internal display name used by Co-Browse
     * @param {string} coBrowseKey - session key to join with
     * @param {string[]} hideElements - list of HTML element IDs to hide 
     * @returns {undefined}
     */
    joinSession: function (displayName, coBrowseKey, hideElements) {
        'use strict';

        try {
            if (coBrowse.coBrowseInstance) {
                coBrowse.logger.info('CoBrowse: Successfully Initilized');
                coBrowse.logger.info('CoBrowse: Joining session with key: ' + coBrowseKey);

                var len = hideElements.length;
                for (var i = 0; i < len; i++) {
                    var element = hideElements[i];
                    coBrowse.logger.info('CoBrowse: Hiding element with ID ' + element
                            + '.');
                    coBrowse.coBrowseInstance.addElementIDToRemove(element);
                }

                coBrowse.coBrowseInstance.start();

				if (!displayName) {
					displayName = 'Customer';
				}

                var previousKey = coBrowse.getSessionItem(coBrowse.sessionKey);
                if (previousKey !== coBrowseKey) { // Is it a different session from last session?
                    coBrowse.setSessionItem(coBrowse.sessionKey, coBrowseKey);
                    coBrowse.coBrowseInstance.joinSession(displayName, coBrowseKey)
                            .then(coBrowse.onJoinSuccess.bind(coBrowse), coBrowse.onJoinFailure);
                } else {
                    // Wait for the onConnection to fire to deal with a session reconnect.
                }
            }
        } catch (e) {
            coBrowse.logger.error(e);
        }
    },

    /**
     * Requests the Co-Browse session to stop.
     * 
     * @returns {undefined}
     */
    stopSession: function () {
        'use strict';

        coBrowse.logger.info('CoBrowse: Attempting to stop the Co-Browse session.');
        coBrowse.coBrowseInstance.logoutSession().then(
                coBrowse.onStopSuccess.bind(coBrowse), coBrowse.onStopFailure);
    },

    /**
     * Requests the Co-Browse session to stop with a particular reason.
     * 
     * @param {string} reason
     * @returns {undefined}
     */
    stopSessionWithReason: function (reason) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Attempting to stop the Co-Browse session.');
        coBrowse.coBrowseInstance.logoutSession(reason).then(
                coBrowse.onStopSuccess.bind(coBrowse), coBrowse.onStopFailure);
    },

    /**
     * Toggles the paused state of the Co-Browse session. It only makes the 
     * request to Co-Browse SDK.
     * 
     * @returns {undefined}
     */
    togglePause: function () {
        'use strict';

        if (coBrowse.getSessionItem(coBrowse.isPaused) === "false") {
            coBrowse.logger.info('CoBrowse: Attempting to pause the Co-Browse session.');
            coBrowse.coBrowseInstance.pause().then(
                    coBrowse.onPauseSuccess.bind(coBrowse),
                    coBrowse.onPauseFailure);
        } else {
            coBrowse.logger.info('CoBrowse: Attempting to resume the Co-Browse session.');
            coBrowse.coBrowseInstance.resume().then(
                    coBrowse.onResumeSuccess.bind(coBrowse),
                    coBrowse.onResumeFailure);
        }
    },

    /**
     * Requests that control be granted to the opposite party.
     * 
     * @param {Object} evt - event object with agent id
     * @returns {undefined}
     */
    grantControl: function (evt) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Co-Browse Control request for ' + evt.agent
                + ' granted.');
        coBrowse.coBrowseInstance.grantControl().then(
                coBrowse.onGrantControlSuccess.bind(coBrowse),
                coBrowse.onGrantControlFailure);
    },

    /**
     * Requests that control be denied to the opposite party.
     * 
     * @param {Object} evt - event object with agent id
     * @returns {undefined}
     */
    denyControl: function (evt) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Co-Browse Control request for ' + evt.agent
                + ' denied.');
        coBrowse.coBrowseInstance.denyControl().then(
                coBrowse.onDenyControlSuccess.bind(coBrowse),
                coBrowse.onDenyControlFailure);
    },

    /**
     * Requests that control be revoked from the opposite party.
     * 
     * @param {Object} evt - event object with agent id
     * @returns {undefined}
     */
    revokeControl: function (evt) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Co-Browse Revoke Control request for '
                + evt.agent + ' initiated.');
        coBrowse.coBrowseInstance.revokeControl().then(
                coBrowse.onRevokeControlSuccess.bind(coBrowse),
                coBrowse.onRevokeControlFailure);
    },

    ////////////////////////////////////////////////////////////////////////////
    // Co-Browse Event Handlers
    ////////////////////////////////////////////////////////////////////////////

    /**
     * Fired upon a successful join, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onJoinSuccess: function (data) {
        'use strict';

        coBrowse.setSessionItem(coBrowse.inCoBrowse, "true");

        coBrowse.logger.info('CoBrowse: Join session successful.');
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseJoinSuccess !== undefined) {
                listener.onCoBrowseJoinSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failed join, notifies all listeners of this object. 
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onJoinFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger.error('CoBrowse: Join session failed ' + errorMessage);
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseJoinFailure !== undefined) {
                listener.onCoBrowseJoinFailure(coBrowse, errorMessage);
            }
        });
    },

    /**
     * Fired upon a successful granting of control, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onGrantControlSuccess: function (data) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Grant control successful.');

        coBrowse.setSessionItem(coBrowse.inControlRequest, "false");
        coBrowse.setSessionItem(coBrowse.agentInControl, "true");

        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseGrantControlSuccess !== undefined) {
                listener.onCoBrowseGrantControlSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failure to grant control, notifies all listeners of this object.
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onGrantControlFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger.error('CoBrowse: Unable to grant control, reason ' + errorMessage);
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseGrantControlFailure !== undefined) {
                listener.onCoBrowseGrantControlFailure(coBrowse, errorMessage);
            }
        });
    },

    /**
     * Fired upon a successful denying of control, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onDenyControlSuccess: function (data) {
        'use strict';

        coBrowse.setSessionItem(coBrowse.inControlRequest, "false");

        coBrowse.logger.info('CoBrowse: Deny control successful.');
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseDenyControlSuccess !== undefined) {
                listener.onCoBrowseDenyControlSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failure to deny control, notifies all listeners of this object.
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onDenyControlFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger.error('CoBrowse: Unable to deny control, reason ' + errorMessage);
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseDenyControlFailure !== undefined) {
                listener.onCoBrowseDenyControlFailure(coBrowse, errorMessage);
            }
        });
    },

    /**
     * Fired upon a successful revoke of control, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onRevokeControlSuccess: function (data) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Revoke control successful.');

        coBrowse.setSessionItem(coBrowse.agentInControl, "false");

        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseRevokeControlSuccess !== undefined) {
                listener.onCoBrowseRevokeControlSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failure to revoke control, notifies all listeners of this object.
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onRevokeControlFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger
                .error('CoBrowse: Unable to revoke control, reason ' + errorMessage);
        coBrowse.listeners
                .forEach(function (listener) {
                    if (listener.onCoBrowseRevokeControlFailure !== undefined) {
                        listener.onCoBrowseRevokeControlFailure(coBrowse,
                                errorMessage);
                    }
                });
    },

    /**
     * Fired upon a successful pause of the session, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onPauseSuccess: function (data) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Paused co-browse successfully.');

        coBrowse.setSessionItem(coBrowse.isPaused, "true");

        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowsePauseSuccess !== undefined) {
                listener.onCoBrowsePauseSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failure to pause the session, notifies all listeners of this object.
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onPauseFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger.error('CoBrowse: Unable to pause co-browse, reason '
                + errorMessage);
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowsePauseFailure !== undefined) {
                listener.onCoBrowsePauseFailure(coBrowse, errorMessage);
            }
        });
    },

    /**
     * Fired upon a successful resuming of the session, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onResumeSuccess: function (data) {
        'use strict';

        coBrowse.logger.info('CoBrowse: Resumed co-browse successfully.');

        coBrowse.setSessionItem(coBrowse.isPaused, "false");

        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseResumeSuccess !== undefined) {
                listener.onCoBrowseResumeSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failure to resume the session, notifies all listeners of this object.
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onResumeFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger.error('CoBrowse: Unable to resume co-browse, reason '
                + errorMessage);
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseResumeFailure !== undefined) {
                listener.onCoBrowseResumeFailure(coBrowse, errorMessage);
            }
        });
    },

    /**
     * Fired upon a successful stopping of the session, notifies all listeners of this object.
     * 
     * @param {Object} data
     * @returns {undefined}
     */
    onStopSuccess: function (data) {
        'use strict';

        coBrowse.reset();

        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseStopSuccess !== undefined) {
                listener.onCoBrowseStopSuccess(coBrowse);
            }
        });
    },

    /**
     * Fired upon a failure to stop the session, notifies all listeners of this object.
     * 
     * @param {Object} error
     * @returns {undefined}
     */
    onStopFailure: function (error) {
        'use strict';

        var errorMessage = error.getMessage();
        coBrowse.logger
                .error('CoBrowse: Unable to stop co-browse, reason ' + errorMessage);
        coBrowse.listeners.forEach(function (listener) {
            if (listener.onCoBrowseStopFailure !== undefined) {
                listener.onCoBrowseStopFailure(coBrowse, errorMessage);
            }
        });
    }
};