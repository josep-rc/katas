"use strict"

console.time("test")

let total = 2,
    sum = 0,
    current = 2,
    prev = 1

while (current < 4_000_000) {
    sum = prev + current
    if (sum % 2 === 0) {
        total += sum
    }
    prev = current
    current = sum
}
console.log(total)

console.timeEnd("test")
