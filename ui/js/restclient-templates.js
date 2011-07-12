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
								<a class="navigate" href="#restload:type=item:tabtitle=${name}:id=${id}">${name}</a>\
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
						<a class="navigate" href="#restload:type=item:tabtitle=${name}:id=${entityId}">${name}</a>\
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
						<a class="navigate" href="#restload:type=item:tabtitle=${name}:id=${id}">${name}</a>\
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
		<p class="subhead">Parent Community(s)</p>\
		<ul class="list">\
			{{each communities}}\
				<li>\
		<p><a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a></p>\
		<p class="short-desc" >${shortDescription}</p>\
				</li>\
			{{/each}}\
		</ul>\
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
		{{if subCommunities.length}}\
			<p class="subhead">\
				Subcommunities in this Community\
			</p>\
			<ul class="list">\
				{{each subCommunities}}\
				<li>\
					<p class="subcommunity-name">\
						<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a>\
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
/**
 * 	@template Item
 *
**/
RESTClient.jquery.template.Item = $.template('\
	<div class="item link">\
		<p class="head">${name}</p>\
		<p class="information" >Author: ${submitter.lastName}, ${submitter.firstName}</p>\
		<p class="information" >Date: ${RESTClient.jquery.helper.getDate(lastModified)}</p>\
		<p class="information" >\
			URI: <a href="http://hdl.handle.net/${handle}" target="_blank">http://hdl.handle.net/${handle}</a>\
		</p>\
		{{if bitstreams.length}}\
			<p class="subhead">\
				Files in this Item\
			</p>\
			<ul class="list">\
				{{each bitstreams}}\
				<li>\
					<p class="bitstream-name">\
						<a href="'+RESTClient.urls.base+RESTClient.urls.bitstream+'${id}/'+RESTClient.urls.receive
				+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass+'" target="_blank" >${name}</a>\
					</p>\
					<ul>\
						<li>${formatDescription} [${RESTClient.jquery.helper.readFileSize(size)}]</li>\
						<li><p class="file-desc" >${description}</p></li>\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
		{{/if}}\
		<p class="subhead">Parent Collection(s)</p>\
		<ul class="list">\
			{{each collections}}\
				<li>\
		<p><a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a></p>\
		<p class="short-desc" >${shortDescription}</p>\
				</li>\
			{{/each}}\
		</ul>\
		<!--<p class="subhead">Metadata</p>\
		<p class="short-desc" >Metadata : ${metadata}</p>-->\
	</div>\
');

/**
 *	@helper readFileSize
 *
**/
RESTClient.jquery.helper.readFileSize = function(size){
	var kb = size/1024.0;
	if(kb > 1024.0){
		var mb = kb/1024.0;
		return mb.toFixed(2) + ' MB';
	}
	return kb.toFixed(2) + ' KB';
}
