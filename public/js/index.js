
$("#new").on("click", () => {
  event.preventDefault();
  $("#newusername").addClass("is-active");
  $(".field").hide();
  $("#wel").hide();
  $(".buttons").hide();
});

$("#close").on("click", () => {
  event.preventDefault();
  $("#newusername").removeClass("is-active");
  $(".field").show();
  $("#wel").show();
  $(".buttons").show();
});


$("#go").on("click", () => {

  var valid = true;
  if($(".uname").val() === "" || $("#newuinco").val() === "") {
    valid = false;
    alert("Form incomplete");
  }
  if(valid === true) {
    var newUser = {
      user: $(".uname").val().trim(),
      income: $("#newuinco").val().trim()
    }
    window.location.href="./pages/table.html";

  };
});

$("#add").on("click", () => {
  const newRow = $(".erow");
  newRow.clone().prependTo(".inputbuttons").removeClass("erow");
   newRow.clone().appendTo(".is-half").removeClass("erow");
  }
);