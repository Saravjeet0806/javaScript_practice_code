# 📚 JavaScript Event Listeners

In JavaScript, **event listeners** allow you to run code in response to user actions or other events, such as mouse clicks, key presses, and more.

---

## 🧠 What is an Event Listener?

An **event listener** is a procedure in JavaScript that waits for an event to occur. When the specified event occurs, the callback function attached to the event listener is executed.

### Syntax:
```javascript
element.addEventListener('event', functionName, useCapture);
```

---

## 🔑 Common Event Types

| Event Type | Description                      |
|------------|----------------------------------|
| `click`    | Fires on mouse click             |
| `keydown`  | Fires when a key is pressed      |
| `mouseover`| Mouse enters an element          |
| `submit`   | Form is submitted                |
| `change`   | Value of element changes         |

---

## 📌 Event Object Properties

When an event occurs, an **event object** is passed to the event handler. Here are important properties of the event object:

### 1. `type`
- Describes the type of the event (e.g., `"click"`, `"keydown"`).
```js
console.log(event.type); // "click"
```

### 2. `timestamp`
- The time (in ms) when the event was created.
```js
console.log(event.timeStamp);
```

### 3. `defaultPrevented`
- Returns `true` if `event.preventDefault()` was called.
```js
event.preventDefault();
console.log(event.defaultPrevented); // true
```

---

## 🧭 Targeting Elements

### 4. `target`
- The actual element that triggered the event.
```js
console.log(event.target);
```

### 5. `currentTarget`
- The element on which the event listener is registered.
```js
console.log(event.currentTarget);
```

### 6. `srcElement` *(Non-standard in modern usage)*
- Same as `target` (used in older IE versions).

### 7. `toElement` *(Mouse Events only)*
- The element the pointer is moving **towards** in mouseout/mouseover.

---

## 🖱️ Mouse Coordinates

### 8. `clientX`, `clientY`
- The X and Y coordinates of the mouse pointer *relative to the viewport*.
```js
console.log(event.clientX, event.clientY);
```

### 9. `screenX`, `screenY`
- The X and Y coordinates of the mouse pointer *relative to the user's screen*.
```js
console.log(event.screenX, event.screenY);
```

---

## ⌨️ Keyboard Events

### 10. `altKey`, `ctrlKey`, `shiftKey`
- Boolean values indicating if these modifier keys were held during the event.
```js
console.log(event.altKey);   // true if Alt was pressed
console.log(event.ctrlKey);  // true if Ctrl was pressed
console.log(event.shiftKey); // true if Shift was pressed
```

### 11. `keyCode` *(Deprecated in modern JS)*
- Numeric code of the pressed key (use `event.key` or `event.code` instead).
```js
console.log(event.keyCode); // e.g., 13 for Enter
```

---

## ✅ Example: Handling a Click Event
```html
<button id="myBtn">Click Me</button>

<script>
document.getElementById('myBtn').addEventListener('click', function(event) {
  console.log("Type:", event.type);
  console.log("Target:", event.target);
  console.log("Coordinates:", event.clientX, event.clientY);
  console.log("Ctrl pressed?", event.ctrlKey);
});
</script>
```

---

## 🧹 Removing an Event Listener
```js
function handleClick() {
  console.log("Clicked!");
}

element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);
```

---

## 📒 Conclusion

- JavaScript events enable responsive, interactive web applications.
- Understanding the `event` object gives you powerful control over how your app reacts to user interactions.