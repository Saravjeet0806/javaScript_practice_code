const sym1 = Symbol("symbol");
const sym2 = Symbol("symbol");
const sym3=sym1;
console.log(sym1===sym2)
console.log(sym1==sym2);
console.log(sym1==sym3);

console.log(typeof undefined)

let myobj={
    email: "abc@gmail.com",
    name : "abc"
}

let myobj2={
    email: "xyz@gmail.com",
    name: "xyz"
}

console.log(myobj.name)
console.log(myobj.email)

myobj=myobj2
console.log(myobj.name)
console.log(myobj.email)

let myobj3 = myobj // reference copy
myobj3.name="Sarav" //change in heap
myobj3.email="sarav@xyz.com"
console.log(myobj3)   
console.log(myobj, '\n')


// Strings
const name = "Saravjeet"
const rollno = "4"
console.log(`Hello my name is ${name} and rollno is ${rollno}`)

const str1 = new String("hello-saravjeet") //string using constructor
console.log(typeof name) //string
console.log(typeof str1) //object
console.log(name.charAt(4))
console.log(name.toUpperCase())
console.log(name.replace('a', 'b'))
console.log('\n')

//Number math
const num = 100;
const num2 = 123.12345
console.log(num.toFixed(2))
console.log(num2.toPrecision(5))

const num3 = new Number(46)
console.log(typeof num)
console.log(typeof num3)

console.log(Math)
console.log(Math.max(4,5,45,99,100))
console.log(Math.round(4.78))
console.log(Math.abs(-23))
console.log(Math.random())
console.log(Math.random()*10)

console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1)
console.log('\n')

//Date and Time in js
let mydate = new Date()
console.log(mydate)

console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.getDate())

let timestamp = Date.now()
console.log(timestamp)
let date2 = new Date(2025, 0, 1)
console.log(date2.toLocaleString())
console.log(date2.getTime())


