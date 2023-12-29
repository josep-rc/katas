import input from "./input-data.txt";

/*

012345678
---------
....*.... x=4
.444..... i=1 l=3 i + l = x
..444.... i=2 l=3 i + l = x + 1
...444... i=3 l=3 i = x-1
....444.. i=4 l=3 i = x
.....444. i=5 l=3 i = x+1

*/

// 114986872 is too high
// 73922171 is too high


export function day3part2() {
    console.log("day 3 part 2");
    let data = input.split("\n");
    const w = data[0].length
    const h = data.length

    let sum = 0

    // recorremos filas
    for (let y = 0; y < h; y++) {
        // y columnas
        for (let x = 0; x < w; x++) {
            const e = data[y][x];
            // si encontramos un símbolo
            if (e.match(/[^.\d\n]/)) {
                // around numbers
                let an: number[] = []
                // busquem numero a la fila superior (si n'hi ha)
                if (y > 0) {
                    an = [...an, ...findNumbersAround(x, data[y - 1])]
                    // console.log(an)

                }
                // busquem número a la fila inferior
                if (y < h - 1) {
                    an = [...an, ...findNumbersAround(x, data[y + 1])]

                    // console.log(x, findNumbersAround(x, data[y + 1]))

                }
                // busquem a la mateixa línea números al costat del símbol
                an = [...an, ...findNumbersAround(x, data[y])]

                if (an.length > 1) {
                    console.log(y, e, an)
                    sum += multiplyArray(an)
                }
            }
        }
    }
    console.log(sum)

}

export function findNumbersAround(refPos: number, line: string) {
    let around: number[] = []
    let num = line.match(/\d+/g)
    //console.log(num)
    if (num && refPos < line.length) {
        let i = 0
        num.forEach(n => {
            let l = n.length
            i = line.indexOf(n, i)
            //console.log(`refPos:${refPos}, num: ${n}, pos: ${i}`)
            if ((i >= refPos - 1 && i <= refPos + 1) || (i + l == refPos || i + l == refPos + 1)) {
                around.push(parseInt(n))
            }
            // avanzamos la posición de búsqueda
            i += l
        })
    }
    return around
}

export function multiplyArray(numbersArray: number[]): number {
    return numbersArray.reduce((a, b) => a * b, 1)
}