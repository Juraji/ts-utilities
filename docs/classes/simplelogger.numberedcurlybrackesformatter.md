[TS Utilities](../README.md) › [SimpleLogger](../modules/simplelogger.md) › [NumberedCurlyBrackesFormatter](simplelogger.numberedcurlybrackesformatter.md)

# Class: NumberedCurlyBrackesFormatter


Replaces numbered curly brackets ("{0}") with the supplied arguments, by zero-based index.

Input: "My log with {1} like {0}."
Args: "replacements", 123
Output: "My log with 123 like replacements."

## Hierarchy

* **NumberedCurlyBrackesFormatter**

## Implements

* [LogFormatter](../interfaces/simplelogger.logformatter.md)

## Index

### Methods

* [format](simplelogger.numberedcurlybrackesformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/simplelogger.logformatter.md)*

*Defined in [simple-logger/log-formatter.ts:44](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/log-formatter.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*