import { Injectable } from '@angular/core';
import { DASHBOARD } from '../mock-data';
import { Count } from '../../shared/models';

@Injectable()
export class DashboardService {

  getTimelineFeed(): Object[] {
    return DASHBOARD['timeline'];
  }

  getBrowsers(): Object[] {
    return DASHBOARD['browsers'];
  }

  getAnalytics(): Object[] {
    return DASHBOARD['analytics'];
  }

  getWelcomeData(): Object[] {
    return DASHBOARD['welcome'];
  }

  getCounts(): Count[] {
    return DASHBOARD['counts'];
  }

}
