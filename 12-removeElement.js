const removeElement = (nums, val) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] == val) {
      if (nums[end] !== val) {
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        end--;
      } else {
        end--;
      }
    } else {
      start++;
    }
  }
  return start;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let result = console.log(removeElement(nums, val));
console.log(nums); // Output: [2, 2, 3, 3]
