import { SimpleLoggerConfig } from "./config/simple-logger-config";
import { Level } from "./config/level";

/**
 * Simple Logger interface
 */
export interface SimpleLogger {
    /**
     * Current logging level.
     */
    readonly level: Level;

    /**
     * Set target logging level.
     * @param level The new logging level.
     */
    setLevel(level: Level): void;

    /**
     * Reconfigure this logger.
     * Note that only the properties, present in the config parameter are set.
     * Properties not present in the config are kept in their current state.
     * @param config New configuration options to apply
     */
    configure(config: Partial<SimpleLoggerConfig>): void;

    /**
     * Log at level DEBUG.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    debug(tpl: string, ...args: any[]): void;

    /**
     * Log at level ERROR.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    error(tpl: string, ...args: any[]): void;

    /**
     * Log at level INFO.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    info(tpl: string, ...args: any[]): void;

    /**
     * Log at level WARN.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    warn(tpl: string, ...args: any[]): void;
}

/**
 * @ignore
 * Simple Logger implementation
 */
export class SimpleLoggerImpl implements SimpleLogger {
    private readonly config: SimpleLoggerConfig;

    public get level(): Level {
        return this.config.level;
    }

    constructor(config: SimpleLoggerConfig) {
        this.config = Object.create(config);
    }

    public setLevel(level: Level) {
        this.configure({level});
    }

    public configure(config: Partial<SimpleLoggerConfig>) {
        Object.assign(this.config, config);
    }

    public debug(tpl: string, ...args: any[]): void {
        this.doLog(Level.DEBUG, this.config.out.debug, tpl, args);
    }

    public error(tpl: string, ...args: any[]): void {
        this.doLog(Level.ERROR, this.config.out.error, tpl, args);
    }

    public info(tpl: string, ...args: any[]): void {
        this.doLog(Level.INFO, this.config.out.info, tpl, args);
    }

    public warn(tpl: string, ...args: any[]): void {
        this.doLog(Level.WARN, this.config.out.warn, tpl, args);
    }

    private doLog(targetLevel: Level, out: (message: string) => void, tpl: string, args: any[]) {
        if (this.config.level >= targetLevel) {
            out.apply(this, [this.config.formatter.format(tpl, ...args)]);
        }
    }
}
