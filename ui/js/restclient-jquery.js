RESTClient = {};
RESTClient.jquery = {};
RESTClient.jquery.view = {};
RESTClient.jquery.module = {};
RESTClient.jquery.renderer = {};
/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = (function(){	return {		execute : function(args){			$(args.selector).button();		}	};})();