export class SimpleLogger {
    private readonly config: SimpleLogger.SimpleLoggerConfig;

    /**
     * Get current logging level.
     */
    public get level(): SimpleLogger.Level {
        return this.config.level;
    }

    constructor(config: SimpleLogger.SimpleLoggerConfig) {
        this.config = Object.create(config);
    }

    /**
     * Set target logging level.
     * @param level The new logging level.
     */
    public setLevel(level: SimpleLogger.Level) {
        this.configure({level});
    }

    /**
     * Reconfigure this logger.
     * Note that only the properties, present in the config parameter are set.
     * Properties not present in the config are kept in their current state.
     * @param config New configuration options to apply
     */
    public configure(config: Partial<SimpleLogger.SimpleLoggerConfig>) {
        Object.assign(this.config, config);
    }

    /**
     * Log at level DEBUG.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public debug(tpl: string, ...args: any[]): void {
        this.doLog(SimpleLogger.Level.DEBUG, this.config.out.debug, tpl, args);
    }

    /**
     * Log at level ERROR.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public error(tpl: string, ...args: any[]): void {
        this.doLog(SimpleLogger.Level.ERROR, this.config.out.error, tpl, args);
    }

    /**
     * Log at level INFO.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public info(tpl: string, ...args: any[]): void {
        this.doLog(SimpleLogger.Level.INFO, this.config.out.info, tpl, args);
    }


    /**
     * Log at level WARN.
     * @param tpl A log message.
     * @param args Optional replacement parameters.
     */
    public warn(tpl: string, ...args: any[]): void {
        this.doLog(SimpleLogger.Level.WARN, this.config.out.warn, tpl, args);
    }

    private doLog(targetLevel: SimpleLogger.Level, out: (message: string) => void, tpl: string, args: any[]) {
        if (this.config.level >= targetLevel) {
            out.apply(this, [this.config.formatter.format(tpl, ...args)]);
        }
    }
}

export namespace SimpleLogger {
    /**
     * Logging level presets.
     * Each level will have all lower levels enabled as well.
     */
    export enum Level {
        OFF = 0,
        ERROR = 1,
        WARN = 2,
        INFO = 3,
        DEBUG = 4
    }

    export interface LogFormatter {
        /**
         * Format the given template and arguments to a string for log output.
         * @param template The message template.
         * @param args The message arguments.
         */
        format(template: string, ...args: any[]): string;
    }

    export interface LogOutput {
        /**
         * Log DEBUG message.
         * @param message The message to log.
         */
        debug(message: string): void;

        /**
         * Log ERROR message.
         * @param message The message to log.
         */
        error(message: string): void;

        /**
         * Log INFO message.
         * @param message The message to log.
         */
        info(message: string): void;

        /**
         * Log WARN message.
         * @param message The message to log.
         */
        warn(message: string): void;
    }

    export interface SimpleLoggerConfig {
        /** One of Level, e.g. Level.DEBUG */
        level: Level;
        /** An Implementation of {@see LogOutput} */
        out: LogOutput;
        /** An Implementation of {@see LogFormatter} */
        formatter: LogFormatter;
    }

    /**
     * Replaces curly brackets ("{}") with the supplied arguments, in order of occurrence.
     *
     * Input: "My log with {} like {}."
     * Args: "replacements", 123
     * Output: "My log with replacements like 123."
     */
    export class CurlyBracketsFormatter implements LogFormatter {
        public format(template: string, ...args): string {
            if (template) {
                let out = template;

                for (const arg of args) {
                    out = out.replace("{}", arg);
                }

                return out;
            }
        }
    }

    /**
     * Replaces numbered curly brackets ("{0}") with the supplied arguments, by zero-based index.
     *
     * Input: "My log with {1} like {0}."
     * Args: "replacements", 123
     * Output: "My log with 123 like replacements."
     */
    export class NumberedCurlyBracesFormatter implements LogFormatter {
        public format(template: string, ...args: any[]): string {
            if (template) {
                let out = template;

                for (let i = 0; i < args.length; i++) {
                    out = out.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
                }

                return out;
            }
        }
    }

    /**
     * Log to console
     */
    export class BrowserConsoleLogOutput implements LogOutput {
        public debug(message: string): void {
            // tslint:disable-next-line:no-console
            console.debug(message);
        }

        public error(message: string): void {
            console.error(message);
        }

        public info(message: string): void {
            // tslint:disable-next-line:no-console
            console.info(message);
        }

        public warn(message: string): void {
            console.warn(message);
        }
    }
}
