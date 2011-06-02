var AllCommunities = (function(){
	var tpl = $.template('<div id="all-communities">'
									+'{{each communities_collection}}'
									+'<h3><a href="#">${name}</a></h3>'
									+'{{/each}}'
									+'</div>');
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
