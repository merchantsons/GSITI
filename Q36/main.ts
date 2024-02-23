/*
Q#36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
      should be printed on the shirt. The function should print a sentence summarizing the size of the
      shirt and the message printed on it. Call the function.
*/

const make_shirt = (size: string, message: string): void =>
    { console.log(`Size: ${size}, Message: '${message}`); }


//calling function
let size: string = "Medium";
let message: string = 'HOLD ON LET ME OVERTHINK THIS';

//calling function way one
make_shirt(size,message);

//calling function way two
make_shirt('Large','DO NOT READ THE NEXT SENTENCE.');