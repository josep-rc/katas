import input from "./input-data.txt";

// El script funciona pero para el caso
// que nos piden tardaria meses en hacer el cálculo
// Otra estrategia en part2_2.ts

export function day8part2() {
    console.log("day 8 part 2")

    let data = input.split("\n");

    const rl = data[0].split('')



    const nodes = new Map<string, Node>()

    // por cada linea obtenemos los nodos
    for (let i = 2; i < data.length; i++) {
        const key = data[i].substring(0, 3)
        const l = data[i].substring(7, 10)
        const r = data[i].substring(12, 15)
        nodes.set(key, { 'L': l, 'R': r })
    }

    console.log("Datos obtenidos")

    // buscamos los nodos que acaban en A
    let Anodes: string[] = []

    nodes.forEach((_, key) => {
        if (key.endsWith('A')) Anodes.push(key)
    })

    console.log("Nodos acabados en A encontrados", Anodes)

    // recorremos Anodes sobre escribiendo cada posición 
    // en cada iteración hasta q todos terminen en Z a la vez

    let steps = 0
    let rlIndex = 0
    while (!Anodes.every(n => n.endsWith('Z'))) {
        Anodes = Anodes.map(n => {
            const index = rl[rlIndex] as keyof Node
            const keyP = nodes.get(n)
            return keyP[index]
        })
        rlIndex = rlIndex < rl.length - 1 ? rlIndex + 1 : 0
        steps++
        console.log(steps, Anodes)
    }
    console.log(steps)
}

type Node = {
    'L': string,
    'R': string
}


