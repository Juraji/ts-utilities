// Placeholder type to reduce line length in tests
import { NodeCallback, NodeResultCallback, promisify } from "./promisify";

describe("Global utility: #promisify", () => {
    class SuccessfulCallbacksClass {

        public fn1(callback: NodeResultCallback<string>): void {
            callback(undefined, "success");
        }

        public fn2(callback: NodeCallback): void {
            callback();
        }

        public fn3(arg1: string, callback: NodeResultCallback<string>): void {
            callback(undefined, arg1);
        }

        public fn4(arg1: string, callback: NodeCallback): void {
            callback();
        }

        public fn5(arg1: string, arg2: string, callback: NodeResultCallback<string[]>): void {
            callback(undefined, [arg1, arg2]);
        }

        public fn6(arg1: string, arg2: string, callback: NodeCallback): void {
            callback();
        }

        public fn7(arg1: string, arg2: string, arg3: string, callback: NodeResultCallback<string[]>): void {
            callback(undefined, [arg1, arg2, arg3]);
        }

        public fn8(arg1: string, arg2: string, arg3: string, callback: NodeCallback): void {
            callback();
        }

        public fn9(arg1: string, arg2: string, arg3: string, arg4: string, callback: NodeResultCallback<string[]>): void {
            callback(undefined, [arg1, arg2, arg3, arg4]);
        }

        public fn10(arg1: string, arg2: string, arg3: string, arg4: string, callback: NodeCallback): void {
            callback();
        }

        public fn11(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string,
                    callback: NodeResultCallback<string[]>): void {
            callback(undefined, [arg1, arg2, arg3, arg4, arg5]);
        }

        public fn12(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: NodeCallback): void {
            callback();
        }
    }

    class FailingCallbacksClass {
        public fn1(callback: NodeResultCallback<string>): void {
            callback(new Error("fail"), undefined);
        }

        public fn2(callback: NodeCallback): void {
            callback(new Error("fail"));
        }

        public fn3(arg1: string, callback: NodeResultCallback<string>): void {
            callback(new Error("fail"), undefined);
        }

        public fn4(arg1: string, callback: NodeCallback): void {
            callback(new Error("fail"));
        }

        public fn5(arg1: string, arg2: string, callback: NodeResultCallback<string[]>): void {
            callback(new Error("fail"), undefined);
        }

        public fn6(arg1: string, arg2: string, callback: NodeCallback): void {
            callback(new Error("fail"));
        }

        public fn7(arg1: string, arg2: string, arg3: string, callback: NodeResultCallback<string[]>): void {
            callback(new Error("fail"), undefined);
        }

        public fn8(arg1: string, arg2: string, arg3: string, callback: NodeCallback): void {
            callback(new Error("fail"));
        }

        public fn9(arg1: string, arg2: string, arg3: string, arg4: string, callback: NodeResultCallback<string[]>): void {
            callback(new Error("fail"), undefined);
        }

        public fn10(arg1: string, arg2: string, arg3: string, arg4: string, callback: NodeCallback): void {
            callback(new Error("fail"));
        }

        public fn11(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string,
                    callback: NodeResultCallback<string[]>): void {
            callback(new Error("fail"), undefined);
        }

        public fn12(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, callback: NodeCallback): void {
            callback(new Error("fail"));
        }
    }

    const successfulCallbacks = new SuccessfulCallbacksClass();
    const failingCallbacks = new FailingCallbacksClass();

    describe("should support the following inputs", () => {
        it("(callback: NodeResultCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn1").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn1").and.callThrough();
            const success = promisify(successfulCallbacks.fn1)();
            const fail = promisify(failingCallbacks.fn1)();

            await expectAsync(success).toBeResolvedTo("success");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });

        it("(callback: NodeCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn2").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn2").and.callThrough();
            const success = promisify(successfulCallbacks.fn2)();
            const fail = promisify(failingCallbacks.fn2)();

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });

        it("(arg1: T1, callback: NodeResultCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn3").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn3").and.callThrough();
            const success = promisify(successfulCallbacks.fn3)("arg1");
            const fail = promisify(failingCallbacks.fn3)("arg1");

            await expectAsync(success).toBeResolvedTo("arg1");
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });

        it("(arg1: T1, callback: NodeCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn4").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn4").and.callThrough();
            const success = promisify(successfulCallbacks.fn4)("arg1");
            const fail = promisify(failingCallbacks.fn4)("arg1");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, callback: NodeResultCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn5").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn5").and.callThrough();
            const success = promisify(successfulCallbacks.fn5)("arg1", "arg2");
            const fail = promisify(failingCallbacks.fn5)("arg1", "arg2");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, callback: NodeCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn6").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn6").and.callThrough();
            const success = promisify(successfulCallbacks.fn6)("arg1", "arg2");
            const fail = promisify(failingCallbacks.fn6)("arg1", "arg2");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, arg3: T3, callback: NodeResultCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn7").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn7").and.callThrough();
            const success = promisify(successfulCallbacks.fn7)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.fn7)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, arg3: T3, callback: NodeCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn8").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn8").and.callThrough();
            const success = promisify(successfulCallbacks.fn8)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.fn8)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: NodeResultCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn9").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn9").and.callThrough();
            const success = promisify(successfulCallbacks.fn9)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.fn9)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: NodeCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn10").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn10").and.callThrough();
            const success = promisify(successfulCallbacks.fn10)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.fn10)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: NodeResultCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn11").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn11").and.callThrough();
            const success = promisify(successfulCallbacks.fn11)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.fn11)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolvedTo(["arg1", "arg2", "arg3", "arg4", "arg5"]);
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });

        it("(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: NodeCallback) => void", async () => {
            const successSpy = spyOn(successfulCallbacks, "fn12").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "fn12").and.callThrough();
            const success = promisify(successfulCallbacks.fn12)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.fn12)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });
    });
});
