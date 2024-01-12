import { expect, test } from "bun:test";

import { cambiaParaOrdenar, comparaCartas, puntosCarta } from "./utils.ts"

test("PuntosCarta: Cinco de un tipo dan 1000000 puntos o mas", () => {
    const carta = "AAAAA"
    const result = puntosCarta(carta) >= 1000000
    expect(result).toBeTrue()
})

test("PuntosCarta: Cuatro de un tipo dan 900000 puntos o mas pero menos de 1000000", () => {
    const cartas = ["AAAA2", "AAA2A", "AA2AA", "A2AAA", "2AAAA"]
    cartas.every(carta => {
        const puntos = puntosCarta(carta)
        const result = puntos < 1000000 && puntos >= 900000
        expect(result).toBeTrue()
    })
})

test("PuntosCarta: Casa llena da 800000 puntos o mas pero menos de 900000", () => {
    const cartas = ["AAA22", "AA2A2", "A2AA2", "2AAA2", "A22AA", "AA22A"]
    cartas.every(carta => {
        const puntos = puntosCarta(carta)
        const result = puntos < 900000 && puntos >= 800000
        expect(result).toBeTrue()
    })
})

test("PuntosCarta: Tres de un tipo da 700000 puntos o mas pero menos de 800000", () => {
    const cartas = ["AAA21", "AA2A1", "A2AA1", "2AAA1", "A21AA", "AA21A"]
    cartas.every(carta => {
        const puntos = puntosCarta(carta)
        const result = puntos < 800000 && puntos >= 700000
        expect(result).toBeTrue()
    })
})

test("PuntosCarta: Dos pares da 600000 puntos o mas pero menos de 700000", () => {
    const cartas = ["AA221", "2A2A1", "A22A1", "2A1A2", "221AA", "AA212"]
    cartas.every(carta => {
        const puntos = puntosCarta(carta)
        const result = puntos < 700000 && puntos >= 600000
        expect(result).toBeTrue()
    })
})

test("PuntosCarta: Un par da 500000 puntos o mas pero menos de 600000", () => {
    const cartas = ["AA321", "A32A1", "32AA1", "2AA31", "A213A", "3A21A"]
    cartas.every(carta => {
        const puntos = puntosCarta(carta)
        const result = puntos < 600000 && puntos >= 500000
        expect(result).toBeTrue()
    })
})

test("PuntosCarta: Tarjeta alta da 400000 puntos o mas pero menos de 500000", () => {
    const carta = "A3425"
    const puntos = puntosCarta(carta)
    const result = puntos < 500000 && puntos >= 400000
    expect(result).toBeTrue()
    // expect(puntos).toBe(4)
})

test("CambiaParaOrdenar: Cambian los caracteres correctamente", () => {
    const carta = "A2AT1KKTR67"
    const res = ">2>:1==:R67"
    expect(cambiaParaOrdenar(carta)).toBe(res)
})

test("Comparacartas", () => {
    const c1 = "KTJJT"
    const c2 = "KK677"
    const c3 = "2AAAA"
    const c4 = "32222"
    expect(comparaCartas(c1, c2)).toBe(-1)
    expect(comparaCartas(c3, c4)).toBe(-1)
})
