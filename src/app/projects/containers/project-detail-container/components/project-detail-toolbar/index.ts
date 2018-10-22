import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ProjectDetailToolbarMenuComponent} from './project-detail-toolbar-menu/project-detail-toolbar-menu.component';
import {ProjectDetailToolbarComponent} from './project-detail-toolbar.component';
import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailContainer} from '../../project-detail.container';
import {ProjectOverviewContainer} from '../../containers/project-overview-container/project-overview.container';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LogframeContainer} from '../../containers/logframe-container/logframe.container';
const routes: Routes = [
  {
    path: '', component: ProjectDetailContainer,
    children: [
      {path: 'overview', component: ProjectOverviewContainer},
      {path: 'logframe', component: LogframeContainer}
    ]
  }
]; // TODO redirect path should be set
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, FlexLayoutModule, RouterModule.forChild(routes)],
  declarations: [ProjectDetailToolbarMenuComponent, ProjectDetailToolbarComponent],
  exports: [ProjectDetailToolbarMenuComponent, ProjectDetailToolbarComponent, RouterModule]
})
export class ProjectDetailToolbarModule { }
