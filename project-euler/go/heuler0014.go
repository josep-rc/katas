package main

import "fmt"

func main() {

	top := 1_000_000
	maxSequenceLenght := 1
	m := 1
	n := 1
	for i := 1; i < top; i++ {
		m = countSequence(i)
		if m > maxSequenceLenght {
			maxSequenceLenght = m
			n = i
		}
	}
	fmt.Println(n)
	fmt.Println(maxSequenceLenght)

}

func printSequence(start int) {
	for i := start; i > 1; {
		fmt.Printf("%d->", i)
		if i%2 == 0 {
			i = i / 2
		} else {
			i = i*3 + 1
		}
	}
	fmt.Println(1)
}

func countSequence(start int) int {
	c := 0
	for i := start; i > 1; {
		if i%2 == 0 {
			i = i / 2
		} else {
			i = i*3 + 1
		}
		c++
	}
	return c + 1
}
