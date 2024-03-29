// task-1

function highAndLow(string) {
  const numbers = string.split(' ');

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return `${max}, ${min}`;
}


console.log(highAndLow('1 2 3 4 5')); // return '5 1'
console.log(highAndLow('1 2 -3 4 5')); // return '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // return '9 -5'