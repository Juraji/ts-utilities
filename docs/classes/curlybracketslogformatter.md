[TS Utilities](../README.md) › [CurlyBracketsLogFormatter](curlybracketslogformatter.md)

# Class: CurlyBracketsLogFormatter


Replaces curly brackets ("{}") with the supplied arguments, in order of occurrence.

Input: "My log with {} like {}."
Args: "replacements", 123
Output: "My log with replacements like 123."

## Hierarchy

* **CurlyBracketsLogFormatter**

## Implements

* [LogFormatter](../interfaces/logformatter.md)

## Index

### Methods

* [format](curlybracketslogformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/logformatter.md)*

*Defined in [lib/simple-logger/formatters/curly-brackets-log-formatter.ts:11](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/formatters/curly-brackets-log-formatter.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*