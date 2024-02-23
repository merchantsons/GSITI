/*
Q#26.   Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
      • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
      • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
      • Write one version of this program that runs the if block and another that runs the else block.

*/
// version 1 (for running if block)
let alien_color = 'green';
console.log('Attempt for version 1');
if (alien_color == 'green') {
    console.log('Congratulations! You just got 5 points for shooting the alien.');
}
else {
    console.log('Congratulations! You have earned 10 points for shooting the alien.');
}
// version 2 (for running else block.)
alien_color = 'blue';
console.log('Attempt for version 2');
if (alien_color == 'green') {
    console.log('Congratulations! You just got 5 points for shooting the alien_color.');
}
else {
    console.log('Congratulations! You have earned 10 points for shooting the alien.');
}
export {};
