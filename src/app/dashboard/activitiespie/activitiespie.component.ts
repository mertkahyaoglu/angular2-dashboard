import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services';

@Component({
  selector: 'app-activitiespie',
  templateUrl: './activitiespie.component.html',
  styleUrls: ['./activitiespie.component.scss']
})
export class ActivitiespieComponent implements AfterViewInit, OnInit {
  options: Object;
  browsers: Object[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.browsers = this.dashboardService.getBrowsers();
  }

  ngAfterViewInit() {
    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 100,
        width: 180
      },
      title: {
        text: null
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'center',
        x: 0,
        y: 10,
        floating: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          pointPadding: 0,
          borderWidth: 0,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true,
          center: ['0', '50%']
        }
      },
      series: [{
        name: 'Browsers',
        colorByPoint: true,
        data: this.browsers
      }],
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
