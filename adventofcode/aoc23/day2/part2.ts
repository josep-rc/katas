import input from "./input-data.txt";

export function day2part2() {
    console.log("day 2 part 2");
    let data = input.split("\n");

    // suma del producto de máximos por color

    // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green (max: 6 blue, 4 red, 2 green -> 6*4*2 = 48 )
    let sum = 0

    for (const d of data) {
        const maxRed = d.match(/(\d+)(?=\s* red)/g)?.map(x => parseInt(x, 10)).reduce((a, c) => a > c ? a : c, 0)
        const maxBlue = d.match(/(\d+)(?=\s* blue)/g)?.map(x => parseInt(x, 10)).reduce((a, c) => a > c ? a : c, 0)
        const maxGreen = d.match(/(\d+)(?=\s* green)/g)?.map(x => parseInt(x, 10)).reduce((a, c) => a > c ? a : c, 0)

        if (maxRed && maxGreen && maxBlue) sum += maxRed * maxBlue * maxGreen

    }
    console.log(sum)




}