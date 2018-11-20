import {NgModule} from '@angular/core';
import {ProjectDetailContainer} from './project-detail.container';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProjectDetailToolbarComponent} from './components/project-detail-toolbar/project-detail-toolbar.component';
import {
        ProjectDetailToolbarMenuComponent
      } from './components/project-detail-toolbar/project-detail-toolbar-menu/project-detail-toolbar-menu.component';
import {CommonModule} from '@angular/common';
import {ProjectSandbox} from '../../sandbox/project.sandbox';
const routes: Routes = [
  {
    path: '', component: ProjectDetailContainer,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', loadChildren: './containers/project-overview-container/index#ProjectOverviewModule'},
      {path: 'logframe', loadChildren: './containers/logframe-container/index#LogframeModule'},
      {path: 'expenditures', loadChildren: './containers/expenditure-container/index#ExpenditureModule'}
    ]
  }
]; // TODO redirect path should be set
const components = [
  ProjectDetailContainer,
  ProjectDetailToolbarMenuComponent,
  ProjectDetailToolbarComponent
];
const tobImported = [
  CommonModule,
  RouterModule.forChild(routes),
  MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, FlexLayoutModule
];
@NgModule({
  declarations: components,
  imports: tobImported,
  exports: [components, RouterModule],
  providers: [ProjectSandbox]
})
export class ProjectDetailModule { }
