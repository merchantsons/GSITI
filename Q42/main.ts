/*
Q#42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
      that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
      to see that the list has actually been modified.
    
      'David Copperfield','Ricky Jay','David Blaine','Dynamo','Penn and Teller','Derren Brown','Lance Burton','Chris Angel','Uri Geller','Doug Henning']
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

const greatMagicianNames:string[] = make_great(magicianNames);

console.log ('Adding The Great:');
s_Magicians(greatMagicianNames);