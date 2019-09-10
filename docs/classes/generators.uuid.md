**[TS Utilities](../README.md)**

[Globals](../README.md) › [Generators](../modules/generators.md) › [UUID](generators.uuid.md)

# Class: UUID

## Hierarchy

* **UUID**

## Index

### Constructors

* [constructor](generators.uuid.md#private-constructor)

### Properties

* [lookup](generators.uuid.md#private-lookup)

### Methods

* [generate](generators.uuid.md#private-generate)
* [generator](generators.uuid.md#private-generator)
* [generate](generators.uuid.md#static-generate)
* [generator](generators.uuid.md#static-generator)

## Constructors

### `Private` constructor

\+ **new UUID**(): *[UUID](generators.uuid.md)*

*Defined in [generators/uuid-generator.ts:9](https://github.com/Juraji/ts-utilities/blob/7643b75/src/generators/uuid-generator.ts#L9)*

**Returns:** *[UUID](generators.uuid.md)*

## Properties

### `Private` lookup

• **lookup**: *string[]*

*Defined in [generators/uuid-generator.ts:9](https://github.com/Juraji/ts-utilities/blob/7643b75/src/generators/uuid-generator.ts#L9)*

## Methods

### `Private` generate

▸ **generate**(): *string*

*Defined in [generators/uuid-generator.ts:33](https://github.com/Juraji/ts-utilities/blob/7643b75/src/generators/uuid-generator.ts#L33)*

**Returns:** *string*

___

### `Private` generator

▸ **generator**(`max`: number): *IterableIterator‹string›*

*Defined in [generators/uuid-generator.ts:51](https://github.com/Juraji/ts-utilities/blob/7643b75/src/generators/uuid-generator.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`max` | number |

**Returns:** *IterableIterator‹string›*

___

### `Static` generate

▸ **generate**(): *string*

*Defined in [generators/uuid-generator.ts:21](https://github.com/Juraji/ts-utilities/blob/7643b75/src/generators/uuid-generator.ts#L21)*

Generates a single random UUID

**Returns:** *string*

___

### `Static` generator

▸ **generator**(`max`: number): *IterableIterator‹string›*

*Defined in [generators/uuid-generator.ts:29](https://github.com/Juraji/ts-utilities/blob/7643b75/src/generators/uuid-generator.ts#L29)*

Returns an iterator of random UUIDs

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum number of UUIDs to produce before completing the iterable  |

**Returns:** *IterableIterator‹string›*