// index page javascript

//Toggle modal display when new user button is clicked - also hides all fields behind modal
$("#new").on("click", () => {
  event.preventDefault();
  $("#newusername").addClass("is-active");
  $(".field").hide();
  $("#wel").hide();
  $(".buttons").hide();
});

//Login button, store input value into variable 
$("#auth").on("click", () => {
  event.preventDefault();
  var returnUser = $("#uname");
  if (returnUser.val() === "") {
    alert("Username empty or no matching user found");
  } else {
window.location.href="./pages/userbreakdown.html"
  }
});

//Toggle modal display when close button is clicked - also toggles display behind modal
$("#close").on("click", () => {
  event.preventDefault();
  $("#newusername").removeClass("is-active");
  $(".field").show();
  $("#wel").show();
  $(".buttons").show();
});

//Validate user has completed form
$("#go").on("click", () => {
  var valid = true;
  if($(".uname").val() === "" || $("#newuinco").val() === "") {
    valid = false;
    alert("Form incomplete");
  }
  if(valid === true) {
//Variable for new user storing their input values
    var newUser = {
      user: $(".uname").val().trim(),
      income: $("#newuinco").val().trim(),
      password: $(".pw");
    }
     

//redirect to expenses page 
    window.location.href="./pages/table.html";
  }
});
