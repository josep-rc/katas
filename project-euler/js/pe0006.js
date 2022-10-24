"use strict";
console.time("executionTime: ");

// The sum of the squares of the first ten natural numbers is,

// 1^2+2^2+...+10^2 = 385

// The square of the sum of the first ten natural numbers is,

// (1+2+3+...+10)^2=55^2=3025

// Hence the difference between the sum of the squares of the
// first ten natural numbers and the square of the sum is

// 3025 - 385 = 2640

// Find the difference between the sum of the squares of
// the first one hundred natural numbers and the square of
// the sum.

const to = 100;
let sumSq = 0;
let sqSum = 0;

for (let i = 1; i <= to; i++) {
    sumSq += Math.pow(i, 2);
    sqSum += i;
}

sqSum = Math.pow(sqSum, 2);

console.log(`${sqSum} - ${sumSq} = ${sqSum - sumSq}`);

// Second way
// Using the fact that the square of the sum is equal to the sum of cubes, i.e.:
// (1 + 2 + ... + n)^2 = 1^3 + 2^3 ... + n^3

let sum = 0;
for (let i = 1; i <= to; i++) {
    sum += Math.pow(i, 3) - Math.pow(i, 2);
}
console.log(sum);

console.timeEnd("executionTime: ");
