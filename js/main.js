$(function () {
	$(".sendgrid-subscription-widget").on("success", function (e) {
	    $("body").addClass("subscribed");
	});
});