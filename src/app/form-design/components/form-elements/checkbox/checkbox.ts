import {BaseElement} from '../../../../shared/models/BaseElement';
import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormDesignSandbox} from '../../../sandbox/form-design.sandbox';
import {ElementEditDialog} from '../../element-edit-dialog/element-edit-dialog';
@Component({
  selector: 'checkbox',
  template: '<div fxLayout="row" draggable="true" id="{{id}}" style="cursor: move;">' +
    '<div fxFlex="25%">' +
    '<mat-icon>check_box</mat-icon>&nbsp;&nbsp;<span fxHide.lt-md>Checkbox</span>' +
    '</div>' +
    '<div fxFlex="55" fxFlex.xs="40">' +
    '<mat-checkbox name="{{name}}" color="primary">{{placeholder}}</mat-checkbox>' +
    '</div>' +
    '<div fxFlex="20" fxFlex.xs="35" >' +
    '<button mat-icon-button (click)="deleteElement()" style="float: right;">' +
    '<mat-icon>delete</mat-icon>' +
    '</button>' +
    '<button mat-icon-button (click)="edit()" style="float: right;">' +
    '<mat-icon>edit</mat-icon></button></div>' +
    '</div>',
})
export class Checkbox implements BaseElement {
  description: string;
  id: number;
  name: string;
  placeholder: string;
  required: boolean;
  type: string;
  validation: string;
  constructor(private matDialog: MatDialog, private formDesignSandbox: FormDesignSandbox) {}
  edit() {
    this.formDesignSandbox.setCurrentSelectedElementId(this.id);
    this.matDialog.open(ElementEditDialog,
      {data: {'type': this.type, 'title': 'Check box Configuration'},
        width: '400px', height: 'auto', disableClose: true});
  }
  deleteElement() {
    document.getElementById(`${this.id}`).remove();
    this.formDesignSandbox.deleteElement(this.id);
  }
}
