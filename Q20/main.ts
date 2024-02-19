/*
Q#20. Think of something you could store in a array. For example, you could make a list of
      mountains, rivers, countries, cities, languages, or anything else you’d like. Write 
      a program that creates a list containing these items.
*/

const countries: string[] = ["France", "Germany", "Mangolia","United Kingdom"]

console.log("List of Countries In Array: ")

for (let country of countries) 
{  console.log(country) }