import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { GameState } from '../../../models/types';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { GameModel } from '../../../models/game.model';
import { PlayerModel } from '../../../models/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-section-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-section-stats.component.html',
  styleUrl: './game-section-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSectionStatsComponent {
  gameState = signal<GameState>('start');
  player = signal<PlayerModel | undefined>(undefined);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('game').subscribe((game: GameModel) => {
      this.gameState.set(game.state);
    });

    this.store.select('player').subscribe((player: PlayerModel) => {
      this.player.set(player);
    });
  }
}
