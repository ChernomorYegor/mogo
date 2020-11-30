$(function() {
	
	/*** Nav_bar ***/
	$(window).scroll(function(){
		var nav_bar = $('.nav_bar'),
			h_nav = nav_bar.height(),
			h_header = $('#header').height();
		if ($(this).scrollTop() >= h_header-h_nav+10 && nav_bar.hasClass('default')){
			nav_bar.fadeOut('fast', function(){
				$(this).removeClass('default').addClass('fixed').fadeIn(100);
				$('.slider_cont').addClass('h_pad');
			});
		} else if ($(this).scrollTop() < h_header-h_nav+10 && nav_bar.hasClass('fixed')){
			nav_bar.fadeOut('fast', function(){
				$(this).removeClass('fixed').addClass('default').fadeIn(100);
				$('.slider_cont').removeClass('h_pad');
			});
		}
	});

	/*** ScrollTo ***/
	$('a.scroll').click(function(e) {
		e.preventDefault();
		var idscroll = $(this).attr('href'),
			h_nav = $('.nav_bar').height();
		$.scrollTo(idscroll, 1500, {offset:-h_nav});
	});

	/*** Header Slider ***/
	$('.header_slider').slick( {
		autoplay: true,
		autoplaySpeed: 6000,
		arrows: false,
		dots: true,
		fade: true,
		cssEase: 'linear',
		speed: 500
	});

	$( ".slick-dots button" ).prepend( "0" );

	/*** Service Accordeon ***/
	$('.service_accord section').click(function() {
		var index = $('.service_accord section').index($(this));
		$('.service_images div').hide().eq(index).show();
		$(this).siblings().removeClass('active').find('.service_text').slideUp();
    	$(this).addClass('active').find('.service_text').slideDown();
	});

	/*** Quotes Slider ***/
	$('.quotes_slider').slick( {
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 1000
	});

	/*** Reviews Slider ***/
	$('.reviews_slider').slick( {
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 1000
	});

});