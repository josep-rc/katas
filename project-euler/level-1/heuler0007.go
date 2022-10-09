package main

import "fmt"

func main() {
	n, c, i := 10001, 0, 1
	for c < n {
		i++
		if esPrimo(i) {
			c++
		}
	}
	fmt.Println(c, i) // 10001 104743
}

func esPrimo(num int) bool {
	for i := 2; i < num; i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}
