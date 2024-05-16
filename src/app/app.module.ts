import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { NgChartsModule } from 'ng2-charts';
//import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewWinsComponent } from './dashboard/new-wins/new-wins.component';
import { TrialWinRateComponent } from './dashboard/trial-win-rate/trial-win-rate.component';
import { NewMrrComponent } from './dashboard/new-mrr/new-mrr.component';
import { PageViewsComponent } from './dashboard/page-views/page-views.component';
import { MrrStatsByCountryComponent } from './dashboard/mrr-stats-by-country/mrr-stats-by-country.component';
import { MrrComponent } from './dashboard/mrr/mrr.component';
 




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewWinsComponent,
    TrialWinRateComponent,
    NewMrrComponent,
    PageViewsComponent,
    MrrStatsByCountryComponent,
    MrrComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    //HttpClientModule,
    MatGridListModule,
    MatIconModule,
    //NgChartsModule

    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
