/**
 *	@initialization Namespaces
**/
RESTClient = {};
RESTClient.jquery = {};
RESTClient.jquery.service = {};
RESTClient.jquery.workflow = {};
RESTClient.jquery.helper = {};
RESTClient.jquery.constant = {};
RESTClient.jquery.template = {};

/**
 *	@initialization Session variables
**/
RESTClient.session = {
	user : false,
	pass : false
};

/**
 *	@initialization URLs
**/
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

/**
 *	@constant iframe
 *	@desc Decides whether IFRAME will be used instead of AJAX for loading content (default false)
 *
**/
RESTClient.jquery.constant.iframe = false;

/**
 *	@constant agent
 *	@desc Decides IFRAME container
 *
**/
RESTClient.jquery.constant.agent = '#firespark-iframe-container div';

/**
 *	@constant loadmsg
 *	@desc HTML content to show while loading content (default '<p class="loading">Loading ...</p>')
 *
**/
RESTClient.jquery.constant.loadmsg = '<p class="loading">Loading ...</p>';

/**
 *	@constant successmsg
 *	@desc HTML content to indicate successful execution (default '<img src="ui/img/icons/ok.gif">')
 *
**/
RESTClient.jquery.constant.successimg = '<img src="ui/img/icons/ok.gif">';

/**
 *	@constant errormsg
 *	@desc HTML content to indicate erroneous execution (default '<img src="ui/img/icons/error.gif">')
 *
**/
RESTClient.jquery.constant.errorimg = '<img src="ui/img/icons/error.gif">';

/** *	@service ResourceRESTURL *	@desc generates URL from resource information * *	@param rsrctype string [memory] *	@param rsrcid string [memory] optional default false *	@param rsrcfield string [memory] optional default false *	@param rsrcvalue string [memory] optional default false *	@param end boolean [memory] optional default false * *	@return url string [memory] ***/RESTClient.jquery.service.ResourceRESTURL = {	input : function(){		return {			required : ['rsrctype'],			optional : { rsrcid : false, rsrcfield : false, rsrcvalue : false, end : false }		};	},		run : function($memory){		$memory['url'] = RESTClient.urls.base;				switch($memory['rsrctype']){			case 'allcommunities' :				$memory['url'] += RESTClient.urls.allcommunities;				break;			case 'community' :			case 'community-edit' :			case 'community-delete' :				$memory['url'] +=  RESTClient.urls.community + $memory['rsrcid'];				break;			case 'community-change' :				$memory['url'] +=  RESTClient.urls.community + $memory['rsrcid'] + '/' + $memory['rsrcfield'];				break;			case 'allcollections' :				$memory['url'] += RESTClient.urls.allcollections;				break;			case 'collection' :			case 'collection-edit' :			case 'collection-delete' :				$memory['url'] +=  RESTClient.urls.collection + $memory['rsrcid'];				break;			case 'collection-change' :				$memory['url'] +=  RESTClient.urls.collection + $memory['rsrcid'] + '/' + $memory['rsrcfield'];				break;			case 'allitems' :				$memory['url'] += RESTClient.urls.allitems;				break;			case 'item' :			case 'item-edit' :			case 'item-delete' :				$memory['url'] +=  RESTClient.urls.item + $memory['rsrcid'];				break;			case 'item-change' :				$memory['url'] +=  RESTClient.urls.item + $memory['rsrcid'] + '/' + $memory['rsrcfield'];				break;			case 'allusers' :				$memory['url'] += RESTClient.urls.allusers;				break;			case 'user' :				$memory['url'] +=  RESTClient.urls.user + $memory['rsrcid'];				break;			case 'allgroups' :				$memory['url'] += RESTClient.urls.allgroups;				break;			case 'group' :				$memory['url'] +=  RESTClient.urls.group + $memory['rsrcid'];				break;			default :				break;		};				if($memory['end'] === false){					$memory['url'] += '.json';		}				$memory['valid'] = true;		return $memory;	},		output : function(){		return ['url'];	}};/** *	@service SessionRESTURL *	@desc appends session information to URL * *	@param url string [memory] * *	@return url string [memory] ***/RESTClient.jquery.service.SessionRESTURL = {	input : function(){		return {			required : ['url']		};	},		run : function($memory){		var $d = new Date();		$memory['url'] = $memory['url'] + '?_ts=' + $d.getTime();				if(RESTClient.session.user || false){			$memory['url'] = $memory['url'] + '&user=' + RESTClient.session.user + '&pass=' + RESTClient.session.pass;		}				$memory['valid'] = true;		return $memory;	},		output : function(){		return ['url'];	}};/** *	@service SessionWrite *	@desc Saves session information * *	@param form string [memory] optional default false ***/RESTClient.jquery.service.SessionWrite = {	input : function(){		return {			optional : { form : false }		};	},		run : function($memory){		RESTClient.session.user = $($memory['form'] + ' input[name=user]').val() || false;		RESTClient.session.pass = $($memory['form'] + ' input[name=pass]').val() || false;				$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@workflow ResourceDelete *	@desc deletes resource fields using DELETE * *	@param type string [message] *	@param sel string [message] *	@param id integer [message] *	@param field string [message]  ***/RESTClient.jquery.workflow.ResourceDelete = {	run : function(message, memory){		if(message.field || false){			var type = 'rest-id';		}		return FireSpark.Kernel.run([{			service : FireSpark.core.service.LoadConfirm,			confirm : true,			value : 'Are you sure you want to continue ?'		},{			service : FireSpark.jquery.service.FormValidate,			form : message.sel + ' form'		},{			service : FireSpark.jquery.service.FormRead,			form : message.sel + ' form'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : message.type,			rsrcid : message.id,			rsrcfield : message.field || false,			end : true		},{			service : FireSpark.jquery.service.RequestWrite,			type : type || false		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.service.ElementState,			element : message.sel + ' input[name=submit]',			disabled : true		},{			service : FireSpark.jquery.service.ElementContent,			element : message.sel + ' span.status',			data :  FireSpark.core.constant.loadmsg,			duration : 10		},{			service : FireSpark.jquery.service.LoadAjax,			request : 'DELETE',			processData : false,			workflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]',				disable : true			},{				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.successimg			}],			errorflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]'			}, {				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.errorimg			}]		}], memory);	}};/** *	@workflow ResourceEdit *	@desc edits resource fields using PUT * *	@param type string [message] *	@param sel string [message] *	@param id integer [message] *	@param field string [message]  ***/RESTClient.jquery.workflow.ResourceEdit = {	run : function(message, memory){		return FireSpark.Kernel.run([{			service : FireSpark.jquery.service.FormValidate,			form : message.sel + ' form'		},{			service : FireSpark.jquery.service.FormRead,			form : message.sel + ' form'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : message.type,			rsrcid : message.id,			rsrcfield : message.field		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.service.RequestWrite,			type : 'json'		},{			service : FireSpark.jquery.service.ElementState,			element : message.sel + ' input[name=submit]',			disabled : true		},{			service : FireSpark.jquery.service.ElementContent,			element : message.sel + ' span.status',			data :  FireSpark.core.constant.loadmsg,			duration : 10		},{			service : FireSpark.jquery.service.LoadAjax,			request : 'PUT',			processData : false,			workflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]'			},{				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.successimg			}],			errorflow : [{				service : FireSpark.jquery.service.ElementState,				element : message.sel + ' input[name=submit]'			}, {				service : FireSpark.jquery.service.ElementContent,				data : RESTClient.jquery.constant.errorimg			}]		}], memory);	}};/** *	@workflow ResourceLoad *	@desc loads resource using GET and applies template into selected element * *	@param type string [memory] *	@param tabui string [memory] optional default 'tabuipanel' *	@param title string [memory] optional default 'DSpace RESTUI' *	@param id integer [memory] optional default false * *	@param ld string [memory] optional default RESTClient.jquery.constant.loadmsg *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 ***/RESTClient.jquery.workflow.ResourceLoad = {	input : function(){		return {			required : ['type'],			optional : { 				tabui : 'tabuipanel',				title : 'DSpace RESTUI', 				id : false, 				ld : RESTClient.jquery.constant.loadmsg,				anm : 'fadein',				dur : 1000,				dly : 0			}		};	},		run : function($memory){		return FireSpark.Kernel.execute([{			service : FireSpark.jquery.service.ElementTab		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : $memory['type'],			rsrcid : $memory['id']		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.workflow.LoadTemplate,			input : { 				loaddata : 'ld', 				animation : 'anm', 				duration : 'dur', 				delay : 'dly' 			},			request : 'GET',			type : 'json',			template : 'tpl-' + $memory['type']		}], $memory);	},		output : function(){		return [];	}};/** *	@workflow SessionBegin *	@desc Stores login information into session, authenticates and loads account template * *	@param cntr string [memory] optional default '#account-panel' *	@param sel form-parent selector string [memory] optional default '#login-container' ***/RESTClient.jquery.workflow.SessionBegin = {	input : function(){		return {			optional : { cntr : '#account-panel', sel : '#login-container' }		};	},		run : function($memory){		FireSpark.Kernel.execute([{			service : FireSpark.jquery.service.FormValidate,			form : $memory['sel'] + ' form'		},{			service : RESTClient.jquery.service.SessionWrite,			form : $memory['sel'] + ' form'		},{			service : RESTClient.jquery.service.ResourceRESTURL,			rsrctype : 'allcommunities'		},{			service : RESTClient.jquery.service.SessionRESTURL		},{			service : FireSpark.jquery.workflow.LoadTemplate,			element : $memory['cntr'],			select : true,			template : 'tpl-account',			request : 'GET',			errorflow : {				service : RESTClient.jquery.workflow.SessionEnd,				data : { invalid : true }			}		}], $memory);				/**		 *	Return false to stop browser event		**/		$memory['valid'] = false;		return $memory;	},		output : function(){		return [];	}};/** *	@workflow SessionEnd *	@desc Deletes session and loads account template * *	@param cntr string [memory] optional default '#account-panel' *	@param sel form-parent selector string [memory] optional default '#login-container' *	@param data object [memory] optional default { invalid : false } ***/RESTClient.jquery.workflow.SessionEnd = {	input : function(){		return {			optional : { cntr : '#account-panel', sel : '#login-container', data : { invalid : false } }		};	},		run : function($memory){		FireSpark.Kernel.execute([{			service : RESTClient.jquery.service.SessionWrite,			form : $memory['sel'] + ' form'		},{			service : FireSpark.jquery.workflow.TemplateApply,			element : $memory['cntr'],			select : true,			template : 'tpl-account',			data : $memory['data']		}], $memory);				/**		 *	Return false to stop browser event		**/		$memory['valid'] = false;		return $memory;	},		output : function(){		return [];	}};/**
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
