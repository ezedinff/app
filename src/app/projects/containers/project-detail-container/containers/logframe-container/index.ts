import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeModule} from './components/tree';
import {LogframeContainer} from './logframe.container';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatDialogModule} from '@angular/material';
import {LogframeFormBuilderService} from './services/logframe-form-builder.service';
import {OutcomeSandbox} from '../../../../sandbox/outcome.sandbox';
import {ProjectSandbox} from '../../../../sandbox/project.sandbox';
import {OutputSanbox} from '../../../../sandbox/output.sanbox';
import {ActivitySandbox} from '../../../../sandbox/activity.sandbox';
const routes: Routes = [
  {path: '',  component: LogframeContainer}
];
@NgModule({
  imports: [CommonModule, TreeModule, MatCardModule, MatDialogModule, RouterModule.forChild(routes)],
  declarations: [LogframeContainer],
  exports: [LogframeContainer, RouterModule],
  providers: [LogframeFormBuilderService, OutcomeSandbox, ProjectSandbox, OutputSanbox, ActivitySandbox],
})
export class LogframeModule { }
