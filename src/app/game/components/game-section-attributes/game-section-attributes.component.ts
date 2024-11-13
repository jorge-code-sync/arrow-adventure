import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { GameState } from '../../../models/types';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { GameModel } from '../../../models/game.model';
import { PlayerModel } from '../../../models/player.model';
import * as playerActions from '../../../store/actions/player.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-section-attributes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-section-attributes.component.html',
  styleUrl: './game-section-attributes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSectionAttributesComponent {
  gameState = signal<GameState>('start');
  player = signal<PlayerModel | undefined>(undefined);

  buttonDisabled = computed(() => {
    return {
      power: {
        one: (this.player()?.gold ?? 0) < 2,
        ten: (this.player()?.gold ?? 0) < 20,
      },
      shield: {
        one: (this.player()?.gold ?? 0) < 4,
        ten: (this.player()?.gold ?? 0) < 40,
      },
      potion: {
        basic: (this.player()?.gold ?? 0) < 6,
        full: (this.player()?.gold ?? 0) < 24,
      },
    };
  });

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('game').subscribe((game: GameModel) => {
      this.gameState.set(game.state);
    });
    this.store.select('player').subscribe((player: PlayerModel) => {
      this.player.set(player);
    });
  }

  increaseAttribute(
    attribute: 'power' | 'shield' | 'speed',
    quantity: number,
    cost: number
  ): void {
    this.store.dispatch(
      playerActions.increasePlayerAttribute({ attribute, quantity, cost })
    );
  }

  usePotion(heal: number, cost: number): void {
    this.store.dispatch(playerActions.usePotionPlayer({ heal, cost }));
  }
}
