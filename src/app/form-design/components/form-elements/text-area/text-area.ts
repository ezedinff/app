import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ElementEditDialog} from '../../element-edit-dialog/element-edit-dialog';
import {FormDesignSandbox} from '../../../sandbox/form-design.sandbox';
import {BaseElement, SelectOption} from '../../../../shared/models/BaseElement';

@Component({
  selector: 'text-area',
  template: '<div fxLayout="row" id="{{id}}" style="cursor: move;">' +
    '<div fxFlex="25"><mat-icon>description</mat-icon>&nbsp;&nbsp;<span fxHide.lt-md>Text Area</span></div>' +
    '<div fxFlex="55" fxFlex.xs="40">' +
    '<mat-form-field style="width: 100%;">' +
    '<textarea matInput placeholder="{{placeholder}}" rows="4"></textarea>' +
    '</mat-form-field></div>' +
    '<div fxFlex="20" fxFlex.xs="35" >' +
    '<button mat-icon-button (click)="deleteElement()" style="float: right;">' +
    '<mat-icon>delete</mat-icon>' +
    '</button>' +
    '<button mat-icon-button (click)="edit()" style="float: right;">' +
    '<mat-icon>edit</mat-icon></button>' +
    '</div>' +
    '</div>',
  styles: ['::ng-deep .mat-form-field-flex{ background-color: #f5f5f5 !important; padding: 0 16px;}'],
})
export class TextArea implements BaseElement {
  description: string;
  id: number;
  name: string;
  options: SelectOption[];
  placeholder: string;
  required: boolean;
  type: string;
  validation: string;
  constructor(private matDialog: MatDialog, private formDesignSandbox: FormDesignSandbox) {}
  edit() {
    this.formDesignSandbox.setCurrentSelectedElementId(this.id);
    this.matDialog.open(ElementEditDialog, {data: {'type': this.type, 'title': 'Text Area Configuration'}, width: '400px', height: 'auto', disableClose: true});
  }
  deleteElement() {
   document.getElementById(`${this.id}`).remove();
    this.formDesignSandbox.deleteElement(this.id);
  }
}
