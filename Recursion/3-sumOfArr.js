const sum = (arr, n) => {
  if (n == 0) return arr[0];

  return arr[n] + sum(arr, n - 1);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length - 1;

let result = sum(arr, n);
console.log(result);
