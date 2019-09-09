/* tslint:disable:max-line-length */
import promisifyResolve from "./promisify-resolve";

describe("Global utility: #promisifyResolve()", () => {

    it("should fail when the given method is not a Function", () => {
        // Break type-checking and try to supply a plain object
        const variable = {} as (resolve: (r: string[]) => void, reject: (err?: any) => void) => void;

        expect(() => promisifyResolve(variable)).toThrow(new Error("[Promisify] invalid argument for origin, expected \"Function\" got \"object\""));
    });

    it("should support this-context", async () => {
        class Obj {
            public fn(resolve: () => void) {
                this.sameObjCheck();
                resolve();
            }

            private sameObjCheck() {
                // Do nothing
            }
        }

        const obj = new Obj();

        const withContext = promisifyResolve(obj.fn, obj)();
        const withIndirectContext = promisifyResolve((resolve) => obj.fn(resolve))();
        const withoutContext = promisifyResolve(obj.fn)();

        await expectAsync(withContext).toBeResolved("Promise with context should resolve");
        await expectAsync(withIndirectContext).toBeResolved("Promise with indirect context should resolve");
        await expectAsync(withoutContext).toBeRejected("Promise without context should reject");
    });

    describe("should support the following inputs", () => {
        // noinspection JSUnusedLocalSymbols
        const successfulResolves = {
            no_result_no_args: (resolve: () => void, reject: (err?: any) => void) => resolve(),
            no_result_1_arg: (arg1: string, resolve: () => void, reject: (err?: any) => void) => resolve(),
            no_result_2_args: (arg1: string, arg2: string, resolve: () => void, reject: (err?: any) => void) => resolve(),
            no_result_3_args: (arg1: string, arg2: string, arg3: string, resolve: () => void, reject: (err?: any) => void) => resolve(),
            no_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, resolve: () => void, reject: (err?: any) => void) => resolve(),
            no_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: () => void, reject: (err?: any) => void) => resolve(),
            with_result_no_args: (resolve: (r: string) => void, reject: (err?: any) => void) => resolve("success"),
            with_result_1_arg: (arg1: string, resolve: (r: string) => void, reject: (err?: any) => void) => resolve(arg1),
            with_result_2_args: (arg1: string, arg2: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => resolve([arg1, arg2]),
            with_result_3_args: (arg1: string, arg2: string, arg3: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => resolve([arg1, arg2, arg3]),
            with_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => resolve([arg1, arg2, arg3, arg4]),
            with_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => resolve([arg1, arg2, arg3, arg4, arg5])
        };

        const failedResolves = {
            no_result_no_args: (resolve: () => void, reject: (err?: any) => void) => reject(new Error("fail")),
            no_result_1_arg: (arg1: string, resolve: () => void, reject: (err?: any) => void) => reject(new Error("fail")),
            no_result_2_args: (arg1: string, arg2: string, resolve: () => void, reject: (err?: any) => void) => reject(new Error("fail")),
            no_result_3_args: (arg1: string, arg2: string, arg3: string, resolve: () => void, reject: (err?: any) => void) => reject(new Error("fail")),
            no_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, resolve: () => void, reject: (err?: any) => void) => reject(new Error("fail")),
            no_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: () => void, reject: (err?: any) => void) => reject(new Error("fail")),
            with_result_no_args: (resolve: (r: string) => void, reject: (err?: any) => void) => reject(new Error("fail")),
            with_result_1_arg: (arg1: string, resolve: (r: string) => void, reject: (err?: any) => void) => reject(new Error("fail")),
            with_result_2_args: (arg1: string, arg2: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => reject(new Error("fail")),
            with_result_3_args: (arg1: string, arg2: string, arg3: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => reject(new Error("fail")),
            with_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => reject(new Error("fail")),
            with_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, resolve: (r: string[]) => void, reject: (err?: any) => void) => reject(new Error("fail"))
        };

        it("No result no args", async () => {
            const successSpy = spyOn(successfulResolves, "no_result_no_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "no_result_no_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.no_result_no_args)();
            const fail = promisifyResolve(failedResolves.no_result_no_args)();

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        });

        it("No result 1 arg", async () => {
            const successSpy = spyOn(successfulResolves, "no_result_1_arg").and.callThrough();
            const failSpy = spyOn(failedResolves, "no_result_1_arg").and.callThrough();
            const success = promisifyResolve(successfulResolves.no_result_1_arg)("arg1");
            const fail = promisifyResolve(failedResolves.no_result_1_arg)("arg1");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
        });

        it("No result 2 args", async () => {
            const successSpy = spyOn(successfulResolves, "no_result_2_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "no_result_2_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.no_result_2_args)("arg1", "arg2");
            const fail = promisifyResolve(failedResolves.no_result_2_args)("arg1", "arg2");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
        });

        it("No result 3 args", async () => {
            const successSpy = spyOn(successfulResolves, "no_result_3_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "no_result_3_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.no_result_3_args)("arg1", "arg2", "arg3");
            const fail = promisifyResolve(failedResolves.no_result_3_args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
        });

        it("No result 4 args", async () => {
            const successSpy = spyOn(successfulResolves, "no_result_4_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "no_result_4_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.no_result_4_args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisifyResolve(failedResolves.no_result_4_args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
        });

        it("No result 5 args", async () => {
            const successSpy = spyOn(successfulResolves, "no_result_5_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "no_result_5_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.no_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisifyResolve(failedResolves.no_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
        });

        it("With result no args", async () => {
            const successSpy = spyOn(successfulResolves, "with_result_no_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "with_result_no_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.with_result_no_args)();
            const fail = promisifyResolve(failedResolves.with_result_no_args)();

            await expectAsync(success).toBeResolvedTo("success");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        });

        it("With result 1 arg", async () => {
            const successSpy = spyOn(successfulResolves, "with_result_1_arg").and.callThrough();
            const failSpy = spyOn(failedResolves, "with_result_1_arg").and.callThrough();
            const success = promisifyResolve(successfulResolves.with_result_1_arg)("arg1");
            const fail = promisifyResolve(failedResolves.with_result_1_arg)("arg1");

            await expectAsync(success).toBeResolvedTo("arg1");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function), jasmine.any(Function));
        });

        it("With result 2 args", async () => {
            const successSpy = spyOn(successfulResolves, "with_result_2_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "with_result_2_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.with_result_2_args)("arg1", "arg2");
            const fail = promisifyResolve(failedResolves.with_result_2_args)("arg1", "arg2");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function), jasmine.any(Function));
        });

        it("With result 3 args", async () => {
            const successSpy = spyOn(successfulResolves, "with_result_3_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "with_result_3_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.with_result_3_args)("arg1", "arg2", "arg3");
            const fail = promisifyResolve(failedResolves.with_result_3_args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function), jasmine.any(Function));
        });

        it("With result 4 args", async () => {
            const successSpy = spyOn(successfulResolves, "with_result_4_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "with_result_4_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.with_result_4_args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisifyResolve(failedResolves.with_result_4_args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function), jasmine.any(Function));
        });

        it("With result 5 args", async () => {
            const successSpy = spyOn(successfulResolves, "with_result_5_args").and.callThrough();
            const failSpy = spyOn(failedResolves, "with_result_5_args").and.callThrough();
            const success = promisifyResolve(successfulResolves.with_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisifyResolve(failedResolves.with_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4", "arg5"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function), jasmine.any(Function));
        });
    });
});
