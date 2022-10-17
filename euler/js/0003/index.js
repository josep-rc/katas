"use strict";
console.time("executionTime: ");

function largestPrimeFactor(num) {
  let f = 2,
    r = num;

  while (r != 1) {
    r % f == 0 ? (r = r / f) : (f = f + 1);
  }

  return f;
}

console.log(largestPrimeFactor(600851475143));

console.timeEnd("executionTime: ");
