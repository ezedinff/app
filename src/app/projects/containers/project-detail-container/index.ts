import {NgModule} from '@angular/core';
import {ProjectDetailContainer} from './project-detail.container';
import {ProjectOverviewModule} from './containers/project-overview-container';
import {ProjectDetailToolbarModule} from './components/project-detail-toolbar';
@NgModule({
  declarations: [ProjectDetailContainer],
  imports: [
    ProjectOverviewModule,
    ProjectDetailToolbarModule
  ],
  exports: [ProjectDetailContainer],
  providers: []
})
export class ProjectDetailModule { }
