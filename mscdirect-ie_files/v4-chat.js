var userType;
var firstName;
var lastName;
var phoneNumber;
var email;

$(document).ready(function() {
	if('undefined' != typeof chatFlagValue  && (chatFlagValue == 0 || chatFlagValue == 2)){
		$("#help-options .help-right.chat,#help-options .help-left.chat").attr("onclick", "").click(function() {
			if(chatFlagValue == 0){
				chatFlagOff();
			}else if(chatFlagValue == 2){
				advancedChat();
			}
		});
	}
});

function chatFlagOff(){
	unavailableChat();
}

function chatOnLoad(chatFlagValue, allowedTime, userType, avayaGuestFlagEnabled, punchOutSessionObject, avayaPOFlagEnabled){
	if( chatFlagValue == '2' && allowedTime){
		if(userType == 'G' && avayaGuestFlagEnabled){
			bottomLiveChat();
		}else if(userType == 'G' && !avayaGuestFlagEnabled){
			//do nothing
		}else if(punchOutSessionObject && avayaPOFlagEnabled){
			bottomLiveChat();
		}else if(punchOutSessionObject && !avayaPOFlagEnabled){
			//do nothing
		}else {
			bottomLiveChat();
		}
	}
}

function invokeAdvacedChat(chatFlagValue, allowedTime, userType, avayaGuestFlagEnabled, punchOutSessionObject, avayaPOFlagEnabled,firstName, lastName, phoneNumber, email){
	this.userType=userType;
	this.firstName=firstName;
	this.lastName=lastName;
	this.phoneNumber=phoneNumber;
	this.email=email;
	var referer=window.location.pathname;
	if(allowedTime){
		if(userType == 'G' && avayaGuestFlagEnabled){
			invokeChatPingCall();
		}else if(userType == 'G' && !avayaGuestFlagEnabled){
			notRegisteredChat(referer);
		}else if(punchOutSessionObject && avayaPOFlagEnabled){
			invokeChatPingCall();
		}else if(punchOutSessionObject && !avayaPOFlagEnabled){
			unavailableChat();
		}else {
			invokeChatPingCall();
		}
	}else{
		//outside 8-20
		missedChat();
	}
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
					initChat();
				}else{
					missedChat();
				}
			},
			error: function () {
				missedChat();
			}
	 });
}

function bottomLiveChat(){
	var chat_button = '<button class="bottom_chat_btn">Live Chat</button>';
	$("body").prepend(chat_button);
	$('.bottom_chat_btn').show();
	$('.bottom_chat_btn').click(function(){
		advancedChat();
	});
}

function missedChat(){
	$("#chat-modal-overlay").remove();
	var chat_missed = '<div id="chat-modal-overlay"><div id="chat-modal-overlay-content"><div style="text-align: right; cursor: pointer; margin-bottom: 4px" onclick="$(\'#chat-modal-overlay\').hide()">x</div><img src="https://cdn.mscdirect.com/global/application-content/images/header/logo.png?v=244" id="msc-logo"><h3 style="color: #006699;">We\'re sorry we missed you... </h3><p>	Our dedicated Chat eCommerce Customer Support Representatives are available Monday through Friday, 8am - 8pm ET.You can call us toll free at 1-800-753-7970 or email us at <a href="mailto:cust_service@mscdirect.com">cust_service@mscdirect.com</a>.</p><p>General customer service is available Monday through Friday 7am-11pm ET and Saturday 8am-5pm ET and can be accessed by calling 1-800-645-7270.</p>	</div></div>';
	if( $("#chat-modal-overlay").length ==0){
		$("body").prepend(chat_missed);
	}
	$("#chat-modal-overlay").show();
}

function initChat(){
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
