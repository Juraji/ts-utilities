import { Level } from "./level";
import LogOutput from "./log-output";
import LogFormatter from "./log-formatter";

/**
 * level: One of Level, e.g. Level.DEBUG
 * out: An Implementation of {@see LogOutput}
 * formatter: An Implementation of {@see LogFormatter}
 */
export default interface SimpleLoggerConfig {
    level?: Level;
    out?: LogOutput;
    formatter?: LogFormatter;
}
