**[TS Utilities](../README.md)**

[Globals](../README.md) › [PromiseQueue](../modules/promisequeue.md) › [PromiseQueue](promisequeue.promisequeue-1.md)

# Class: PromiseQueue <**T, R**>

## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* **PromiseQueue**

## Index

### Constructors

* [constructor](promisequeue.promisequeue-1.md#constructor)

### Methods

* [queueItems](promisequeue.promisequeue-1.md#queueitems)
* [nTimes](promisequeue.promisequeue-1.md#static-ntimes)

## Constructors

###  constructor

\+ **new PromiseQueue**(`worker`: [PromiseQueueWorker](../modules/promisequeue.md#promisequeueworker)‹T, R›, `synchronous`: boolean, `threads`: number): *[PromiseQueue](promisequeue.promisequeue-1.md)*

*Defined in [promise-queue/promise-queue.ts:14](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L14)*

Queue work synchronously or divided amongst threads

<pre>
    // Where service is some async implementation
    const worker = (userId: number) => service.fetchUser(userId);

    // Where userIDs is an array of user IDs to fetch
    const queueResult = new PromiseQueue(worker)
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
`worker` | [PromiseQueueWorker](../modules/promisequeue.md#promisequeueworker)‹T, R› | - | A mapping function, from T to R | Promise<R>. |
`synchronous` | boolean | false | When true will execute worker per item, one at a time |
`threads` | number | 8 | The count of concurrent executions of the worker.                Ignored when synchronous=true  |

**Returns:** *[PromiseQueue](promisequeue.promisequeue-1.md)*

## Methods

###  queueItems

▸ **queueItems**(`items`: T[]): *[QueueResult](../interfaces/promisequeue.queueresult.md)‹R[]›*

*Defined in [promise-queue/promise-queue.ts:77](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L77)*

Start execution of queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | T[] | The queue items  |

**Returns:** *[QueueResult](../interfaces/promisequeue.queueresult.md)‹R[]›*

___

### `Static` nTimes

▸ **nTimes**<**R**>(`count`: number, `worker`: [PromiseQueueWorker](../modules/promisequeue.md#promisequeueworker)‹number, R›, `synchronous`: boolean, `threads?`: number): *[QueueResult](../interfaces/promisequeue.queueresult.md)‹R[]›*

*Defined in [promise-queue/promise-queue.ts:59](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L59)*

Call worker n times

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | - | The amount of times to call worker |
`worker` | [PromiseQueueWorker](../modules/promisequeue.md#promisequeueworker)‹number, R› | - | A mapping function, from number to R | Promise<R> |
`synchronous` | boolean | true | hen true will execute worker one at a time |
`threads?` | number | - | The count of concurrent executions of the worker.                Ignored when synchronous=true  |

**Returns:** *[QueueResult](../interfaces/promisequeue.queueresult.md)‹R[]›*