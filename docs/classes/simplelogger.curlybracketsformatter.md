**[TS Utilities](../README.md)**

[Globals](../README.md) › [SimpleLogger](../modules/simplelogger.md) › [CurlyBracketsFormatter](simplelogger.curlybracketsformatter.md)

# Class: CurlyBracketsFormatter

Replaces curly brackets ("{}") with the supplied arguments, in order of occurrence.

Input: "My log with {} like {}."
Args: "replacements", 123
Output: "My log with replacements like 123."

## Hierarchy

* **CurlyBracketsFormatter**

## Implements

* [LogFormatter](../interfaces/simplelogger.logformatter.md)

## Index

### Methods

* [format](simplelogger.curlybracketsformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/simplelogger.logformatter.md)*

*Defined in [simple-logger/log-formatter.ts:23](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/log-formatter.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*