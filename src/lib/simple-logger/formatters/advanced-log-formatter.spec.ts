import { AdvancedLogFormatter } from "./advanced-log-formatter";

describe("SimpleLogger LogFormatter", () => {

    describe("AdvancedLogFormatter", () => {
        const pi = 3.141592653589793;
        const instance = new AdvancedLogFormatter(true);

        afterAll(() => {
            // Caching was enabled, so it should have an entry for each of the used templates
            expect((instance as any).tplCache.size).toBe(45);
        });

        it("should return formated strings for simple placeholders", () => {
            expect(instance.format("%%")).toBe("%", "Format \"%%\" failed to parse");
            expect(instance.format("%b", 2)).toBe("10", "Format \"%b\" failed to parse");
            expect(instance.format("%c", 65)).toBe("A", "Format \"%c\" failed to parse");
            expect(instance.format("%d", 2)).toBe("2", "Format \"%d\" failed to parse");
            expect(instance.format("%i", 2)).toBe("2", "Format \"%i\" failed to parse");
            expect(instance.format("%d", "2")).toBe("2", "Format \"%d\" failed to parse");
            expect(instance.format("%i", "2")).toBe("2", "Format \"%i\" failed to parse");
            expect(instance.format("%j", {foo: "bar"})).toBe("{\"foo\":\"bar\"}", "Format \"%j\" failed to parse");
            expect(instance.format("%j", ["foo", "bar"])).toBe("[\"foo\",\"bar\"]", "Format \"%j\" failed to parse");
            expect(instance.format("%e", 2)).toBe("2e+0", "Format \"%e\" failed to parse");
            expect(instance.format("%u", 2)).toBe("2", "Format \"%u\" failed to parse");
            expect(instance.format("%u", -2)).toBe("4294967294", "Format \"%u\" failed to parse");
            expect(instance.format("%f", 2.2)).toBe("2.2", "Format \"%f\" failed to parse");
            expect(instance.format("%g", pi)).toBe("3.141592653589793", "Format \"%g\" failed to parse");
            expect(instance.format("%o", 8)).toBe("10", "Format \"%o\" failed to parse");
            expect(instance.format("%o", -8)).toBe("37777777770", "Format \"%o\" failed to parse");
            expect(instance.format("%s", "%s")).toBe("%s", "Format \"%s\" failed to parse");
            expect(instance.format("%x", 255)).toBe("ff", "Format \"%x\" failed to parse");
            expect(instance.format("%x", -255)).toBe("ffffff01", "Format \"%x\" failed to parse");
            expect(instance.format("%X", 255)).toBe("FF", "Format \"%X\" failed to parse");
            expect(instance.format("%X", -255)).toBe("FFFFFF01", "Format \"%X\" failed to parse");
            expect(instance.format("%2$s %3$s a %1$s", "cracker", "Polly", "wants")).toBe("Polly wants a cracker", "Format \"%2$s %3$s a %1$s\" failed to parse");
            expect(instance.format("Hello %(who)s!", {who: "world"})).toBe("Hello world!", "Format \"Hello %(who)s!\" failed to parse");
            expect(instance.format("%t", true)).toBe("true", "Format \"%t\" failed to parse");
            expect(instance.format("%.1t", true)).toBe("t", "Format \"%.1t\" failed to parse");
            expect(instance.format("%t", "true")).toBe("true", "Format \"%t\" failed to parse");
            expect(instance.format("%t", 1)).toBe("true", "Format \"%t\" failed to parse");
            expect(instance.format("%t", false)).toBe("false", "Format \"%t\" failed to parse");
            expect(instance.format("%.1t", false)).toBe("f", "Format \"%.1t\" failed to parse");
            expect(instance.format("%t", "")).toBe("false", "Format \"%t\" failed to parse");
            expect(instance.format("%t", 0)).toBe("false", "Format \"%t\" failed to parse");

            expect(instance.format("%T", undefined)).toBe("undefined", "Format \"%T\" failed to parse");
            expect(instance.format("%T", null)).toBe("null", "Format \"%T\" failed to parse");
            expect(instance.format("%T", true)).toBe("boolean", "Format \"%T\" failed to parse");
            expect(instance.format("%T", 42)).toBe("number", "Format \"%T\" failed to parse");
            expect(instance.format("%T", "This is a string")).toBe("string", "Format \"%T\" failed to parse");
            expect(instance.format("%T", Math.log)).toBe("function", "Format \"%T\" failed to parse");
            expect(instance.format("%T", [1, 2, 3])).toBe("array", "Format \"%T\" failed to parse");
            expect(instance.format("%T", {foo: "bar"})).toBe("object", "Format \"%T\" failed to parse");
            expect(instance.format("%T", /<('[^']*'|[^'>])*>/)).toBe("regexp", "Format \"%T\" failed to parse");

            expect(instance.format("%v", true)).toBe("true", "Format \"%v\" failed to parse");
            expect(instance.format("%v", 42)).toBe("42", "Format \"%v\" failed to parse");
            expect(instance.format("%v", "This is a string")).toBe("This is a string", "Format \"%v\" failed to parse");
            expect(instance.format("%v", [1, 2, 3])).toBe("1,2,3", "Format \"%v\" failed to parse");
            expect(instance.format("%v", {foo: "bar"})).toBe("[object Object]", "Format \"%v\" failed to parse");
            expect(instance.format("%v", /<("[^"]*"|'[^']*'|[^'">])*>/)).toBe("/<(\"[^\"]*\"|'[^']*'|[^'\">])*>/", "Format \"%v\" failed to parse");
        });

        it("should return formated strings for complex placeholders", () => {
            // sign
            expect(instance.format("%d", 2)).toBe("2", "Format \"%d\" failed to parse");
            expect(instance.format("%d", -2)).toBe("-2", "Format \"%d\" failed to parse");
            expect(instance.format("%+d", 2)).toBe("+2", "Format \"%+d\" failed to parse");
            expect(instance.format("%+d", -2)).toBe("-2", "Format \"%+d\" failed to parse");
            expect(instance.format("%i", 2)).toBe("2", "Format \"%i\" failed to parse");
            expect(instance.format("%i", -2)).toBe("-2", "Format \"%i\" failed to parse");
            expect(instance.format("%+i", 2)).toBe("+2", "Format \"%+i\" failed to parse");
            expect(instance.format("%+i", -2)).toBe("-2", "Format \"%+i\" failed to parse");
            expect(instance.format("%f", 2.2)).toBe("2.2", "Format \"%f\" failed to parse");
            expect(instance.format("%f", -2.2)).toBe("-2.2", "Format \"%f\" failed to parse");
            expect(instance.format("%+f", 2.2)).toBe("+2.2", "Format \"%+f\" failed to parse");
            expect(instance.format("%+f", -2.2)).toBe("-2.2", "Format \"%+f\" failed to parse");
            expect(instance.format("%+.1f", -2.34)).toBe("-2.3", "Format \"%+.1f\" failed to parse");
            expect(instance.format("%+.1f", -0.01)).toBe("-0.0", "Format \"%+.1f\" failed to parse");
            expect(instance.format("%.6g", pi)).toBe("3.14159", "Format \"%.6g\" failed to parse");
            expect(instance.format("%.3g", pi)).toBe("3.14", "Format \"%.3g\" failed to parse");
            expect(instance.format("%.1g", pi)).toBe("3", "Format \"%.1g\" failed to parse");
            expect(instance.format("%+010d", -123)).toBe("-000000123", "Format \"%+010d\" failed to parse");
            expect(instance.format("%+'_10d", -123)).toBe("______-123", "Format \"%+'_10d\" failed to parse");
            expect(instance.format("%f %f", -234.34, 123.2)).toBe("-234.34 123.2", "Format \"%f %f\" failed to parse");

            // padding
            expect(instance.format("%05d", -2)).toBe("-0002", "Format \"%05d\" failed to parse");
            expect(instance.format("%05i", -2)).toBe("-0002", "Format \"%05i\" failed to parse");
            expect(instance.format("%5s", "<")).toBe("    <", "Format \"%5s\" failed to parse");
            expect(instance.format("%05s", "<")).toBe("0000<", "Format \"%05s\" failed to parse");
            expect(instance.format("%'_5s", "<")).toBe("____<", "Format \"%'_5s\" failed to parse");
            expect(instance.format("%-5s", ">")).toBe(">    ", "Format \"%-5s\" failed to parse");
            expect(instance.format("%0-5s", ">")).toBe(">0000", "Format \"%0-5s\" failed to parse");
            expect(instance.format("%'_-5s", ">")).toBe(">____", "Format \"%'_-5s\" failed to parse");
            expect(instance.format("%5s", "xxxxxx")).toBe("xxxxxx", "Format \"%5s\" failed to parse");
            expect(instance.format("%02u", 1234)).toBe("1234", "Format \"%02u\" failed to parse");
            expect(instance.format("%8.3f", -10.23456)).toBe(" -10.235", "Format \"%8.3f\" failed to parse");
            expect(instance.format("%f %s", -12.34, "xxx")).toBe("-12.34 xxx", "Format \"%f %s\" failed to parse");
            expect(instance.format("%2j", {foo: "bar"})).toBe("{\n  \"foo\": \"bar\"\n}", "Format \"%2j\" failed to parse");
            expect(instance.format("%2j", ["foo", "bar"])).toBe("[\n  \"foo\",\n  \"bar\"\n]", "Format \"%2j\" failed to parse");

            // precision
            expect(instance.format("%.1f", 2.345)).toBe("2.3", "Format \"%.1f\" failed to parse");
            expect(instance.format("%5.5s", "xxxxxx")).toBe("xxxxx", "Format \"%5.5s\" failed to parse");
            expect(instance.format("%5.1s", "xxxxxx")).toBe("    x", "Format \"%5.1s\" failed to parse");

        });

        it("should return formated strings for callbacks", () => {
            expect(instance.format("%s", () => "foobar")).toBe("foobar", "Format \"%s\" failed to parse");
        });

        it("should ignore undefined or null input", () => {
            expect(instance.format(null)).toBeUndefined();
            expect(instance.format("")).toBeUndefined();
        });

        it("should allow for no arguments to be passed", () => {
            expect(instance.format("My log")).toBe("My log");
        });
    });
});
