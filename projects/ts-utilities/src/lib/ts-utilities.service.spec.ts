import { TestBed } from "@angular/core/testing";

import { TsUtilitiesService } from "./ts-utilities.service";

describe("TsUtilitiesService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: TsUtilitiesService = TestBed.get(TsUtilitiesService);
        expect(service).toBeTruthy();
    });
});
