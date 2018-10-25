import {NgModule} from '@angular/core';
import {ProjectDetailContainer} from './project-detail.container';
import {ProjectDetailToolbarModule} from './components/project-detail-toolbar';
@NgModule({
  declarations: [ProjectDetailContainer],
  imports: [
    ProjectDetailToolbarModule
  ],
  exports: [ProjectDetailContainer],
  providers: []
})
export class ProjectDetailModule { }
