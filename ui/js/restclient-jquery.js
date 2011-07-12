RESTClient = {};
RESTClient.jquery = {};

RESTClient.jquery.service = {};
RESTClient.jquery.workflow = {};

RESTClient.jquery.helper = {};
RESTClient.jquery.constant = {};

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
	allitems : 'items',
	item : 'items/',
	bitstream : 'bitstream/',
	receive : 'receive'
};
/** *	@service RESTUIResourceURL *	@desc generates URL from resource information * *	@param loadurl string [message|memory] *	@param rsrctype string [message] *	@param rsrcid string [message] * *	@return loadurl string [memory] ***/RESTClient.jquery.service.RESTUIResourceURL = {	run : function(message, memory){		memory.loadurl = RESTClient.urls.base;				switch(message.rsrctype){			case 'allcommunities' :				memory.loadurl += RESTClient.urls.allcommunities;				break;			case 'community' :				memory.loadurl +=  RESTClient.urls.community + message.rsrcid;				break;			case 'allcollections' :				memory.loadurl += RESTClient.urls.allcollections;				break;			case 'collection' :				memory.loadurl +=  RESTClient.urls.collection + message.rsrcid;				break;			case 'allitems' :				memory.loadurl += RESTClient.urls.allitems;				break;			case 'item' :				memory.loadurl +=  RESTClient.urls.item + message.rsrcid;				break;			default :				break;		};				memory.loadurl += '.json';			return true;	}};/** *	@service RESTUISessionURL *	@desc appends session information to URL * *	@param loadurl string [message|memory] * *	@return loadurl string [memory] ***/RESTClient.jquery.service.RESTUISessionURL = {	run : function(message, memory){		var d = new Date();		memory.loadurl = (message.loadurl || memory.loadurl) + '?_ts=' + d.getTime();				if(RESTClient.session.user || false){			memory.loadurl = memory.loadurl + '&user=' + RESTClient.session.user + '&pass=' + RESTClient.session.pass;		}				return true;	}};/** *	@workflow RESTUILoad *	@desc loads resource using GET and applies template into selected element * *	@param type string [message] *	@param tabtitle string [message] optional default 'DSpace RESTUI' *	@param id integer [message] ***/RESTClient.jquery.workflow.RESTUILoad = {	run : function(message, memory){		return FireSpark.Kernel.run([{			service : FireSpark.jquery.service.ElementTab,			tabui : 'tabuipanel',			tabtitle : message.tabtitle || 'DSpace RESTUI'		},{			service : RESTClient.jquery.service.RESTUIResourceURL,			rsrctype : message.type,			rsrcid : message.id		},{			service : RESTClient.jquery.service.RESTUISessionURL		},{			service : FireSpark.jquery.workflow.LoadTemplate,			request : 'GET',			template : 'tpl-' + message.type		}], memory);	}};