import { Level } from "./level";
import { LogOutput } from "../output/log-output";
import { LogFormatter } from "../formatters/log-formatter";

export interface SimpleLoggerConfig {
    /** One of Level, e.g. Level.DEBUG */
    level: Level;
    /** An Implementation of {@see LogOutput} */
    out: LogOutput;
    /** An Implementation of {@see LogFormatter} */
    formatter: LogFormatter;
}
