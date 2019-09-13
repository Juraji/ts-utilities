[TS Utilities](../README.md) › [AdvancedLogFormatter](advancedlogformatter.md)

# Class: AdvancedLogFormatter


Advanced formatting

## Hierarchy

* **AdvancedLogFormatter**

## Implements

* [LogFormatter](../interfaces/logformatter.md)

## Index

### Constructors

* [constructor](advancedlogformatter.md#constructor)

### Methods

* [format](advancedlogformatter.md#format)

## Constructors

###  constructor

\+ **new AdvancedLogFormatter**(`cacheTemplates`: boolean): *[AdvancedLogFormatter](advancedlogformatter.md)*

*Defined in [lib/simple-logger/formatters/advanced-log-formatter.ts:33](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/formatters/advanced-log-formatter.ts#L33)*

Sprintf compatible formatting.

<i>Converted to TypeScript from https://github.com/alexei/sprintf.js</i>

<pre>
    // Just a few examples
    const formatter = new AdvancedLogFormatter();

    // Object keywords
    const users = {name: "Juraji"}
    console.log(formatter.format('Hello %(name)s', user));
    // Log: Hello Juraji

    // Positional arguments
    console.log(formatter.format("%2$s %3$s a %1$s", "cracker", "Polly", "wants"));
    // Log: Polly wants a cracker

    // Functions
    console.log(formatter.format("Current date and time: %s", () => new Date().toString()));
    // Log: Sat Sep 14 2019 00:27:38 GMT+0200
</pre>

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`cacheTemplates` | boolean | false | Cache template nodes, enhances formatter speed greatly when using the same templates over and over  |

**Returns:** *[AdvancedLogFormatter](advancedlogformatter.md)*

## Methods

###  format

▸ **format**(`template`: string, ...`args`: any[]): *string*

*Implementation of [LogFormatter](../interfaces/logformatter.md)*

*Defined in [lib/simple-logger/formatters/advanced-log-formatter.ts:66](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/formatters/advanced-log-formatter.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | string |
`...args` | any[] |

**Returns:** *string*