function htmlEntities(str) {
	return String(str).replace(/&/g, '&').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var MSCChatWidgets = {
	/**
	Represent a part from a part number
	 */
	partNumber: function(str){
		var pn = str.replace(/^@pn/i, '');
		//the call function is named after the global function and calls it after converting pn to a pseudo-DOM element\
		var div = document.createElement('div');
		div.setAttribute('class', 'presav-widgets partNumber recommendationQuickView');
		div.setAttribute('style', 'cursor: pointer; border: 1px solid darkred; margin: 10px; padding: 10px;');
		div.setAttribute('onclick', 'MSCChatWidgets.recommendationQuickView(\'' + pn + '\');');
		div.appendChild(document.createTextNode(pn));
		return div;
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

//as currently from customer version
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
		}else{
			//2019-03-23: all other HTML is escaped; alas we'd like the agent to be able to send bold or underlined text but we're not ready for this yet
			span.appendChild(document.createTextNode(a[i]));
			if(widget = webChat.widgetKeyword(a[i])){
				widgets.push([
					widget,
					a[i]
				]);
			}
		}
		span.appendChild(document.createTextNode(' '));
	}

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

	//add widgets
	if(widgets){
		for(i in widgets){
			presavMessageWrap.appendChild(widgets[i][0]);
		}
	}
	webChat.messages.scrollTop = webChat.messages.scrollHeight;
}