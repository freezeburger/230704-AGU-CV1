import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProductListComponent } from './ui-product-list.component';

describe('UiProductListComponent', () => {
  let component: UiProductListComponent;
  let fixture: ComponentFixture<UiProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiProductListComponent]
    });
    fixture = TestBed.createComponent(UiProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
