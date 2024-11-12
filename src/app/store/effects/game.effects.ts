import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, of } from 'rxjs';
import { mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import * as gameActions from '../actions/game.actions';
import * as playerActions from '../actions/player.actions';
import * as enemyActions from '../actions/enemy.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  createGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameActions.createGame),
      mergeMap(() => of(playerActions.createPlayer()))
    )
  );

  startGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameActions.setGameState),
      mergeMap((action) =>
        action.state === 'start' ? of(gameActions.createGame()) : of()
      )
    )
  );

  playGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameActions.setGameState),
      mergeMap((action) =>
        action.state === 'playing'
          ? of(playerActions.setPlayerState({ state: 'walk' }))
          : of()
      ),
      tap(() => console.log('Game started!'))
    )
  );

  endGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameActions.setGameState),
      mergeMap((action) =>
        action.state === 'end'
          ? of(enemyActions.setEnemyState({ state: 'idle' }))
          : of()
      ),
      tap(() => console.log('Game ended!'))
    )
  );

  nextStage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameActions.nextGameStage),
      withLatestFrom(this.store.select('game')),
      mergeMap(([action, gameStage]) =>
        of(enemyActions.createEnemy({ difficulty: gameStage.stage }))
      ),
      tap(() => console.log('Game ended!'))
    )
  );
}
