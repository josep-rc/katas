package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()

	sum := 0
	num := 2_000_000
	prime := eratosthenesRiddle(num)

	for i := 2; i <= num; i++ {
		// fmt.Printf("%d: %t\n", i, prime[i])
		if prime[i] == true {
			sum += i
		}
	}
	fmt.Printf("the sum of all the primes below %d: %d\n", num, sum)

	elapsed := time.Since(start)
	fmt.Printf("Execution took %s", elapsed)
}

// Return slice with key numbers and bool values true if the key number is prime
func eratosthenesRiddle(upTo int) []bool {
	// an array of boolean - the idiomatic way
	prime := make([]bool, upTo+1)

	// initialize everything with true first
	for i := 0; i < upTo+1; i++ {
		prime[i] = true
	}

	for i := 2; i*i <= upTo; i++ {
		if prime[i] == true {
			for j := i * 2; j <= upTo; j += i {
				prime[j] = false // cross
			}
		}
	}

	return prime

}
