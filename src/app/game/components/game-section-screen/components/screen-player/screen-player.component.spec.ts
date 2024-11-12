import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPlayerComponent } from './screen-player.component';

describe('ScreenPlayerComponent', () => {
  let component: ScreenPlayerComponent;
  let fixture: ComponentFixture<ScreenPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
