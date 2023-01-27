var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function( $ ) {
	'use strict';

	jQuery(function($){

		// var _linkedin_data_partner_id = "206146";

		// (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://web.archive.org/web/20210419025700/https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();


		// New Fit Campaign Plugin Popup Tracking
		$(document).on('fitomv2CampaignShow', function( event ){

			var locationPathname = location.pathname.replace('//','/');
			var campaign = event.detail.name + ' - ' + event.detail.device;
			var fitpixeliframepop=document.createElement('iframe');
			fitpixeliframepop.style.display="none";
			fitpixeliframepop.src='https://web.archive.org/web/20210419025700/https://go.performi.com/track/view/?p='+locationPathname+'&m=pop&e='+encodeURIComponent(campaign);
			document.body.appendChild(fitpixeliframepop);
		});

		$(document).on('fitomv2CampaignConversion', function( event ){

			var locationPathname = location.pathname.replace('//','/');
			var campaign = event.detail.name + ' - ' + event.detail.device;
			var fitpixeliframepop=document.createElement('iframe');
			fitpixeliframepop.style.display="none";
			fitpixeliframepop.src='https://web.archive.org/web/20210419025700/https://go.performi.com/track/view/?p='+locationPathname+'&m=popconversion&e='+encodeURIComponent(campaign);
			document.body.appendChild(fitpixeliframepop);


			if (typeof pintrk == 'function') { 
				if ( 'email' == event.detail.ctaType ) {
					pintrk('track', 'lead', {
						lead_type: 'Newsletter'
					});
				} else {
					pintrk('track', 'signup');
				}
			}
		});


		$(document).on('fitInfiniteCommentsLoadMore', function( event ){
			__gaTracker('send','event', 'Comments', 'Load More', 'pg ' + event.detail.page)

		});


		$(document).on('fitHartfordInit', function( event ){
			// console.log( event.type, event.detail );
			__gaTracker('send','event', 'Hartford', 'Init' );
		});
		$(document).on('fitHartfordRequest', function( event ){
			// console.log( event.type, event.detail );
			__gaTracker('send','event', 'Hartford', 'Request', event.detail.apiType );
		});
		$(document).on('fitHartfordResponse', function( event ){
			// console.log( event.type, event.detail );
			__gaTracker('send','event', 'Hartford', 'Response', event.detail.apiType );
		});
		$(document).on('fitHartfordConversion', function( event ){
			// console.log( event.type, event.detail );
			__gaTracker('send','event', 'Hartford', 'Conversion', event.detail.response );
		});



		$('.gallery').find('br').detach();

		// Imported from theme header scripts
		$('.tablepress a').each(function(i, el){
			if( el.href.indexOf('/goto/') !== -1 ){
				$(el).attr('rel', 'nofollow');
			}
		});
		$('.thirstylink a').attr('rel', 'nofollow');
		$('.button a').attr('rel', 'nofollow');

		// -- Sidebar image on subdirectory
		if( $('.directory-sidebar-img').length ){
			var html = $('.directory-sidebar-img').html();
			$('aside.sidebar').prepend(html);
			$('.directory-sidebar-img').remove();
		}

	// 	// Smooth scrolling anchor links
	// 	function ea_scroll( hash ) {

	// 		hash = hash.split('?');
	// 		hash = hash[0];

	// 		var target = $(hash);

	// 		target = target.length ? target : $('[name=' + hash +']');
	// 		if (target.length) {
	// 			$('html, body').animate({
	// 				scrollTop: target.offset().top
	// 			}, 1000);
	// 			return false;
	// 		}
	// 	}
	// 	// -- Smooth scroll on pageload
	// 	if( window.location.hash ) {
	// 		//if ($( window ).width() >= 1024) ea_scroll( window.location.hash );
	// 		ea_scroll( window.location.hash );

	// 		// -- If tabs are present then load correct tab
	// 		if( $('.fit-fresh-tabs').length ){
	// 			var hash = window.location.hash;
	// 			$('.fit-fresh-tabs').find('ul.nav-tabs a[href="' + hash + '"]').tab('show');
	// 		}

	// 	}

	// 	// -- Change HASH on tab change
	//   $('.fit-fresh-tabs').find('.nav-tabs a').click(function (e) {
	//     $(this).tab('show');
	//     window.location.hash = this.hash;
	//   });

	//   // Back to top button
	//   $('.back-to-top').click(function(e) {
	// 	  e.preventDefault();
	// 	  $("html, body").animate({ scrollTop: "0" }); 
	// 	  return false;
	//   });

	// 	// -- Smooth scroll on click
	// 	$('a[href*="#"]:not([href="#"]):not(.no-scroll)').click(function() {
	// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
	// 			ea_scroll( this.hash );
	// 		}
	// 	});

		// Buyers Guide Dropdown and Back to Top
		$(window).on('scroll', function(){
			if ( $('body').hasClass('home') ) {
				var distance = 550;
			} else {
				var distance = 200;
			}
			var screen = $('.site-container');
			var offset = $(window).scrollTop();
			if( offset > distance && 767 < screen.width() ) {
				$('.buyers-guide-dropdown').addClass('visible');
				$('.back-to-top').addClass('visible');
			} else {
				$('.buyers-guide-dropdown').removeClass('visible');
				$('.back-to-top').removeClass('visible');
			}
				
		});

		// Floating Sharing Buttons
		var articleScrollHandling = {
		    allow: true,
		    reallow: function() {
		        articleScrollHandling.allow = true;
		    },
		    delay: 200 //(milliseconds) adjust to the highest acceptable value
		};

		$(window).on('scroll', function(){
			if( articleScrollHandling.allow ) {

				articleScrollHandling.allow = false;
				setTimeout(articleScrollHandling.reallow, articleScrollHandling.delay);

			}
		});

		// Tabbed Widget
		if( $('.tab-section').length ) {

			// Switch Tab
			$('.tab-section .tab-nav a').on('click',function(e){
				$('.tab-section .tab-nav .current').removeClass('current');
				$('.tab-section .tab-content.current').removeClass('current');
				$(this).addClass('current');
				$('.tab-section .tab-content' + $(this).attr('href')).addClass('current');
				return false;
			});

		}

		// NEW (2021) TOC Sidebar
		if ( $('.fit-toc-sidebar').length > 0 ) {
			$('.fit-toc-sidebar-has-sub-menu').each(function(){
				if ( $(this).next('.fit-toc-sidebar-sub-menu').find('.active').length > 0 ) {
					$(this).addClass('active');
				}
			})
			$('.fit-toc-sidebar-has-sub-menu').on('click', function(e){
				e.preventDefault();
				var active = $(this);
				// active.siblings('.fit-toc-sidebar-sub-menu').toggleClass('fit-toc-sidebar-sub-menu-open');
				active.toggleClass('active');
			});

			$('.fit-toc-sidebar-header').on('click', function(e){
				e.preventDefault();
				$('.fit-toc-sidebar-body').toggle();
				$('#toc-sidebar-mobile-link-wrapper').toggleClass('fit-toc-sidebar-title-mobile-link');
				$('#toc-sidebar-mobile-link-wrapper').toggleClass('fit-toc-sidebar-title-mobile-link-close');
			});

			if (  $('.fit-toc-sidebar-placeholder').length > 0 ) {
				$(window).on('scroll', function(){
					var distance = $('.fit-toc-sidebar-placeholder').offset().top;
					var screen = $('.site-container');
					var offset = $(window).scrollTop() + 150;
					// console.log(offset, distance, screen.width());
					if( offset > distance && 767 > screen.width() ) {
						$('.fit-toc-sidebar').addClass('fit-toc-sidebar-fixed');
					} else {
						$('.fit-toc-sidebar').removeClass('fit-toc-sidebar-fixed');
					}
				});
			}
		}
		


		// 2017 Menu
		$(document).ready(function() {
			$(document).on('click', '.mobile-nav', function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}
				$("#menu").slideToggle();
			});
			$("#menu a").on('click', function() {
				$("#menu").slideUp();
			});
			$('.mobile-nav').on('click', function() {
				$('body').toggleClass('nav-fixed');
			});
			calculate_menu_top();
		});
		$( window ).on('resize', function() {
		  calculate_menu_top();
		});
		function calculate_menu_top() {
			var offset = $('.site-title img').offset();
			var bottom_of_img = offset.top + $('.site-title img').height() + 5;
			$('.header-nav-panel').css('top', bottom_of_img+'px');
		}

	 $('[data-toggle="popover"]').popover({
		 trigger: 'hover'
	 });


		// Responsive Tabs Override
		$('.fit-fresh-tabs > .nav-tabs a').click(function(){
			// Send GA Event
			__gaTracker('send', 'event', 'Viewed Tab', 'Click', $(this).text() );

			if( $(this).hasClass('active')){
				$('.fit-fresh-tabs > .nav-tabs a').toggleClass('tabs-mobile-show');
			} else{
				$('.fit-fresh-tabs > .nav-tabs a').removeClass('tabs-mobile-show');
			}

			// console.log($('.fit-fresh-tabs > .nav-tabs a:not(.active)'));
		});


		// Adds binding script for up to 5 custom JS Accordions
		$("#hide-link-1").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-1").hide();
				$("#show-link-1").show();
				return false;
		});
		$("#show-link-1").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-1").show();
				$("#show-link-1").hide();
				return false;
		});
		$("#hide-link-2").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-2").hide();
				$("#show-link-2").show();
				return false;
		});
		$("#show-link-2").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-2").show();
				$("#show-link-2").hide();
				return false;
		});
		$("#hide-link-3").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-3").hide();
				$("#show-link-3").show();
				return false;
		});
		$("#show-link-3").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-3").show();
				$("#show-link-3").hide();
				return false;
		});
		$("#hide-link-4").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-4").hide();
				$("#show-link-4").show();
				return false;
		});
		$("#show-link-4").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-4").show();
				$("#show-link-4").hide();
				return false;
		});
		$("#hide-link-5").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-5").hide();
				$("#show-link-5").show();
				return false;
		});
		$("#show-link-5").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-5").show();
				$("#show-link-5").hide();
				return false;
		});
		$("#hide-link-6").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-6").hide();
				$("#show-link-6").show();
				return false;
		});
		$("#show-link-6").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-6").show();
				$("#show-link-6").hide();
				return false;
		});
		$("#hide-link-7").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-7").hide();
				$("#show-link-7").show();
				return false;
		});
		$("#show-link-7").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-7").show();
				$("#show-link-7").hide();
				return false;
		});
		$("#hide-link-8").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-8").hide();
				$("#show-link-8").show();
				return false;
		});
		$("#show-link-8").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-8").show();
				$("#show-link-8").hide();
				return false;
		});
		$("#hide-link-9").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-9").hide();
				$("#show-link-9").show();
				return false;
		});
		$("#show-link-9").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-9").show();
				$("#show-link-9").hide();
				return false;
		});
		$("#hide-link-10").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-10").hide();
				$("#show-link-10").show();
				return false;
		});
		$("#show-link-10").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-10").show();
				$("#show-link-10").hide();
				return false;
		});
		$("#hide-link-4").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-4").hide();
				$("#show-link-4").show();
				return false;
		});
		$("#show-link-4").on('click', function(e){
				e.preventDefault();
				$("#show-hide-text-4").show();
				$("#show-link-4").hide();
				return false;
		});


		// Focus on Search input if present
		if( $('input.search-form-input').length > 0 ){
				$('input.search-form-input').focus();
		}


		// If linking to a job posting, then scroll
		if( window.location.href.indexOf('?gh_jid') !== -1){
			var grnhse =$('#grnhse_app');

			if (grnhse.length) {
				setTimeout(function(){
					$('html, body').animate({
						scrollTop: grnhse.offset().top
					}, 1000);
					return false;
				}, 500);
			}
		}

		//
		// if( $('button.button-post-like').length > 0 ){
		// 	$('button.button-post-like').click( function(){
		// 		var button = $(this);
		// 		// Run AJAX submit function
		// 		$.post(
		// 			global.ajax_url,
		// 			{
		// 				action: 'submit-post-like-button',
		// 				post_id: $(this).data('pid'),
		// 			},
		// 			function(response){})
		// 			.done(function(response) {

		// 				// Get the Status & Message
		// 				// console.log( response );
		// 			})
		// 			.fail(function(response) {

		// 				// Show error message
		// 				// console.log( response );
		// 			});

		// 			button.addClass('disabled');
		// 			button.attr('disabled','disabled');
		// 	});
		// }


		// Custom tabs controls for credit cards.
		$('.fsb-cc-combo .nav-tabs a').on('click', function (e) {
			e.preventDefault();
			var tab = $(this).data("target");
			if ( $(this).hasClass('active') ) {
				$(tab).parents('.tab-content').children('.tab-pane').removeClass('active show');
				$(this).removeClass('active');
				$(this).attr('aria-selected', 'false');
				$(this).parents('.nav-tabs').removeClass('has-active');
				return false;
			} else {
				$(tab).parents('.tab-content').children('.tab-pane').removeClass('active show');
				$(tab).addClass('active show');
				$(this).parents('.nav-tabs').addClass('has-active');
			}
			
		});



		// Global subscription form.
		$('#fit-header-subscribe-form').on('submit', function(e){
			e.preventDefault();

			var fd = new FormData(this);

			$(this).hide();

			$('#fit-header-subscribe-modal .modal-response').html( 'Submitting...' );

			$.ajax({
				type: 'post',
				url: global.ajax_url,
				data: fd,
				enctype: 'multipart/form-data',
				processData: false,  // Important!
				contentType: false,
				cache: false,
				success: function (res) {
					if ( res.data.message ) {
						// If successful, update content.
						$('#fit-header-subscribe-modal .modal-response').html( res.data.message );
					}
				}
			});
		});

	});



})( jQuery );


}
/*
     FILE ARCHIVED ON 02:57:00 Apr 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:17:10 Jan 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 134.798
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.062
  cdx.remote: 0.061
  esindex: 0.009
  LoadShardBlock: 109.131 (3)
  PetaboxLoader3.datanode: 162.357 (5)
  CDXLines.iter: 16.376 (3)
  load_resource: 172.117 (2)
  PetaboxLoader3.resolve: 65.969
*/