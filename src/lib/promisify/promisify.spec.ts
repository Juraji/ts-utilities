/* tslint:disable:max-line-length */
import promisify from "./promisify";

describe("Global utility: #promisify()", () => {
    it("should fail when the given method is not a Function", () => {
        // Break type-checking and try to supply a number
        const variable = 1 as any as (callback: (err: any, r?: string[]) => void) => void;

        expect(() => promisify(variable)).toThrow(new Error("[Promisify] invalid argument for origin, expected \"Function\" got \"number\""));
    });

    it("should support this-context", async () => {
        class Obj {
            public fn(callback: (err?: any) => void) {
                this.sameObjCheck();
                callback();
            }

            private sameObjCheck() {
                // Do nothing
            }
        }

        const obj = new Obj();

        const withContext = promisify(obj.fn, obj)();
        const withIndirectContext = promisify((cb) => obj.fn(cb))();
        const withoutContext = promisify(obj.fn)();

        await expectAsync(withContext).toBeResolved("Promise with context should resolve");
        await expectAsync(withIndirectContext).toBeResolved("Promise with indirect context should resolve");
        await expectAsync(withoutContext).toBeRejected("Promise without context should reject");
    });

    describe("should support the following inputs", () => {
        const successfulCallbacks = {
            no_result_no_args: (callback: (err?: any) => void) => callback(),
            no_result_1_arg: (arg1: string, callback: (err?: any) => void) => callback(),
            no_result_2_args: (arg1: string, arg2: string, callback: (err?: any) => void) => callback(),
            no_result_3_args: (arg1: string, arg2: string, arg3: string, callback: (err?: any) => void) => callback(),
            no_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, callback: (err?: any) => void) => callback(),
            no_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err?: any) => void) => callback(),
            with_result_no_args: (callback: (err: any, r: string) => void) => callback(undefined, "success"),
            with_result_1_arg: (arg1: string, callback: (err: any, r: string) => void) => callback(undefined, arg1),
            with_result_2_args: (arg1: string, arg2: string, callback: (err: any, r: string[]) => void) => callback(undefined, [arg1, arg2]),
            with_result_3_args: (arg1: string, arg2: string, arg3: string, callback: (err: any, r: string[]) => void) => callback(undefined, [arg1, arg2, arg3]),
            with_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, callback: (err: any, r: string[]) => void) => callback(undefined, [arg1, arg2, arg3, arg4]),
            with_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err: any, r: string[]) => void) => callback(undefined, [arg1, arg2, arg3, arg4, arg5])
        };

        const failingCallbacks = {
            no_result_no_args: (callback: (err?: any) => void) => callback(new Error("fail")),
            no_result_1_arg: (arg1: string, callback: (err?: any) => void) => callback(new Error("fail")),
            no_result_2_args: (arg1: string, arg2: string, callback: (err?: any) => void) => callback(new Error("fail")),
            no_result_3_args: (arg1: string, arg2: string, arg3: string, callback: (err?: any) => void) => callback(new Error("fail")),
            no_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, callback: (err?: any) => void) => callback(new Error("fail")),
            no_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err?: any) => void) => callback(new Error("fail")),
            with_result_no_args: (callback: (err: any, r?: string) => void) => callback(new Error("fail")),
            with_result_1_arg: (arg1: string, callback: (err: any, r?: string) => void) => callback(new Error("fail")),
            with_result_2_args: (arg1: string, arg2: string, callback: (err: any, r?: string[]) => void) => callback(new Error("fail")),
            with_result_3_args: (arg1: string, arg2: string, arg3: string, callback: (err: any, r?: string[]) => void) => callback(new Error("fail")),
            with_result_4_args: (arg1: string, arg2: string, arg3: string, arg4: string, callback: (err: any, r?: string[]) => void) => callback(new Error("fail")),
            with_result_5_args: (arg1: string, arg2: string, arg3: string, arg4: string, arg5, callback: (err: any, r?: string[]) => void) => callback(new Error("fail"))
        };

        it("No result no args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_no_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_no_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_no_args)();
            const fail = promisify(failingCallbacks.no_result_no_args)();

            await expectAsync(success).toBeResolved("Succesful callback should resolve");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });


        it("No result 1 arg", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_1_arg").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_1_arg").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_1_arg)("arg1");
            const fail = promisify(failingCallbacks.no_result_1_arg)("arg1");

            await expectAsync(success).toBeResolved("Succesful callback should resolve");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });


        it("No result 2 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_2_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_2_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_2_args)("arg1", "arg2");
            const fail = promisify(failingCallbacks.no_result_2_args)("arg1", "arg2");

            await expectAsync(success).toBeResolved("Succesful callback should resolve");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });


        it("No result 3 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_3_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_3_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_3_args)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.no_result_3_args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolved("Succesful callback should resolve");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });


        it("No result 4 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_4_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_4_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_4_args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.no_result_4_args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolved("Succesful callback should resolve");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });


        it("No result 5 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_5_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_5_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.no_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolved("Succesful callback should resolve");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });

        it("With result no args", async () => {
            const successSpy = spyOn(successfulCallbacks, "with_result_no_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "with_result_no_args").and.callThrough();
            const success = promisify(successfulCallbacks.with_result_no_args)();
            const fail = promisify(failingCallbacks.with_result_no_args)();

            await expectAsync(success).toBeResolvedTo("success");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });

        it("With result 1 arg", async () => {
            const successSpy = spyOn(successfulCallbacks, "with_result_1_arg").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "with_result_1_arg").and.callThrough();
            const success = promisify(successfulCallbacks.with_result_1_arg)("arg1");
            const fail = promisify(failingCallbacks.with_result_1_arg)("arg1");

            await expectAsync(success).toBeResolvedTo("arg1");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });

        it("With result 2 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "with_result_2_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "with_result_2_args").and.callThrough();
            const success = promisify(successfulCallbacks.with_result_2_args)("arg1", "arg2");
            const fail = promisify(failingCallbacks.with_result_2_args)("arg1", "arg2");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });

        it("With result 3 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "with_result_3_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "with_result_3_args").and.callThrough();
            const success = promisify(successfulCallbacks.with_result_3_args)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.with_result_3_args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });

        it("With result 4 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "with_result_4_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "with_result_4_args").and.callThrough();
            const success = promisify(successfulCallbacks.with_result_4_args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.with_result_4_args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });

        it("With result 5 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "with_result_5_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "with_result_5_args").and.callThrough();
            const success = promisify(successfulCallbacks.with_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.with_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4", "arg5"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });
    });
});
