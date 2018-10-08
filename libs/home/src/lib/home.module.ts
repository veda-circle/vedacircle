import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';
import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LandingComponent } from './containers/landing/landing.component';
import { BlogComponent } from './containers/blog/blog.component';
import { AboutComponent } from './containers/about/about.component';
import { ScrollToTopModule } from '@ngx-starter-kit/scroll-to-top';
import { SvgViewerModule } from '@ngx-starter-kit/svg-viewer';
import { FeaturesComponent } from './containers/features/features.component';
import { StickyHeaderDirective } from './components/header/sticky-header.directive';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ModalGalleryModule } from 'angular-modal-gallery';

@NgModule({
  imports: [
    SharedModule,
    ScrollToTopModule,
    ThemePickerModule,
    SvgViewerModule,
    SlideshowModule,
    NgxPageScrollModule,
    ModalGalleryModule.forRoot( { shortcuts: ['ctrl+a', 'ctrl+s', 'meta+s'] } ),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: HomeLayoutComponent,
        data: { animation: 'home' },
        children: [
          {
            path: '',
            component: LandingComponent,
            data: { animation: 'home' }
          },
          {
            path: 'blog',
            component: BlogComponent,
            data: { animation: 'blog' }
          },
          {
            path: 'about',
            component: AboutComponent,
            data: { animation: 'about' }
          },
          {
            path: 'features',
            component: FeaturesComponent,
            data: { animation: 'features' }
          }
        ]
      }
    ])
  ],
  declarations: [
    HeaderComponent,
    CalendarComponent,
    StickyHeaderDirective,
    FooterComponent,
    HomeLayoutComponent,
    LandingComponent,
    BlogComponent,
    AboutComponent,
    FeaturesComponent
  ]
})
export class HomeModule {}
