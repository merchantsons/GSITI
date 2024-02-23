/*
Q#29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for
      certain fruits in your array.
    • Make a array of your three favorite fruits and call it favorite_fruits.
    • Write five if statements. Each should check whether a certain kind of fruit
      is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

// fruits array
const favoriteFruits: String[] = ["Mango","Kiwi","Banana"];


// checking fruite basket
if (favoriteFruits.includes("Apple")) 
   { console.log("I love to eat apple!"); }

if (favoriteFruits.includes("Banana")) 
   { console.log("I love to eat banana!"); }

if (favoriteFruits.includes("Mango")) 
   { console.log("I love to eat mango!"); }

if (favoriteFruits.includes("Kiwi")) 
   { console.log("I love to eat kiwi!"); }

   if (favoriteFruits.includes("Orange")) 
   { console.log("I love to eat orange!"); }
