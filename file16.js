// FUNCTION INSIDE FUNCTION
function outer() {
    let msg = "Hello from outer!";
    function inner() {
        console.log(msg);
    }
    inner();
}
outer();

// OBJECT METHODS
let car = {
    brand: "Toyota",
    start: function() {
        console.log(this.brand + " starting...");
    }
};
car.start();

// ARRAY METHODS
let nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(n => console.log(n * 2));

// map
let doubled = nums.map(n => n * 2);
console.log("Map:", doubled);

// filter
let evens = nums.filter(n => n % 2 === 0);
console.log("Filter:", evens);

// reduce
let sum = nums.reduce((total, n) => total + n, 0);
console.log("Reduce:", sum);

// CALL, APPLY, BIND
let user = { name: "Ali" };
function greet(greeting) {
    console.log(greeting + ", " + this.name);
}
greet.call(user, "Hello");
greet.apply(user, ["Hi"]);
let bound = greet.bind(user, "Salam");
bound();