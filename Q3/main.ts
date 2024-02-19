// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let actress_name = "Selena gomez"

//LowerCase
console.log(actress_name.toLowerCase());

//UpperCase
console.log(actress_name.toUpperCase());

//TitleCase
console.log(actress_name.replace(/\b\w/g, (an) => an.toUpperCase()));