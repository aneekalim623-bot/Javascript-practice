// CLASS - Blueprint

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello " + this.name);
    }
    isAdult() {
        return this.age >= 18;
    }
}

let p1 = new Person("Ali", 25);
p1.greet(); // Hello Ali
console.log(p1.isAdult()); // true

// INHERITANCE
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(this.name + " is studying");
    }
}

let s1 = new Student("Sara", 16, "A");
s1.greet(); // Hello Sara (parent se)
s1.study(); // Sara is studying

// GETTER/SETTER
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(value) {
        if (value.length < 3) {
            console.log("Too short!");
            return;
        }
        this._name = value;
    }
}

let u1 = new User("ali");
console.log(u1.name); // ALI
u1.name = "ahmed";
console.log(u1.name); // AHMED