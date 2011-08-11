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
	group : 'groups/',
	allstats : 'stats'
};

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

