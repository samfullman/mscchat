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
