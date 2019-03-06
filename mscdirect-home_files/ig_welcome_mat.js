// iGlobal Welcome Mat Script
// Authored by iGlobal Stores (www.iglobalstores.com)
// Copyright iGlobal Stores 2013

//
// Store specific settings
//
// Welocme splash tagging
var ig_splash_welcome = false;
// Replace with your STORE ID
var ig_storeId = 100;
// Replace with your domain
var ig_cookieDomain = window.location.hostname;// If you prefer, you can put your domain here, like so "yourdomain.com";
// Replace this with the ID that you want the flag to show up in on each page, default is "igNest"
var ig_nestElementId = "igFlag";
// All countries you sell to, including the US
var ig_countries = {"US":"United States","CA":"Canada","MX":"Mexico","VI":"Virgin Islands (U.S.)","GU":"Guam","AS":"American Samoa","VG":"Virgin Islands (British)","AW":"Aruba","BM":"Bermuda","IN":"India","AU":"Australia","NZ":"New Zealand"};
//var ig_countries = {"AL":"Albania","AS":"American Samoa","AN":"Andoria","AD":"Andorra","AO":"Angola","AI":"Anguilla","AG":"Antigua","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"Bonaire, St. Eustatius & Saba","BW":"Botswana","BR":"Brazil","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","CC":"Caprica","KY":"Cayman Islands","TD":"Chad","CL":"Chile","CN":"China - People's Republic of","CO":"Colombia","KM":"Comoros","CG":"Congo","CK":"Cook Islands","CR":"Costa Rica","HR":"Croatia","CW":"CuraÃ§ao","CY":"Cyprus","CZ":"Czech Republic","DS":"Death Star","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands (Denmark)","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","GA":"Gabon","GM":"Gambia","DE":"Germany","GI":"Gibraltar","GR":"Greece","GL":"Greenland (Denmark)","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GY":"Guyana","HT":"Haiti","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IE":"Ireland - Republic Of","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of (South Korea)","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macau","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","MX":"Mexico","FM":"Micronesia - Federated States of","MI":"Middle Earth","MD":"Moldova","MC":"Monaco","MN":"Mongolia","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","NP":"Nepal","NL":"Netherlands (Holland)","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RO":"Romania","RU":"Russia","RW":"Rwanda","SM":"San Marino","ST":"Sao Tome & Principe","SA":"Saudi Arabia","SN":"Senegal","SC":"Seychelles","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","ZA":"South Africa","ES":"Spain","LK":"Sri Lanka","BL":"St. Barthelemy","KN":"St. Kitts and Nevis","LC":"St. Lucia","MF":"St. Maarten","VC":"St. Vincent","SR":"Suriname","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","PF":"Tahiti","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TA":"Tatooine","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VK":"Vulcan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"Virgin Islands (British)","VI":"Virgin Islands (U.S.)","WS":"Western Samoa","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};
// List of country codes that are not considered international, default US, that the splash won't be shown to automatically
var ig_domesticCountryCodes = ['US'];
//var ig_logoUrl = "https://cdn.mscdirect.com/global/application-content/images/header/logo.png";
var ig_logoUrl = "https://cdn.mscdirect.com/global/application-content/images/header/v4-mobile-logo.png";
//
// Set internal JQuery Variable
// Can set to existing $ on page, or can include Jquery here, and set igJq to jquery-no-conflict
//
igJq = $; //Sets internal jquery variable to the existing $ on the page.

//
// Append <div id="igNest"></div> to specific element on page
// Please edit the area that you'd like it appended to, ie., igJq("element.class")
//
//igJq(function(){
//    igJq('#main-account-signin').append( '<li id="igNest"></li>' );
//});

//
// END Store specific settings
//

///////////////////////////////////////////////////////////////////////////////

//
// Begin jquery jsonp plugin
//
/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( igJq ) {

    // ###################### UTILITIES ##

    // Noop
    function noop() {
    }

    // Generic callback
    function genericCallback( data ) {
        lastValue = [ data ];
    }

    // Call if defined
    function callIfDefined( method , object , parameters ) {
        return method && method.apply( object.context || object , parameters );
    }

    // Give joining character given url
    function qMarkOrAmp( url ) {
        return /\?/ .test( url ) ? "&" : "?";
    }

    var // String constants (for better minification)
        STR_ASYNC = "async",
        STR_CHARSET = "charset",
        STR_EMPTY = "",
        STR_ERROR = "error",
        STR_INSERT_BEFORE = "insertBefore",
        STR_JQUERY_JSONP = "_jqjsp",
        STR_ON = "on",
        STR_ON_CLICK = STR_ON + "click",
        STR_ON_ERROR = STR_ON + STR_ERROR,
        STR_ON_LOAD = STR_ON + "load",
        STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
        STR_READY_STATE = "readyState",
        STR_REMOVE_CHILD = "removeChild",
        STR_SCRIPT_TAG = "<script>",
        STR_SUCCESS = "success",
        STR_TIMEOUT = "timeout",

    // Window
        win = window,
    // Deferred
        Deferred = igJq.Deferred,
    // Head element
        head = igJq( "head" )[ 0 ] || document.documentElement,
    // Page cache
        pageCache = {},
    // Counter
        count = 0,
    // Last returned value
        lastValue,

    // ###################### DEFAULT OPTIONS ##
        xOptionsDefaults = {
            //beforeSend: undefined,
            //cache: false,
            callback: STR_JQUERY_JSONP,
            //callbackParameter: undefined,
            //charset: undefined,
            //complete: undefined,
            //context: undefined,
            //data: "",
            //dataFilter: undefined,
            //error: undefined,
            //pageCache: false,
            //success: undefined,
            //timeout: 0,
            //traditional: false,
            url: location.href
        },

    // opera demands sniffing :/
        opera = win.opera,

    // IE < 10
        oldIE = !!igJq( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

    // ###################### MAIN FUNCTION ##
    function jsonp( xOptions ) {

        // Build data with default
        xOptions = igJq.extend( {} , xOptionsDefaults , xOptions );

        // References to xOptions members (for better minification)
        var successCallback = xOptions.success,
            errorCallback = xOptions.error,
            completeCallback = xOptions.complete,
            dataFilter = xOptions.dataFilter,
            callbackParameter = xOptions.callbackParameter,
            successCallbackName = xOptions.callback,
            cacheFlag = xOptions.cache,
            pageCacheFlag = xOptions.pageCache,
            charset = xOptions.charset,
            url = xOptions.url,
            data = xOptions.data,
            timeout = xOptions.timeout,
            pageCached,

        // Abort/done flag
            done = 0,

        // Life-cycle functions
            cleanUp = noop,

        // Support vars
            supportOnload,
            supportOnreadystatechange,

        // Request execution vars
            firstChild,
            script,
            scriptAfter,
            timeoutTimer;

        // If we have Deferreds:
        // - substitute callbacks
        // - promote xOptions to a promise
        Deferred && Deferred(function( defer ) {
            defer.done( successCallback ).fail( errorCallback );
            successCallback = defer.resolve;
            errorCallback = defer.reject;
        }).promise( xOptions );

        // Create the abort method
        xOptions.abort = function() {
            !( done++ ) && cleanUp();
        };

        // Call beforeSend if provided (early abort if false returned)
        if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === !1 || done ) {
            return xOptions;
        }

        // Control entries
        url = url || STR_EMPTY;
        data = data ? ( (typeof data) == "string" ? data : igJq.param( data , xOptions.traditional ) ) : STR_EMPTY;

        // Build final url
        url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;

        // Add callback parameter if provided as option
        callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );

        // Add anticache parameter if needed
        !cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );

        // Replace last ? by callback parameter
        url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );

        // Success notifier
        function notifySuccess( json ) {

            if ( !( done++ ) ) {

                cleanUp();
                // Pagecache if needed
                pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
                // Apply the data filter if provided
                dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
                // Call success then complete
                callIfDefined( successCallback , xOptions , [ json , STR_SUCCESS, xOptions ] );
                callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );

            }
        }

        // Error notifier
        function notifyError( type ) {

            if ( !( done++ ) ) {

                // Clean up
                cleanUp();
                // If pure error (not timeout), cache if needed
                pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
                // Call error then complete
                callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
                callIfDefined( completeCallback , xOptions , [ xOptions , type ] );

            }
        }

        // Check page cache
        if ( pageCacheFlag && ( pageCached = pageCache[ url ] ) ) {

            pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached );

        } else {

            // Install the generic callback
            // (BEWARE: global namespace pollution ahoy)
            win[ successCallbackName ] = genericCallback;

            // Create the script tag
            script = igJq( STR_SCRIPT_TAG )[ 0 ];
            script.id = STR_JQUERY_JSONP + count++;

            // Set charset if provided
            if ( charset ) {
                script[ STR_CHARSET ] = charset;
            }

            opera && opera.version() < 11.60 ?
                // onerror is not supported: do not set as async and assume in-order execution.
                // Add a trailing script to emulate the event
                ( ( scriptAfter = igJq( STR_SCRIPT_TAG )[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
                :
                // onerror is supported: set the script as async to avoid requests blocking each others
                ( script[ STR_ASYNC ] = STR_ASYNC )

            ;

            // Internet Explorer: event/htmlFor trick
            if ( oldIE ) {
                script.htmlFor = script.id;
                script.event = STR_ON_CLICK;
            }

            // Attached event handlers
            script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function ( result ) {

                // Test readyState if it exists
                if ( !script[ STR_READY_STATE ] || !/i/.test( script[ STR_READY_STATE ] ) ) {

                    try {

                        script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

                    } catch( _ ) {}

                    result = lastValue;
                    lastValue = 0;
                    result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );

                }
            };

            // Set source
            script.src = url;

            // Re-declare cleanUp function
            cleanUp = function( i ) {
                timeoutTimer && clearTimeout( timeoutTimer );
                script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
                head[ STR_REMOVE_CHILD ]( script );
                scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
            };

            // Append main script
            head[ STR_INSERT_BEFORE ]( script , ( firstChild = head.firstChild ) );

            // Append trailing script if needed
            scriptAfter && head[ STR_INSERT_BEFORE ]( scriptAfter , firstChild );

            // If a timeout is needed, install it
            timeoutTimer = timeout > 0 && setTimeout( function() {
                notifyError( STR_TIMEOUT );
            } , timeout );

        }

        return xOptions;
    }

    // ###################### SETUP FUNCTION ##
    jsonp.setup = function( xOptions ) {
        igJq.extend( xOptionsDefaults , xOptions );
    };

    // ###################### INSTALL in jQuery ##
    igJq.jsonp = jsonp;

} )( igJq );
//
// End jquery jsonp plugin
//

//
// Begin embedded easyModal.js
//
/**
 * easyModal.js v1.1.0
 * A minimal jQuery modal that works with your CSS.
 * Author: Flavius Matis - http://flaviusmatis.github.com/
 * URL: https://github.com/flaviusmatis/easyModal.js
 */

(function(igJq){

    var methods = {
        init : function(options) {

            var defaults = {
                top: '0',
                autoOpen: false,
                overlayOpacity: 0.5,
                overlayColor: '#000',
                overlayClose: true,
                overlayParent: 'body',
                closeOnEscape: true,
                closeButtonClass: '.close_welcome_mat_popup',
                onOpen: false,
                onClose: false
            };

            options = igJq.extend(defaults, options);

            return this.each(function() {

                var o = options;

                var $overlay = igJq('<div class="lean-overlay"></div>');

                $overlay.css({
                    'display': 'none',
                    'position': 'fixed',
                    'z-index': 2000,
                    'top': 0,
                    'left': 0,
                    'height': 100 + '%',
                    'width': 100+ '%',
                    'background': o.overlayColor,
                    'opacity': o.overlayOpacity
                }).appendTo(o.overlayParent);

                var $modal = igJq(this);

                $modal.css({
                    'display': 'none',
                    'position' : 'fixed',
                    'z-index': 2001,
                    'left' : 50 + '%',
                    'top' : parseInt(o.top) > -1 ? o.top + 'px' : 50 + '%'
                });

                $modal.bind('openModal', function(){
                    igJq(this).css({
                        'display' : 'block',
                        'margin-left' : -($modal.outerWidth()/2) + 'px',
                        'margin-top' : (parseInt(o.top) > -1 ? 0 : -($modal.outerHeight()/2)) + 'px'
                    });
                    $overlay.fadeIn(200, function(){
                        if (o.onOpen && typeof (o.onOpen) === 'function') {
                            // onOpen callback receives as argument the modal window
                            o.onOpen($modal[0]);
                        }
                    });
                });

                $modal.bind('closeModal', function(){
                    igJq(this).css('display', 'none');
                    $overlay.fadeOut(200, function(){
                        if (o.onClose && typeof(o.onClose) === 'function') {
                            // onClose callback receives as argument the modal window
                            o.onClose($modal[0]);
                        }
                    });
                });

                // Close on overlay click
                $overlay.click(function() {
                    if (o.overlayClose){
                        $modal.trigger('closeModal');
			removeFlagIfNotListed();
			}	
                });

                igJq(document).keydown(function(e) {
                    // ESCAPE key pressed
                    if (o.closeOnEscape && e.keyCode == 27) {
                        $modal.trigger('closeModal');
			removeFlagIfNotListed();
                    }
                });

                // Close when button pressed
              //  $modal.on('click', o.closeButtonClass, function(e) {
              //  $modal.trigger('closeModal');
                   // e.preventDefault();
               // });
				
				

                // Automatically open modal if option set
                //if (o.autoOpen)
                    //$modal.trigger('openModal');

            });

        }
    };

    igJq.fn.easyModal = function(method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            igJq.error('Method ' + method + ' does not exist on jQuery.easyModal');
        }

    };

})(igJq);
//
// End embedded easyModal.js
//


//
// Begin embedded jquery cookie plugin, for readying and writing cookies easily
//
(function (factory) {
    if (typeof define === 'function' && define.amd) {
// AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
// Browser globals.
        factory(igJq);
    }
}(function (igJq) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    function converted(s) {
        if (s.indexOf('"') === 0) {
// This is a quoted cookie as according to RFC2068, unescape
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            return config.json ? JSON.parse(s) : s;
        } catch(er) {}
    }

    var config = igJq.cookie = function (key, value, options) {

// write
        if (value !== undefined) {
            options = igJq.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                config.raw ? key : encodeURIComponent(key),
                '=',
                config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

// read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? undefined : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));

            if (key && key === name) {
                result = converted(cookie);
                break;
            }

            if (!key) {
                result[name] = converted(cookie);
            }
        }

        return result;
    };

    config.defaults = {};

    igJq.removeCookie = function (key, options) {
        if (igJq.cookie(key) !== undefined) {
// Must not alter options, thus extending a fresh object...
            igJq.cookie(key, '', igJq.extend({}, options, { expires: -1 }));
            return true;
        }
        return false;
    };

}));
//
// End embedded jquery cookie plugin, for readying and writing cookies easily
//


//
// Begin iGlobal Stores Splash code
//

function ig_getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ig_createSplashHtml() {
    var ig_splashHtml = '<div id="igSplashElement" style="display:none;">';
    ig_splashHtml += ig_createSplashContentsHtml();
    ig_splashHtml += '</div><!--/#igSplashElement -->';
    return ig_splashHtml;
}

function ig_createSplashContentsHtml() { // Feel free to edit the HTML below to match your site
    var ig_splashHtml = '' +
        '<div class="close_welcome_mat_popup" onclick="closepopupdiv()"><i>x</i></div>' +
        '<div class="igModalHeader">' +
            '<div class="logoWrapper">' +
                '<h4>Thanks for visiting <img class="modalLogo" src="'+ig_logoUrl+'" alt="MSC" /> from</h4>' + // Place your logo URL and alt tag here
            '</div><!--/.logoWrapper -->' +
        '</div><!--/.igModalHeader -->' +
        '<div class="igModalBody">' +
           '<ul class="welcomefeatureList">' +
                '<div class="CountryLabel">' +
		'<img src="https://d1vyngmisxigjx.cloudfront.net/images/flags/96x64/'+((ig_country)?ig_country.toUpperCase():'undefined')+'.png" alt="Flag of '+ig_countries[ig_country]+'" class="headerFlag igCountryFlag_hdr">' +
                    '<div class="igCountryName_hdr">'+ig_countries[ig_country]+'</div>' +
                  '</div>' +
'<div class="ig_msc_services">'+
'<div class="ig_we_offer"><p><strong>We offer the following services to shoppers in '+ig_countries[ig_country]+'</strong></p></div>'+
'<div class="ig_prepay_duties"><p><strong>Option to prepay duties and taxes</strong></p></div>'+
'<div class="ig_multiship"><p><strong>Multiple shipping options available</strong><p></div>'+
'</div>'+
            '</ul>' +
            '<div class="igWelcomeCTAButton">' +
                '<button class="close_welcome_mat_popup" onclick="closepopupdiv()">Start Shopping</button>' +
				'<div id="price-tag">* All prices are in USD unless otherwise noted</div>' +
            '</div><!--/.igWelcomeCTAButton -->'+
            '<div class="igSelectCountry igModalHeader messageWrapper">' +
                '<p class="countryP">Not in ' + ig_countries[ig_country] + '? Please select your country below:</p>' +
                '<div class="countryDropDownWrapper">' +
                    '<img src="https://d1vyngmisxigjx.cloudfront.net/images/flags/96x64/'+((ig_country)?ig_country.toUpperCase():'undefined')+'.png" alt="Flag of '+ig_countries[ig_country]+'" class="headerFlag">' +'<select id="countrySelect" class="coreUISelect" onchange="ig_countrySelected();"> ' +
                        '<option value="" disabled>Select your country</option>';

                    for(var countryCode in ig_countries){
			//if(countryCode !== 'US'){
                        	ig_splashHtml += '<option '+((countryCode===ig_country)?'selected="selected" ':'')+'value="'+countryCode+'">'+ig_countries[countryCode]+'</option>';
			//}
                    }
			ig_splashHtml += '<option '+'value="NotListed">'+'Other/Not Listed'+'</option>';

                    ig_splashHtml += '' +
                    '</select>' +
                '</div><!--/.countryDropDownWrapper -->' +
            '</div><!--/.messageWrapper -->' +
        '</div><!--/.igModalBody -->' +
        '<div class="igModalFooter">' +
        '</div><!--/.igModalFooter-->';

    return ig_splashHtml;
}

function ig_countrySelected() {
    var countryCode = igJq("select#countrySelect").val();
	if(countryCode === 'NotListed'){
		$(".countryDropDownWrapper img").remove();
	}else{
	    ig_setCountry(ig_validateCountryCode(countryCode));
	    igJq("#igSplashElement").html(ig_createSplashContentsHtml());
	    ig_alertIceOfCountryChange();
	}
}

function closepopupdiv(){
	$("#igSplashElement").hide();
	$(".lean-overlay").click();
	removeFlagIfNotListed();
}

function showwelcomepopup(){
	$('.welcomemaptooltip').text('Thanks for visiting us from ' + ig_countries[ig_country] + '!');
    $('.welcomemaptooltip').show();
}

function hidewelcomepopup(){
	$('.welcomemaptooltip').hide();
}

function removeFlagIfNotListed(){
	var selectedFlag = $("#countrySelect option:selected").val();
	if(selectedFlag === 'NotListed'){
		manageIgCookies();
		$("#igFlag").text("");
	}
}

function manageIgCookies(){
	igJq.cookie('igNotListed', 'true', { expires: 7, path: '/', domain: ig_cookieDomain });
}

//Called by auto popup logic for first time non domestic country customers.  Also called by ALL customers clicking the nested flag on the page
function ig_showTheSplash() {
    //Construct the modal
    igJq("body").append(ig_createSplashHtml());

    //init easyModal.js modal, after modal content was placed on the page (line above)
    igJq("#igSplashElement").easyModal({
        onClose: function(myModal){
            //on close, let's remove the modal contents and the modal smokescreen created by easyModal.js
            var ig_country = $('#countrySelect option:selected').text();
            $('#ig_countryName').text(ig_country);
            igJq("#igSplashElement").remove();
            igJq(".lean-overlay").remove();
        }
    });

    //Tag the first load event
        if(typeof igJq.cookie("igSplash") === 'undefined'){
                ig_splash_welcome = true;
        }

    //Fire the modal!
    igJq("#igSplashElement").trigger('openModal');

    //Set cookie for Splash shown
    if (ig_validateCountryCode(igJq.cookie("igCountry"))) { // Only set the splashShown cookie, if there is a valid countryCookie
        igJq.cookie('igSplash', 'igSplash', { expires: 7, path: '/', domain: ig_cookieDomain });
    }
}

function ig_createNestContents() {
    return '<img onclick="ig_showTheSplash();" src="https://d1vyngmisxigjx.cloudfront.net/images/flags/96x64/'+((ig_country)?ig_country.toUpperCase():'undefined')+'.png" class="igWelcomeFlagHeader" onmouseover="showwelcomepopup()" onmouseleave="hidewelcomepopup()"/>';
}

function ig_placeNestHtml() {
if(ig_NotListed !== 'true'){
    igJq(function(){
        if (igJq("#"+ig_nestElementId)) {
            igJq("#"+ig_nestElementId).html(ig_createNestContents());
        }
    });
}
}

function ig_setCountry(country) {
    ig_country = country;
    if (ig_country) {
        //Set country cookie
        igJq.cookie('igCountry', ig_country, { expires: 7, path: '/', domain: ig_cookieDomain });
    }
    ig_placeNestHtml();
    igJq("input[name='ip_country']").val(ig_country);
}

function ig_alertIceOfCountryChange() {
    try {
        ig_ice_countryChanged(); // let the ICE script know that the country has changed, if there is an ICE script
    } catch (err) {
        //do nothing
    }
}

function ig_validateCountryCode(countryCode) {
    //Return the country code if valid, return null if not valid
    var countryDisplayName = ig_countries[countryCode];
    if (typeof countryDisplayName !== 'undefined' && countryDisplayName) {
        return countryCode;
    } else {
        return null;
    }
}

function ig_isDomesticCountry() {
    return ig_country && igJq.inArray(ig_country, ig_domesticCountryCodes) >= 0;
}

function ig_detectCountryCallback(countryCode) {
    ig_setCountry(ig_validateCountryCode(countryCode));
    ig_finishLoading();
}

function ig_detectCountryCallbackError() { // Error handling method for when the jsonp call to get the countryCode fails, if it will get called?
    console.log("Couldn't detect country");
    ig_finishLoading();
}

function ig_detectCountry() {
try{
    igJq.jsonp({
        url: 'https://iprecon.iglobalstores.com/iGlobalIp.js?p=igcCallback',
        callback:'igcCallback',
        success: function(json, textStatus, xOptions){
		//json='GU';
		if('undefined' != typeof json && json != 'US' && 'undefined' != typeof ig_countries[json]){ 
		//if('undefined' != typeof ig_countries[json]){ 
			ig_detectCountryCallback(json);
		}
		},
        error: function(){
		if('undefined' != typeof json){
			ig_detectCountryCallbackError();
		}
		}
    });
    } catch (err) {
	//Do nothing
}
}

function ig_pingIglobal() {
    try { // Don't break if this doesn't work
        if (!ig_countryParam) {//Only ping iGlobal for real visitors, not url parameter testing
            igJq.ajax({//we do not need to trap errors like 503's, for this call
                dataType: "jsonp",
                url: 'https://iprecon.iglobalstores.com/ping.js?s='+ig_storeId+'&c='+((ig_country)?ig_country:'')
            });
        }
    } catch (err) {
        // do nothing
    }
}

//function ig_errorPingIglobal() {
//    console.log("Couldn't update iGlobal");
//}

function ig_finishLoading() {
    ig_placeNestHtml();
    if (!ig_isDomesticCountry() && (!ig_splashCookie || !ig_country || ig_countryParam)) {
        igJq(ig_showTheSplash); //Schedule Showing the Splash
    }
    ig_alertIceOfCountryChange();
    ig_pingIglobal();
    igJq("input[name='ip_country']").val(ig_country);
}

var ig_country = null;
var ig_countryCookie = ig_validateCountryCode(igJq.cookie("igCountry"));
var ig_NotListed = typeof igJq.cookie("igNotListed") === 'undefined' ? 'false': 'true';
var ig_countryParam = ig_validateCountryCode(ig_getParameterByName("igCountry"));
var ig_splashCookie = igJq.cookie("igSplash");

//set country to URL parameter igCountry
if (!ig_country && ig_countryParam) {
    ig_country = ig_countryParam;
}

//else set country to countryCookie
if (!ig_country && ig_countryCookie) {
    ig_country = ig_countryCookie;
}

//else set country to countryIP from iGlobal's IP Recognition Service
if (!ig_country) {
    ig_detectCountry();
} else { // else go with whatever country we have, even no country
    ig_finishLoading();
}

//Custom additions below:

