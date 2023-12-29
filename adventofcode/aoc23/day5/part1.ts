import input from "./input-data.txt";

export function day5part1() {
    console.log("day 5 part 1");
    let data = input.split("\n");
    const w = data[0].length
    const h = data.length

    let destiny: number[] = []

    const seeds = data[0].match(/\d+/g)?.map(x => parseInt(x, 10))

    let maps = new Map<number, SeedMap[]>()
    let map: SeedMap[] = []
    let group = 0

    // Creamos el Map
    // que contiene un array de seedMaps por cada conversión
    for (let i = 3; i < h; i++) {
        if (data[i].match(/\d/)) {
            let m = data[i].match(/\d+/g)?.map(x => parseInt(x, 10))
            if (m) {
                let sm: SeedMap = {
                    destiny: m[0],
                    origin: m[1],
                    interval: m[2]
                }
                map.push(sm)
            }
        } else if (data[i].match(/map:/)) {
            maps.set(group, map)
            map = []
            group++
        }
    }
    // agregamos el último set
    maps.set(group, map)

    // Mapeamos los seeds por todos los maps
    seeds?.forEach(s => {
        let r = s
        maps.forEach((value, key, map) => {
            let oldR = r
            value.every(m => {
                r = mapea(r, m)
                // Sólo permitimos un cambio por tipo de transformación
                if (oldR != r) {
                    return false
                }
                return true
            })
        })
        // console.log(`${s} se transforma en ${r}`)
        destiny.push(r)
    })

    // obtenemos el mínimo
    console.log(Math.min(...destiny))

}

type SeedMap = {
    destiny: number, origin: number, interval: number
}

function mapea(code: number, map: SeedMap) {
    let r = code
    if (r >= map.origin && r < (map.origin + map.interval)) {
        r = r - map.origin + map.destiny
    }
    return r
}