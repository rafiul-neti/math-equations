/*
To check if two numbers are coprime (relatively prime), we need to find their Greatest Common Divisor (GCD). If their GCD is 1, they are coprime. The most efficient way to find the GCD is the Euclidean Algorithm.
*/

function gcd(num_a, num_b) {
  while (num_b !== 0) {
    const temp = num_b;
    num_b = num_a % num_b;
    num_a = temp;
  }

  return num_a;
}

// function to check if two numbers are coprime
function areCoprime(num_c, num_d) {
  return gcd(num_c, num_d) === 1;
}

console.log(areCoprime(7, 11));
