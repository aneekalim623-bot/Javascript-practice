// FUNCTION DECLARATION
function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 3));

// FUNCTION EXPRESSION
const subtract = function(a, b) {
    return a - b;
};
console.log("Subtract:", subtract(10, 4));

// ARROW FUNCTION (1 line)
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 5));

// ARROW FUNCTION (multiple lines)
const divide = (a, b) => {
    if (b === 0) return "Cannot divide";
    return a / b;
};
console.log("Divide:", divide(10, 2));