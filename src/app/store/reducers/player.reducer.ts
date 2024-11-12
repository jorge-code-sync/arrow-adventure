import { createReducer, on } from '@ngrx/store';
import { PlayerModel } from '../../models/player.model';
import { CharacterState } from '../../models/types';
import * as playerActions from '../actions/player.actions';

export const PlayerInitialState: PlayerModel = {
  totalHealth: 40,
  currentHealth: 40,
  attack: 6,
  defense: 3,
  attackSpeed: 1,
  state: 'idle' as CharacterState,
  name: 'Player',
  gold: 3,
  attributes: {
    powerPoints: 0,
    shieldPoints: 0,
    speedPoints: 0,
  },
};

const _playerReducer = createReducer(
  PlayerInitialState,

  on(playerActions.createPlayer, (stateData) => PlayerInitialState),

  on(playerActions.setPlayerState, (stateData, { state }) => ({
    ...stateData,
    state,
  })),

  on(playerActions.receiveDamagePlayer, (stateData, { damage }) => {
    let finalDamage =
      damage - stateData.defense - stateData.attributes.shieldPoints;
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
  }),

  on(playerActions.increasePlayerGold, (stateData, { gold }) => ({
    ...stateData,
    gold: stateData.gold + gold,
  })),

  on(
    playerActions.increasePlayerAttribute,
    (stateData, { attribute, quantity, cost }) => {
      if (stateData.gold < cost) {
        return { ...stateData };
      }

      return {
        ...stateData,
        gold: stateData.gold - cost,
        attributes: {
          ...stateData.attributes,
          [`${attribute}Points`]:
            stateData.attributes[`${attribute}Points`] + quantity,
        },
      };
    }
  ),

  on(playerActions.usePotionPlayer, (stateData, { heal, cost }) => {
    if (stateData.gold < cost) {
      return { ...stateData };
    }

    let newCurrentHealth = stateData.currentHealth + heal;
    if (newCurrentHealth > stateData.totalHealth) {
      newCurrentHealth = stateData.totalHealth;
    }

    return {
      ...stateData,
      gold: stateData.gold - cost,
      currentHealth: newCurrentHealth,
    };
  })
);

export function playerReducer(stateData: PlayerModel | undefined, action: any) {
  return _playerReducer(stateData, action);
}
