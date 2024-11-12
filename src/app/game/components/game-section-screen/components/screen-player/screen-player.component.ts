import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  signal,
} from '@angular/core';
import { PlayerModel } from '../../../../../models/player.model';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducers';

@Component({
  selector: 'screen-player',
  standalone: true,
  imports: [],
  templateUrl: './screen-player.component.html',
  styleUrl: './screen-player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenPlayerComponent implements OnInit {
  player = signal<PlayerModel>({
    totalHealth: 100,
    currentHealth: 100,
    attack: 5,
    defense: 2,
    attackSpeed: 1,
    state: 'idle',
    name: 'Player',
    gold: 0,
    attributes: {
      powerPoints: 0,
      shieldPoints: 0,
      speedPoints: 0,
    },
  });

  @HostBinding('attr.player-state') get playerState() {
    return `state-${this.player().state}`;
  }

  percentLife = computed<string>(() => {
    let percentValue =
      (this.player()!.currentHealth / this.player()!.totalHealth) * 100;
    if (percentValue > 0 && percentValue < 4) {
      percentValue = 4;
    }
    return `${percentValue}%`;
  });

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('player').subscribe((player: PlayerModel) => {
      this.player.set(player);
    });
  }
}
