import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-wins',
  templateUrl: './new-wins.component.html',
  styleUrls: ['./new-wins.component.css'],
})
export class NewWinsComponent {
  @Input()
  data!: number;
}
