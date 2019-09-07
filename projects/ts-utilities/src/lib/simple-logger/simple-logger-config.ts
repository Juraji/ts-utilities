import { Level } from "./level";
import LogOutput from "./log-output";
import LogFormatter from "./log-formatter";

export default interface SimpleLoggerConfig {
    level?: Level;
    out?: LogOutput;
    formatter?: LogFormatter;
}
