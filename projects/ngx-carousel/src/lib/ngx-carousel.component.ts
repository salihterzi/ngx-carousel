import {AfterContentInit, Component, ContentChildren, forwardRef, HostListener, QueryList} from '@angular/core';
import {NgxCarouselItemComponent} from './ngx-carousel-item/ngx-carousel-item.component';
import {interval} from 'rxjs';
import {KEY_CODE} from './ngx-carousel.enum';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'lib-ngx-carousel',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: 'ngx-carousel-component.html',
    styles: []
})
export class NgxCarouselComponent implements AfterContentInit {
    @ContentChildren(forwardRef(() => NgxCarouselItemComponent)) carouselItems: QueryList<NgxCarouselItemComponent>;
    activeIndex = 0;
    timer: any;
    duration = 3000;


    constructor() {
    }

    next() {
        this.refreshTimer();
        this.skipToNextSlide();
    }

    prev() {
        this.refreshTimer();
        if (this.activeIndex === 0) {
            this.activeIndex = this.carouselItems.length - 1;
        } else {
            this.activeIndex = this.activeIndex - 1;
        }
        this.updateCarouselItemsStatus();
    }

    skipToNextSlide() {
        if (this.activeIndex === this.carouselItems.length - 1) {
            this.activeIndex = 0;
        } else {
            this.activeIndex = this.activeIndex + 1;
        }
        this.updateCarouselItemsStatus();
    }

    refreshTimer() {
        if (this.timer) {
            this.timer.unsubscribe();
            this.timer = interval(this.duration).subscribe(() => this.skipToNextSlide());
        }
    }

    updateCarouselItemsStatus() {
        this.carouselItems.map((element, index) => {
            element.active = this.activeIndex === index;
        });
    }

    changeActiveIndex(i: number) {
        this.refreshTimer();
        this.activeIndex = i;
        this.updateCarouselItemsStatus();
    }

    ngAfterContentInit(): void {
        // detectChanges doesn't work since property is in another component, so property changes as async
        Promise.resolve().then(() => this.carouselItems.first.active = true);
        this.timer = interval(this.duration).subscribe(() => this.skipToNextSlide());
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.key === KEY_CODE.RIGHT_ARROW) {
            this.next();
        }

        if (event.key === KEY_CODE.LEFT_ARROW) {
            this.prev();
        }
    }
}
