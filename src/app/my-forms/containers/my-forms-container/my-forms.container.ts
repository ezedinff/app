import {Component, OnInit} from '@angular/core';
import {MyFormSandbox} from '../../sandbox/my-form.sandbox';
import {Observable, ObservableLike} from 'rxjs';
import {Form} from '../../../shared/models/form';

@Component({
  selector: 'my-forms-container',
  template: '<div fxLayout="row" class="container-fluid" style="padding-top: 16px;">\n' +
    '  <mat-toolbar color="primary">\n' +
    '    <h1 class="mat-headline center-align">{{title}}</h1>\n' +
    '  </mat-toolbar>\n' +
    '</div>' +
    '<div fxLayout="row wrap"' +
    ' fxLayout.xs="column wrap"' +
    ' fxLayoutGap="16px"' +
    ' class="container-fluid"' +
    ' style="margin-bottom: 20%; margin-top: 24px;  flex-wrap: wrap;"' +
    ' *ngIf="forms$ | async as forms "' +
    ' >' +
    '<my-form fxFlex="23.61" fxFlex.xs="100" *ngFor="let form of forms"  [form]="form"></my-form>' +
    '</div>'
})
export class MyFormsContainer implements OnInit {
  forms$: Observable<Form[]>;
  title = 'My Forms';
  constructor(private myFormSandbox: MyFormSandbox) {}

  ngOnInit(): void {
    this.forms$ = this.myFormSandbox.forms$;
  }
}
