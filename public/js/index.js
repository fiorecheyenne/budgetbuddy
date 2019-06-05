// $(document).ready(function() {

// index page javascript
// var ApexCharts = require("apexcharts");

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
    localStorage.setItem("User", returnUser.user);
    window.location.href = "./pages/userbreakdown.html"
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
$("#go").on("click", (event) => {

  var valid = true;
  if ($(".uname").val() === "" || $("#newuinco").val() === "") {
    valid = false;
    alert("Form incomplete");
  }
  if (valid === true) {
    //Variable for new user storing their input values
    var newUser = {
      user: $(".uname").val().trim(),
      income: $("#newuinco").val().trim()
    };
    localStorage.setItem("User", newUser.user);
    localStorage.setItem("Income", newUser.income);


    $.ajax("/api/users", {
      type: "POST",
      url: "/api/users",
      user: newUser.user,
      income: newUser.income
    }).then(function (burrito) {
      console.log(burrito);
      console.log(newUser)
    });

    event.preventDefault();
    // redirect to expenses page 
    window.location.href = "./pages/table.html";
  }
});

// expense page javascript

//Add additional rows for expenses 
$("#add").on("click", () => {
  const newRow = $(".erow");
  newRow.clone().prependTo(".inputbuttons").removeClass("erow");
  newRow.clone().appendTo(".is-half").removeClass("erow");
});

//Redirects user to their budget breakdown page once expenses are added 
$("#budgetbreak").on("click", () => {
  window.location.href = "./userbreakdown.html"
});

//user breakdown page javascript


//function for chart display
var options = {
  chart: {
    type: 'donut',
    height: 300
  },
  series: [44, 55, 13, 33],
  labels: ['Transportation', 'Medical', 'Loans', 'Rent', 'Utilities', 'Entertainment', 'Groceries', 'Personal Care', 'Savings'],
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%"
    },
  },
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      size: 100
    },
    donut: {
      size: '80%'
    },
  },
};
// const chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

//Expenses modal triggers 
const expenseModal = $("#expensesmodal");
//Toggle modal on button click
$("#editexp").on("click", () => {
  event.preventDefault();
  expenseModal.addClass("is-active");
});
//Close modal when x is clicked
$("#closeEmodal").on("click", () => {
  expenseModal.removeClass("is-active");
});
//Close modal when cancel is clicked
$("#cancelEchange").on("click", () => {
  expenseModal.removeClass("is-active");
});

//Income modal triggers
const incomeModal = $("#incomemodal");
//Toggle modal on click
$("#editinc").on("click", () => {
  incomeModal.addClass("is-active");
});
//Close modal when x is clicked
$("#closeImodal").on("click", () => {
  incomeModal.removeClass("is-active");
})
//Close modal when cancel is clicked
$("#cancelIchange").on("click", () => {
  incomeModal.removeClass("is-active");
})

// var newUserData = [{
//   Username: $("#newunameinput").val().trim(),
//   Income: $("#newuinco").val().trim()
// }];

// $("#go").submit(function(){
//   alert("submitted");
//   preventDefault();
// })


// }  