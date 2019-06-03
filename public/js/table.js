//Add additional rows for expenses 
$("#add").on("click", () => {
    const newRow = $(".erow");
    newRow.clone().prependTo(".inputbuttons").removeClass("erow");
     newRow.clone().appendTo(".is-half").removeClass("erow");
    }
  );
  
  //Redirects user to their budget breakdown page once expenses are added 
  $("#budgetbreak").on("click", () => {
    window.location.href="./userbreakdown.html"
  });