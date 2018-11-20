import {Component} from '@angular/core';

@Component({
  selector: 'permission-list',
  template: '<mat-card style="padding: 24px 0 0;">' +
    '<mat-card-header style="border-bottom: 1px solid #b6b6b6; padding-bottom: 8px;">Permission List</mat-card-header>' +
    '<mat-list>' +
    '<mat-list-item>permission 1</mat-list-item>' +
    '</mat-list>' +
    '</mat-card>'
})
export class PermissionList { }
