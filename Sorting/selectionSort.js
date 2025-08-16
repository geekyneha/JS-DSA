// Selection Sort Algorithm Implementation

// In selection sort, we repeatedly find the minimum element from the unsorted part and move it to the beginning.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }

  return nums;
}

let nums = [5, 3, 8, 4, 2];
console.log(selectionSort(nums)); // Output: [2, 3, 4, 5, 8]
