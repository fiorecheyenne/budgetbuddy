$("#new").on("click", function(event) {
  event.preventDefault();
  $("#newuser").addClass("is-active");
  // $("#namereq").removeClass("is-hidden");
  // $("#wel, #sub").addClass("is-hidden");
  // $("#uemail, #upassword").addClass("is-hidden");
  // $(".buttons").addClass("is-hidden");
  // $("#enve").addClass("is-hidden");
  // $("#lock").addClass("is-hidden");
});

$(".delete").on("click", function(event) {
  event.preventDefault();
  $("#newuser").removeClass("is-active");
});