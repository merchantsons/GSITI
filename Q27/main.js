/*
Q#27.  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
       • If the alien is green, print a message that the player earned 5 points.
       • If the alien is yellow, print a message that the player earned 10 points.
       • If the alien is red, print a message that the player earned 15 points.
       • Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
// version 1 (Alien Value Green)
let alien_color = 'green';
console.log('Attempt for version 1 for shooting color green');
if (alien_color == 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}
else if (alien_color == 'orange') {
    console.log('Congratulations! You have earned 10 points for shooting the alien.');
}
else if (alien_color == 'White') {
    console.log('Congratulations! You have earned 15 points for shooting the alien.');
}
else {
    console.log('Unknown alien color.');
}
// version 2 (Alien Value )
alien_color = 'blue';
console.log('Attempt for version 2 for shooting color blue');
if (alien_color == 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the the alien.');
}
else if (alien_color == 'blue') {
    console.log('Congratulations! You have earned 10 points for shooting the alien.');
}
else if (alien_color == 'red') {
    console.log('Congratulations! You have earned 15 points for shooting the alien.');
}
else {
    console.log('Unknown alien color.');
}
// version 3 (Alien Value Orange)
alien_color = 'black';
console.log('Attempt for version 3 for shooting color black');
if (alien_color == 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}
else if (alien_color == 'yellow') {
    console.log('Congratulations! You have earned 10 points for shooting the alien.');
}
else if (alien_color == 'black') {
    console.log('Congratulations! You have earned 15 points for shooting the alien.');
}
else {
    console.log('Unknown alien color.');
}
export {};
