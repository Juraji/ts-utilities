**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;generators/uuid-generator&quot;](../modules/_generators_uuid_generator_.md) › [UUID](_generators_uuid_generator_.uuid.md)

# Class: UUID

## Hierarchy

* **UUID**

## Index

### Constructors

* [constructor](_generators_uuid_generator_.uuid.md#private-constructor)

### Properties

* [lookup](_generators_uuid_generator_.uuid.md#private-lookup)

### Methods

* [generate](_generators_uuid_generator_.uuid.md#private-generate)
* [generator](_generators_uuid_generator_.uuid.md#private-generator)
* [generate](_generators_uuid_generator_.uuid.md#static-generate)
* [generator](_generators_uuid_generator_.uuid.md#static-generator)

## Constructors

### `Private` constructor

\+ **new UUID**(): *[UUID](_generators_uuid_generator_.uuid.md)*

*Defined in [generators/uuid-generator.ts:4](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/uuid-generator.ts#L4)*

**Returns:** *[UUID](_generators_uuid_generator_.uuid.md)*

## Properties

### `Private` lookup

• **lookup**: *string[]*

*Defined in [generators/uuid-generator.ts:4](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/uuid-generator.ts#L4)*

## Methods

### `Private` generate

▸ **generate**(): *string*

*Defined in [generators/uuid-generator.ts:28](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/uuid-generator.ts#L28)*

**Returns:** *string*

___

### `Private` generator

▸ **generator**(`max`: number): *IterableIterator‹string›*

*Defined in [generators/uuid-generator.ts:46](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/uuid-generator.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`max` | number |

**Returns:** *IterableIterator‹string›*

___

### `Static` generate

▸ **generate**(): *string*

*Defined in [generators/uuid-generator.ts:16](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/uuid-generator.ts#L16)*

Generates a single random UUID

**Returns:** *string*

___

### `Static` generator

▸ **generator**(`max`: number): *IterableIterator‹string›*

*Defined in [generators/uuid-generator.ts:24](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/generators/uuid-generator.ts#L24)*

Returns an iterator of random UUIDs

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum number of UUIDs to produce before completing the iterable  |

**Returns:** *IterableIterator‹string›*