/**
 *	@helper getDate
 *
**/
RESTClient.jquery.helper.getDate = function(time){
	var d = new Date(time);
	return d.toDateString();
}
