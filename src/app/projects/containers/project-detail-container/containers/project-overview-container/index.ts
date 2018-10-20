import {NgModule} from '@angular/core';
import {ProjectOverviewContainer} from './project-overview.container';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DetailBoxComponent} from './components/detail-box-component/detail-box.component';
import {ProjectDetailListComponent} from './components/project-detail-list/project-detail-list.component';
const COMPONENT = [
  ProjectOverviewContainer,
  DetailBoxComponent,
  ProjectDetailListComponent
];
@NgModule({
  declarations: COMPONENT,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  exports: COMPONENT
})
export class ProjectOverviewModule {}
