import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSectionScreenComponent } from './game-section-screen.component';

describe('GameSectionScreenComponent', () => {
  let component: GameSectionScreenComponent;
  let fixture: ComponentFixture<GameSectionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSectionScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSectionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
