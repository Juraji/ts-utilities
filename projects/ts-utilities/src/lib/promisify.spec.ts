/* tslint:disable:max-line-length */
import promisify from "./promisify";

describe("Global utility: #promisify", () => {
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

    describe("should support the following inputs", () => {
        it("No result n _args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_no_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_no_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_no_args)();
            const fail = promisify(failingCallbacks.no_result_no_args)();

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith(jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith(jasmine.any(Function));
        });


        it("No result 1 arg", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_1_arg").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_1_arg").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_1_arg)("arg1");
            const fail = promisify(failingCallbacks.no_result_1_arg)("arg1");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", jasmine.any(Function));
        });


        it("No result 2 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_2_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_2_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_2_args)("arg1", "arg2");
            const fail = promisify(failingCallbacks.no_result_2_args)("arg1", "arg2");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", jasmine.any(Function));
        });


        it("No result 3 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_3_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_3_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_3_args)("arg1", "arg2", "arg3");
            const fail = promisify(failingCallbacks.no_result_3_args)("arg1", "arg2", "arg3");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", jasmine.any(Function));
        });


        it("No result 4 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_4_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_4_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_4_args)("arg1", "arg2", "arg3", "arg4");
            const fail = promisify(failingCallbacks.no_result_4_args)("arg1", "arg2", "arg3", "arg4");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", jasmine.any(Function));
        });


        it("No result 5 args", async () => {
            const successSpy = spyOn(successfulCallbacks, "no_result_5_args").and.callThrough();
            const failSpy = spyOn(failingCallbacks, "no_result_5_args").and.callThrough();
            const success = promisify(successfulCallbacks.no_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");
            const fail = promisify(failingCallbacks.no_result_5_args)("arg1", "arg2", "arg3", "arg4", "arg5");

            await expectAsync(success).toBeResolved();
            await expectAsync(fail).toBeRejectedWith(new Error("fail"));

            expect(successSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
            expect(failSpy).toHaveBeenCalledWith("arg1", "arg2", "arg3", "arg4", "arg5", jasmine.any(Function));
        });

        it("With result n _args", async () => {
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
