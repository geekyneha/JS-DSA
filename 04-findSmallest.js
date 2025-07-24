const findSmallest = (arr) => {
  if (arr.length === 0) return null; // Handle empty array case
  let smallest = +Infinity; // Initialize smallest with the largest possible number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]; // Update smallest if a smaller element is found
    }
  }
  return smallest; // Return the smallest element found
};

let arr = [3, 1, 4, -1, 5, 9, 2, 6, 5, 3, 5];
console.log(findSmallest(arr)); // Output: -1
