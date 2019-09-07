import UUID from "./uuid-generator";

describe("Generator: UUID", () => {
    const uuidRegexp = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{8}/;

    describe("#generate()", () => {
        it("should generate UUIDS on demand", () => {
            const uuid1 = UUID.generate();
            const uuid2 = UUID.generate();
            const uuid3 = UUID.generate();

            expect(uuid1).toMatch(uuidRegexp);
            expect(uuid2).toMatch(uuidRegexp);
            expect(uuid3).toMatch(uuidRegexp);
            expect(uuid1).not.toEqual(uuid2);
            expect(uuid2).not.toEqual(uuid3);
            expect(uuid3).not.toEqual(uuid1);
        });
    });

    describe("#generator() should supply a UUID generating iterable", () => {
        it("should supply a UUID generating iterable", () => {
            const generator = UUID.generator();

            const iteratorResult = generator.next();
            expect(iteratorResult).toBeDefined();
            expect(iteratorResult.value).toMatch(uuidRegexp);
        });

        it("should supply UUIDs while iterating ", () => {
            const generator = UUID.generator();

            for (let i = 0; i < 3; i++) {
                const iteratorResult = generator.next();
                expect(iteratorResult.value).toMatch(uuidRegexp);
            }
        });

        it("should supply a maximum amount of UUIDs when a max is set", () => {
            const generator = UUID.generator(3);

            expect(generator.next().value).toBeDefined();
            expect(generator.next().value).toBeDefined();
            expect(generator.next().value).toBeDefined();
            expect(generator.next().done).toBeTruthy();
        });

        it("should throw an error when a zero or negative maximum is supplied", () => {
            expect(() => UUID.generator(0)).toThrowError("");
            expect(() => UUID.generator(-5)).toThrowError("");
        });
    });
});
