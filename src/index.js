// src/index.js

export function add(a, b) {
  return a + b;
}

export function greet(name) {
  return `Hello, ${name}!`;
}


// This runs when you do: node src/index.js
console.log(greet("World"));
console.log("2 + 3 =", add(2, 3));