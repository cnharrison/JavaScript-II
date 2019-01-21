// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const thing2 = "this works cos its global 🤔";

function closure() {
  const thing = "this works cos of closure 😅";
  closureThis();
  function closureThis() {
    console.log(thing);
    console.log(thing2);
  }
}

closure();

// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
  // Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let count = 0;
const counter = () => { count++; return count};
console.log(counter());
console.log(counter());
console.log(counter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
