[TS Utilities](../README.md) › [SimpleLogger](../modules/simplelogger.md) › [SimpleLogger](simplelogger.simplelogger-1.md)

# Class: SimpleLogger


## Hierarchy

* **SimpleLogger**

## Index

### Constructors

* [constructor](simplelogger.simplelogger-1.md#constructor)

### Accessors

* [level](simplelogger.simplelogger-1.md#level)

### Methods

* [configure](simplelogger.simplelogger-1.md#configure)
* [debug](simplelogger.simplelogger-1.md#debug)
* [error](simplelogger.simplelogger-1.md#error)
* [info](simplelogger.simplelogger-1.md#info)
* [setLevel](simplelogger.simplelogger-1.md#setlevel)
* [warn](simplelogger.simplelogger-1.md#warn)

## Constructors

###  constructor

\+ **new SimpleLogger**(`config`: [SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md)): *[SimpleLogger](simplelogger.simplelogger-1.md)*

*Defined in [simple-logger/simple-logger.ts:17](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md) |

**Returns:** *[SimpleLogger](simplelogger.simplelogger-1.md)*

## Accessors

###  level

• **get level**(): *[Level](../enums/simplelogger.level.md)*

*Defined in [simple-logger/simple-logger.ts:15](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L15)*

Get current logging level.

**Returns:** *[Level](../enums/simplelogger.level.md)*

## Methods

###  configure

▸ **configure**(`config`: Partial‹[SimpleLoggerConfig](../interfaces/simplelogger.simpleloggerconfig.md)›): *void*

*Defined in [simple-logger/simple-logger.ts:37](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L37)*

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

*Defined in [simple-logger/simple-logger.ts:46](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L46)*

Log at level DEBUG.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

###  error

▸ **error**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:55](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L55)*

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

*Defined in [simple-logger/simple-logger.ts:64](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L64)*

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

*Defined in [simple-logger/simple-logger.ts:27](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L27)*

Set target logging level.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [Level](../enums/simplelogger.level.md) | The new logging level.  |

**Returns:** *void*

___

###  warn

▸ **warn**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [simple-logger/simple-logger.ts:74](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L74)*

Log at level WARN.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*