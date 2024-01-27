import input from "./input-data.txt";

export function day9part1() {

    console.log("day 9 part 1")

    let data = input.split("\n");

    // iteramos hasta conseguir todo 0s, guardando los últimos números de cada fila

    let sumAllLast = 0

    data.forEach(line => {
        let lastsNumber = []
        let currentLine = []
        let nextLine = []
        currentLine = line.match(/(-)?\d+/g).map(e => {
            return parseInt(e)
        })
        lastsNumber.push(currentLine[currentLine.length - 1])

        // mientras no sean todo 0s
        while (!currentLine.every(e => e === 0)) {
            nextLine = buildNextLine(currentLine)
            lastsNumber.push(nextLine[nextLine.length - 1])
            currentLine = nextLine
        }

        const sumLasts = lastsNumber.reduce((previous, current) => previous + current)
        if (sumLasts) {
            console.log(sumLasts)
            sumAllLast += sumLasts
        }

    });
    console.log(sumAllLast)

}

function buildNextLine(line) {
    let nextLine = []
    for (let i = 1; i < line.length; i++) {
        const e = line[i] - line[i - 1]
        nextLine.push(e)
    }
    return nextLine
}
