const countDigit = (n) => {
  let count = 0;

  if (n === 0) return 1; // Special case for 0

  n = Math.abs(n); // Handle negative numbers
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

let n = -18237;
let result = countDigit(n);
console.log(result); // Output: 5
