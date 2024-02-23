/*
Q#43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
      with a copy of the array of magicians’ names. Because the original array will be unchanged, 
      return the new array and store it in a separate array. Call show_magicians() with each array
      to show that you have one array of the original names and one array with the Great added to 
      each magician’s name.
*/

const magicianNames: string[] = ['David Copperfield','Ricky Jay','David Blaine','Dynamo','Penn and Teller','Derren Brown','Lance Burton','Chris Angel','Uri Geller','Doug Henning'];

function s_Magicians(magicians:string[]): void {
   for (const magician of magicians){
    console.log(magician);
   }
}

function make_great(magicians: string[]): string[]{
    const greatMagicians: string[] = magicians.map(magician => `The Great ${magician}`);
return greatMagicians;
}

//modify
const greatMagicianNames: string[] = make_great(magicianNames);

//
console.log("Original Magicians:");
s_Magicians(magicianNames);

//
console.log("\nGreat Magicians:");
s_Magicians(greatMagicianNames);