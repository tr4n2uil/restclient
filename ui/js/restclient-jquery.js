RESTClient = {};
RESTClient.jquery = {};

RESTClient.jquery.view = {};
RESTClient.jquery.module = {};
RESTClient.jquery.renderer = {};
RESTClient.jquery.navigator = {};
RESTClient.jquery.requestors = {};

RESTClient.session = {
	user : '',
	pass : ''
};

RESTClient.urls = {
	base : '/dspace/',
	allcommunities : 'communities.json'
};/**
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
/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = (function(){	return {		execute : function(params){			$(params.selector).button();		}	};})();