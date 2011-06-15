/**
 * 	@template Item
 *
**/
RESTClient.jquery.template.Item = $.template('\
	<div class="item link">\
		<p class="head">${name}</p>\
		<p class="information" >Author: ${submitter.lastName}, ${submitter.firstName}</p>\
		<p class="information" >Date: ${RESTClient.jquery.helper.getDate(lastModified)}</p>\
		<p class="information" >\
			URI: <a href="http://hdl.handle.net/${handle}" target="_blank">http://hdl.handle.net/${handle}</a>\
		</p>\
		{{if bitstreams.length}}\
			<p class="subhead">\
				Files in this Item\
			</p>\
			<ul class="list">\
				{{each bitstreams}}\
				<li>\
					<p class="bitstream-name">\
						<a href="'+RESTClient.urls.base+RESTClient.urls.bitstream+'${id}/'+RESTClient.urls.receive
				+'?user='+RESTClient.session.user+'&pass='+RESTClient.session.pass+'" target="_blank" >${name}</a>\
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
	</div>\
');

/**
 *	@helper readFileSize
 *
**/
RESTClient.jquery.helper.readFileSize = function(size){
	var kb = size/1024.0;
	if(kb > 1024.0){
		var mb = kb/1024.0;
		return mb.toFixed(2) + ' MB';
	}
	return kb.toFixed(2) + ' KB';
}
