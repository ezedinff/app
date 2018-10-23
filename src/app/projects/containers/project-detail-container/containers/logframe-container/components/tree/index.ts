import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndicatorTreeComponent} from './indicator-tree-component/indicator-tree.component';
import {TreeComponent} from './tree-component/tree.component';
import {TreeElementComponent} from './tree-element-component/tree-element.component';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatListModule, MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogComponent} from '../dialog-component/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
const COMPONENT = [
  IndicatorTreeComponent,
  TreeComponent,
  TreeElementComponent,
  DialogComponent
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
    PerfectScrollbarModule
  ],
  declarations: COMPONENT,
  exports: COMPONENT,
  entryComponents: [DialogComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class TreeModule { }
