function myFunction(power) {
    return function(number) {
        return number ** power;
    }
}

// Square calculator (power = 2)
const square = myFunction(2);
const ans = square(5); 
// Cube calculator (power = 3)
const cube = myFunction(3);
const ans2 = cube(5); 
console.log(ans2); 