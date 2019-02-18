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

