// write a function that takes an array of numbers and returns the largest number in the array
function findLargest(arr) {
  let largest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [1, 2, 34, 5, 6, 7, 8];
console.log(findLargest(arr)); // Output: 34
