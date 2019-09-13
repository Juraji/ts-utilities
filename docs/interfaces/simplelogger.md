[TS Utilities](../README.md) › [SimpleLogger](simplelogger.md)

# Interface: SimpleLogger


Simple Logger interface

## Hierarchy

* **SimpleLogger**

## Index

### Properties

* [level](simplelogger.md#level)

### Methods

* [configure](simplelogger.md#configure)
* [debug](simplelogger.md#debug)
* [error](simplelogger.md#error)
* [info](simplelogger.md#info)
* [setLevel](simplelogger.md#setlevel)
* [warn](simplelogger.md#warn)

## Properties

###  level

• **level**: *[Level](../enums/level.md)*

*Defined in [lib/simple-logger/simple-logger.ts:11](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L11)*

Current logging level.

## Methods

###  configure

▸ **configure**(`config`: Partial‹[SimpleLoggerConfig](simpleloggerconfig.md)›): *void*

*Defined in [lib/simple-logger/simple-logger.ts:25](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L25)*

Reconfigure this logger.
Note that only the properties, present in the config parameter are set.
Properties not present in the config are kept in their current state.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | Partial‹[SimpleLoggerConfig](simpleloggerconfig.md)› | New configuration options to apply  |

**Returns:** *void*

___

###  debug

▸ **debug**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [lib/simple-logger/simple-logger.ts:32](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L32)*

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

*Defined in [lib/simple-logger/simple-logger.ts:39](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L39)*

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

*Defined in [lib/simple-logger/simple-logger.ts:46](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L46)*

Log at level INFO.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*

___

###  setLevel

▸ **setLevel**(`level`: [Level](../enums/level.md)): *void*

*Defined in [lib/simple-logger/simple-logger.ts:17](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L17)*

Set target logging level.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [Level](../enums/level.md) | The new logging level.  |

**Returns:** *void*

___

###  warn

▸ **warn**(`tpl`: string, ...`args`: any[]): *void*

*Defined in [lib/simple-logger/simple-logger.ts:53](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/simple-logger.ts#L53)*

Log at level WARN.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tpl` | string | A log message. |
`...args` | any[] | Optional replacement parameters.  |

**Returns:** *void*