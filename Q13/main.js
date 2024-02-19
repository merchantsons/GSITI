// 13# Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make
//     a list that stores several examples. Use your list to print a series of statements about these items, 
//     such as “I would like to own a Honda motorcycle.”
var favorite_trans = [];
favorite_trans.push(["Airplane", "AirTrans"]);
favorite_trans.push(["Train", "GreenLine"]);
favorite_trans.push(["Bus", "PakistanLine"]);
//console.log(favorite_trans)
favorite_trans.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would love to travel via ".concat(transport, " for that I Use ").concat(brand));
});
