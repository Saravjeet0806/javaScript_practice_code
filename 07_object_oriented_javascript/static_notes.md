# 📘 Understanding `static` in JavaScript Classes

## 🔍 What is `static`?

- `static` methods in JavaScript belong to the **class itself**, not to its instances.
- They are typically used for utility functions that don't need to access instance-specific data.

---

## 🧪 Example Code

```js
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const hitesh = new User("hitesh");

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log(iphone.createId()); // ❌ Error: createId is not a function
