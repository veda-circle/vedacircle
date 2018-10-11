import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { FormlyModule } from "@ngx-formly/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { AuthModule, AuthState } from "@vedacircle/auth";
import { NavigatorModule, MenuState } from "@vedacircle/navigator";
import { NgxsWebsocketPluginModule } from "@vedacircle/socketio-plugin";
import { environment } from "@env/environment";
import { EventBus } from "./state/eventbus";
import { defaultMenu, demoMenu, adminMenu } from "./menu-data";
import { PreferenceState } from "./state/preference.state";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { GalleryModule } from "@ngx-gallery/core";
import { LightboxModule } from "@ngx-gallery/lightbox";
import { GallerizeModule } from "@ngx-gallery/gallerize";
import { ModalGalleryModule } from "angular-modal-gallery";
import { FlatpickrModule } from "angularx-flatpickr";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

// Noop handler for factory function
export function noop() {
  return function() {};
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPageScrollModule,
    NavigatorModule.forRoot(defaultMenu),
    NgxsModule.forRoot([AuthState, MenuState, PreferenceState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production, // Set to true for prod mode
      maxAge: 10
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsWebsocketPluginModule.forRoot({
      url: environment.WS_EVENT_BUS_URL
    }),
    NgxsRouterPluginModule.forRoot(),
    AuthModule.forRoot(),
    FormlyModule.forRoot(),
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule,
    environment.envName === "mock"
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          passThruUnknownUrl: true
          // delay: 500,
          // apiBase: 'api'
        })
      : []
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [EventBus],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
