package main

import (
	"fmt"
	"math"
)

func main() {

	a, b, c := 0, 0, 0

	for i := 1; i < 100; i++ {
		for j := 2; j < 100; j++ {
			a, b, c = calcTriplet(i, j)
			if a > 0 && b > 0 && a+b+c == 1000 {
				fmt.Printf("%d+%d+%d=%d, p=%d,q=%d\n", a, b, c, a+b+c, i, j)
				fmt.Printf("Product a*b*c= %d", a*b*c)
			}
		}
	}

}

func calcTriplet(p, q int) (int, int, int) {

	a := 2 * p * q
	b := int(math.Pow(float64(p), 2) - math.Pow(float64(q), 2))
	c := int(math.Pow(float64(p), 2) + math.Pow(float64(q), 2))

	return a, b, c

}
