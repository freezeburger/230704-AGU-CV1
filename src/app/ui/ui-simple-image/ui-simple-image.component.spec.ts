import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSimpleImageComponent } from './ui-simple-image.component';

describe('UiSimpleImageComponent', () => {
  let component: UiSimpleImageComponent;
  let fixture: ComponentFixture<UiSimpleImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiSimpleImageComponent]
    });
    fixture = TestBed.createComponent(UiSimpleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
