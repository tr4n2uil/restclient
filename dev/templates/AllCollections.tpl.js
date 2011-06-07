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
