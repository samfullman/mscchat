function htmlEntities(str) {
	return String(str).replace(/&/g, '&').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var MSCChatWidgets = {
	/**
	Represent a part from a part number
	 */
	partNumber: function(str){
		var pn = str.replace(/^@pn/i, '');
		//the call function is named after the global function and calls it after converting pn to a pseudo-DOM element
		return '<div class="partNumber recommendationQuickView" style="cursor: pointer; border: 1px solid darkred; margin: 10px; padding: 10px;" onclick="MSCChatWidgets.recommendationQuickView(\'' + pn + '\')">' + pn + '</div>';
	},
	recommendationQuickView: function(pn){
		console.log('in passthrough');
		var div = document.createElement('div');
		div.setAttribute('data-itemNumber', pn);
		div.setAttribute('data-link', 'https://www.mscdirect.com/EnhancedItemQuickViewModal?storeId=10054&langId=-1&catalogId=10001&itemId=1021597&searchterm=' + pn + '&from=horiCertona&cartLoc=undefined');
		window.recommendationQuickView(div);
		/*
		 <div class="ui mini gray button v4-recs-quickview-button" onclick="recommendationQuickView(this)"

		 data-itemnumber="00227413"
		 data-link="
		 /EnhancedItemQuickViewModal?
		 storeId=10054&
		 langId=-1&
		 catalogId=10001&
		 itemId=1021597&
		 searchterm=00227413&
		 from=horiCertona&
		 cartLoc=undefined" style="margin-top: -14.1406px; margin-left: -44.9219px;">Quick View</div>
		 */
	}

};
webChat.widgetKeyword = function(str){
	//customized for MSC Direct
	//uses @[a-z]{2}
	if(str.match(/@PN[0-9]+/i)){
		return MSCChatWidgets.partNumber;
	}
	return false;
}

webChat.writeMessageBlock = function(body, chatMessageClass, settings){
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
	//parse date,
	var ampm = 'AM', date = new Date(body.timestamp), dateStr = '';
	var hours = parseInt(date.getHours());
	var minutes = date.getMinutes().toString();
	if(hours > 12){
		ampm = 'PM';
		hours -= 12;
	}

	//todo this needs to go into settings
	var channelUrl = 'mscdirect.com';
	var widget, widgets = [], widgetStr = '';
	var i, a = body.message.split(/(\s)+/), newtab;
	for(i in a){
		//first handle any recognized URLs
		if(a[i].match(/^((www\.[-a-z0-9]+)|(http:\/\/)|(https:\/\/))/)){
			//note we assume that www's go to http vs. https
			//a good website will handle insecure redirects, but a non-existent cert would cause a failure
			//we want to remain in-tab for MSC Direct URLs
			newtab = a[i].toLowerCase().match(channelUrl) ? '' : 'target="_blank"';
			a[i] = '<a ' + newtab + ' href="' + (a[i].match(/^www/) ? 'http://' : '') + a[i] + '">' + a[i] + '</a>';
		}else if(widget = webChat.widgetKeyword(a[i])){
			widgets.push([
				widget,
				a[i]
			]);
		}else{
			//2019-03-23: all other HTML is escaped; alas we'd like the agent to be able to send bold or underlined text but we're not ready for this yet
			a[i] = htmlEntities(a[i]);
		}
	}
	body.message = a.join(' ');

	dateStr = hours + ':' + (minutes.length === 1 ? '0' : '') + minutes + '&nbsp;' + ampm;
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
	webChat.messages.scrollTop = webChat.messages.scrollHeight;
}