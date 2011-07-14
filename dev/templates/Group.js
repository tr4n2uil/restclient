/**
 * 	@template Group
 *
**/
RESTClient.jquery.template.Group = $.template('\
	<div class="group link" >\
			<p class="head">${name}</p>\
			{{if members.length}}\
				<p class="subhead">\
					Users in this Group\
				</p>\
				<ul class="list">\
					{{each members}}\
					<li>\
						<p class="member-user">\
							<a class="navigate" href="#restload:type=user:tabtitle=${fullName}:id=${id}">${fullName}</a>\
						</p>\
						<p class="user-email">${email}</p>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
			{{if memberGroups.length}}\
				<p class="subhead">\
					Member groups in this Group\
				</p>\
				<ul class="list">\
					{{each memberGroups}}\
					<li>\
						<p class="member-group">\
							<a class="navigate" href="#restload:type=group:tabtitle=${name}:id=${id}">${name}</a>\
						</p>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
	</div>\
');
