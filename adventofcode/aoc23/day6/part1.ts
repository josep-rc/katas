/*

Time:      7  15   30
Distance:  9  40  200

Aquest document descriu tres curses:

     La primera cursa dura 7 ms. La distància rècord en aquesta cursa és de 9 mm.
     La segona cursa dura 15 ms. La distància rècord en aquesta cursa és de 40 mm.
     La tercera cursa dura 30 ms. La distància rècord en aquesta cursa és de 200 mm.

El vostre vaixell de joguina té una velocitat inicial de zero mm per ms.
Per cada ms sencer que dediqueu a l'inici de la cursa mantenint premut el botó,
la velocitat del vaixell augmenta un mm per ms.

Així, com que la primera cursa dura 7 ms, només teniu algunes opcions:

     No mantingueu premut el botó en absolut (és a dir, mantingueu-lo premut durant 0 ms) 
     a l'inici de la carrera:
        El vaixell no es mou; haurà recorregut 0 mm al final de la cursa.
     Mantingueu premut el botó durant 1 ms a l'inici de la carrera:
        Aleshores, el vaixell viatjarà a una velocitat d'1 mm per ms durant 6 ms, 
        arribant a una distància total recorreguda de 6 mm.
     Mantingueu premut el botó durant 2 ms, donant al vaixell una velocitat de 2 mm per ms:
        Aleshores tindrà 5 ms per moure's, arribant a una distància total de 10 mm.
     Manteniu premut el botó durant 3 ms:
        Després dels 4 ms restants de temps de viatge, el vaixell haurà fet 12 mm.
     Mantingueu premut el botó durant 4 ms:
        Després dels 3 ms restants de temps de viatge, el vaixell haurà fet 12 mm.
     Mantingueu premut el botó durant 5 ms: 
        fent que el vaixell viatgi un total de 10 mm.
     Mantingueu premut el botó durant 6 ms:
        fent que el vaixell viatgi un total de 6 mm.
     Mantingueu premut el botó durant 7 ms:
        Això és tota la durada de la cursa. Mai deixes anar el botó.
        El vaixell no es pot moure fins que deixeu anar el botó.
        Si us plau, assegureu-vos de deixar anar el botó perquè el vaixell es pugui moure. 0 ms.

        7ms -> 9mm
        7ms -> 7*0=0, 1*6=6, 2*5=10, 3*4=12, 4*3=12, 5*2=10, 6*1=6, 0*7=0

Com que el rècord actual d'aquesta cursa és de 9 mm, en realitat hi ha 4 maneres diferents de
guanyar: podeu mantenir premut el botó durant 2, 3, 4 o 5 ms a l'inici de la cursa.

A la segona cursa, podríeu mantenir premut el botó durant almenys 4 ms i com a màxim 11 ms i 
batre el rècord, un total de 8 maneres diferents de guanyar.

A la tercera cursa, podríeu mantenir premut el botó durant almenys 11 ms i no més de 19 ms i
encara batre el rècord, un total de 9 maneres de guanyar.

Per veure quant marge d'error tens, determina el nombre de maneres en què pots batre el rècord 
a cada cursa; en aquest exemple, si multipliqueu aquests valors junts, obtindreu 288 (4 * 8 * 9).

Determineu el nombre de maneres en què podeu batre el rècord a cada cursa.
Què obteniu si multipliqueu aquests nombres junts?

*/


import input from "./input-data.txt";

export function day6part1() {
    console.log("day 6 part 1");
    let data = input.split("\n");

    const times = (data[0].match(/\d+/g) || []).map(x => parseInt(x, 10))
    const records = (data[1].match(/\d+/g) || []).map(x => parseInt(x, 10))

    console.log(times)
    console.log(records)

    let product = 1

    for (let i = 0; i < times.length; i++) {
        const t = times[i]
        const r = records[i]

        product *= countWaysToRecord(t, r)
    }

    console.log(product)

}

function countWaysToRecord(time: number, record: number): number {
    let count = 0
    for (let i = 2; i < time; i++) {
        const r = i * (time - i)
        if (r > record) count++
    }
    return count
}
