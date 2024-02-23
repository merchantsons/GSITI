/*
Q#31.  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
       • If the list is empty, print the message We need to find some users!
       • Remove all of the usernames from your array, and make sure the correct message is printed.
*/

var userNames: string[] = ['admin','mark','justin','robin','sara'];

//case if and else if
function greetUsers(): void {
   if (userNames.length === 0 ) { console.log('We need to find some users!'); }    
   for (var i in userNames) {                 
        if (userNames[i].toLowerCase() == 'admin') {
           console.log('Hello admin, would you like to see a status report?');
         } else {
           console.log(`Hello, ${userNames[i]} thankyou for joining back us..`);
         }
    }            
}
console.log('\nBefore making array empty user greetings.');
console.log('-------------------------------------------');
greetUsers();
userNames = [];
console.log('\n\nAfter Making list empty user greeting.');
console.log('-------------------------------------------');
greetUsers();