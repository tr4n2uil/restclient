/** *	AllCollections navigator * *	@param tabtitle string ***/RESTClient.jquery.navigator.AllCollections = function(config){	return [{		service : 'paint',		view : 'tabui',		template : 'allcollections',		requestor : 'allcollections',		renderer : 'restloadui',		params : {			tabtitle : config.tabtitle || 'All Collections'		}	}];}