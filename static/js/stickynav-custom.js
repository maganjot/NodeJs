

(function($) {
	$(document).ready(function() {
    	$.slidebars();
		$('body').scrollspy({ 
			target: '#stickyNav',
			offset: 95
		});
		// simple smooth scrolling for bootstrap scroll spy nav
		// credit http://stackoverflow.com/questions/14804941/how-to-add-smooth-scrolling-to-bootstraps-scroll-spy-function
		 
		$(".stickyNav a[href^='#']").on('click', function(e) {
		   	// prevent default anchor click behavior
		   	e.preventDefault();
		 
		   	// store hash
		   	var hash = this.hash;
		   	var navOffset = 75
		 
		   	// animate
		   	$('html, body').animate({
			   scrollTop: $(this.hash).offset().top - navOffset
			}, 300, function(){
		 
			   // when done, add hash to url
			   // (default click behaviour)
			window.location.hash = hash;
			});
		 
		});		
	});
	$('.expander').simpleexpand();
	$('.expander').click(function(){
		var $this = $(this);
		if($this.hasClass('expanded')) {
			$this.text('-');
		} else {
			$this.text('+');
		}
	});
	//caches a jQuery object containing the header element
	var lht = $('.stickyNav').height();
	var los = $('#feature').offset().top;
	//var lct = $('#stickyNavContainer').height();
	$(window).scroll(function() {
		var lct = $('#stickyNavContainer').height();
		var scroll = $(window).scrollTop();
		if(scroll > los + lht - 50){
			$('.stickyNav').addClass('affix');
		} else { 
			  $('.stickyNav').removeClass('affix');
		}
		if(scroll > los + lct + -95){
			$('.stickyNav').addClass('affix-bottom');
		} else {
			$('.stickyNav').removeClass('affix-bottom');
		}
			
	});   
}) (jQuery);