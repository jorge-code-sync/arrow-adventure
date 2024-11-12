import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  OnInit,
  signal,
} from '@angular/core';
import { EnemyModel } from '../../../../../models/enemy.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducers';

@Component({
  selector: 'screen-enemy',
  standalone: true,
  imports: [],
  templateUrl: './screen-enemy.component.html',
  styleUrl: './screen-enemy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenEnemyComponent implements OnInit {
  enemy = signal<EnemyModel | undefined>(undefined);

  percentLife = computed<string>(() => {
    if (!this.enemy()) return '0%';
    let percentValue =
      (this.enemy()!.currentHealth / this.enemy()!.totalHealth) * 100;
    if (percentValue > 0 && percentValue < 4) {
      percentValue = 4;
    }
    return `${percentValue}%`;
  });

  @HostBinding('attr.enemy-state') get enemyState() {
    return this.enemy() ? `state-${this.enemy()!.state}` : 'state-idle';
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('enemy').subscribe((enemy: EnemyModel | undefined) => {
      this.enemy.set(enemy);
    });
  }
}
