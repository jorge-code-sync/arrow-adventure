import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducers';
import { PlayerModel } from '../../../../../models/player.model';

@Component({
  selector: 'screen-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-background.component.html',
  styleUrl: './screen-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenBackgroundComponent implements OnInit {
  animationPlay = signal(false);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('player').subscribe((player: PlayerModel) => {
      this.animationPlay.set(player.state === 'walk');
    });
  }
}
