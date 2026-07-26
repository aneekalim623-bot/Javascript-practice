// 1. getElementsByClassName (HTMLCollection deta hai)
let navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems)); // false (yeh array nahi hai)

// Simple for loop HTMLCollection par chal sakta hai
for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
}


// 2. querySelectorAll (NodeList deta hai)
const navItemsQuery = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItemsQuery);

// NodeList par forEach loop direct chal sakta hai
navItemsQuery.forEach((navItem) => {
    navItem.style.backgroundColor = "#555";
    navItem.style.color = "white";
    navItem.style.fontWeight = "bold";
});