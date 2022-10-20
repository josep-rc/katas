"use strict";
console.time("executionTime: ");

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// num = 2730
//   r  | f
// 2730 | 2
// 1365 | 3
//  455 | 5
//   91 | 7
//   13 | 13 <- return this
//    1 |
function largestPrimeFactor(num) {
    let f = 2,
        r = num;

    while (r != 1) {
        r % f == 0 ? (r = r / f) : (f = f + 1);
    }

    return f;
}

console.log(largestPrimeFactor(600851475143)); // 6857
console.timeEnd("executionTime: ");
