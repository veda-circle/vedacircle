import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vedacircle/shared';

import { ChatBoxModule } from '@vedacircle/chat-box';

import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { SettingsComponent } from './containers/settings/settings.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { QuickpanelModule } from '@vedacircle/quickpanel';
import { ToolbarModule } from '@vedacircle/toolbar';
import { SidenavModule } from '@vedacircle/sidenav';
import { ProfileComponent } from './containers/profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    // FIXME: AOT not working with environment.xyz
    ChatBoxModule.forRoot({
      accessToken: '37808bf14a19406cbe2a50cfd1332dd3', // environment.dialogFlow.apiToken
    }),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: DashboardLayoutComponent,
       // canActivate: [AuthGuard],
        data: { title: 'Dashboard', depth: 1 },
        children: [
          {
            path: '',
            component: OverviewComponent,
            data: { title: 'Overview' },
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: { title: 'Settings', depth: '2' },
          },
          {
            path: 'settings',
            component: SettingsComponent,
            data: { title: 'Settings', depth: '2' },
          },
          {
            path: 'widgets',
            loadChildren: '@vedacircle/widgets#WidgetsModule',
            data: { title: 'Widgets', depth: '2', preload: false },
          },
          {
            path: 'grid',
            loadChildren: '@vedacircle/grid#GridModule',
            data: { title: 'Grid', depth: 2, preload: false },
          },
          {
            path: 'experiments',
            loadChildren: '@vedacircle/experiments#ExperimentsModule',
            data: { title: 'Experiments', depth: 2, preload: false },
          },
        ],
      },
    ]),
  ],
  declarations: [DashboardLayoutComponent, OverviewComponent, RainbowComponent, ProfileComponent, SettingsComponent],
})
export class DashboardModule {}
