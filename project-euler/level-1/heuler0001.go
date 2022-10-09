package main

import "fmt"

// https://projecteuler.net/problem=1

func main(){
	var sum int
	i:=3
	for i < 1000 {
		if i % 3 == 0 || i % 5 == 0{
			sum+=i
		}
		i++
	}
	fmt.Println(sum)
}