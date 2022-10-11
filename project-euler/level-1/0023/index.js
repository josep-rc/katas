console.time("time")



function divisors(n){
    const divs=[1]
    for (let i = 2; i < (n/i)+1; i++) {
        // i and n/i are divisors
        if(n%i==0) {
            divs.push(i)
            if(i!=(n/i)) divs.push(n/i)
        }
    }
    return divs
    // return divs.sort((a,b)=>a-b)
}

function sumDivisors(n){
    const divs = divisors(n)
    let sum = 0
    for (let i = 0; i < divs.length; i++) {
        sum+=divs[i]
    }
    return sum
}


let double=0
let i=1
let sumNotDoubleAbundants = 0
while (i<28200) { // 28123
    if(i<sumDivisors(i)){
        // es abundante
        double=i*2
        console.log(i, double)
    }else{
        console.log(i)
        sumNotDoubleAbundants+=i
    }
    i++
}

console.log(sumNotDoubleAbundants)


console.timeEnd("time")