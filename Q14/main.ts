// Q#14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make
//      a list that includes at least three people you’d like to invite to dinner. Then use your list to
//      print a message to each person, inviting them to dinner.


let guest_lst: Array<string> = [
    "Muhammad Zahid",
    "Muhammad Kamran",
    "Muhammad Shahid",
    "Muhammad Fahim",
    "Alama Iqbal"
];

//loop

guest_lst.forEach((guest_lst) =>
    {
    console.log(`Dear Mr. ${guest_lst} cordially invited to a dinner party that promises to be an evening of great food, fine drinks, and wonderful company. `)
    })