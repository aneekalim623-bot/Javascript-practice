// 1. Select Element
const sectionHeadline = document.querySelector(".headline");

// 2. classList dekhna (element par konsi classes lagi hain)
console.log(sectionHeadline.classList);

// 3. Nayi Class Add Karna (add)
sectionHeadline.classList.add("bg-dark");

// 4. Class Remove Karna (remove)
// sectionHeadline.classList.remove("bg-dark");

// 5. Class Check Karna (contains) -> returns true/false
const hasBgDark = sectionHeadline.classList.contains("bg-dark");
console.log("bg-dark class exists?", hasBgDark);

// 6. Class Toggle Karna (toggle)
// Agar class pehle se majood hai toh hata dega, agar nahi hai toh add kar dega!
sectionHeadline.classList.toggle("bg-dark"); // ab hata dega
sectionHeadline.classList.toggle("bg-dark"); // ab dobara add kar dega