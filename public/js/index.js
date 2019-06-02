

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
  window.location.href="./userbreakdown.html"
});


var options1 = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [760, 45, 200, 100, 80, 90, 30, 20],
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: 'TOTAL'
        }
      }
    }
  },
  labels: ['Transportation', 'Medical', 'Loans', 'Home', 'Utilities', 'Entertainment', 'Groceries', 'Personal Care', 'Savings']
};

new ApexCharts(document.querySelector("#chart1"), options1).render();

// var data = {
//   labels: [
//       "Red",
//       "Blue",
//       "Yellow"
//   ],
//   datasets: [
//       {
//           data: [10, 10, 10],
//           backgroundColor: [
//               "#FF6384",
//               "#36A2EB",
//               "#FFCE56"
//           ],
//           hoverBackgroundColor: [
//               "#FF6384",
//               "#36A2EB",
//               "#FFCE56"
//           ]
//       }]
// };

// var ctx = document.getElementById("myChart");

// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: {
//     	rotation: 1 * Math.PI,
//       circumference: 1 * Math.PI
//     }
// });
//Chart for user input -- not yet functional
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