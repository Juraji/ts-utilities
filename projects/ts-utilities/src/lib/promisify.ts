/**
 * promisify is a Node utility function to convert Continuation-passing style functions
 * to Promise functions, in order to make them support async/await.
 */

export type NodeCallback = (err?: Error | null) => void;
export type NodeResultCallback<R> = (err: Error | null, result: R) => void;

// Promisify overloads
// tslint:disable-next-line:ban-types
export function promisify<R>(
    fn: (callback: NodeResultCallback<R>) => void)
    : () => Promise<R>;
export function promisify(
    fn: (callback: NodeCallback) => void)
    : () => Promise<void>;
export function promisify<T1, R>(
    fn: (arg1: T1, callback: NodeResultCallback<R>) => void)
    : (arg1: T1) => Promise<R>;
export function promisify<T1>(
    fn: (arg1: T1, callback: NodeCallback) => void)
    : (arg1: T1) => Promise<void>;
export function promisify<T1, T2, R>(
    fn: (arg1: T1, arg2: T2, callback: NodeResultCallback<R>) => void)
    : (arg1: T1, arg2: T2) => Promise<R>;
export function promisify<T1, T2>(
    fn: (arg1: T1, arg2: T2, callback: NodeCallback) => void)
    : (arg1: T1, arg2: T2) => Promise<void>;
export function promisify<T1, T2, T3, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: NodeResultCallback<R>) => void)
    : (arg1: T1, arg2: T2, arg3: T3) => Promise<R>;
export function promisify<T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: NodeCallback) => void)
    : (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
export function promisify<T1, T2, T3, T4, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: NodeResultCallback<R>) => void)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>;
export function promisify<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: NodeCallback) => void)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
export function promisify<T1, T2, T3, T4, T5, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: NodeResultCallback<R>) => void)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>;
export function promisify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: NodeCallback) => void)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;

/**
 * Promisify implementation
 * This method will not be visible by code completion.
 * The interfaces above will assert proper typing for up to 5 arguments.
 */
// tslint:disable-next-line:ban-types
export function promisify(original: Function): () => Promise<any> {
    if (typeof original !== "function") {
        throw new Error(`[Promisify] Invalid argument origin. Expected "Function" got "${typeof original}".`);
    }

    function fn(...args) {
        return new Promise((resolve, reject) => original.call(this, ...args, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        }));
    }

    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    return Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original));
}
