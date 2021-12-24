import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCarouselComponent } from './ngx-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NgxCarouselComponent', () => {
    let component: NgxCarouselComponent;
    let fixture: ComponentFixture<NgxCarouselComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxCarouselComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should increment/decrement activeIndex', () => {
        fixture.componentInstance.skipToNextSlide();
        expect(fixture.componentInstance.activeIndex).toEqual(1);
        fixture.componentInstance.prev();
        expect(fixture.componentInstance.activeIndex).toEqual(0);
    });
});
