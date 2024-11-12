import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { GameModel } from '../models/game.model';
import { PlayerModel } from '../models/player.model';
import { EnemyModel } from '../models/enemy.model';

export interface AppState {
  game: GameModel;
  player: PlayerModel;
  enemy: EnemyModel | undefined;
}

export const appReducers: ActionReducerMap<AppState> = {
  game: reducers.gameReducer,
  player: reducers.playerReducer,
  enemy: reducers.enemyReducer,
};
