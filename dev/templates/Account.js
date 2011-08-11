/**
 * 	@template Account
 *
**/
RESTClient.jquery.template.Account = $.template('\
<div id="account-container">\
	<p class="headline">Account</p>\
	<ul class="menu">\
		{{if RESTClient.session.user}}\
		<li><a class="navigate" href="#logout">Logout</a></li>\
		{{else}}\
		{{if invalid}}<p class="error">Invalid Email / Password</p>{{/if}}\
		<li><a class="navigate" href="#tplbind:cntr=#account-panel:tpl=tpl-login">Login</a></li>\
		{{/if}}\
	</ul>\
</div>\
');
