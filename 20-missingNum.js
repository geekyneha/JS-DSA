const missingNumber = (nums) => {
  // range 0-n;

  for (let i = 0; i <= nums.length; i++) {
    let found = false;

    for (let j = 0; j < nums.length; j++) {
      if (i == nums[j]) {
        found = true;
        break;
      }
    }

    if (!found) return i;
  }
};

let nums = [1, , 0, 4, 7, 8, 6, 2, 3];
let result = missingNumber(nums);
console.log(result);
