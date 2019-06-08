
// import { totalmem } from "os";

//user breakdown page javascript
$(document).ready(function () {

  var url = window.location.search;
  var idHolder;
  var userID;
  var userData = [];

  function grabID() {

    if (url.indexOf("?userID=") !== -1) {
      idHolder = url.split("=")[1];
    }
    //Changing ID into and Int
    userID = parseInt(idHolder);

    userDataLoad()
  }

  function userDataLoad() {
    // console.log(userID);
    userData.length = 0;
    $.get("/api/budgets", function (data) {
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].UserId === userID) {
          // console.log(data[i]);
          userData.push(data[i]);
       
        }
      }

//append  expenses as table to expenses modal       
let props = ["description", "amount", "category"];
userData.forEach(data => {
    let row = $("<tr>");
    props.forEach(prop => {
        $("<td>")
            .html(data[prop])
            .appendTo(row);
    });
    row.appendTo($(".expense-table"));
});

//array of expense amounts
const expenseArr = userData.map(amount => parseInt(amount.amount));
console.log(expenseArr);

//expense total
const expenseTot = expenseArr.reduce((acc, expense) => acc + expense, 0);
console.log(expenseTot);

//variable for income 
var income = userData[0].User.income;

//total income - expenses
const result = parseInt(income) - expenseTot;
     console.log(result);

// const catExp = userData.reduce((acc, cat) => {
//   let summedCats = {};
//   summedCats.Transportation = SSL_OP_SSLEAY_080_CLIENT_DH_BUG
//   const T = "Transportation";
//   const M = "Medical";
//   const L = "Loans";
//   const R = "Rent/Mortgage";
//   const U = "Utilities";
//   const E = "Entertainment";
//   const G = "Groceries"; 
//   const P = "Personal.Care";
//   const S = "Savings";
//   const O = "Other";
// })
//variable for name 
var name = userData[0].User.user;
  

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
const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


      //appending income to income modal
      $("#inceditcontent").html(income);
      //income tile display
      $(".uincomein").html(income);
      //welcome back --insert user name--
      $("#welcomename").html(name
      );
      //expenses tile display
      $(".uexpensein").html(expenseTot);
      //remaining after expenses display
     $(".remainingamt").html(result);
    });
    console.log(userData);
  }

  grabID();




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




var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [67],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Transportation"]
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options);

chart2.render();
});