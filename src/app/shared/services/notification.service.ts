import { Injectable } from '@angular/core';
import { NOTIFICATIONS } from '../mock-data';

@Injectable()
export class NotificationService {

  getNotifications(): Object {
    return NOTIFICATIONS;
  }

}
