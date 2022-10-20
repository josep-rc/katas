"use strict";
console.time("executionTime: ");

// A palindromic number reads the same both ways.
// The largest palindrome made from the product
// of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product
// of two 3-digit numbers.

const init = 999;
let num1 = init;
let num2 = init;
let result = 0;
let big = 0;

while (num1 > 99) {
    while (num2 > 99) {
        result = num1 * num2;
        if (isPalindrome(result)) {
            if (result > big) big = result;
        }
        num2--;
    }
    num2 = init;
    num1--;
}
console.log(big);

console.timeEnd("executionTime: ");

// returns true if the number num is palindrome (99099)
function isPalindrome(num) {
    let strNum = num.toString(),
        len = strNum.length,
        first = strNum.slice(0, len / 2),
        last = strNum.slice(-(len / 2));
    last = last.split("").reverse().join("");
    if (first === last) return true;
    return false;
}
