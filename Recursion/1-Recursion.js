const recursion = (num) => {
  if (num == 0) return;

  console.log(num);
  num -= 1;
  recursion(num);
};

let num = 10;
recursion(num);
