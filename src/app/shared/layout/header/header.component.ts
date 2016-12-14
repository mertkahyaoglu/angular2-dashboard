import { Component, OnInit } from '@angular/core';
import { NotificationService, SidebarService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications: Object;
  sidebarOpen: boolean;

  constructor(
    private notificationService: NotificationService,
    private sidebarService: SidebarService
  ) {
    this.sidebarOpen = false;
  }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
    this.sidebarService.event.subscribe(value => this.sidebarOpen = !this.sidebarOpen);
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

}
