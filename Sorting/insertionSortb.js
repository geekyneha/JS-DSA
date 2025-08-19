function insertionSort(nums) {
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    let curr = nums[i];
    let prev = i - 1;

    while (prev >= 0 && nums[prev] > curr) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = curr;
  }

  return nums;
}

let nums = [10, 7, 8, 9, 1, 5];
let result = insertionSort(nums);
console.log(result);
