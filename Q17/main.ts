/* Q#17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time     
         for the dinner, and you have space for only two guests.
         • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
         • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a
           message to that person letting them know you’re sorry you can’t invite them to dinner.
         • Print a message to each of the two people still on your list, letting them know they’re still invited.
         • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

let guest_lst: Array<string> = [
    "Khalid Ahmed",
    "Muhammad Zahid",
    "Muhammad Kamran",
    "Javed Raza Khan",
    "Muhammad Shahid",
    "Muhammad Fahim",
    "Alama Iqbal",
    "Naveed Noor"
];

// Msg
console.log(`Sorry! Due to limited space we are inviting only two pople only`)

// remove guest from list until two left
while (guest_lst.length > 2)
{
    let remvGuest = guest_lst.pop()
    console.log(`Due to limitid space avialable ${remvGuest} we are not inviting you for dinner.`)
}

// printing message for invited still on list

for(let guest of guest_lst){
    console.log(`Hi, Mr. ${guest}, you are invited for dinner according to new list.`)
}

// remove last two nam e for empty list at end of program.

guest_lst.pop()
guest_lst.pop()

// printing empty 
console.log(`Guest list after dinner:`, guest_lst)
