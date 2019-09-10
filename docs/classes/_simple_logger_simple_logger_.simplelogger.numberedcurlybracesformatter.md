**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;simple-logger/simple-logger&quot;](../modules/_simple_logger_simple_logger_.md) › [SimpleLogger](_simple_logger_simple_logger_.simplelogger.md) › [NumberedCurlyBracesFormatter](_simple_logger_simple_logger_.simplelogger.numberedcurlybracesformatter.md)

# Class: NumberedCurlyBracesFormatter

Replaces numbered curly brackets ("{0}") with the supplied arguments, by zero-based index.

Input: "My log with {1} like {0}."
Args: "replacements", 123
Output: "My log with 123 like replacements."

## Hierarchy

* **NumberedCurlyBracesFormatter**

## Implements

* [LogFormatter](../interfaces/_simple_logger_simple_logger_.simplelogger.logformatter.md)

## Index

### Methods

* [format](_simple_logger_simple_logger_.simplelogger.numberedcurlybracesformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/_simple_logger_simple_logger_.simplelogger.logformatter.md)*

*Defined in [simple-logger/simple-logger.ts:163](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*