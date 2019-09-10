**[TS Utilities](../README.md)**

[Globals](../README.md) › [&quot;promisify/promisify-resolve&quot;](_promisify_promisify_resolve_.md)

# External module: "promisify/promisify-resolve"

## Index

### Functions

* [promisifyResolve](_promisify_promisify_resolve_.md#promisifyresolve)

## Functions

###  promisifyResolve

▸ **promisifyResolve**<**R**>(`fn`: function, `context?`: ThisType‹any›): *function*

*Defined in [promisify/promisify-resolve.ts:5](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify-resolve.ts#L5)*

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

*Defined in [promisify/promisify-resolve.ts:9](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify-resolve.ts#L9)*

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

*Defined in [promisify/promisify-resolve.ts:13](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify-resolve.ts#L13)*

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

*Defined in [promisify/promisify-resolve.ts:17](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify-resolve.ts#L17)*

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

*Defined in [promisify/promisify-resolve.ts:21](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify-resolve.ts#L21)*

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

*Defined in [promisify/promisify-resolve.ts:25](https://github.com/Juraji/ts-utilities/blob/9554ddb/src/lib/promisify/promisify-resolve.ts#L25)*

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