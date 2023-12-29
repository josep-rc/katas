import input from "./input-data.txt";

type CardResult = {
    wins: number,
    repeat: number
}

export function day4part2() {
    console.log("day 4 part 2");
    let data = input.split("\n");
    const w = data[0].length
    const h = data.length
    let CardResults: CardResult[] = []
    for (let d of data) {
        const parts = d.split(':')
        const winNums = parts[1].split('|')[0]
        const myNums = parts[1].split('|')[1]
        const win = winNums.trim().replaceAll("  ", " ").split(' ')
        const my = myNums.trim().replaceAll("  ", " ").split(' ')
        let f = 0 // aciertos
        // por cada número ganador
        for (let m of win) {
            // por cada uno de mis números
            for (let n of my) {
                if (m == n) {
                    f++
                }
            }
        }
        CardResults.push({
            wins: f,
            repeat: 1
        })

    }

    // Calculamos las repeticiones de cada Card
    CardResults.forEach((card, index) => {
        for (let i = 1; i <= card.wins; i++) {
            CardResults[index + i].repeat += card.repeat
        }
    })

    // Sumamos el número de repeticiones
    let reps = 0
    CardResults.forEach((card) => {
        reps += card.repeat
    })

    // console.log(CardResults)
    console.log(reps)
}