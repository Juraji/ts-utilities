import { BrowserConsoleLogOutput } from "./browser-console-log-output";
import Spy = jasmine.Spy;

describe("SimpleLogger LogOutput", () => {

    describe("BrowserConsoleLogOutput", () => {
        let output: BrowserConsoleLogOutput;
        let consoleDebugSpy: Spy;
        let consoleErrorSpy: Spy;
        let consoleInfoSpy: Spy;
        let consoleWarnSpy: Spy;

        beforeEach(() => {
            output = new BrowserConsoleLogOutput();
            consoleDebugSpy = spyOn(console, "debug").and.stub();
            consoleErrorSpy = spyOn(console, "error").and.stub();
            consoleInfoSpy = spyOn(console, "info").and.stub();
            consoleWarnSpy = spyOn(console, "warn").and.stub();
        });

        it("should call console.debug when calling #debug()", () => {
            output.debug("Test message");

            expect(consoleDebugSpy).toHaveBeenCalledWith("Test message");
        });

        it("should call console.error when calling #error()", () => {
            output.error("Test message");

            expect(consoleErrorSpy).toHaveBeenCalledWith("Test message");
        });

        it("should call console.info when calling #info()", () => {
            output.info("Test message");

            expect(consoleInfoSpy).toHaveBeenCalledWith("Test message");
        });

        it("should call console.warn when calling #warn()", () => {
            output.warn("Test message");

            expect(consoleWarnSpy).toHaveBeenCalledWith("Test message");
        });
    });
});
