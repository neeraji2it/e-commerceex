///*global jQuery:false */
jQuery(document).ready(function() {
	"use strict";	
    functions();
});

function functions() {
	
	//clearfix for columns
	jQuery('<div class="clearfix"></div>').insertAfter(".col-md-4.one-column:nth-child(3n)");
    jQuery('<div class="clearfix"></div>').insertAfter(".col-md-3.one-column:nth-child(4n)");
    jQuery('<div class="clearfix"></div>').insertAfter(".post-widget .col-md-6:nth-child(2n)");
    jQuery('<div class="clearfix"></div>').insertAfter(".post-widget .col-md-4:nth-child(3n)");
    jQuery('<div class="clearfix"></div>').insertAfter(".post-widget .col-md-3:nth-child(4n)");
    //clearfix for columns END

	//parallax
	jQuery.stellar({horizontalScrolling: false,verticalOffset: 40});
	//parallax END
	
	//js buttom styles
	jQuery("#searchform #searchsubmit").addClass("btn btn-primary");
	jQuery(".footer.dark-theme #searchform #searchsubmit").addClass("btn btn-warning");
	jQuery('.widget_search #s,.widget_product_search #s').addClass("form-control input-sm");
	jQuery(".form-submit #submit").addClass("btn btn-primary").removeAttr("id");
    jQuery('.price_slider_amount button').removeClass("button").addClass("btn btn-sm btn-primary");
    jQuery('.group_table a.btn').removeClass('btn-primary').addClass("btn btn-xs btn-default");
    //js buttom styles END
    
    // bootstrap tooltip
	jQuery('.lpd-tooltip').tooltip();
	// bootstrap tooltip END
    

	
	//callout
    /*jQuery(".callout-btn").each(function() {
	    var contentHeight = jQuery(this).prev('.callout-content').height();
	    jQuery(this).css({height: contentHeight});	
	});*/
	//callout END
	
	//header search
	/*jQuery( ".search-icon" ).click(function () {
		
		if(jQuery( this ).parent().is('.active-dropdown')){
		
			jQuery( this ).parent().toggleClass('active-dropdown',false);
		
		}
		else{
		
			jQuery( this ).parent().toggleClass('active-dropdown',true);
		
		}
	
	});
	
	jQuery( ".header-search .form-control" ).focusin(function() {
		jQuery( this ).parent().parent().parent().parent().parent().toggleClass('active-dropdown',true);
	});
	
    jQuery(document).click(function(e){
       if(jQuery(e.target).hasClass("search-icon"))
       {
           return false;
       }
       else if(jQuery(e.target).hasClass("search-dropdown"))
       {
	       return false;
       }
       else if(jQuery(e.target).hasClass("form-control"))
       {
	        return false;   
       }
       else
       {
           jQuery( ".header-search" ).toggleClass('active-dropdown',false);
       }
    })
    
	var window_width = jQuery(this).width();
	
	var container = jQuery('.search-dropdown-full-width .container > form').width();
	var margin = (window_width-container)/2;
	jQuery('.search-dropdown-full-width').css({"margin-left": -margin,"margin-right": -margin})
	
	jQuery(window).resize(function(){
		var container = jQuery('.search-dropdown-full-width .container > form').width();
		var margin = (window_width-container)/2;
		jQuery('.search-dropdown-full-width').css({"margin-left": -margin,"margin-right": -margin})
	});*/
	//header search END
	
	// wpml
	/*jQuery( ".wpml-switcher" ).click(function (e) {
	    jQuery( this ).toggleClass('active-dropdown');
	    e.stopPropagation()
	});

	jQuery(document).click(function (e) {
	   if (! jQuery(e.target).hasClass('wpml-switcher')) jQuery('.wpml-switcher').removeClass('active-dropdown');
	});*/
	// wpml END
	
    // contact form 7
	jQuery(".wpcf7 .wpcf7-submit").addClass("btn-primary").addClass("btn");
	jQuery(".wpcf7 input").addClass("form-control");
	jQuery(".wpcf7 input[type=submit]").removeClass("form-control");
	jQuery(".wpcf7 textarea").addClass("form-control");
	jQuery(".wpcf7 select").addClass("form-control");
	// contact form 7 END
	
    
    // product category widget
    jQuery('.widget_product_categories ul > li > ul.children').before('<span class="toggle">[+]</span>');
 
    var current_cat = jQuery('.widget_product_categories ul > li.current-cat, .widget_product_categories ul > li.current-cat-parent');
    
    current_cat.children('.toggle').html("[-]");
    current_cat.children('ul').slideDown().addClass('opened');
    
    
    jQuery('.widget_product_categories ul > li > ul.children').each(function() {
        jQuery(this).parent().children('.toggle').toggle(function() {
			if(jQuery(this).parent().children('ul').hasClass('opened')){
			jQuery(this).html("[+]");
			jQuery(this).parent().children('ul').slideUp();
			jQuery(this).parent().children('ul').removeClass('opened').addClass('closed');
			}else{
			jQuery(this).html("[-]");
			jQuery(this).parent().children('ul').slideDown();
			jQuery(this).parent().children('ul').removeClass('closed').addClass('opened');
			}
        }, function() {
			if(jQuery(this).parent().children('ul').hasClass('closed')){
			jQuery(this).html("[-]");
			jQuery(this).parent().children('ul').slideDown();
			jQuery(this).parent().children('ul').removeClass('closed').addClass('opened');
			}else{
			jQuery(this).html("[+]");
			jQuery(this).parent().children('ul').slideUp();
			jQuery(this).parent().children('ul').removeClass('opened').addClass('closed');
		}
        });    
    });
    
    jQuery('.widget_product_categories > ul > li > .toggle').html("[-]");
    jQuery('.widget_product_categories > ul > li > ul.children').addClass('opened').css({display: "block"});
    
    // product category widget END

}