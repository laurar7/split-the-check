var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));

var tip = Number(prompt("tip (ex. 0.18)"));

var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;

var numOfPeople = 2;

console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
