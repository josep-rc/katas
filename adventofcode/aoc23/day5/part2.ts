import input from "./input-data.txt";

export function day5part2() {
    console.log("day 5 part 2");
    let data = input.split("\n");
    const w = data[0].length
    const h = data.length

    let destiny: number[] = []

    let maps = new Map<number, SeedMap[]>()
    let map: SeedMap[] = []
    let group = 0

    const seeds = data[0].match(/\d+/g)?.map(x => parseInt(x, 10))

    createMap()

    let seed = 0
    let range = 0
    let p = 0
    let min = 0
    if (seeds) {
        min = Math.max(...seeds)
        for (let i = 0; i < seeds.length; i = i + 2) {
            seed = seeds[i]
            range = seeds[i + 1]
            console.log(seed, range)
            for (let y = 0; y < range; y++) {
                p = mapSeed(seed + y)
                if (p < min) min = p
            }
        }
    }

    // obtenemos el mínimo
    console.log(min)

    // Creamos el Map
    // que contiene un array de seedMaps por cada conversión
    function createMap() {
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
    }

    function mapSeed(seed: number) {
        // Mapeamos los seeds por todos los maps
        let r = seed
        let oldR = 0
        maps.forEach((value) => {
            oldR = r
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
        return r
    }


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