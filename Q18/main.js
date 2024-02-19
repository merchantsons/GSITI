/*
  Q#18 Seeing the World: Think of at least five places in the world you’d like to visit.
     • Store the locations in a array. Make sure the array is not in alphabetical order.
     • Print your array in its original order.
     • Print your array in alphabetical order without modifying the actual list.
     • Show that your array is still in its original order by printing it.
     • Print your array in reverse alphabetical order without changing the order of the original list.
     • Show that your array is still in its original order by printing it again.
     • Reverse the order of your list. Print the array to show that its order has changed.
     • Reverse the order of your list again. Print the list to show it’s back to its original order.
     • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
     • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
// array to store travel destinations
let traveldest = ["Newyork", "France", "London", "Korea", "Switzerland", "Japan"];
// print array in order
console.log(`In Array Order Is : `);
console.log(traveldest);
// alphbetical order
console.log("\n Alphabetical Order Without Modifying List");
console.log([...traveldest].sort());
// array is still in its original order by printing it.
console.log("\n Showing Array is Still In Order :");
console.log(traveldest);
// reverse alphabetical order without changing the order
console.log("\n Showing Arry In Reverse Alphbetical Order");
console.log([...traveldest].sort().reverse());
// Show that array is still in its original order
console.log("\n Showing Array is Still In Order :");
console.log(traveldest);
// Reverse the order of list. Print the array to show that its order has changed.
console.log("\n Showing Reverse Order :");
traveldest.reverse();
console.log(traveldest);
// Reverse the order of list again. Print the list to show it’s back to its original order.
console.log("\n Showing Reverse Order back to origianl :");
traveldest.reverse();
console.log(traveldest);
// Sort array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Alphabetical Order And Print to show order change");
traveldest.sort();
console.log(traveldest);
// Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Reverse Alphabetical Order And Print to show order change");
traveldest.sort().reverse();
console.log(traveldest);
export {};
