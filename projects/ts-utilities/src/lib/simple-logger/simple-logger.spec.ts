import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import { Level } from "./level";
import LOGGER, { reconfigureSimpleLogger } from "./init";
import { CurlyBracketsFormatter } from "./log-formatter";

describe("Global constant LOGGER: SimpleLogger", () => {
    let debugOutSpy: Spy;
    let errorOutSpy: Spy;
    let infoOutSpy: Spy;
    let warnOutSpy: Spy;

    beforeEach(() => {
        // Reconfigure logger per test
        reconfigureSimpleLogger();

        // Setup spies as logger outputs
        debugOutSpy = createSpy("debugOutSpy");
        errorOutSpy = createSpy("errorOutSpy");
        infoOutSpy = createSpy("infoOutSpy");
        warnOutSpy = createSpy("warnOutSpy");

        LOGGER.configure({
            out: {
                debug: debugOutSpy,
                info: infoOutSpy,
                warn: warnOutSpy,
                error: errorOutSpy
            }
        });
    });

    it("should be globally defined", () => {
        expect(LOGGER).toBeDefined("LOGGER global is undefined");
        expect(LOGGER.constructor.name).toEqual("SimpleLogger");
    });

    it("should format messages", () => {
        LOGGER.info("My log with {} like {}.", "replacements", 123);

        expect(infoOutSpy).toHaveBeenCalledWith("My log with replacements like 123.");
    });

    it("should support customized formatters", () => {
        class MyFormatter extends CurlyBracketsFormatter {
            public format(template: string, context: string, ...args: any[]): string {
                return super.format(`[${context}] ${template}`, ...args);
            }
        }

        LOGGER.configure({formatter: new MyFormatter()});
        LOGGER.error("{} happened", "TEST", "Something");

        expect(errorOutSpy).toHaveBeenCalledWith("[TEST] Something happened");
    });

    describe("should uphold log level set via #configure()", () => {
        const callLogger = () => {
            LOGGER.debug("Debug log");
            LOGGER.info("Info log");
            LOGGER.warn("Warn log");
            LOGGER.error("Error log");
        };

        it("at level DEBUG", () => {
            LOGGER.configure({level: Level.DEBUG});

            callLogger();

            expect(debugOutSpy).toHaveBeenCalledWith("Debug log");
            expect(infoOutSpy).toHaveBeenCalledWith("Info log");
            expect(warnOutSpy).toHaveBeenCalledWith("Warn log");
            expect(errorOutSpy).toHaveBeenCalledWith("Error log");
        });

        it("at level INFO", () => {
            LOGGER.configure({level: Level.INFO});

            callLogger();

            expect(debugOutSpy).not.toHaveBeenCalled();
            expect(infoOutSpy).toHaveBeenCalledWith("Info log");
            expect(warnOutSpy).toHaveBeenCalledWith("Warn log");
            expect(errorOutSpy).toHaveBeenCalledWith("Error log");
        });

        it("at level WARN", () => {
            LOGGER.configure({level: Level.WARN});

            callLogger();

            expect(debugOutSpy).not.toHaveBeenCalled();
            expect(infoOutSpy).not.toHaveBeenCalled();
            expect(warnOutSpy).toHaveBeenCalledWith("Warn log");
            expect(errorOutSpy).toHaveBeenCalledWith("Error log");
        });

        it("at level ERROR", () => {
            LOGGER.configure({level: Level.ERROR});

            callLogger();

            expect(debugOutSpy).not.toHaveBeenCalled();
            expect(infoOutSpy).not.toHaveBeenCalled();
            expect(warnOutSpy).not.toHaveBeenCalled();
            expect(errorOutSpy).toHaveBeenCalledWith("Error log");
        });

        it("at level OFF", () => {
            LOGGER.configure({level: Level.OFF});

            callLogger();

            expect(debugOutSpy).not.toHaveBeenCalled();
            expect(infoOutSpy).not.toHaveBeenCalled();
            expect(warnOutSpy).not.toHaveBeenCalled();
            expect(errorOutSpy).not.toHaveBeenCalled();
        });
    });
});
