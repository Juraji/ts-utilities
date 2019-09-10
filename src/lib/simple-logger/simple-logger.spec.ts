import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import Level = SimpleLogger.Level;
import CurlyBracketsFormatter = SimpleLogger.CurlyBracketsFormatter;
import BrowserConsoleLogOutput = SimpleLogger.BrowserConsoleLogOutput;
import NumberedCurlyBracesFormatter = SimpleLogger.NumberedCurlyBracesFormatter;
import { LOGGER, SimpleLogger } from "./simple-logger";

describe("Global constant LOGGER", () => {

    describe("SimpleLogger", () => {
        let debugOutSpy: Spy;
        let errorOutSpy: Spy;
        let infoOutSpy: Spy;
        let warnOutSpy: Spy;

        beforeEach(() => {
            // Reconfigure logger per test
            LOGGER.reconfigure();

            // Setup spies as logger outputs
            debugOutSpy = createSpy("debugOutSpy");
            errorOutSpy = createSpy("errorOutSpy");
            infoOutSpy = createSpy("infoOutSpy");
            warnOutSpy = createSpy("warnOutSpy");

            LOGGER().configure({
                out: {
                    debug: debugOutSpy,
                    info: infoOutSpy,
                    warn: warnOutSpy,
                    error: errorOutSpy
                }
            });
        });

        it("should be globally defined", () => {
            const logger = LOGGER();

            expect(logger).toBeDefined("LOGGER global is undefined");
            expect(logger.constructor.name).toEqual("SimpleLogger");

            // Expect defaults
            expect(logger.level).toBe(Level.INFO);
        });

        it("should format messages", () => {
            LOGGER().info("My log with {} like {}.", "replacements", 123);

            expect(infoOutSpy).toHaveBeenCalledWith("My log with replacements like 123.");
        });

        it("should support customized formatters", () => {
            class MyFormatter extends CurlyBracketsFormatter {
                public format(template: string, context: string, ...args: any[]): string {
                    return super.format(`[${context}] ${template}`, ...args);
                }
            }

            LOGGER().configure({formatter: new MyFormatter()});
            LOGGER().error("{} happened", "TEST", "Something");

            expect(errorOutSpy).toHaveBeenCalledWith("[TEST] Something happened");
        });

        describe("should uphold log level set via #configure()", () => {
            const callLogger = () => {
                LOGGER().debug("Debug log");
                LOGGER().info("Info log");
                LOGGER().warn("Warn log");
                LOGGER().error("Error log");
            };

            it("at level DEBUG", () => {
                LOGGER().setLevel(Level.DEBUG);
                expect(LOGGER().level).toBe(Level.DEBUG);

                callLogger();

                expect(debugOutSpy).toHaveBeenCalledWith("Debug log");
                expect(infoOutSpy).toHaveBeenCalledWith("Info log");
                expect(warnOutSpy).toHaveBeenCalledWith("Warn log");
                expect(errorOutSpy).toHaveBeenCalledWith("Error log");
            });

            it("at level INFO", () => {
                LOGGER().setLevel(Level.INFO);
                expect(LOGGER().level).toBe(Level.INFO);

                callLogger();

                expect(debugOutSpy).not.toHaveBeenCalled();
                expect(infoOutSpy).toHaveBeenCalledWith("Info log");
                expect(warnOutSpy).toHaveBeenCalledWith("Warn log");
                expect(errorOutSpy).toHaveBeenCalledWith("Error log");
            });

            it("at level WARN", () => {
                LOGGER().setLevel(Level.WARN);
                expect(LOGGER().level).toBe(Level.WARN);

                callLogger();

                expect(debugOutSpy).not.toHaveBeenCalled();
                expect(infoOutSpy).not.toHaveBeenCalled();
                expect(warnOutSpy).toHaveBeenCalledWith("Warn log");
                expect(errorOutSpy).toHaveBeenCalledWith("Error log");
            });

            it("at level ERROR", () => {
                LOGGER().setLevel(Level.ERROR);
                expect(LOGGER().level).toBe(Level.ERROR);

                callLogger();

                expect(debugOutSpy).not.toHaveBeenCalled();
                expect(infoOutSpy).not.toHaveBeenCalled();
                expect(warnOutSpy).not.toHaveBeenCalled();
                expect(errorOutSpy).toHaveBeenCalledWith("Error log");
            });

            it("at level OFF", () => {
                LOGGER().setLevel(Level.OFF);
                expect(LOGGER().level).toBe(Level.OFF);

                callLogger();

                expect(debugOutSpy).not.toHaveBeenCalled();
                expect(infoOutSpy).not.toHaveBeenCalled();
                expect(warnOutSpy).not.toHaveBeenCalled();
                expect(errorOutSpy).not.toHaveBeenCalled();
            });
        });
    });

    describe("LogOutput", () => {

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

            it("should ignore undefined or null input", () => {
                const formatted = formatter.format(null);
                expect(formatted).toBeUndefined();
            });

            it("should allow for no arguments to be passed", () => {
                const formatted = formatter.format("My log");
                expect(formatted).toBe("My log");
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
});
