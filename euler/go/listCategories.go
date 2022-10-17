package main

import "fmt"

func main() {

	cats := []string{"Programación", "Bases de datos", "Machine learning", "Big data"}

	fmt.Println("Tienes cursos de:")

	for _, cat := range cats {
		fmt.Println(cat)
	}

}
