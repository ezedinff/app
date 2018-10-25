import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ProjectDetailToolbarMenuComponent} from './project-detail-toolbar-menu/project-detail-toolbar-menu.component';
import {ProjectDetailToolbarComponent} from './project-detail-toolbar.component';
import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailContainer} from '../../project-detail.container';
import {FlexLayoutModule} from '@angular/flex-layout';
const routes: Routes = [
  {
    path: '', component: ProjectDetailContainer,
    children: [
      {path: 'overview', loadChildren: '../../containers/project-overview-container/index#ProjectOverviewModule'},
      {path: 'logframe', loadChildren: '../../containers/logframe-container/index#LogframeModule'},
      {path: 'expenditure', loadChildren: '../../containers/expenditure-container/index#ExpenditureModule'}
    ]
  }
]; // TODO redirect path should be set
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, FlexLayoutModule, RouterModule.forChild(routes)],
  declarations: [ProjectDetailToolbarMenuComponent, ProjectDetailToolbarComponent],
  exports: [ProjectDetailToolbarMenuComponent, ProjectDetailToolbarComponent, RouterModule]
})
export class ProjectDetailToolbarModule { }
