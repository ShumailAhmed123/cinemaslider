(function($) {
	var CinemaSlider = function(element, options){
		var settings = $.extend({}, $.fn.nivoSlider.defaults, options);
		var slider = $(element); 
		console.log(slider);
		return this;
	}

	$.fn.cinemaSlider = function(options){
		return this.each(function(key,value){
			var element = $(this);
			if (element.data('cinemaSlider')) { return element.data('cinemaSlider'); }
			var cinemaSlider = new CinemaSlider(this, options); 
            element.data('cinemaSlider', cinemaSlider);
		});
	}; 
	$.fn._reverse = [].reverse;
})(jQuery);