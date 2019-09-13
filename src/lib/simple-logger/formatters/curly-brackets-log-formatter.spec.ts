import { CurlyBracketsLogFormatter } from "./curly-brackets-log-formatter";

describe("SimpleLogger LogFormatter", () => {

    describe("CurlyBracketsFormatter", () => {
        let formatter: CurlyBracketsLogFormatter;

        beforeEach(() => {
            formatter = new CurlyBracketsLogFormatter();
        });

        it("should replace \"{}\" with supplied arguments in order of occurrence", () => {
            const formatted = formatter.format("My {} template with {} like {}.", "log", "replacements", 123);

            expect(formatted).toEqual("My log template with replacements like 123.");
        });

        it("should ignore undefined or null input", () => {
            const formatted = formatter.format(null);
            expect(formatted).toBeUndefined();
        });

        it("should allow for no arguments to be passed", () => {
            const formatted = formatter.format("My log");
            expect(formatted).toBe("My log");
        });
    });
});
