/**
 * 	@template Login
 *
**/
RESTClient.jquery.template.Login = $.template('\
<div id="login-container" class="form-panel">\
	<p class="headline">Account</p>\
	<div id="login-form-panel" class="margin5 padding5 border">\
		<form action="" method="post" class="navigate" id="_login">\
			<label>Email\
			<input type="text" name="user" class="full required email"/>\
			</label>\
			<p class="error hidden margin5">Invalid Email</p>\
			<label>Password\
			<input type="password" name="pass" class="full required" />\
			</label>\
			<p class="error hidden margin5">Invalid Password</p>\
			<input name="submit" type="submit" value="Login" class="margin5"/>\
		</form>\
	</div>\
</div>\
');
