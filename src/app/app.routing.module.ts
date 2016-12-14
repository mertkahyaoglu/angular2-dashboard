import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppsComponent } from './apps/apps.component';
import { ComponentsComponent } from './components/components.component';
import { EmailsComponent } from './emails/emails.component';
import { DocumentsComponent } from './documents/documents.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'apps',  component: AppsComponent },
  { path: 'components',  component: ComponentsComponent },
  { path: 'emails',  component: EmailsComponent },
  { path: 'documents',  component: DocumentsComponent },
  { path: 'settings',  component: SettingsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
