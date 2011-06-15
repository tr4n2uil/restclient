/**
 * 	@template AllCollections
 *
**/
RESTClient.jquery.template.AllCollections = $.template('\
	<p class="head">Collections in DSpace</p>\
		<div class="all-collections link">\
			<ul>\
				{{each collections_collection}} \
				<li>\
					<p class="collection-name">\
						<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="short-desc" >${shortDescription}</p>\
					<ul class="list">\
						{{each items}}\
						<li>\
							<p class="item-name">\
								<a class="navigate" href="#testtab:loadurl=core/test.json">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
		</div>\
');
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

/**
 * 	@template Community
 *
**/
RESTClient.jquery.template.BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a class="navigate" href="${$value.href}">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
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
/**
 * 	@template Community
 *
**/
RESTClient.jquery.template.Community = $.template('\
	<div class="community link" >\
		<p class="head">${name}</p>\
		<div class="community-logo">\
			<img src="'+RESTClient.urls.base+RESTClient.urls.bitstream+'${logo.id}/'+RESTClient.urls.receive
					+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass+'" alt="${name} Logo"/>\
		</div>\
		<p class="short-desc" >${shortDescription}</p>\
		<div class="introduction">\
			{{html introductoryText}}\
		</div>\
		<div class="copyright">\
			{{html copyrightText}}\
		</div>\
		{{if collections.length}}\
			<p class="subhead">\
				Collections in this Community\
			</p>\
			<ul class="list">\
				{{each collections}}\
				<li>\
					<p class="collection-name">\
						<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
					</p>\
				</li>\
				{{/each}}\
			</ul>\
		{{/if}}\
		{{if sidebarText}}\
			<p class="subhead">News</p>\
			<div class="news">\
				{{html sidebarText}}\
			</div>\
		{{/if}}\
		{{if recentSubmissions.length}}\
			<p class="subhead">Recent Submissions</p>\
			<div class="recent-submissions">\
				<ul class="list">\
					{{each recentSubmissions}}\
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
			</div>\
		{{/if}}\
	</div>\
');

/**
 *	@helper getDate
 *
**/
RESTClient.jquery.helper.getDate = function(time){
	var d = new Date(time);
	return d.toDateString();
}
ServiceClient.jquery.template.Test = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
