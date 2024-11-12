import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { distinctUntilChanged, filter, map, pairwise } from 'rxjs';
import { EnemyModel } from '../../../../../models/enemy.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'screen-enemy-damage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-enemy-damage.component.html',
  styleUrl: './screen-enemy-damage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenEnemyDamageComponent implements OnInit {
  lastDamage = signal<number | undefined>(undefined);
  isHeal = signal<boolean>(false);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('enemy')
      .pipe(
        filter((enemy) => enemy !== undefined),
        distinctUntilChanged(
          (prev: EnemyModel | undefined, curr: EnemyModel | undefined) => {
            if (prev && curr && prev.currentHealth === curr.currentHealth) {
              return true;
            }
            return false;
          }
        ),
        pairwise(),
        map(
          ([prev, curr]) =>
            (prev?.currentHealth ?? 0) - (curr?.currentHealth ?? 0)
        )
      )
      .subscribe((damage: number) => {
        if (damage < 0) {
          this.isHeal.set(true);
        } else {
          this.isHeal.set(false);
        }
        this.lastDamage.set(Math.abs(damage));
        setTimeout(() => {
          this.lastDamage.set(undefined);
        }, 500);
      });
  }
}
