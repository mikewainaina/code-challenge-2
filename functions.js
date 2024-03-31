function swapCase(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    // Get the current character
    let char = inputString[i];
    // If the character is uppercase, convert it to lowercase
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    }
    // If the character is lowercase, convert it to uppercase
    else {
      result += char.toUpperCase();
    }
  }
  // Return the result
  return result;
}

let inputString = "The Quick Brown Fox";
let outputString = swapCase(inputString);
console.log(outputString);
