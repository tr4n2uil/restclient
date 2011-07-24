/**
 * 	@template AllGroups
 *
**/
RESTClient.jquery.template.AllGroups = $.template('\
	<p class="head">Groups in DSpace</p>\
		<div class="all-groups link">\
			<ul>\
				{{each groups_collection}} \
				<li>\
					<p class="group-name">\
						<a class="navigate button" href="#restload:type=group:title=${name}:id=${entityId}">${name}</a>\
					</p>\
					<ul class="list">\
						{{each members}}\
						<li>\
							<p class="member-user">\
								<a class="navigate" href="#restload:type=user:title=${fullName}:id=${id}">${fullName}</a>\
							</p>\
						</li>\
						{{/each}}\
						{{each memberGroups}}\
						<li>\
							<p class="member-group">\
								<a class="navigate" href="#restload:type=group:title=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
	</div>\
');

