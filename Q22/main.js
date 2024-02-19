/*
Q#22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
      Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the
      program.
*/
// function to creat objects car info
function createCar(name, make, model, color) {
    return { name, make, model, color, };
}
// array for cars info
const cars = [
    createCar("TOYOTO", "YARIS", "2022", "SILVER"),
    createCar("NISSAN", "MAXIMA", "2024", "BLUE"),
    createCar("DAIHATSU", "LODGE", "2000", "BLACK"),
    createCar("HONDA", "WINGARD", "1999", "YELLOW"),
    createCar("FORD", "TUCKER", "2019", "GRAY"),
];
const cinvalidIndex = 7; // 5 entries only will cause an error
console.log(`car at index ${cinvalidIndex}:`, cars[cinvalidIndex]);
// to print cars
cars.forEach((car) => {
    console.log(`Name: ${car.name}, Make: ${car.make},Model: ${car.model},Name: ${car.color}`);
});
export {};
