import input from "./input-data.txt";

export function day10part1() {

    console.log("day 10 part 1")

    let data = input.split("\n")

    // array with
    let w = data[0].length - 1
    // array height
    let h = data.length - 1

    // encontramos las coordenada de S
    let c = findS(data)
    // cp = current position
    let cp =
    {
        x: c[0],
        y: c[1]
    }

    let fd = '' // from direction N S E O

    // buscamos por donde inicia el camino a partir de S
    if (cp.x > 0 && ['-', 'L', 'F'].includes(data[cp.x - 1][cp.y])) {
        cp.x--
        fd = 'E'
    } else if (cp.x < w && ['-', 'J', '7'].includes(data[cp.x + 1][cp.y])) {
        cp.x++
        fd = 'O'
    } else if (cp.y > 0 && ['|', 'F', '7'].includes(data[cp.x][cp.y - 1])) {
        cp.y--
        fd = 'S'
    } else if (cp.x < h && ['|', 'J', 'L'].includes(data[cp.x][cp.y + 1])) {
        cp.y++
        fd = 'N'
    }

    let symbol = data[cp.y][cp.x] // Símbolo en la posición actual
    let steps = 1 // Pasos hasta volver a S

    do {
        if (symbol === 'L' && fd === 'N') {
            cp.x++
            fd = 'O'
        } else if (symbol === 'L' && fd === 'E') {
            cp.y--
            fd = 'S'
        } else if (symbol === 'F' && fd === 'S') {
            cp.x++
            fd = 'O'
        } else if (symbol === 'F' && fd === 'E') {
            cp.y++
            fd = 'N'
        } else if (symbol === 'J' && fd === 'N') {
            cp.x--
            fd = 'E'
        } else if (symbol === 'J' && fd === 'O') {
            cp.y--
            fd = 'S'
        } else if (symbol === '7' && fd === 'S') {
            cp.x--
            fd = 'E'
        } else if (symbol === '7' && fd === 'O') {
            cp.y++
            fd = 'N'
        } else if (symbol === '-' && fd === 'E') {
            cp.x--
            fd = 'E'
        } else if (symbol === '-' && fd === 'O') {
            cp.x++
            fd = 'O'
        } else if (symbol === '|' && fd === 'N') {
            cp.y++
            fd = 'N'
        } else if (symbol === '|' && fd === 'S') {
            cp.y--
            fd = 'S'
        } else {
            console.log("Something went wrong!!")
        }
        symbol = data[cp.y][cp.x]
        steps++
        console.log(symbol, steps)

    } while (symbol !== 'S')
    console.log(steps / 2)
}

function findS(data) {
    let w = data[0].length - 1
    let h = data.length - 1
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (data[i][j] == 'S') return [j, i]
        }
    }
}