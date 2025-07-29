const palindrome = (n) => {
  let rev = 0;
  let num = n;

  while (num > 0) {
    let digit = num % 10;
    rev = 10 * rev + digit;
    num = ~~(num / 10);
  }
  return rev === n;
};

let n = 123;
let result = palindrome(n);
console.log(result); // true
