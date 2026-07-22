// HOISTING (var)
console.log("Hoisted:", hoistedVar);
var hoistedVar = "Hello";

// NaN
let invalid = "hello" - 5;
console.log("NaN:", invalid);
console.log("Is NaN?", isNaN(invalid));

// SYMBOL
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol equal?", sym1 === sym2);