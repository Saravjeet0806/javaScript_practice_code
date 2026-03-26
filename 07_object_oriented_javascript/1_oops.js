const myObj = {
    name: "Saravjeet",
    age: "20",

    getUserDetails: function(){
        console.log(this.name);
        console.log("username is", this.name);
    }
}

console.log(myObj);
myObj.getUserDetails(); // don't wrap in console.log


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Saravjeet", 12, true);
const userTwo = new User("User2", 11, false);

console.log(userOne);
console.log(userTwo);