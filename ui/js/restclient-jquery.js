RESTClient = {};
RESTClient.jquery = {};

RESTClient.jquery.view = {};
RESTClient.jquery.module = {};
RESTClient.jquery.renderer = {};
RESTClient.jquery.navigator = {};
RESTClient.jquery.requestor = {};

RESTClient.session = {
	user : 'vibhaj8@gmail.com',
	pass : 'krishna'
};

RESTClient.urls = {
	base : '/dspace/',
	allcommunities : 'communities.json',
	community : 'communities/',
	allcollections : 'collections.json',
	collection : 'collections/',
	bitstream : 'bitstream/',
	receive : 'receive'
};/** *	AllCollections requestor**/RESTClient.jquery.requestor.AllCollections = function(config){	var d = new Date();	return {		dataType : 'json',		type : 'GET',		loadurl : RESTClient.urls.base + RESTClient.urls.allcollections,		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass,			_ts : d.getTime()		}	};}/** *	AllCommunities requestor**/RESTClient.jquery.requestor.AllCommunities = function(config){	var d = new Date();	return {		dataType : 'json',		type : 'GET',		loadurl : RESTClient.urls.base + RESTClient.urls.allcommunities,		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass,			_ts : d.getTime()		}	};}/** *	Collection requestor *	 *	@param id integer**/RESTClient.jquery.requestor.Collection = function(config){	var d= new Date();	return {		dataType : 'json',		type : 'GET',		loadurl : RESTClient.urls.base + RESTClient.urls.collection + config.id + '.json',		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass,			_ts : d.getTime()		}	};}/** *	Community requestor *	 *	@param id integer**/RESTClient.jquery.requestor.Community = function(config){	var d= new Date();	return {		dataType : 'json',		type : 'GET',		loadurl : RESTClient.urls.base + RESTClient.urls.community + config.id + '.json',		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass,			_ts : d.getTime()		}	};}/**
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
/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = (function(){	return {		execute : function(params){			$(params.selector).button();		}	};})();/** *	AllCollections navigator * *	@param tabtitle string ***/RESTClient.jquery.navigator.AllCollections = function(config){	return [{		service : 'paint',		view : 'tabui',		template : 'allcollections',		requestor : 'allcollections',		renderer : 'restloadui',		params : {			tabtitle : config.tabtitle || 'All Collections'		}	}];}/** *	AllCommunities navigator * *	@param tabtitle string ***/RESTClient.jquery.navigator.AllCommunities = function(config){	return [{		service : 'paint',		view : 'tabui',		template : 'allcommunities',		requestor : 'allcommunities',		renderer : 'restloadui',		params : {			tabtitle : config.tabtitle || 'All Communities'		}	}];}/** *	Collection navigator * *	@param tabtitle string ***/RESTClient.jquery.navigator.Collection = function(config){	return [{		service : 'paint',		view : 'tabui',		template : 'collection',		requestor : 'collection',		renderer : 'restloadui',		params : {			tabtitle : config.tabtitle || 'Collection',			id : config.id		}	}];}/** *	Community navigator * *	@param tabtitle string ***/RESTClient.jquery.navigator.Community = function(config){	return [{		service : 'paint',		view : 'tabui',		template : 'community',		requestor : 'community',		renderer : 'restloadui',		params : {			tabtitle : config.tabtitle || 'Community',			id : config.id		}	}];}