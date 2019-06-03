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
          size: 120
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