RESTClient = {};
RESTClient.jquery = {};
RESTClient.jquery.view = {};
RESTClient.jquery.module = {};
RESTClient.jquery.renderer = {};
/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = (function(){	return {		execute : function(args){			$(args.selector).button();			$(args.selector).click(function(){				ServiceClient.client.Kernel.paint({					task : {						view : 'tabui',						template : 'test',						renderer : 'tplui'					},					params : {						tabtitle : 'Testing',						isclosable : true,						autoload : false,						loadurl : 'core/test.json',						loadparams : {}					}				});				return false;			});		}	};})();