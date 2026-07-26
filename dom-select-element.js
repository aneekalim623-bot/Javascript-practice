// 1. Select element using getElementById
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// 2. textContent (Hidden text bhi show karta hai)
console.log(mainHeading.textContent);
// mainHeading.textContent = "Something else";

// 3. innerText (Sirf visible text show karta hai)
console.log(mainHeading.innerText);

// 4. Select element using querySelector
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item"); // Pehla match laayega
const navItems = document.querySelectorAll(".nav-item"); // Saare matches NodeList me laayega

console.log(header);
console.log(navItem);
console.log(navItems);