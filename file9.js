let colors = ["Red", "Green", "Blue"];

// PUSH - End mein add
colors.push("Yellow");
console.log("Push:", colors);

// POP - End se remove
colors.pop();
console.log("Pop:", colors);

// UNSHIFT - Start mein add
colors.unshift("Purple");
console.log("Unshift:", colors);

// SHIFT - Start se remove
colors.shift();
console.log("Shift:", colors);

// INDEXOF - Position
console.log("Index of Green:", colors.indexOf("Green"));

// INCLUDES - Check
console.log("Includes Red?", colors.includes("Red"));