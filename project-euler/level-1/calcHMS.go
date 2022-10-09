package main

import "fmt"

/*
escribe un programa al que le indiques una cantidad de días y
como resultado deberá mostrar cuantas horas,
minutos y segundos hay en dicha cantidad de días.
*/

func main() {
	var days, hours, minutes, seconds int
	fmt.Print("Número de dias: ")
	fmt.Scanln(&days)

	hours = days * 24
	minutes = hours * 60
	seconds = minutes * 60

	fmt.Printf("%d days: %d hours, %d minutes or %d seconds", days, hours, minutes, seconds)
}
