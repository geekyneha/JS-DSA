function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let arr = [4, 1, 2, 0, 3];
let target = 0;

console.log(linearSearch(arr, target));
