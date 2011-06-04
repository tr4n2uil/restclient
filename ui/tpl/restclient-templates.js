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
var BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a href="${$value.href}">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
var TestTemplate = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
