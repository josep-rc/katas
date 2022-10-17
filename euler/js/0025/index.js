
console.time("test")
// 98 -> 21
console.log(fibonacciDigits(4782))  
console.log(fibonacciIndex(1000))

console.timeEnd("test")   

// returns number of digits in fibonacci number with index
function fibonacciDigits(index){
  if(index<2) return 1
  const l = (1+5**0.5)/2
  return Math.floor(index*Math.log10(l)-Math.log10(5)/2)+1
}

// returns index of first fibonacci number with digits
function fibonacciIndex(digits){
  if(digits<2) return 1
  const l = (1+5**0.5)/2
  return Math.ceil((digits + Math.log10(5)/2 -1)/Math.log10(l))
}