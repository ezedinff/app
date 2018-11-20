import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormDesignContainer} from './containers/form-deign/form-design.container';
import {FormBuildingBlockContainer} from './containers/form-building-block/form-building-block.container';
import {FormBuildingBlockItemComponent} from './components/form-building-block-item/form-building-block-item.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressBarModule, MatRadioModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormViewContainer} from './containers/form-view/form-view.container';
import {TextInputComponent} from './components/form-elements/text-input/text-input.component';
import {FormDirective} from './directives/form-directive';
import {ElementEditDialog} from './components/element-edit-dialog/element-edit-dialog';
import {TextArea} from './components/form-elements/text-area/text-area';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {FormsModule} from '@angular/forms';
import {FormDesignSandbox} from './sandbox/form-design.sandbox';
import {Checkbox} from './components/form-elements/checkbox/checkbox';
import {RadioButton} from './components/form-elements/radio-button/radio-button';
import {DropDown} from './components/form-elements/drop-down/drop-down';
import {DateInput} from './components/form-elements/date-input/date-input';
import {FileInput} from './components/form-elements/file-input/file-input';
import {LocationInput} from './components/form-elements/location-input/location-input';
import {LinkInput} from './components/form-elements/link-input/link-input';
const COMPONENT = [
  FormDesignContainer,
  FormBuildingBlockContainer,
  FormBuildingBlockItemComponent,
  FormViewContainer,
  TextInputComponent,
  TextArea,
  Checkbox,
  RadioButton,
  DropDown,
  DateInput,
  FileInput,
  LocationInput,
  LinkInput,
  FormDirective,
  ElementEditDialog
];
const routes: Routes = [
  {path: '', component: FormDesignContainer}
];
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: COMPONENT,
  imports: [CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressBarModule,
    PerfectScrollbarModule,
    FormsModule
  ],
  exports: [COMPONENT, RouterModule],
  entryComponents: [TextInputComponent, TextArea, Checkbox, RadioButton, DropDown, DateInput, FileInput, LocationInput, LinkInput, ElementEditDialog],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    FormDesignSandbox
  ]
})
export class FormDesignModule {
}
