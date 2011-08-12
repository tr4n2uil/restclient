/**
 * 	@template Account
 *
**/
RESTClient.jquery.template.Account = $.template('\
<div id="account-container">\
	<p class="headline">Account</p>\
	<ul class="menu">\
		{{if RESTClient.session.user}}\
		<li><a class="navigate" href="#logout">Logout</a></li>\
		{{else}}\
		{{if invalid}}<p class="error">Invalid Email / Password</p>{{/if}}\
		<li><a class="navigate" href="#tplbind:cntr=#account-panel:tpl=tpl-login">Login</a></li>\
		{{/if}}\
	</ul>\
</div>\
');
/**
 * 	@template AllCollections
 *
**/
RESTClient.jquery.template.AllCollections = $.template('\
	<p class="head">Collections in DSpace</p>\
		<div class="all-collections link">\
			<ul>\
				{{each collections_collection}} \
				<li>\
					<p class="collection-name">\
						<a class="navigate button" href="#restload:type=collection:title=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="short-desc" >${shortDescription}</p>\
					<ul class="list">\
						{{each items}}\
						<li>\
							<p class="item-name">\
								<a class="navigate" href="#restload:type=item:title=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
		</div>\
');
/**
 * 	@template AllCommunities
 *
**/
RESTClient.jquery.template.AllCommunities = $.template('\
	<p class="head">Communities in DSpace</p>\
		<div class="all-communities link">\
			<ul>\
				{{each communities_collection}} \
				<li>\
					<p class="community-name">\
						<a class="navigate button" href="#restload:type=community:title=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="short-desc" >${shortDescription}</p>\
					<ul class="list">\
						{{each collections}}\
						<li>\
							<p class="collection-name">\
								<a class="navigate" href="#restload:type=collection:title=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
						{{each subCommunities}}\
						<li>\
							<p class="subcommunity-name">\
								<a class="navigate" href="#restload:type=community:title=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
	</div>\
');

/**
 * 	@template AllGroups
 *
**/
RESTClient.jquery.template.AllGroups = $.template('\
	<p class="head">Groups in DSpace</p>\
		<div class="all-groups link">\
			<ul>\
				{{each groups_collection}} \
				<li>\
					<p class="group-name">\
						<a class="navigate button" href="#restload:type=group:title=${name}:id=${entityId}">${name}</a>\
					</p>\
					<ul class="list">\
						{{each members}}\
						<li>\
							<p class="member-user">\
								<a class="navigate" href="#restload:type=user:title=${fullName}:id=${id}">${fullName}</a>\
							</p>\
						</li>\
						{{/each}}\
						{{each memberGroups}}\
						<li>\
							<p class="member-group">\
								<a class="navigate" href="#restload:type=group:title=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
	</div>\
');

/**
 * 	@template AllItems
 *
**/
RESTClient.jquery.template.AllItems = $.template('\
	<p class="head">Items in DSpace</p>\
		<div class="all-items link">\
			<ul>\
				{{each items_collection}} \
				<li>\
					<p class="item-name">\
						<a class="navigate button" href="#restload:type=item:title=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="author" >\
						${submitter.lastName}, ${submitter.firstName} (${RESTClient.jquery.helper.getDate(lastModified)})\
					</p>\
					<ul class="list">\
						{{each bitstreams}}\
						<li>\
							<p class="bitstream-name">\
								<a href="${RESTClient.urls.base}${RESTClient.urls.bitstream}${id}/${RESTClient.urls.receive}?user=${RESTClient.session.user}&pass=${RESTClient.session.pass}" target="_blank" >${name}</a>\
							</p>\
						</li>\
						{{/each}}\
					</ul>\
				</li>\
				{{/each}}\
			</ul>\
		</div>\
');
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

/**
 * 	@template AllUsers
 *
**/
RESTClient.jquery.template.AllUsers = $.template('\
	<p class="head">Users in DSpace</p>\
		<div class="all-users link">\
			<ul>\
				{{each users_collection}} \
				<li>\
					<p class="user-name">\
						<a class="navigate button" href="#restload:type=user:title=${fullName}:id=${entityId}">${lastName}, ${firstName}</a>\
					</p>\
					<p class="user-email" >${email}</p>\
				</li>\
				{{/each}}\
			</ul>\
	</div>\
');

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
/**
 * 	@template Collection
 *
**/
RESTClient.jquery.template.Collection = $.template('\
	<div class="collection link">\
		{{if canEdit}}\
		<div class="part80">\
		{{/if}}\
			<p class="head">${name}</p>\
			{{if logo}}\
			<div class="collection-logo">\
				<img src="${RESTClient.urls.base}${RESTClient.urls.bitstream}${logo.id}/${RESTClient.urls.receive}?user=${RESTClient.session.user}&pass=${RESTClient.session.pass}" alt="${name} Logo"/>\
			</div>\
			{{/if}}\
			<p class="short-desc" >${shortDescription}</p>\
			<div class="introduction">\
				{{html introText}}\
			</div>\
			<div class="copyright">\
				{{html copyrightText}}\
			</div>\
			{{if items.length}}\
				<p class="subhead">\
					Items in this Collection\
				</p>\
				<ul class="list">\
					{{each items}}\
					<li>\
						<p class="item-name">\
							<a class="navigate" href="#restload:type=item:title=${name}:id=${id}">${name}</a>\
						</p>\
						<p class="author">\
							${submitter.lastName}, ${submitter.firstName} (${RESTClient.jquery.helper.getDate(lastModified)})\
						</p>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
			{{if provenance}}\
				<p class="subhead">Provenance</p>\
				<div class="provenance">${provenance}</div>\
			{{/if}}\
			{{if licence}}\
				<p class="subhead">License</p>\
				<div class="licence">${licence}</div>\
			{{/if}}\
			{{if sidebarText}}\
				<p class="subhead">News</p>\
				<div class="news">\
					{{html sidebarText}}\
				</div>\
			{{/if}}\
			<p class="subhead">Parent Community(s)</p>\
			<ul class="list">\
				{{each communities}}\
					<li>\
			<p><a class="navigate" href="#restload:type=community:title=${name}:id=${id}">${name}</a></p>\
			<p class="short-desc" >${shortDescription}</p>\
					</li>\
				{{/each}}\
			</ul>\
		{{if canEdit}}\
		</div>\
		<div id="collection-${id}-context-panel" class="part20">\
			<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate editlink" href="#restload:type=collection-edit:title=Edit ${name}:id=${id}">Edit Collection</a></li>\
				<!--<li><a class="navigate deletelink" href="#restload:type=collection-delete:title=Remove ${name}:id=${id}">Delete Collection</a></li>-->\
			<\ul>\
		</div>\
		<div class="clear"></div>\
		{{/if}}\
	</div>\
');
/**
 * 	@template CollectionEdit
 *
**/
RESTClient.jquery.template.CollectionEdit = $.template('\
	<div class="collection-edit editor" >\
		{{if canEdit}}\
		<div id="collection-name-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Collection Name</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.name:sel._collection-name-edit-panel">\
				<label>\
				<input type="text" name="value" value="${name}" class="required"/>\
				</label>\
				<p class="error hidden margin5">Invalid Collection Name</p>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-shortDescription-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Short Description</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.shortDescription:sel._collection-shortDescription-edit-panel">\
				<label>\
				<textarea id="collection-shortDescription" name="value" rows="5" class="full">${shortDescription}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-introText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Introductory Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.introText:sel._collection-introText-edit-panel">\
				<label>\
				<textarea id="collection-introText" name="value" rows="5" class="full editor">${introText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-copyrightText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Copyright Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.copyrightText:sel._collection-copyrightText-edit-panel">\
				<label>\
				<textarea id="collection-copyrightText" name="value" rows="5" class="full editor">${copyrightText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-sidebarText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">News (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.sidebarText:sel._collection-sidebarText-edit-panel">\
				<label>\
				<textarea id="collection-sidebarText" name="value" rows="5" class="full editor">${sidebarText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-provenance-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Provenance</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.provenance:sel._collection-provenance-edit-panel">\
				<label>\
				<textarea id="collection-provenance" name="value" rows="5" class="full">${provenance}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-licence-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Licence</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.licence:sel._collection-licence-edit-panel">\
				<label>\
				<textarea id="collection-licence" name="value" rows="5" class="full">${licence}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		{{else}}\
			<p class="error">You are not authorized to edit this collection</p>\
		{{/if}}\
	</div>\
');
/**
 * 	@template Community
 *
**/
RESTClient.jquery.template.Community = $.template('\
	<div class="community link" >\
		{{if canEdit}}\
		<div class="part80">\
		{{/if}}\
			<p class="head">${name}</p>\
			{{if logo}}\
			<div class="community-logo">\
				<img src="${RESTClient.urls.base}${RESTClient.urls.bitstream}${logo.id}/${RESTClient.urls.receive}?user=${RESTClient.session.user}&pass=${RESTClient.session.pass}" alt="${name} Logo"/>\
			</div>\
			{{/if}}\
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
							<a class="navigate" href="#restload:type=collection:title=${name}:id=${id}">${name}</a>\
						</p>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
			{{if subCommunities.length}}\
				<p class="subhead">\
					Subcommunities in this Community\
				</p>\
				<ul class="list">\
					{{each subCommunities}}\
					<li>\
						<p class="subcommunity-name">\
							<a class="navigate" href="#restload:type=community:title=${name}:id=${id}">${name}</a>\
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
		{{if canEdit}}\
		</div>\
		<div id="community-${id}-context-panel" class="part20">\
			<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate editlink" href="#restload:type=community-edit:title=Edit ${name}:id=${id}">Edit Community</a></li>\
				<li><a class="navigate deletelink" href="#restload:type=community-delete:title=Remove ${name}:id=${id}">Delete Community</a></li>\
			<\ul>\
		</div>\
		<div class="clear"></div>\
		{{/if}}\
	</div>\
');
/**
 * 	@template CommunityDelete
 *
**/
RESTClient.jquery.template.CommunityDelete = $.template('\
	<div class="community-delete" >\
		{{if canEdit}}\
		<div id="community-child-delete-panel" class="margin5 padding5 border left">\
			<p class="field">Sub-Communities</p>\
			<form action="" method="put" class="navigate" id="_restdel:type.community-change:id.${id}:field.children:sel._community-child-delete-panel">\
				<label>\
				<select name="id" class="required">\
					<option value="">Select Sub-Community</option>\
					{{each subCommunities}}\
					<option value="${$value.id}">${$value.name}</option>\
					{{/each}}\
				</select>\
				</label>\
				<p class="error hidden margin5">Invalid Sub-Community</p>\
				<input name="submit" type="submit" value="Remove" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-collection-delete-panel" class="margin5 padding5 border left">\
			<p class="field">Collections</p>\
			<form action="" method="put" class="navigate" id="_restdel:type.community-change:id.${id}:field.collections:sel._community-collection-delete-panel">\
				<label>\
				<select name="id" class="required">\
					<option value="">Select Collection</option>\
					{{each collections}}\
					<option value="${$value.id}">${$value.name}</option>\
					{{/each}}\
				</select>\
				</label>\
				<p class="error hidden margin5">Invalid Collection</p>\
				<input name="submit" type="submit" value="Remove" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-all-delete-panel" class="margin5 padding5 border left">\
			<p class="field">Delete Community ${name}</p>\
			<form action="" method="put" class="navigate" id="_restdel:type.community:id.${id}:sel._community-all-delete-panel">\
				<input name="submit" type="submit" value="Delete" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		{{else}}\
			<p class="error">You are not authorized to delete this community</p>\
		{{/if}}\
	</div>\
');
/**
 * 	@template CommunityEdit
 *
**/
RESTClient.jquery.template.CommunityEdit = $.template('\
	<div class="community-edit editor" >\
		{{if canEdit}}\
		<div id="community-name-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Community Name</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.name:sel._community-name-edit-panel">\
				<label>\
				<input type="text" name="value" value="${name}" class="required"/>\
				</label>\
				<p class="error hidden margin5">Invalid Community Name</p>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-shortDescription-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Short Description</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.shortDescription:sel._community-shortDescription-edit-panel">\
				<label>\
				<textarea id="community-shortDescription" name="value" rows="5" class="full">${shortDescription}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-introductoryText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Introductory Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.introductoryText:sel._community-introductoryText-edit-panel">\
				<label>\
				<textarea id="community-introductoryText" name="value" rows="5" class="full editor">${introductoryText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-copyrightText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Copyright Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.copyrightText:sel._community-copyrightText-edit-panel">\
				<label>\
				<textarea id="community-copyrightText" name="value" rows="5" class="full editor">${copyrightText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-sidebarText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">News (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.sidebarText:sel._community-sidebarText-edit-panel">\
				<label>\
				<textarea id="community-sidebarText" name="value" rows="5" class="full editor">${sidebarText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		{{else}}\
			<p class="error">You are not authorized to edit this community</p>\
		{{/if}}\
	</div>\
');
/**
 * 	@template Group
 *
**/
RESTClient.jquery.template.Group = $.template('\
	<div class="group link" >\
			<p class="head">${name}</p>\
			{{if members.length}}\
				<p class="subhead">\
					Users in this Group\
				</p>\
				<ul class="list">\
					{{each members}}\
					<li>\
						<p class="member-user">\
							<a class="navigate" href="#restload:type=user:title=${fullName}:id=${id}">${fullName}</a>\
						</p>\
						<p class="user-email">${email}</p>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
			{{if memberGroups.length}}\
				<p class="subhead">\
					Member groups in this Group\
				</p>\
				<ul class="list">\
					{{each memberGroups}}\
					<li>\
						<p class="member-group">\
							<a class="navigate" href="#restload:type=group:title=${name}:id=${id}">${name}</a>\
						</p>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
	</div>\
');
/**
 * 	@template Item
 *
**/
RESTClient.jquery.template.Item = $.template('\
	<div class="item link">\
		{{if canEdit}}\
		<div class="part80">\
		{{/if}}\
			<p class="head">${name}</p>\
			<p class="information" >Author: ${submitter.lastName}, ${submitter.firstName}</p>\
			<p class="information" >Date: ${RESTClient.jquery.helper.getDate(lastModified)}</p>\
			<p class="information" >\
				URI: <a href="http://hdl.handle.net/${handle}" target="_blank" class="button">http://hdl.handle.net/${handle}</a>\
			</p>\
			{{if bitstreams.length}}\
				<p class="subhead">\
					Files in this Item\
				</p>\
				<ul class="list">\
					{{each bitstreams}}\
					<li>\
						<p class="bitstream-name">\
							<a href="${RESTClient.urls.base}${RESTClient.urls.bitstream}${id}/${RESTClient.urls.receive}?user=${RESTClient.session.user}&pass=${RESTClient.session.pass}" target="_blank" >${name}</a>\
						</p>\
						<ul>\
							<li>${formatDescription} [${RESTClient.jquery.helper.readFileSize(size)}]</li>\
							<li><p class="file-desc" >${description}</p></li>\
						</ul>\
					</li>\
					{{/each}}\
				</ul>\
			{{/if}}\
			<p class="subhead">Parent Collection(s)</p>\
			<ul class="list">\
				{{each collections}}\
					<li>\
			<p><a class="navigate" href="#restload:type=collection:title=${name}:id=${id}">${name}</a></p>\
			<p class="short-desc" >${shortDescription}</p>\
					</li>\
				{{/each}}\
			</ul>\
			<!--<p class="subhead">Metadata</p>\
			<p class="short-desc" >Metadata : ${metadata}</p>-->\
		{{if canEdit}}\
		</div>\
		<div class="part20">\
			<!--<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate" href="#restload:type=item-edit:title=Edit ${name}:id=${id}">Edit Item</a></li>\
				<li><a class="navigate" href="#restload:type=item-delete:title=Remove ${name}:id=${id}">Delete Item</a></li>\
			<\ul>-->\
		</div>\
		<div class="clear"></div>\
		{{/if}}\
	</div>\
');
/**
 * 	@template Login
 *
**/
RESTClient.jquery.template.Login = $.template('\
<div id="login-container" class="form-panel">\
	<p class="headline">Account</p>\
	<div id="login-form-panel" class="margin5 padding5 border">\
		<form action="" method="post" class="navigate" id="_login">\
			<label>Email\
			<input type="text" name="user" class="full required email"/>\
			</label>\
			<p class="error hidden margin5">Invalid Email</p>\
			<label>Password\
			<input type="password" name="pass" class="full required" />\
			</label>\
			<p class="error hidden margin5">Invalid Password</p>\
			<input name="submit" type="submit" value="Login" class="margin5"/>\
		</form>\
	</div>\
</div>\
');
/**
 * 	@template User
 *
**/
RESTClient.jquery.template.User = $.template('\
	<div class="user link" >\
		<p class="head">${lastName}, ${firstName}</p>\
		<p class="user-email" >Email : <a class="button" href="mailto:${email}">${email}</a></p>\
		<p class="user-language">Language : ${language}</p>\
		<p class="user-certificate">Require Certificate : {{if requireCertificate}}Yes{{else}}No{{/if}}</p>\
		<p class="user-selfreg">Self Registered : {{if selfRegistered}}Yes{{else}}No{{/if}}</p>\
	</div>\
');
