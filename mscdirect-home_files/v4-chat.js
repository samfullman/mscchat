
$(document).ready(function() {
	/*
	bind behavior of help button(s)
	*/
	if('undefined' != typeof _MSCGlobal_.chatFlagValue  && (_MSCGlobal_.chatFlagValue === 0 || _MSCGlobal_.chatFlagValue === 2)){
		$("#help-options .help-right.chat,#help-options .help-left.chat").attr("onclick", "").click(function() {
			if(_MSCGlobal_.chatFlagValue === 0){
				unavailableChat();							//paint function
			}else if(_MSCGlobal_.chatFlagValue === 2){
				advancedChat(
					_MSCGlobal_.chatFlagValue, 
					_MSCGlobal_.allowedTime, 
					_MSCGlobal_.userType, 
					_MSCGlobal_.avayaGuestFlagEnabled, 
					_MSCGlobal_.punchOutSessionObject, 
					_MSCGlobal_.avayaPOFlagEnabled
				);
			}
		});
	}

	/*
	Only responsibility here: show or do not show the live chat button
	*/
	if( _MSCGlobal_.chatFlagValue === 2 && _MSCGlobal_.allowedTime){
		if(_MSCGlobal_.userType === 'G' && _MSCGlobal_.avayaGuestFlagEnabled){
			bottomLiveChat();
		}else if(_MSCGlobal_.userType === 'G' && !_MSCGlobal_.avayaGuestFlagEnabled){
			//do nothing
		}else if(_MSCGlobal_.punchOutSessionObject && _MSCGlobal_.avayaPOFlagEnabled){
			bottomLiveChat();
		}else if(_MSCGlobal_.punchOutSessionObject && !_MSCGlobal_.avayaPOFlagEnabled){
			//do nothing
		}else {
			bottomLiveChat();
		}
	}

});

function advancedChat(){
	var referer=window.location.pathname;
	if(_MSCGlobal_.allowedTime){
		if(_MSCGlobal_.userType === 'G' && _MSCGlobal_.avayaGuestFlagEnabled){
			invokeChatPingCall();														// hand-off: promise
		}else if(_MSCGlobal_.userType === 'G' && !_MSCGlobal_.avayaGuestFlagEnabled){
			notRegisteredChat(referer);													// paint function
		}else if(_MSCGlobal_.punchOutSessionObject && _MSCGlobal_.avayaPOFlagEnabled){
			invokeChatPingCall();														// hand-off: promise
		}else if(_MSCGlobal_.punchOutSessionObject && !_MSCGlobal_.avayaPOFlagEnabled){
			unavailableChat();															// paint function
		}else {
			invokeChatPingCall();														// hand-off: promise
		}
	}else{
		//outside 8-20
		missedChat();																	// paint function
	}
	return false;
}

function invokeChatPingCall(){
	var url = "/chatavailability/CheckChatAvailability.jsp";
		var data = "mode=agentAvailability";
		var ajaxRequest = $.ajax({ 
			url: url,
			data: data,
			type: 'POST',
			cache: false,
			success: function (dataStr) {
				dataStr = $.trim(dataStr);
				if("" != dataStr && dataStr == 'true'){
					availableChat();													// paint function
				}else{
					missedChat();														// paint function
				}
			},
			error: function () {
				missedChat();															// paint function
			}
	 });
}

function bottomLiveChat(){
	$('.bottom_chat_btn').remove();
	var chat_button = '<button class="bottom_chat_btn">Live Chat</button>';
	$("body").prepend(chat_button);
	$('.bottom_chat_btn').show();
	$('.bottom_chat_btn').click(function(){
		//function provided by Presidio
		initChat(
			_MSCGlobal_.userType,
			_MSCGlobal_.firstName,
			_MSCGlobal_.lastName,
			_MSCGlobal_.email,
			_MSCGlobal_.phoneNumber
		);
	});
}

//--- paint functions ---
function missedChat(){
	$("#chat-modal-overlay").remove();
	var chat_missed = '<div id="chat-modal-overlay"><div id="chat-modal-overlay-content"><div style="text-align: right; cursor: pointer; margin-bottom: 4px" onclick="$(\'#chat-modal-overlay\').hide()">x</div><img src="https://cdn.mscdirect.com/global/application-content/images/header/logo.png?v=244" id="msc-logo"><h3 style="color: #006699;">We\'re sorry we missed you... </h3><p>	Our dedicated Chat eCommerce Customer Support Representatives are available Monday through Friday, 8am - 8pm ET.You can call us toll free at 1-800-753-7970 or email us at <a href="mailto:cust_service@mscdirect.com">cust_service@mscdirect.com</a>.</p><p>General customer service is available Monday through Friday 7am-11pm ET and Saturday 8am-5pm ET and can be accessed by calling 1-800-645-7270.</p>	</div></div>';
	if( $("#chat-modal-overlay").length ==0){
		$("body").prepend(chat_missed);
	}
	$("#chat-modal-overlay").show();
}

function availableChat(){
	//previously named initChat but initChat is reserved for Presidio
	$("#chat-modal-overlay").remove();
	var chat_available = '<div id="chat-modal-overlay"><div id="chat-modal-overlay-content" class="success_msg"><div style="float: right; cursor: pointer; margin-bottom: 4px" onclick="$(\'#chat-modal-overlay\').hide()">x</div><div class="text-center"> <strong>Avaya Chat is currently available.</strong></div>	</div></div>';
	if( $("#chat-modal-overlay").length ==0){
		$("body").prepend(chat_available);
	}
	$("#chat-modal-overlay").show();
}

function unavailableChat(){
	$("#chat-modal-overlay").remove();
	var chat_unavailable = '<div id="chat-modal-overlay"><div id="chat-modal-overlay-content"><div style="text-align: right; cursor: pointer; margin-bottom: 4px" onclick="$(\'#chat-modal-overlay\').hide()">x</div><img src="https://cdn.mscdirect.com/global/application-content/images/header/logo.png?v=244" id="msc-logo"><h3 style="color: #006699;">We\'re sorry, chat is currently unavailable. </h3><p> Our dedicated Chat eCommerce Customer Support Representatives are available Monday through Friday, 8am - 8pm ET.You can call us toll free at 1-800-753-7970 or email us at <a href="mailto:cust_service@mscdirect.com">cust_service@mscdirect.com</a>.</p><p>General customer service is available Monday through Friday 7am-11pm ET and Saturday 8am-5pm ET and can be accessed by calling 1-800-645-7270.</p>	</div></div>';
	if( $("#chat-modal-overlay").length ==0){
		$("body").prepend(chat_unavailable);
	}
	$("#chat-modal-overlay").show();
}

function notRegisteredChat(referer){
	var chat_notReg = '<div id="chat-overlay"><div id="chat-overlay-content">		<div style="text-align: right; cursor: pointer; font-size: 12px; margin-bottom: 4px" onclick="$(\'#chat-overlay\').hide()">X</div>		<div id="chat-overlay-left">		<p><strong>Chat with MSC!</strong></p>		<p>We\'re here to help - if you have any questions about our full line of products please login to chat with our customer service representatives or metalworking experts.</p>		<p>After logging in click "Chat" at the top of any page to begin!</p>			<!-- Large button group -->			<div class="chat-login-button-container">			<button class="btnchat btnchat-primary btnchat-lg" type="button" onclick="document.location=\'/webapp/wcs/stores/servlet/LogonForm?chatRef='+referer+'&intcmp=RegisteredChat_Header_Icon_2014_v1\'">				Login to Chat with MSC Now!			</button>			</div>		</div>		<div id="chat-overlay-right">		<p><strong>Don\'t have an account?</strong></p>		<p>Not a problem, you can <a href="/RegisterNewUserView">quickly register</a> here.</p>		</div>	</div></div>';
	if( $("#chat-overlay").length ==0){
		$("body").prepend(chat_notReg);
	}
	$("#chat-overlay").show();
}
