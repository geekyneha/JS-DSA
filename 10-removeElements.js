// leetcode 26
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//non-decreasing order, in-place,

const removeDuplicates = (nums) => {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }

  return x + 1, nums;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // Output: 5
console.log(nums); // Output: [0,1,2,3,4,_,
