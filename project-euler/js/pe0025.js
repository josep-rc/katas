// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

console.time("test");
// 98 -> 21
console.log(fibonacciDigits(4782));
console.log(fibonacciIndex(1000));

console.timeEnd("test");

// returns number of digits in fibonacci number with index
function fibonacciDigits(index) {
    if (index < 2) return 1;
    const l = (1 + 5 ** 0.5) / 2;
    return Math.floor(index * Math.log10(l) - Math.log10(5) / 2) + 1;
}

// returns index of first fibonacci number with digits
function fibonacciIndex(digits) {
    if (digits < 2) return 1;
    const l = (1 + 5 ** 0.5) / 2;
    return Math.ceil((digits + Math.log10(5) / 2 - 1) / Math.log10(l));
}
