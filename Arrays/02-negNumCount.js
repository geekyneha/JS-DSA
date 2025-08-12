// Write a function that counts the number of negative numbers in an array.
const negNumCount = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
};

let arr = [-1, 2, -3, 4, -5, 6];
console.log(negNumCount(arr)); // Output: 3
