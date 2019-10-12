import { fakeAsync, tick } from "@angular/core/testing";

import { PromiseQueue } from "./promise-queue";
import createSpy = jasmine.createSpy;
import any = jasmine.any;

describe("PromiseQueue", () => {

    it("should complete the progress observable", fakeAsync(() => {
        const task = (i: number) => i;
        const onCompletedSpy = createSpy("onCompletedSpy");

        const queue = new PromiseQueue(task).queue([1, 2, 3]);
        queue.progress.subscribe({complete: onCompletedSpy});

        tick();
        expectAsync(queue.result).toBeResolvedTo([1, 2, 3]);
        expect(onCompletedSpy).toHaveBeenCalled();
    }));

    it("should support task returning promises and non-promises", fakeAsync(() => {
        // Using Promises
        const promiseTask = (n) => new Promise<number>(resolve => resolve(n));
        const promsequeue = new PromiseQueue(promiseTask).queue([1, 2, 3]);
        tick();
        expectAsync(promsequeue.result).toBeResolvedTo([1, 2, 3]);

        // Using non-Promises
        const nonPromiseTask = (n) => n;
        const queue = new PromiseQueue(nonPromiseTask).queue([1, 2, 3]);
        tick();
        expectAsync(queue.result).toBeResolvedTo([1, 2, 3]);
    }));

    it("should run task across threads when threads > 1", fakeAsync(() => {
        // PromiseQueue uses Promise.all to resolve multiple promises at the same time
        const promiseAllSpy = spyOn(Promise, "all").and.callThrough();
        const task = (n) => n;
        const numbers = [1, 2, 3, 4, 5, 6, 7];

        const queue = new PromiseQueue(task, 4).queue(numbers);

        tick();
        expectAsync(queue.result).toBeResolvedTo(numbers);

        // Check Promise.all args
        expect(promiseAllSpy).toHaveBeenCalledTimes(2);
        expect(promiseAllSpy).toHaveBeenCalledWith([any(Promise), any(Promise), any(Promise), any(Promise)]);
        expect(promiseAllSpy).toHaveBeenCalledWith([any(Promise), any(Promise), any(Promise)]);
    }));

    describe("when used incorrectly", () => {
        it("should throw an error when task is not a function", () => {
            expect(() => new PromiseQueue(null))
                .toThrowError("Type of task should be of type \"function\", got \"object\".");
        });

        it("should throw an error when threads < 1", () => {
            expect(() => new PromiseQueue(() => null, 0))
                .toThrowError("Thread count must be at least 1, got 0.");
        });
    });

    describe("#synchronous", () => {
        it("should create a synchronous PromiseQueue", () => {
            const promiseQueue = PromiseQueue.synchronous(() => null);

            expect(promiseQueue.threads).toBe(1);
        });

        it("should run the task synchronously when in sync mode or threads=1", fakeAsync(() => {
            // PromiseQueue uses Promise.all to resolve multiple promises at the same time
            // In this spec it should never be called
            const promiseAllSpy = spyOn(Promise, "all").and.callThrough();
            const task = (n) => n;
            const numbers = [1, 2];

            new PromiseQueue(task, 1).queue(numbers);

            tick();
            expect(promiseAllSpy).not.toHaveBeenCalled();
        }));
    });

    describe("should resolve an empty array if no items supplied", () => {

        it("using an empty array", fakeAsync(() => {
            const queue = new PromiseQueue(() => null)
                .queue([]);

            tick();
            expectAsync(queue.result).toBeResolvedTo([]);
        }));

        it("using null", fakeAsync(() => {
            const queue = new PromiseQueue(() => null)
                .queue(null);

            tick();
            expectAsync(queue.result).toBeResolvedTo([]);
        }));
    });
});
