import { Level } from "./level";
import { BrowserConsoleLogOutput } from "./log-output";
import { CurlyBracketsFormatter } from "./log-formatter";
import SimpleLoggerConfig from "./simple-logger-config";
import SimpleLogger from "./simple-logger";

const LOGGER_DEFAULTS: SimpleLoggerConfig = {
    level: Level.INFO,
    out: new BrowserConsoleLogOutput(),
    formatter: new CurlyBracketsFormatter()
};

const LOGGER = new SimpleLogger(LOGGER_DEFAULTS);
export default LOGGER;

export function reconfigureSimpleLogger() {
    LOGGER.configure(LOGGER_DEFAULTS);
}
