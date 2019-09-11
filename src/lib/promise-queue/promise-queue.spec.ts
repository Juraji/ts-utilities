import { PromiseQueue } from "./promise-queue";
import { fakeAsync, tick } from "@angular/core/testing";
import { QueueResult } from "./queue-result";
import createSpy = jasmine.createSpy;
import any = jasmine.any;

describe("PromiseQueue", () => {

    it("should complete the progress observable", fakeAsync(() => {
        const worker = (i: number) => i;
        const onCompletedSpy = createSpy("onCompletedSpy");

        const queueResult = new PromiseQueue(worker).queueItems([1, 2, 3]);
        queueResult.progress.subscribe({complete: onCompletedSpy});

        tick();
        expectAsync(queueResult.result).toBeResolvedTo([1, 2, 3]);
        expect(onCompletedSpy).toHaveBeenCalled();
    }));

    it("should throw an error when worker is not a function", () => {
        expect(() => new PromiseQueue(null)).toThrowError("Type of worker should be \"function\", got \"object\"");
    });

    it("should throw an error when in async mode and threads < 1", () => {
        expect(() => new PromiseQueue(() => null, false, 0)).toThrowError("Thread count must be at least 1");
    });

    it("should support worker returning promises and non-promises", fakeAsync(() => {
        // Using Promises
        const promiseWorker = (n) => new Promise<number>(resolve => resolve(n));
        const promseQueueResult = new PromiseQueue(promiseWorker).queueItems([1, 2, 3]);
        tick();
        expectAsync(promseQueueResult.result).toBeResolvedTo([1, 2, 3]);

        // Using non-Promises
        const worker = (n) => n;
        const queueResult = new PromiseQueue(worker).queueItems([1, 2, 3]);
        tick();
        expectAsync(queueResult.result).toBeResolvedTo([1, 2, 3]);
    }));

    it("should run worker across threads when in async mode", fakeAsync(() => {
        // PromiseQueue uses Promise.all to resolve multiple promises at the same time
        const promiseAllSpy = spyOn(Promise, "all").and.callThrough();
        const worker = (n) => n;
        const numbers = [1, 2, 3, 4, 5, 6, 7];

        const queueResult = new PromiseQueue(worker, false, 4).queueItems(numbers);

        tick();
        expectAsync(queueResult.result).toBeResolvedTo(numbers);

        // Check Promise.all args
        expect(promiseAllSpy).toHaveBeenCalledTimes(2);
        expect(promiseAllSpy).toHaveBeenCalledWith([any(Promise), any(Promise), any(Promise), any(Promise)]);
        expect(promiseAllSpy).toHaveBeenCalledWith([any(Promise), any(Promise), any(Promise)]);
    }));

    it("should run the worker synchronously when in sync mode or threads=1", fakeAsync(() => {
        // PromiseQueue uses Promise.all to resolve multiple promises at the same time
        // In this spec it should never be called
        const promiseAllSpy = spyOn(Promise, "all").and.callThrough();
        const worker = (n) => n;
        const numbers = [1, 2];

        new PromiseQueue(worker, true).queueItems(numbers);
        new PromiseQueue(worker, false, 1).queueItems(numbers);

        tick();
        expect(promiseAllSpy).not.toHaveBeenCalled();
    }));

    describe("should resolve an empty array if no items supplied", () => {

        it("using an empty array", fakeAsync(() => {
            const queueResult = new PromiseQueue(() => null)
                .queueItems([]);

            tick();
            expectAsync(queueResult.result).toBeResolvedTo([]);
        }));

        it("using null", fakeAsync(() => {
            const queueResult = new PromiseQueue(() => null)
                .queueItems(null);

            tick();
            expectAsync(queueResult.result).toBeResolvedTo([]);
        }));
    });

    describe("#nTimes", () => {

        it("should call worker n times", fakeAsync(() => {
            const workerSpy = createSpy("workerSpy", (n: number) => n.toFixed(2)).and.callThrough();
            const progressSpy = createSpy("progressSpy").and.stub();

            const queueResult: QueueResult<string[]> = PromiseQueue.nTimes(5, workerSpy);
            queueResult.progress.subscribe(p => progressSpy(p));

            tick();
            expectAsync(queueResult.result).toBeResolvedTo(["0.00", "1.00", "2.00", "3.00", "4.00"]);

            // Check worker args
            expect(workerSpy).toHaveBeenCalledTimes(5);
            expect(workerSpy).toHaveBeenCalledWith(0);
            expect(workerSpy).toHaveBeenCalledWith(1);
            expect(workerSpy).toHaveBeenCalledWith(2);
            expect(workerSpy).toHaveBeenCalledWith(3);
            expect(workerSpy).toHaveBeenCalledWith(4);

            // Check progressSpy args
            expect(progressSpy).toHaveBeenCalledTimes(5);
            expect(progressSpy).toHaveBeenCalledWith({current: 1, total: 5, percentage: 20});
            expect(progressSpy).toHaveBeenCalledWith({current: 2, total: 5, percentage: 40});
            expect(progressSpy).toHaveBeenCalledWith({current: 3, total: 5, percentage: 60});
            expect(progressSpy).toHaveBeenCalledWith({current: 4, total: 5, percentage: 80});
            expect(progressSpy).toHaveBeenCalledWith({current: 5, total: 5, percentage: 100});
        }));
    });
})
;
