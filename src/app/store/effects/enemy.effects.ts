import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, interval, of } from 'rxjs';
import {
  catchError,
  delay,
  map,
  mergeMap,
  switchMap,
  takeWhile,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import * as gameActions from '../actions/game.actions';
import * as playerActions from '../actions/player.actions';
import * as enemyActions from '../actions/enemy.actions';
import { receiveDamageEnemy } from '../actions/enemy.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class EnemyEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  createEnemy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enemyActions.createEnemy),
      mergeMap(() =>
        concat(
          of(playerActions.setPlayerState({ state: 'attack' })).pipe(
            delay(1000)
          ),
          of(enemyActions.setEnemyState({ state: 'attack' })).pipe(delay(1000))
        )
      )
    )
  );

  receiveDamage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enemyActions.receiveDamageEnemy),
      withLatestFrom(this.store.select('enemy')),
      mergeMap(([action, enemyState]) => {
        if (enemyState && enemyState?.currentHealth <= 0) {
          return of(enemyActions.setEnemyState({ state: 'die' }));
        }
        return of();
      })
    )
  );

  attackEnemy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enemyActions.setEnemyState),
      withLatestFrom(this.store.select('enemy')),
      mergeMap(([action, enemyData]) => {
        if (enemyData && enemyData.state === 'attack') {
          return interval(1500).pipe(
            withLatestFrom(this.store.select('enemy')),
            takeWhile(([_, enemyState]) => enemyState?.state === 'attack'),
            map(([_, enemyState]) =>
              playerActions.receiveDamagePlayer({
                damage: enemyState?.attack ?? 0,
              })
            )
          );
        }
        return of();
      })
    )
  );

  stateDie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enemyActions.setEnemyState),
      withLatestFrom(this.store.select('game')),
      mergeMap(([action, gameData]) =>
        action.state === 'die'
          ? concat(
              of(playerActions.setPlayerState({ state: 'idle' })),
              of(playerActions.increasePlayerGold({ gold: gameData.stage })),
              of(enemyActions.destroyEnemy()).pipe(delay(1200))
            )
          : of()
      )
    )
  );

  destroyEnemy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enemyActions.destroyEnemy),
      withLatestFrom(this.store.select('game')),
      mergeMap(([action, gameData]) => {
        if (gameData.state === 'playing') {
          return concat(
            of(playerActions.setPlayerState({ state: 'walk' })),
            of(gameActions.nextGameStage()).pipe(delay(2000))
          );
        }
        return of();
      })
    )
  );
}
