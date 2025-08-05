const mergeSorted = (nums1, nums2, m, n) => {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - n];
  }
  return nums1.sort();
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = nums2.length;

let result = mergeSorted(nums1, nums2, m, n);

console.log(result);
