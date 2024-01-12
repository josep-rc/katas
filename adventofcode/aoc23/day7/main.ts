/*

A,K,Q,J,T,9,8,7,6,5,4,3,2

Tipos de mano ordenadas por fuerza:

Cinco de un tipo, donde las cinco cartas tienen la misma etiqueta:AAAAA

Cuatro de un tipo, donde cuatro cartas tienen la misma etiqueta y una tarjeta tiene una
etiqueta diferente:AA8AA

Casa llena, donde tres cartas tienen la misma etiqueta, y las dos cartas restantes comparten
una etiqueta diferente:23332

Tres de un tipo, donde tres cartas tienen la misma etiqueta, y las dos cartas restantes son
diferentes de cualquier otra carta en la mano:TTT98

Dos pares, donde dos cartas comparten una etiqueta, otras dos cartas comparten una segunda
etiqueta, y la tarjeta restante tiene una tercera etiqueta:23432

Un par, donde dos cartas comparten una etiqueta, y las otras tres tienen una etiqueta diferente
de la pareja y una de cada una de otras:A23A4

Tarjeta alta, donde todas las etiquetas de las cartas son distintas:23456

Si dos manos tienen el mismo tipo, una segunda regla de pedido entra en vigor.
Comience comparando la primera carta en cada mano. Si estas cartas son diferentes, la mano con
la primera carta más fuerte se considera más fuerte. Si la primera carta en cada mano tiene la
misma etiqueta, sin embargo, entonces pasa a considerar la segunda carta en cada mano.
Si difieren, la mano con la segunda carta más alta gana; de lo contrario, continuar con la tercera
carta en cada mano, luego la cuarta, luego la quinta.

32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483

Este ejemplo muestra cinco manos; cada mano es seguida por su cantidad de oferta.
Cada mano gana una cantidad igual a su oferta multiplicada por su rango, donde la mano más débil
se sitúa en el primer lugar, la segunda mano más débil se sitúa en el puesto 2, y así en la mano
más fuerte. Debido a que hay cinco manos en este ejemplo, la mano más fuerte tendrá el rango 5
y su oferta se multiplicará por 5.


Por lo tanto, el primer paso es poner las manos en orden de fuerza:

    32T3K es la única un par y las otras manos son todas un tipo más fuerte,
    por lo que se pone de rango 1.
    KK677 y KTJJT ambos dos pares. Sus primeras cartas tienen la misma etiqueta, pero la segunda
    carta de KK677 es más fuerte (KvsT), así que KTJJT se clasifica 2 y KK677 se clasifica 3.
    T55J5 y QQQJA ambos tres de un tipo. QQQJA tiene una primera carta más fuerte, por lo que
    obtiene rango 5 y T55J5 se clasifica 4.

Ahora, usted puede determinar las ganancias totales de este conjunto de manos sumando el resultado
de multiplicar la oferta de cada mano con su rango:

5 - QQQJA - 483 * 5 = 2415
4 - T55J5 - 684 * 4 = 2736
3 - KK677 - 28  * 3 =   84
2 - KTJJT - 220 * 2 =  440
1 - 32T3K - 765 * 1 =  765

(765* 1 220* 2 .28* 3 684* 4 483* 5).
Entonces las ganancias totales en este ejemplo = 6440.


*/

import input from "./input-data.txt";

type Mano = [number[], number, string];

export function day7part1() {
  console.log("day 7 part 1");
  let data = input.split("\n");

  const STRENGTH = "23456789TJQKA"

  let manos: Mano[] = data.map((line) => {
    // de cada linea obtenemos las cartas y la apuesta
    const [cartas, apuesta] = line.split(" ");
    // las cartas las cambiamos por su valor y las metemos en un array
    const cartasCompensadas = cartas
      .split("")
      .map((card) => STRENGTH.indexOf(card));
    // guardamos cada mano y apuesta en manos
    return [cartasCompensadas, parseInt(apuesta), cartas];
  });

  // console.log(manos);

  let manosOrdenado = manos.sort((a, b) => {
    return comparaManos(a, b);
  });

  const r = manosOrdenado.map((mano, index) => {
    return mano[1] * (manosOrdenado.length - index);
  });
  console.log("part1 result:", sumar(r));
}

export function day7part2() {

  // el correcto está en part2

  // your answer is too high: 248108746
  console.log("day 7 part 2");
  let data = input.split("\n");

  const STRENGTH = "J23456789TQKA"

  let manos: Mano[] = data.map((line) => {
    // de cada linea obtenemos las cartas y la apuesta
    const [cartas, apuesta] = line.split(" ");
    // las cartas las cambiamos por su valor y las metemos en un array
    const cartasCompensadas = cartas
      .split("")
      .map((card) => STRENGTH.indexOf(card));
    // guardamos cada mano y apuesta en manos
    return [cartasCompensadas, parseInt(apuesta), cartas];
  });

  // console.log(manos);

  // modificar para regla parte 2

  // optimizar mano J
  manos.map((mano, index) => {
    // console.log(mano)
    // buscamos las J (0)
    let js: number[] = [];
    mano[0].map((c, i) => {
      if (c == 0) js.push(i);
    });
    //console.log(js);

    // si hay Js
    // recorremos STRENGTH buscando que substitución consigue mayor totalRepeticiones
    let manoTop: number[] = [...mano[0]];
    if (js.length > 0) {
      let manoInter = [...mano[0]]
      for (let i = 0; i < STRENGTH.length; i++) {
        // console.log("i:", i)
        for (let y = 0; y < js.length; y++) {
          manoInter[js[y]] = i
          //console.log("mano[0]: ", mano[0], "manoTop: ", manoTop)
          //console.log(totalRepeticiones(mano[0]), totalRepeticiones(manoTop))
          if (totalRepeticiones(manoInter) >= totalRepeticiones(manoTop)) {
            manoTop = [...manoInter];
          }
        }
      }
      console.log("mano: ", ...mano, "manoTop: ", manoTop);
      mano[0] = manoTop
    }
  });

  let manosOrdenado = manos.sort((a, b) => {
    return comparaManos(a, b);
  });

  console.log(...manosOrdenado)

  const r = manosOrdenado.map((mano, index) => {
    return mano[1] * (manosOrdenado.length - index);
  });

  console.log("part2 result:", sumar(r));
}

function comparaManos(manoA: Mano, manoB: Mano) {
  const mA = manoA[0];
  const mB = manoB[0];
  const pA = totalRepeticiones(mA);
  const pB = totalRepeticiones(mB);
  if (pA == pB) {
    for (let i = 0; i < mA.length; i++) {
      // estamos comparando las manos modificadas
      // deberiamos comparar las originales
      if (mA[i] !== mB[i]) {
        return mB[i] - mA[i];
      }
    }
  }
  return pB - pA;
}

function totalRepeticiones(numbers: number[]) {
  return sumar(contar(numbers));
}

function contar(input: number[]) {
  return input.map((x) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] == x) count++;
    }
    return count;
  });
}

function sumar(input: number[]) {
  return input.reduce((x, y) => {
    return x + y;
  });
}
