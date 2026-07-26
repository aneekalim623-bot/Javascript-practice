// Events: Jab user kisi button par click karta hai toh action trigger hota hai

const btn = document.querySelector(".btn-headline");

// Event Listener add karna (click event)
btn.addEventListener("click", function() {
    console.log("You clicked the button!");
});