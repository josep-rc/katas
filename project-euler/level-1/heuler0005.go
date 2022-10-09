package main

import "fmt"

func main() {

	// 10 (5,2)
	// 20 (5,2,10)

	i := 2520 // (1,2,3,4,5,6,7,8,9,10,20)

	for {
		if i%19 == 0 && i%18 == 0 && i%17 == 0 && i%16 == 0 && i%15 == 0 && i%14 == 0 && i%13 == 0 && i%12 == 0 && i%11 == 0 {
			break
		}
		i += 2520
	}

	fmt.Println(i) // 232792560, 20*19*18*17*14*13*11

	// second way

	i = 2520
	s := []int{19, 18, 17, 16, 15, 14, 13, 12, 11}
	found := false
	for {

		for _, v := range s {
			// fmt.Println(i, v, i%v)
			if i%v != 0 {
				break
			}
			// if we have gone through all the elements of s
			if v == s[len(s)-1] {
				found = true
			}
		}

		if found {
			fmt.Println(i)
			break
		}

		i += 2520
	}
}
