import isPrime from "./prime_number.js";

function isComposite(num) {
  if (num <= 3) return false;

  return !isPrime(num)
}

isComposite(2)
