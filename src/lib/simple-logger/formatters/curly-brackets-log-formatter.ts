import { LogFormatter } from "./log-formatter";

/**
 * Replaces curly brackets ("{}") with the supplied arguments, in order of occurrence.
 *
 * Input: "My log with {} like {}."
 * Args: "replacements", 123
 * Output: "My log with replacements like 123."
 */
export class CurlyBracketsLogFormatter implements LogFormatter {
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
