// https://projecteuler.net/problem=9

console.time("pe0009");
let top = 500;

for (let a = 1; a < top; a++) {
    for (let b = a + 1; b < top; b++) {
        let c = 1000 - a - b;
        if (a * a + b * b === c * c) {
            console.log(a, b, c, a * b * c);
        }
    }
}

console.timeEnd("pe0009");
