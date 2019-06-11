import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuicklinkModule, QuicklinkStrategy } from '@xmlking/ngx-quicklink';
import { CoreModule } from '@vedacircle/core';

import { environment } from '@env/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          loadChildren: () => import('@vedacircle/home').then(module => module.HomeModule),
          data: { preload: true },
        },

        {
          path: '404',
          loadChildren: () => import('@vedacircle/not-found').then(module => module.NotFoundModule),
          data: { title: '404', preload: false },
        },
        // 404 should be last
        { path: '**', redirectTo: '404', pathMatch: 'full' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        preloadingStrategy: QuicklinkStrategy,
        paramsInheritanceStrategy: 'always',
        // enableTracing: true, // enable to debug routing during development
        // onSameUrlNavigation: 'reload'
      },
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule, // IMP: Please keep CoreModule after RouterModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
