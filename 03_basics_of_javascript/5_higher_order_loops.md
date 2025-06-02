# Higher-Order Loops in JavaScript

Higher-order loops in JavaScript are functions that iterate over data structures like arrays and accept callback functions to process each element. Below are common higher-order loops used with examples and their associated data structures.

---

## 1. `forEach()`

* **Data Structure:** Array
* **Purpose:** Executes a provided function once for each array element.

```js
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

---

## 2. `map()`

* **Data Structure:** Array
* **Purpose:** Creates a new array by applying a function to each element.

```js
const numbers = [1, 2, 3];

const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]
```

---

## 3. `filter()`

* **Data Structure:** Array
* **Purpose:** Returns a new array with elements that pass a test.

```js
const ages = [10, 18, 21, 16];

const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 21]
```

---

## 4. `find()`

* **Data Structure:** Array
* **Purpose:** Returns the **first element** that satisfies a condition.

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }
```

---

## 5. `reduce()`

* **Data Structure:** Array
* **Purpose:** Reduces array to a single value using an accumulator.

```js
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

## 6. `some()`

* **Data Structure:** Array
* **Purpose:** Returns `true` if at least one element passes the test.

```js
const scores = [10, 20, 30];

const hasPassed = scores.some(score => score > 25);
console.log(hasPassed); // true
```

---

## 7. `every()`

* **Data Structure:** Array
* **Purpose:** Returns `true` if **all elements** pass the test.

```js
const evenNumbers = [2, 4, 6];

const allEven = evenNumbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

---

## Summary Table

| Higher-Order Loop | Used With | Purpose                           |
| ----------------- | --------- | --------------------------------- |
| `forEach()`       | Array     | Iterating without returning value |
| `map()`           | Array     | Transforming data                 |
| `filter()`        | Array     | Selecting subset                  |
| `find()`          | Array     | Finding one item                  |
| `reduce()`        | Array     | Aggregating to a single value     |
| `some()`          | Array     | Checking if **any** pass          |
| `every()`         | Array     | Checking if **all** pass          |

---

Let me know if you want examples with other data structures like Sets or Maps!
