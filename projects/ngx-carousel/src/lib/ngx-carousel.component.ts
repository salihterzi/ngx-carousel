import {Component, Input, OnInit} from '@angular/core';
import {NgxCarouselItemComponent} from "./ngx-carousel-item/ngx-carousel-item.component";

@Component({
  selector: 'ngx-carousel',
  templateUrl: 'ngx-carousel-component.html',
  styles: []
})
export class NgxCarouselComponent implements OnInit {
  sliderItems: NgxCarouselItemComponent[] = [];
  @Input() data:any[];
  constructor() {
  }

  ngOnInit(): void {
  }

  addSliderItem(item: NgxCarouselItemComponent) {
    this.sliderItems.push(item)
  }
}
