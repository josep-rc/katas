package aocutils

import (
	"fmt"
	"strconv"
)

func concatNums(a int, b int) string {
	as := strconv.Itoa(a)
	bs := strconv.Itoa(b)
	return as + bs
}

// Devuelve el primer número del string
func firstNum(str string) int {
	// recorremos los caracteres del string
	for i := 0; i < len(str); i++ {
		// obtenemos el código de caracter restandole 0(30)
		c := fmt.Sprintf("%x", str[i]-'0')
		// fmt.Printf(" %x %c", str[i], str[i])
		// convertimos el codigo al entero correspondiente
		n, err := strconv.Atoi(c)
		if err != nil {
			continue // si no es un número seguimos
		}
		// Si es menor de 10 significa q el código es de un número
		if n < 10 {
			// fmt.Printf("(%d)", n)
			return n
		}
	}
	return 0
}

func lastNum(str string) int {
	// recorremos los caracteres de atras para delante
	for i := len(str); i > 0; i-- {
		// obtenemos el código de caracter restandole 0(30)
		c := fmt.Sprintf("%x", str[i-1]-'0')
		// convertimos el codigo al entero correspondiente
		n, err := strconv.Atoi(c)
		if err != nil {
			continue // si no es un numero seguimos
		}
		// Si es menor de 10 significa q el código es de un número
		if n < 10 {
			// fmt.Printf("(%d)", n)
			return n
		}
	}
	return 0
}
