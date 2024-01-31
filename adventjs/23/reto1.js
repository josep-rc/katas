/* 
Si hay más de un número repetido, debes devolver el número 
cuya segunda ocurrencia aparezca primero en la lista.
Si no hay números repetidos, devuelve - 1.
*/

function findFirstRepeated(gifts) {
    let num = -1
    let lastPosition = Number.POSITIVE_INFINITY
    gifts.forEach((e, k, g) => {
        const i = g.indexOf(e, k + 1)
        if (i > 0 && i < lastPosition) {
            num = e
            lastPosition = i
        }
    })
    return num
}

const A = findFirstRepeated([2, 1, 5, 4, 1, 9])

console.log(A)