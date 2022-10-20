package main

import "fmt"

// https://projecteuler.net/problem=2

func main(){
	sumTotal := 2 // 1,2 not included in for
	sum := 0
	current := 2
	prev := 1
	
	for current < 4000000 {
		sum = prev + current
		// fmt.Println(sum)
		if sum % 2 == 0 {
			sumTotal += sum
		}
		prev = current
		current = sum
	}
	fmt.Println(sumTotal)
}