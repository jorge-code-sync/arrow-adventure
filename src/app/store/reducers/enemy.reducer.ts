import { createReducer, on } from '@ngrx/store';
import { EnemyModel } from '../../models/enemy.model';
import { CharacterState } from '../../models/types';
import * as enemyActions from '../actions/enemy.actions';

function multiplier(
  base: number,
  difficulty: number,
  scale: number = 1
): number {
  return base + (difficulty * 1.3) / (100 / scale);
}

export const EnemyInitialState: EnemyModel | undefined = undefined;

const _enemyReducer = createReducer<EnemyModel | undefined>(
  EnemyInitialState,

  on(enemyActions.createEnemy, (stateData, { difficulty }) => ({
    totalHealth: multiplier(10, difficulty, 200),
    currentHealth: multiplier(10, difficulty, 200),
    attack: multiplier(3, difficulty, 40),
    defense: multiplier(1, difficulty, 30),
    attackSpeed: 1,
    state: 'idle' as CharacterState,
    name: 'Enemy',
  })),

  on(enemyActions.setEnemyState, (stateData, { state }) => {
    if (!stateData) return undefined;
    return {
      ...stateData,
      state,
    };
  }),

  on(enemyActions.destroyEnemy, (stateData) => undefined),

  on(enemyActions.receiveDamageEnemy, (stateData, { damage }) => {
    if (!stateData) return undefined;

    let finalDamage = damage - stateData.defense;
    if (finalDamage <= 0) {
      finalDamage = 1;
    }
    let newCurrentHealth = stateData.currentHealth - finalDamage;
    if (newCurrentHealth <= 0) {
      newCurrentHealth = 0;
    }

    return {
      ...stateData,
      currentHealth: newCurrentHealth,
    };
  })
);

export function enemyReducer(stateData: EnemyModel | undefined, action: any) {
  return _enemyReducer(stateData, action);
}
