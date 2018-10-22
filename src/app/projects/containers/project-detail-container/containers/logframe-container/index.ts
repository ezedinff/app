import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeModule} from './components/tree';
import {LogframeContainer} from './logframe.container';
import {Routes} from '@angular/router';
import {MatCardModule, MatDialogModule} from '@angular/material';
const routes: Routes = [

];
@NgModule({
  imports: [CommonModule, TreeModule, MatCardModule, MatDialogModule],
  declarations: [LogframeContainer],
  exports: [LogframeContainer],
  providers: [],
})
export class LogframeModule { }
