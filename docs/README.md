[TS Utilities](README.md)

# TS Utilities


## Index

### Enumerations

* [Level](enums/level.md)

### Classes

* [AdvancedLogFormatter](classes/advancedlogformatter.md)
* [BrowserConsoleLogOutput](classes/browserconsolelogoutput.md)
* [CurlyBracketsLogFormatter](classes/curlybracketslogformatter.md)
* [NumberedCurlyBrackesLogFormatter](classes/numberedcurlybrackeslogformatter.md)
* [PromiseQueue](classes/promisequeue.md)
* [UUID](classes/uuid.md)

### Interfaces

* [LogFormatter](interfaces/logformatter.md)
* [LogOutput](interfaces/logoutput.md)
* [QueueProgress](interfaces/queueprogress.md)
* [QueueResult](interfaces/queueresult.md)
* [SimpleLogger](interfaces/simplelogger.md)
* [SimpleLoggerConfig](interfaces/simpleloggerconfig.md)

### Type aliases

* [PromiseQueueTask](README.md#promisequeuetask)

### Functions

* [LOGGER](README.md#logger)
* [idGenerator](README.md#idgenerator)
* [promisify](README.md#promisify)
* [promisifyResolve](README.md#promisifyresolve)

## Type aliases

###  PromiseQueueTask

Ƭ **PromiseQueueTask**: *function*

*Defined in [lib/promise-queue/promise-queue.ts:7](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promise-queue/promise-queue.ts#L7)*

Mapping function from queue item to result

#### Type declaration:

▸ (`item`: T): *R | Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

## Functions

###  LOGGER

▸ **LOGGER**(): *[SimpleLogger](interfaces/simplelogger.md)*

*Defined in [lib/simple-logger/init.ts:20](https://github.com/Juraji/ts-utilities/blob/master/src/lib/simple-logger/init.ts#L20)*

Create or get the current logger

Use LOGGER.reconfigure() to reset the logger to its defaults

**Returns:** *[SimpleLogger](interfaces/simplelogger.md)*

___

###  idGenerator

▸ **idGenerator**(`max`: number): *IterableIterator‹number›*

*Defined in [lib/generators/id-generator.ts:6](https://github.com/Juraji/ts-utilities/blob/master/src/lib/generators/id-generator.ts#L6)*

Generate numerical ID's (from 0 up).

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`max` | number |  Infinity | The maximum ID before completing the iterable. |

**Returns:** *IterableIterator‹number›*

An Iterator, yielding numerical id's starting at 0 until max is reached.

___

###  promisify

▸ **promisify**<**R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:5](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L5)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`callback`: NodeResultCallback‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | NodeResultCallback‹R› |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (): *Promise‹R›*

▸ **promisify**(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:9](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L9)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Parameters:**

▪ **fn**: *function*

▸ (`callback`: NodeCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | NodeCallback |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (): *Promise‹void›*

▸ **promisify**<**T1**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:13](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L13)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `callback`: NodeResultCallback‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`callback` | NodeResultCallback‹R› |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

▸ **promisify**<**T1**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:17](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L17)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `callback`: NodeCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`callback` | NodeCallback |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

▸ **promisify**<**T1**, **T2**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:21](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L21)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `callback`: NodeResultCallback‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`callback` | NodeResultCallback‹R› |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

▸ **promisify**<**T1**, **T2**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:25](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L25)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `callback`: NodeCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`callback` | NodeCallback |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

▸ **promisify**<**T1**, **T2**, **T3**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:29](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L29)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `callback`: NodeResultCallback‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`callback` | NodeResultCallback‹R› |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

▸ **promisify**<**T1**, **T2**, **T3**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:33](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L33)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `callback`: NodeCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`callback` | NodeCallback |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:37](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L37)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `callback`: NodeResultCallback‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`callback` | NodeResultCallback‹R› |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:41](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L41)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `callback`: NodeCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`callback` | NodeCallback |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**, **T5**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:45](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L45)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `callback`: NodeResultCallback‹R›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |
`callback` | NodeResultCallback‹R› |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**, **T5**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify.ts:49](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify.ts#L49)*

promisify is a Node utility function to convert Continuation-passing style functions.
to Promise functions in order to make them support async/await.

<pre>
    class MyClass {}
         public myFunction(arg1: number,
                           callback: (err: any, result: string) => void) {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisify(obj.myFunction)(123);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `callback`: NodeCallback): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |
`callback` | NodeCallback |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

___

###  promisifyResolve

▸ **promisifyResolve**<**R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify-resolve.ts:5](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify-resolve.ts#L5)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<pre>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</pre>

**Type parameters:**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`resolve`: NodeResolve‹R›, `reject`: NodeReject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`resolve` | NodeResolve‹R› |
`reject` | NodeReject |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (): *Promise‹R›*

▸ **promisifyResolve**<**T1**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify-resolve.ts:9](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify-resolve.ts#L9)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<pre>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</pre>

**Type parameters:**

▪ **T1**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `resolve`: NodeResolve‹R›, `reject`: NodeReject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`resolve` | NodeResolve‹R› |
`reject` | NodeReject |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

▸ **promisifyResolve**<**T1**, **T2**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify-resolve.ts:13](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify-resolve.ts#L13)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<pre>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `resolve`: NodeResolve‹R›, `reject`: NodeReject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`resolve` | NodeResolve‹R› |
`reject` | NodeReject |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

▸ **promisifyResolve**<**T1**, **T2**, **T3**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify-resolve.ts:17](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify-resolve.ts#L17)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<pre>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `resolve`: NodeResolve‹R›, `reject`: NodeReject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`resolve` | NodeResolve‹R› |
`reject` | NodeReject |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

▸ **promisifyResolve**<**T1**, **T2**, **T3**, **T4**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify-resolve.ts:21](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify-resolve.ts#L21)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<pre>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `resolve`: NodeResolve‹R›, `reject`: NodeReject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`resolve` | NodeResolve‹R› |
`reject` | NodeReject |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

▸ **promisifyResolve**<**T1**, **T2**, **T3**, **T4**, **T5**, **R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [lib/promisify/promisify-resolve.ts:25](https://github.com/Juraji/ts-utilities/blob/master/src/lib/promisify/promisify-resolve.ts#L25)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<pre>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</pre>

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **R**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `resolve`: NodeResolve‹R›, `reject`: NodeReject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |
`resolve` | NodeResolve‹R› |
`reject` | NodeReject |

▪`Optional`  **context**: *ThisType‹any›*

An optional this-context

**Returns:** *function*

A function, with the same interface, resulting in a Promise.

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |