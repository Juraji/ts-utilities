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
