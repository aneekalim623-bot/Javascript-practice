// Naye HTML elements JavaScript se banana aur DOM mein add karna

// Step 1: document.createElement() se element banayein
const newNavItem = document.createElement("li");

// Step 2: Element ke andar text ya content daalein
// const newNavItemAnchor = document.createElement("a");
// newNavItemAnchor.textContent = "Teach";
// newNavItem.append(newNavItemAnchor);
newNavItem.textContent = "Teach";

// Step 3: Parent element select karein jisme add karna hai
const navItems = document.querySelector(".nav-items");

// 1. append() -> List ke LAST mein add karta hai
navItems.append(newNavItem);

// 2. prepend() -> List ke START (Beginning) mein add karta hai
// navItems.prepend(newNavItem);

// 3. Element ko remove karna
const todoItem = document.querySelector(".nav-item");
// todoItem.remove(); // Pehla element hata dega

// 4. before() aur after()
// navItems.before(newNavItem); // Parent div ke bahar pehle daal dega
// navItems.after(newNavItem);  // Parent div ke bahar baad mein daal dega