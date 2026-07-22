// GETTERS AND SETTERS - Controlled property access

class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    // GETTER - value return karta hai
    get name() {
        return this._name.toUpperCase();
    }
    
    // SETTER - value set karta hai (validation ke sath)
    set name(value) {
        if (value.length < 3) {
            console.log("Name must be at least 3 characters");
            return;
        }
        this._name = value;
    }
    
    // Getter for age
    get age() {
        return this._age;
    }
    
    // Setter for age (validation)
    set age(value) {
        if (value < 0 || value > 120) {
            console.log("Invalid age!");
            return;
        }
        this._age = value;
    }
}

let u1 = new User("ali", 25);

// Getter use
console.log(u1.name); // ALI (toUpperCase ho gaya)
console.log(u1.age); // 25

// Setter use
u1.name = "ahmed"; // Valid
console.log(u1.name); // AHMED

u1.name = "ab"; // Invalid (Too short)
u1.age = 150; // Invalid age!

// Without getter/setter (normal property)
class SimpleUser {
    constructor(name) {
        this.name = name;
    }
}

let s1 = new SimpleUser("Ali");
s1.name = "A"; // No validation (koi check nahi)
console.log(s1.name); // A