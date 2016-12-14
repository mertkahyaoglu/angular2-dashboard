import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { ChartModule } from 'angular2-highcharts';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ActivitiespieComponent } from './activitiespie/activitiespie.component';
import { ActivitiestimelineComponent } from './activitiestimeline/activitiestimeline.component';
import { CountListComponent } from './countlist/countlist.component';
import { CountItemComponent } from './countitem/countitem.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { CountPipe } from '../shared/pipes';
import { WelcomeitemComponent } from './welcomeitem/welcomeitem.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ActivitiespieComponent,
    ActivitiestimelineComponent,
    CountListComponent,
    CountItemComponent,
    WelcomeComponent,
    CountPipe,
    WelcomeitemComponent
  ]
})
export class DashboardModule { }
