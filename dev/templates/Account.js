/**
 * 	@template Account
 *
**/
RESTClient.jquery.template.Account = $.template('\
<div id="account-container">\
	<p class="headline">Account</p>\
	<ul>\
		{{if RESTClient.session.user}}\
		<li><a class="navigate" href="#session:cntr=#account-panel:sel=#login-container">Logout</a></li>\
		{{else}}\
		<li><a class="navigate" href="#htmlload:cntr=#account-panel:url=ui/html/login.html">Login</a></li>\
		{{/if}}\
	</ul>\
</div>\
');
