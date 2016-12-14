import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcomeData: Object[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.welcomeData = this.dashboardService.getWelcomeData();
  }

}
