import { Level } from "./level";
import { BrowserConsoleLogOutput } from "./log-output";
import { CurlyBracketsFormatter } from "./log-formatter";
import SimpleLoggerConfig from "./simple-logger-config";
import SimpleLogger from "./simple-logger";

let _LOGGER_HOLDER: SimpleLogger;
const _DEFAULTS: Readonly<SimpleLoggerConfig> = {
    level: Level.INFO,
    out: new BrowserConsoleLogOutput(),
    formatter: new CurlyBracketsFormatter()
};

/**
 * Create or get the current logger
 */
export default function LOGGER(): Readonly<SimpleLogger> {
    if (!_LOGGER_HOLDER) {
        _LOGGER_HOLDER = new SimpleLogger(_DEFAULTS);
    }

    return _LOGGER_HOLDER;
}

/**
 * Reset the global SimpleLogger to defaults
 */
export function reconfigureSimpleLogger() {
    LOGGER().configure(_DEFAULTS);
}
