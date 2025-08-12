let sum = (n) => {
  let isOdd = arr[n] % 2 !== 0;
  if (n == 0) {
    if (isOdd) return arr[0];
    else return 0;
  }

  if (isOdd) {
    return arr[n] + sum(n - 1);
  } else {
    return 0 + sum(n - 1);
  }
};

let arr = [5, 3, 0, 2, 1];
let n = arr.length - 1;
let result = sum(n);
console.log(result);
