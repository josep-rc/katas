package main

import "fmt"

func main() {
	firstMonthDay := 2 // 1 - lunes (2 for 1-1-1901)
	monthDays := 0
	numSundays := 0
	for year := 1901; year < 2001; year++ {
		for month := 1; month < 13; month++ {
			if firstMonthDay == 7 {
				numSundays++
			}
			monthDays = numDiasMes(month, year)
			// fmt.Println(month, year, monthDays, firstMonthDay)
			firstMonthDay = firstMonthDay + monthDays%7
			if firstMonthDay > 7 {
				firstMonthDay -= 7
			}
		}
	}
	fmt.Println(numSundays)
}

func numDiasMes(month int, year int) int {
	switch month {
	case 1, 3, 5, 7, 8, 10, 12:
		return 31
	case 4, 6, 9, 11:
		return 30
	default:
		if year%4 == 0 && (year%100 != 0 || year%400 == 0) {
			return 29
		}
		return 28
	}
}
