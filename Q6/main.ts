// 6# Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//    Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around
//    the name is displayed. Then print the name after striping the white spaces.


//with whitespace
let personsName: string = "\t   Denzel Washington   \n";
console.log("Name with whitespace:", personsName);

//stripped name
let strippedName: string = personsName.trim();
console.log("Stripped Name:", strippedName);