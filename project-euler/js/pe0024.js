// https://www.geeksforgeeks.org/find-the-n-th-lexicographic-permutation-of-string-using-factoradic-method/
// JavaScript program to find the N-th lexicographic
// permutation of string using Factoradic method

// A permutation is an ordered arrangement of objects. For example, 3124 is one
// possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
// are listed numerically or alphabetically, we call it lexicographic order.
// The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the
// digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

// Function to calculate nth permutation of string
function string_permutation(n, str) {
    // Creating an empty stack
    let s = [];
    let result = "";

    // Subtracting 1 from N because the
    // permutations start from 0 in
    // Factoradic method
    n = n - 1;

    // Loop to generate the factroid
    // of the sequence
    for (let i = 1; i < str.length + 1; i++) {
        s.push(n % i);
        n = Math.floor(n / i);
    }

    // Loop to generate nth permutation
    let len = str.length;
    for (let i = 0; i < len; i++) {
        let a = s[s.length - 1];
        result += str[a];
        let j;

        // Remove 1-element in each cycle
        for (j = a; j < str.length; j++)
            str =
                str.substring(0, j) + str.charAt(j + 1) + str.substring(j + 1);

        str = str.substring(0, j + 1);

        s.pop();
    }

    // Final answer
    console.log(result);
}

// Driver code
let str = "0123456789";
n = 1000000;

string_permutation(n, str);
