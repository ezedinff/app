import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndicatorTreeComponent} from './indicator-tree-component/indicator-tree.component';
import {TreeComponent} from './tree-component/tree.component';
import {TreeElementComponent} from './tree-element-component/tree-element.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogComponent} from '../dialog-component/dialog.component';
const COMPONENT = [
  IndicatorTreeComponent,
  TreeComponent,
  TreeElementComponent,
  DialogComponent
];
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  declarations: COMPONENT,
  exports: COMPONENT,
  entryComponents: [DialogComponent]
})
export class TreeModule { }
