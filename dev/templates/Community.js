/**
 * 	@template Community
 *
**/
RESTClient.jquery.template.Community = $.template('\
	<div class="community link" >\
		<p class="head">${name}</p>\
		<div class="community-logo">\
			<img src="'+RESTClient.urls.base+RESTClient.urls.bitstream+'${logo.id}/'+RESTClient.urls.receive
					+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass+'" alt="${name} Logo"/>\
		</div>\
		<p class="short-desc" >${shortDescription}</p>\
		<div class="introduction">\
			{{html introductoryText}}\
		</div>\
		<div class="copyright">\
			{{html copyrightText}}\
		</div>\
		{{if collections.length}}\
			<p class="subhead">\
				Collections in this Community\
			</p>\
			<ul class="list">\
				{{each collections}}\
				<li>\
					<p class="collection-name">\
						<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
					</p>\
				</li>\
				{{/each}}\
			</ul>\
		{{/if}}\
		{{if sidebarText}}\
			<p class="subhead">News</p>\
			<div class="news">\
				{{html sidebarText}}\
			</div>\
		{{/if}}\
		{{if recentSubmissions.length}}\
			<p class="subhead">Recent Submissions</p>\
			<div class="recent-submissions">\
				<ul class="list">\
					{{each recentSubmissions}}\
					<li>\
						<p class="item-name">\
							<a class="navigate" href="#">${name}</a>\
						</p>\
						<p class="author">\
							${submitter.lastName}, ${submitter.firstName} (${RESTClient.jquery.helper.getDate(lastModified)})\
						</p>\
					</li>\
					{{/each}}\
				</ul>\
			</div>\
		{{/if}}\
	</div>\
');

/**
 *	@helper getDate
 *
**/
RESTClient.jquery.helper.getDate = function(time){
	var d = new Date(time);
	return d.toDateString();
}