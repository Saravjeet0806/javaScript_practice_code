// singleton
// Object.create

// object literals

const mySymbol = Symbol("key1") //using a symbol in objects
const myobj = {
    name : "Saravjeet",
    address: "haryana",
    pin: "password",
    [mySymbol]: "mykey1" //use square brackets to use symbol in js
}

// console.log(myobj.name)
// console.log(myobj["name"])  //preferred way .. always use this way
// console.log(myobj[mySymbol])
 
//to overwrite values
myobj.name = "Sarav"

//to freeze values in objects
//Object.freeze(myobj)

myobj.greeting = function(){
    console.log("Hello JS user");
}
myobj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //to use reference from an object.. use this because myobj is already referred , this operator is used
}

console.log(myobj.greeting());
console.log(myobj.greetingTwo());


