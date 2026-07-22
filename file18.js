// Set - Duplicate nahi leta
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Ye ignore ho jayega
console.log(set); // {1, 2}

// Array se duplicate hatana
let arr = [1, 2, 2, 3];
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]

// Map - Key-value store
let map = new Map();
map.set("name", "Ali");
map.set("age", 25);
console.log(map.get("name")); // Ali