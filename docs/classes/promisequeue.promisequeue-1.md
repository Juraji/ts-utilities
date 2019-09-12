[TS Utilities](../README.md) › [PromiseQueue](../modules/promisequeue.md) › [PromiseQueue](promisequeue.promisequeue-1.md)

# Class: PromiseQueue <**T, R**>


## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* **PromiseQueue**

## Index

### Constructors

* [constructor](promisequeue.promisequeue-1.md#constructor)

### Properties

* [threads](promisequeue.promisequeue-1.md#threads)

### Methods

* [queue](promisequeue.promisequeue-1.md#queue)
* [synchronous](promisequeue.promisequeue-1.md#static-synchronous)

## Constructors

###  constructor

\+ **new PromiseQueue**(`task`: [PromiseQueueTask](../modules/promisequeue.md#promisequeuetask)‹T, R›, `threads`: number): *[PromiseQueue](promisequeue.promisequeue-1.md)*

*Defined in [promise-queue/promise-queue.ts:14](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L14)*

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
`task` | [PromiseQueueTask](../modules/promisequeue.md#promisequeuetask)‹T, R› | - | A mapping function, from T to R | Promise<R>. |
`threads` | number | 8 | The count of concurrent executions for the task.  |

**Returns:** *[PromiseQueue](promisequeue.promisequeue-1.md)*

## Properties

###  threads

• **threads**: *number*

*Defined in [promise-queue/promise-queue.ts:39](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L39)*

The count of concurrent executions for the task.

## Methods

###  queue

▸ **queue**(`items`: T[]): *[QueueResult](../interfaces/promisequeue.queueresult.md)‹R›*

*Defined in [promise-queue/promise-queue.ts:65](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L65)*

Start execution of queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | T[] | The queue items  |

**Returns:** *[QueueResult](../interfaces/promisequeue.queueresult.md)‹R›*

___

### `Static` synchronous

▸ **synchronous**<**T**, **R**>(`task`: [PromiseQueueTask](../modules/promisequeue.md#promisequeuetask)‹T, R›): *[PromiseQueue](promisequeue.promisequeue-1.md)‹T, R›*

*Defined in [promise-queue/promise-queue.ts:52](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L52)*

Create a synchronous PromiseQueue

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`task` | [PromiseQueueTask](../modules/promisequeue.md#promisequeuetask)‹T, R› | A mapping function, from number to R | Promise<R>  |

**Returns:** *[PromiseQueue](promisequeue.promisequeue-1.md)‹T, R›*