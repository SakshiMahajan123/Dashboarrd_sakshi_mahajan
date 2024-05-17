import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trial-win-rate',
  templateUrl: './trial-win-rate.component.html',
  styleUrls: ['./trial-win-rate.component.css'],
})
export class TrialWinRateComponent {
  @Input()
  data!: number;
}

