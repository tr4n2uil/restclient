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
