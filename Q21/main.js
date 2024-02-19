/*
Q#21. They think of something you could store in a TypeScript Object. Write a program that
      creates Objects containing these items.
*/
var item1 = { name: "Blue Skates", price: 950, description: " Pair of blue skates made in singapore" };
var item2 = { name: "Rolex Watch", price: 720, description: " Green Dail Rolex Watch From UK" };
var item3 = { name: "Flying Man", price: 880, description: "Cartoon Flying Man For Kids" };
var item4 = { name: "iphone13promax", price: 990, description: "Brand new Iphone 13 pro max box pack" };
// define an array of objects
var items = [];
// push multipul obj
items.push(item1);
items.push(item2);
items.push(item3);
items.push(item4);
//console.log(items);
//function to display items in store.
{
    for (var itm = 0; itm < items.length; itm++) {
        console.log("Title : ".concat(items[itm].name));
        console.log("Price : ".concat(items[itm].price));
        console.log("Description : ".concat(items[itm].description));
        console.log("--------------------------------\n");
    }
}
