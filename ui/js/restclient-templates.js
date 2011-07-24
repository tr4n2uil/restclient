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
		<li><a class="navigate" href="#htmlload:cntr=#account-panel:url=ui/html/login.html">Login</a></li>\
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
	<div class="collection-edit" >\
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
				<textarea name="value" rows="5" class="full">${shortDescription}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-introText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Introductory Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.introText:sel._collection-introText-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${introText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-copyrightText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Copyright Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.copyrightText:sel._collection-copyrightText-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${copyrightText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-sidebarText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">News (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.sidebarText:sel._collection-sidebarText-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${sidebarText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-provenance-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Provenance</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.provenance:sel._collection-provenance-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${provenance}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="collection-licence-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Licence</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.collection-change:id.${id}:field.licence:sel._collection-licence-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${licence}</textarea>\
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
	<div class="community-edit" >\
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
				<textarea name="value" rows="5" class="full">${shortDescription}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-introductoryText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Introductory Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.introductoryText:sel._community-introductoryText-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${introductoryText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-copyrightText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">Copyright Text (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.copyrightText:sel._community-copyrightText-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${copyrightText}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Change" class="margin5"/>\
				<span class="status">\
			</form>\
		</div>\
		<div id="community-sidebarText-edit-panel" class="margin5 padding5 border left">\
			<p class="field">News (HTML)</p>\
			<form action="" method="put" class="navigate" id="_restedit:type.community-change:id.${id}:field.sidebarText:sel._community-sidebarText-edit-panel">\
				<label>\
				<textarea name="value" rows="5" class="full">${sidebarText}</textarea>\
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
