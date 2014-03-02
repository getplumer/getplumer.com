$(".sendgrid-subscription-widget").on("success", function (e) {
    $("body").addClass("subscribed");
    $(this).find(".response")
    // $(this).find(".response").addClass("success")
});