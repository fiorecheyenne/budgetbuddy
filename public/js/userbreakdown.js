
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
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  
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