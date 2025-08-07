const MissingNumber = (nums) => {
  let n = nums.length;

  let sum1 = (n * (n + 1)) / 2;

  let sum2 = nums.reduce((curr, acc) => curr + acc, 0);

  return sum1 - sum2;
};

let nums = [0, 1, 2, 3, 5, 6, 8, 9, 4, 10];
const result = MissingNumber(nums);

console.log(result);
