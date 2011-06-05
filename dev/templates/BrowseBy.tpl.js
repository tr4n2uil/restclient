var BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a class="navigate" href="${$value.href}">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
