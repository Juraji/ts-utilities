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

