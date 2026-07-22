let numbers = [10, 20, 30, 40, 50];

// SPLICE - Remove/Add (original change)
numbers.splice(2, 1, 25);
console.log("Splice:", numbers);

// SLICE - Copy (original safe)
let sliced = numbers.slice(1, 4);
console.log("Slice:", sliced);
console.log("Original:", numbers);

// CONCAT - Jorna
let a = [1, 2];
let b = [3, 4];
console.log("Concat:", a.concat(b));

// SPREAD - Copy
let old = ["a", "b", "c"];
let newArr = [...old, "d", "e"];
console.log("Spread:", newArr);
console.log("Old:", old);

// DESTRUCTURING
let [first, second] = old;
console.log("Destructure:", first, second);