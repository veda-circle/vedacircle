import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vedacircle/shared';
import { ThemePickerModule } from '@vedacircle/theme-picker';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { LandingComponent } from './containers/landing/landing.component';
import { ContactComponent } from './containers/contact/contact.component';
import { AboutComponent } from './containers/about/about.component';
import { ScrollToTopModule } from '@vedacircle/scroll-to-top';
import { SvgViewerModule } from '@vedacircle/svg-viewer';
import { FeaturesComponent } from './containers/features/features.component';
import { StickyHeaderDirective } from './components/header/sticky-header.directive';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EventComponent } from "@vedacircle/home/src/lib/containers/events/event.component";
import { CharityComponent } from "@vedacircle/home/src/lib/containers/charity/charity.component";

@NgModule({
  imports: [
    SharedModule,
    DragDropModule,
    ScrollToTopModule,
    ThemePickerModule,
    SvgViewerModule,
    NgxPageScrollModule,
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
            data: { animation: 'home' },
          },
          {
            path: 'blog',
            component: ContactComponent,
            data: { animation: 'blog' },
          },
          {
            path: 'about',
            component: AboutComponent,
            data: { animation: 'about' },
          },
          {
            path: 'features',
            component: FeaturesComponent,
            data: { animation: 'features' },
          },
          {
            path: 'charity',
            component: CharityComponent,
            data: { animation: 'charity' },
          },
        ],
      },
    ]),
  ],
  entryComponents: [],
  declarations: [
    HeaderComponent,
    StickyHeaderDirective,
    FooterComponent,
    HomeLayoutComponent,
    LandingComponent,
    ContactComponent,
    AboutComponent,
    EventComponent,
    CharityComponent,
    FeaturesComponent
  ],
})
export class HomeModule {}
