import { CharacterState } from './types';

export interface CharacterModel {
  totalHealth: number;
  currentHealth: number;
  attack: number;
  defense: number;
  attackSpeed: number;
  state: CharacterState;
}
