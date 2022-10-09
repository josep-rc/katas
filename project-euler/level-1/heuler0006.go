package main

import (
	"fmt"
	"math"
)

func main() {
	to := 100.0
	sumSq := 0.0
	sqSum := 0.0
	for i := 1.0; i <= to; i++ {
		sumSq += math.Pow(i, 2)
		sqSum += i
	}

	sqSum = math.Pow(sqSum, 2)

	fmt.Printf("%d - %d = %d\n", int(sqSum), int(sumSq), int(sqSum-sumSq))

	// Second way
	// Using the fact that the square of the sum is equal to the sum of cubes, i.e.:
	// (1 + 2 + ... + n)^2 = 1^3 + 2^3 ... + n^3

	sum := 0.0
	for i := 1.0; i <= to; i++ {
		sum += math.Pow(i, 3) - math.Pow(i, 2)
	}
	fmt.Println(int(sum))
}
