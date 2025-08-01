let n = 6;

// Pattern 1: Square of Stars
/*
 * * * *
 * * * *
 * * * *
 * * * *
 */
console.log("Pattern 1: Square of Stars");
for (let i = 0; i < 4; i++) {
  let row = " ";
  for (let j = 0; j < 4; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// Pattern 2: Right-Angled Triangle of Stars
/*
 *
 * *
 * * *
 * * * *
 */
console.log("\nPattern 2: Right-Angled Triangle of Stars");
for (let i = 0; i < 4; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// Pattern 3: Right-Angled Triangle of Numbers
/*
1
1 2
1 2 3
1 2 3 4
*/
console.log("\nPattern 3: Right-Angled Triangle of Numbers starting from 1");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }
  console.log(row);
}

// Pattern 4: Right-Angled Triangle of Numbers starting from 1
/*
1
2 2
3 3 3
4 4 4 4     
*/
console.log(
  "\nPattern 4: Right-Angled Triangle of Numbers with repeated numbers"
);
for (let i = 1; i <= 5; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

// Pattern 5: Inverted Right-Angled Triangle of Numbers
/*
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1
*/
console.log("\nPattern 5: Inverted Right-Angled Triangle of Numbers");

for (let i = 5; i >= 1; i--) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
// for (let i = 0; i < 5; i++) {
//   let row = " ";
//   for (let j = 0; j < 5 - i; j++) {
//     row += j + 1 + " ";
//   }
//   console.log(row);
// }

// Pattern 6: Inverted Right-Angled Triangle of Stars

/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */
console.log("\nPattern 6: Inverted Right-Angled Triangle of Stars");

for (let i = 0; i <= n; i++) {
  let row = " ";
  for (let j = 0; j <= n - i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Pattern 7: Right-Angled Triangle of Stars with Spaces
/*
 *
 * *
 * * *
 * * * *
 */
console.log("\nPattern 7: Right-Angled Triangle of Stars with Spaces");
for (let i = 0; i < n; i++) {
  let row = " ";

  for (let j = 0; j < n - i; j++) {
    row += "  ";
  }
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Pattern 8: Right-Angled Triangle of Numbers with Toggle
/*
1
1 0
1 0 1
1 0 1 0

*/
console.log("\nPattern 8: Right-Angled Triangle of Numbers with Toggle");
for (let i = 0; i < n; i++) {
  let row = " ";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

// Pattern 9: Right-Angled Triangle of Numbers with Toggle
/*      
1
0 1
0 1 0
1 0 1 0
*/
console.log("\nPattern 8: Right-Angled Triangle of Numbers(0-1)");

let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = " ";

  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
