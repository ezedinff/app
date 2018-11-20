import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndicatorTreeComponent} from './indicator-tree-component/indicator-tree.component';
import {TreeComponent} from './tree-component/tree.component';
import {TreeElementComponent} from './tree-element-component/tree-element.component';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatSelectModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogComponent} from '../dialog-component/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {DynamicDirective} from '../../directives/dynamic.directive';
import {OutcomeComponent} from '../outcome/outcome.component';
import {OutputComponent} from '../output/output.component';
import {ProjectSandbox} from '../../../../../../sandbox/project.sandbox';
import {OutputSanbox} from '../../../../../../sandbox/output.sanbox';
const COMPONENT = [
  IndicatorTreeComponent,
  TreeComponent,
  TreeElementComponent,
  DialogComponent,
  DynamicDirective,
  OutcomeComponent,
  OutputComponent
];
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: COMPONENT,
  exports: COMPONENT,
  entryComponents: [DialogComponent, OutcomeComponent, OutputComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ProjectSandbox
  ]
})
export class TreeModule { }
