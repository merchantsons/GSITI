/*
Q#34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
              and then use a for loop to print the name of each pizza.
               • Modify your for loop to print a sentence using the name of the pizza instead of printing
                 just the name of the pizza. For each pizza you should have one line of output containing
                 a simple statement like I like pepperoni pizza.
               • Add a line at the end of your program, outside the for loop, that states how much you like
                 pizza. The output should consist of three or more lines about the kinds of pizza you like 
                 and then an additional sentence, such as I really love pizza!
*/

const favoritePizzas = ["Pepperoni Pizza","Cheese Pizza","Sausage Pizza","Stuffed Crust Pizza"];

// Print
console.log("My favorite pizza's are:");
for (let i = 0; i < favoritePizzas.length; i++){
    console.log(favoritePizzas[i]);
}

// sentence
console.log("\n I like these pizza's:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]}`)
}

// Last Print
console.log("\nI really love pizza!");