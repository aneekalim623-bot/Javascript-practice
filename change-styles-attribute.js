// 1. Change styles of elements
const mainHeading = document.querySelector("div.headline h2");

// Style change karne ke liye .style property use hoti hai
mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "yellow"; // camelCase use hota hai (background-color nahi)
mainHeading.style.border = "20px solid green";


// 2. Get and Set Attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // Pehle se majood attribute ki value nikalna

// Attribute change karna
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

// Input element ka attribute dekhna
const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));