package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()

	for i := 2; i < 100000; i++ {
		if esPrimo(i) {
			fmt.Println(i)
		}
	}

	elapsed := time.Since(start)
	fmt.Printf("Execution took %s", elapsed)
}

func esPrimo(num int) bool {
	for i := 2; i < num; i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}
