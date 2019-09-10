**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;simple-logger/simple-logger&quot;](../modules/_simple_logger_simple_logger_.md) › [SimpleLogger](../classes/_simple_logger_simple_logger_.simplelogger.md) › [LogFormatter](_simple_logger_simple_logger_.simplelogger.logformatter.md)

# Interface: LogFormatter

## Hierarchy

* **LogFormatter**

## Implemented by

* [CurlyBracketsFormatter](../classes/_simple_logger_simple_logger_.simplelogger.curlybracketsformatter.md)
* [NumberedCurlyBracesFormatter](../classes/_simple_logger_simple_logger_.simplelogger.numberedcurlybracesformatter.md)

## Index

### Methods

* [format](_simple_logger_simple_logger_.simplelogger.logformatter.md#format)

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Defined in [simple-logger/simple-logger.ts:96](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/simple-logger/simple-logger.ts#L96)*

Format the given template and arguments to a string for log output.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`template` | string | The message template. |
`...args` | any[] | The message arguments.  |

**Returns:** *string*