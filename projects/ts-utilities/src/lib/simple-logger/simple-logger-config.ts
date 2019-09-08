import { Level } from "./level";
import LogOutput from "./log-output";
import LogFormatter from "./log-formatter";

export default interface SimpleLoggerConfig {
    /** One of Level, e.g. Level.DEBUG */
    level: Level;
    /** An Implementation of {@see LogOutput} */
    out: LogOutput;
    /** An Implementation of {@see LogFormatter} */
    formatter: LogFormatter;
}
