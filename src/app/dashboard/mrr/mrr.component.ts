import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { NgModel } from '@angular/forms';
import { NG_CHARTS_CONFIGURATION } from 'ng2-charts';

@Component({
  selector: 'app-mrr',
  templateUrl: './mrr.component.html',
  styleUrls: ['./mrr.component.css'],
})
export class MrrComponent implements OnChanges {
  @Input()
  data!: { month: string; value: number; }[];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
 public barChartLabels!: String[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData!: ChartDataset[];


  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.barChartLabels = this.data.map(item => item.month);
      this.barChartData = [
        { data: this.data.map(item => item.value), label: 'MRR' },
      ];
    }
  }
}
