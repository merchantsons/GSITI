/*
Q#45. Cars: Write a function that stores information about a car in a Object. The function should always
      receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
      Call the function with the required information and two other name-value pairs, such as a color or an 
      optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */

function Add_Car(manufacturer: string, model: string, ...properties: [string, any][]): any {
    const car: any = {
        manufacturer,
        model,
    };

    for (const [key,value] of properties) {
        car[key] = value;
    }
    
return car;
}
const Car1: string = Add_Car("Toyota", "Yaris", ["color","Blue"],["Optional Feature","Auto Locking"],["Added Feature","Sunroof"]);

console.log(Car1);
