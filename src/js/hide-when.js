
(function($) {
	$.fn.hideWhenToggler = function(options){
		
		
		var hideWhenToggler = this;
	
		// to make it work with colon separated hierarchical IDs as
		// used by XPages
		// @author Mark Roden
		// @see http://openntf.org/XSnippets.nsf/snippet.xsp?id=x-jquery-selector-for-xpages
		var x$ = function(idTag, param){
   			idTag=idTag.replace(/:/gi, "\\:")+(param ? param : "");
   			return($("#"+idTag));
		}
		
		
		var settings = $.extend({
			togglerId: undefined,
			hideWhenChecked: false
		}, options);
	
		// get the toggler status  
		var isTogglerChecked = function(){
			var rc = x$(settings.togglerId).prop('checked');
			return rc; 
		};
		
		// show hide elements - inverse if hideWhenChecked is set 
		var toggle = function(){				
			$(hideWhenToggler).each(function(index,value){			
				if( settings.hideWhenChecked ){
					isTogglerChecked() ? $(value).hide() : $(value).show();
				} else {
					isTogglerChecked() ? $(value).show() : $(value).hide();
				}											
			});
		};
		
		// register event handler to show/hide elements
		x$(settings.togglerId).on("change", function(){
			toggle();
		})

		// Set initial status 
 		toggle();
			
	}
}(jQuery));

