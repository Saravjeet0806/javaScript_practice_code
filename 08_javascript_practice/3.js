const arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
arr1.push(10)
console.log(arr1)

const str1 = arr1.join()
console.log(str1)

const arr2 = arr1.splice(2, 3)
console.log(arr1) //returns the original array
console.log(arr2) // return deleted values

const marvel = ["spiderman", "hulk", "thor"]
const dc = ["flash", "batman", "wonderwoman"]

const all_heros = marvel.concat(dc) //merging arrays
console.log(all_heros)

const newarr= [1, 4, 5, 7, 10]
const newarr1 = [23, 45, 67, [34, 23], [324, [23, 10]]]
newarr.push(newarr1)
console.log(newarr)
const new2= newarr.flat(Infinity)
console.log(new2, '\n')


//objects
const msymbol = Symbol("mykey")
const myobj = {
    Id: 1002454,
    name: {
        first_name: "Saravjeet",
        last_name: "Singh"
    },
    [msymbol]: "newKey"
}

console.log(myobj)
console.log(myobj["name"]["last_name"])

myobj.greeting = function(){
    console.log(`Happy birthday ${this.name.first_name}`)
}

console.log(myobj.greeting())
console.log(Object.keys(myobj))
console.log(Object.values(myobj), '\n')

const obj1= {1:'A', 2:'b'}
const obj2= {3: 'c', 4:'d'}

const obj3 = Object.assign({}, obj1, obj2) //using assign method to combine objects in js
console.log(obj3)

const obj4 = {...obj3, ...obj1, ...obj2}
console.log(obj4) //spread operator to combine objects
const {name: n} = myobj //object destructing
console.log(n) //give n alias

const{Id} = myobj;
console.log(Id)