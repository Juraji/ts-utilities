**[TS Utilities](../README.md)**

[Globals](../README.md) › [Generators](generators.md)

# External module: Generators

## Index

### Classes

* [UUID](../classes/generators.uuid.md)

### Functions

* [idGenerator](generators.md#idgenerator)

## Functions

###  idGenerator

▸ **idGenerator**(`max`: number): *IterableIterator‹number›*

Defined in generators/id-generator.ts:11

Generate numerical ID's (from 0 up).

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum ID before completing the iterable. |

**Returns:** *IterableIterator‹number›*

An Iterator, yielding numerical id's starting at 0 until max is reached.