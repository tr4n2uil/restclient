/**
 * 	@template Browse
 *
**/
RESTClient.jquery.template.Browse = $.template('\
<div id="browse-container">\
	<p class="headline">Browse</p>\
	<ul class="menu">\
		<li><a class="navigate" href="#restload:type=allcommunities:title=All Comunities">Communities</a></li>\
		<li><a class="navigate" href="#restload:type=allcollections:title=All Collections">Collections</a></li>\
		<li><a class="navigate" href="#restload:type=allitems:title=All Items">Items</a></li>\
		<li><a class="navigate" href="#restload:type=allusers:title=All Users">Users</a></li>\
		<li><a class="navigate" href="#restload:type=allgroups:title=All Groups">Groups</a></li>\
		<li><a class="navigate" href="#restload:type=allstats:title=Statistics">Statistics</a></li>\
	</ul>\
</div>\
');
