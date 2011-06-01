var BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a href="#testtab">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
