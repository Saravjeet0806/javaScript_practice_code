const promise1 = new Promise(function(resolve, reject){  //creating a promise
    //async task  
    //db calls, cryptographic, network calls

    setTimeout(function(){
        console.log("async task complete");  
        resolve();
    }, 1000)
})

promise1.then(function(){  //consuming a promise
    console.log("promise consumed");
    
})

//// ***********************************************************////

new Promise(function(resolve, reject){  //another way to create promise and consume it in single step
    setTimeout(function(){
        console.log("async task 2")
        resolve();
    }, 1000)
    
}).then(function(){
    console.log("promise 2 consumed/resolved")
})

//// ***********************************************************////

const promise3= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Saravjeet", email: "abc@gmail.com"})  //passing parameter in a promise (object)
    }, 1000)
})

promise3.then(function(user){
    console.log(user);  //getting the value
})

//// ***********************************************************////

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false     //set true if you want to trigger an error / reject 
        if (!error) {
            resolve({username: "Sarav", password: "abc"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promise4                                 //to improve readibility of code
 .then((user) => {                //then chaining to get value
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){           //to catch if an error occurs
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //finally block

//// ***********************************************************////

const promiseFive = new Promise(function(resolve, reject){  //resolving promise using async await
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive   //using async await with try catch block
        console.log(response);
    } catch (error) {     //used if an error occurs
        console.log(error);
    }
}

consumePromiseFive()

//// ***********************************************************////

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()  //it takes time .. there use await 
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//// ***********************************************************////

fetch('https://api.github.com/users/hiteshchoudhary')  //fetch example to get data
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
