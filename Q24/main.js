/*
Q#24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
      If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
      • Tests for equality and inequality with strings
      • Tests using the lower case function
      • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
        and less than or equal to
      • Tests using "and" and "or" operators
      • Test whether an item is in a array
      • Test whether an item is not in a array
*/
// Test for equality & inequality
const word1 = "World";
const word2 = "world";
console.log(word1 == word2); //false
console.log(word1 !== word2); //true
// Test lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() == text2); //true
// Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to,
// and less than or equal to.
const number1 = 10;
const number2 = 5;
console.log(number1 == number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //true
console.log(number1 < number2); //false
// Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y > z); //true,true
console.log(x < y || y > z); //true, false
console.log(x > y && y < z); //false,false
console.log(x > y || y < z); //false,true
// Test whether an item is in a array
const game = ['baseball', 'cricket', 'ice hockey', 'football'];
console.log(game.includes('football')); //true
console.log(!game.includes('cricket')); //false
export {};
