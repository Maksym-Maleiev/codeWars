// task -2

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
makeNegative(42);   // return -42

function makeNegative(num) {
  if (num > 0) {
    console.log(`-${num}`);
  } else if (num === 0) {
    console.log(num);
  } else {
    console.log(num);
  }

  return num;
}
