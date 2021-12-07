import {Component, Input, OnInit} from '@angular/core';
import {NgxCarouselComponent} from "../ngx-carousel.component";

@Component({
  selector: 'ngx-carousel-item',
  templateUrl: './ngx-carousel-item.component.html',
  styleUrls: ['./ngx-carousel-item.component.scss']
})
export class NgxCarouselItemComponent implements OnInit {
  @Input() title:string;
  constructor(private ngxSliderComponent: NgxCarouselComponent) {
    this.ngxSliderComponent.addSliderItem(this)
  }

  ngOnInit(): void {
  }

}
