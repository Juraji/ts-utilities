# TsUtilities

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.  
A personal library "ts-utilities", with a few utilities I often use in TypeScript projects.

# Glossary
### Global function #promisify 

promisify is a Node utility function to convert Continuation-passing style functions
to Promise functions in order to make them support async/await.
 
> The TypeScript overloads are defined for up to 5 arguments to the supplied method.
 
Synopsis:  
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

### Global function #promisifyResolve

 promisifyResolve is an extension on the promisify utility in Node.
 It converts resolve-reject-style functions to Promise functions in order to make them support async/await.
 
 > The TypeScript overloads are defined for up to 5 arguments to the supplied method.
 
 Synopsis:
 ```typescript
import promisifyResolve from "./projects/ts-utilities/src/lib/promisify-resolve";

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
 
