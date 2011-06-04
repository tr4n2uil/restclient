var Community = (function(){
	var tpl = $.template('<div class="community">\
											<div class="community-logo">\
											<img src="'
											+RESTClient.urls.base+RESTClient.urls.community
											+'${entityId}/logo?user='
											+RESTClient.session.user+'&pass='+RESTClient.session.pass
											+'"/></div>\
											<p class="community-name"<a href="#">${name}</a></p>\
											<p class="short-desc" >${shortDescription}</p>\
											<div class="introduction">${introductoryText}</div>\
											<div class="news">${sidebarText}</div>\
											<div class="copyright">${copyrightText}</div>\
											<p class="collections-head">Collections in this Community</p>\
											<ul>\
												{{each collections}}\
												<li><p class="collection-name"><a href="#">${name}</a></p></li>\
												{{/each}}\
											</ul>\
									</div>');
	return tpl;
})();
