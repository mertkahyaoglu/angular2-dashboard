import { User } from './models';

export const DASHBOARD: Object = {
  welcome: [
    {
      name: 'Number Of Views',
      title: 'Welcome to Infinity',
      count: 102
    },
    {
      name: 'Leads/Contacts',
      title: 'Active',
      count: 325
    }
  ],
  counts: [
    {
      name: 'leads',
      title: 'Total Leads',
      count: 66163,
      icon: '../../assets/images/clip.png',
      chart: '../../assets/images/percent-leads.png'
    },
    {
      name: 'pendings',
      title: 'Total Pendings',
      count: 3490,
      icon: '../../assets/images/ban.png',
      chart: '../../assets/images/percent-pending.png'
    },
    {
      name: 'closed',
      title: 'Case Closed',
      count: 8372,
      icon: '../../assets/images/lock.png',
      chart: '../../assets/images/percent-closed.png'
    },
    {
      name: 'completed',
      title: 'Task Completed',
      count: 5255,
      icon: '../../assets/images/clipboard.png',
      chart: '../../assets/images/percent-completed.png'
    },
  ],
  timeline: [
    {
      text: 'Template Builder Access (Video tutorial inside documentation)',
      date: '2 mins ago',
      color: 'red'
    },
    {
      text: 'Designed the wordpress theme lily created her account',
      date: '1 hour ago',
      color: 'green'
    },
    {
      text: 'Your domain will expired in 13 days.',
      date: '4:30 p.m',
      color: 'blue'
    }
  ],
  browsers: [
    {
      name: 'Chrome',
      y: 60,
      color: '#303f9f'
    },
    {
      name: 'Safari',
      y: 25,
      color: '#38b4ee'
    },
    {
      name: 'Firefox',
      y: 15,
      color: '#4caf50'
    }
  ],
  analytics: [{
    name: 'Customers',
    data: [400, 150, 150, 150, 300, 200, 400, 350, 350, 200, 450, 400],
    color: '#3f51b5',
    pointPadding: 0
  }, {
    name: 'Users',
    data: [450, 190, 220, 240, 400, 280, 500, 500, 550, 420, 550, 550],
    color: '#303f9f'
  }]
};

export const NOTIFICATIONS: Object = {
  apps: 3,
  components: 9,
  emails: 4,
  documents: 2
};

export var USER: User = {
  name: 'MOHAMED SAID',
  title: 'Founder of App',
  avatar: '../../assets/images/avatar.jpg'
};
