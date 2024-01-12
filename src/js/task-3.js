const string = 'JavaScript';

function removeCharacter() {
  // const array = string.split('');

  // const first = array.splice(0, 1);
  // const last = array.splice(0, array.length -1); 
}

let array = string.split('');
console.log(array);

const first = array.splice(0, 1);
console.log(first);

const last = array.splice(array.length - 1, 1);
console.log(last);

array.join('');
console.log(array);
