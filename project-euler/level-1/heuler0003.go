package main

import "fmt"

// https://projecteuler.net/problem=3

func main() {
	num := 600851475143
	f := 2
	r := num

	for r != 1 {
		if r%f == 0 {
			r = r / f
		} else {
			f = f + 1
		}
	}

	fmt.Println(f)

}
