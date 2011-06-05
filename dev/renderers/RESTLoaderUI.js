/**
 *	RESTLoaderUI renderer
 *
 *	@param selector string
**/
RESTClient.jquery.renderer.RESTLoaderUI = function(params){
	var selector = params.selector || false;
	
	/**
	 * @param view View
	 * @param template Template
	 *	@param requestor Requestor
	**/
	this.render = function(memory){
		memory.view.html('<p>Loading ...</p>');
		$.ajax({
			url: memory.requestor.loadurl,
			data: memory.requestor.loadparams,
			dataType : memory.requestor.dataType,
			type : memory.requestor.type,
			
			success : function(data, status, request){
				memory.view.hide();
				memory.view.html($.tmpl(memory.template, data))
				memory.view.fadeIn(1000);
				/*if(selector !== false){
					ServiceClient.client.Kernel.run({
						module : 'navinit',
						params : {
							selector : selector,
							attribute : 'href'
						}
					});
				}*/
			},
			error : function(request, status, error){
				memory.view.html('<p>The requested resource could not be loaded</p>');
			}
		});
	}
}
