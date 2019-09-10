**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;simple-logger/simple-logger&quot;](../modules/_simple_logger_simple_logger_.md) › [SimpleLogger](_simple_logger_simple_logger_.simplelogger.md) › [CurlyBracketsFormatter](_simple_logger_simple_logger_.simplelogger.curlybracketsformatter.md)

# Class: CurlyBracketsFormatter

Replaces curly brackets ("{}") with the supplied arguments, in order of occurrence.

Input: "My log with {} like {}."
Args: "replacements", 123
Output: "My log with replacements like 123."

## Hierarchy

* **CurlyBracketsFormatter**

## Implements

* [LogFormatter](../interfaces/_simple_logger_simple_logger_.simplelogger.logformatter.md)

## Index

### Methods

* [format](_simple_logger_simple_logger_.simplelogger.curlybracketsformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/_simple_logger_simple_logger_.simplelogger.logformatter.md)*

*Defined in [simple-logger/simple-logger.ts:142](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*