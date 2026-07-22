// PRIMITIVE (copy)
let a = 10;
let b = a;
b = 20;
console.log("a:", a, "b:", b);

// REFERENCE (same memory)
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log("arr1:", arr1, "arr2:", arr2);

// BLOCK SCOPE
if (true) {
    let blockLet = "Andar";
    var blockVar = "Bahar";
}
console.log("Var:", blockVar);
// console.log(blockLet); // Error!

// LEXICAL SCOPE
let outer = "Outside";
function outerFunc() {
    let inner = "Inside";
    function innerFunc() {
        console.log(outer, inner);
    }
    innerFunc();
}
outerFunc();