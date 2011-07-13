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
						<a class="navigate button" href="#restload:type=collection:tabtitle=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="short-desc" >${shortDescription}</p>\
					<ul class="list">\
						{{each items}}\
						<li>\
							<p class="item-name">\
								<a class="navigate" href="#restload:type=item:tabtitle=${name}:id=${id}">${name}</a>\
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
						<a class="navigate button" href="#restload:type=community:tabtitle=${name}:id=${entityId}">${name}</a>\
					</p>\
					<p class="short-desc" >${shortDescription}</p>\
					<ul class="list">\
						{{each collections}}\
						<li>\
							<p class="collection-name">\
								<a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a>\
							</p>\
						</li>\
						{{/each}}\
						{{each subCommunities}}\
						<li>\
							<p class="subcommunity-name">\
								<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a>\
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
						<a class="navigate button" href="#restload:type=item:tabtitle=${name}:id=${entityId}">${name}</a>\
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
 * 	@template Collection
 *
**/
RESTClient.jquery.template.Collection = $.template('\
	<div class="collection link">\
		{{if canEdit}}\
		<div class="part80">\
		{{/if}}\
			<p class="head">${name}</p>\
			<div class="collection-logo">\
				<img src="${RESTClient.urls.base}${RESTClient.urls.bitstream}${logo.id}/${RESTClient.urls.receive}?user=${RESTClient.session.user}&pass=${RESTClient.session.pass}" alt="${name} Logo"/>\
			</div>\
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
							<a class="navigate" href="#restload:type=item:tabtitle=${name}:id=${id}">${name}</a>\
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
			<p><a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a></p>\
			<p class="short-desc" >${shortDescription}</p>\
					</li>\
				{{/each}}\
			</ul>\
		{{if canEdit}}\
		</div>\
		<div class="part20">\
			<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate" href="#restload:type=collection-edit:tabtitle=Edit ${name}:id=${id}">Edit Collection</a></li>\
				<li><a class="navigate" href="#htmlload">Delete Collection</a></li>\
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
			<div class="community-logo">\
				<img src="${RESTClient.urls.base}${RESTClient.urls.bitstream}${logo.id}/${RESTClient.urls.receive}?user=${RESTClient.session.user}&pass=${RESTClient.session.pass}" alt="${name} Logo"/>\
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
			{{if subCommunities.length}}\
				<p class="subhead">\
					Subcommunities in this Community\
				</p>\
				<ul class="list">\
					{{each subCommunities}}\
					<li>\
						<p class="subcommunity-name">\
							<a class="navigate" href="#restload:type=community:tabtitle=${name}:id=${id}">${name}</a>\
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
		<div class="part20">\
			<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate" href="#restload:type=community-edit:tabtitle=Edit ${name}:id=${id}">Edit Community</a></li>\
				<li><a class="navigate" href="#htmlload">Delete Community</a></li>\
			<\ul>\
		</div>\
		<div class="clear"></div>\
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
			<p><a class="navigate" href="#restload:type=collection:tabtitle=${name}:id=${id}">${name}</a></p>\
			<p class="short-desc" >${shortDescription}</p>\
					</li>\
				{{/each}}\
			</ul>\
			<!--<p class="subhead">Metadata</p>\
			<p class="short-desc" >Metadata : ${metadata}</p>-->\
		{{if canEdit}}\
		</div>\
		<div class="part20">\
			<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate" href="#restload:type=item-edit:tabtitle=Edit ${name}:id=${id}">Edit Item</a></li>\
				<li><a class="navigate" href="#htmlload">Delete Item</a></li>\
			<\ul>\
		</div>\
		<div class="clear"></div>\
		{{/if}}\
	</div>\
');
