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
