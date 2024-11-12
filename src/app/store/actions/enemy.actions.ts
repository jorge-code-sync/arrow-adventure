import { createAction, props } from '@ngrx/store';

export const createEnemy = createAction(
  '[Enemy] Create Enemy',
  props<{ difficulty: number }>()
);
export const destroyEnemy = createAction('[Enemy] Destroy Enemy');

export const setEnemyState = createAction(
  '[Enemy] Set Enemy State',
  props<{ state: 'idle' | 'walk' | 'attack' | 'die' }>()
);

export const receiveDamageEnemy = createAction(
  '[Enemy] Receive Damage Enemy',
  props<{ damage: number }>()
);
