import {
    AfterContentInit,
    Component,
    ContentChildren,
    forwardRef,
    QueryList
} from '@angular/core';
import { NgxCarouselItemComponent } from './ngx-carousel-item/ngx-carousel-item.component';
import { interval, Subscriber, Subscription } from 'rxjs';

@Component({
    selector: 'ngx-carousel',
    templateUrl: 'ngx-carousel-component.html',
    styles: []
})
export class NgxCarouselComponent implements AfterContentInit {
    @ContentChildren(forwardRef(() => NgxCarouselItemComponent)) carouselItems: QueryList<NgxCarouselItemComponent>;
    activeIndex: number = 0;
    timer: any;
    duration: number = 3000;

    constructor() {
    }

    skipToNextSlide() {
        if (this.activeIndex === this.carouselItems.length - 1) {
            this.activeIndex = 0;
        } else {
            this.activeIndex = this.activeIndex + 1;
        }
        this.updateCarouselItemsStatus()
    }



    updateCarouselItemsStatus() {
        this.carouselItems.map((element, index) => {
            element.active = this.activeIndex === index;
        });
    }


    ngAfterContentInit(): void {
        // detectChanges doesn't work since property is in another component, so property changes as async
        Promise.resolve().then(() => this.carouselItems.first.active = true)
        this.timer = interval(this.duration).subscribe(val => this.skipToNextSlide());
    }
}
