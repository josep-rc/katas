package main

import (
	"fmt"
	"math/big"
	"strconv"
	"strings"
)

func main() {

	x := new(big.Int)
	x.MulRange(1, 100)
	fmt.Println(x)

	strnum := x.Text(10)
	s := strings.Split(strnum, "")

	sum := 0
	n := 0
	for _, v := range s {
		n, _ = strconv.Atoi(v)
		sum += n
	}

	fmt.Println(sum)
}
