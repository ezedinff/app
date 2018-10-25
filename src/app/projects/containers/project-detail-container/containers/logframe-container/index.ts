import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeModule} from './components/tree';
import {LogframeContainer} from './logframe.container';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatDialogModule} from '@angular/material';
const routes: Routes = [
  {path: '',  component: LogframeContainer}
];
@NgModule({
  imports: [CommonModule, TreeModule, MatCardModule, MatDialogModule, RouterModule.forChild(routes)],
  declarations: [LogframeContainer],
  exports: [LogframeContainer, RouterModule],
  providers: [],
})
export class LogframeModule { }
