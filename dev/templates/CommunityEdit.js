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
