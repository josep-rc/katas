/*
Los regalos son cadenas de texto y los materiales son caracteres.
Tu tarea es escribir una función que, dada una lista de regalos
y los materiales disponibles, devuelva una lista de los regalos
que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales
necesarios para fabricarlo.
*/

function manufacture(gifts, materials) {
    let fabricados = []
    for (const gift of gifts) {
        if (Array.from(gift).every(e => materials.includes(e))) fabricados.push(gift)
    }
    return fabricados
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))