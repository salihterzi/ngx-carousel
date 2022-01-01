import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'ngx-carousel-item',
    templateUrl: './ngx-carousel-item.component.html',
    styleUrls: ['./ngx-carousel-item.component.scss'],
    animations: [
        trigger('status', [
            state('fadeOut', style({
                opacity: 0,
                visibility: 'hidden'
            })),
            state('fadeIn', style({
                opacity: 1,
                visibility: 'visible'
            })),
            transition('fadeIn => fadeOut', animate('800ms')),
            transition('fadeOut => fadeIn', animate('800ms')),
        ])
    ],
})
export class NgxCarouselItemComponent {
    @Input() title = '';
    @Input() path = '';
    active: boolean;
}
