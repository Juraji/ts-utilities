import { Subject } from "rxjs";

import { PromiseQueueTask, QueueProgress, QueueResult } from "./promise-queue.interface";

export class PromiseQueue<T, R> {

    /**
     * Queue work synchronously or divided amongst threads
     *
     * <pre>
     *     // Where service is some async implementation
     *     const task = (userId: number) => service.fetchUser(userId);
     *
     *     // Where userIDs is an array of user IDs to fetch
     *     const queueResult = new PromiseQueue(task)
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
     * @param task A mapping function, from T to R | Promise<R>.
     * @param threads The count of concurrent executions for the task.
     */
    constructor(private readonly task: PromiseQueueTask<T, R>,
                public readonly threads: number = 8) {
        if (typeof task !== "function") {
            throw new Error(`Type of task should be of type "function", got "${typeof task}".`);
        }
        if (threads < 1) {
            throw new Error(`Thread count must be at least 1, got ${threads}.`);
        }
    }

    /**
     * Create a synchronous PromiseQueue
     * @param task A mapping function, from number to R | Promise<R>
     */
    public static synchronous<T, R>(task: PromiseQueueTask<T, R>): PromiseQueue<T, R> {
        return new PromiseQueue<T, R>(task, 1);
    }

    private static emitProgress(progress: Subject<QueueProgress>, current: number, total: number) {
        const percentage = Math.ceil((current / total) * 100);
        progress.next({current, total, percentage});
    }

    /**
     * Start execution of queue
     * @param items The queue items
     */
    public queue(items: T[]): QueueResult<R> {
        const progress = new Subject<QueueProgress>();
        let result: Promise<R[]>;

        if (items == null || items.length === 0) {
            // Resolve an empty array if items is empty
            result = Promise.resolve([]);
        } else {
            if (this.threads === 1) {
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
            results.push(await this.runTask(item));
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
            const rs = await Promise.all(work.map(e => this.runTask(e)));

            results.push(...rs);
            PromiseQueue.emitProgress(progress, results.length, items.length);
        }

        return results;
    }

    private runTask(item: T): Promise<R> {
        return Promise.resolve(this.task(item));
    }
}
