import { createReducer, on } from '@ngrx/store';
import { GameModel } from '../../models/game.model';
import * as gameActions from '../actions/game.actions';
import { GameState } from '../../models/types';

export const gameInitialState: GameModel = {
  stage: 0,
  state: 'start',
};

const _gameReducer = createReducer(
  gameInitialState,

  on(gameActions.createGame, (stateData) => ({
    stage: 0,
    state: 'start' as GameState,
  })),

  on(gameActions.nextGameStage, (stateData) => ({
    ...stateData,
    stage: stateData.stage + 1,
  })),

  on(gameActions.setGameState, (stateData, { state }) => ({
    ...stateData,
    state,
  }))
);

export function gameReducer(state: GameModel | undefined, action: any) {
  return _gameReducer(state, action);
}
