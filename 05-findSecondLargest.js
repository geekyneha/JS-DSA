const findSecondLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  if (arr.length < 2) return null; // Handle case where there are less than 2 elements

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // Update second largest before updating largest
      largest = arr[i]; // Update largest with the new largest value
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i]; // Update second largest if current element is greater than second largest but less than largest
    }
  }
  return secondLargest;
};

let arr = [3, 1, 4, -1, 5, 9, 2, 6, 5, 3, 5];
console.log(findSecondLargest(arr)); // Output: 6 (the second largest number in the
