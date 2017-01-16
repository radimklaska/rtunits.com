$(document).ready (function () {				
	$(".menu li").hover(
		function() {
			$(this).addClass("sfhover");
		},
		function() {
			$(this).removeClass("sfhover");
		}
	);
});