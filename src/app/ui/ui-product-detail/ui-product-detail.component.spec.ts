import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProductDetailComponent } from './ui-product-detail.component';

describe('UiProductDetailComponent', () => {
  let component: UiProductDetailComponent;
  let fixture: ComponentFixture<UiProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiProductDetailComponent]
    });
    fixture = TestBed.createComponent(UiProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
