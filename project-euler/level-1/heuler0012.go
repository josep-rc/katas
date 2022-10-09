package main

import (
	"fmt"
	"math"
	"time"
)

func main() {

	start := time.Now()

	const numRequiredDivisors = 500
	triangularNum := 1
	divisors := 1

	for i := 2; divisors < numRequiredDivisors; i++ {
		divisors = numDivisors(triangularNum)
		fmt.Println(triangularNum, divisors)
		triangularNum += i
	}

	elapsed := time.Since(start)
	fmt.Printf("Execution took %s", elapsed)
}

func numDivisors(num int) int {
	if num == 1 {
		return 1
	}
	sum := 0
	numSqrt := int(math.Sqrt(float64(num))) + 1
	for i := 1; i < numSqrt; i++ {
		if num%i == 0 {
			// i
			// num / i
			sum += 2
		}
	}
	return sum
}
