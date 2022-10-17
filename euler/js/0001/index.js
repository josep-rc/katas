"use strict"

console.time("test")

let sum = 0

for (var i = 3; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i
}

console.log(sum)

console.timeEnd("test")

