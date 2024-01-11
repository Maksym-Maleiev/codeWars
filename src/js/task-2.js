// task -2

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
makeNegative(42);   // return -42

function makeNegative(num) {
  const number = Number(num);
  if (number > 0) {
    return number * (-1);
  } else {
    return number;
  }
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
console.log(makeNegative(42));

