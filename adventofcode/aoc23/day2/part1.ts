import input from "./input-data.txt";

export function day2part1() {
  console.log("day 2 part 1");
  let data = input.split("\n");

  const redRef = 12;
  const greenRef = 13;
  const blueRef = 14;

  // const wtf = g1.split('').map(parseInt).filter(a => a).reduce((a, b) => a + b).toString().split('').reverse().join()
  // console.log("wtf: " + wtf)
  // const gn = g1.match(/\d+/)
  // /(\d+)(?=\s* blue)/g

  /*
  Can you try this regex
  Integer before “OF” (\d +) (?=\s * OF)
  Integer after “OF” (?<= OF\s *) (\d +)
  */

  let sum = 0;
  data.forEach(d => {
    console.log("===============================")
    let isPosible = true
    // dividimos por los dos puntos
    let parts = d.split(":");
    // en la primera parte nos queda el game
    let game = parseInt(parts[0].substring(5));
    // y en la segunda los bags, que dividimos por los ;
    // y quitamos los espacios
    let bags = parts[1].replaceAll(" ", "").split(";");
    let p: string[];
    let redNum: number;
    let greenNum: number;
    let blueNum: number;

    for (let bag of bags) {
      p = bag.split(",");
      redNum = 0;
      greenNum = 0;
      blueNum = 0;
      p.forEach((c) => {
        redNum += numOfColor(c, "red");
        greenNum += numOfColor(c, "green");
        blueNum += numOfColor(c, "blue");
      });
      console.log(`red: ${redNum}, green: ${greenNum}, blue: ${blueNum}`);

      // ahora en cada bag hay que comprobar si el número de cada color
      // es menor q el de referencia
      if (redNum > redRef || blueNum > blueRef || greenNum > greenRef) {
        isPosible = false
        break
      }
    }

    if (isPosible) {
      sum += game
    }
  });

  console.log(sum)
};


function numOfColor(source: string, color: string): number {
  let position = source.indexOf(color);
  return position != -1 ? parseInt(source.substring(0, position)) : 0;
}
