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
import { SvgViewerModule } from '@vedacircle/svg-viewer';
import { FeaturesComponent } from './containers/features/features.component';
import { StickyHeaderDirective } from './components/header/sticky-header.directive';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EventComponent} from "./containers/events/event.component";
import { RegularEventsComponent} from "./containers/regular-events/regular-events.component";
import { CharityComponent } from './containers/charity/charity.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    DragDropModule,
    ThemePickerModule,
    SvgViewerModule,
    NgxPageScrollModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    CarouselModule,
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
    CharityComponent,
    EventComponent,
    RegularEventsComponent,
    FeaturesComponent
  ],
})
export class HomeModule {}
