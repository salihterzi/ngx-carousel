import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxCarouselItemComponent } from './ngx-carousel-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NgxCarouselItemComponent', () => {
  let component: NgxCarouselItemComponent;
  let fixture: ComponentFixture<NgxCarouselItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        BrowserAnimationsModule,
        NgxCarouselItemComponent
    ]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
