/**
 * 	@template AllStats
 *
**/
RESTClient.jquery.template.AllStats = $.template('\
	<div class="all-stats link">\
		<p class="head">DSpace Statistics</p>\
		{{each stats_collection}}\
		<div class="stat-views">\
			<p class="subhead">Views</p>\
			<div class="stat-views-chart-container">\
				<table class="site border fleft">\
					<thead>\
						<tr><th>Content</th><th>Count</th></tr>\
					</thead>\
					<tbody>\
						<tr><td>Communities</td><td>${communityviews}</td></tr>\
						<tr><td>Communities</td><td>${collectionViews}</td></tr>\
						<tr><td>Items</td><td>${itemViews}</td></tr>\
						<tr><td>Bitstreams</td><td>${bitstreamViews}</td></tr>\
						<tr><td>User Home Pages</td><td>${userHomePageViews}</td></tr>\
						<tr><td>Workspace Items</td><td>${workSpaceItemViews}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=p3&chs=500x175&chd=t:${communityviews},${collectionViews},${itemViews},${bitstreamViews},${userHomePageViews},${workSpaceItemViews}&chl=Communities|Communities|Items|Bitstreams|User Home Pages|Workspace Items&chco=FFFF10,005500" alt="Chart" class="margin5"><p>\
				<div class="clear"></div>\
			</div>\
		</div>\
		<div class="stat-additions">\
			<p class="subhead">Additions</p>\
			<div class="stat-additions-chart-container">\
				<table class="site border fleft">\
					<thead>\
						<tr><th>Content</th><th>Count</th></tr>\
					</thead>\
					<tbody>\
						<tr><td>Subcommunities</td><td>${subcommunitiesAdded}</td></tr>\
						<tr><td>Bitstreams</td><td>${bitstreamsAdded}</td></tr>\
						<tr><td>Bundles</td><td>${bundlesCreated}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=p3&chs=500x175&chd=t:${subcommunitiesAdded},${bitstreamsAdded},${bundlesCreated}&chl=Subcommunities|Bitstreams|Bundles&chco=10FFFF,000055" alt="Chart" class="margin5"><p>\
				<div class="clear"></div>\
			</div>\
		</div>\
		<div class="stat-updates">\
			<p class="subhead">Updates</p>\
			<div class="stat-updates-chart-container">\
				<table class="site border fleft">\
					<thead>\
						<tr><th>Content</th><th>Count</th></tr>\
					</thead>\
					<tbody>\
						<tr><td>Communities</td><td>${communityUpdates}</td></tr>\
						<tr><td>Bitstreams</td><td>${bitstreamupdates}</td></tr>\
						<tr><td>Bundles</td><td>${bundleUpdates}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=p3&chs=500x175&chd=t:${communityUpdates},${bitstreamupdates},${bundleUpdates}&chl=Communities|Bitstreams|Bundles&chco=FF10FF,550000" alt="Chart" class="margin5"><p>\
				<div class="clear"></div>\
			</div>\
		</div>\
		<div class="stat-submissions">\
			<p class="subhead">Submissions</p>\
			<div class="stat-submissions-chart-container">\
				<table class="site border fleft">\
					<thead>\
						<tr><th>Type</th><th>Count</th></tr>\
					</thead>\
					<tbody>\
						<tr><td>All Items</td><td>${allItems}</td></tr>\
						<tr><td>Workflow Starts</td><td>${workflowStarts}</td></tr>\
						<tr><td>Archived Items</td><td>${itemsArchived}</td></tr>\
						<tr><td>Warnings</td><td>${warnings}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=bvg&chs=500x175&chd=t:${allItems},${workflowStarts},${itemsArchived},${warnings}&chl=All Items|Workflow Starts|Archived Items|Warnings&chco=DE55DE|55C35D|00A5C6|DE555E&chbh=a&chds=a" alt="Chart" class="margin5"><p>\
				<div class="clear"></div>\
			</div>\
		</div>\
		<div class="stat-search-interface">\
			<div class="stat-search-interface-container fleft margin5">\
				<p class="subhead">Search</p>\
				<table class="site border fleft">\
					<thead>\
						<tr><th>Type</th><th>Count</th></tr>\
					</thead>\
					<tbody>\
						<tr><td>OAI Requests</td><td>${oAIRequests}</td></tr>\
						<tr><td>Searches</td><td>${searchesPerformed}</td></tr>\
					</tbody>\
				</table>\
			</div>\
			<div class="stat-search-interface-container fleft margin5">\
				<p class="subhead">Interface</p>\
				<table class="site border">\
					<thead>\
						<tr><th>Action</th><th>Count</th></tr>\
					</thead>\
					<tbody>\
						<tr><td>User Logins</td><td>${userLogins}</td></tr>\
						<tr><td>Browse</td><td>${browse}</td></tr>\
						<tr><td>Browse Mini</td><td>${browse_mini}</td></tr>\
					</tbody>\
				</table>\
			</div>\
			<div class="clear"></div>\
		</div>\
		{{/each}}\
	</div>\
');

