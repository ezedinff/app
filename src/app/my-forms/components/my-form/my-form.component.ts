import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Form} from '../../../shared/models/form';
import {Router} from '@angular/router';
import {MyFormSandbox} from '../../sandbox/my-form.sandbox';

@Component({
  selector: 'my-form',
  template: '<mat-card style="padding-top: 0; padding-bottom: 8px; margin-bottom: 24px;">' +
    '  <div  class="mat-card-image board" style="margin-bottom: 0;" (click)="navigateToAddRecord(form.id)">' +
    '    <p  class="title">{{form.attributes.form_name}}</p>\n' +
    '  </div>\n' +
    '  <mat-card-actions style="margin-top: 0; padding-top: 0;">' +
    '    <div fxLayout="row" style=" position: relative; top: -12px;">' +
    '      <button mat-button fxFlex>' +
    '        <mat-icon>edit</mat-icon>' +
    '        edit' +
    '      </button>' +
    '      <button mat-button fxFlex>' +
    '        <mat-icon>delete</mat-icon>' +
    '        delete' +
    '      </button>' +
    '    </div>' +
    '  </mat-card-actions>' +
    '</mat-card>',
  styles: ['.title{ display: block; align-self: center; top: 3em; position: relative; cursor: pointer;}']
})
export class MyFormComponent {
  @Input() form: Form;
  @Input() canManage: boolean;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor(private router: Router,
              private myFormSandbox: MyFormSandbox) {}
  navigateToAddRecord(id) {
    this.myFormSandbox.setSelectedFormId(id);
    this.router.navigate(['/my-forms/new-record', id]);
  }
}
