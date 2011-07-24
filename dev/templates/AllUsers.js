/**
 * 	@template AllUsers
 *
**/
RESTClient.jquery.template.AllUsers = $.template('\
	<p class="head">Users in DSpace</p>\
		<div class="all-users link">\
			<ul>\
				{{each users_collection}} \
				<li>\
					<p class="user-name">\
						<a class="navigate button" href="#restload:type=user:title=${fullName}:id=${entityId}">${lastName}, ${firstName}</a>\
					</p>\
					<p class="user-email" >${email}</p>\
				</li>\
				{{/each}}\
			</ul>\
	</div>\
');

