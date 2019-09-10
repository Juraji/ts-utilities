/**
 * @module Promisify
 */
/** */

type NodeResolve<T> = (result?: T) => void;
type NodeReject = (err?: any) => void;

// promisifyResolve overloads
export function promisifyResolve<R>(
    fn: (resolve: NodeResolve<R>, reject: NodeReject) => void,
    context?: ThisType<any>)
    : () => Promise<R>;
export function promisifyResolve<T1, R>(
    fn: (arg1: T1, resolve: NodeResolve<R>, reject: NodeReject) => void,
    context?: ThisType<any>)
    : (arg1: T1) => Promise<R>;
export function promisifyResolve<T1, T2, R>(
    fn: (arg1: T1, arg2: T2, resolve: NodeResolve<R>, reject: NodeReject) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2) => Promise<R>;
export function promisifyResolve<T1, T2, T3, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, resolve: NodeResolve<R>, reject: NodeReject) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3) => Promise<R>;
export function promisifyResolve<T1, T2, T3, T4, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, resolve: NodeResolve<R>, reject: NodeReject) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>;
export function promisifyResolve<T1, T2, T3, T4, T5, R>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, resolve: NodeResolve<R>, reject: NodeReject) => void,
    context?: ThisType<any>)
    : (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>;

/**
 * promisifyResolve is an extension on the promisify utility in Node.
 * It converts resolve-reject-style functions to Promise functions in order to make them support async/await.
 *
 * <pre>
 *     class MyClass {
 *          public myFunction(arg: string,
 *                            resolve: (result: string) => void,
 *                            reject: (err?: any) => void): void {...}
 *      }
 *
 *      const obj = new MyClass();
 *      const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
 * </pre>
 *
 * @param original resolve-reject-style function.
 * @param context An optional this-context
 * @return A function, with the same interface, resulting in a Promise.
 */
// tslint:disable-next-line:ban-types
export function promisifyResolve(original: Function, context?: ThisType<any>): () => Promise<any> {
    if (typeof original !== "function") {
        throw new Error(`[Promisify] invalid argument for origin, expected "Function" got "${typeof original}"`);
    }

    function fn(...args) {
        return new Promise((resolve, reject) =>
            original.call(context || this, ...args, resolve, reject));
    }

    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    return Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original));
}
