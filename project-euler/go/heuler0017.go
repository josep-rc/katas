package main

import (
	"fmt"
	"time"
)

func main() {

	start := time.Now()

	sum := 0
	//charsCounter := 0
	numChars := get1000NumChars()

	for i := 1; i <= 1000; i++ {
		sum += numChars[i]
		//fmt.Printf("%d chars in number %d\n", charsCounter, i)
	}

	fmt.Println(sum)

	elapsed := time.Since(start)
	fmt.Printf("Execution took %s\n", elapsed)
}

func get1000NumChars() map[int]int {
	numChars := map[int]int{
		0: 0, 1: 3, 2: 3, 3: 5, 4: 4, 5: 4, 6: 3, 7: 5, 8: 5, 9: 4, 10: 3,
		11: 6, 12: 6, 13: 8, 14: 8, 15: 7, 16: 7, 17: 9, 18: 8, 19: 8, 20: 6,
		30: 6, 40: 5, 50: 5, 60: 5, 70: 7, 80: 6, 90: 6, 1000: 11,
	}
	hundred := 7

	// fill 21 to 99
	for j := 20; j <= 100; j += 10 {
		for i := j + 1; i < j+10; i++ {
			numChars[i] = numChars[j] + numChars[i-j]
		}
	}

	// 100 to 999
	for j := 1; j < 10; j++ {
		for i := (j * 100); i < (j+1)*100; i++ {
			if i%100 == 0 {
				hundred = 7 // hundred
			} else {
				hundred = 10 // hundred and
			}
			numChars[i] = numChars[j] + hundred + numChars[i-(j*100)]
		}
	}

	return numChars
}
