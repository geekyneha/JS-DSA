function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 !== 0) {
    return false;
  }

  return powerOfTwo(n / 2);
}

let n = 32;

console.log(powerOfTwo(n));
