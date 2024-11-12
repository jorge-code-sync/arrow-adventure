import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameSectionAttributesComponent } from '../../components/game-section-attributes/game-section-attributes.component';
import { GameSectionStatsComponent } from '../../components/game-section-stats/game-section-stats.component';
import { GameSectionScreenComponent } from '../../components/game-section-screen/game-section-screen.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { createGame } from '../../../store/actions';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    GameSectionAttributesComponent,
    GameSectionStatsComponent,
    GameSectionScreenComponent,
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePageComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(createGame());
  }
}
