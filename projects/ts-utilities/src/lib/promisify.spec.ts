/* tslint:disable:max-line-length */
import promisify from "./promisify";

describe("Global utility: #promisify", () => {
    const successfulCallbacks = new (class SuccessfulCallbacksClass {

        public result0args(callback: (err: any, r: string) => void): void {
            callback(undefined, "success");
        }

        public void0Args(callback: (err?: any) => void): void {
            callback();
        }

        public result1Arg(arg1: string, callback: (err: any, r: string) => void): void {
            callback(undefined, arg1);
        }

        public void1Arg(arg1: string, callback: (err?: any) => void): void {
            callback();
        }

        public result2Args(arg1: string, arg2: string, callback: (err: any, r: string[]) => void): void {
            callback(undefined, [arg1, arg2]);
        }

        public void2Args(arg1: string, arg2: string, callback: (err?: any) => void): void {
            callback();
        }

        public result3Args(arg1: string, arg2: string, arg3: string, callback: (err: any, r: string[]) => void): void {
            callback(undefined, [arg1, arg2, arg3]);
        }

        public void3Args(arg1: string, arg2: string, arg3: string, callback: (err?: any) => void): void {
            callback();
        }

        public result4Args(arg1: string, arg2: string, arg3: string, arg4: string, callback: (err: any, r: string[]) => void): void {
            callback(undefined, [arg1, arg2, arg3, arg4]);
        }

        public void4Args(arg1: string, arg2: string, arg3: string, arg4: string, callback: (err?: any) => void): void {
            callback();
        }

        public result5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err: any, r: string[]) => void): void {
            callback(undefined, [arg1, arg2, arg3, arg4, arg5]);
        }

        public void5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err?: any) => void): void {
            callback();
        }
    })();

    const failingCallbacks = new (class FailingCallbacksClass {
        public result0args(callback: (err: any, r: string) => void): void {
            callback(new Error("fail"), undefined);
        }

        public void0Args(callback: (err?: any) => void): void {
            callback(new Error("fail"));
        }

        public result1Arg(arg1: string, callback: (err: any, r: string) => void): void {
            callback(new Error("fail"), undefined);
        }

        public void1Arg(arg1: string, callback: (err?: any) => void): void {
            callback(new Error("fail"));
        }

        public result2Args(arg1: string, arg2: string, callback: (err: any, r: string[]) => void): void {
            callback(new Error("fail"), undefined);
        }

        public void2Args(arg1: string, arg2: string, callback: (err?: any) => void): void {
            callback(new Error("fail"));
        }

        public result3Args(arg1: string, arg2: string, arg3: string, callback: (err: any, r: string[]) => void): void {
            callback(new Error("fail"), undefined);
        }

        public void3Args(arg1: string, arg2: string, arg3: string, callback: (err?: any) => void): void {
            callback(new Error("fail"));
        }

        public result4Args(arg1: string, arg2: string, arg3: string, arg4: string, callback: (err: any, r: string[]) => void): void {
            callback(new Error("fail"), undefined);
        }

        public void4Args(arg1: string, arg2: string, arg3: string, arg4: string, callback: (err?: any) => void): void {
            callback(new Error("fail"));
        }

        public result5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string,
                           callback: (err: any, r: string[]) => void): void {
            callback(new Error("fail"), undefined);
        }

        public void5Args(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err?: any) => void): void {
            callback(new Error("fail"));
        }
    })();

    describe("should support the following inputs", () => {
        it("No args with result (callback: (err: any, r: string) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "result0args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "result0args").and.callThrough();
            const success = promisify(successfulCallbacks.result0args)();
            const fail = promisify(failingCallbacks.result0args)();

            await expectAsync(success).toBeResolvedTo("success");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });

        it("No args void result (callback: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "void0Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "void0Args").and.callThrough();
            const success = promisify(successfulCallbacks.void0Args)();
            const fail = promisify(failingCallbacks.void0Args)();

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });

        it("1 arg with result (arg1: string, callback: (err: any, r: string) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "result1Arg").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "result1Arg").and.callThrough();
            const success = promisify(successfulCallbacks.result1Arg)("arg1");
            const fail = promisify(failingCallbacks.result1Arg)("arg1");

            await expectAsync(success).toBeResolvedTo("arg1");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });

        it("1 arg void result (arg1: string, callback: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "void1Arg").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "void1Arg").and.callThrough();
            const success = promisify(successfulCallbacks.void1Arg)("arg1");
            const fail = promisify(failingCallbacks.void1Arg)("arg1");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });

        it("2 args with result (arg1: string, arg2: string, callback: (err: any, r: string[]) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "result2Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "result2Args").and.callThrough();
            const success = promisify(successfulCallbacks.result2Args)("arg1", "arg2");
            const fail = promisify(failingCallbacks.result2Args)("arg1", "arg2");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });

        it("2 args void result (arg1: string, arg2: string, callback: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "void2Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "void2Args").and.callThrough();
            const success = promisify(successfulCallbacks.void2Args)("arg1", "arg2");
            const fail = promisify(failingCallbacks.void2Args)("arg1", "arg2");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });

        it("3 args with result (arg1: string, arg2: string, arg3: string, callback: (err: any, r: string[]) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "result3Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "result3Args").and.callThrough();
            const success = promisify(successfulCallbacks.result3Args)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.result3Args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });

        it("3 args void result (arg1: string, arg2: string, arg3: string, callback: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "void3Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "void3Args").and.callThrough();
            const success = promisify(successfulCallbacks.void3Args)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.void3Args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });

        it("4 args with result (arg1: string, arg2: string, arg3: string, arg4: string, callback: (err: any, r: string[]) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "result4Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "result4Args").and.callThrough();
            const success = promisify(successfulCallbacks.result4Args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.result4Args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });

        it("4 args void result (arg1: string, arg2: string, arg3: string, arg4: string, callback: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "void4Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "void4Args").and.callThrough();
            const success = promisify(successfulCallbacks.void4Args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.void4Args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });

        it("5 args with result (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err: any, r: string[]) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "result5Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "result5Args").and.callThrough();
            const success = promisify(successfulCallbacks.result5Args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.result5Args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4", "arg5"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });

        it("5 args void result (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: (err?: any) => void): void", async () => {
            const successSpy = spyOn(successfulCallbacks, "void5Args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "void5Args").and.callThrough();
            const success = promisify(successfulCallbacks.void5Args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.void5Args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });
    });
});
