**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;promisify/promisify&quot;](_promisify_promisify_.md)

# External module: "promisify/promisify"

## Index

### Functions

* [promisify](_promisify_promisify_.md#promisify)

## Functions

###  promisify

▸ **promisify**<**R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [promisify/promisify.ts:5](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L5)*

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

*Defined in [promisify/promisify.ts:9](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L9)*

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

*Defined in [promisify/promisify.ts:13](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L13)*

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

*Defined in [promisify/promisify.ts:17](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L17)*

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

*Defined in [promisify/promisify.ts:21](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L21)*

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

*Defined in [promisify/promisify.ts:25](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L25)*

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

*Defined in [promisify/promisify.ts:29](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L29)*

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

*Defined in [promisify/promisify.ts:33](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L33)*

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

*Defined in [promisify/promisify.ts:37](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L37)*

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

*Defined in [promisify/promisify.ts:41](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L41)*

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

*Defined in [promisify/promisify.ts:45](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L45)*

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

*Defined in [promisify/promisify.ts:49](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify.ts#L49)*

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