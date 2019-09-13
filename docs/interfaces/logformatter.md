[TS Utilities](../README.md) › [LogFormatter](logformatter.md)

# Interface: LogFormatter


## Hierarchy

* **LogFormatter**

## Implemented by

* [AdvancedLogFormatter](../classes/advancedlogformatter.md)
* [CurlyBracketsLogFormatter](../classes/curlybracketslogformatter.md)
* [NumberedCurlyBrackesLogFormatter](../classes/numberedcurlybrackeslogformatter.md)

## Index

### Methods

* [format](logformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Defined in [lib/simple-logger/formatters/log-formatter.ts:7](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/formatters/log-formatter.ts#L7)*

Format the given template and arguments to a string for log output.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`template` | string | The message template. |
`...args` | any[] | The message arguments.  |

**Returns:** *string*