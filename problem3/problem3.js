var largestPrimeFactor = number => {
  let largestPrime = 1, prime = 2;
  while (prime <= number) {
    if (isPrime(number, prime)) {
      largestPrime = prime;
      number = number / prime;
    } else {
      prime++;
    }
  }
  return largestPrime;
}

var isPrime = (number, candidate) => {
  return (number % candidate == 0)
}

largestPrimeFactor(600851475143);
