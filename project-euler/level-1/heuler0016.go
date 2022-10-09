package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

// https://projecteuler.net/problem=16

func main() {

	r := math.Pow(2, 1000)
	s := fmt.Sprintf("%f", r)
	as := strings.Split(s, "")
	sum := 0
	each := 0
	for _, v := range as {
		if v == "." {
			break
		}
		each, _ = strconv.Atoi(v)
		fmt.Print(each)
		sum += each
	}
	fmt.Println()
	fmt.Println(sum)

}
