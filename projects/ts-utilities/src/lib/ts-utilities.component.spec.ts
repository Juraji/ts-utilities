import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TsUtilitiesComponent } from "./ts-utilities.component";

describe("TsUtilitiesComponent", () => {
    let component: TsUtilitiesComponent;
    let fixture: ComponentFixture<TsUtilitiesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TsUtilitiesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TsUtilitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
