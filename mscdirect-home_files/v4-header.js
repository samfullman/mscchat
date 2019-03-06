function setLightboxBackgroundHeight(){
	
	var
	documentHeight = $(document).height() - $('#main-header').outerHeight() - $('#main-nav').outerHeight(),
	heightWithoutHeader = $('#main-content').outerHeight() + $('#footer').outerHeight(),
	lightboxBackgroundSize = (documentHeight > heightWithoutHeader) ? documentHeight : heightWithoutHeader;
	
	$('#nav-lightbox-background').css('height', lightboxBackgroundSize + 'px');
	
}
function typeaheadWidth(){
	var searchWidth = $("#siteSearchInput").outerWidth(true);
	$("#SearchTypeAhead").css('width',searchWidth);
}

function printQuote(){
	$('.po-print-oh').hide();
	window.print();
	$('.po-print-oh').show();
}



$(document).ready(function(){
	typeaheadWidth();
	var userName = getCookie('userName');
	$("#hdrUsername").val(userName);
	setLightboxBackgroundHeight();	
	$('[drop-down]').hover(
		function(){
			$(this).children('.dropdown').show();
			$('#nav-lightbox-background').show();
			$('#HeaderQuickOrder').hide();
		},
		function(){
			$(this).children('.dropdown').hide();
		}
	);

	$('#main-nav-sub-dropdowns, #main-account-logged-in, #HeaderQuickOrder,#main-account-login-box,#main-account-logged-out,#main-nav-enh-notif').mouseleave(function(){
		$('#nav-lightbox-background').hide();
	});
	
	$('#nav-lightbox-background').click(function(e){
		e.preventDefault();
		$('#nav-lightbox-background').hide();
	});

	$('[dropdown-click]').click(function(){
		$(this).children('.dropdown').toggle();
		//if($('#nav-lightbox-background').css('display') === 'none') $('#nav-lightbox-background').show();
	});

	$('#main-header, #main-content, #footer').click(function(){
		$('#HeaderQuickOrder').hide();
	});
	
	$('#HeaderQuickOrder').click(function (event) {
	    event.stopPropagation();
	});
	
	$("#hdrUsername").attr("autocomplete","off");
	
	var qopPartNumberPlaceholder = "Part #";
	var qopQuantityPlaceholder	= "Qty";
    $(".qop-item-number").focus(function(){
        if($(this).val() == qopPartNumberPlaceholder){
            $(this).val("");
        }

    }).blur(function(){
        if( $(this).val() == ""){
            $(this).val(qopPartNumberPlaceholder);
        }
    });

	$(".qop-item-qty").focus(function(){
        if($(this).val() == qopQuantityPlaceholder){
            $(this).val("");
        }
    }).blur(function(){
        if( $(this).val() == ""){
            $(this).val(qopQuantityPlaceholder);
        }
    });
	
	$('#dropdown-feature').click(function(){
		$(this).children('a:first-child').click();
	});
	
	$("input.mockPassword").each(function () {
		$(this).focus(function () {
			realPassword = $(this).parent().find("input.realPassword");
			$(this).hide();
			realPassword.show();
			realPassword.focus()
		})
	});
	$("input.realPassword").each(function () {
		$(this).blur(function () {
			if ($(this).val() === "") {
				mockPassword = $(this).parent().find("input.mockPassword");
				$(this).hide();
				mockPassword.show()
			}
		})
	});
	
		/*Cookie*/
	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	/*Cookie*/	
	if (document.cookie.indexOf("userName") > 0) {
		$('#hdrRememberUsername').attr('checked','checked');
	}

	// onestop hack
	if($(".onestop-one").length){
		$("#verticalBarPos").css("margin-top","25px");
		$("#main-search-box").css('width','58%');
		$("#main-account-onestop").css('width','42%');
		typeaheadWidth();
	}
	
	$("#catalog-view-full").click(function(){
	typeaheadWidth();
	})
	if(typeof logonPushEnabled != 'undefined' && logonPushEnabled == 'true' && getCookie('loggedIn') == 'false'){

	var logonPushCount = 0;
	if(logonPushCount === 0){
	if(checkPageName()){
	if("" == getCookie('logonPush')){
		$('#main-account-logged-out').children('.dropdown').show();
		var timeInterval = new Date();
		timeInterval = new Date(timeInterval.setMinutes(timeInterval.getMinutes() + 5));
		document.cookie = "logonPush=a;expires=" + timeInterval.toGMTString() + ";path=/";
	}
	else{
		logonPushCount = logonPushCount + 1;
	}
	}
	else{
		logonPushCount = logonPushCount + 1;
	}
	
		$(document).click(function(e){
		 var logonContainer = $('#main-account-logged-out');
		 if (!logonContainer.is(e.target) && logonContainer.has(e.target).length === 0) 
				logonContainer.children('.dropdown').hide();
		 logonPushCount = logonPushCount + 1;
		});
	}
	$('#main-account-logged-out').hover(
		function(){
			$(this).children('.dropdown').show();
			$('#HeaderQuickOrder').hide();
		},
		function(){
		if(logonPushCount > 0)
			$(this).children('.dropdown').hide();
		}
	);
	
	}
	
	$('#myListsTableForm td a , .double-click').click(function(){
	  if($(this).hasClass('clicked')) {return false}
	  else { 
		$(this).addClass('clicked');
		return true;
	  }
	});	

});

function checkPageName(){
		var pageNames = ['loginpage','shopcartpage', 'thankyoupage', 'registrationpage', 'locateaccountpage', 'forgotusernamepage', 'forgotpasswordpage', 'enhancedsetpasswordpage', 'setpasswordpage'];
		for(var i=0; i< pageNames.length; i++){
			if(currentPageName == pageNames[i]){
				return false;
			}
		}
		return true;
	}

// email tagging QB#9380 - Email Submission Locations - Need Tagged
function emailTagging(emailId) {	
	var e=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(e.test(emailId)){ 
	sendTagsForEmailSignUpComplete();
	}
}


$(window).resize(function(){
	setLightboxBackgroundHeight();
	typeaheadWidth();
});

