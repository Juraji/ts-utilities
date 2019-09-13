import { LogOutput } from "./log-output";

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
