import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vedacircle/shared';
import { ThemePickerModule } from '@vedacircle/theme-picker';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LandingComponent } from './containers/landing/landing.component';
import { BlogComponent } from './containers/blog/blog.component';
import { AboutComponent } from './containers/about/about.component';
import { ScrollToTopModule } from '@vedacircle/scroll-to-top';
import { SvgViewerModule } from '@vedacircle/svg-viewer';
import { FeaturesComponent } from './containers/features/features.component';
import { StickyHeaderDirective } from './components/header/sticky-header.directive';
import { SlideshowModule } from 'ng-simple-slideshow'; 
import { NgxPageScrollModule } from 'ngx-page-scroll'; 
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { ModalGalleryModule } from "angular-modal-gallery";
import { FlatpickrModule } from "angularx-flatpickr";
import { GalleryModule } from "@ngx-gallery/core";
import { LightboxModule } from "@ngx-gallery/lightbox";
import { GallerizeModule } from "@ngx-gallery/gallerize";
import { SlickModule } from 'ngx-slick';
import { GalleryComponent } from "@vedacircle/home/src/lib/containers/gallery/gallery.component";
import { EventsComponent } from "@vedacircle/home/src/lib/containers/events/events.component";
import { OrganizationComponent } from "@vedacircle/home/src/lib/containers/organization/organization.component";
import { ClassesComponent } from "@vedacircle/home/src/lib/containers/classes/classes.component";
import { ContactusComponent } from "@vedacircle/home/src/lib/containers/contactus/contactus.component";
import { SubscribeComponent } from "@vedacircle/home/src/lib/containers/subscribe/subscribe.component";

@NgModule({
  imports: [
    SharedModule,
    ScrollToTopModule,
    ThemePickerModule,
    SvgViewerModule,
    SlideshowModule,
    NgxPageScrollModule,
    FlatpickrModule.forRoot(),
    ModalGalleryModule.forRoot({ shortcuts: ["ctrl+a", "ctrl+s", "meta+s"] }),
    FormsModule,
    GalleryModule,
    SlickModule.forRoot(),
    LightboxModule,
    GallerizeModule,
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
    OrganizationComponent,
    ContactusComponent,
    AboutComponent,
    GalleryComponent,
    SubscribeComponent,
    ClassesComponent,
    EventsComponent,
    FeaturesComponent
  ]
})
export class HomeModule {}
