var tempcounter = 0;
$(".header-search .col-xs-3").each(function() {
	var tempName = "headerTemp" + tempcounter;
	$(this).addClass(tempName);
	tempcounter++;
});

// global variables
var numQopRow = 2, maxNumQopRows = 5;

// functions
function chatWindow(){
	popChat();
	return false;
}

function categoryImageError(thisImage){
	$(thisImage)
	.attr("src","//cdn.mscdirect.com/global/images/ProductImages/sm_IMAGENOTAVAIL.gif")
	.attr("alt","No Image Available")
	.attr("onerror","");
}

function qopValues(thisField,thisValue){
	if($(thisField).val() == "") $(thisField).val(thisValue);
	else $(thisField).val("");
}

// wipe out default, restore if blank
function inputClearDefault(whichInput, defaultValue){

	// qop focus/blur functions
	$(whichInput).focus(function() {
		if($(this).val() == defaultValue) $(this).val("");
		else if($(this).val() == "") $(this).val(defaultValue);
	});
	
	// qop focus/blur functions
	$(whichInput).blur(function() {
		if($(this).val() == defaultValue) $(this).val("");
		else if($(this).val() == "") $(this).val(defaultValue);
	});

}

function addQuickOrderPad(){
	
	if(numQopRow <= maxNumQopRows){
		var currentQoprow = 1;
		
		// The .each() method is unnecessary here:
		$(".qop-form .row").each(function() {
			if(currentQoprow <= numQopRow) {
				$(this).show();
				currentQoprow++;
			}
		});
		
		numQopRow++;
		if(numQopRow > maxNumQopRows) $("#qop-add-line").attr("disabled","disabled");
	}
}
//Function to attach click event for Show More link in CPN section
function attachClickEventCPNDetails(){
	$(".customer-part-number-moredetails").click(function() {

		var detailContainer =  $(this).prev(".customer-part-moredetails-container");//$(".customer-part .customer-part-moredetails-container"); //
		
		if(detailContainer.css("display") == "none") { 
			detailContainer.fadeIn();
			$(this).html("- show <strong>less</strong>");
		} else { 
			detailContainer.hide(); 
			$(this).html("+ show <strong>more</strong>");
		}
	});
}
//Function to attach click event for Show More link in item details section
function attachClickEventItemDetails(){
	// click function for item details	
	$(".termnode-item-number-moredetails").click(function() {

		var detailContainer =  $(this).prev(".termnode-item-moredetails-container");
		
		if(detailContainer.css("display") == "none") { 
			detailContainer.fadeIn();
			$(this).html("- show <strong>less</strong>");
		} else { 
			detailContainer.hide(); 
			$(this).html("+ show <strong>more</strong>");
		}
	});
}

// promo
var 
isQuality 	= (thisURL.indexOf('/quality.') != -1) ? 1 : 0,
cdnSub 	= (isQuality) ? 'qa' : '';

//if(typeof contentOverideLoaded !== 'boolean') document.write('<scr'+'ipt src="//' + cdnSub + 'cdn.mscdirect.com/global/scripts/content-override.js?v='+Math.random()+'"></scr'+'ipt>');

// global functions that require document to be ready
$(document).ready(function() {

	// allow form interaction on dropdowns
	$(".login-form, .qop-form").click(function(e) {
		e.stopPropagation();
	});
	
	// allow dropdowns on mouseover
	$(".header-login-button, .nav .dropdown-toggle").mouseenter(function() {
		if($(this).next(".dropdown-menu").css("display") == "none" && $("#SearchTypeAhead").css("display") == "none") $(this).click();
	});
	
	// hide dropdowns after mouseout
	$(".dropdown-menu").mouseleave(function() {
		$(this).prev(".nav .dropdown-toggle").click();
	});
	
	// setup default clear for newly added rows
	inputClearDefault(".qop-part", "Part #");
	inputClearDefault(".qop-qty", "Qty");
	
	// QOP functionality
	addQuickOrderPad();

	// allow form interaction on dropdowns
	$("#qop-add-line").click(function() {
		addQuickOrderPad();
	});
	
	// temp
	// $(".header-cart-display").attr("onclick","window.location = '/ShoppingCartView'");
	$("#quickOrderLink").html('Quick Order Pad <span class="caret"></span>');
	$(".qop-button-container button:nth-child(2)").text($(".qop-button-container button:nth-child(2)").text().toLowerCase());
	
	// click function for cpn details	
	attachClickEventCPNDetails();
	
	// click function for item details	
	attachClickEventItemDetails();
	
});