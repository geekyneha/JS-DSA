const revString = (str) => {
  let len = str.length;
  let half = Math.floor(len / 2);

  for (let i = 0; i < half; i++) {
    let temp = str[len - 1 - i];
    str[len - i - 1] = str[i];
    str[i] = temp;
  }
  return str;
};

let str = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
let result = console.log(revString(str));
