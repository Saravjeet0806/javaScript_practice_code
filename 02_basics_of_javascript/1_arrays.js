//arrays
const myArr = [1,2,3,4,5,6]
console.log(myArr[3])

myArr.push(10)
//console.log(myArr)

myArr.pop()
//console.log(myArr)

const myStr = myArr.join()
//console.log(myStr) //string

//slice and splice
//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
//console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //in splice operation the original array gets manipulate whereas in slice we get the copy of array but in a specific range
//console.log(myn2);


//more array basics

const marvel = ["spiderman", "ironman", "captainamerica"]
const dc = ["batman", "flash", "superman"]

//marvel.push(dc)
//console.log(marvel)  //array ke andar array  //there use concat to combine two arrays
//console.log(marvel[3][1]) //flash

const allHeroes = marvel.concat(dc)  //concat uses new array to hold values 
//console.log(allHeroes) 

const all_newheros= [...marvel, ...dc] //using spread operator to combine arrays... we can combine multiple arrays using this
// console.log(all_newheros) 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flattens array to get all elements concatenated in a single depth //we can provide depth too.. eg in another array there are arrays upto 3 depth
console.log(real_another_array)

console.log(Array.from("Saravjeet"))  //converts it to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //creating array from a set of values