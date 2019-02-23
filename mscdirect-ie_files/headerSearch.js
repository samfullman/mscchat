
function validateSearchForm(element) {
  var $SearchButton = $('button[type="submit"]#goButton',element);
  var removeArr = [174,8482,176];
for(var i=0;i<removeArr.length;i++){
$('#siteSearchInput').val($('#siteSearchInput').val().split(String.fromCharCode(removeArr[i])).join(''));
}
  if(validateSearch()){
      var st = ($.trim($('#siteSearchInput', element).val()));
      $SearchButton.attr('disabled','disabled');
      if (st.match(/page\s*\d+\s*$/i)) {
        document.searchForm.action = '/FlyerView';
        $('#pageLabelInputHidden', element).val($.trim(st.substring(4)));
        $('#contentPathInputHidden', element).val('<fmt:message key="BIG_BOOK_CATALOG" bundle="${content}"/>');
      } else {
        $('#siteSearchInputHidden', element).val(st);
        $('#pageLabelInputHidden', element).attr("disabled", "disabled");
        $('#contentPathInputHidden', element).attr("disabled", "disabled");
      } 
      updateSearchTermCookie(st,false);  
  }else{
    $SearchButton.removeAttr('disabled');
    return false;       
  }
}

function updateSearchTermCookie(searchTerm,typeAhead){
    if('undefined'!==searchTerm && 'null'!==searchTerm){
        if(typeAhead && typeAhead==='true'){
            var regNumber = new RegExp("^[-]?[0-9]+[\.]?[0-9]+$");  
            var regEndsWithNumber = /[0-9]$/;       
            if(regNumber.test(searchTerm) || regEndsWithNumber.test(searchTerm)){
                document.cookie = "SearchTerm=;expires="+new Date(0).toUTCString()+";path=/;secure";
                document.cookie = "SearchTermEncoded=;expires="+new Date(0).toUTCString()+";path=/;secure";
                return;
            }
        }
        var searchTermCookieVal = getCookieValue('SearchTerm');
            if(searchTerm===searchTermCookieVal){
                return;
            }
        document.cookie = "SearchTerm="+searchTerm+";path=/;secure";
        document.cookie = "SearchTermEncoded="+encodeURIComponent(searchTerm)+";path=/;secure";
    }
}


function validateSearch(){
    var textBox = $('#siteSearchInput'),
        textBoxVal = $.trim(textBox.val());
    if (textBoxVal == '' || textBoxVal == '<fmt:message key="SEARCH_TITLE" bundle="${storeText}"/>'){
        if($('#gloablSearchEmpty') && $('#gloablSearchEmpty').length > 0 ){
           	$.fancybox.open({
               src: '#gloablSearchEmpty',
               type: 'inline',
               opts : {
                           touch:false,
                    }
            });
   		}else{
        	$("#searchValueRequiredModal").modal();
        }
        textBox.focus();
        return false;
     }
    return true;
    
}