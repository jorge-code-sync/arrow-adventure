import { createAction, props } from '@ngrx/store';

export const createPlayer = createAction('[Player] Create Player');

export const setPlayerState = createAction(
  '[Player] Set Player State',
  props<{ state: 'idle' | 'walk' | 'attack' | 'die' }>()
);

export const receiveDamagePlayer = createAction(
  '[Player] Receive Damage Player',
  props<{ damage: number }>()
);

export const increasePlayerGold = createAction(
  '[Player] Increase Player Gold',
  props<{ gold: number }>()
);

export const increasePlayerAttribute = createAction(
  '[Player] Increase Player Attribute',
  props<{
    attribute: 'power' | 'shield' | 'speed';
    quantity: number;
    cost: number;
  }>()
);

export const usePotionPlayer = createAction(
  '[Player] Use Potion Player',
  props<{ heal: number; cost: number }>()
);
