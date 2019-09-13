[TS Utilities](../README.md) › [NumberedCurlyBrackesLogFormatter](numberedcurlybrackeslogformatter.md)

# Class: NumberedCurlyBrackesLogFormatter


Replaces numbered curly brackets ("{0}") with the supplied arguments, by zero-based index.

Input: "My log with {1} like {0}."
Args: "replacements", 123
Output: "My log with 123 like replacements."

## Hierarchy

* **NumberedCurlyBrackesLogFormatter**

## Implements

* [LogFormatter](../interfaces/logformatter.md)

## Index

### Methods

* [format](numberedcurlybrackeslogformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/logformatter.md)*

*Defined in [lib/simple-logger/formatters/numbered-curly-brackes-log-formatter.ts:11](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/formatters/numbered-curly-brackes-log-formatter.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*