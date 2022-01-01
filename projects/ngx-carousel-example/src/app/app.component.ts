import {Component} from '@angular/core';
import {NgxCarouselItemModel} from 'ngx-carousel';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ngx-carousel-example';
    data: NgxCarouselItemModel[] = [
        {
            title: '567',
            path: 'https://picsum.photos/900/500/?image=567'
        },
        {
            title: '568',
            path: 'https://picsum.photos/900/500/?image=568'
        },
        {
            title: '569',
            path: 'https://picsum.photos/900/500/?image=569'
        },
        {
            title: '570',
            path: 'https://picsum.photos/900/500/?image=570'
        }
    ];

}
