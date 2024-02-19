/*
Q#21. They think of something you could store in a TypeScript Object. Write a program that
      creates Objects containing these items.
*/

const item1  = {    name : "Blue Skates",     price : 950,  description: " Pair of blue skates made in singapore" }
const item2  = {    name : "Rolex Watch",     price : 720,  description: " Green Dail Rolex Watch From UK"        }
const item3  = {    name : "Flying Man" ,     price : 880,  description: "Cartoon Flying Man For Kids"            }
const item4  = {    name : "iphone13promax",  price : 990,  description: "Brand new Iphone 13 pro max box pack"   }

// define an array of objects
let items : Array<typeof item1> =  [];

// push multipul obj
  items.push(item1);
  items.push(item2);
  items.push(item3); 
  items.push(item4);    

//console.log(items);

//function to display items in store.
{
    for(let itm = 0; itm < items.length; itm++) 
    {
        console.log(`Title : ${items[itm].name}`);        
        console.log(`Price : ${items[itm].price}`);
        console.log(`Description : ${items[itm].description}`);
        console.log("--------------------------------\n")
    }
}

    