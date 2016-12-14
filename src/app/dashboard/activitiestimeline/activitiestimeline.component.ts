import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services';

@Component({
  selector: 'app-activitiestimeline',
  templateUrl: './activitiestimeline.component.html',
  styleUrls: ['./activitiestimeline.component.scss']
})
export class ActivitiestimelineComponent implements OnInit {
  feeds: Object[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.feeds = this.dashboardService.getTimelineFeed();
  }

}
