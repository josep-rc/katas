package main

import (
	"fmt"
	"strconv"
)

func main() {
	var num int
	fmt.Print("Número a descomponer: ")
	fmt.Scanln(&num)
	f := 2
	r := num
	numChars := len(strconv.Itoa(num))

	for r != 1 {
		if r%f == 0 {
			r = r / f
			fmt.Printf("%*d|%d\n", numChars, r, f)

		} else {
			f = f + 1
		}
	}

	fmt.Printf("%*d|\n", numChars, 1)
}
