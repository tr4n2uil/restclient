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
		{{else}}\
			<p class="error">You are not Authorized to edit this community</p>\
		{{/if}}\
	</div>\
');
