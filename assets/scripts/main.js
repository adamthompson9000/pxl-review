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

})(jQuery);