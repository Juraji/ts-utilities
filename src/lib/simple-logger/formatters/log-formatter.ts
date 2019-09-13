export interface LogFormatter {
    /**
     * Format the given template and arguments to a string for log output.
     * @param template The message template.
     * @param args The message arguments.
     */
    format(template: string, ...args: any[]): string;
}

