This folder file contains the following files:

 * loadSmsPage.js
 * loadSmsPage.css
 * smsChat.jpg - a sample icon for the widget.
 * README.txt - this file

 
INSTALLATION

1. Create a folder next to home.html, called smsVendorLinkElements.
2. Extract the contents of the zip file to the smsVendorLinkElements folder.
3. Copy and paste the following into the head of your chat page. Make sure it is included AFTER webChat.js
	<script type="text/javascript" src="smsVendorLinkElements/loadSmsPage.js"></script>
	<link href="smsVendorLinkElements/loadSmsPage.css" rel="stylesheet" type="text/css">

To use your own icon:
1. Upload your image to the web server.
2. Open loadSmsPage.js
3. Change the value of "smsIconPath" to match the path to your icon.

To configure the SMS number for the contact centre, you can do either of the following:
1. Call the following method from your own code or the browser console: smsWidget.setPhoneNumber("555234232");
2. Open the loadSmsPage.js file and change the default value of contactCenterNumber to match.


SOURCES
	smsChat.jpg: https://commons.wikimedia.org/wiki/File:Smschat.jpg