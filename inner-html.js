// innerHTML property
const headline = document.querySelector(".headline");

// 1. Existing innerHTML dekhna
console.log(headline.innerHTML);

// 2. innerHTML ko poora change karna
headline.innerHTML = "<h1>Inner HTML Changed!</h1>";
headline.innerHTML += "<button class=\"btn\">New Button</button>";

// Console mein check karein ki ab kya hai
console.log(headline.innerHTML);