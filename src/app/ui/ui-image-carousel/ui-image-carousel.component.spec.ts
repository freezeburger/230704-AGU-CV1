import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImageCarouselComponent } from './ui-image-carousel.component';

describe('UiImageCarouselComponent', () => {
  let component: UiImageCarouselComponent;
  let fixture: ComponentFixture<UiImageCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiImageCarouselComponent]
    });
    fixture = TestBed.createComponent(UiImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
