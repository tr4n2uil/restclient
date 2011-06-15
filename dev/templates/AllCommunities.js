/**
 * 	@template AllCommunities
 *
**/
RESTClient.jquery.template.AllCommunities = $.template('\
	<p class="head">Communities in DSpace</p>\
		<div class="all-communities link">\
			<ul>\
				{{each communities_collection}} \
				<li>\
					<p class="community-name">\
						<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="short-desc" >${shortDescription}</p>\
					<ul class="list">\
						{{each collections}}\
						<li>\
							<p class="collection-name">\
								<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
						{{each subCommunities}}\
						<li>\
							<p class="subcommunity-name">\
								<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
	</div>\
');

