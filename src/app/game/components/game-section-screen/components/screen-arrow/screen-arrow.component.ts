import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'screen-arrow',
  standalone: true,
  imports: [],
  templateUrl: './screen-arrow.component.html',
  styleUrl: './screen-arrow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenArrowComponent {}
