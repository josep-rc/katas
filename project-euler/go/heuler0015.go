package main

import "fmt"

func main() {
	// https://www.educative.io/edpresso/what-are-lattice-paths
	fmt.Println(paths(20))
}

func paths(n int) int {
	j := 1
	for i := 1; i <= n; i++ {
		j = j * (n + i) / i
	}
	return j
}
