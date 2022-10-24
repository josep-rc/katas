"use strict";
console.time("executionTime: ");

// 2520 is the smallest number that can be divided by
// each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

let i = 2520; // divisible by 1,2,3,4,5,6,7,8,9,10,20

while (true) {
    if (
        i % 19 === 0 &&
        i % 18 === 0 &&
        i % 17 === 0 &&
        i % 16 === 0 &&
        i % 15 === 0 &&
        i % 14 === 0 &&
        i % 13 === 0 &&
        i % 12 === 0 &&
        i % 11 === 0
    ) {
        break;
    }
    i += 2520;
}

console.log(i);

console.timeEnd("executionTime: ");
