const powerOfTwo = (n) => {
  for (let i = 0; 2 ** i <= n; i++) {
    if (2 ** i == n) {
      return true;
    }
  }
  return false;
};

let n = 4;
const result = powerOfTwo(n);
console.log(result);
