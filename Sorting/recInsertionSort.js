function recInsertionSort(nums, n) {
  if (n == nums.length) return nums;

  let curr = nums[n];
  let prev = n - 1;

  while (prev >= 0 && nums[prev] > curr) {
    nums[prev + 1] = nums[prev];
    prev--;
  }
  nums[prev + 1] = curr;

  return recInsertionSort(nums, n + 1);
}
let nums = [1, 2, 8, 5, 3, 4, 2, 1, 4, 3];
let n = 1;
let result = recInsertionSort(nums, n);
console.log(result);
