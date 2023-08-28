import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {NgxCarouselComponent} from './ngx-carousel.component';
import {Component, QueryList} from "@angular/core";
import {NgxCarouselModule} from "./ngx-carousel.module";


@Component({
    selector: 'ngx-carousel-test-wrapper-component',
    template: `
        <ngx-carousel>
            <ngx-carousel-item *ngFor="let item of carouselItems" ></ngx-carousel-item>
        </ngx-carousel>
    `,
    standalone: true,
    imports: [NgxCarouselModule]
})
class NgxCarouselTestWrapperComponent {
    public carouselItems = new Array<never>(5);
}

describe('NgxCarouselComponent', () => {
    let component: NgxCarouselComponent;
    let fixture: ComponentFixture<NgxCarouselTestWrapperComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    imports: [NgxCarouselModule, NgxCarouselTestWrapperComponent]
})
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxCarouselTestWrapperComponent);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should increment activeIndex', () => {
        component.skipToNextSlide();
        expect(component.activeIndex).toEqual(1);
    });
    it('should decrement activeIndex', () => {
        component.prev();
        expect(component.activeIndex).toEqual(4);
    });
    it('should change index to last element', () => {
        component.changeActiveIndex(component.carouselItems.length - 1);
        expect(component.activeIndex).toEqual(4);
    });
});
