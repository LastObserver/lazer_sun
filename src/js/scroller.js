"use strict";
(function( $ ){
	var methods = {
		show : function(topPosition,wHeight,elements) { 
			console.log('hello');
			elements.each(function(i,elem){
				var elemTopPosition = $(elem).offset().top;
				if (elemTopPosition < (topPosition+wHeight)){
					$(elem).addClass('active')
				}
			})
		}
	}
	$.fn.scroller = function() {
		var elements = this;
		$(window).on('scroll load', function(e){
			console.log('hey');
			var topPosition = $(this).scrollTop();
			var wHeight = $(this).height();
			methods.show(topPosition,wHeight,elements);
		})
	};
})( jQuery );