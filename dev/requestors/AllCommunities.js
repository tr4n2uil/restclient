/** *	AllCommunities requestor**/RESTClient.jquery.requestor.AllCommunities = function(config){	var d = new Date();	return {		dataType : 'json',		type : 'GET',		loadurl : RESTClient.urls.base + RESTClient.urls.allcommunities,		loadparams : {			user : RESTClient.session.user,			pass : RESTClient.session.pass,			_ts : d.getTime()		}	};}