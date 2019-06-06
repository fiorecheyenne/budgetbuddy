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
  // window.location.href="./userbreakdown.html"
  let expenses = [
    // {
    //   name: '',
    //   price: '',
    //   category: ''
    // }
  ];
  $(".expense-row").each((i, element) => {
    var expense = {}
    // grab all three values
    expense.name = element.children[0].children[0].value;
    // put them into an object
    expense.value = element.children[1].children[0].value;
    expense.category = element.children[2].children[0].children[0].value;

    // push the object into the expenses array
    expenses.push(expense);
    console.log(expenses);
  });
});
