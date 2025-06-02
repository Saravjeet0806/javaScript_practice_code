//functions with multiple argument

function add(...num1){
    return num1
}

val= add(400,6000,20,89)
console.log(val);

//handling objects using function
myObj={
    name: "Saravjeet",
    age: "19"
}

function handleObject(anyobject){
    console.log(`hello my name is ${anyobject.name} and age is ${anyobject.age}`)
}

handleObject(myObj)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}