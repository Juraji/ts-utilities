type NodeCallback = (err?: any) => void;
type NodeResultCallback<R> = (err: any, result?: R) => void;

// Promisify overloads
export function promisify<R>(
    fn: (callback: NodeResultCallback<R>) => void,
    context?: ThisType<any>)
    : () => Promise<R>;
export function promisify(
    fn: (callback: NodeCallback) => void,
    context?: ThisType<any>)
    : () => Promise<void>;
export function promisify<T1, R>(
    fn: (arg1: T1, callback: NodeResultCallback<R>) => void,
    context?: ThisType<any>)
    : (arg1: T1) => Promise<R>;
export function promisify<T1>(
    fn: (arg1: T1, callback: NodeCallback) => void,
    context?: ThisType<any>)
    : (arg1: T1) => Promise<void>;
export function promisify<T1, T2, R>(
    fn: (arg1: T1, arg2: T2, callback: NodeResultCallback<R>) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2) => Promise<R>;
export function promisify<T1, T2>(
    fn: (arg1: T1, arg2: T2, callback: NodeCallback) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2) => Promise<void>;
export function promisify<T1, T2, T3, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: NodeResultCallback<R>) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3) => Promise<R>;
export function promisify<T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: NodeCallback) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
export function promisify<T1, T2, T3, T4, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: NodeResultCallback<R>) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>;
export function promisify<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: NodeCallback) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
export function promisify<T1, T2, T3, T4, T5, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: NodeResultCallback<R>) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>;
export function promisify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: NodeCallback) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;

/**
 * promisify is a Node utility function to convert Continuation-passing style functions.
 * to Promise functions in order to make them support async/await.
 *
 * <pre>
 *     class MyClass {}
 *          public myFunction(arg1: number,
 *                            callback: (err: any, result: string) => void) {...}
 *      }
 *
 *      const obj = new MyClass();
 *      const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
 * </pre>
 *
 * @param original Continuation-style function.
 * @param context An optional this-context
 * @return A function, with the same interface, resulting in a Promise.
 */
// tslint:disable-next-line:ban-types
export function promisify(original: Function, context?: ThisType<any>): () => Promise<any> {
    if (typeof original !== "function") {
        throw new Error(`[Promisify] invalid argument for origin, expected "Function" got "${typeof original}"`);
    }

    function fn(...args) {
        return new Promise((resolve, reject) => {
            original.call(context || this, ...args, (err, result) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
            });
        });
    }

    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    return Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original));
}
