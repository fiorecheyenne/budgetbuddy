// index page javascript

//Global vars
var uname;
var idHolder;
var returnUser;
var returnPassword;

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

  returnUser = $("#returnUser").val();
  returnPassword = $("#returnPassword").val();

  if (returnUser === "" || returnPassword === "") {
    alert("Username empty or no matching user found");
  } else {

    userVal();
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

//Validate user has completed form & submit new user data
$("#go").on("click", () => {

  var valid = true;
  var newUinco = $("#newuinco").val();
  var passwordU = $(".pw").val();
  uname = $(".uname").val();

  var newUser = {
    user: uname,
    income: newUinco,
    password: passwordU
  };

  if (uname === "" || newUinco === "") {
    valid = false;
    alert("Form incomplete");
  }

  if (valid === true) {
    makeUser(newUser);
  }

});

function makeUser(newUser) {
  $.post("/api/users", newUser)
    .then(getID);
}

function getID() {
  $.get("/api/users", function (data) {

    for (var i = 0; i < data.length; i++) {
      if (data[i].user === uname) {
        idHolder = data[i].id;

        tablePage();
      }
    }
  });
}

function tablePage() {
  window.location.href = "/table?userID=" + idHolder;
}

function breakdownPage() {
  window.location.href = "/userbreakdown?userID=" + idHolder;
}

function userVal() {
  $.get("/api/users", function (data) {

    // console.log(data);

    for (var i = 0; i < data.length; i++) {
      if (data[i].user === returnUser) {

        if (data[i].password === returnPassword) {

          idHolder = data[i].id;

          breakdownPage();
        }
        else {
          alert("Incorrect Password");
        }
      }
    }
  });
}