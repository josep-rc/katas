import input from "./input-data.txt";

export function day4part1() {
    console.log("day 4 part 1");
    let data = input.split("\n");
    const w = data[0].length
    const h = data.length
    let totalPoints = 0
    for (let d of data) {
        const parts = d.split(':')
        // const cardPart = parts[0]
        const winNums = parts[1].split('|')[0]
        const myNums = parts[1].split('|')[1]

        const win = winNums.trim().replaceAll("  ", " ").split(' ')
        const my = myNums.trim().replaceAll("  ", " ").split(' ')
        console.log(win)
        console.log(my)
        let points = 0
        let f = 0
        // por cada número ganador
        for (let m of win) {
            // por cada uno de mis números
            for (let n of my) {
                if (m == n) {
                    // console.log(m)
                    f++
                }
            }
        }
        console.log('aciertos: ', f)
        points = f != 0 ? Math.pow(2, f - 1) : 0
        //console.log('puntos:', points)
        totalPoints += points
    }
    console.log(totalPoints)





}