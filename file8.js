// FOR-OF (Array)
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

// FOR-IN (Object)
let student = {
    name: "Ali",
    age: 20,
    city: "Lahore"
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}