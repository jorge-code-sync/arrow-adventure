import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPlayerDamageComponent } from './screen-player-damage.component';

describe('ScreenPlayerDamageComponent', () => {
  let component: ScreenPlayerDamageComponent;
  let fixture: ComponentFixture<ScreenPlayerDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPlayerDamageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenPlayerDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
