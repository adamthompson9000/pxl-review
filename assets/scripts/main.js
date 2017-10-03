(function($) {

	//make yellow background flow across
	setTimeout(function() {

		$("header").addClass("yellow");

	}, 700);

	//hide initial pixel review logo
	setTimeout(function() {

		$(".section.one").fadeOut();

	}, 1350);

	//show computer logo
	setTimeout(function() {

		$(".section.two").addClass('active');
		$(".section.text").addClass('active');

	}, 2000);

	// Throttle function
	function throttle(fn, threshhold, scope) {
	  threshhold = threshhold || 250;
	  var last, deferTimer;
	  return function () {
	    var context = scope || this;

	    var now = +new Date();
	    var args = arguments;
	    if (last && now < last + threshhold) {
	      clearTimeout(deferTimer);
	      deferTimer = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshhold);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	}

	 // Have the inernal nav become fixed when the user scrolls past it
		$(window).scroll(function() {
			if ($(window).scrollTop() >= $("header").height()) {
			 	$(".inner-header").addClass("fixed");
			} else {
			 	$(".inner-header").removeClass("fixed");
			}
		});
})(jQuery);