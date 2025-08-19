let pos = 0;
function recSelectionSort(nums, n) {
  if (n == nums.length) return nums;

  let smallest = pos;
  for (let i = pos; i < nums.length; i++) {
    if (smallest > nums[i]) {
      smallest = i;
    }
  }

  let temp = nums[pos];
  nums[pos] = nums[smallest];
  nums[smallest] = temp;

  return recSelectionSort(nums, n + 1);
}
let nums = [7, 1, 5, 4, 3, 2];
let n = 0;
let result = recSelectionSort(nums, n);
console.log(result);
