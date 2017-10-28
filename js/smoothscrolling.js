// Causes local links to scroll to the correct location instead of acting like a normal link.
var $root = $('html, body');
$(document).ready(function() {
	$('a[href^="#"]').click(function() {
	    var href = $.attr(this, 'href');

	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 450, function () {
	        window.location.hash = href;
	    });

	    return false;
	});
});