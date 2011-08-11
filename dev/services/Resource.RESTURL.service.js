/** *	@service ResourceRESTURL *	@desc generates URL from resource information * *	@param rsrctype string [memory] *	@param rsrcid string [memory] optional default false *	@param rsrcfield string [memory] optional default false *	@param rsrcvalue string [memory] optional default false *	@param end boolean [memory] optional default false * *	@return url string [memory] ***/RESTClient.jquery.service.ResourceRESTURL = {	input : function(){		return {			required : ['rsrctype'],			optional : { rsrcid : false, rsrcfield : false, rsrcvalue : false, end : false }		};	},		run : function($memory){		$memory['url'] = RESTClient.urls.base;				switch($memory['rsrctype']){			case 'allcommunities' :				$memory['url'] += RESTClient.urls.allcommunities;				break;			case 'community' :			case 'community-edit' :			case 'community-delete' :				$memory['url'] +=  RESTClient.urls.community + $memory['rsrcid'];				break;			case 'community-change' :				$memory['url'] +=  RESTClient.urls.community + $memory['rsrcid'] + '/' + $memory['rsrcfield'];				break;			case 'allcollections' :				$memory['url'] += RESTClient.urls.allcollections;				break;			case 'collection' :			case 'collection-edit' :			case 'collection-delete' :				$memory['url'] +=  RESTClient.urls.collection + $memory['rsrcid'];				break;			case 'collection-change' :				$memory['url'] +=  RESTClient.urls.collection + $memory['rsrcid'] + '/' + $memory['rsrcfield'];				break;			case 'allitems' :				$memory['url'] += RESTClient.urls.allitems;				break;			case 'item' :			case 'item-edit' :			case 'item-delete' :				$memory['url'] +=  RESTClient.urls.item + $memory['rsrcid'];				break;			case 'item-change' :				$memory['url'] +=  RESTClient.urls.item + $memory['rsrcid'] + '/' + $memory['rsrcfield'];				break;			case 'allusers' :				$memory['url'] += RESTClient.urls.allusers;				break;			case 'user' :				$memory['url'] +=  RESTClient.urls.user + $memory['rsrcid'];				break;			case 'allgroups' :				$memory['url'] += RESTClient.urls.allgroups;				break;			case 'group' :				$memory['url'] +=  RESTClient.urls.group + $memory['rsrcid'];				break;			case 'allstats' :				$memory['url'] += RESTClient.urls.allstats;				break;			default :				break;		};				if($memory['end'] === false){					$memory['url'] += '.json';		}				$memory['valid'] = true;		return $memory;	},		output : function(){		return ['url'];	}};