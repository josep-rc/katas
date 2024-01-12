export function comparaCartas(a: string, b: string) {
    const pa = puntosCarta(a)
    const pb = puntosCarta(b)
    // console.log(`${a}: ${pa} - ${b}: ${pb}`)
    if (puntosCarta(a) > puntosCarta(b)) return 1
    return -1
}

export function puntosCarta(a: string) {
    /*
    A 65 -> 62 >    9 -> 57     5 -> 53
    K 75 -> 61 =    8 -> 56     4 -> 52
    Q 81 -> 60 <    7 -> 55     3 -> 51
    J 74 -> 59 ;    6 -> 54     2 -> 50
    T 84 -> 58 :
    */
    let c1 = (a.match(new RegExp(`${a[0]}`, "g")) || []).length
    let c2 = (a.match(new RegExp(`${a[1]}`, "g")) || []).length
    let c3 = (a.match(new RegExp(`${a[2]}`, "g")) || []).length
    let c4 = (a.match(new RegExp(`${a[3]}`, "g")) || []).length
    let c5 = (a.match(new RegExp(`${a[4]}`, "g")) || []).length

    const total = c1 + c2 + c3 + c4 + c5
    let points = 0
    switch (total) {
        case 25:
            points += 10_000_000_000
            break;
        case 17:
            points += 9_000_000_000
            break;
        case 13:
            points += 8_000_000_000
            break;
        case 11:
            points += 7_000_000_000
            break;
        case 9:
            points += 6_000_000_000
            break;
        case 7:
            points += 5_000_000_000
            break;
        case 5:
            points += 4_000_000_000
            break;
        default:
            break;
    }

    const o = cambiaParaOrdenar(a)

    points += (o.charCodeAt(0) - 45) * 100000000
    points += (o.charCodeAt(1) - 45) * 1000000
    points += (o.charCodeAt(2) - 45) * 10000
    points += (o.charCodeAt(3) - 45) * 100
    points += o.charCodeAt(4) - 45

    return points
}

export function cambiaParaOrdenar(s: string): string {
    return s.replace(/A/g, '>').replace(/K/g, '=').replace(/Q/g, '<').replace(/J/g, ';').replace(/T/g, ':')
}
