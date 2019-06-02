

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

$("#budgetbreak").on("click", () => {
  window.location.href="./pages/userbreakdown.html"
});

new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

// var ctx = $('#expChart');
// var expChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['Transportation', 'Medical', 'Loans', 'Rent', 'Utilities', 'Entertainment', 'Groceries', 'Personal Care', 'Savings'],
//     datasets: [{
//       label: "By category",
//       backgroundColor: ["#c58ee5", "#8ed9e5", "#8ee5c5", "#e88b9c", "#eaedb1", "#efd1a7","#d18ebe", "#659dce", "#d7bfef"],
//       data: [14, 45, 12, 20, 9]
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Expenses by category'
//     }
//   }
// });