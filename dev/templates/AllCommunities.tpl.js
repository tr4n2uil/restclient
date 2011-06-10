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
