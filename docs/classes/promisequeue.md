[TS Utilities](../README.md) › [PromiseQueue](promisequeue.md)

# Class: PromiseQueue <**T, R**>


## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* **PromiseQueue**

## Index

### Constructors

* [constructor](promisequeue.md#constructor)

### Properties

* [threads](promisequeue.md#threads)

### Methods

* [queue](promisequeue.md#queue)
* [synchronous](promisequeue.md#static-synchronous)

## Constructors

###  constructor

\+ **new PromiseQueue**(`task`: [PromiseQueueTask](../README.md#promisequeuetask)‹T, R›, `threads`: number): *[PromiseQueue](promisequeue.md)*

*Defined in [lib/promise-queue/promise-queue.ts:9](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L9)*

Queue work synchronously or divided amongst threads

<pre>
    // Where service is some async implementation
    const task = (userId: number) => service.fetchUser(userId);

    // Where userIDs is an array of user IDs to fetch
    const queueResult = new PromiseQueue(task)
        .queueItems(userIDs);

    queueResult.progress.subscribe({
        next: queueProgress => this.updateProgressBar(queueProgress),
        complete: () => this.closePogressBar()
    });

    queueResult.result.then(users => this.doSomethingWithUsers(users))
</pre>

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`task` | [PromiseQueueTask](../README.md#promisequeuetask)‹T, R› | - | A mapping function, from T to R | Promise<R>. |
`threads` | number | 8 | The count of concurrent executions for the task.  |

**Returns:** *[PromiseQueue](promisequeue.md)*

## Properties

###  threads

• **threads**: *number*

*Defined in [lib/promise-queue/promise-queue.ts:34](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L34)*

The count of concurrent executions for the task.

## Methods

###  queue

▸ **queue**(`items`: T[]): *[QueueResult](../interfaces/queueresult.md)‹R›*

*Defined in [lib/promise-queue/promise-queue.ts:60](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L60)*

Start execution of queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | T[] | The queue items  |

**Returns:** *[QueueResult](../interfaces/queueresult.md)‹R›*

___

### `Static` synchronous

▸ **synchronous**<**T**, **R**>(`task`: [PromiseQueueTask](../README.md#promisequeuetask)‹T, R›): *[PromiseQueue](promisequeue.md)‹T, R›*

*Defined in [lib/promise-queue/promise-queue.ts:47](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L47)*

Create a synchronous PromiseQueue

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`task` | [PromiseQueueTask](../README.md#promisequeuetask)‹T, R› | A mapping function, from number to R | Promise<R>  |

**Returns:** *[PromiseQueue](promisequeue.md)‹T, R›*