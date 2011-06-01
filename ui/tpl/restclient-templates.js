var BrowseBy = (function(){
	var tpl = $.template('<ul>'
									+'{{each links}}<li><a href="#testtab">${$value.link}</a></li>{{/each}}'
									+'</ul>');
	return tpl;
})();
var TestTemplate = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
