export default interface LogOutput {
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
