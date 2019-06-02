
$("#new").on("click", function(event) {
  event.preventDefault();
  $("#newusername").addClass("is-active");
});

$("#close").on("click", function(event) {
  event.preventDefault();
  $("#newusername").removeClass("is-active");
});


$("#go").on("click", function(event) {

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

$("#add").on("click", function(event){
  const newRow = $(".erow");
  newRow.clone().prependTo(".inputbuttons").removeClass("erow");
   newRow.clone().appendTo(".is-half").removeClass("erow");
  }
);