// 13# Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make
//     a list that stores several examples. Use your list to print a series of statements about these items, 
//     such as “I would like to own a Honda motorcycle.”


let favorite_trans :Array<[transport: string, brand: string]> =[]

favorite_trans.push(["Airplane","AirTrans"])
favorite_trans.push(["Train","GreenLine"])
favorite_trans.push(["Bus","PakistanLine"])

//console.log(favorite_trans)

favorite_trans.forEach(([transport, brand]) => {
    console.log(`I would love to travel via ${transport} for that I Use ${brand}`)
}
)

