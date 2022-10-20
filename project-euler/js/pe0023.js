// A perfect number is a number for which the sum of its proper
// divisors is exactly equal to the number.
// For example, the sum of the proper divisors of
// 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors
// is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16,
// the smallest number that can be written as the sum of two
// abundant numbers is 24. By mathematical analysis,
// it can be shown that all integers greater than 28123
// can be written as the sum of two abundant numbers.
// However, this upper limit cannot be reduced any further
// by analysis even though it is known that the greatest
// number that cannot be expressed as the sum of two abundant
// numbers is less than this limit.

// Find the sum of all the positive integers which cannot be
// written as the sum of two abundant numbers.

console.time("time");

// return an array with divisors of n
function divisors(n) {
    const divs = [1];
    for (let i = 2; i < n / i + 1; i++) {
        // i and n/i are divisors
        if (n % i == 0) {
            divs.push(i);
            if (i != n / i) divs.push(n / i);
        }
    }
    return divs.sort((a, b) => a - b);
}

// return de sum of divisors of n
function sumDivisors(n) {
    const divs = divisors(n);
    let sum = 0;
    for (let i = 0; i < divs.length; i++) {
        sum += divs[i];
    }
    return sum;
}

// return abundant numbers (sum of divisors bigger than the number) until max
function findAbundantsTo(max) {
    let i = 1;
    const abundants = [];
    while (i < max) {
        if (i < sumDivisors(i)) abundants.push(i);
        i++;
    }
    return abundants;
}

// return an array with all posibles pair sums results of list
function combineSumPairs(list) {
    let sums = [];
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        for (let y = i; y < list.length; y++) {
            sum = list[i] + list[y];
            sums.push(sum);
        }
    }
    // order
    sums.sort((a, b) => a - b);
    // remove duplicates
    const noDuplicates = [];
    for (let i = 0; i < sums.length; i++) {
        if (sums[i + 1] !== sums[i]) {
            noDuplicates.push(sums[i]);
        }
    }
    return noDuplicates;
}

// return an array of missing numbers of list until max
function findMissingNumbers(list, max) {
    const missing = [];
    let index = 0;
    for (let i = 1; i <= max; i++) {
        if (i < list[index]) {
            missing.push(i);
        } else {
            index++;
        }
    }
    return missing;
}

// sum numbers of list
function sumArray(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

const abundants = findAbundantsTo(28123);
const sums = combineSumPairs(abundants);
const notInSums = findMissingNumbers(sums, 28200);
console.log(sumArray(notInSums));

console.timeEnd("time");

// 4179871
// time: 3.355s
