let student = {
    name: "Ahmed",
    age: 22,
    grade: "A"
};

// DOT NOTATION
console.log("Dot:", student.name);

// BRACKET NOTATION
let key = "age";
console.log("Bracket:", student[key]);

// ADD PROPERTY
student.city = "Karachi";
console.log("Add:", student);

// DESTRUCTURING
let { name, age } = student;
console.log("Destructure:", name, age);

// NESTED OBJECT
let teacher = {
    name: "Mr. Ali",
    address: {
        city: "Islamabad",
        country: "Pakistan"
    }
};
console.log("Nested:", teacher.address.city);