import input from "./data/data-input.txt"
// 55834
export function day1part1_2() {
    console.log("day 1 part 1")

    let data = input.split('\n')

    let sum = 0
    data.forEach(d => {
        let r = d.match(/[0-9]/g)
        if (r) sum += parseInt(r[0] + r[r.length - 1])
    })
    console.log(sum)
}