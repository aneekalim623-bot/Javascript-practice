// CLASSES - extends aur super (Inheritance)

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + " makes a sound");
    }
}

// Child class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Parent constructor call
        this.breed = breed;
    }
    
    // Method override (same name, different behavior)
    speak() {
        console.log(this.name + " barks");
    }
    
    getBreed() {
        console.log("Breed: " + this.breed);
    }
}

// Another child class
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    
    speak() {
        console.log(this.name + " meows");
    }
}

let dog1 = new Dog("Tommy", "Golden");
dog1.speak(); // Tommy barks (override)
dog1.getBreed(); // Breed: Golden

let cat1 = new Cat("Kitty", "White");
cat1.speak(); // Kitty meows (override)
cat1.speak(); // Kitty meows

// super keyword - parent method call
class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greet() {
        super.greet(); // Parent method call
        console.log("Hello from Child");
    }
}

let c = new Child();
c.greet(); // Hello from Parent \n Hello from Child