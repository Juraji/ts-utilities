**[TS Utilities](../README.md)**

[Globals](../README.md) › [PromiseQueue](../modules/promisequeue.md) › [QueueResult](promisequeue.queueresult.md)

# Interface: QueueResult <**T**>

Queue result

## Type parameters

▪ **T**

## Hierarchy

* **QueueResult**

## Index

### Properties

* [progress](promisequeue.queueresult.md#progress)
* [result](promisequeue.queueresult.md#result)

## Properties

###  progress

• **progress**: *Observable‹[QueueProgress](promisequeue.queueprogress.md)›*

*Defined in [promise-queue/queue-result.ts:27](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/queue-result.ts#L27)*

Pogress messages emitter {@see QueueProgress}

___

###  result

• **result**: *Promise‹T›*

*Defined in [promise-queue/queue-result.ts:25](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/queue-result.ts#L25)*

Worker results