import {NgModule} from '@angular/core';
import {ProjectDetailContainer} from './project-detail.container';
import {ProjectOverviewModule} from './containers/project-overview-container';
import {ProjectDetailToolbarModule} from './components/project-detail-toolbar';
import {LogframeModule} from './containers/logframe-container';
@NgModule({
  declarations: [ProjectDetailContainer],
  imports: [
    ProjectOverviewModule,
    ProjectDetailToolbarModule,
    LogframeModule
  ],
  exports: [ProjectDetailContainer],
  providers: []
})
export class ProjectDetailModule { }
