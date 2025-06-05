const myObj = {
    name: "Saravjeet",
    age: "19",

    getUserDetails: function(){
        console.log(myObj.name)
        console.log("username is",`${this.name}`)
    }
}

console.log(myObj)
console.log(myObj.getUserDetails())



///**************/// constructor function in js -- always creates a new instance when an object is created

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);  //refers to User context

    }

    return this
}

const userOne = new User("Saravjeet", 12, true)
const userTwo = new User("User2", 11, false)
console.log(userOner);
console.log(userTwo);
