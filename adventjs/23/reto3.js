/*
Escribir una función que identifique y devuelva el primer paso
extra que se ha añadido o eliminado en la cadena de fabricación.
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

let original = 'abcd'
let modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

original = 'stepfor'
modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'

function findNaughtyStep(original, modified) {
    const long = original.length > modified.length ? original : modified
    for (let i = 0; i < long.length; i++) {
        if (original[i] !== modified[i]) return long[i]
    }
    return ''
}