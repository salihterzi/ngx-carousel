import { NgModule } from '@angular/core';
import { NgxCarouselComponent } from './ngx-carousel.component';
import { NgxCarouselItemComponent } from './ngx-carousel-item/ngx-carousel-item.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [NgxCarouselComponent, NgxCarouselItemComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,

    ],
    exports: [NgxCarouselComponent, NgxCarouselItemComponent]
})
export class NgxCarouselModule {
}
