import { expect, test } from "bun:test";
import { findNumbersAround } from "./part2"
import { multiplyArray } from "./part2"

test("findNumbersAround: Find number", () => {
    const s = "....345......."
    const r1 = findNumbersAround(3, s)
    expect(r1).toBeArray()
    expect(r1[0]).toBe(345)
    const r2 = findNumbersAround(4, s)
    expect(r2[0]).toBe(345)
    const r3 = findNumbersAround(5, s)
    expect(r3[0]).toBe(345)
    const r4 = findNumbersAround(6, s)
    expect(r4[0]).toBe(345)
    const r5 = findNumbersAround(7, s)
    expect(r5[0]).toBe(345)
})

test("findNumbersAround: Not Find number", () => {
    const s = "....345......."
    const r1 = findNumbersAround(0, s)
    expect(r1).toBeArray()
    expect(r1[0]).toBeUndefined()
    const r2 = findNumbersAround(1, s)
    expect(r2[0]).toBeUndefined()
    const r3 = findNumbersAround(2, s)
    expect(r3[0]).toBeUndefined()
    const r4 = findNumbersAround(8, s)
    expect(r4[0]).toBeUndefined()
    const r5 = findNumbersAround(9, s)
    expect(r5[0]).toBeUndefined()
})

test("findNumbersAround: Find two contiguous numbers", () => {
    const s = "....345.765......"
    const r1 = findNumbersAround(2, s)
    expect(r1).toBeArray()
    expect(r1[0]).toBeUndefined()
    const r2 = findNumbersAround(7, s)
    expect(r2[0]).toBe(345)
    expect(r2[1]).toBe(765)
    const r3 = findNumbersAround(8, s)
    expect(r3[0]).toBe(765)
    const r4 = findNumbersAround(11, s)
    expect(r4[0]).toBe(765)
    const r5 = findNumbersAround(12, s)
    expect(r5[0]).toBeUndefined()
})

test("findNumbersAround: Find numbers at position 0 and last", () => {
    const s = "345.......654"
    const r1 = findNumbersAround(0, s)
    expect(r1).toBeArray()
    expect(r1[0]).toBe(345)
    const r2 = findNumbersAround(1, s)
    expect(r2[0]).toBe(345)
    const r3 = findNumbersAround(2, s)
    expect(r3[0]).toBe(345)
    const r4 = findNumbersAround(3, s)
    expect(r4[0]).toBe(345)
    const r5 = findNumbersAround(4, s)
    expect(r5[0]).toBeUndefined()
    const r6 = findNumbersAround(9, s)
    expect(r6[0]).toBe(654)
    const r7 = findNumbersAround(10, s)
    expect(r7[0]).toBe(654)
    const r8 = findNumbersAround(11, s)
    expect(r8[0]).toBe(654)
    const r9 = findNumbersAround(12, s)
    expect(r9[0]).toBe(654)
})

test("findNumbersAround: Overflow", () => {
    const s = "345.......654"
    const r1 = findNumbersAround(0, s)
    expect(r1).toBeArray()
    const r2 = findNumbersAround(54, s)
    expect(r2).toBeArrayOfSize(0)
})

test.only("findNumbersAround: Proper numbers", () => {
    const s = "...976..679.461.7..."
    const r = findNumbersAround(5, s)
    // console.log(r)
    expect(r.length).toBe(1)
    expect(r[0]).toBe(976)
})

test("multiplyArray: with two numbers returns a * b", () => {
    const a = [2, 3]
    const r = multiplyArray(a)
    expect(r).toBe(6)
})

test("multiplyArray: with three numbers returns a * b * c", () => {
    const a = [2, 3, 5]
    const r = multiplyArray(a)
    expect(r).toBe(30)
})

test("multiplyArray: with one number returns the number itself", () => {
    const a = [2]
    const r = multiplyArray(a)
    expect(r).toBe(2)
})

test("multiplyArray: with no number returns 1", () => {
    const a: number[] = []
    const r = multiplyArray(a)
    expect(r).toBe(1)
})
