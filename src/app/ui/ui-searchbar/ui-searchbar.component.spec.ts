import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchbarComponent } from './ui-searchbar.component';

describe('UiSearchbarComponent', () => {
  let component: UiSearchbarComponent;
  let fixture: ComponentFixture<UiSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiSearchbarComponent]
    });
    fixture = TestBed.createComponent(UiSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
