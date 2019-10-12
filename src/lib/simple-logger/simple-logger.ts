import { SimpleLoggerConfig } from "./config/simple-logger-config";
import { Level } from "./config/level";

/**
 * @ignore
 * Simple Logger implementation
 */
export class SimpleLogger {
    private readonly config: SimpleLoggerConfig;

    /**
     * Current logging level.
     */
    public get level(): Level {
        return this.config.level;
    }

    constructor(config: SimpleLoggerConfig) {
        this.config = Object.create(config);
    }

    /**
     * Set target logging level.
     * @param level The new logging level.
     */
    public setLevel(level: Level) {
        this.configure({level});
    }

    /**
     * Reconfigure this logger.
     * Note that only the properties, present in the config parameter are set.
     * Properties not present in the config are kept in their current state.
     * @param config New configuration options to apply
     */
    public configure(config: Partial<SimpleLoggerConfig>) {
        Object.assign(this.config, config);
    }

    /**
     * Log at level DEBUG.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public debug(tpl: string, ...args: any[]): void {
        this.doLog(Level.DEBUG, this.config.out.debug, tpl, args);
    }

    /**
     * Log at level ERROR.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public error(tpl: string, ...args: any[]): void {
        this.doLog(Level.ERROR, this.config.out.error, tpl, args);
    }

    /**
     * Log at level INFO.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public info(tpl: string, ...args: any[]): void {
        this.doLog(Level.INFO, this.config.out.info, tpl, args);
    }

    /**
     * Log at level WARN.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public warn(tpl: string, ...args: any[]): void {
        this.doLog(Level.WARN, this.config.out.warn, tpl, args);
    }

    private doLog(targetLevel: Level, out: (message: string) => void, tpl: string, args: any[]) {
        if (this.config.level >= targetLevel) {
            out.apply(this, [this.config.formatter.format(tpl, ...args)]);
        }
    }
}
