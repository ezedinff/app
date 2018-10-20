import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectContainer} from './containers/project-container/project.container';
import {ProjectContainerModule} from './containers/project-container';
const routes: Routes = [
  {path: '', component: ProjectContainer},
  {path: 'detail', loadChildren: './containers/project-detail-container/index#ProjectDetailModule'}
];
@NgModule({
  imports: [CommonModule, ProjectContainerModule,  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModule { }
