[TS Utilities](../README.md) › [UUID](uuid.md)

# Class: UUID


## Hierarchy

* **UUID**

## Index

### Methods

* [generate](uuid.md#static-generate)
* [generator](uuid.md#static-generator)

## Methods

### `Static` generate

▸ **generate**(): *string*

*Defined in [lib/generators/uuid-generator.ts:16](https://github.com/Juraji/ts-utilities/blob/master/src/lib/generators/uuid-generator.ts#L16)*

Generates a single random UUID

**Returns:** *string*

___

### `Static` generator

▸ **generator**(`max`: number): *IterableIterator‹string›*

*Defined in [lib/generators/uuid-generator.ts:24](https://github.com/Juraji/ts-utilities/blob/master/src/lib/generators/uuid-generator.ts#L24)*

Returns an iterator of random UUIDs

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum number of UUIDs to produce before completing the iterable  |

**Returns:** *IterableIterator‹string›*