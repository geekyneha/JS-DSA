// leetcode 136;

const singleNumber = (nums) => {
  let hash = {};
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
};
let nums = [1, 2, 3, 4, 1, 2, 3, 4, 5];
let result = singleNumber(nums);

console.log(result);
