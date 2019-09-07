import { idGenerator } from "./id-generator";

describe("Generator: idGenerator", () => {

    it("should increment at each call", () => {
        const generator = idGenerator();

        // noinspection DuplicatedCode
        expect(generator.next().value).toBe(0);
        expect(generator.next().value).toBe(1);
        expect(generator.next().value).toBe(2);
        expect(generator.next().value).toBe(3);
        expect(generator.next().value).toBe(4);
        expect(generator.next().value).toBe(5);
        expect(generator.next().value).toBe(6);
        expect(generator.next().value).toBe(7);
        expect(generator.next().value).toBe(8);
        expect(generator.next().value).toBe(9);
        expect(generator.next().value).toBe(10);
    });

    it("should stop at max when max is set", () => {
        const generator = idGenerator(5);

        // noinspection DuplicatedCode
        expect(generator.next().value).toBe(0);
        expect(generator.next().value).toBe(1);
        expect(generator.next().value).toBe(2);
        expect(generator.next().value).toBe(3);
        expect(generator.next().value).toBe(4);
        expect(generator.next().value).toBe(5);
        expect(generator.next().value).toBe(undefined);
        expect(generator.next().done).toBe(true);
    });

    it("should be done immidiately of a negative maximum is supplied", () => {
        const generator = idGenerator(-5);

        expect(generator.next().done).toBeTruthy();
    });
});
