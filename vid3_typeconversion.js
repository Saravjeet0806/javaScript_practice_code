let score = "33"
console.log(typeof score) //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number

//let a = "2451abc" can be converted to number like in above example but when the type is check it will give nan (not a number)
//true =1, false = 0, if value is empty then it is false when converted to boolean otherwise true

let isloggedin = 1
let booleanlogged = Boolean(isloggedin)  //true  
console.log(booleanlogged)
console.log(typeof booleanlogged)