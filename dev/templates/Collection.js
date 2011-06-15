/**
 * 	@template Collection
 *
**/
RESTClient.jquery.template.Collection = $.template('\
	<div class="collection link">\
		<p class="head">${name}</p>\
		<div class="collection-logo">\
			<img src="'+RESTClient.urls.base+RESTClient.urls.bitstream+'${logo.id}/'+RESTClient.urls.receive
					+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass+'" alt="${name} Logo"/>\
		</div>\
		<p class="short-desc" >${shortDescription}</p>\
		<div class="introduction">\
			{{html introText}}\
		</div>\
		<div class="copyright">\
			{{html copyrightText}}\
		</div>\
		{{if items.length}}\
			<p class="subhead">\
				Items in this Collection\
			</p>\
			<ul class="list">\
				{{each items}}\
				<li>\
					<p class="item-name">\
						<a class="navigate" href="#">${name}</a>\
					</p>\
					<p class="author">\
						${submitter.lastName}, ${submitter.firstName} (${RESTClient.jquery.helper.getDate(lastModified)})\
					</p>\
				</li>\
				{{/each}}\
			</ul>\
		{{/if}}\
		{{if provenance}}\
			<p class="subhead">Provenance</p>\
			<div class="provenance">${provenance}</div>\
		{{/if}}\
		{{if licence}}\
			<p class="subhead">License</p>\
			<div class="licence">${licence}</div>\
		{{/if}}\
		{{if sidebarText}}\
			<p class="subhead">News</p>\
			<div class="news">\
				{{html sidebarText}}\
			</div>\
		{{/if}}\
	</div>\
');
