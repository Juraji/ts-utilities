export default interface LogFormatter {
    format(template: string, ...args: any[]): string;
}

/**
 * Replaces curly brackets ("{}") with the supplied arguments, in order of occurrence
 *
 * Input: "My log with {} like {}."
 * Args: "replacements", 123
 * Output: My log with replacements like 123.
 */
export class CurlyBracketsFormatter implements LogFormatter {
    public format(template: string, ...args): string {
        if (template) {
            if (args) {
                let out = template;

                for (const arg of args) {
                    out = out.replace("{}", arg);
                }

                return out;
            } else {
                return template;
            }
        }
    }
}

/**
 * Replaces numbered curly brackets ("{0}") with the supplied arguments, by zero-based index
 *
 * Input: "My log with {1} like {0}."
 * Args: "replacements", 123
 * Output: My log with 123 like replacements.
 */
export class NumberedCurlyBracesFormatter implements LogFormatter {
    public format(template: string, ...args: any[]): string {
        if (template) {
            if (args) {
                let out = template;

                for (let i = 0; i < args.length; i++) {
                    out = out.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
                }

                return out;
            } else {
                return template;
            }
        }
    }
}
