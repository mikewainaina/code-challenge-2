// This function checks if a given number is prime
function checkNumber(num) {
    // If the number is less than or equal to 1, it is not prime
    if (num <= 1) {
      return false;
    }
    // If the number is 2, it is prime
    if (num == 2) {
      return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by any of these, it is not prime
      if (num % i == 0) {
        return false;
      }
    }
    // If no divisors were found, the number is prime
    return true;
  }
  
  // This function takes an array of numbers and returns an array of prime numbers
  function getPrimes(array) {
    // Initialize an empty array to store the prime numbers
    let primes = [];
    // Loop through the input array
    for (let j = 0; j < array.length; j++) {
      // Check if each number is prime
      if (checkNumber(array[j])) {
        // If it is, add it to the array of primes
        primes.push(array[j]);
      }
    }
    // Return the array of primes
    return primes;
  }
  
  // Test the functions
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primeNums = getPrimes(nums);
  console.log(primeNums);
  