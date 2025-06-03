# ⚙️ Asynchronous JavaScript

JavaScript is known for being **synchronous** and **single-threaded**, but it provides tools to handle **asynchronous** operations for better performance and responsiveness.

---

## 🔁 JavaScript: Synchronous & Single-threaded

- **Synchronous**: Executes one operation at a time, in the order they appear.
- **Single-threaded**: Only one task can be performed at a time on the main thread.

### 📌 Example:
```js
console.log("Start");
console.log("Middle");
console.log("End");
```
Output will always be in order.

---

## ⛔ Blocking vs ✅ Non-blocking Code

### 🔴 Blocking Code
- **Blocks** further execution until the current task completes.
- Example: Reading a file synchronously.

```js
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data); // Blocks execution until file is read
console.log("Next line"); 
```

### 🟢 Non-blocking Code
- **Does not block** program execution.
- Code continues to run while an operation (like file reading) completes in the background.

```js
const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("Next line"); // Printed before file reading is complete
```

---

## 🧩 Asynchronous Techniques in JavaScript

### 1. **Callbacks**
- Function passed as an argument to be executed later.
```js
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}
greet("John", () => console.log("Callback executed"));
```

### 2. **Promises**
- Represent the eventual completion or failure of an asynchronous operation.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result));
```

### 3. **Async/Await**
- Syntactic sugar over Promises for writing asynchronous code in a synchronous style.

```js
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}
fetchData();
```

---

## ⏳ Event Loop

- The **Event Loop** allows JavaScript to perform non-blocking operations by putting asynchronous callbacks in a queue to be executed after the current call stack is clear.

---

## ✅ Summary

| Concept            | Description                            |
|--------------------|----------------------------------------|
| Synchronous        | One operation at a time                |
| Asynchronous       | Non-blocking, continues execution      |
| Blocking Code      | Halts execution until complete         |
| Non-blocking Code  | Executes without waiting               |
| Promises           | Handle async results                   |
| Async/Await        | Cleaner async syntax                   |
| Event Loop         | Manages async execution flow           |

---

## 📘 Use Case Examples

- Reading files from disk
- Fetching data from APIs
- Timers (`setTimeout`, `setInterval`)
- User interactions and UI updates

---

Understanding async programming in JavaScript is essential for writing efficient and responsive web applications.