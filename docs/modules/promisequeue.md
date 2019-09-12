[TS Utilities](../README.md) › [PromiseQueue](promisequeue.md)

# External module: PromiseQueue


## Index

### Classes

* [PromiseQueue](../classes/promisequeue.promisequeue-1.md)

### Interfaces

* [QueueProgress](../interfaces/promisequeue.queueprogress.md)
* [QueueResult](../interfaces/promisequeue.queueresult.md)

### Type aliases

* [PromiseQueueTask](promisequeue.md#promisequeuetask)

## Type aliases

###  PromiseQueueTask

Ƭ **PromiseQueueTask**: *function*

*Defined in [promise-queue/promise-queue.ts:12](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L12)*

Mapping function from queue item to result

#### Type declaration:

▸ (`item`: T): *R | Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |