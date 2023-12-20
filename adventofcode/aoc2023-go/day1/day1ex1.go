package day1

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
  "josep-rc/aoc2023/aocutils"
)

func Day1ex1() {

	readFile, err := os.Open("data-ex.txt")

	if err != nil {
		fmt.Println(err)
	}
	fileScanner := bufio.NewScanner(readFile)

	fileScanner.Split(bufio.ScanLines)

	l := ""
	var sum int64 = 0
	// Por cada linea
	for fileScanner.Scan() {
		l = fileScanner.Text()
		fn := aocutils.firstNum(l)
		ln := aocutils.lastNum(l)
		s := aocutils.concatNums(fn, ln)
		r, _ := strconv.ParseInt(s, 10, 32)
		sum += r
		fmt.Println(l, fn, ln, s, r)
	}

	readFile.Close()
	fmt.Println(sum)
}
