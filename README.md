# TsUtilities

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.  
A personal library "ts-utilities", with a few utilities I often use in TypeScript projects.

# Glossary
### Global function #promisify()

promisify is a Node utility function to convert Continuation-passing style functions
to Promise functions in order to make them support async/await.
 
> The TypeScript overloads are defined for up to 5 arguments to the supplied method.
 
Synopsis:  
`promisify(...args: any[], callback: Function);`

```typescript
import promisify from "./projects/ts-utilities/src/lib/promisify";

class MyClass {
    public myFunction(arg1: string, callback: (err: any, result?: string) => void): void {
        try {
            // Do some stuff
            callback(undefined, "result"); 
        } catch (e) {
            callback(e);
        }
    }
}

const obj = new MyClass();
const myFunctionP: Promise<string> = promisify(obj.myFunction)("arg1");

myFunctionP
    .then(result => console.log(result))
    .catch(err => console.error(err));
```

### Global function #promisifyResolve()

 promisifyResolve is an extension on the promisify utility in Node.
 It converts resolve-reject-style functions to Promise functions in order to make them support async/await.
 
 > The TypeScript overloads are defined for up to 5 arguments to the supplied method.
 
 Synopsis:  
 `promisifyResolve(...args: any[], resolve: Function, reject: Function);`
 
 ```typescript
import promisifyResolve from "./projects/ts-utilities/src/lib/promisify";

class MyClass {
    public myFunction(arg: string, resolve: (result: string) => void, reject: (err?: any) => void): void {
        try {
            // Do some stuff
            resolve("result");
        } catch (e) {
          reject(e);
        }
    }
}
 
const obj = new MyClass();
const myFunctionP: Promise<string> = promisifyResolve(obj.myFunction)("arg1");

myFunctionP
    .then(result => console.log(result))
    .catch(err => console.error(err));
```
 
### Generator idGenerator()
A ES6 generator function: Generate numerical ID's (from 0 up)

Synopsis:  
`idGenerator(max: number = Infinity);`
```typescript
import idGenerator from "./projects/ts-utilities/src/lib/generators"

// Will generate 0...3 then terminate
const iterable = idGenerator(3);

const call1 = iterable.next();
const call2 = iterable.next();
const call3 = iterable.next();
const call4 = iterable.next();
const call5 = iterable.next();

console.log(call1.value, call1.done); // Log: 0 false
console.log(call2.value, call2.done); // Log: 1 false
console.log(call3.value, call3.done); // Log: 2 false
console.log(call4.value, call4.done); // Log: 2 false
console.log(call5.value, call5.done); // Log: undefined true
```

### Generator UUID

Class for generating (pseudo) random UUIDs.

Synopsis:  
`UUID.generate();`  
`UUID.generator(max: number = Infinity)`

```typescript
import UUID from "./projects/ts-utilities/src/lib/generators"

console.log(UUID.generate()); // xxxxxxxx-xxxx-xxxx-xxxxxxxx

// Will generate 3 UUIDs then terminate
const iterable = UUID.generator(3);

const call1 = iterable.next();
const call2 = iterable.next();
const call3 = iterable.next();
const call4 = iterable.next();

console.log(call1.value, call1.done); // Log: 0 false
console.log(call2.value, call2.done); // Log: 1 false
console.log(call3.value, call3.done); // Log: 2 false
console.log(call4.value, call4.done); // Log: undefined true
```

### Global SimpleLogger

A configurable logger defined in the global scope as `LOGGER`.  
See the synopsis below on how to configure the logger.

Synopsis:  
`LOGGER.configure(config: SimpleLoggerConfig);`  
`LOGGER.debug("Some {}", "message", ...);`  
`LOGGER.info("Some {}", "message", ...);`  
`LOGGER.warn("Some {}", "message", ...);`  
`LOGGER.error("Some {}", "message", ...);`

```typescript
import LOGGER, { Level } from "./projects/ts-utilities/src/lib/simple-logger";
import { BrowserConsoleLogOutput } from "./projects/ts-utilities/src/lib/simple-logger/log-output";
import { CurlyBracketsFormatter } from "./projects/ts-utilities/src/lib/simple-logger/log-formatter";

LOGGER.info("My {} message.", "info"); // Log: My info message

// #configure may be called optionally, this call shows the default values
LOGGER.configure({
    level: Level.INFO,
    out: new BrowserConsoleLogOutput(),
    formatter: new CurlyBracketsFormatter()
});

LOGGER.debug("{} My {} message.", 1, "debug"); // Nothing happens
LOGGER.info("{} My {} message.", 2, "info"); // Log: 2 My info message
LOGGER.warn("{} My {} message.", 3, "warn"); // Warn: 3 My warn message
LOGGER.error("{} My {} message.", 4, "error"); // Error: 4 My error message
```
