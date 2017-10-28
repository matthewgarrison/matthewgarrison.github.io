// When you're at the top of the page, this unhides the down arrow.
// When you're not at the top of the page, this hides the down arrow.
$(window).scroll(function(e) {
	if ($(this).scrollTop() > 50){ 
		$('.down-arrow').fadeOut();
	}
	if ($(this).scrollTop() < 50) {
		$('.down-arrow').fadeIn();
	} 
});