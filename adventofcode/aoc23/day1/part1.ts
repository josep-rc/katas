import input from "./data/data-input.txt"

export function day1part1() {
    console.log("day 1 part 1")

    let data = input.split('\n')
    //console.log(data)
    let fn = ""
    let ln = ""
    let rs = ""
    let rn = 0
    data.forEach(d => {
        fn = firstNum(d)
        ln = lastNum(d)
        rs = fn + ln
        rn += parseInt(rs)
        // console.log(d + " " + rs + " sum= " + rn)
    });
    console.log(rn)
}

function firstNum(s: string): string {
    let n = 0;
    for (const c of s) {
        n = parseInt(c)
        if (!Number.isNaN(n)) return c
    }
    return ""
}

function lastNum(s: string): string {
    return firstNum(s.split("").reverse().join())
}