const mergeSortedA2 = (nums1, m, nums2, n) => {
  let n1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (n1Copy[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = n1Copy[p1++];
    } else {
      nums1[i] = nums2[p2++];
    }
  }
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = nums2.length;

let result = mergeSortedA2(nums1, nums2, m, n);

console.log(result);
