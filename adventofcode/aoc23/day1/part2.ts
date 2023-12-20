import { StringsFinder } from "../utils/StringsFinder.ts"
import input from "./data/data-input.txt"

export function day1part2() {
    console.log("day 1 part 2")

    let data = input.split('\n')

    const search = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"]

    interface Rel {
        [index: string]: string
    }

    let rel = {} as Rel

    rel["0"] = "0"
    rel["1"] = "1"
    rel["one"] = "1"
    rel["2"] = "2"
    rel["two"] = "2"
    rel["3"] = "3"
    rel["three"] = "3"
    rel["4"] = "4"
    rel["four"] = "4"
    rel["5"] = "5"
    rel["five"] = "5"
    rel["6"] = "6"
    rel["six"] = "6"
    rel["7"] = "7"
    rel["seven"] = "7"
    rel["8"] = "8"
    rel["eight"] = "8"
    rel["9"] = "9"
    rel["nine"] = "9"


    let fn = ""
    let ln = ""
    let rs = ""
    let rn = 0
    data.forEach(d => {
        let sf = new StringsFinder(d, search)
        fn = sf.getFirst()
        ln = sf.getLast()
        rs = rel[fn] + rel[ln]
        rn += parseInt(rs)
        // console.log(d + " " + rs + " sum= " + rn)
    });
    console.log(rn)
}



