/*
Q#36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
      should be printed on the shirt. The function should print a sentence summarizing the size of the
      shirt and the message printed on it. Call the function.
*/
const make_shirt = (size, message) => { console.log(`Size: ${size}, Message: '${message}`); };
//calling function
let size = "Medium";
let message = 'HOLD ON LET ME OVERTHINK THIS';
make_shirt(size, message);
make_shirt('Large', 'DO NOT READ THE NEXT SENTENCE.');
export {};
