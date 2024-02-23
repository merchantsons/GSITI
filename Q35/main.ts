/*
Q#35. Animals: Think of at least three different animals that have a common characteristic.
               Store the names of these animals in a list, and then use a for loop to print
               out the name of each animal. • Modify your program to print a statement about
               each animal, such as A dog would make a great pet. • Add a line at the end of
               your program stating what these animals have in common. You could print a sentence
               such as Any of these animals would make a great pet!
*/

const animals : string[] = ["Cat", "Dog","Horse"];

// Printing
console.log("\nList Of Animals:\n");
    for (const animal of animals) {
        console.log(animal);
    }

// Statement Printing
console.log("\nStatements about each animal:");
console.log("-------------------------------");

  for (const animal of animals) {
        if (animal === 'Dog')
        { console.log(`A ${animal} sometimes referred to as man's best friend.`); }
   else if (animal === 'Cat')
        { console.log(`A ${animal}'s they are very independent creatures.`); }
   else if (animal === 'Horse')
        { console.log(`A ${animal} one the best pets for anyone to have.`); }
    
   }

// Common Characteristic
console.log ("\nWhat these animals have in common:");
console.log("-------------------------------------");
console.log("any of these animals would make a great pet");