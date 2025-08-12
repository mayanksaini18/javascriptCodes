

function solve(transactions) {
    // Step 1: Create an empty object to store total spend per category
    var spendEstimate = {}

    // Step 2: Loop through each transaction
    for (var i = 0; i < transactions.length; i++) {
        var t = transactions[i]; // current transaction object

        // Step 3: Check if the category already exists in spendEstimate
        if (spendEstimate[t.category]) {
            // If yes, add current item's price to that category's total
            spendEstimate[t.category] += t.price;
        } else {
            // If not, initialize that category with 0 first
            spendEstimate[t.category] = 0;

            // Then add the current item's price
            spendEstimate[t.category] += t.price;
        }
    }

    // Step 4: After processing all transactions, print the result 
    console.log(spendEstimate); 
//  Output:
// {
//   Drink: 45,
//   food: 80
// }

// part -2  converting the object to arrays of objects

var keys = Object.keys(spendEstimate);
var ans =[];
for ( var i = 0 ; i<keys.length ;i++){
    var category = keys[i];
    ans.push({
        category : category,
        amountSpend : spendEstimate[category]
    })
}
console.log(ans);

}

// Step 0: Array of transactions with itemName, category, price, and timestamp
var transactions = [
    {
        itemName: "pepsi",
        category: "Drink",
        price: 20,
        timestamp: "12-june-25"
    },
    {
        itemName: "miranda",
        category: "Drink",
        price: 25,
        timestamp: "15-june-25"
    },
    {
        itemName: "samosa",
        category: "food",
        price: 5,
        timestamp: "25-june-25"
    },
    {
        itemName: "vada pav",
        category: "food",
        price: 30,
        timestamp: "25-june-25"
    },
    
]

// Step 5: Call the function with the transactions array
solve(transactions);


/**Expected Output:
  
 [
   {  category :Drink ,spendEstimate: 45,},
     
   {  category :food  , spendEstimate: 80}   
 ]
   
 */
     