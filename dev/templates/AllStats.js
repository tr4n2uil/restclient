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
						<tr><td>Communities</td><td>{{if communityviews}}${communityviews}{{else}}0{{/if}}</td></tr>\
						<tr><td>Collections</td><td>{{if collectionViews}}${collectionViews}{{else}}0{{/if}}</td></tr>\
						<tr><td>Items</td><td>{{if itemViews}}${itemViews}{{else}}0{{/if}}</td></tr>\
						<tr><td>Bitstreams</td><td>{{if bitstreamViews}}${bitstreamViews}{{else}}0{{/if}}</td></tr>\
						<tr><td>User Home Pages</td><td>{{if userHomePageViews}}${userHomePageViews}{{else}}0{{/if}}</td></tr>\
						<tr><td>Workspace Items</td><td>{{if workSpaceItemViews}}${workSpaceItemViews}{{else}}0{{/if}}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=p3&chs=500x175&chd=t:{{if communityviews}}${communityviews}{{else}}0{{/if}},{{if collectionViews}}${collectionViews}{{else}}0{{/if}},{{if itemViews}}${itemViews}{{else}}0{{/if}},{{if bitstreamViews}}${bitstreamViews}{{else}}0{{/if}},{{if userHomePageViews}}${userHomePageViews}{{else}}0{{/if}},{{if workSpaceItemViews}}${workSpaceItemViews}{{else}}0{{/if}}&chl=Communities|Collections|Items|Bitstreams|User Home Pages|Workspace Items&chco=FFFF10,005500" alt="Chart" class="margin5"><p>\
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
						<tr><td>Subcommunities</td><td>{{if subcommunitiesAdded}}${subcommunitiesAdded}{{else}}0{{/if}}</td></tr>\
						<tr><td>Bitstreams</td><td>{{if bitstreamsAdded}}${bitstreamsAdded}{{else}}0{{/if}}</td></tr>\
						<tr><td>Bundles</td><td>{{if bundlesCreated}}${bundlesCreated}{{else}}0{{/if}}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=p3&chs=500x175&chd=t:{{if subcommunitiesAdded}}${subcommunitiesAdded}{{else}}0{{/if}},{{if bitstreamsAdded}}${bitstreamsAdded}{{else}}0{{/if}},{{if bundlesCreated}}${bundlesCreated}{{else}}0{{/if}}&chl=Subcommunities|Bitstreams|Bundles&chco=10FFFF,000055" alt="Chart" class="margin5"><p>\
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
						<tr><td>Communities</td><td>{{if communityUpdates}}${communityUpdates}{{else}}0{{/if}}</td></tr>\
						<tr><td>Bitstreams</td><td>{{if bitstreamupdates}}${bitstreamupdates}{{else}}0{{/if}}</td></tr>\
						<tr><td>Bundles</td><td>{{if bundleUpdates}}${bundleUpdates}{{else}}0{{/if}}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=p3&chs=500x175&chd=t:{{if communityUpdates}}${communityUpdates}{{else}}0{{/if}},{{if bitstreamupdates}}${bitstreamupdates}{{else}}0{{/if}},{{if bundleUpdates}}${bundleUpdates}{{else}}0{{/if}}&chl=Communities|Bitstreams|Bundles&chco=FF10FF,550000" alt="Chart" class="margin5"><p>\
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
						<tr><td>All Items</td><td>{{if allItems}}${allItems}{{else}}0{{/if}}</td></tr>\
						<tr><td>Workflow Starts</td><td>{{if workflowStarts}}${workflowStarts}{{else}}0{{/if}}</td></tr>\
						<tr><td>Archived Items</td><td>{{if itemsArchived}}${itemsArchived}{{else}}0{{/if}}</td></tr>\
						<tr><td>Warnings</td><td>{{if warnings}}${warnings}{{else}}0{{/if}}</td></tr>\
					</tbody>\
				</table>\
				<p class="fright"><img src="http://chart.googleapis.com/chart?cht=bvg&chs=500x175&chd=t:{{if allItems}}${allItems}{{else}}0{{/if}},{{if workflowStarts}}${workflowStarts}{{else}}0{{/if}},{{if itemsArchived}}${itemsArchived}{{else}}0{{/if}},{{if warnings}}${warnings}{{else}}0{{/if}}&chl=All Items|Workflow Starts|Archived Items|Warnings&chco=DE55DE|55C35D|00A5C6|DE555E&chbh=a&chds=a" alt="Chart" class="margin5"><p>\
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
						<tr><td>OAI Requests</td><td>{{if oAIRequests}}${oAIRequests}{{else}}0{{/if}}</td></tr>\
						<tr><td>Searches</td><td>{{if searchesPerformed}}${searchesPerformed}{{else}}0{{/if}}</td></tr>\
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
						<tr><td>User Logins</td><td>{{if userLogins}}${userLogins}{{else}}0{{/if}}</td></tr>\
						<tr><td>Browse</td><td>{{if browse}}${browse}{{else}}0{{/if}}</td></tr>\
						<tr><td>Browse Mini</td><td>{{if browse_mini}}${browse_mini}{{else}}0{{/if}}</td></tr>\
					</tbody>\
				</table>\
			</div>\
			<div class="clear"></div>\
		</div>\
		{{/each}}\
	</div>\
');

