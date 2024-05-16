import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-mrr-stats-by-country',
  templateUrl: './mrr-stats-by-country.component.html',
  styleUrls: ['./mrr-stats-by-country.component.css'],
})
export class MrrStatsByCountryComponent implements OnChanges {
  @Input()
  data!: { country: string; value: number; }[];

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };
  public scatterChartData!: ChartDataset[];
  public scatterChartType: ChartType = 'bubble';
  public scatterChartLegend = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.scatterChartData = [
        {
          data: this.data.map(item => ({ x: item.value, y: Math.random() * 10, r: item.value / 50 })),
          label: 'MRR by Country',
        },
      ];
    }
  }
}
