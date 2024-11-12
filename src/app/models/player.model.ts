import { CharacterModel } from './character.model';

export interface PlayerModel extends CharacterModel {
  name: string;
  gold: number;
  attributes: {
    powerPoints: number;
    shieldPoints: number;
    speedPoints: number;
  };
}
