# DOM Manipulation in JavaScript

## 📌 What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

---

## 🧠 1. Selecting Elements

Before manipulating any element, you must first **select** it.

| Method | Description |
|--------|-------------|
| `document.getElementById("id")` | Selects a single element by ID |
| `document.getElementsByClassName("class")` | Selects multiple elements by class name |
| `document.getElementsByTagName("tag")` | Selects elements by tag name |
| `document.querySelector("selector")` | Selects the first element that matches a CSS selector |
| `document.querySelectorAll("selector")` | Selects all elements that match a CSS selector |

---

## ✏️ 2. Changing Content

| Property | Description | Example |
|----------|-------------|---------|
| `innerText` | Sets or gets the text content of an element | `element.innerText = "Hello!"` |
| `innerHTML` | Sets or gets HTML inside an element | `element.innerHTML = "<b>Bold</b>"` |
| `textContent` | Gets or sets plain text (ignores styling) | `element.textContent = "Just text"` |

---

## 🎨 3. Changing Styles

| Method | Description | Example |
|--------|-------------|---------|
| `element.style.property` | Change CSS directly | `element.style.color = "red"` |
| `.classList.add()` | Add a CSS class | `element.classList.add("highlight")` |
| `.classList.remove()` | Remove a CSS class | `element.classList.remove("old")` |
| `.classList.toggle()` | Toggle a class on/off | `element.classList.toggle("hidden")` |

---

## 🔧 4. Creating and Adding Elements

| Method | Description | Example |
|--------|-------------|---------|
| `document.createElement("tag")` | Create a new element | `let div = document.createElement("div")` |
| `element.appendChild()` | Append a child node | `parent.appendChild(child)` |
| `element.append()` | Append element or text | `element.append("Hello")` |
| `element.prepend()` | Insert as first child | `element.prepend(newElement)` |
| `element.insertBefore(new, existing)` | Insert before another child | `parent.insertBefore(newNode, oldNode)` |
| `element.remove()` | Remove an element | `element.remove()` |

---

## 🧩 5. Event Listeners

You can listen and react to user events (like clicks, typing, etc.).

| Method | Example |
|--------|---------|
| `addEventListener(type, function)` | `element.addEventListener("click", function)` |
| `removeEventListener()` | `element.removeEventListener("click", handler)` |
| `onclick` | `element.onclick = function() {}` |

---

## ✅ Example Code

```html
<button id="changeBtn">Change Text</button>
<p id="textPara">Original text</p>

<script>
  const btn = document.getElementById("changeBtn");
  const para = document.getElementById("textPara");

  btn.addEventListener("click", () => {
    para.innerText = "Text Changed!";
    para.style.color = "blue";
  });
</script>
