// By listing the first six prime numbers: 
// 2, 3, 5, 7, 11, and 13, 
// we can see that the 6th prime is 13.

// What is the 10 001st prime number

let counter = 1
let primeNum = 1
while(counter<=10001) {
    primeNum++
    if(isPrime(primeNum)) counter++
}

console.log(counter-1) // 10001
console.log(primeNum)  // 104743

function isPrime(num){
    for (let i = 2; i < num; i++) {
        if(num%i===0) return false 
    }
    return true
}
