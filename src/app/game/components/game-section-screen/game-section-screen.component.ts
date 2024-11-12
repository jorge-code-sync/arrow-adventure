import {
  ChangeDetectionStrategy,
  Component,
  effect,
  OnInit,
  signal,
} from '@angular/core';
import { ScreenBackgroundComponent } from './components/screen-background/screen-background.component';
import { ScreenPlayerComponent } from './components/screen-player/screen-player.component';
import { ScreenEnemyComponent } from './components/screen-enemy/screen-enemy.component';
import { ScreenArrowComponent } from './components/screen-arrow/screen-arrow.component';
import { ScreenToRightArrowComponent } from './components/screen-to-right-arrow/screen-to-right-arrow.component';
import { ScreenToLeftArrowComponent } from './components/screen-to-left-arrow/screen-to-left-arrow.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { nextGameStage, setGameState } from '../../../store/actions';
import { GameModel } from '../../../models/game.model';
import { GameState } from '../../../models/types';
import { EnemyModel } from '../../../models/enemy.model';
import { PlayerModel } from '../../../models/player.model';
import { ScreenPlayerDamageComponent } from './components/screen-player-damage/screen-player-damage.component';
import { ScreenEnemyDamageComponent } from './components/screen-enemy-damage/screen-enemy-damage.component';

@Component({
  selector: 'game-section-screen',
  standalone: true,
  imports: [
    ScreenBackgroundComponent,
    ScreenPlayerComponent,
    ScreenEnemyComponent,
    ScreenToRightArrowComponent,
    ScreenToLeftArrowComponent,
    ScreenPlayerDamageComponent,
    ScreenEnemyDamageComponent,
  ],
  templateUrl: './game-section-screen.component.html',
  styleUrl: './game-section-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSectionScreenComponent implements OnInit {
  game = signal<GameModel | undefined>(undefined);
  player = signal<PlayerModel | undefined>(undefined);
  enemy = signal<EnemyModel | undefined>(undefined);

  constructor(private store: Store<AppState>) {
    effect(() => {
      console.log(this.enemy());
    });
  }

  ngOnInit(): void {
    this.store.select('game').subscribe((game: GameModel) => {
      this.game.set(game);
    });

    this.store.select('player').subscribe((player: PlayerModel) => {
      this.player.set(player);
    });

    this.store.select('enemy').subscribe((enemy: EnemyModel | undefined) => {
      this.enemy.set(enemy);
    });
  }

  startGame() {
    this.store.dispatch(setGameState({ state: 'playing' }));
    setTimeout(() => {
      this.store.dispatch(nextGameStage());
    }, 1000);
  }

  tryAgain() {
    this.store.dispatch(setGameState({ state: 'start' }));
  }
}
