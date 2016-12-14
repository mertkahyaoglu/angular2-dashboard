import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements AfterViewInit, OnInit {

  options: Object;
  analytics: Object[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.analytics = this.dashboardService.getAnalytics();
  }

  ngAfterViewInit() {
    this.options = {
      chart: {
        type: 'column',
      },
      title: {
        text: ''
      },
      legend: {
        align: 'top',
        layout: 'vertical',
        verticalAlign: 'top',
        itemMarginBottom: 5,
        borderWidth: 1,
        x: 50,
        y: 0
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'column',
          pointPadding: 0,
          borderWidth: 0
        }
      },
      series: this.analytics,
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
      credits: {
        enabled: false
      },
    };
  }

}
