import input from "./input-data.txt";

export function day3part1() {
    console.log("day 3 part 1");
    let data = input.split("\n");
    const w = data[0].length
    const h = data.length
    let sum = 0
    for (let y = 0; y < h; y++) {
        let x = 0 // reiniciamos posición horizontal
        while (x < w) {
            const next = data[y].substring(x).search((/\d+/))
            // si hay mas números en la fila
            if (next != -1) {
                x += next
                // guardamos la posicion inicial del número
                let posInit = x
                let posFin = 0
                // buscamos la posicion final del número
                for (x++; x < w; x++) {
                    if (!data[y][x].match((/\d/))) {
                        posFin = x
                        break
                    }
                }
                if (posFin == 0) posFin = w
                console.log(data[y].substring(posInit, posFin), y, posInit, posFin)
                x++
                if (checkSymbolAround(data, y, posInit, posFin)) {
                    const num = parseInt(data[y].substring(posInit, posFin))
                    if (num) sum += num
                    console.log("Aceptado: ", num, "Suma parcial: ", sum)
                }
            } else {
                break // si no hay mas números pasamos a la siguiente línea
            }
        }
    }

    console.log(sum)
}

function checkSymbolAround(matrix: string[], fila: number, posInit: number, posFin: number) {
    let nb: string[] = []
    const w = matrix[0].length
    // si no es la fila superior añadimos los adyacentes superiores
    let pi = posInit == 0 ? 0 : posInit - 1
    let pf = posFin == w ? w : posFin + 1
    // fila superior
    if (fila != 0) {
        nb = [...nb, ...matrix[fila - 1].substring(pi, pf)]
    }
    // fila inferior
    if (fila < matrix.length - 1) {
        nb = [...nb, ...matrix[fila + 1].substring(pi, pf)]
    }
    // console.log(nb)

    // carácter de delante
    if (pi > 0) nb.push(matrix[fila][pi])
    // caràcter de detrás
    if (pf < w) nb.push(matrix[fila][pf - 1])

    console.log(nb, pi, pf)
    // si nb tiene algun carácter diferente del punto
    // devolvemos true
    if (nb.find((e) => !e.match((/[\d.]/)))) return true
    return false
}
