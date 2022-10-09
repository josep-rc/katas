// return de sum of proper divisors
function d(n){
    let sum = 1
    for (let i = 2; i < (n/i)+1; i++) {
        // i and n/i are divisors
        if(n%i==0) sum+=i+n/i
    }
    return sum
}

console.time("time")

let amicablesSum = 0
let a = 0
for (let i = 1; i < 10_000; i++) {
    a=d(i)
    if(a!==i && i===d(a)) {
        amicablesSum+=i
    }
}

console.log(amicablesSum)

console.timeEnd("time")

function divisors(n){
    const divs=[]
    for (let i = 2; i < (n/i)+1; i++) {
        // i and n/i are divisors
        if(n%i==0) {
            divs.push(i)
            divs.push(n/i)
        }
    }
    return divs.sort((a,b)=>a-b)
}

console.log(divisors(120))