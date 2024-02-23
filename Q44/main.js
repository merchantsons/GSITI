/*
Q#44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
      The function should have one parameter that collects as many items as the function call
      provides, and it should print a summary of the sandwich that is being ordered. Call the
      function three times, using a different number of arguments each time.
*/
function make_sandwich(...items) {
    console.log("Sandiwich Sumary:");
    if (items.length === 0) {
        console.log("     - You ordered an empty sandwich. Please add some items.");
    }
    else {
        items.forEach((item, i) => {
            console.log(`     ${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
make_sandwich();
console.log("Grilled Cheese Sandwich");
make_sandwich("Crispy Crust Bread", "Butter", "Cheddar Cheese", "Mayonnaise", "Olive", "Cream");
console.log("Ham Sandwich");
make_sandwich("Thick Bread", "Ham", "Mayo", "Olive", "Garlic", "Olive Oil");
console.log("Chicken Sandwich");
make_sandwich("Thin Slice Bread", "Chicken Strips", "Mayo", "Olive", "Blue Cheese");
export {};
