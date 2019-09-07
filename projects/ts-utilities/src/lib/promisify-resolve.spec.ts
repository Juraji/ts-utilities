/* tslint:disable:max-line-length */
import { promisifyResolve } from "./promisify-resolve";

describe("Global utility: #promisifyResolve", () => {
    const successfulResolves = new (class SuccessfulResolveClass {

        // noinspection JSUnusedLocalSymbols
        public result0args(resolve: (r: string) => void, reject: (err?: any) => void): void {
            resolve("success");
        }

        // noinspection JSUnusedLocalSymbols
        public void0Args(resolve: () => void, reject: (err?: any) => void): void {
            resolve();
        }

        // noinspection JSUnusedLocalSymbols
        public result1Arg(arg1: string, resolve: (r: string) => void, reject: (err?: any) => void): void {
            resolve(arg1);
        }

        // noinspection JSUnusedLocalSymbols
        public void1Arg(arg1: string, resolve: () => void, reject: (err?: any) => void): void {
            resolve();
        }

        // noinspection JSUnusedLocalSymbols
        public result2Args(arg1: string, arg2: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            resolve([arg1, arg2]);
        }

        // noinspection JSUnusedLocalSymbols
        public void2Args(arg1: string, arg2: string, resolve: () => void, reject: (err?: any) => void): void {
            resolve();
        }

        // noinspection JSUnusedLocalSymbols
        public result3Args(arg1: string, arg2: string, arg3: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            resolve([arg1, arg2, arg3]);
        }

        // noinspection JSUnusedLocalSymbols
        public void3Args(arg1: string, arg2: string, arg3: string, resolve: () => void, reject: (err?: any) => void): void {
            resolve();
        }

        // noinspection JSUnusedLocalSymbols
        public result4Args(arg1: string, arg2: string, arg3: string, arg4: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            resolve([arg1, arg2, arg3, arg4]);
        }

        // noinspection JSUnusedLocalSymbols
        public void4Args(arg1: string, arg2: string, arg3: string, arg4: string, resolve: () => void, reject: (err?: any) => void): void {
            resolve();
        }

        // noinspection JSUnusedLocalSymbols
        public result5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            resolve([arg1, arg2, arg3, arg4, arg5]);
        }

        // noinspection JSUnusedLocalSymbols
        public void5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: () => void, reject: (err?: any) => void): void {
            resolve();
        }
    })();

    const failedResolves = new (class FailedResolveClass {

        // noinspection JSUnusedLocalSymbols
        public result0args(resolve: (r: string) => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public void0Args(resolve: () => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public result1Arg(arg1: string, resolve: (r: string) => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public void1Arg(arg1: string, resolve: () => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public result2Args(arg1: string, arg2: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public void2Args(arg1: string, arg2: string, resolve: () => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public result3Args(arg1: string, arg2: string, arg3: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public void3Args(arg1: string, arg2: string, arg3: string, resolve: () => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public result4Args(arg1: string, arg2: string, arg3: string, arg4: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public void4Args(arg1: string, arg2: string, arg3: string, arg4: string, resolve: () => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public result5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }

        // noinspection JSUnusedLocalSymbols
        public void5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: () => void, reject: (err?: any) => void): void {
            reject(new Error("fail"));
        }
    })();

    describe("should support the following inputs", () => {
        it("No args with result (resolve: (r: string) => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "result0args").and.callThrough();
            const failSpy = spyOn(failedResolves, "result0args").and.callThrough();
            const success = promisifyResolve(successfulResolves.result0args)();
            const fail = promisifyResolve(failedResolves.result0args)();

            await expectAsync(success).toBeResolvedTo("success");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        });

        it("No args void result (resolve: () => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "void0Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "void0Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.void0Args)();
            const fail = promisifyResolve(failedResolves.void0Args)();

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        });

        it("1 arg with result (arg1: string, resolve: (r: string) => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "result1Arg").and.callThrough();
            const failSpy = spyOn(failedResolves, "result1Arg").and.callThrough();
            const success = promisifyResolve(successfulResolves.result1Arg)("arg1");
            const fail = promisifyResolve(failedResolves.result1Arg)("arg1");

            await expectAsync(success).toBeResolvedTo("arg1");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
        });

        it("1 arg void result (arg1: string, resolve: () => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "void1Arg").and.callThrough();
            const failSpy = spyOn(failedResolves, "void1Arg").and.callThrough();
            const success = promisifyResolve(successfulResolves.void1Arg)("arg1");
            const fail = promisifyResolve(failedResolves.void1Arg)("arg1");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
        });

        it("2 args with result (arg1: string, arg2: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "result2Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "result2Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.result2Args)("arg1", "arg2");
            const fail = promisifyResolve(failedResolves.result2Args)("arg1", "arg2");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
        });

        it("2 args void result (arg1: string, arg2: string, resolve: () => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "void2Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "void2Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.void2Args)("arg1", "arg2");
            const fail = promisifyResolve(failedResolves.void2Args)("arg1", "arg2");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
        });

        it("3 args with result (arg1: string, arg2: string, arg3: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "result3Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "result3Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.result3Args)("arg1", "arg2", "arg3");
            const fail = promisifyResolve(failedResolves.result3Args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
        });

        it("3 args void result (arg1: string, arg2: string, arg3: string, resolve: () => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "void3Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "void3Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.void3Args)("arg1", "arg2", "arg3");
            const fail = promisifyResolve(failedResolves.void3Args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
        });

        it("4 args with result (arg1: string, arg2: string, arg3: string, arg4: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "result4Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "result4Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.result4Args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisifyResolve(failedResolves.result4Args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
        });

        it("4 args void result (arg1: string, arg2: string, arg3: string, arg4: string, resolve: () => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "void4Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "void4Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.void4Args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisifyResolve(failedResolves.void4Args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
        });

        it("5 args with result (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: (r: string[]) => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "result5Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "result5Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.result5Args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisifyResolve(failedResolves.result5Args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4", "arg5"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
        });

        it("5 args void result (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: () => void, reject: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulResolves, "void5Args").and.callThrough();
            const failSpy = spyOn(failedResolves, "void5Args").and.callThrough();
            const success = promisifyResolve(successfulResolves.void5Args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisifyResolve(failedResolves.void5Args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
        });
    });
});
