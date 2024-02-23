/*
Q#37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
      that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and
      a shirt of any size with a different message.
*/

// Default Function / Message
function make_shirt(size: string = "Large", message: string = "I Love TypeScript"): void {
    console.log(`Size:${size}, Message: '${message}'`);
}

//Large Shirt With Default Msg
make_shirt();

//Medium Shirt With Default Msg
make_shirt("Medium");

//Small Shirt With Diffrent Msg
make_shirt("Small","An apple a day keeps the doctor away, if you throw it hart enough!");