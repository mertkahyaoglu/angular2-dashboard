import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Custom Modules
import { AppRoutingModule } from './app.routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppsModule } from './apps/apps.module';
import { ComponentsModule } from './components/components.module';
import { DocumentsModule } from './documents/documents.module';
import { EmailsModule } from './emails/emails.module';
import { SettingsModule } from './settings/settings.module';

// Components
import { AppComponent } from './app.component';
import {
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  UserService,
  NotificationService,
  DashboardService,
  SidebarService
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AppsModule,
    ComponentsModule,
    DocumentsModule,
    EmailsModule,
    SettingsModule
  ],
  providers: [
    UserService,
    NotificationService,
    DashboardService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
