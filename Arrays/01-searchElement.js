// Search for an element in an array and return its index
// or -1 if not found.

const search = (target, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

let arr = [1, 2, 34, 5, 6, 7, 8];
const result = search(6, arr);

console.log(result);
