import { expect, test } from "bun:test";
import { StringsFinder, Needle } from "./StringsFinder.ts";

test("StringsFinder finds", () => {
    const o = "alljonehdhh1lklknlkmm9lnl5"
    const e = ["1", "5", "one"]
    let sf = new StringsFinder(o, e)
    let n: Needle[] = sf.needles
    expect(n[0].index).toBe(4)
    expect(n[0].text).toBe("one")
    expect(n[1].index).toBe(11)
    expect(n[1].text).toBe("1")
})

test("StringsFinder getFirst and getLast methods returns correctly", () => {
    const o = "5alljonehdhh1lklknlkmm9lnl5"
    const e = ["1", "5", "one"]
    let sf = new StringsFinder(o, e)
    console.log(sf.needles)
    expect(sf.getFirst()).toBe("5")
    expect(sf.getLast()).toBe("5")
})
