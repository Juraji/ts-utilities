**[TS Utilities](../README.md)**

[Globals](../README.md) › [Promisify](promisify.md)

# External module: Promisify

## Index

### Functions

* [promisify](promisify.md#promisify)
* [promisifyResolve](promisify.md#promisifyresolve)

## Functions

###  promisify

▸ **promisify**<**R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [promisify/promisify.ts:10](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L10)*

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

*Defined in [promisify/promisify.ts:14](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L14)*

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

*Defined in [promisify/promisify.ts:18](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L18)*

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

*Defined in [promisify/promisify.ts:22](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L22)*

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

*Defined in [promisify/promisify.ts:26](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L26)*

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

*Defined in [promisify/promisify.ts:30](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L30)*

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

*Defined in [promisify/promisify.ts:34](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L34)*

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

*Defined in [promisify/promisify.ts:38](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L38)*

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

*Defined in [promisify/promisify.ts:42](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L42)*

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

*Defined in [promisify/promisify.ts:46](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L46)*

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

*Defined in [promisify/promisify.ts:50](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L50)*

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

*Defined in [promisify/promisify.ts:54](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify.ts#L54)*

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

*Defined in [promisify/promisify-resolve.ts:10](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify-resolve.ts#L10)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<code>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</code>

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

*Defined in [promisify/promisify-resolve.ts:14](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify-resolve.ts#L14)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<code>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</code>

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

*Defined in [promisify/promisify-resolve.ts:18](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify-resolve.ts#L18)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<code>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</code>

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

*Defined in [promisify/promisify-resolve.ts:22](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify-resolve.ts#L22)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<code>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</code>

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

*Defined in [promisify/promisify-resolve.ts:26](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify-resolve.ts#L26)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<code>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</code>

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

*Defined in [promisify/promisify-resolve.ts:30](https://github.com/Juraji/ts-utilities/blob/7643b75/src/promisify/promisify-resolve.ts#L30)*

promisifyResolve is an extension on the promisify utility in Node.
It converts resolve-reject-style functions to Promise functions in order to make them support async/await.

<code>
    class MyClass {
         public myFunction(arg: string,
                           resolve: (result: string) => void,
                           reject: (err?: any) => void): void {...}
     }

     const obj = new MyClass();
     const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)(arg1);
</code>

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