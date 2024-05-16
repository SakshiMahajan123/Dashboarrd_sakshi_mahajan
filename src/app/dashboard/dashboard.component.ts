// dashboard.component.ts
import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public pageViewsData: ChartData<'doughnut'> = {
    labels: ['Referral', 'Direct', 'Organic Search'],
    datasets: [
      { data: [120, 150, 200], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }
    ]
  };
  public pageViewsOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public mrrData: ChartData<'bar'> = {
    labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
    datasets: [
      { label: 'United States', data: [12000, 15000, 10000, 8000, 7000, 6000], backgroundColor: '#FF6384' },
      { label: 'Australia', data: [5000, 7000, 6000, 5000, 4000, 3000], backgroundColor: '#36A2EB' },
      { label: 'Canada', data: [2000, 3000, 2500, 2000, 1500, 1000], backgroundColor: '#FFCE56' },
      { label: 'United Kingdom', data: [1000, 2000, 1500, 1000, 800, 500], backgroundColor: '#4BC0C0' }
    ]
  };
  public mrrOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };
}
