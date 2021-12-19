import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCarouselItemComponent } from './ngx-carousel-item.component';

describe('NgxCarouselItemComponent', () => {
  let component: NgxCarouselItemComponent;
  let fixture: ComponentFixture<NgxCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCarouselItemComponent ]
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
