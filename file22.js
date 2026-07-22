// PROTOTYPE - Methods share karna

function Person(name) {
    this.name = name;
}

// Prototype mein method add
Person.prototype.greet = function() {
    console.log("Hello " + this.name);
};

let p1 = new Person("Ali");
let p2 = new Person("Sara");

p1.greet(); // Hello Ali
p2.greet(); // Hello Sara

// hasOwnProperty - check karo
console.log(p1.hasOwnProperty("name")); // true
console.log(p1.hasOwnProperty("greet")); // false (prototype mein hai)

// Object.create - inheritance
let animal = {
    eat: function() {
        console.log("Eating...");
    }
};
let dog = Object.create(animal);
dog.bark = function() {
    console.log("Barking...");
};
dog.eat(); // Eating... (animal se)
dog.bark(); // Barking...