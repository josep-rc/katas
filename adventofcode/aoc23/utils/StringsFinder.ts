export class StringsFinder {
    private source: string
    // founded needles ordered by position
    public readonly needles: Needle[] = []

    constructor(source: string, search: string[]) {
        this.source = source

        for (let i = 0; i < search.length; i++) {
            let index: number = 0
            const e = search[i];
            while (index != -1) {
                if (index == 0) {
                    index = source.indexOf(e)
                } else {
                    index = source.indexOf(e, index + 1)
                }
                if (index != -1) this.needles.push({ index: index, text: search[i] })
                if (index == 0) index++
            }
        }
        this.needles.sort((a, b) => {
            return a.index - b.index
        })
    }

    public getFirst() {
        return this.needles[0].text
    }

    public getLast() {
        return this.needles[this.needles.length - 1].text
    }
}

export type Needle = {
    index: number,
    text: string
}