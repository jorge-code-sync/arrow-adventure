import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEnemyDamageComponent } from './screen-enemy-damage.component';

describe('ScreenEnemyDamageComponent', () => {
  let component: ScreenEnemyDamageComponent;
  let fixture: ComponentFixture<ScreenEnemyDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenEnemyDamageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenEnemyDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
