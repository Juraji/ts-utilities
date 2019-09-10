/**
 * @module SimpleLogger
 */
/** */

import { SimpleLogger } from "./simple-logger";
import { Level } from "./level";
import { BrowserConsoleLogOutput } from "./log-output";
import { CurlyBracketsFormatter } from "./log-formatter";

const _LOGGER = {
    INSTANCE: null,
    DEFAULTS: {
        level: Level.INFO,
        out: new BrowserConsoleLogOutput(),
        formatter: new CurlyBracketsFormatter()
    }
};

/**
 * Create or get the current logger
 *
 * Use LOGGER.reconfigure() to reset the logger to its defaults
 */
export function LOGGER(): SimpleLogger {
    if (!_LOGGER.INSTANCE) {
        _LOGGER.INSTANCE = new SimpleLogger(_LOGGER.DEFAULTS);
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
