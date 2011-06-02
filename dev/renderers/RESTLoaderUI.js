/**
 *	RESTLoaderUI renderer
 *
 *	@param loadurl string
 *	@param loadparams object
 *
**/
RESTClient.jquery.renderer.RESTLoaderUI = function(params){
	var loadurl = params.loadurl;
	var loadparams = params.loadparams;
	
	/**
	 * @param view View
	 * @param template Template
	**/
	this.render = function(memory){
		memory.view.html('<p>Loading ...</p>');
		$.ajax({
			url: loadurl,
			data: loadparams,
			dataType : 'json',
			type : 'GET',
			success : function(data, status, request){
				memory.view.hide();
				memory.view.html($.tmpl(memory.template, data))
				memory.view.fadeIn(1000);
			},
			error : function(request, status, error){
				memory.view.html('<p>The requested resource could not be loaded</p>');
			}
		});
	}
}
