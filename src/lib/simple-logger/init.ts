import { SimpleLogger } from "./simple-logger";
import { Level } from "./config/level";
import { CurlyBracketsLogFormatter } from "./formatters/curly-brackets-log-formatter";
import { BrowserConsoleLogOutput } from "./output/browser-console-log-output";
import { SimpleLoggerConfig } from "./config/simple-logger-config";

interface LoggerContainer {
    instance: SimpleLogger;
    defaults: SimpleLoggerConfig;
}

const _CONTAINER: LoggerContainer = {
    instance: undefined,
    defaults: {
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
    if (!_CONTAINER.instance) {
        _CONTAINER.instance = new SimpleLogger(_CONTAINER.defaults);
    }

    return _CONTAINER.instance;
}

/**
 * Reset logger to defaults
 */
LOGGER.reconfigure = () => {
    if (_CONTAINER.instance) {
        _CONTAINER.instance.configure(_CONTAINER.defaults);
    }
};
