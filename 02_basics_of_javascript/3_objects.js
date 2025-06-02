//singleton objects
const myObj = new Object() 

myObj.name= "Saravjeet"
myObj.age= "19"
console.log(myObj)

const newObj = {
    name: "Saravjeet",
    fullusername: {
        firstname: "Saravjeet",
        lastname: "Singh"
    }
}
console.log(newObj.fullusername.firstname) //chaining in objects

console.log(Object.keys(newObj));  //to see the keys in an objects
console.log(Object.values(newObj)); //to see values in the objects
console.log(myObj.hasOwnProperty("name")) //to check if a property exists or not


//combining objects in js
const obj1= {1:'A', 2:'b'}
const obj2= {3: 'c', 4:'d'}

const obj3 = Object.assign({}, obj1, obj2) //using assign method to combine objects in js
console.log(obj3)

const obj4 = {...obj1, ...obj2}  //using spread operator to combine objects in js
console.log(obj4)


//destructuring objects in js

const newObj2 = {
    name: "Saravjeet",
    fullusername: {
        firstname: "Saravjeet",
        lastname: "Singh"
    }
}

const {name: n} = newObj2  //now n will be used as name and is has been destructured
console.log(n) //it will give Saravjeet as output

