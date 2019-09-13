import { SimpleLogger, SimpleLoggerImpl } from "./simple-logger";
import { Level } from "./config/level";
import { CurlyBracketsLogFormatter } from "./formatters/curly-brackets-log-formatter";
import { BrowserConsoleLogOutput } from "./output/browser-console-log-output";

const _LOGGER = {
    INSTANCE: null,
    DEFAULTS: {
        level: Level.INFO,
        out: new BrowserConsoleLogOutput(),
        formatter: new CurlyBracketsLogFormatter()
    }
};

/**
 * Create or get the current logger
 *
 * Use LOGGER.reconfigure() to reset the logger to its defaults
 */
export function LOGGER(): SimpleLogger {
    if (!_LOGGER.INSTANCE) {
        _LOGGER.INSTANCE = new SimpleLoggerImpl(_LOGGER.DEFAULTS);
    }

    return _LOGGER.INSTANCE;
}

/**
 * Reset logger to defaults
 */
LOGGER.reconfigure = () => {
    if (_LOGGER.INSTANCE) {
        _LOGGER.INSTANCE.configure(_LOGGER.DEFAULTS);
    }
};
