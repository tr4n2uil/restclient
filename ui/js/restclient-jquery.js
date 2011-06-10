RESTClient = {};
RESTClient.jquery = {};

RESTClient.jquery.view = {};
RESTClient.jquery.module = {};
RESTClient.jquery.renderer = {};
RESTClient.jquery.navigator = {};
RESTClient.jquery.requestor = {};
RESTClient.jquery.template = {};

RESTClient.session = {
	user : 'vibhaj8@gmail.com',
	pass : 'krishna'
};

RESTClient.urls = {
	base : '/dspace/',
	allcommunities : 'communities',
	community : 'communities/',
	allcollections : 'collections',
	collection : 'collections/',
	bitstream : 'bitstream/',
	receive : 'receive'
};/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = {	run : function(message, memory){		$(message.selector).button();		return true;	}};/** *	RESTLoad navigator * *	@param type string *	@param tabtitle string *	@param id integer ***/RESTClient.jquery.navigator.RESTLoad = function(config){	var d= new Date();		switch(config.type){		case 'allcommunities' :			config.tabtitle = "All Communities";			config.loadurl = RESTClient.urls.allcommunities;			break;		case 'community' :			config.loadurl =  RESTClient.urls.community + config.id;			break;		case 'allcollections' :			config.tabtitle = "All Collections";			config.loadurl = RESTClient.urls.allcollections;			break;		case 'collection' :			config.loadurl =  RESTClient.urls.collection + config.id;			break;		default :			break;	};		return [{		service : ServiceClient.jquery.view.TabUIAdd,		tabui : 'tabuipanel',		tabtitle : config.tabtitle || 'DSpace RESTClient'	},{		service : ServiceClient.jquery.loader.AjaxLoader,		loadurl : RESTClient.urls.base + config.loadurl + '.json',		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass,			_ts : d.getTime()		},		request : 'GET',		workflow : [{			service : ServiceClient.jquery.renderer.TemplateUI,			template : ServiceClient.Registry.get('tpl-' + config.type)		}]	}];}