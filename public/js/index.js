$("#noauth").on("click", function(event) {
  event.preventDefault();
  $("#namereq").removeClass("is-hidden");
  $("#wel, #sub").addClass("is-hidden");
  $("#uemail, #upassword").addClass("is-hidden");
  $(".buttons").addClass("is-hidden");
  $("#enve").addClass("is-hidden");
  $("#lock").addClass("is-hidden");
});

$("#breakbutt").on("click", function(event) {
  event.preventDefault();
  $(".breakdown").removeClass("is-hidden");
});
