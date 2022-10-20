package main

import (
	"fmt"
	"strconv"
)

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit
// numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// 100*100 = 10000
// 999*999 = 998001
// result = 906609
func main() {

	init := 999

	num1 := init
	num2 := init
	result := 0
	big := 0

	for num1 > 99 {
		for num2 > 99 {
			result = num1 * num2
			if isPalindrome(result) {
				if result > big {
					big = result
				}
			}
			num2--
		}
		num2 = init
		num1--
	}
	fmt.Println(big)

}

func isPalindrome(num int) bool {
	strNumber := strconv.Itoa(num)
	chars := []rune(strNumber)
	l := len(chars)
	if chars[0] == chars[l-1] {
		if chars[1] == chars[len(chars)-2] {
			if chars[2] == chars[len(chars)-3] {
				return true
			}
		}
	}
	return false
}
