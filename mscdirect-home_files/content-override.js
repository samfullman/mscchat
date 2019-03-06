function setCookieValueF(e,t,o,i,n,r){var a=new Date;a.setTime(a.getTime()),o&&(o=1e3*o*60*60*24);var s=new 
Date(a.getTime()+o);document.cookie=e+"="+escape(t)+(o?";expires="+s.toGMTString():"")+(i?";path="+i:"")+(n?";domain="+n:"")+(r?";secure":"")}function 
getCookieF(e){var t="; "+document.cookie,o=t.split("; "+e+"=");return-1!==thisURL.indexOf("file:")&&"noPromoReg"===e?"noshow":2==o.length?o.pop().split(";").shift():void 
0}function deleteCookieF(e,t){setCookieValueF(e,"",-1,"/","",!0),t&&confirm(e+" now set to <"+getCookieF(e)+"> 
(should be undefined)\n\nReload page?")&&location.reload()}function zeroPad(e,t){var 
o=t-e.toString().length+1;return Array(+(o>0&&o)).join("0")+e}function isCurrentCustomer(){return void 
0!=getCookieF("MTLPhone")||void 0!=getCookieF("PUNCHIN_PROMO")||void 
0!=getCookieF("PUNCHIN_EXPRESS")||"true"==getCookieF("currentCustomerF")}function isLoggedInF(){return 
loggedInF="true"===getCookieF("loggedIn")}function isInFrame(){return"boolean"!=typeof 
nwEspot?!1:window.self!==window.top}function 
isPunchout(){return!("Y"!=getCookieF("seePromo")&&"N"!=getCookieF("seePromo"))}function 
hideHomepagePromo(){return"N"==getCookieF("seePromo")}function isPunchin(){return!(void 
0==getCookieF("PUNCHIN_PROMO")&&void 0==getCookieF("PUNCHIN_EXPRESS"))}function hideExtras(){return 
isPunchout()||hidePromo()}function hideExpress(){return!(void 0==getCookieF("PUNCHIN_EXPRESS"))}function 
hidePromo(){return!(void 0==getCookieF("PUNCHIN_PROMO"))}function hideSignup(){for(var 
e=[".com/HaveAccountView",".com/LocateAccountView",".com/RegisterNewUserView",".com/404",".com/holiday-sale","file:"],t=0;t<e.length;t++)if(-1!=thisURL.indexOf(e[t]))return!0;return!1}function 
isLoyalty(){for(var 
e=[".com/loyal",".com/joinnow",".com/thankyou",".com/holiday-sale"],t=0;t<e.length;t++)if(-1!=thisURL.indexOf(e[t]))return!0;return!1}function 
noPromoPage(){if(isLoyalty())return!0;if(-1!==thisURL.indexOf("cid=af"))return!0;if(-1!==thisURL.indexOf("catalogView=true"))return!0;for(var 
e=".com",t=["/HaveAccountView","/webapp/wcs/stores/servlet/HaveAccountView","/LocateAccountView","/webapp/wcs/stores/servlet/LocateAccountView","/RegisterNewUserView","/webapp/wcs/stores/servlet/RegisterNewUserView","/LogonForm","/webapp/wcs/stores/servlet/LogonForm","/ui/OrderHistory","/404","/gsp-facilities","/gsp-metalworking","/gsp-all","/products/branded-post-card","/welcome-enco","/acspecials","/ospromos","/enpromos","/vsspecials","/join-onestop","/onestop","/my-onestop","/go-register","/now-register","/register-me","/newonestop","/welcomeonestop","/rethink","/toolingcosts","/mfg","/mfgpc","/mrodata","/mrodatalt","/mrodataen","/mrodatapc2","/tco","/secretsavings","/decotool","/rta","/RegisterExistingAccountView","/webapp/wcs/stores/servlet/RegisterExistingAccountView","/CreateContactCntrCmd","/webapp/wcs/stores/servlet/CreateContactCntrCmd","/UserRegistrationAdd","/webapp/wcs/stores/servlet/UserRegistrationAdd","/Logon","/CompleteUserRegistrationCmd","/ConnectAccountCmd"],o=0;o<t.length;o++)if(-1!==thisURL.indexOf(e+t[o]))return!0;return!1}function 
checkCS(e,t){t||(t="S1");for(var o=0;o<e.length;o++)if(getCookieF(t)==e[o]||getCookieF(t)==e[o].replace(/ 
/g,"%20"))return!0;return!1}function isMs(){var e=["6Z8XY6 Q *GZS I(","6Z8XY6 9 *GZS 1("];return 
checkCS(e,"S1")}function isSs(){var e=["G6QCC *GZS M(","4Z5U G6QCC *GZS 2("];return checkCS(e,"S1")}function 
isOss(){var 
e=["VmxOQlVBPT0=","VmxOQk1nPT0=","VWtWQlF3PT0=","VTBGVk1RPT0=","VTBGVk1nPT0=","VDFOUw==","VDFOU01nPT0=","VDFORk13PT0=","VDFOU013PT0=","VDFORk5BPT0=","VDFOT1VBPT0="];return 
checkCS(e,"S6")}function isBp(){var e=["VkVOUU1nPT0=","VkVOUU1RPT0=","VkVOUU13PT0="];return 
checkCS(e,"S6")}function isTa(){var e=["VkVOUU5BPT0=","VkVOUU5RPT0="];return checkCS(e,"S6")}function isLs(){var 
e=["VTB4RA==","VTB4T1F3PT0=","VGxOTVF3PT0=","VGxOTVRnPT0="];return checkCS(e,"S6")}function isMa(){var 
e=["VFVGRA==","VFVGT1F3PT0=","VGsxQlF3PT0=","VGsxQlRnPT0="];return checkCS(e,"S6")}function isMb(){var 
e=["VFVKRA==","VFVKT1F3PT0=","VGsxQ1F3PT0=","VGsxQ1RnPT0="];return checkCS(e,"S6")}function isVs(){var 
e=["VmxOTk1RPT0=","VmxOTk1nPT0="];return checkCS(e,"S6")}function isBetterMROTest(){var e=["6Z8XY6 Q *GZS 
I(","6Z8XY6 9 *GZS 1(","CQ5SZ *GZS K(","4Z5U CQ5SZ *GZS O("];return checkCS(e,"S1")}function 
oneStopReady(){return 
oneStop&&(oneStopPilot||flyoutAllowedForOneStop)&&"never"!==getCookieF("oneStopShown")&&"temp"!==getCookieF("oneStopShown")&&(isPDP||isTN||isPLA)}function 
isOneStopPage(){for(var 
e=[".com/join-onestop"],t=0;t<e.length;t++)if(-1!=thisURL.indexOf(e[t]))return!1;return!0}function 
isiPhoneX(){var 
e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=window.devicePixelRatio||1,o={width:window.screen.width*t,height:window.screen.height*t};return 
e&&1125==o.width&&2436===o.height?!0:!1}function removeSpecialCharactersFromString(e){return 
e.replace(/[^A-Z0-9]+/gi,"")}function 
promoInfo(e,t){PopUp=window.open("//cdn.mscdirect.com/global/scripts/marketing/promo.html?id="+e,"PopUp","width=440,height=600,top=40,left=40"),PopUp.focus(),"Y"==autoApplyPromo(t)&&($(".promo-see-details").hide(),$(".promo-applied").show())}function 
showPromo(e,t,o,i,n){var 
r=!($("#pla-cta").length>0||$("#pla-cta-sw").length>0)||isCurrentCustomer()||isPunchout()||hideSignup()||"noshow"===getCookieF("noPromoReg")?"":' 
style="display: none"';if(!isInFrame()&&!hideExtras()&&!noPromoPage()){var 
a="",s=(t+","+i+","+n).replace(",,",",");","==s.charAt(s.length-1)&&(s=s.slice(0,-1));var l=' <span 
class="promo-or">OR</span> ';""!=i&&(a=l+i.replace(/,/g,l));var c='<div id="sub-promo" 
onclick="promoInfo(\''+o+"','"+s+"')\""+r+'><span id="promo-desc">'+e+'</span>. <span 
class="promo-enter-code">ENTER CODE:</span> '+t+a+' <span class="promo-see-details">CLICK TO APPLY 
&#9654;</span><span class="promo-applied">âœ” PROMO APPLIED</span></div>',d='<span class="promo-cat-link"><a 
href="javascript:void(0)" onclick="promoInfo(\''+o+"','"+s+"')\">See Today's Promo (<strong>"+t+a+"</strong>) 
&#9654;</a></span>";-1!=thisURL.indexOf("/ShoppingCartView")||-1!=thisURL.indexOf("/ApplyPromotionCode")?($("#bd").prepend(c),autoAddString='<div 
class="promo-enter-code" onclick="promoInfo(\''+o+"','"+s+'\')" style="cursor:pointer; margin: 0;">CLICK TO 
APPLY TODAY\'S PROMO 
&#9654;</div>'):$("#homepage-promo").length>0?$("#homepage-promo").html(c):$(".v4-browse-container").length>0?$(".v4-browse-container 
.ui.grid.container").prepend('<div class="sixteen wide center aligned column">'+c+"</div>"):$("#main-container 
.ui.unstackable.grid.container").length>0?$("#main-container .ui.unstackable.grid.container").prepend('<div 
class="sixteen wide center aligned column">'+c+"</div>"):$("#main-container 
.ui.grid.container.center.aligned").length>0?$("#main-container 
.ui.grid.container.center.aligned").prepend('<div class="sixteen wide center aligned 
column">'+c+"</div>"):$("#main-container .ui.grid.container").length>0?$("#main-container 
.ui.grid.container").prepend('<div class="sixteen wide center aligned 
column">'+c+"</div>"):$("#main-content-sub").length>0?$("#main-content-sub").prepend(c):$("#catalog-header-right").length>0?$("#catalog-header-right").prepend(d):$("#bd").length>0&&0==$(".slider.leaderboard").length?$("#bd").prepend(c):$("#pdp-promo-cta").length>0?$("#pdp-promo-cta").html(c):$("#header-container").length>0&&0==$("#homepage-promo").length&&$("#header-container").after(c)}}function 
hideRegPromo(){$("#pla-cta").hide(),$("#pla-cta-sw").hide(),$("#sub-promo").show(),setCookieValueF("noPromoReg","noshow",90,"/","",!0)}function 
showFirstTime(){if(!($("#pla-cta").length>0||$("#pla-cta-sw").length>0)||isCurrentCustomer()||isPunchout()||hideSignup())if("shown"==getCookieF("firsttime-promo")||isCurrentCustomer()||isPunchout()||isLoyalty()||hideSignup()||!showFirst)showReminder();else{setCookieValueF("firsttime-promo","shown",90,"/","",!0);var 
e='<div id="first-time-container"><div id="first-time-form"><div id="first-time-close" 
onclick="$(\'#first-time-container\').fadeOut()">x</div><div id="first-time-signup-title">Free Ground Shipping 
on Your Next Order <span>of $99 or more!</span></div><div id="first-time-signup-copy">Enter your email to 
receive your promo code immediately.*</div><div id="first-time-form-signup-container"><form method="post" 
action="http://www.pages03.net/mscmarketing/signupnew/Signup" pageId="6236432" siteId="212070" 
parentPageId="6236431" target="signup-frameFF" onsubmit="return doSubmitFF(this);"><input type="text" 
onfocus="if(this.value ==\'Email address\' ) this.value=\'\'" onblur="if(this.value==\'\') this.value=\'Email 
address\'" value="Email address" size="42" id="first-time-signup-email" name="Email" 
class="first-time-signup-email"><input type="image" border="0" alt="Sign Up" 
src="//cdn.mscdirect.com/global/media/marketing/home/email-signup-btn.png" class="button" value="Submit" 
name="SubmitBullsEye" id="first-time-signup-button"><input type="hidden" name="formSourceName" 
value="StandardForm"><!-- DO NOT REMOVE HIDDEN FIELD sp_exp --><input type="hidden" name="sp_exp" 
value="yes"></form></div><div id="signup-frameFF-container"><iframe scrolling="No" frameborder="0" 
id="signup-frameFF" marginheight="0" marginwidth="0" name="signup-frameFF"></iframe></div><br clear="both"><div 
id="first-time-code">Thank you! Please enter code <strong>FIRSTFF</strong> to receive your free ground shipping 
on orders of $99 or more! <span>Offer is valid once per contact and other exclusions may apply. Online 
only.</span></div><div id="first-time-disclaimer">* You will be signed up to receive access to sales, 
promotions, free shipping, & 
more.</div></div></div>';$("body").prepend(e),-1!=thisURL.indexOf("/product/details/")&&showReminder()}else 
if("noshow"!==getCookieF("noPromoReg")){var t=$("#header-container").length>0?"javascript:void(0)\" 
onclick=\"$('.fbox').show();":"#register-info";fboxClose=$("#header-container").length>0?'<div id="fbox-close" 
onclick="$(\'.fbox\').hide();"></div>':"",$("#pla-cta").html('<div class="new-cart-msg"><strong>New to 
MSC?</strong> Click <strong>secure checkout</strong> to register and we will email you a code for up to 
<strong>25% off</strong> your next order! <span class="pla-info-link">(<a href="#register-info" 
class="pla-modal">more info</a>)</span><br><span class="already-cust">Already registered? <a 
href="javascript:void(0)" onclick="hideRegPromo()">Click here</a>.</span></div>'),$("#pla-cta-sw").html('<div 
class="new-cart-msg-sw">New to MSC? <a 
href="/RegisterNewUserView?intcmp=RegCTA_Promo_T_'+vDate+'_v1"><strong>Register now</strong></a> and we will 
email you a code for up to <strong>25% off</strong> your next order order! <span class="pla-info-link">(<a 
href="'+t+'" class="pla-modal">more info</a>)</span><br><span class="already-cust">Already registered? <a 
href="javascript:void(0)" onclick="hideRegPromo()">Click here</a>.</span></div>');var o='<div 
id="register-info">'+fboxClose+'<p><strong>The benefits of being a registered customer</strong><br>Save up to 
25% off this order and access to customer pricing, express checkout and more!</p><ol><li>With items in your 
cart, click Secure Checkout</li><li>Complete your registration with MSC</li><li>Receive email with your code for 
up to 25% off this order</li></ol><br><img 
src="//cdn.mscdirect.com/global/media/images/marketing/registration-email.jpg?v=2"></div>';$("body").append(!$("#header-container").length>0?'<div 
style="display:none">'+o+"</div>":'<div id="fbox-bg" class="fbox" onclick="$(\'.fbox\').hide();"></div><div 
id="fbox" class="fbox">'+o+"</div>"),$("#pla-cta").length>0&&$(".pla-modal").fancybox()}else 
$("#pla-cta").hide(),$("#pla-cta-sw").hide()}function 
doSubmitFF(e){emailPatternFF.test(e.Email.value)?($("#first-time-code").show(),stopFormFF||(stopFormFF=1,setTimeout(function(){e.Email.value="Email 
address",$("#signup-frameFF-container").fadeOut()},2500),setTimeout(function(){document.getElementById("signup-frameFF").src="",stopFormFF=0},3500))):alert("Please 
enter a valid email address.")}function emailSignupFooter(e){return 
emailPatternFF.test(e.Email.value)?(utag.link({event_name:"signup complete"}),alert("Thank you for signing 
up!"),e.Email.value="Email address",!0):(alert("Please enter a valid email address."),!1)}function 
isReminderPage(){return 
showRegisterReminder&&!isLoggedInF()&&(isPDP||isTN||isPLA||-1!==thisURL.indexOf("Zz"))&&"shown"!==getCookieF("reminderShown")&&!isPunchout()&&!isInFrame()}function 
buildReminder(e){var 
t="",o="",i=isPDP&&$(".reminder-cta").length>0?"Test":"Control",n=isPDP||isPLA?"FromPDP":"FromTN",r="Test"==i?"2":"1";if("login"==e?(whichImageWhite="icn-login.png",t="<span>Login</span> 
to see your <span>Pricing</span>, use <span>Express Checkout</span> & <span>More</span>!",o="Login 
Now!"):"register"==e&&(whichImageWhite="icn-register.png",t="<span>Register</span> today and receive up to 
<span>25%</span> off your first order!",o="Register Now!"),isPDP)"Test"==i?$(".reminder-cta").html('<div 
class="reminder-cta"><img src="//cdn.mscdirect.com/global/media/images/home/'+whichImageWhite+'"><div 
class="reminder-cta-text">'+t+"</div></div>"):($("#pdp-addtocart-notes-container").prepend('<div 
id="reminder-inline" class="reminder-box 
'+whichImageWhite.replace(".png","")+'">'+t+"</div>"),$("#pdp-atc-box").append('<div id="v4-reminder-inline" 
class="reminder-box '+whichImageWhite.replace(".png","")+'">'+t+"</div>"));else{$("body").prepend('<div 
id="reminder-top" class="reminder-box">'+t+"<div>"+o+"</div></div>");var 
a=$("#reminder-top").outerHeight();$("body").css("background-position","0 "+a+"px")}$(".reminder-box, 
.reminder-cta").click(function(){isPDP&&setCookieValueF("reminderShown","shown",reminderTimeout,"/","",!0),document.location="login"==e?"/LogonForm?intcmp=LoginReminder_"+n+"_New_"+year+zeroPad(month,2)+"_v"+r:"/RegisterNewUserView?intcmp=RegReminder_"+n+"_New_"+year+zeroPad(month,2)+"_v"+r})}function 
showReminder(){if(isReminderPage()){var 
e="";isCurrentCustomer()?isLoggedInF()||(e="login",oneStopReady()?(createOneStop(e,"flyout"),showOneStop()):buildReminder(e),isPDP||setCookieValueF("reminderShown","shown",reminderTimeout,"/","",!0)):(e="register",oneStopReady()?(createOneStop("login","flyout"),showOneStop()):(0===$("#pla-cta-sw").length&&buildReminder(e),isPDP||setCookieValueF("reminderShown","shown",reminderTimeout,"/","",!0)))}}function 
notRegChat(){setCookieValueF("popChat","true",1,"/","",!0),$("body").append('<div id="chat-overlay">	<div 
id="chat-overlay-content">		<div style="text-align: right; cursor: pointer; font-size: 12px; 
margin-bottom: 4px" onclick="$(\'#chat-overlay\').hide()">x</div>		<div id="chat-overlay-left">		
<p><strong>Chat with MSC!</strong></p>		<p>We\'re here to help - if you have any questions about our 
full line of products please login to chat with our customer service representatives or metalworking 
experts.</p>		<p>After logging in click "Chat" at the top of any page to begin!</p>			
<!-- Large button group -->			<div class="chat-login-button-container">			
<button class="btnchat btnchat-primary btnchat-lg" type="button" 
onclick="document.location=\'/webapp/wcs/stores/servlet/LogonForm?intcmp=RegisteredChat_Header_Icon_2014_v1\'">				
Login to Chat with MSC Now!			</button>			</div>		</div>		
<div id="chat-overlay-right">		<p><strong>Don\'t have an account?</strong></p>		<p>Not a 
problem, you can <a href="/RegisterNewUserView">quickly register</a> here.</p>		</div>	
</div></div>'),$("#chat-overlay").show()}function popChat(){"string"!=typeof 
custEmail&&(custEmail=""),"string"!=typeof custPhone&&(custPhone="");var 
e="cust="+getCookieF("legAc")+"&custEmail="+custEmail+"&custPhone="+custPhone+"&";return 
window.open("https://livechat.mscdirect.com/netagent/cimlogin.aspx?"+e+"questid=58B7041A-B39A-4082-95E6-59FACCC3D928&portid=ED33911E-A47D-4061-842D-6DD0A358D931&nareferer="+escape(document.location),"_blank","resizable=yes,width="+chatWindowSize.width+",height="+chatWindowSize.height),!1}function 
hideChat(){"undefined"!=typeof 
chatFlagValue&&"1"==chatFlagValue&&registeredChat&&(isLoggedInF()?isLoggedInF()&&"true"==getCookieF("popChat")&&($(".chatIcon 
a:first").addClass("chatLink"),$("#primary").prepend('<div style="border: 1px solid #bce8f1; background: 
#d9edf7; color: #31708f; padding: 10px; border-radius: 5px; text-align: center; margin-bottom: 10px; cursor: 
pointer; font-size: 14px;" onclick="popChat()">Click here to <strong>chat</strong> with MSC 
now!</div>'),deleteCookieF("popChat",0)):(notLoggedInHTML='<a href="javascript:void(0)" 
onclick="notRegChat()"><img alt="chat icon" 
src="//cdn.mscdirect.com/global/application-content/images/content/chat-header.png"></a>',$(".chatIcon").html(notLoggedInHTML),$(".header-text-nav-chat").html(notLoggedInHTML),$(".help-right.chat").attr("onclick","").click(function(){notRegChat()}),$(".chat-link").attr("onclick","").click(function(){notRegChat()}),-1!=thisURL.indexOf("RegisteredChat")&&$("#primary 
.segment:first").prepend('<div style="border: 1px solid #fbf0d7; background: #fcf8e3; color: #8a6d3b; padding: 
10px; border-radius: 5px; text-align: center; margin-bottom: 10px"><strong>You must be logged in to use 
chat.</strong></div>')))}function 
loyalty(){isLoggedInF()&&-1!=thisURL.indexOf("/MyAccountView")&&-1!=document.cookie.indexOf("loyaltyCTA")&&0==$(".error.accountLockedError").length&&(("1"==getCookieF("loyaltyCTA")||"2"==getCookieF("loyaltyCTA")||"3"==getCookieF("loyaltyCTA")||"4"==getCookieF("loyaltyCTA"))&&$("#primary").prepend('<a 
href="/joinnow?cid=LTPGroup'+getCookieF("loyaltyCTA")+'_MyAcct_CTA_November2015_v1"><img 
src="//cdn.mscdirect.com/global/media/images/marketing/loyalty-myacct.jpg" 
border="0"></a>'),setCookieValueF("loyaltyCTA","false",1,"/","",!0))}function 
updateOneStopReturnURL(e){oneStopReturnURL=e,$(".onestop-return-url").attr("value",e)}function 
activateOneStop(e){var 
t=0===$("#onestop-box-modal").length;if(t&&createOneStop(e,"modal"),$("#onestop-box-modal").show(),t){var 
o=$("#onestop-box-modal").outerHeight();oneStopModalWidth=$("#onestop-box-modal").outerWidth(),$("#onestop-box-modal").css({"margin-left":-(oneStopModalWidth/2),"margin-top":-(o/2)})}}function 
closeOneStop(e){var 
t="never"===e?2e9:oneStopTimeout;setCookieValueF("oneStopShown",e,t,"/","",!0),$("#onestop-cover").hide()}function 
oneStopValidate(e,t){var o=!0;return $(e+" 
.onestop-required").each(function(){return""===$(this).val()?(alert("Please enter your 
"+$(this).attr("rel")),o=!1,!1):void 0}),o&&sendTagsForOneStopClick(t),o}function 
oneStopFormToggle(e,t){"register"===e?($(".onestop-form-login-box").addClass("onestop-form-hidden"),$(".onestop-form-register-box").removeClass("onestop-form-hidden"),sendTagsForOneStop(e,t)):($(".onestop-form-register-box").addClass("onestop-form-hidden"),$(".onestop-form-login-box").removeClass("onestop-form-hidden"),sendTagsForOneStop(e,t))}function 
oneStopRetrieve(e,t){sendTagsForOneStopClick(e),document.location=t}function capitalizeFirstLetter(e){return 
e.charAt(0).toUpperCase()+e.slice(1)}function createOneStopForm(e,t,o,i,n,r,a){var s="login"===e?"":" 
onestop-form-hidden",l="register"===e?"":" onestop-form-hidden",c=oneStopPilot?' style="display: 
none"':"",d="";return"string"==typeof flyoutRegistrationTestCase&&(d="Control"===flyoutRegistrationTestCase?"":" 
it's <strong>Free</strong>"),'		<div class="onestop-form-login-box'+s+'">			<div 
class="onestop-title">'+r+'</div>			<div class="onestop-already" '+c+'><span 
id="link-text">Don\'t have a login</span>? <a href="javascript:void(0)" 
onclick="oneStopFormToggle(\'register\',\''+t+'\')"><span class="onestop-action-reverse">Register</span> 
Now</a>'+d+'</div>			<div class="onestop-sub">Log in now for your personalized 
experience!<br>Access your lists, advanced functionality and more!</div>			<div 
class="onestop-form">				<div class="onestop-form-login">					
<form method="post" action="/Logon" id="onestop-form-login-'+t+'" name="onestop-form-login-'+t+'" 
onsubmit="return oneStopValidate(\'#onestop-form-login-'+t+"','"+t+' - Login\')">					
<input type="hidden" value="true" name="fromHeader" class="fsrVisible">					<input 
type="hidden" value="-1" name="langId" class="fsrVisible">					<input 
type="hidden" value="10054" name="storeId" class="fsrVisible">					<input 
type="hidden" value="10001" name="catalogId" class="fsrVisible">					<input 
type="hidden" value="" name="searchterm" disabled="disabled" id="searchTermHiddenAttribute" class="fsrVisible">					
<input type="hidden" value="true" name="hdrsrh" disabled="disabled" id="hdrsrhHiddenAttribute" 
class="fsrVisible">					<input type="hidden" value="'+oneStopReturnURL+'" 
name="URL" class="onestop-return-url" class="fsrVisible">					<input 
type="hidden" value="LogonForm" name="reLogonURL" class="fsrVisible">					<input 
type="hidden" value="Y" name="appLogin" class="fsrVisible">					<input 
class="fsrVisible" type="hidden" value="true" name="rememberMe">'+o+'					<div 
class="onestop-input-box onestop-login-input">						Username:<br>						
<input type="text" tabindex="1" name="logonId" maxlength="50" class="onestop-required" rel="Username" 
required><br>						<a onclick="oneStopRetrieve(\''+t+" - Retrieve 
Username','/ForgotUsernameView"+n+'\');" href="javascript:void(0)">Retrieve Username</a>					
</div>					<div class="onestop-input-box onestop-login-input">						
Password:<br>						<input type="password" tabindex="2" name="logonPassword" 
maxlength="50" autocomplete="off" class="onestop-required" rel="Password" required><br>						
<a onclick="oneStopRetrieve(\''+t+" - Retrieve Password','/ForgotPasswordView"+n+'\');" 
href="javascript:void(0)">Retrieve Password</a>					</div>					
<div class="onestop-submit">						<button class="onestop-login" 
tabindex="3"><span class="onestop-action">Login</span></button>					</div>					
</form>				</div>			</div>'+a+'		</div>		<div 
class="onestop-form-register-box'+l+'">			<div class="onestop-title">'+r+'</div>			
<div class="onestop-already" '+c+'><span id="link-text">Already registered</span>? <a href="javascript:void(0)" 
onclick="oneStopFormToggle(\'login\',\''+t+'\')"><span class="onestop-action-reverse">Login</span> Now</a></div>			
<div class="onestop-sub">Register now for your personalized experience!<br>Create personal lists, advanced 
features and more!</div>			<div class="onestop-form">				<div 
class="onestop-form-register">					<form method="post" 
action="/RegisterNewUserView" id="onestop-form-register-'+t+'" name="onestop-form-register-'+t+'" 
onsubmit="return oneStopValidate(\'#onestop-form-register-'+t+"','"+t+' - Register\')">					
<input type="hidden" value="'+oneStopReturnURL+'" name="URL" class="onestop-return-url" class="fsrVisible">'+o+'					
<div class="onestop-input-box onestop-register-input">						First Name:<br>						
<input type="text" tabindex="1" name="firstName" class="onestop-required" rel="First Name" required>					
</div>					<div class="onestop-input-box onestop-register-input">						
Last Name:<br>						<input type="text" tabindex="1" name="lastName" 
class="onestop-required" rel="Last Name" required>					</div>					
<div class="onestop-input-box onestop-register-input">						Email:<br>						
<input type="text" tabindex="1" name="email1" class="onestop-required" rel="Email" required>					
</div>					<div class="onestop-submit">						
<button class="onestop-login" tabindex="3"><span class="onestop-action">Register</span></button>					
</div>					</form>				</div>			</div>'+a+"		
</div>"}function createOneStop(e,t){var o="?intcmp="+e+"_Onestop"+t+"_Link_"+vDate+"_v1",i=oneStopPilot?'<span 
class="onestop-action">'+capitalizeFirstLetter(e)+"</span> to activate Your Price":"Make MSC Your Own",n='<input 
type="hidden" value="true" name="oneStopPrice">',r="flyout"===t?'<div class="onestop-nothanks-box">	<div 
class="onestop-nothanks" onclick="sendTagsForOneStopClick(\''+t+" - Close - No 
Thanks');closeOneStop('temp')\">No Thanks! The generic experience is fine.</div></div>":"",a="flyout"===t?'<div 
id="onestop-cover">	<div class="onestop-box">		<div class="onestop">			<div 
class="onestop-close" onclick="sendTagsForOneStopClick(\''+t+" - 
Close');closeOneStop('temp')\">x</div>"+createOneStopForm(e,"flyout",n,e,o,i,r)+"		</div>	
</div></div>":'<div id="onestop-box-modal">	<div class="onestop">		<div class="onestop-close" 
onclick="sendTagsForOneStopClick(\''+t+" - 
Close');$('#onestop-box-modal').hide()\">x</div>"+createOneStopForm(e,"modal",n,e,o,i,r)+"	
</div></div>";$("body").append(a)}function 
showOneStop(){$("#onestop-cover").animate({right:"0px"}),setCookieValueF("oneStopShown","temp",oneStopTimeout,"/","",!0),setCookieValueF("reminderShown","shown",reminderTimeout,"/","",!0)}function 
showOneStopHeader(){isOs&&isOneStopPage()&&$("#main-header").before('<a href="/join-onestop" style="color: #333; 
text-decoration: none;"><div style="background: #ececec; text-align: center; font-size: 11px; padding: 4px 0; 
border-bottom: 1px solid #ccc; font-weight: bold"><span id="promo-desc">Welcome <span 
class="onestop-promo-one">One</span><span class="onestop-promo-stop">Stop</span><span 
class="onestop-promo-sm">&#8480;</span> Member - Click here to see your membership 
benefits</span></div></a>')}function cleanSC(e){return e.replace(/ 
/g,"").replace(/&/g,"").replace(/\+/g,"")}function pdpBreadcrumb(){}function enableVideoOnPage(){var e='<div 
style="display: none;"><div id="video-lightbox" style="width: 640px; height: 360px; border: 
none;">Loading...</div></div>';$("body").append(e),$(".sorenson").fancybox({autoScale:!1,transitionIn:"none",transitionOut:"none",scrolling:"no",onClosed:function(){$("#video-lightbox").html("Loading...")}})}function 
removeHttpFromUrl(e){return e.replace("http:","").replace("https:","")}function extractYoutubeIdFromUrl(e){var 
t=removeHttpFromUrl(e);return 
t=-1!==t.indexOf("youtube.com/")?t.split("youtube.com/")[1].split("?")[0]:t,t=-1!==t.indexOf("youtu.be/")?t.split("youtu.be/")[1].split("?")[0]:t}function 
videoPlayerV4(e){0===$("#video-player-box").length&&$("body").append('<div id="video-player-box" style="display: 
none;"></div>'),$.fancybox.open({src:"#video-player-box",type:"inline",opts:{beforeLoad:function(){$("#video-player-box").html('<iframe 
width="640" height="360" src="'+e+'" frameborder="0" allow="autoplay; encrypted-media" 
allowfullscreen></iframe>')}}})}function videoPlayer(e,t){$(t).html(e.split("-").length<3?'<iframe width="640" 
height="360" src="https://www.youtube.com/embed/'+e+'?rel=0" frameborder="0" allow="autoplay; encrypted-media" 
allowfullscreen></iframe>':'<div class="ui center aligned basic segment"><h2>This video is currently not 
available, please try again later.</h2></div>')}function 
qaCartridgeImg(){isQuality&&$(".searchandizedVerticalImageBanner a 
img").each(function(){$(this).attr("src",$(this).attr("src").replace("qacdn","cdn"))})}function 
cartAlert(){alertPopUp=window.open("/global/scripts/messaging/alert.html?v="+Math.random(),"alertPopUp","width="+alertWindowSize.width+",height="+alertWindowSize.height+",top=40,left=40"),alertPopUp.focus()}function 
serviceAlert(e){var t=""!==e?e:"Alert - Important Service Message. <span>Click here</span> for more 
information.";-1!==thisURL.indexOf("/ShoppingCartView")||-1!==thisURL.indexOf("/MSCPunchOutShoppingCartView")?specialCartMessage():$("#homepage-slider-box").length>0&&$("#homepage-slider-box").before('<div 
id="homepage-welcome-message-alert" onclick="cartAlert()">'+t+"</div>")}function specialCartMessage(){var 
e='<div onclick="cartAlert()" style="cursor: pointer;" class="ui small message"><i class="blue exclamation 
circle icon"></i><strong>Important Service Message</strong> - Click for 
details.</div>';$("#layer1").before(e),$("#v3-cart-box").prepend(e+"<br>"),$(".homepage-promo-applied").css("top","216px"),$("#cart-controls").after(e)}function 
canvasSupported(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}function 
catalogReady(){!!navigator.userAgent.match(/Trident.*rv\:11\./);return 
enableSlideoutCatalog&&canvasSupported()&&-1===thisURL.indexOf("/FlyerView")&&-1===thisURL.indexOf("/Checkout")&&-1===thisURL.indexOf("catalogView=true")&&-1===thisURL.indexOf("/ui/OrderHistory")}function 
isTablet(){return null!=navigator.userAgent.match(/iPad/i)}function 
isSecure(){return"https:"==location.protocol}function 
UpdateCartItem(){$.ajax({url:"/UpdateCartItemView",cache:!1,success:function(e){if(e){var 
t=$(e),o=t.filter("#UpdateCartItemNum").text();$("#cartItemCount").html(o),$("#cartItemMessage").html("1"==o?"item":"items")}},error:function(){}})}function 
closeSlideout(){$(settings.objSlidePanel).animate({left:"-100%"}),$(settings.objSlidePanel).removeClass("out")}function 
slideOutTab(){$(settings.objSlideTrigger).bind("click",function(){$(settings.objSlidePanel).hasClass("out")?($(settings.objSlidePanel).animate({left:"-100%"}),$(settings.objSlidePanel).removeClass("out")):($(settings.objSlidePanel).animate({left:"0px"}),$(settings.objSlidePanel).addClass("out"),""===$("#bb-html5").attr("src")&&$("#bb-html5").attr("src",html5Path)),UpdateCartItem(),$("#chat-overlay").hide()})}function 
catalogSearch(e,t){$("#bb-html5").attr("src",html5URL),t&&$(".cat-panel .catalog-trigger").click()}function 
catalogSpecificPage(e,t){$("#bb-html5").attr("src",html5URL),t&&$(".cat-panel 
.catalog-trigger").click()}function 
updateMobileCartItemCount(){$("#v4-mobile-nav-hck-cartcount").text($("#cartItemCount").text())}function 
showTariffModal(){if("true"!==getCookieF("tariffShown")){var e='<div style="display: none"><div 
id="tariff-lightbox" class="ui basic segment" style="max-width: 700px;"><div  class="ui stackable grid">	
<div class="five wide column">		<img class="ui centered image" 
src="//cdn.mscdirect.com/global/media/images/icons/tariff.png" alt="Trade Tariff logo">	</div>	<div class="ten 
wide column">		<h1>New Feature</h1>		<p>Our new tariff icon lets you quickly see which items 
are impacted by trade tariffs.</p> 		<p>Because MSC is Built to Make You Better, we\'ve flagged items 
on our website that have been impacted by the recent trade tariffs.</p>	
</div></div></div></div>';$("body").append(e),$.fancybox.open({src:"#tariff-lightbox",type:"inline"}),setCookieValueF("tariffShown","true",90,"/","",!0)}}function 
showTariffPopup(){if(!isPDP)return!1;var e=$(isTN?".v4-tn-notes img":".item-notes-images 
img");e.each(function(){return-1!==$(this).attr("src").indexOf("tariff.gif")?($(this).popup({inline:!1,position:"bottom 
left",title:$(this).text(),on:"hover",hideOnScroll:!0,onShow:function(){$("window").on("scroll",function(){$(this).popup().hide()})}}).popup("show"),!0):void 
0})}var 
isQuality=-1!==thisURL.indexOf("//quality")?!0:!1,enableSlideoutCatalog=!0,preloadHTML5=!1,showRegisterReminder=isQuality?!1:!0,registeredChat=!0,showBcCTA=!1,showSpecial=!1,showFirst=!1,dlSurvey=!1,enableMobilesidenav=!0,overrideFileVersion="",alertMessage="",alertWindowSize={width:550,height:410},chatWindowSize={width:700,height:615},currentTime=new 
Date,hour=currentTime.getHours(),month=currentTime.getMonth()+1,day=currentTime.getDate(),year=currentTime.getFullYear(),clientDateOvr=year+""+zeroPad(month,2)+zeroPad(day,2),vDate=year+zeroPad(month,2),thisURL=window.location.href,topOverride="",bottomOverride="",autoAddString="",isMed=isMs(),isSm=isSs(),isOs=isOss(),bmroTest=isBetterMROTest(),isBps=isBp(),isTas=isTa(),isLrgs=isLs(),isMeda=isMa(),isMedb=isMb(),isVsm=isVs(),isPDP=-1!==thisURL.indexOf("/product/details/")?!0:!1,isTN=-1!==thisURL.indexOf("/browse/tn/")?!0:!1,isPLA=-1!==thisURL.indexOf("/browse/tnpla/")?!0:!1,isCategory=-1!==thisURL.indexOf(".com/browse/")?!0:!1,userHelpPage=-1!==thisURL.indexOf("/ForgotUsernameView")||-1!==thisURL.indexOf("/ForgotPasswordView"),loggedInF="true"===getCookieF("loggedIn"),cdnSub=isQuality?"qa":"",viewportHeight=window.innerHeight,viewportWidth=window.innerWidth,oneStop=0,oneStopPilot=0,oneStopTimeout=.17,reminderTimeout=.17;userHelpPage&&(registeredChat=0);var 
frEnc=-1!==document.referrer.indexOf("use-enco.com");frEnc&&(setCookieValueF("oneStopReminder","true",2e9,"/","",!0),oneStopPilot=1,reminderTimeout=oneStopPilot?.17:1),-1!=thisURL.indexOf("/MyAccount")&&setCookieValueF("currentCustomerF","true",1,"/","",!0);
var clickEvent=function(){return"ontouchstart"in 
document.documentElement==!0?"touchstart":"click"}(),emailPatternFF=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;stopFormFF=0;var 
loginImage='<img src="//cdn.mscdirect.com/global/media/images/home/circle-login.png" 
border="0">',registerImage='<img src="//cdn.mscdirect.com/global/media/images/home/circle-register-2.png" 
border="0">',oneStopReturnURL=thisURL.split(".com")[1];$(document).ready(function(){-1!=thisURL.indexOf("/RegisterNewUserView")&&$("#EmailAddress").blur(function(){-1!=$(this).val().indexOf(".ca")&&$("#Pleaseemailmeaboutspecialoffersandpromotions").removeAttr("checked")}),showSpecial&&serviceAlert(alertMessage),showFirstTime(),clientDateOvr>=20190207&&20190208>=clientDateOvr&&showPromo("Save 
Up to <strong>25%</strong> on orders over 
<strong>$149</strong>","SAVE149H","190207_SAVE149H_web.png","","",""),clientDateOvr>=20190211&&20190212>=clientDateOvr&&showPromo("Sitewide 
savings on orders over 
<strong>$149</strong>","SS149","190211_SS149_web.png","","",""),clientDateOvr>=20190213&&20190214>=clientDateOvr&&showPromo("Save 
Up to <strong>25%</strong> on orders over <strong>$199</strong> + Get <strong>Free</strong> Ground Shipping when 
you order online","SHIP199H","190213_SHIP199H_web.png","","",""),20190215==clientDateOvr&&showPromo("Save Up to 
<strong>25%</strong> on orders over 
<strong>$199</strong>","FR199H","190215_FR199H_web.png","","",""),20190218==clientDateOvr&&showPromo("Save Up to 
<strong>25%</strong> on orders over <strong>$199</strong> + Get <strong>Free</strong> Ground Shipping when you 
order 
online","MON25H","190218_MON25H_web.png","","",""),clientDateOvr>=20190219&&20190220>=clientDateOvr&&showPromo("Save 
Up to <strong>30%</strong> on orders over <strong>$299</strong> or Save Up to <strong>25%</strong> on orders 
over 
<strong>$199</strong>","FEB30H","190219_FEB30H_web.png","FEB25H","",""),clientDateOvr>=20190221&&20190222>=clientDateOvr&&showPromo("Save 
Up to <strong>25%</strong> on orders over 
<strong>$149</strong>","SAVE25H","190221_SAVE25H_web.png","","","")});var 
settings={objSlideTrigger:".catalog-trigger",objSlidePanel:".cat-panel"},linkProtocol=isSecure()?"https:":"http:",catRefURL=isQuality?"quality":"www",cdnSub=isQuality?"qa":"";document.write('<link 
rel="stylesheet" media="screen" 
href="//'+cdnSub+"cdn.mscdirect.com/global/style/slideout-catalog.css?v="+overrideFileVersion+'">');var 
baseURL=clientDateOvr>=20170902?"//dirxion.mscdirect.com/bigbook/2018/":"//dirxion.mscdirect.com/bigbook/2016/",secQuery=isSecure()?"Y":"N",poQuery=isPunchout()?"&punchout=true":"",html5URL=baseURL+"?origin="+linkProtocol+"//"+catRefURL+".mscdirect.com/product/&sec="+secQuery+"&Catalogview=True"+poQuery,html5Query=["",""],html5Path="";$(document).ready(function(){-1!==thisURL.indexOf("?frank-header-test")&&setCookieValueF("frank-test","true",30,"/","",!0);var 
e="true"===getCookieF("loggedIn")?'<a href="/MyAccountView" class="item mobile-nav"><i class="user outline 
icon"></i>Account</a>':'<a href="/LogonForm" class="item mobile-nav"><i class="user outline 
icon"></i>Login</a>',t="true"===getCookieF("loggedIn")?'<a 
href="/Logoff?storeId=10054&catalogId=10001&langId=-1&URL=HomeView" class="item"><i class="sign out alternate 
icon"></i> Sign Out</a>':'<a href="/LogonForm" class="item"><i class="sign in alternate icon"></i> Sign 
In</a>',o='<div class="ui left demo vertical inverted sidebar labeled icon menu" id="sidebar-menu" 
style="font-size: 1em; z-injdex: 99999;">	<a href="/" class="item">Home</a>	<a 
href="/ProductsHomeView" class="item">Products</a>	<a href="/solutions/solutions-home" 
class="item">Solutions</a>	<a href="/resources/resources-home" class="item">Resources</a>	<a 
href="/special-offers/special-offers-home" class="item">Special Offers</a>	<a 
href="/resources/digital-publications" class="item">Catalogs</a>	<a href="/betterMRO/" 
class="item">Better MRO</a>	<a href="/LargeOrderPadView" class="item">Order Pad</a>	<a 
href="/customer-service/information" class="item">Help</a>	<a href="/corporate/about-msc" 
class="item">About Us</a>'+t+"</div>";sidebarIcon=enableMobilesidenav&&""!==o?"<i class=\"sidebar icon\" 
onclick=\"$('#sidebar-menu').sidebar('toggle')\"></i>":"";var 
i=-1===thisURL.indexOf("GuestOrderOKDownloadSCView")?"width: 
225px;":"";if(0===$("#v4-mobile-nav-hck").length&&$(".ui").length>0&&$("body").prepend("<style>@media screen and 
(max-width:767px){	html, body {  overflow-x: hidden !important; }	#main-top-nav, 	#main-image-box, 	
#main-account, 	#main-nav { display: none !important; }	#siteSearchInput { width: 88% !important; }	
#main-header-sub { width: 100% !important; }	#main-search-box { width: 100%; padding: 5px 0 5px 5px 
!important; background: #006FBA; margin-top: 0 !important; }	#header-container #icon_clear { margin-right: 
7px !important; }	#header-container #SearchTypeAhead { width: 98% !important; }	#main-search-button, 
#goButton { 		background-size: 76% !important;		background-position: 4px 3px !important;		
border-radius: 3px !important;		margin-top: 0 !important;		margin-left: 2px !important;		
height: 33px !important;		width: 33px !important;	}	.footer-small { border-right: none 
!important; }	.footer-large { width: 100% !important; }	#footer { padding: 25px 32px 0px !important; 
}}@media screen and (min-width:768px){	#v4-mobile-nav-hck { display: none; }}@media screen and 
(max-width:320px){	#siteSearchInput { width: 86% !important; }}@media only screen and (min-device-width : 
768px) and (max-device-width : 1024px) and (orientation : portrait) { 	.footer-small { width: 128px; 
margin-right: 13px; }	#main-nav-sub > div { display: inline-block; font-size: 0.75em; }	
#main-header-sub, #main-nav-sub, #main-content-sub { width: auto; max-width: 960px; margin: auto; padding: 0 
5px; }	#main-image-box img { width: 200px !important; }	#siteSearchInput, #siteSearchInput:focus { "+i+' 
}}</style><div id="v4-mobile-nav-hck" class="ui three item center aligned huge menu mobile-nav-box" 
style="margin-bottom: 0; margin-top: 0; background: #fff; font-size: 1.1em">	<a class="item 
mobile-nav">'+sidebarIcon+'		<img 
src="//cdn.mscdirect.com/global/application-content/images/header/v4-mobile-logo.png" style="width: 75px" 
onclick="document.location=\'/\'">	</a>'+e+'	<a href="/ShoppingCartView" class="item active 
mobile-nav"><i class="shop outline icon"></i>Cart<i id="v4-mobile-nav-hck-cartcount" class="ui blue circular 
mini label" style="font-size: 
.55em;">0</i></a></div>'+o),enableMobilesidenav&&0===$("#sidebar-menu").length&&$(".ui").length>0&&($("body").prepend(o),$("#v4-mobile-nav-hck 
a:first-child").removeAttr("href").prepend(sidebarIcon),$("#v4-mobile-nav-hck a:first-child img").bind("click 
touchstart",function(){document.location="/"})),updateMobileCartItemCount(),setInterval(function(){updateMobileCartItemCount()},5e3),catalogReady()&&($("body").append('<div 
class="'+settings.objSlidePanel.replace(".","")+'"><div id="close-catalog">x</div><iframe src="" name="bb-html5" 
id="bb-html5" scrolling="auto"></iframe><div 
class="catalog-trigger"></div></div>'),$('a[href*="FlyerView?pagelabel="], 
.compare-bigbook-link').addClass("catalog-trigger-pagenum"),-1!=thisURL.indexOf("ProductCompareView")&&$(".catalog-trigger-pagenum").each(function(){""==$(this).text()&&$(this).remove()}),$("#close-catalog, 
#virtualBigBookLink, #features-html5-catalog, .virtualBigBookLink").click(function(){return $(".cat-panel 
.catalog-trigger").click(),!1}),$(".catalog-trigger-pagenum").length>0?(html5Query=$(".catalog-trigger-pagenum:first").attr("href").split("?"),html5Path=html5URL+"&"+html5Query[1]):-1!=thisURL.indexOf("/browse/")?(-1!=thisURL.indexOf("/lookahead/")&&$("h1").length>0?html5Query=$("h1").html().split("</small> 
"):html5Query[1]=$("h1").text(),html5Path=html5URL+"&search="+html5Query[1].replace(/&/g,"").replace(/  
/g,"%20").replace(/ 
/g,"%20")):html5Path=html5URL,preloadHTML5&&$("#bb-html5").attr("src",html5Path),$(".catalog-trigger-pagenum").click(function(){return 
html5Query=$(this).attr("href").split("?"),html5Path=html5URL+"&"+html5Query[1],-1==$("#bb-html5").attr("src").indexOf(html5Query[1])&&$("#bb-html5").attr("src",html5Path),$(".cat-panel 
.catalog-trigger").click(),!1}),slideOutTab()),pdpBreadcrumb(),hideChat(),loyalty(),0===$("#br-tagline").length&&$("#br-prod-container").before(0==$(".ui.grid").length?'<div 
id="br-tagline" style="cursor: pointer" 
onclick="document.location=\'/customer-service/shipping-options#same-day\'">Over 1 Million Products in Stock & 
Ready to Ship</div>':'<h4 class="ui horizontal divider header" id="br-tagline"style="cursor: pointer" 
onclick="document.location=\'/customer-service/shipping-options#same-day\'"><i class="shipping icon"></i>Over 1 
Million Products in Stock & Ready to 
Ship</h4>'),showOneStopHeader(),(isPDP||isCategory)&&$(".ui.container").length>0&&($("body").append('<div 
id="br-lightbox-background"></div><div id="fb-legacy-box"><div id="fb-legacy-close">x</div><div 
id="fb-legacy"></div></div>'),$("#br-lightbox-background").css({width:viewportWidth+"px",height:viewportHeight+"px"}),$("[br-modal]").addClass("br-legacy-link"),$(".br-legacy-link").click(function(e){e.preventDefault(),$("#fb-legacy").html($($(this).attr("href")).html()),$("#br-lightbox-background").show(),$("#fb-legacy-box").show(),$("html, 
body").animate({scrollTop:$(document).height()},1e3)}),$("#br-lightbox-background, 
#fb-legacy-close").click(function(){$("#br-lightbox-background").hide(),$("#fb-legacy-box").hide()}),$("#owl-carousel-br 
> .item").length>1))for(var n=["#owl-carousel-br"],r=0;r<n.length;r++){var 
a=$(n[r]);a.owlCarousel({items:1,loop:!0,margin:100,autoplay:!1,autoplayTimeout:5500,autoplayHoverPause:!0,smartSpeed:250,dotsContainer:n[r]+"-dots-box",navText:"",navContainer:n[r]+"-nav-box"})}isQuality&&qaCartridgeImg(),$(".ui.container").length>0&&$("#main-container").length>0&&$("#sidebar-menu").sidebar({onShow:function(){$(".cat-panel").hide()},onHide:function(){$(".cat-panel").show()}}).sidebar("attach 
events","#sidebar-menu")}),isCategory&&document.write('<script 
src="//'+cdnSub+'cdn.mscdirect.com/global/js/owl.js?v=20171208"></script>');
