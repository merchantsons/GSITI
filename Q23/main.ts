/* 
Q#23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
      prediction for the results of each test. Your code should look something like this:
      let car = 'subaru';
      console.log("Is car == 'subaru'? I predict True.")
      console.log(car == 'subaru')
    • Look closely at your results, and make sure you understand why each line evaluates to True or False.
    • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/


let car = 'Subaru';

console.log("Is car == 'Subaru' ? I predict True.");
console.log(car == 'Subaru'); // True

console.log("Is car !== 'Toyota' ? I predict True.");
console.log(car !== 'Toyoto'); // True

console.log("Is car == 'Nissan' ? I predict True.");
console.log(car == 'Nissan'); // False

console.log("Is car !== 'Daihatsu' ? I predict True.");
console.log(car !== 'Daihatsu'); // True

console.log("Is car == 'Ford' ? I predict False.");
console.log(car == 'Ford'); // False

console.log("------------------------------------------------\n")

let group = 'Green';

console.log("Is group == 'Blue' ? I predict False.");
console.log(group !== 'Blue'); // True

console.log("------------------------------------------------\n")

let range = '27k';

console.log("Is range == '27k' ? I predict True.");
console.log(range == '27k'); // True

console.log("------------------------------------------------\n")

let food = 'Pizza';

console.log("Is food !== 'Pizza' ? I predict True.");
console.log(food !== 'Pizza'); // False

console.log("------------------------------------------------\n")

let watch = 'Rolex';

console.log("Is watch !== 'Timex' ? I predict True.");
console.log(watch !== 'Timex'); // True

console.log("------------------------------------------------\n")

let land = 'Garden';

console.log("Is land == 'Plain' ? I predict True.");
console.log(land == 'Plain'); // False