import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSectionAttributesComponent } from './game-section-attributes.component';

describe('GameSectionAttributesComponent', () => {
  let component: GameSectionAttributesComponent;
  let fixture: ComponentFixture<GameSectionAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSectionAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSectionAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
