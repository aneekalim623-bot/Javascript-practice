// OBJECT.ASSIGN - Copy aur Merge
let user = { name: "Ali", age: 25 };
let details = { city: "Lahore", country: "Pakistan" };

// Copy
let copy = Object.assign({}, user);
console.log("Copy:", copy); // {name: "Ali", age: 25}

// Merge
let fullData = Object.assign({}, user, details);
console.log("Merge:", fullData); // {name: "Ali", age: 25, city: "Lahore", country: "Pakistan"}

// OPTIONAL CHAINING - Safe access
let person = {
    name: "Sara",
    address: {
        city: "Karachi"
    }
};

console.log(person?.address?.city); // Karachi
console.log(person?.address?.zip); // undefined (Error nahi)
console.log(person?.phone); // undefined
