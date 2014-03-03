$(function () {
	$(".sendgrid-subscription-widget").on("success", function (e) {
	    $("body").addClass("subscribed");
	});

	$.konami(function() {
		$("body").addClass("rockin");
	});
});