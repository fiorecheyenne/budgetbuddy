// expense page javascript
// console.log(window.location.search);

//getting ID from the window
let params = {};
window.location.search
  .split(/[\?&]/)
  .filter(s => s !== "")
  .forEach(s => {
    let [key, value] = s.split("=");
    params[key] = value;
  });
console.log(params);

const { userID } = params;
console.log(userID);

//Add additional rows for expenses
$("#add").on("click", () => {
  const newRow = $(".erow");
  console.log(newRow);

  newRow.clone()
    .prependTo(".inputbuttons")
    .removeClass("erow").children().children().val("");
  newRow
    .clone()
    .appendTo(".is-half")
    .removeClass("erow").children().children().val("");
});




//Redirects user to their budget breakdown page once expenses are added
$("#budgetbreak").on("click", () => {
  
  $(".expense-row").each((i, element) => {
    
    // grab all three values
    var description = element.children[0].children[0].value;
    var amount = element.children[1].children[0].value;
    var category = element.children[2].children[0].children[0].value;

    if (description === "" || amount === "" || category === "") {
      return;
    }
    
    console.log(userID);

    var expense = {
      description: description,
      category: category,
      amount: amount,
      UserId: userID
    }

    console.log(expense);

    $.ajax("/api/budgets", {
      type: "POST",
      data: expense
    }).then();
    
  });

  breakdownPage();

});

function breakdownPage() {
  window.location.href = "/userbreakdown?userID=" + userID;
}