import {NgModule} from '@angular/core';
import {PreviousEntryContainer} from './containers/previous-entry-container/previous-entry.container';
import {NewRecordContainer} from './containers/new-record-container/new-record.container';
import {MyFormsContainer} from './containers/my-forms-container/my-forms.container';
import {MyFormComponent} from './components/my-form/my-form.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GenerateFormComponent} from './components/generate-form/generate-form';
import {GenerateFormDirective} from './directives/generate-form.directive';
import {SingleRecordFormService} from './services/single-record-form.service';
import {MyFormSandbox} from './sandbox/my-form.sandbox';
import {MultipleRecordFormService} from './services/multiple-record-form.service';
const COMPONENTS = [
  PreviousEntryContainer,
  NewRecordContainer,
  MyFormsContainer,
  MyFormComponent,
  GenerateFormComponent,
  GenerateFormDirective
];
const routes: Routes = [
  {path: '', component: MyFormsContainer},
  {path: 'previous-entries/:id', component: PreviousEntryContainer},
  {path: 'new-record/:id', component: NewRecordContainer}
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [COMPONENTS, RouterModule],
  entryComponents: [GenerateFormComponent],
  providers: [SingleRecordFormService, MultipleRecordFormService, MyFormSandbox]
})
export class MyFormModule { }
