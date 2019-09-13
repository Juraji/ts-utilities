[TS Utilities](../README.md) › [QueueResult](queueresult.md)

# Interface: QueueResult <**T**>


Queue result

## Type parameters

▪ **T**

## Hierarchy

* **QueueResult**

## Index

### Properties

* [progress](queueresult.md#progress)
* [result](queueresult.md#result)

## Properties

###  progress

• **progress**: *Observable‹[QueueProgress](queueprogress.md)›*

*Defined in [lib/promise-queue/queue-result.ts:22](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/queue-result.ts#L22)*

Pogress messages emitter {@see QueueProgress}

___

###  result

• **result**: *Promise‹T[]›*

*Defined in [lib/promise-queue/queue-result.ts:20](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/queue-result.ts#L20)*

Task results