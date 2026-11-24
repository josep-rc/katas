const primes = [2, 3];
const limit = 2_000_000;
let candidate = 5;
let isPrime = true;
console.time("pe0010");

while (candidate < limit) {
  isPrime = true;

  // isPrime serà false en el moment que trobem un divisor, i true si no en trobem cap
  isPrime = primes.every((prime) => candidate % prime !== 0);

  if (isPrime) primes.push(candidate);
  candidate += 2;
}

// sumem tots els primers
const sum = primes.reduce((sum, prime) => sum + prime,0)
console.log(sum);

console.timeEnd("pe0010");
