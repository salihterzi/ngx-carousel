import { NgModule } from '@angular/core';
import { NgxCarouselComponent } from './ngx-carousel.component';
import { NgxCarouselItemComponent } from './ngx-carousel-item/ngx-carousel-item.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [NgxCarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxCarouselComponent]
})
export class NgxCarouselModule { }
