var AllCommunities = (function(){
	var tpl = $.template('<div id="all-communities">'
									+'{{each communities_collection}}'
									+'<h3><a href="#">${name}</a></h3>'
									+'{{/each}}'
									+'</div>');
	return tpl;
})();
