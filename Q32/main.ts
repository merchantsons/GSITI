/* 
Q#32. Checking Usernames: Do the following to create a program that simulates how websites ensure
      that everyone has a unique username.
      • Make a list of five or more usernames called current_users.
      • Make another list of five usernames called new_users. Make sure one or two of the new usernames
        are also in the current_users list.
      • Loop through the new_users list to see if each new username has already been used. If it has, print
        a message that the person will need to enter a new username. If a username has not been used, print
        a message saying that the username is available.
      • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

// part 1
const current_users: string[] = ['Ruby','Amelia','OLIVIA','Georgina','Charlotte'];
// part 2
const new_users: string[] = ['Ruby','Amelia','Olivia','Emma','Georgina','Charlotte','Darcy'];

// part 3
const lowercasedCurrentUsers = current_users.map(user => user.toLocaleLowerCase());
for (const newUser of new_users) {
    const lowercasedNewUser = newUser.toLocaleLowerCase();
    if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
// part 4
        console.log(`Username "${newUser} is already in use, Please entera new username.`);
    } else {
// part 5
        console.log(`Username "${newUser}" is available.`);
    }
// part 6 (OLIVIA is in uppercase in current users && in new users lower case.)
}


