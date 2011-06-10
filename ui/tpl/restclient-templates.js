RESTClient.jquery.template.AllCollections = (function(){
	var tpl = $.template('<div class="all-collections">\
										<ul>\
										{{each collections_collection}} \
										<li>\
											<p class="collection-name">\
								<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${entityId}">${name}</a>\
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
RESTClient.jquery.template.AllCommunities = (function(){
	var tpl = $.template('<div class="all-communities">\
										<ul>\
										{{each communities_collection}} \
										<li>\
											<p class="community-name">\
									<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${entityId}">${name}</a>\
											</p>\
											<p class="short-desc" >${shortDescription}</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name">\
									<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
												</p></li>\
												{{/each}}\
												{{each subCommunities}}\
												<li><p class="subcommunity-name">\
									<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a>\
												</p></li>\
												{{/each}}\
											</ul>\
										</li>\
										{{/each}}\
										</ul>\
									</div>');
	return tpl;
})();
RESTClient.jquery.template.BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a class="navigate" href="${$value.href}">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
RESTClient.jquery.template.Collection = (function(){
	var tpl = $.template('<div class="collection">\
											<div class="collection-logo">\
											<img src="'+RESTClient.urls.base+RESTClient.urls.bitstream
											+'${logo.id}/'+RESTClient.urls.receive
											+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass
											+'" alt="${name} Logo"/></div>\
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
											<div class="licence">${licence}</div>\
											<div class="news">${sidebarText}</div>\
									</div>');
	return tpl;
})();
RESTClient.jquery.template.Community = (function(){
	var tpl = $.template('<div class="community">\
											<div class="community-logo">\
											<img src="'+RESTClient.urls.base+RESTClient.urls.bitstream
											+'${logo.id}/'+RESTClient.urls.receive
											+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass
											+'" alt="${name} Logo"/></div>\
											<p class="community-name"<a class="navigate" href="#">${name}</a></p>\
											<p class="short-desc" >${shortDescription}</p>\
											<div class="introduction">${introductoryText}</div>\
											<div class="copyright">${copyrightText}</div>\
											<p class="collections-head">Collections in this Community</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name">\
									<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
												</p></li>\
												{{/each}}\
											</ul>\
											<div class="news">${sidebarText}</div>\
									</div>');
	return tpl;
})();
ServiceClient.jquery.template.Test = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
