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
    secureAllConnections : false,

    /**
     * The hostname or cluster of the OCP cluster
     */
    webChatHost : '10.134.61.153',

    /**
     * The hostname or address of the cluster that hosts the Co-Browsing service.
     */
    coBrowseHost : '10.134.42.9',

    /**
     * The hostname or address of the cluster that hosts Context Store, the CustomerManagement service,
     * and the OceanaCoreDataService.
     */
    contextStoreHost : '10.134.61.117',

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
