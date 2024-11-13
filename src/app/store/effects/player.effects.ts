import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, interval, of } from 'rxjs';
import {
  catchError,
  delay,
  map,
  mergeMap,
  takeWhile,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import * as gameActions from '../actions/game.actions';
import * as playerActions from '../actions/player.actions';
import * as enemyActions from '../actions/enemy.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Injectable()
export class PlayerEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  createPlayer$ = createEffect(
    () => this.actions$.pipe(ofType(playerActions.createPlayer)),
    { dispatch: false }
  );

  attackPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerActions.setPlayerState),
      withLatestFrom(this.store.select('player')),
      mergeMap(([action, playerData]) => {
        if (playerData.state === 'attack') {
          return interval(1500).pipe(
            withLatestFrom(this.store.select('player')),
            takeWhile(([_, playerState]) => playerState.state === 'attack'),
            map(([_, playerState]) =>
              enemyActions.receiveDamageEnemy({
                damage: playerState.attack + playerState.attributes.powerPoints,
              })
            )
          );
        }
        return of();
      })
    )
  );

  receiveDamage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerActions.receiveDamagePlayer),
      withLatestFrom(this.store.select('player')),
      mergeMap(([action, playerState]) => {
        if (playerState && playerState?.currentHealth <= 0) {
          return of(playerActions.setPlayerState({ state: 'die' }));
        }
        return of();
      })
    )
  );

  stateDie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerActions.setPlayerState),
      mergeMap((action) =>
        action.state === 'die'
          ? concat(
              of(gameActions.setGameState({ state: 'end' })),
              of(enemyActions.destroyEnemy())
            )
          : of()
      )
    )
  );
}
