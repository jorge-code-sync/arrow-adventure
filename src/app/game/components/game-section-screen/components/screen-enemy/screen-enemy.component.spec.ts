import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEnemyComponent } from './screen-enemy.component';

describe('ScreenEnemyComponent', () => {
  let component: ScreenEnemyComponent;
  let fixture: ComponentFixture<ScreenEnemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenEnemyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
