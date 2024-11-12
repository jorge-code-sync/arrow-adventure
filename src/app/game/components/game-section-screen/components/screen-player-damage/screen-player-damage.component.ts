import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { AppState } from '../../../../../store/app.reducers';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map, pairwise } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'screen-player-damage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-player-damage.component.html',
  styleUrl: './screen-player-damage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenPlayerDamageComponent implements OnInit {
  lastDamage = signal<number | undefined>(undefined);
  isHeal = signal<boolean>(false);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('player')
      .pipe(
        distinctUntilChanged(
          (prev, curr) => prev.currentHealth === curr.currentHealth
        ),
        pairwise(),
        map(([prev, curr]) => prev.currentHealth - curr.currentHealth)
      )
      .subscribe((damage) => {
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
