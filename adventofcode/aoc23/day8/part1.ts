import input from "./input-data.txt";


export function day8part1() {
    console.log("day 7 part 1")

    let data = input.split("\n");

    const rl = data[0].split('')

    const nodes = new Map()

    // por cada linea obtenemos los nodos
    for (let i = 2; i < data.length; i++) {
        const key = data[i].substring(0, 3)
        const l = data[i].substring(7, 10)
        const r = data[i].substring(12, 15)
        nodes.set(key, { 'L': l, 'R': r })
    }

    let rlIndex = 0
    let key = 'AAA'
    let steps = 0

    while (key != 'ZZZ') {
        key = nodes.get(key)[rl[rlIndex]]
        rlIndex = rlIndex < rl.length - 1 ? rlIndex + 1 : 0
        steps++
    }

    console.log(steps)




    // console.log(nodes)

    // console.log(nodes.get('AAA'))
}