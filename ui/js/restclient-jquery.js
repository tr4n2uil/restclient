RESTClient = {};
RESTClient.jquery = {};

RESTClient.jquery.view = {};
RESTClient.jquery.module = {};
RESTClient.jquery.renderer = {};
RESTClient.jquery.navigator = {};
RESTClient.jquery.requestor = {};

RESTClient.session = {
	user : '',
	pass : ''
};

RESTClient.urls = {
	base : '/dspace/',
	allcommunities : 'communities.json'
};/** *	AllCommunities requestor**/RESTClient.jquery.requestor.AllCommunities = function(config){	return {		dataType : 'json',		type : 'GET',		loadurl : RESTClient.urls.base + RESTClient.urls.allcommunities,		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass		}	};}/**
 *	RESTLoaderUI renderer
**/
RESTClient.jquery.renderer.RESTLoaderUI = function(params){
	var loadurl = params.loadurl;
	var loadparams = params.loadparams;
	
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
			},
			error : function(request, status, error){
				memory.view.html('<p>The requested resource could not be loaded</p>');
			}
		});
	}
}
/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = (function(){	return {		execute : function(params){			$(params.selector).button();		}	};})();/** *	AllCommunities navigator * *	@param tabtitle string ***/RESTClient.jquery.navigator.AllCommunities = function(config){	return [{		service : 'paint',		view : 'tabui',		template : 'allcommunities',		requestor : 'allcommunities',		renderer : 'restloadui',		params : {			tabtitle : config.tabtitle || 'All Communities',			loadurl : RESTClient.urls.base + RESTClient.urls.allcommunities		}	}];}