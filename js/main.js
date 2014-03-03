$(function () {
	$(".sendgrid-subscription-widget").on("success", function (e) {
	    $("body").addClass("subscribed");
	    _gaq.push(['_trackEvent', 'Form', 'Signup', 'Success']);
	});

	$.konami(function() {
		$("body").addClass("rockin");
	});
});