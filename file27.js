// STATIC METHODS AND PROPERTIES - Class par directly call

class MathUtils {
    // Static property
    static PI = 3.14159;
    static E = 2.71828;
    
    // Static method
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
}


console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 5)); // 20
console.log(MathUtils.subtract(10, 4)); // 6


let obj = new MathUtils();


class Student {
    static totalStudents = 0;
    
    constructor(name) {
        this.name = name;
        Student.totalStudents++; // Har naye student ke sath count badhe
    }
    
    static getTotal() {
        return Student.totalStudents;
    }
}

let s1 = new Student("Ali");
let s2 = new Student("Sara");
let s3 = new Student("Ahmed");

console.log(Student.totalStudents); // 3
console.log(Student.getTotal()); // 3

// Static method utility example
class Calculator {
    static square(n) {
        return n * n;
    }
    
    static cube(n) {
        return n * n * n;
    }
    
    static isEven(n) {
        return n % 2 === 0;
    }
}

console.log(Calculator.square(5)); // 25
console.log(Calculator.cube(3)); // 27
console.log(Calculator.isEven(10)); // true
console.log(Calculator.isEven(7)); // false