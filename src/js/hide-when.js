
(function($) {
	$.fn.hideWhenToggler = function(options){
		
		var t = this;
	
		var esc$ = function(idTag, param){
   			idTag=idTag.replace(/:/gi, "\\:")+(param ? param : "");
   			return($("#"+idTag));
		}
				
		var settings = $.extend({
			togglerId: undefined,
			hideWhenChecked: false
		}, options);
	
		var isTogglerChecked = function(){
			var rc = esc$(settings.togglerId).prop('checked');
			return rc; 
		};
									
		var toggle = function(){				
			$(t).each(function(index,value){			
				if( settings.hideWhenChecked ){
					isTogglerChecked() ? $(value).hide() : $(value).show();
				} else {
					isTogglerChecked() ? $(value).show() : $(value).hide();
				}											
			});
		};
							
		esc$(settings.togglerId).on("change", function(){
			toggle();
		})

 		toggle();
			
	}
}(jQuery));

