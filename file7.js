// FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE LOOP
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// DO-WHILE LOOP
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 2);

// BREAK & CONTINUE
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log(i);
}