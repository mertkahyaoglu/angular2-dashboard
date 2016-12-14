import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { UserService, NotificationService, SidebarService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: User;
  notifications: Object;
  hidden: boolean;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private sidebarService: SidebarService
  ) {
    this.hidden = true;
  }

  ngOnInit(): void {
    this.user = this.userService.getUserProfile();
    this.notifications = this.notificationService.getNotifications();
    this.sidebarService.event.subscribe(value => this.hidden = !this.hidden);
  }

}
