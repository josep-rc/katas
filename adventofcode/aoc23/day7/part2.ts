import input from "./input-data.txt";

export function day7part2() {

    let data = input.split("\n");

    // creamos las manos
    let manos = data.map((line) => {
        const [cartas, apuesta] = line.split(" ");
        return new Mano(cartas, parseInt(apuesta))
    })

    // ordenamos las manos
    let manosOrdenado = manos.sort((a, b) => {
        return comparaManosJ(a, b);
    });

    // calculamos el resultado de indice x apuesta
    const r = manosOrdenado.map((mano, index) => {
        return mano.apuesta * (manosOrdenado.length - index);
    });

    console.log("part2 result:", sumar(r));
}


class Mano {
    private _cartas: number[] = [];
    private _cartasJ: number[] = [];

    FUERZA = "J23456789TQKA"

    constructor(readonly strCartas: string, readonly apuesta: number) {
        this.setCartas()
        this.setCartasJ()
    }

    // Pasa del string original de cartas a array de numbers según FUERZA
    private setCartas() {
        this._cartas = this.strCartas.split("")
            .map((card) => this.FUERZA.indexOf(card))
    }

    private setCartasJ() {
        // buscamos las J (0)
        let jokers: number[] = [];
        this._cartas.map((c, i) => {
            if (c == 0) jokers.push(i);
        });
        // si hay Js recorremos FUERZA buscando que substitución 
        // consigue mayor totalRepeticiones
        let manoTop: number[] = [...this._cartas]; // copia del array por valor
        if (jokers.length > 0) {
            let manoInter = [...this._cartas]
            for (let i = 0; i < this.FUERZA.length; i++) {
                for (let y = 0; y < jokers.length; y++) {
                    manoInter[jokers[y]] = i
                    if (totalRepeticiones(manoInter) >= totalRepeticiones(manoTop)) {
                        manoTop = [...manoInter];
                    }
                }
            }
        }
        this._cartasJ = manoTop
    }

    get cartas() {
        return this._cartas
    }

    get cartasJ() {
        return this._cartasJ
    }

}

// suma todos los elementos de un array de números
function sumar(input: number[]): number {
    return input.reduce((x, y) => {
        return x + y;
    });
}

// devuelve un array con el número de veces q aparece cada número
function contar(input: number[]) {
    return input.map((x) => {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] == x) count++;
        }
        return count;
    });
}

function totalRepeticiones(numbers: number[]) {
    return sumar(contar(numbers));
}

function comparaManosJ(manoA: Mano, manoB: Mano) {
    const mA = manoA.cartas;
    const mB = manoB.cartas;
    const pA = totalRepeticiones(manoA.cartasJ);
    const pB = totalRepeticiones(manoB.cartasJ);
    if (pA == pB) {
        for (let i = 0; i < mA.length; i++) {
            if (mA[i] !== mB[i]) {
                return mB[i] - mA[i];
            }
        }
    }
    return pB - pA;
}
