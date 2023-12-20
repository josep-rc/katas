import input from "./data/data-input.txt"
// 53221
export function day1part2_2() {
    console.log("day 1 part 2")

    let data = input.split('\n')

    const nums = new Map()

    nums.set("oneight", "18")
    nums.set("threeight", "38")
    nums.set("fiveight", "58")
    nums.set("nineight", "98")
    nums.set("sevenine", "79")
    nums.set("eighthree", "83")
    nums.set("eightwo", "82")
    nums.set("twone", "21")
    nums.set("one", "1")
    nums.set("two", "2")
    nums.set("three", "3")
    nums.set("four", "4")
    nums.set("five", "5")
    nums.set("six", "6")
    nums.set("seven", "7")
    nums.set("eight", "8")
    nums.set("nine", "9")

    let sum = 0
    data.forEach(d => {
        for (const [key, value] of nums) {
            d = d.replaceAll(key, value)
        }
        let r = d.match(/[0-9]/g)
        if (r) sum += parseInt(r[0] + r[r.length - 1])
    })
    console.log(sum)
}