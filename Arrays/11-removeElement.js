const removeElement = (nums, val) => {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
};

let nums = [3, 2, 2, 3];
let val = 3;
let result = removeElement(nums, val);
console.log(result); // Output: 2
