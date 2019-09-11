**[TS Utilities](../README.md)**

[Globals](../README.md) › [Generators](../modules/generators.md) › [UUID](generators.uuid.md)

# Class: UUID

## Hierarchy

* **UUID**

## Index

### Methods

* [generate](generators.uuid.md#static-generate)
* [generator](generators.uuid.md#static-generator)

## Methods

### `Static` generate

▸ **generate**(): *string*

*Defined in [generators/uuid-generator.ts:21](https://github.com/Juraji/ts-utilities/blob/master/src/lib/generators/uuid-generator.ts#L21)*

Generates a single random UUID

**Returns:** *string*

___

### `Static` generator

▸ **generator**(`max`: number): *IterableIterator‹string›*

*Defined in [generators/uuid-generator.ts:29](https://github.com/Juraji/ts-utilities/blob/master/src/lib/generators/uuid-generator.ts#L29)*

Returns an iterator of random UUIDs

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum number of UUIDs to produce before completing the iterable  |

**Returns:** *IterableIterator‹string›*