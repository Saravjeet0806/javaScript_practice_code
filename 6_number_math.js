const num = new Number(100)
console.log(num.toFixed(2)) //100.00 

const num2 = new Number(125.353)
console.log(num2.toPrecision(4))

const num3 = new Number(1000000)
console.log(num3.toLocaleString('en-IN'))  //10,00,000


// Maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //used to maximum and minimum values ... now values will be from 10 to 20

const min2 = 1
const max2 = 6
console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2)  //numbers range is from 1 to 6 can be used for making dice game
