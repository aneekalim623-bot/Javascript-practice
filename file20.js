// THIS - Current object

// 1. Object method mein this = object
let person = {
    name: "Ali",
    greet: function() {
        console.log("Hello " + this.name);
    }
};
person.greet(); // Hello Ali

// 2. Regular function mein this = global
function test() {
    console.log(this);
}
test(); // global object

// 3. Arrow function mein this = parent
let obj = {
    name: "Sara",
    greet: () => {
        console.log(this.name); // undefined
    }
};
obj.greet(); // undefined

// 4. Farq (Regular vs Arrow)
let obj2 = {
    name: "Ahmed",
    regular: function() {
        console.log("Regular:", this.name);
    },
    arrow: () => {
        console.log("Arrow:", this.name);
    }
};
obj2.regular(); // Regular: Ahmed
obj2.arrow(); // Arrow: undefined