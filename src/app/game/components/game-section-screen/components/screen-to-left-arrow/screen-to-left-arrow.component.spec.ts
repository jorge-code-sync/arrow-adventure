import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenToLeftArrowComponent } from './screen-to-left-arrow.component';

describe('ScreenToLeftArrowComponent', () => {
  let component: ScreenToLeftArrowComponent;
  let fixture: ComponentFixture<ScreenToLeftArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenToLeftArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenToLeftArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
