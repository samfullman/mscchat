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

	var a = body.message.split(/(\s)+/);
	for(var i in a){
		if(a[i].match(/^((www\.[-a-z0-9]+)|(http:\/\/)|(https:\/\/))/)){
			//note we assume that www's go to http vs. https
			//a good website will handle insecure redirects, but a non-existent cert would cause a failure
			a[i] = '<a target="_blank" href="' + (a[i].match(/^www/) ? 'http://' : '') + a[i] + '">' + a[i] + '</a>';
		}
	}
	body.message = a.join(' ');

	dateStr = hours + ':' + (minutes.length === 1 ? '0' : '') + minutes + '&nbsp;' + ampm;

	var message = '<div class="presav-message-wrap ' + (chatMessageClass ? chatMessageClass : '') + '">' +
		'<div class="presav-timestamp" data-timestamp="' + body.timestamp + '">' + dateStr + '</div>' +
		'<div class="presav-messager">' + (body.displayName ? body.displayName : 'Agent') + '</div>' +
		'<div class="presav-message">' + body.message + '</div>' +
		'</div>';
	var chat = webChat.messages.innerHTML;
	webChat.messages.innerHTML = chat + message;
	webChat.messages.scrollTop = webChat.messages.scrollHeight;
}