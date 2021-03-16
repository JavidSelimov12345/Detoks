"use strict";

(function ($) {

	jQuery(document).on('ready', function(){

		initMap();

		$('.parallax').parallax("50%", -0.5);
	    
		// Counter
		
		jQuery('.count').counterUp();

		// Main Page Shop Slider
		jQuery('.shop-slider').owlCarousel({
		    loop:true,
		    margin:30,
		    stagePadding:10,
		    nav:true,
		    dots:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2,
		            margin:0,
		    		stagePadding:10,
		        },
		        991:{
		            items:4
		        }
		    }
		})

		// Main Page Review Slider
		jQuery('.review-slider').owlCarousel({
		    loop:true,
		    margin:0,
		    stagePadding:0,
		    nav:true,
		    dots:false,
		    items:1,
		    autoplay:true,
		    autoplayHoverPause:true
		})

		jQuery('.top-nav .search').on('click', function(){
			jQuery(this).parent().toggleClass("show-field");
		});

		jQuery(".country_to_state").select2();
		jQuery(".woo-sort").select2({
		  minimumResultsForSearch: Infinity
		});

		jQuery('.wc_payment_method label').on('click', function(){
			jQuery(this).parent().find('.payment_box').slideDown();
			jQuery(this).parent().siblings().find('.payment_box').slideUp();
		});

		jQuery( '.swipebox' ).swipebox();
	
		// Price Slider

		    $( "#slider-range" ).slider({
		      range: true,
		      min: 1,
		      max: 100,
		      values: [ 25, 68 ],
		      slide: function( event, ui ) {
		        $( "#amount" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		      }
		    });
		    $( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

			});	

})(jQuery);

function initMap() {
    var mapEl = jQuery('#map');
    if (mapEl.length) {
        var uluru = {
            lat: mapEl.data('lat'),
            lng: mapEl.data('lng')
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: mapEl.data('zoom'),
            center: uluru,
            scrollwheel: false,
            styles: mapStyles
        });

    }
}