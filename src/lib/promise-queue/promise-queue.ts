/**
 * @module PromiseQueue
 */
/** */

import { Subject } from "rxjs";
import { QueueProgress, QueueResult } from "./queue-result";

/**
 * Mapping function from queue item to result
 */
export type PromiseQueueWorker<T, R> = (item: T) => R | Promise<R>;

export class PromiseQueue<T, R> {

    /**
     * Queue work synchronously or divided amongst threads
     *
     * <pre>
     *     // Where service is some async implementation
     *     const worker = (userId: number) => service.fetchUser(userId);
     *
     *     // Where userIDs is an array of user IDs to fetch
     *     const queueResult = new PromiseQueue(worker)
     *         .queueItems(userIDs);
     *
     *     queueResult.progress.subscribe({
     *         next: queueProgress => this.updateProgressBar(queueProgress),
     *         complete: () => this.closePogressBar()
     *     });
     *
     *     queueResult.result.then(users => this.doSomethingWithUsers(users))
     * </pre>
     *
     * @param worker A mapping function, from T to R | Promise<R>.
     * @param synchronous When true will execute worker per item, one at a time
     * @param threads The count of concurrent executions of the worker.
     *                Ignored when synchronous=true
     */
    constructor(private readonly worker: PromiseQueueWorker<T, R>,
                private readonly synchronous: boolean = false,
                private readonly threads: number = 8) {
        if (typeof worker !== "function") {
            throw new Error(`Type of worker should be "function", got "${typeof worker}"`);
        }
        if (!synchronous && threads < 1) {
            throw new Error("Thread count must be at least 1");
        }
    }

    /**
     * Call worker n times
     * @param count The amount of times to call worker
     * @param worker A mapping function, from number to R | Promise<R>
     * @param synchronous hen true will execute worker one at a time
     * @param threads The count of concurrent executions of the worker.
     *                Ignored when synchronous=true
     */
    public static nTimes<R>(count: number,
                            worker: PromiseQueueWorker<number, R>,
                            synchronous: boolean = true,
                            threads?: number): QueueResult<R[]> {
        const numbers = Array.from((new Array(count)).keys());
        return new PromiseQueue(worker, synchronous, threads)
            .queueItems(numbers);
    }

    private static emitProgress(progress: Subject<QueueProgress>, current: number, total: number) {
        const percentage = Math.ceil((current / total) * 100);
        progress.next({current, total, percentage});
    }

    /**
     * Start execution of queue
     * @param items The queue items
     */
    public queueItems(items: T[]): QueueResult<R[]> {
        const progress = new Subject<QueueProgress>();
        let result: Promise<R[]>;

        if (items == null || items.length === 0) {
            // Resolve an empty array if items is empty
            result = Promise.resolve([]);
        } else {
            if (this.synchronous || this.threads === 1) {
                // Run synchronous queue
                result = this.queueSyncImpl(items, progress);
            } else {
                // Run asynchronous queue
                result = this.queueAsyncImpl(items, progress);
            }
        }

        // Complete the progress subject when queue impl resolves
        result = result
            .then(r => {
                progress.complete();
                return r;
            });

        return {result, progress};
    }

    private async queueSyncImpl(items: T[], progress: Subject<QueueProgress>): Promise<R[]> {
        const results: R[] = [];

        // Work through queue
        for (const item of items) {
            results.push(await this.callWorker(item));
            PromiseQueue.emitProgress(progress, results.length, items.length);
        }

        return results;
    }

    private async queueAsyncImpl(items: T[], progress: Subject<QueueProgress>): Promise<R[]> {
        const results: R[] = [];
        const queue = [...items];

        // Work through queue
        while (queue.length > 0) {
            const work = queue.splice(0, this.threads);
            const rs = await Promise.all(work.map(e => this.callWorker(e)));

            results.push(...rs);
            PromiseQueue.emitProgress(progress, results.length, items.length);
        }

        return results;
    }

    private callWorker(item: T): Promise<R> {
        return Promise.resolve(this.worker(item));
    }
}
