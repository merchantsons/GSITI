// Q#16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
//       invite to dinner.
//     • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
//       you found a bigger dinner table.
//     • Add one new guest to the middle of your array. 
//     • Use append() to add one new guest to the end of your list. 
//     • Print a new set of invitation messages, one for each person in your list.
let guest_lst = [
    "Muhammad Zahid",
    "Muhammad Kamran",
    "Muhammad Shahid",
    "Muhammad Fahim",
    "Alama Iqbal"
];
// Informing guest about bigger space is available now.
for (let gst of guest_lst) {
    console.log(`Hi Mr. ${gst} we are happy to inform you that we have found a bigger dinner table.`);
}
// add a new guest to to beginning of list.
let newgstbinbig = "Khalid Ahmed";
guest_lst.unshift(newgstbinbig);
console.log(guest_lst);
//add guest to middle of list
let newgstinmid = "Javed Raza Khan";
let middleIndex = Math.floor(guest_lst.length / 2);
guest_lst.splice(middleIndex, 0, newgstinmid);
console.log(guest_lst);
//append to add new guest at end
let gstappend = "Naveed Noor";
guest_lst.push(gstappend);
console.log(guest_lst);
//printing new set of invite
console.log("New set of invitation messages printing now..");
for (let guest of guest_lst) {
    console.log(`Dear ${guest}, you are invited to dinner for new date and guests.`);
}
export {};
