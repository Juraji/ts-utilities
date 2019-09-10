**[TS Utilities](../README.md)**

[Globals](../README.md) › [SimpleLogger](../modules/simplelogger.md) › [LogFormatter](simplelogger.logformatter.md)

# Interface: LogFormatter

## Hierarchy

* **LogFormatter**

## Implemented by

* [CurlyBracketsFormatter](../classes/simplelogger.curlybracketsformatter.md)
* [NumberedCurlyBrackesFormatter](../classes/simplelogger.numberedcurlybrackesformatter.md)

## Index

### Methods

* [format](simplelogger.logformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Defined in [simple-logger/log-formatter.ts:12](https://github.com/Juraji/ts-utilities/blob/7643b75/src/simple-logger/log-formatter.ts#L12)*

Format the given template and arguments to a string for log output.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`template` | string | The message template. |
`...args` | any[] | The message arguments.  |

**Returns:** *string*