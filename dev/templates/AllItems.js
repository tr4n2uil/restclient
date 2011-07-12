/**
 * 	@template AllItems
 *
**/
RESTClient.jquery.template.AllItems = $.template('\
	<p class="head">Items in DSpace</p>\
		<div class="all-items link">\
			<ul>\
				{{each items_collection}} \
				<li>\
					<p class="item-name">\
						<a class="navigate button" href="#restload:type=item:tabtitle=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="author" >\
						${submitter.lastName}, ${submitter.firstName} (${RESTClient.jquery.helper.getDate(lastModified)})\
					</p>\
					<ul class="list">\
						{{each bitstreams}}\
						<li>\
							<p class="bitstream-name">\
								<a href="'+RESTClient.urls.base+RESTClient.urls.bitstream+'${id}/'+RESTClient.urls.receive
					+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass+'" target="_blank" >${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
		</div>\
');
