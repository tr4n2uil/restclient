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
