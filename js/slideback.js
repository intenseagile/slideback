(function($) {
	$.fn.slideBack = function(){
	    return this.each(function() {
	        var $this = $(this);
	        var images = $this.data('images');
	        var number_of_images = images.length;
	        var counter = 1;
	        
			$this.css('background-image', 'url(' + images[0] + ')'); 
			
	        setInterval(function() {
	            if (counter >= number_of_images-1) { counter = 0; }
	            $this.fadeTo('slow', 0.1, function(){
	                $this.css('background-image', 'url(' + images[counter] + ')'); 
	            }).fadeTo('slow',1);
	            counter++;
	        },5000);    
	    })
	}
}(jQuery));