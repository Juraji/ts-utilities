**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;simple-logger/simple-logger&quot;](../modules/_simple_logger_simple_logger_.md) › [SimpleLogger](_simple_logger_simple_logger_.simplelogger.md)

# Class: SimpleLogger

## Hierarchy

* **SimpleLogger**

## Index

### Enumerations

* [Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md)

### Classes

* [BrowserConsoleLogOutput](_simple_logger_simple_logger_.simplelogger.browserconsolelogoutput.md)
* [CurlyBracketsFormatter](_simple_logger_simple_logger_.simplelogger.curlybracketsformatter.md)
* [NumberedCurlyBracesFormatter](_simple_logger_simple_logger_.simplelogger.numberedcurlybracesformatter.md)

### Interfaces

* [LogFormatter](../interfaces/_simple_logger_simple_logger_.simplelogger.logformatter.md)
* [LogOutput](../interfaces/_simple_logger_simple_logger_.simplelogger.logoutput.md)
* [SimpleLoggerConfig](../interfaces/_simple_logger_simple_logger_.simplelogger.simpleloggerconfig.md)

### Constructors

* [constructor](_simple_logger_simple_logger_.simplelogger.md#constructor)

### Properties

* [config](_simple_logger_simple_logger_.simplelogger.md#private-config)

### Accessors

* [level](_simple_logger_simple_logger_.simplelogger.md#level)

### Methods

* [configure](_simple_logger_simple_logger_.simplelogger.md#configure)
* [debug](_simple_logger_simple_logger_.simplelogger.md#debug)
* [doLog](_simple_logger_simple_logger_.simplelogger.md#private-dolog)
* [error](_simple_logger_simple_logger_.simplelogger.md#error)
* [info](_simple_logger_simple_logger_.simplelogger.md#info)
* [setLevel](_simple_logger_simple_logger_.simplelogger.md#setlevel)
* [warn](_simple_logger_simple_logger_.simplelogger.md#warn)

## Constructors

###  constructor

\+ **new SimpleLogger**(`config`: [SimpleLoggerConfig](../interfaces/_simple_logger_simple_logger_.simplelogger.simpleloggerconfig.md)): *[SimpleLogger](_simple_logger_simple_logger_.simplelogger.md)*

*Defined in [simple-logger/simple-logger.ts:9](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [SimpleLoggerConfig](../interfaces/_simple_logger_simple_logger_.simplelogger.simpleloggerconfig.md) |

**Returns:** *[SimpleLogger](_simple_logger_simple_logger_.simplelogger.md)*

## Properties

### `Private` config

• **config**: *[SimpleLoggerConfig](../interfaces/_simple_logger_simple_logger_.simplelogger.simpleloggerconfig.md)*

*Defined in [simple-logger/simple-logger.ts:2](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L2)*

## Accessors

###  level

• **get level**(): *[Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md)*

*Defined in [simple-logger/simple-logger.ts:7](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L7)*

Get current logging level.

**Returns:** *[Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md)*

## Methods

###  configure

▸ **configure**(`config`: Partial‹[SimpleLoggerConfig](../interfaces/_simple_logger_simple_logger_.simplelogger.simpleloggerconfig.md)›): *void*

*Defined in [simple-logger/simple-logger.ts:29](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L29)*

Reconfigure this logger.
Note that only the properties, present in the config parameter are set.
Properties not present in the config are kept in their current state.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | Partial‹[SimpleLoggerConfig](../interfaces/_simple_logger_simple_logger_.simplelogger.simpleloggerconfig.md)› | New configuration options to apply  |

**Returns:** *void*

___

###  debug

▸ **debug**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:38](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L38)*

Log at level DEBUG.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

### `Private` doLog

▸ **doLog**(`targetLevel`: [Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md), `out`: function, `tpl`: string, `args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:70](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L70)*

**Parameters:**

▪ **targetLevel**: *[Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md)*

▪ **out**: *function*

▸ (`message`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

▪ **tpl**: *string*

▪ **args**: *any[]*

**Returns:** *void*

___

###  error

▸ **error**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:47](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L47)*

Log at level ERROR.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

###  info

▸ **info**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:56](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L56)*

Log at level INFO.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

###  setLevel

▸ **setLevel**(`level`: [Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md)): *void*

*Defined in [simple-logger/simple-logger.ts:19](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L19)*

Set target logging level.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [Level](../enums/_simple_logger_simple_logger_.simplelogger.level.md) | The new logging level.  |

**Returns:** *void*

___

###  warn

▸ **warn**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:66](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L66)*

Log at level WARN.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*