import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@vedacircle/shared';
import {ThemePickerModule} from '@vedacircle/theme-picker';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeLayoutComponent} from './containers/home-layout/home-layout.component';
import {LandingComponent} from './containers/landing/landing.component';
import {ContactComponent} from './containers/contact/contact.component';
import {AboutComponent} from './containers/about/about.component';
import {SvgViewerModule} from '@vedacircle/svg-viewer';
import {FeaturesComponent} from './containers/features/features.component';
import {StickyHeaderDirective} from './components/header/sticky-header.directive';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {EventComponent} from './containers/events/event.component';
import {RegularEventsComponent} from './containers/regular-events/regular-events.component';
import {CharityComponent} from './containers/charity/charity.component';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material';
import {StickyHeaderModule, IconsModule, NavbarModule} from 'angular-bootstrap-md';
// MDB Angular Pro
import {ButtonsModule, WavesModule, CardsFreeModule} from 'angular-bootstrap-md';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {CarouselModule} from 'angular-bootstrap-md';
import {LightboxModule} from 'ngx-lightbox';
import {AudioComponent} from './containers/audio/audio.component';

import { NgxAudioPlayerModule } from 'ngx-audio-player';

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
        StickyHeaderModule,
        NavbarModule,
        ButtonsModule,
        WavesModule,
        CardsFreeModule,
        FontAwesomeModule,
        ButtonsModule,
        IconsModule,
        LightboxModule,
        NgxAudioPlayerModule,
        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
            {
                path: '',
                component: HomeLayoutComponent,
                data: {animation: 'home'},
                children: [
                    {
                        path: '',
                        component: LandingComponent,
                        data: {animation: 'home'},
                    },
                    {
                        path: 'audio',
                        component: AudioComponent,
                        data: {animation: 'audio'},
                    }
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
        FeaturesComponent,
        AudioComponent
    ],
})
export class HomeModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(fas, far);
    }
}
