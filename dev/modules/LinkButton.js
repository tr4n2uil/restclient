/** *	LinkButton module * *	@param selector string ***/RESTClient.jquery.module.LinkButton = {	run : function(message, memory){		$(message.selector).button();		return true;	}};