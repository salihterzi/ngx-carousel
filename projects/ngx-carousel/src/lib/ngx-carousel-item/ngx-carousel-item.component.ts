import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'lib-ngx-carousel-item',
    standalone: true,
    imports: [
        CommonModule,
    ],
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
