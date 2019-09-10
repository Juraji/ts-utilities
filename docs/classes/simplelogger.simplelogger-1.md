**[TS Utilities](../README.md)**

[Globals](../README.md) › [SimpleLogger](../modules/simplelogger.md) › [SimpleLogger](simplelogger.simplelogger-1.md)

# Class: SimpleLogger

## Hierarchy

* **SimpleLogger**

## Index

### Constructors

* [constructor](simplelogger.simplelogger-1.md#constructor)

### Properties

* [config](simplelogger.simplelogger-1.md#private-config)

### Accessors

* [level](simplelogger.simplelogger-1.md#level)

### Methods

* [configure](simplelogger.simplelogger-1.md#configure)
* [debug](simplelogger.simplelogger-1.md#debug)
* [doLog](simplelogger.simplelogger-1.md#private-dolog)
* [error](simplelogger.simplelogger-1.md#error)
* [info](simplelogger.simplelogger-1.md#info)
* [setLevel](simplelogger.simplelogger-1.md#setlevel)
* [warn](simplelogger.simplelogger-1.md#warn)

## Constructors

###  constructor

\+ **new SimpleLogger**(`config`: [SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md)): *[SimpleLogger](simplelogger.simplelogger-1.md)*

*Defined in [simple-logger/simple-logger.ts:17](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md) |

**Returns:** *[SimpleLogger](simplelogger.simplelogger-1.md)*

## Properties

### `Private` config

• **config**: *[SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md)*

*Defined in [simple-logger/simple-logger.ts:10](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L10)*

## Accessors

###  level

• **get level**(): *[Level](../enums/simplelogger.level.md)*

*Defined in [simple-logger/simple-logger.ts:15](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L15)*

Get current logging level.

**Returns:** *[Level](../enums/simplelogger.level.md)*

## Methods

###  configure

▸ **configure**(`config`: Partial‹[SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md)›): *void*

*Defined in [simple-logger/simple-logger.ts:37](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L37)*

Reconfigure this logger.
Note that only the properties, present in the config parameter are set.
Properties not present in the config are kept in their current state.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | Partial‹[SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md)› | New configuration options to apply  |

**Returns:** *void*

___

###  debug

▸ **debug**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:46](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L46)*

Log at level DEBUG.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

### `Private` doLog

▸ **doLog**(`targetLevel`: [Level](../enums/simplelogger.level.md), `out`: function, `tpl`: string, `args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:78](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L78)*

**Parameters:**

▪ **targetLevel**: *[Level](../enums/simplelogger.level.md)*

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

*Defined in [simple-logger/simple-logger.ts:55](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L55)*

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

*Defined in [simple-logger/simple-logger.ts:64](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L64)*

Log at level INFO.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

###  setLevel

▸ **setLevel**(`level`: [Level](../enums/simplelogger.level.md)): *void*

*Defined in [simple-logger/simple-logger.ts:27](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L27)*

Set target logging level.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [Level](../enums/simplelogger.level.md) | The new logging level.  |

**Returns:** *void*

___

###  warn

▸ **warn**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:74](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/simple-logger.ts#L74)*

Log at level WARN.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*