import { createAction, props } from '@ngrx/store';

export const createGame = createAction('[Game] Create Game');

export const nextGameStage = createAction('[Game] Next Game Stage');

export const setGameState = createAction(
  '[Game] Set Game State',
  props<{ state: 'start' | 'playing' | 'end' }>()
);
