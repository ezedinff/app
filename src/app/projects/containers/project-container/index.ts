import {NgModule} from '@angular/core';
import {ProjectContainer} from './project.container';
import {ProjectComponent} from './components/project-component/project.component';
import {ProjectListComponent} from './components/project-list-component/project-list.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OutcomeSandbox} from '../../sandbox/outcome.sandbox';
import {ProjectSandbox} from '../../sandbox/project.sandbox';
const COMPONENTS = [
  ProjectContainer,
  ProjectComponent,
  ProjectListComponent,
];
const routes: Routes = [
  {path: '', component: ProjectContainer},
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  exports: [
    ProjectContainer,
    ProjectComponent,
    ProjectListComponent,
    RouterModule
  ],
  providers: [OutcomeSandbox, ProjectSandbox]
})
export class ProjectContainerModule { }
