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
/** *	@service ResourceRESTURL *	@desc generates URL from resource information * *	@param rsrctype string [message] *	@param rsrcid string [message] * *	@return loadurl string [memory] ***/RESTClient.jquery.service.ResourceRESTURL = {	run : function(message, memory){		memory.loadurl = RESTClient.urls.base;				switch(message.rsrctype){			case 'allcommunities' :				memory.loadurl += RESTClient.urls.allcommunities;				break;			case 'community' :				memory.loadurl +=  RESTClient.urls.community + message.rsrcid;				break;			case 'allcollections' :				memory.loadurl += RESTClient.urls.allcollections;				break;			case 'collection' :				memory.loadurl +=  RESTClient.urls.collection + message.rsrcid;				break;			case 'allitems' :				memory.loadurl += RESTClient.urls.allitems;				break;			case 'item' :				memory.loadurl +=  RESTClient.urls.item + message.rsrcid;				break;			default :				break;		};				memory.loadurl += '.json';			return true;	}};/** *	@service RESTURLSession *	@desc appends session information to URL * *	@param loadurl string [message|memory] * *	@return loadurl string [memory] ***/RESTClient.jquery.service.SessionRESTURL = {	run : function(message, memory){		var d = new Date();		memory.loadurl = (message.loadurl || memory.loadurl) + '?_ts=' + d.getTime();				if(RESTClient.session.user || false){			memory.loadurl = memory.loadurl + '&user=' + RESTClient.session.user + '&pass=' + RESTClient.session.pass;		}				return true;	}};/** *	@service SessionWrite *	@desc Saves session information * *	@param form string [message] ***/RESTClient.jquery.service.SessionWrite = {	run : function(message, memory){		RESTClient.session.user = $(message.form + ' input[name=user]').val() || false;		RESTClient.session.pass = $(message.form + ' input[name=pass]').val() || false;		return true;	}};/** *	@workflow SessionUpdate *	@desc Stores login information into session and loads account template * *	@param cntr string [message] *	@param sel form-parent selector string [message] ***/RESTClient.jquery.workflow.SessionUpdate = {	run : function(message, memory){				FireSpark.Kernel.run([{			service : FireSpark.jquery.service.FormValidate,			form : (message.sel || '#login-container') + ' form'		},{			service : RESTClient.jquery.service.SessionWrite,			form : (message.sel || '#login-container') + ' form'		},{			service : FireSpark.jquery.workflow.TemplateApply,			element : message.cntr || '#account-panel',			template : 'tpl-account'		}], memory);				/**		 *	Return false to stop browser event		**/		return false;	}};/** *	@workflow TabTemplate *	@desc loads resource using GET and applies template into selected element * *	@param type string [message] *	@param tabtitle string [message] optional default 'DSpace RESTUI' *	@param id integer [message] ***/RESTClient.jquery.workflow.TabTemplate = {	run : function(message, memory){		return FireSpark.Kernel.run([{			service : FireSpark.jquery.service.ElementTab,			tabui : 'tabuipanel',			tabtitle : message.tabtitle || 'DSpace RESTUI'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : message.type,			rsrcid : message.id		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.workflow.LoadTemplate,			request : 'GET',			template : 'tpl-' + message.type		}], memory);	}};