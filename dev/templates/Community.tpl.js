RESTClient.jquery.template.Community = (function(){
	var tpl = $.template('<div class="community">\
											<div class="community-logo">\
											<img src="'+RESTClient.urls.base+RESTClient.urls.bitstream
											+'${logo.id}/'+RESTClient.urls.receive
											+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass
											+'" alt="${name} Logo"/></div>\
											<p class="community-name"<a class="navigate" href="#">${name}</a></p>\
											<p class="short-desc" >${shortDescription}</p>\
											<div class="introduction">{{html introductoryText}}</div>\
											<div class="copyright">{{html copyrightText}}</div>\
											<p class="collections-head">Collections in this Community</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name">\
									<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
												</p></li>\
												{{/each}}\
											</ul>\
											<div class="news">{{html sidebarText}}</div>\
									</div>');
	return tpl;
})();
