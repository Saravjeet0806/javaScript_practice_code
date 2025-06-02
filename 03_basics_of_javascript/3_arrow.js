const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this refers to current context
        console.log(this); //tell about current variables
    }
}

// user.welcomeMessage()
// user.username="Saravjeet"
// user.welcomeMessage() //it will show Saravjeet, welcome to website because we have changed the context

// console.log(this)  //{} in node environment but window in browser (used for checking current context) 

//arrow function
const func = ()=>{
    console.log("hello world");
    
}
func()

// const addTwo = (num1, num2) => {    
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit way to declare arrow function