var AllCommunities = (function(){
	var tpl = $.template('<div id="all-communities">\
										<ul>\
										{{each communities_collection}} \
										<li>\
											<p class="community-name"<a href="#">${name}</a></p>\
											<p class="short-desc" >${shortDescription}</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name"><a href="#">${name}</a></p></li>\
												{{/each}}\
											</ul>\
										</li>\
										{{/each}}\
										</ul>\
									</div>');
	return tpl;
})();
