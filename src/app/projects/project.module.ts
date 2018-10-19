import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectContainer} from './containers/project-container/project.container';
const routes: Routes = [
  {path: '', component: ProjectContainer}
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProjectContainer],
  exports: [ProjectContainer, RouterModule]
})
export class ProjectModule { }
