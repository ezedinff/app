import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EzTableModule} from '../../../../../shared/components/ez-table/ez-table.module';
import {ActivityListComponent} from './activity-list.component';

@NgModule({
  declarations: [ActivityListComponent],
  exports: [ActivityListComponent],
  imports: [
    CommonModule,
    EzTableModule
  ]
})
export class ActivityListModule {}
