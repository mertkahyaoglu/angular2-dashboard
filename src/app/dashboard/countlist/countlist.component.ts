import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services';
import { Count } from '../../shared/models';

@Component({
  selector: 'app-countlist',
  templateUrl: './countlist.component.html',
  styleUrls: ['./countlist.component.scss']
})
export class CountListComponent implements OnInit {
  counts: Count[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.counts = this.dashboardService.getCounts();
  }

}
