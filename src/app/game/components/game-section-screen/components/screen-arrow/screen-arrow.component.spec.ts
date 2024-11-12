import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenArrowComponent } from './screen-arrow.component';

describe('ScreenArrowComponent', () => {
  let component: ScreenArrowComponent;
  let fixture: ComponentFixture<ScreenArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
