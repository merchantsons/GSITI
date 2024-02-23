/*
Q#41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
      which prints the name of each magician in the array.
*/

const magicianNames: string[] = ['David Copperfield','Ricky Jay','David Blaine','Dynamo','Penn and Teller','Derren Brown','Lance Burton','Chris Angel','Uri Geller','Doug Henning']

function magicians_nam(magicians:string[]) {
   for (const magician of magicians){
    console.log(magician)
   }
}

magicians_nam(magicianNames);