const missingNum = (nums) => {
  // O(nlogn)
  nums = nums.sort();

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i + 1] !== nums[i] + 1) {
      return nums[i] + 1;
    }
  }
};

let nums = [0, 1, 2, 3, 4, 5, 7];
let result = missingNum(nums);
console.log(result);
