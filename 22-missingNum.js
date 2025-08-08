const missingNum = (nums) => {
  // O(nlogn)
  nums = nums.sort();

  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
};

let nums = [0, 1, 2, 3, 4, 5];
let result = missingNum(nums);
console.log(result);
