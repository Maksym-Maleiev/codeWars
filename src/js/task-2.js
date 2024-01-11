// task -2

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
makeNegative(42);   // return -42

function makeNegative(num) {
  const number = Number(num);
  if (number > 0) {
    console.log(-1 * number);
  } else if (number <= 0) {
    console.log(number);
  } else {
    console.log(number);
  }

  return number;
}


// function makeNegative(num) {
//   const number = Number(num);
  
//   number > 0 ? -(1 * number) : number;

//   return number;
// }