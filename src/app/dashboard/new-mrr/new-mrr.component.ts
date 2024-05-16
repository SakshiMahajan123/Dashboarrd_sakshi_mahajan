import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-mrr',
  templateUrl: './new-mrr.component.html',
  styleUrls: ['./new-mrr.component.css'],
})
export class NewMrrComponent {
  @Input() data: number | undefined;
}
