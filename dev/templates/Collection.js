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
		<div id="collection-${id}-context-panel" class="part20">\
			<p class="headline">Context</p>\
			<ul class="menu">\
				<li><a class="navigate editlink" href="#restload:type=collection-edit:tabtitle=Edit ${name}:id=${id}">Edit Collection</a></li>\
				<!--<li><a class="navigate deletelink" href="#restload:type=collection-delete:tabtitle=Remove ${name}:id=${id}">Delete Collection</a></li>-->\
			<\ul>\
		</div>\
		<div class="clear"></div>\
		{{/if}}\
	</div>\
');
