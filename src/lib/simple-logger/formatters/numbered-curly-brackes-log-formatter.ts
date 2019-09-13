import { LogFormatter } from "./log-formatter";

/**
 * Replaces numbered curly brackets ("{0}") with the supplied arguments, by zero-based index.
 *
 * Input: "My log with {1} like {0}."
 * Args: "replacements", 123
 * Output: "My log with 123 like replacements."
 */
export class NumberedCurlyBrackesLogFormatter implements LogFormatter {
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
