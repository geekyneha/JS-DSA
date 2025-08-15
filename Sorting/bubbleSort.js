function sortBubb(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return nums;
}

let nums = [7, 4, 1, 5, 3];

console.log(sortBubb(nums));
