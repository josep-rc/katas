import { readJsonFile, readTxtFile } from "../utils.js";

// read json
const contents = await readJsonFile("day01/data.json");
console.info(contents)

// read txt
const contents2 = await readTxtFile("day01/data.txt");
console.info(contents2)
// obtenim un array amb cada linia del fitxer
const lines = contents2.split("\n");
// treiem l'ultima linia que es buida
lines.pop();
console.info(lines)
// obtenim un array amb cada element de cada linia
const elements = lines.map((line) => line.split(" "));
// juntem tots els elements en un sol array
const flatElements = elements.flat();
console.info(elements)
console.info(flatElements)
