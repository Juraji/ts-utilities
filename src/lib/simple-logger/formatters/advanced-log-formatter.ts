/* tslint:disable:no-bitwise no-conditional-assignment */
import { LogFormatter } from "./log-formatter";

type FNodeType = "b" | "c" | "d" | "i" | "j" | "e" | "f" | "g" | "o" | "s" | "t" | "T" | "u" | "v" | "x" | "X";

interface TemplateNode {
    plainText: boolean;
    placeholder: string;
    argIndex: number;
    keys: string[];
    sign: string;
    padChar: string;
    align: string;
    width: number;
    precision: number;
    type: FNodeType;
}

/**
 * Advanced formatting
 */
export class AdvancedLogFormatter implements LogFormatter {
    private readonly tplCache: Map<string, TemplateNode[]>;
    private readonly regexMap = {
        notTypeOfPrimitive: /[^vT]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        keyAccess: /^\.([a-z_][a-z_\d]*)/i,
        indexAccess: /^\[(\d+)]/,
        sign: /^[+-]/
    };

    /**
     * Sprintf compatible formatting.
     *
     * <i>Converted to TypeScript from https://github.com/alexei/sprintf.js</i>
     *
     * <pre>
     *     // Just a few examples
     *     const formatter = new AdvancedLogFormatter();
     *
     *     // Object keywords
     *     const users = {name: "Juraji"}
     *     console.log(formatter.format('Hello %(name)s', user));
     *     // Log: Hello Juraji
     *
     *     // Positional arguments
     *     console.log(formatter.format("%2$s %3$s a %1$s", "cracker", "Polly", "wants"));
     *     // Log: Polly wants a cracker
     *
     *     // Functions
     *     console.log(formatter.format("Current date and time: %s", () => new Date().toString()));
     *     // Log: Sat Sep 14 2019 00:27:38 GMT+0200
     * </pre>
     *
     * @param cacheTemplates Cache template nodes, enhances formatter speed greatly when using the same templates over and over
     */
    constructor(private readonly cacheTemplates = false) {
        if (cacheTemplates) {
            this.tplCache = new Map<string, TemplateNode[]>();
        }
    }

    public format(template: string, ...args: any[]): string {
        if (template == null || template.length === 0) {
            // Return empty templates as null
            return undefined;
        } else if (template.indexOf("%") === -1){
            // Template does not contain any nodes
            return template;
        } else {
            let nodes: TemplateNode[];

            if (this.cacheTemplates) {
                // Get nodes from cache else calculate nodes
                if (this.cacheTemplates && this.tplCache.has(template)) {
                    nodes = this.tplCache.get(template);
                } else {
                    nodes = this.sprinfParseTemplate(template);
                    this.tplCache.set(template, nodes);
                }
            } else {
                // Calculate nodes
                nodes = this.sprinfParseTemplate(template);
            }

            // Run format and return result
            return this.sprintfFormat(nodes, args);
        }
    }

    private sprinfParseTemplate(template: string): TemplateNode[] {
        const nodes: TemplateNode[] = [];
        let tpl = template;
        let argNames = 0;
        let match: RegExpMatchArray;

        while (tpl.length > 0) {
            if ((match = this.regexMap.text.exec(tpl))) {
                nodes.push({plainText: true, placeholder: match[0]} as TemplateNode);
            } else if ((match = this.regexMap.modulo.exec(tpl))) {
                nodes.push({plainText: true, placeholder: "%"} as TemplateNode);
            } else if ((match = this.regexMap.placeholder.exec(tpl))) {
                const node = {plainText: false} as TemplateNode;
                let fieldList: any[];

                if (match[2]) {
                    argNames |= 1;
                    let replacementField = match[2];
                    let fieldMatch: RegExpMatchArray = [];

                    if ((fieldMatch = this.regexMap.key.exec(replacementField)) !== null) {
                        fieldList = [fieldMatch[1]];
                        while ((replacementField = replacementField.substring(fieldMatch[0].length)) !== "") {
                            if ((fieldMatch = this.regexMap.keyAccess.exec(replacementField)) !== null) {
                                fieldList.push(fieldMatch[1]);
                            } else if ((fieldMatch = this.regexMap.indexAccess.exec(replacementField)) !== null) {
                                fieldList.push(fieldMatch[1]);
                            } else {
                                throw new SyntaxError("[sprintf] failed to parse named argument key");
                            }
                        }
                    } else {
                        throw new SyntaxError("[sprintf] failed to parse named argument key");
                    }
                } else {
                    argNames |= 2;
                }
                if (argNames === 3) {
                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                }

                node.placeholder = match[0];
                node.argIndex = parseInt(match[1], 10) - 1;
                node.keys = fieldList;
                node.sign = match[3];
                node.padChar = match[4];
                node.align = match[5];
                node.width = parseInt(match[6], 10) || 0;
                node.precision = parseInt(match[7], 10);
                node.type = match[8] as FNodeType;

                nodes.push(node);
            } else {
                throw new SyntaxError("[sprintf] unexpected placeholder");
            }

            tpl = tpl.substring(match[0].length);
        }

        return nodes;
    }

    private sprintfFormat(nodes: TemplateNode[], args: any[]): string {
        let cursor = 0;
        let output = "";

        for (const node of nodes) {
            if (node.plainText) {
                // Node is plain text
                output += node.placeholder;
            } else {
                // Node is placeholder
                let arg: any;
                let isPositive: boolean;

                if (node.keys) {
                    // Keyword argument
                    arg = args[cursor];
                    for (const key of node.keys) {
                        if (arg == null) {
                            throw new Error(`Could not find value for argument "${node.placeholder}"`);
                        }
                        arg = arg[key];
                    }
                } else if (node.argIndex) {
                    // positional argument (explicit)
                    arg = args[node.argIndex];
                } else {
                    // positional argument (implicit)
                    arg = args[cursor++];
                }

                if (this.regexMap.notTypeOfPrimitive.test(node.type)
                    && arg instanceof Function) {
                    arg = arg();
                }

                if ("bcdiefguxX".indexOf(node.type) > -1
                    && (typeof arg !== "number" && isNaN(arg))) {
                    throw new TypeError(`[sprintf] expecting number but found ${typeof arg}`);
                }

                if ("diefg".indexOf(node.type) > -1) {
                    isPositive = arg >= 0;
                }

                switch (node.type) {
                    case "b":
                        arg = parseInt(arg, 10).toString(2);
                        break;
                    case "c":
                        arg = String.fromCharCode(parseInt(arg, 10));
                        break;
                    case "d":
                    case "i":
                        arg = parseInt(arg, 10);
                        break;
                    case "j":
                        arg = JSON.stringify(arg, null, node.width);
                        break;
                    case "e":
                        arg = node.precision ? parseFloat(arg).toExponential(node.precision) : parseFloat(arg).toExponential();
                        break;
                    case "f":
                        arg = node.precision ? parseFloat(arg).toFixed(node.precision) : parseFloat(arg);
                        break;
                    case "g":
                        arg = node.precision ? String(Number(arg.toPrecision(node.precision))) : parseFloat(arg);
                        break;
                    case "o":
                        arg = (parseInt(arg, 10) >>> 0).toString(8);
                        break;
                    case "s":
                        arg = String(arg);
                        arg = (node.precision ? arg.substring(0, node.precision) : arg);
                        break;
                    case "t":
                        arg = String(!!arg);
                        arg = (node.precision ? arg.substring(0, node.precision) : arg);
                        break;
                    case "T":
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                        arg = (node.precision ? arg.substring(0, node.precision) : arg);
                        break;
                    case "u":
                        arg = parseInt(arg, 10) >>> 0;
                        break;
                    case "v":
                        arg = arg.valueOf();
                        arg = (node.precision ? arg.substring(0, node.precision) : arg);
                        break;
                    case "x":
                        arg = (parseInt(arg, 10) >>> 0).toString(16);
                        break;
                    case "X":
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                        break;
                }

                if (node.type === "j") {
                    output += arg;
                } else {
                    let sign: string;

                    if ("diefg".indexOf(node.type) > -1 && (!isPositive || node.sign)) {
                        sign = isPositive ? "+" : "-";
                        arg = arg.toString().replace(this.regexMap.sign, "");
                    } else {
                        sign = "";
                    }

                    const padCharacter = node.padChar ? node.padChar === "0" ? "0" : node.padChar.charAt(1) : " ";
                    const padLength = node.width - (sign + arg).length;
                    const pad = node.width ? (padLength > 0 ? padCharacter.repeat(padLength) : "") : "";
                    output += node.align ? sign + arg + pad : (padCharacter === "0" ? sign + pad + arg : pad + sign + arg);
                }
            }
        }

        return output;
    }
}
