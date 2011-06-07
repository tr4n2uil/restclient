/**
 *	ServiceClient
 *	JavaScript UI Framework for consuming Services 
 *	
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
 *	Services are generic modules providing resuable stateless functionalities
 *
 *	interface Service {
 *		public function run(message, memory){
 *			... use message for receiving configurations ...
 *			... use memory for managing state in workflows ...
 *			... save reference in Registry instead of returning objects ...
 *		}
 *	}
 *	
**/

var ServiceClient = (function(){
	/**
	 *	@var references array
	 *
	 *	an array for saving references
	 *	references may be accessed through the Registry
	 *
	**/
	var references = new Array();
	
	/**
	 *	@var navigators array
	 *
	 *	an array that saves indexes to service workflows
	 *	workflow = [{	
	 *		service : ...,
	 *		( ... params : ... )
	 *	}];
	 *
	 *	indexes usually starts with # (href programming)
	 *	navigator is index followed by parameters to be overrided delimited by ':'
	 *
	 *	example #testtab:tabtitle=Krishna:loadurl=test.php
	 *
	**/
	var navigators = new Array();
	
	return {
		/**
		 *	@var Registry object
		 *	
		 *	manages references and navigator indexes
		 *
		**/
		Registry : {
			/**
			 *	saves a Reference with index
			 *
			 *	@param index string
			 *	@param reference object or any type
			 *
			**/
			save : function(index, reference){
				references[index] = reference;
			},
			
			/**
			 *	gets the Reference for index
			 *
			 *	@param index string
			 *
			**/
			get : function(index){
				return references[index];
			},
			
			/**
			 *	removes a Reference with index
			 *
			 *	@param index string
			 *
			**/
			remove : function(index){
				references[index] = 0;
			},
			
			/**
			 *	adds a Navigator with index
			 *
			 *	@param index string
			 *	@param navigator object
			 *
			**/
			add : function(index, navigator){
				navigators[index] = navigator;
			},
			
			/**
			 *	removes a Navigator with index
			 *
			 *	@param index string
			 *
			**/
			removeNavigator : function(index){
				navigators[index] = 0;
			}
		},
		
		/**
		 *	@var Kernel object
		 *	
		 *	manages the following tasks
		 *		runs services when requested
		 *		processes navigators when received
		 *
		**/
		Kernel : {			
			/** 
			 *	executes a workflow with the given definition
			 *
			 *	@param config object
			 *	@param mem object optional
			 *
			**/
			run : function(config, mem){
				/**
				 *	create a new memory if not passed
				**/
				var memory = mem || {};
				
				for(var i in config){
					var service = config[i].service;
					var message = config[i];
					/**
					 *	run the service with the message and memory
					**/
					if(service.run(message, memory) !== true)
						return false;
				}
				
				return true;
			},
			
			/**
			 *	processes the navigator request received to run services and workflows
			 *
			 *	@param request string
			 *
			**/
			navigate : function(request){
				var req = request.split(':');
				var index = req[0];
				
				var config = new Array();
				for(var i=1, len=req.length; i<len; i++){
					var param = (req[i]).split('=');
					config[param[0]] = param[1];
				}
				
				if(navigators[index] || false){
					var navigator = new (navigators[index])(config);
					return this.run(navigator);
				}
				
				return 0;
			}
		}
	};
})();
ServiceClient.jquery = {};

ServiceClient.jquery.view = {};
ServiceClient.jquery.module = {};
ServiceClient.jquery.loader = {};
ServiceClient.jquery.renderer = {};
ServiceClient.jquery.navigator = {};
ServiceClient.jquery.requestor = {};
ServiceClient.jquery.template = {};
/**
 * ElementView view
 *
 * @param elementid string
 *
 *	@return view object
 *
**/
ServiceClient.jquery.view.ElementView = {
	run : function(message, memory){
		memory.view = $(message.elementid);
		return true;
	}
};
/**
 *	TabUIAdd view
 *
 *	@param tabui string
 *  @param tabtitle string
 *  @param autoload boolean
 *  @param taburl string
 *
 *	@return view View
 *
**/
ServiceClient.jquery.view.TabUIAdd = {
	run : function(message, memory){
		var tabui = ServiceClient.Registry.get(message.tabui);
		memory.view = tabui.add(message.tabtitle, message.autoload || false, message.taburl || false);
		return true;
	}
};
/**
 *	TabUI renderer
 *
 *	@param cache boolean
 *	@param collapsible boolean
 *	@param event string
 *	@param tablink boolean
 *	@param indexstart integer
 *	@param saveindex string
 *
 *	@param view View
 *
 *	@save tabpanel object
 *
**/
ServiceClient.jquery.renderer.TabUI = {
	run : function(message, memory){
		var tab = new Array();
		var index = message.indexstart || 0;
		
		var options = {
			cache : message.cache || false,
			collapsible : message.collapsible || false,
			event : message.event || 'click',
			tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
			add: function( event, ui ) {
				tab[index] = $(ui.panel);
			}
		};
		
		if(message.tablink || false){
			options.load = function(event, ui) {
				$('a', ui.panel).click(function() {
					$(ui.panel).load(this.href);
					return false;
				});
			}
		}
		
		var tabpanel = memory.view.tabs(options);
		memory.view.fadeIn(1000);
		
		$('.ui-icon-close').live( "click", function() {
			var indx = $("li", tabpanel).index($(this).parent());
			tabpanel.tabs( "remove", indx );
		});
		index--;
		
		ServiceClient.Registry.save(message.saveindex, {
			add : function(tabtitle, autoload, taburl){
				index++;
				var url = '#ui-tab-'+index;
				if(autoload || false){
					url = taburl;
				}
				tabpanel.tabs('add', url, tabtitle);
				tabpanel.tabs('select', '#ui-tab-'+index);
				return tab[index];
			}
		});
		return true;
	}	
};
/**
 *	TemplateUI renderer
 *
 *	@param template Template
 *
 *	@param data object
 *
**/
ServiceClient.jquery.renderer.TemplateUI = {
	run : function(message, memory){
		memory.view.hide();
		memory.view.html($.tmpl(message.template, memory.data))
		memory.view.fadeIn(1000);
		return true;
	}
};
/**
 *	AjaxLoader loader
 *
 *	@param loadurl string
 *	@param loadparams object
 *	@param	datatype string
 *	@param request string
 *	@param workflow Workflow
 *	
 *	@param view View
 *
 *	@return data string
 *	@return status integer
 *
**/
ServiceClient.jquery.loader.AjaxLoader = {
	run : function(message, memory){
		memory.view.html('<p class="loading">Loading ...</p>');
		$.ajax({
			url: message.loadurl || message.loadurl,
			data: message.loadparams || {},
			dataType : message.datatype || 'json',
			type : message.request || 'POST',
			success : function(data, status, request){
				memory.data = data;
				memory.status = status;
				ServiceClient.Kernel.run(message.workflow, memory);
			},
			error : function(request, status, error){
				memory.view.html('<p class="error">The requested resource could not be loaded</p>');
			}
		});
		return true;
	}
};
/** *	Alert module * *	@param title string *	@param data content (text) ***/ServiceClient.jquery.module.Alert = {	run : function(message, memory){		alert(message.title + " : " + message.data);		return true;	}};/** *	NavigatorInit module * *	@param selector string *	@param attribute string ***/ServiceClient.jquery.module.NavigatorInit = {	run : function(message, memory){		var links = $(message.selector);		links.live('click', function(){			ServiceClient.Kernel.navigate($(this).attr(message.attribute));			return false;		});		return true;	}};/** *	TestTab navigator * *	@param tabtitle string *	@param loadurl URL ***/ServiceClient.jquery.navigator.TestTab = function(config){	return [{		service : ServiceClient.jquery.view.TabUIAdd,		tabui : 'tabuipanel',		tabtitle : config.tabtitle || 'Testing'	},{		service : ServiceClient.jquery.loader.AjaxLoader,		loadurl : config.loadurl || 'data.json.php',		workflow : [{			service : ServiceClient.jquery.renderer.TemplateUI,			template : ServiceClient.jquery.template.Test		}]	}];}