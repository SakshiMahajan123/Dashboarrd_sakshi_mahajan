import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartData} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'

@Component({
  selector: 'app-page-views',
  templateUrl: './page-views.component.html',
  styleUrls: ['./page-views.component.css'],
})
export class PageViewsComponent implements OnChanges {
  @Input()
  data!: { referral: number; direct: number; organic: number; };

 //public doughnutChartLabels: Label[] = ['Referral', 'Direct', 'Organic'];
  public doughnutChartData!: number[];
  public doughnutChartType: ChartType = 'doughnut';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.doughnutChartData = [this.data.referral, this.data.direct, this.data.organic];
    }
  }
}

