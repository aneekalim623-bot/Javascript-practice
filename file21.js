// CALL, APPLY, BIND - this set karna

let user1 = { name: "Ali" };
let user2 = { name: "Sara" };

function greet() {
    console.log("Hello " + this.name);
}

// call - this set karo
greet.call(user1); // Hello Ali
greet.call(user2); // Hello Sara

// bind - nayi function (permanent this)
let greetAli = greet.bind(user1);
greetAli(); // Hello Ali

// call with arguments
function introduce(greeting) {
    console.log(greeting + ", I'm " + this.name);
}
introduce.call(user1, "Hi"); // Hi, I'm Ali
introduce.call(user2, "Salam"); // Salam, I'm Sara