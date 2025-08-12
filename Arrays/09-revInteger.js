const revInteger = (num) => {
  let n = num;
  let rev = 0;

  num = Math.abs(num); // Handle negative numbers

  while (num > 0) {
    let digit = num % 10;
    rev = 10 * rev + digit;
    num = Math.floor(num / 10);
  }

  // 32 bit signed integer range
  let limit = Math.pow(2, 31) - 1;
  // let limit = 2**31;
  // Check if reversed integer is within bounds
  if (rev > limit || rev < -limit) {
    return 0; // Return 0 if reversed integer is out of bounds
    return n < 0 ? -rev : rev; // Restore sign for negative numbers
  }
};
