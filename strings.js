function numberGeneartor(start, end) {
  let numberArray = [];
  for (
    let i = start;
    start <= end ? i <= end : i >= end;
    i += start <= end ? 1 : -1
  ) {
    numberArray.push(i);
  }
  return numberArray;
}

// How  the array function works
let start = -4;

let end = 7;

console.log(numberGeneartor(start, end));
