// Q#15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out 
//      a new set of invitations. You’ll have to think of someone else to invite.

//      • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of
//        the guest who can’t make it.

//      • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//      • Print a second set of invitation messages, one for each person who is still in your list.


let guest_lst: Array<string> = [
    "Muhammad Zahid",
    "Muhammad Kamran",
    "Muhammad Shahid",
    "Muhammad Fahim",
    "Alama Iqbal"
];

// 1. Who Can't Make it for that dinner.....
let guest_cant: string = "Alama Iqbal"
console.log(`${guest_cant} is not coming for that dinner.`)


// 2. Person replacing him for that dinner.....
let join_gst: string = "Muhammad Kamran"
let idnexOfguestcant: number = guest_lst.indexOf(guest_cant)

if(idnexOfguestcant !== -1) 
  {
    guest_lst[idnexOfguestcant] = join_gst
  }

// 3. Reprint New Invite.
console.log("New Invites Are : ")
guest_lst.forEach((guest:string) => 
{
    console.log(`Dear ${guest}, You are now invited to dinner..`)
})