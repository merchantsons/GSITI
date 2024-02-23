/*
Q#38. Cities: Write a function called describe_city() that accepts the name of a city and its country.
      The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
      for the country a default value. Call your function for three different cities, at least one of
      which is not in the default country.
*/
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}.`);
}
//use of function describe_city with parameters
describe_city("Karahi", "Pakistan");
describe_city("Lahore", "Pakistan");
describe_city("Tokyo", "Japan");
//use case function describe_city with default country value
describe_city("\nLas Vagas");
export {};
