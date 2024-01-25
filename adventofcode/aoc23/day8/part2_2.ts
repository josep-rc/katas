import input from "./input-data.txt";
import { lcm } from "mathjs"

export function day8part2_2() {
    console.log("day 8 part 2.2")

    let data = input.split("\n");
    // array con los L y Rs
    const rl = data[0].split('')
    // Mapa con las key = AAA, y el nodo {'L':'BBB','R':'CCC'}
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

    // Resulta que se repite el número de ciclos para reencontrarse con su finally
    // Por ejemplo si empezamos con AAA siempre llegamos a ZZZ tras 20221 pasos
    // Por tanto buscaremos los pasos necesarios para cada Anode y haremos mcm
    let aSteps: number[] = []
    let steps = 1
    let found = false
    let rlIndex = 0
    Anodes.forEach(aKey => {
        let key = aKey
        found = false
        while (!found) {
            key = nodes.get(key)[rl[rlIndex]]
            rlIndex = rlIndex < rl.length - 1 ? rlIndex + 1 : 0
            if (key.endsWith('Z')) {
                console.log(key, steps)
                aSteps.push(steps)
                found = true
                steps = 0
            }
            steps++
        }
    })

    console.log(aSteps)

    // mcm de aSteps
    let mcm = 1
    aSteps.forEach(s => {
        mcm = lcm(mcm, s)
    })
    // solucion mcm de todos los aSteps
    console.log(mcm)
}





type Node = {
    'L': string,
    'R': string
}

