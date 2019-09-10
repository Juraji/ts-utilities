import { SimpleLogger } from "./simple-logger";
import SimpleLoggerConfig = SimpleLogger.SimpleLoggerConfig;
import Level = SimpleLogger.Level;
import BrowserConsoleLogOutput = SimpleLogger.BrowserConsoleLogOutput;
import CurlyBracketsFormatter = SimpleLogger.CurlyBracketsFormatter;

let _LOGGER_HOLDER: SimpleLogger;
const _DEFAULTS: Readonly<SimpleLoggerConfig> = {
    level: Level.INFO,
    out: new BrowserConsoleLogOutput(),
    formatter: new CurlyBracketsFormatter()
};

/**
 * Create or get the current logger
 *
 * Use LOGGER.reconfigure() to reset the logger to its defaults
 */
function LOGGER() {
    if (!_LOGGER_HOLDER) {
        _LOGGER_HOLDER = new SimpleLogger(_DEFAULTS);
    }

    return _LOGGER_HOLDER;
}

/**
 * Reset logger to defaults
 */
LOGGER.reconfigure = () => {
    if (_LOGGER_HOLDER) {
        _LOGGER_HOLDER.configure(_DEFAULTS);
    }
};

export default LOGGER;
