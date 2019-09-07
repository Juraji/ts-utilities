import { CurlyBracketsFormatter, NumberedCurlyBracesFormatter } from "./log-formatter";

describe("LogFormatter", () => {

    describe("CurlyBracketsFormatter", () => {
        let formatter: CurlyBracketsFormatter;

        beforeEach(() => {
            formatter = new CurlyBracketsFormatter();
        });

        it("should replace \"{}\" with supplied arguments in order of occurrence", () => {
            const formatted = formatter.format("My {} template with {} like {}.", "log", "replacements", 123);

            expect(formatted).toEqual("My log template with replacements like 123.");
        });
    });

    describe("NumberedCurlyBracesFormatter", () => {
        let formatter: NumberedCurlyBracesFormatter;

        beforeEach(() => {
            formatter = new NumberedCurlyBracesFormatter();
        });

        it("should replace \"{0}, {1}, {2}, ...\" with supplied arguments based on zero-based index", () => {
            const formatted = formatter.format(
                "My {2} template with {0} like {1}, even multiple times look: {1}-{2}-{1}.",
                "replacements", 123, "log");

            expect(formatted).toEqual("My log template with replacements like 123, even multiple times look: 123-log-123.");
        });
    });
});
