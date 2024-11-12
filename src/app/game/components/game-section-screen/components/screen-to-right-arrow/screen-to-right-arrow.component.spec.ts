import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenToRightArrowComponent } from './screen-to-right-arrow.component';

describe('ScreenToRightArrowComponent', () => {
  let component: ScreenToRightArrowComponent;
  let fixture: ComponentFixture<ScreenToRightArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenToRightArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenToRightArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
