/**
 * 	@template User
 *
**/
RESTClient.jquery.template.User = $.template('\
	<div class="user link" >\
		<p class="head">${lastName}, ${firstName}</p>\
		<p class="user-email" >Email : <a class="button" href="mailto:${email}">${email}</a></p>\
		<p class="user-language">Language : ${language}</p>\
		<p class="user-certificate">Require Certificate : {{if requireCertificate}}Yes{{else}}No{{/if}}</p>\
		<p class="user-selfreg">Self Registered : {{if selfRegistered}}Yes{{else}}No{{/if}}</p>\
	</div>\
');
