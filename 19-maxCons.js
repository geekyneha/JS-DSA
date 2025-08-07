const maxCons = (nums) => {
  let maxCount = 0;
  let currCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
      if (currCount > maxCount) {
        maxCount = currCount;
      }
    } else {
      currCount = 0;
    }
  }
  return maxCount;
};

let nums = [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
let result = maxCons(nums);
console.log(result);
