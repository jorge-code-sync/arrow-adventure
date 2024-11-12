import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSectionStatsComponent } from './game-section-stats.component';

describe('GameSectionStatsComponent', () => {
  let component: GameSectionStatsComponent;
  let fixture: ComponentFixture<GameSectionStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSectionStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSectionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
