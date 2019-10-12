import { Observable } from "rxjs";

/**
 * Queue progress message
 */
export interface QueueProgress {
    /** Items processed */
    current: number;
    /** Total items */
    total: number;
    /** Percentage processed */
    percentage: number;
}

/**
 * Queue result
 */
export interface QueueResult<T> {
    /** Task results */
    result: Promise<T[]>;
    /** Pogress messages emitter {@see QueueProgress} */
    progress: Observable<QueueProgress>;
}

/**
 * Mapping function from queue item to result
 */
export type PromiseQueueTask<T, R> = (item: T) => R | Promise<R>;
