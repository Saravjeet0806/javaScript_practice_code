//There are two types of memory
//stack(primitive) -- a copy is made,  and heap(non-primitive) -- a reference is made

let accountno= 1567
let secondaccountno= accountno
secondaccountno = 89
console.log(accountno)
console.log(secondaccountno)

let myobj={
    email : "abc@google.com",
    uname : "abc"
}

let myobj2={
    email : "xyz@gmal.com",
    uname : "xyz"
}

myobj=myobj2

console.log(myobj.email)  //xyz@gmail.com
console.log(myobj2.email) //xyz@gmail.com