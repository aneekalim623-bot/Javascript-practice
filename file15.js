// OBJECTS INSIDE ARRAY
let users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 },
    { name: "Ahmed", age: 28 }
];
for (let user of users) {
    console.log(user.name, user.age);
}

// COMPUTED PROPERTIES
let keyName = "city";
let person = {
    name: "Hamza",
    [keyName]: "Lahore"
};
console.log(person);

// SPREAD IN OBJECTS
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

let obj3 = { a: 10, b: 20 };
let obj4 = { b: 99, c: 100 };
let overridden = { ...obj3, ...obj4 };
console.log("Overridden:", overridden);


