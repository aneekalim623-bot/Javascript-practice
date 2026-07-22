// hasOwnProperty - Check karna ke property object ki apni hai ya prototype ki

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello " + this.name);
};

let p1 = new Person("Ali");

// Object ki apni property
console.log(p1.hasOwnProperty("name")); // true (apni hai)

// Prototype ki property
console.log(p1.hasOwnProperty("greet")); // false (prototype mein hai)

// Prototype chain mein property hai
console.log("greet" in p1); // true (prototype chain mein hai)

// for-in loop sirf apni properties deta hai (hasOwnProperty filter)
for (let key in p1) {
    if (p1.hasOwnProperty(key)) {
        console.log(key + ": " + p1[key]); // name: Ali (sirf apni)
    }
}