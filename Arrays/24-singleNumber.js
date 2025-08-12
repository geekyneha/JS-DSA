// leetcode 136;

const singleNumber = (nums) => {
  let xor = 0;

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    xor ^= nums[i];
  }

  return xor;
};
let nums = [1, 2, 3, 4, 1, 2, 3, 4, 5];
let result = singleNumber(nums);

console.log(result);
