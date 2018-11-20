import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EzTableModule} from '../../../../../shared/components/ez-table/ez-table.module';
import {FileListComponent} from './file-list.compoent';

@NgModule({
  declarations: [FileListComponent],
  exports: [FileListComponent],
  imports: [
    CommonModule,
    EzTableModule
  ]
})
export class FileListModule {}
