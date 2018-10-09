import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '@vedacircle/material';
import { MaterialDateModule } from '@vedacircle/material';
import { BreadcrumbsModule } from '@vedacircle/breadcrumbs';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, LAYOUT_CONFIG } from '@angular/flex-layout';
import { MinValidatorDirective } from './directives/min/min.directive';
import { NgLetDirective } from './directives/ng-let.directive';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

const DIRECTIVES = [MinValidatorDirective, NgLetDirective, ClickOutsideDirective];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
  ],
  declarations: [...DIRECTIVES],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MaterialModule,
    MaterialDateModule,
    MomentModule,
    FormlyMaterialModule,
    PerfectScrollbarModule,
    ...DIRECTIVES
  ],
  providers: [{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }]
})
export class SharedModule {}
