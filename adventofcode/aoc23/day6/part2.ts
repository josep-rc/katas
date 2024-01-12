import input from "./input-data.txt";

export function day6part2() {
    console.log("day 6 part 2");
    let data = input.split("\n");

    const times = data[0].replace(/\s*/g, "").match(/\d+/g)?.map(x => parseInt(x, 10))
    const records = data[1].replace(/\s*/g, "").match(/\d+/g)?.map(x => parseInt(x, 10))

    console.log(times, records)

    if (times && records) {
        console.log(countWaysToRecord(times[0], records[0]))
    }


}



function countWaysToRecord(time: number, record: number): number {
    let count = 0
    for (let i = 2; i < time; i++) {
        const r = i * (time - i)
        if (r > record) count++
    }
    return count
}