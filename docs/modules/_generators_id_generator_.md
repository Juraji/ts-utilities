**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;generators/id-generator&quot;](_generators_id_generator_.md)

# External module: "generators/id-generator"

## Index

### Functions

* [idGenerator](_generators_id_generator_.md#idgenerator)

## Functions

###  idGenerator

▸ **idGenerator**(`max`: number): *IterableIterator‹number›*

*Defined in [generators/id-generator.ts:6](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/id-generator.ts#L6)*

Generate numerical ID's (from 0 up).

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum ID before completing the iterable. |

**Returns:** *IterableIterator‹number›*

An Iterator, yielding numerical id's starting at 0 until max is reached.