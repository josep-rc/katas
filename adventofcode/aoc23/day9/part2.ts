import input from "./input-data.txt";

export function day9part2() {

    console.log("day 9 part 2")

    let data = input.split("\n");

    // iteramos hasta conseguir todo 0s, guardando los primeros números de cada fila

    let sumAll = 0

    data.forEach(line => {
        let firstsNumber = []
        let currentLine = []
        let nextLine = []
        currentLine = line.match(/(-)?\d+/g).map(e => {
            return parseInt(e)
        })
        firstsNumber.push(currentLine[0])

        // mientras no sean todo 0s
        while (!currentLine.every(e => e === 0)) {
            nextLine = buildNextLine(currentLine)
            firstsNumber.push(nextLine[0])
            currentLine = nextLine
        }
        // console.log(firstsNumber)

        // interpolamos hasta encontrar el valor superior
        let currentElement = 0
        for (let i = firstsNumber.length - 1; i >= 0; i--) {
            currentElement = firstsNumber[i] - currentElement
        }

        sumAll += currentElement

    });
    console.log(sumAll)
}

function buildNextLine(line) {
    let nextLine = []
    for (let i = 1; i < line.length; i++) {
        const e = line[i] - line[i - 1]
        nextLine.push(e)
    }
    return nextLine
}
