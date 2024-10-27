# Doubt Session

- [x] flexbox
- [x] grid
- [x] media query
- [x] JS loops
- [x] arrow functions
- [x] hoisting and scope

## Flexbox

- It is a one-dimensional layout method for laying out items in rows or columns.

## Grid

- It is a two-dimensional layout system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1D system.

# 13 Landing Page using HTML and TailwindCSS

- [x] Create a landing page using HTML and TailwindCSS

# 14 Landing Page using HTML and TailwindCSS

- [x] Create a landing page using HTML and TailwindCSS

# 15 DOM Fundamentals

- [x] What's the DOM and DOM Manipulation
- [x] get element by Class, tagname & ID
- [x] Append & Appendchild
- [x] Selecting and Manipulating Elements - innerHTML, textContent, createElement, removeChild, remove, classList
- [x] document.queryselector & document.queryselectorAll

## What's the DOM and DOM Manipulation

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

## get element by Class, tagname & ID

- `document.getElementByClassName('class')`
- `document.getElementByTagName('tag')`
- `document.getElementByID('id')`

## Append & Appendchild

- `element.append()`
- `element.appendChild()`

## Selecting and Manipulating Elements

- `innerHTML`: It sets or returns the HTML content (inner HTML) of an element.

Example: `document.getElementById('id').innerHTML = 'Hello World'`

- `textContent`: It sets or returns the text content of the specified node, and all its descendants.

Example: `document.getElementById('id').textContent = 'Hello World'`

- `createElement`: It creates an Element Node with the specified name.

Example: `document.createElement('div')`

- `removeChild`: It removes a specified child node of the specified element.

Example: `document.getElementById('id').removeChild('child')`

- `remove`: It removes the specified element.

Example: `document.getElementById('id').remove()`

- `classList`: It returns the class name(s) of an element.

Example: `document.getElementById('id').classList`

## document.queryselector & document.queryselectorAll

- `document.querySelector()`: It returns the first element that matches a specified CSS selector(s) in the document.

Example: `document.querySelector('.class')`

- `document.querySelectorAll()`: It returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

Example: `document.querySelectorAll('.class')`

## Exercises/Homeworks

- [ ] Create a simple to-do list using HTML, CSS, and JavaScript. Use DOM manipulation to add, delete, and update the to-do list.

- [ ] Create the following table using DOM manipulation.

| Name            | Age | Designation      | Salary | City       | Country |
| --------------- | --- | ---------------- | ------ | ---------- | ------- |
| John Doe        | 30  | Web Developer    | $1000  | New York   | USA     |
| Jane Doe        | 25  | UI/UX Designer   | $800   | California | USA     |
| Alex Smith      | 35  | Project Manager  | $1200  | Texas      | USA     |
| Michael Johnson | 40  | Business Analyst | $1500  | Florida    | USA     |
| Sarah Johnson   | 28  | HR Manager       | $900   | Washington | USA     |

- [ ] Create the following blog post structure using DOM Manipulation.

url: https://www.guvi.in/blog/prerequisites-for-reactjs/
