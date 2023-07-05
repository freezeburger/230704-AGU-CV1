import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProductListItemComponent } from './ui-product-list-item.component';

describe('UiProductListItemComponent', () => {
  let component: UiProductListItemComponent;
  let fixture: ComponentFixture<UiProductListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiProductListItemComponent]
    });
    fixture = TestBed.createComponent(UiProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
