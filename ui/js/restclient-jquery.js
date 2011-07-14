RESTClient = {};
RESTClient.jquery = {};

RESTClient.jquery.service = {};
RESTClient.jquery.workflow = {};

RESTClient.jquery.helper = {};
RESTClient.jquery.constant = {};

RESTClient.jquery.template = {};

RESTClient.session = {
	user : false,
	pass : false
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
	receive : 'receive',
	allusers : 'users',
	user : 'users/',
	allgroups : 'groups',
	group : 'groups/'
};

RESTClient.jquery.constant.successimg = '<img src="ui/img/icons/ok.gif">';
RESTClient.jquery.constant.errorimg = '<img src="ui/img/icons/error.gif">';

/** *	@service ResourceRESTURL *	@desc generates URL from resource information * *	@param rsrctype string [message] *	@param rsrcid string [message] optional default false *	@param rsrcfield string [message] optional default false *	@param rsrcvalue string [message] optional default false *	@param end boolean [message] optional default false * *	@return loadurl string [memory] ***/RESTClient.jquery.service.ResourceRESTURL = {	run : function(message, memory){		memory.loadurl = RESTClient.urls.base;				switch(message.rsrctype){			case 'allcommunities' :				memory.loadurl += RESTClient.urls.allcommunities;				break;			case 'community' :			case 'community-edit' :			case 'community-delete' :				memory.loadurl +=  RESTClient.urls.community + message.rsrcid;				break;			case 'community-change' :				memory.loadurl +=  RESTClient.urls.community + message.rsrcid + '/' + message.rsrcfield;				break;			case 'allcollections' :				memory.loadurl += RESTClient.urls.allcollections;				break;			case 'collection' :			case 'collection-edit' :			case 'collection-delete' :				memory.loadurl +=  RESTClient.urls.collection + message.rsrcid;				break;			case 'collection-change' :				memory.loadurl +=  RESTClient.urls.collection + message.rsrcid + '/' + message.rsrcfield;				break;			case 'allitems' :				memory.loadurl += RESTClient.urls.allitems;				break;			case 'item' :			case 'item-edit' :			case 'item-delete' :				memory.loadurl +=  RESTClient.urls.item + message.rsrcid;				break;			case 'item-change' :				memory.loadurl +=  RESTClient.urls.item + message.rsrcid + '/' + message.rsrcfield;				break;			case 'allusers' :				memory.loadurl += RESTClient.urls.allusers;				break;			case 'user' :				memory.loadurl +=  RESTClient.urls.user + message.rsrcid;				break;			case 'allgroups' :				memory.loadurl += RESTClient.urls.allgroups;				break;			case 'group' :				memory.loadurl +=  RESTClient.urls.group + message.rsrcid;				break;			default :				break;		};				if(message.end || false){				}		else {			memory.loadurl += '.json';		}				return true;	}};/** *	@service RESTURLSession *	@desc appends session information to URL * *	@param loadurl string [message|memory] * *	@return loadurl string [memory] ***/RESTClient.jquery.service.SessionRESTURL = {	run : function(message, memory){		var d = new Date();		memory.loadurl = (message.loadurl || memory.loadurl) + '?_ts=' + d.getTime();				if(RESTClient.session.user || false){			memory.loadurl = memory.loadurl + '&user=' + RESTClient.session.user + '&pass=' + RESTClient.session.pass;		}				return true;	}};/** *	@service SessionWrite *	@desc Saves session information * *	@param form string [message] ***/RESTClient.jquery.service.SessionWrite = {	run : function(message, memory){		RESTClient.session.user = $(message.form + ' input[name=user]').val() || false;		RESTClient.session.pass = $(message.form + ' input[name=pass]').val() || false;		return true;	}};/** *	@workflow ResourceDelete *	@desc deletes resource fields using DELETE * *	@param type string [message] *	@param sel string [message] *	@param id integer [message] *	@param field string [message]  ***/RESTClient.jquery.workflow.ResourceDelete = {	run : function(message, memory){		if(message.field || false){			var type = 'rest-id';		}		return FireSpark.Kernel.run([{			service : FireSpark.core.service.LoadConfirm,			confirm : true,			value : 'Are you sure you want to continue ?'		},{			service : FireSpark.jquery.service.FormValidate,			form : message.sel + ' form'		},{			service : FireSpark.jquery.service.FormRead,			form : message.sel + ' form'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : message.type,			rsrcid : message.id,			rsrcfield : message.field || false,			end : true		},{			service : FireSpark.jquery.service.RequestWrite,			type : type || false		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.service.ElementState,			element : message.sel + ' input[name=submit]',			disabled : true		},{			service : FireSpark.jquery.service.ElementContent,			element : message.sel + ' span.status',			data :  FireSpark.core.constant.loadmsg,			duration : 10		},{			service : FireSpark.jquery.service.LoadAjax,			request : 'DELETE',			processData : false,			workflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]',				disable : true			},{				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.successimg			}],			errorflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]'			}, {				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.errorimg			}]		}], memory);	}};/** *	@workflow ResourceEdit *	@desc edits resource fields using PUT * *	@param type string [message] *	@param sel string [message] *	@param id integer [message] *	@param field string [message]  ***/RESTClient.jquery.workflow.ResourceEdit = {	run : function(message, memory){		return FireSpark.Kernel.run([{			service : FireSpark.jquery.service.FormValidate,			form : message.sel + ' form'		},{			service : FireSpark.jquery.service.FormRead,			form : message.sel + ' form'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : message.type,			rsrcid : message.id,			rsrcfield : message.field		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.service.RequestWrite,			type : 'json'		},{			service : FireSpark.jquery.service.ElementState,			element : message.sel + ' input[name=submit]',			disabled : true		},{			service : FireSpark.jquery.service.ElementContent,			element : message.sel + ' span.status',			data :  FireSpark.core.constant.loadmsg,			duration : 10		},{			service : FireSpark.jquery.service.LoadAjax,			request : 'PUT',			processData : false,			workflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]'			},{				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.successimg			}],			errorflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]'			}, {				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.errorimg			}]		}], memory);	}};/** *	@workflow ResourceLoad *	@desc loads resource using GET and applies template into selected element * *	@param type string [message] *	@param tabtitle string [message] optional default 'DSpace RESTUI' *	@param id integer [message] ***/RESTClient.jquery.workflow.ResourceLoad = {	run : function(message, memory){		return FireSpark.Kernel.run([{			service : FireSpark.jquery.service.ElementTab,			tabui : 'tabuipanel',			tabtitle : message.tabtitle || 'DSpace RESTUI'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : message.type,			rsrcid : message.id || false		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.workflow.LoadTemplate,			request : 'GET',			template : 'tpl-' + message.type		}], memory);	}};/** *	@workflow SessionBegin *	@desc Stores login information into session, authenticates and loads account template * *	@param cntr string [message] *	@param sel form-parent selector string [message] ***/RESTClient.jquery.workflow.SessionBegin = {	run : function(message, memory){		FireSpark.Kernel.run([{			service : FireSpark.jquery.service.FormValidate,			form : (message.sel || '#login-container') + ' form'		},{			service : RESTClient.jquery.service.SessionWrite,			form : (message.sel || '#login-container') + ' form'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : 'allcommunities',			rsrcid : message.id || false		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.workflow.LoadTemplate,			element : message.cntr || '#account-panel',			template : 'tpl-account',			request : 'GET',			errorflow : {				service : RESTClient.jquery.workflow.SessionEnd,				data : { invalid : true }			}		}], memory);				/**		 *	Return false to stop browser event		**/		return false;	}};/** *	@workflow SessionEnd *	@desc Deletes session and loads account template * *	@param cntr string [message] *	@param sel form-parent selector string [message] *	@param data object [message|memory] ***/RESTClient.jquery.workflow.SessionEnd = {	run : function(message, memory){		FireSpark.Kernel.run([{			service : RESTClient.jquery.service.SessionWrite,			form : (message.sel || '#login-container') + ' form'		},{			service : FireSpark.jquery.workflow.TemplateApply,			element : message.cntr || '#account-panel',			template : 'tpl-account',			data : message.data || { invalid : false }		}], memory);				/**		 *	Return false to stop browser event		**/		return false;	}};/**
 *	@helper getDate
 *
**/
RESTClient.jquery.helper.getDate = function(time){
	var d = new Date(time);
	return d.toDateString();
}
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
