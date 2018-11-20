import {Component} from '@angular/core';

@Component({
  selector: 'users-list',
  template: '<mat-card style="padding: 24px 0 0;">' +
    '<mat-card-header style="border-bottom: 1px solid #b6b6b6; padding-bottom: 8px;">User List (not members)</mat-card-header>' +
    '</mat-card>'
})
export class UsersList { }
