var AllCollections = (function(){
	var tpl = $.template('<div class="all-collections">\
										<ul>\
										{{each collections_collection}} \
										<li>\
											<p class="collection-name">\
												<a class="navigate" href="#collection:tabtitle=${name}:id=${entityId}">${name}</a>\
											</p>\
											<p class="short-desc" >${shortDescription}</p>\
											<ul>\
												{{each items}}\
												<li><p class="item-name">\
													<a class="navigate" href="#testtab:loadurl=core/test.json">${name}</a>\
												</p></li>\
												{{/each}}\
											</ul>\
										</li>\
										{{/each}}\
										</ul>\
									</div>');
	return tpl;
})();
var AllCommunities = (function(){
	var tpl = $.template('<div class="all-communities">\
										<ul>\
										{{each communities_collection}} \
										<li>\
											<p class="community-name">\
												<a class="navigate" href="#community:tabtitle=${name}:id=${entityId}">${name}</a>\
											</p>\
											<p class="short-desc" >${shortDescription}</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name">\
													<a class="navigate" href="#collection:tabtitle=${name}:id=${id}">${name}</a>\
												</p></li>\
												{{/each}}\
											</ul>\
										</li>\
										{{/each}}\
										</ul>\
									</div>');
	return tpl;
})();
var BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a class="navigate" href="${$value.href}">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
var Collection = (function(){
	var tpl = $.template('<div class="collection">\
											<!--<div class="collection-logo">\
											<img src="'
											+RESTClient.urls.base+RESTClient.urls.collection
											+'${entityId}/logo?user='
											+RESTClient.session.user+'&pass='+RESTClient.session.pass
											+'" alt="${name} Logo"/></div>-->\
											<p class="collection-name"<a class="navigate" href="#">${name}</a></p>\
											<p class="short-desc" >${shortDescription}</p>\
											<div class="introduction">${introductoryText}</div>\
											<div class="copyright">${copyrightText}</div>\
											<p class="items-head">Items in this Collection</p>\
											<ul>\
												{{each items}}\
												<li><p class="item-name"><a class="navigate" href="#">${name}</a></p>\
												<p class="author">${submitter.fullName}</p></li>\
												{{/each}}\
											</ul>\
											<div class="provenance">${provenance}</div>\
											<div class="license">${license}</div>\
											<div class="news">${sidebarText}</div>\
									</div>');
	return tpl;
})();
var Community = (function(){
	var tpl = $.template('<div class="community">\
											<div class="community-logo">\
											<img src="'
											+RESTClient.urls.base+RESTClient.urls.community
											+'${entityId}/logo?user='
											+RESTClient.session.user+'&pass='+RESTClient.session.pass
											+'" alt="${name} Logo"/></div>\
											<p class="community-name"<a class="navigate" href="#">${name}</a></p>\
											<p class="short-desc" >${shortDescription}</p>\
											<div class="introduction">${introductoryText}</div>\
											<div class="copyright">${copyrightText}</div>\
											<p class="collections-head">Collections in this Community</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name">\
													<a class="navigate" href="#collection:tabtitle=${name}:id=${id}">${name}</a>\
												</p></li>\
												{{/each}}\
											</ul>\
											<div class="news">${sidebarText}</div>\
									</div>');
	return tpl;
})();
var TestTemplate = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
