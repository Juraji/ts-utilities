/* tslint:disable:no-bitwise */
export class UUID {
    // Random value lookup-table
    private readonly lookup: string[];

    private constructor() {
        this.lookup = [];
        for (let i = 0; i < 256; i++) {
            this.lookup[i] = (i < 16 ? "0" : "") + (i).toString(16);
        }
    }

    /**
     * Generates a single random UUID
     */
    public static generate(): string {
        return new UUID().generate();
    }

    /**
     * Returns an iterator of random UUIDs
     * @param max The maximum number of UUIDs to produce before completing the iterable
     */
    public static generator(max: number = Infinity): IterableIterator<string> {
        return new UUID().generator(max);
    }

    private generate(): string {
        const d0 = Math.random() * 0xffffffff | 0;
        const d1 = Math.random() * 0xffffffff | 0;
        const d2 = Math.random() * 0xffffffff | 0;
        const d3 = Math.random() * 0xffffffff | 0;
        return this.lookup[d0 & 0xff] + this.lookup[d0 >> 8 & 0xff]
            + this.lookup[d0 >> 16 & 0xff] + this.lookup[d0 >> 24 & 0xff]
            + "-"
            + this.lookup[d1 & 0xff] + this.lookup[d1 >> 8 & 0xff]
            + "-"
            + this.lookup[d1 >> 16 & 0x0f | 0x40] + this.lookup[d1 >> 24 & 0xff]
            + "-"
            + this.lookup[d2 & 0x3f | 0x80] + this.lookup[d2 >> 8 & 0xff]
            + "-"
            + this.lookup[d2 >> 16 & 0xff] + this.lookup[d2 >> 24 & 0xff] + this.lookup[d3 & 0xff]
            + this.lookup[d3 >> 8 & 0xff] + this.lookup[d3 >> 16 & 0xff] + this.lookup[d3 >> 24 & 0xff];
    }

    private generator(max: number): IterableIterator<string> {
        if (max <= 0) {
            throw new Error(`UUID generator maximum is set to a negative value (${max}).`);
        }

        const that = this;
        return (function* gen() {
            let count = 0;

            while (count < max) {
                yield that.generate();
                count++;
            }
        })();
    }
}
