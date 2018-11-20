import {Component} from '@angular/core';
import {BaseElement} from '../../../../shared/models/BaseElement';
import {MatDialog} from '@angular/material';
import {FormDesignSandbox} from '../../../sandbox/form-design.sandbox';
import {ElementEditDialog} from '../../element-edit-dialog/element-edit-dialog';

@Component({
  selector: 'link-input',
  template: '<div fxLayout="row" draggable="true" id="{{id}}" style="cursor: move;">' +
    '<div fxFlex="25%">' +
    '<mat-icon>insert_link</mat-icon>&nbsp;&nbsp;<span fxHide.lt-md>Link</span>' +
    '</div>' +
    '<div fxFlex="55" fxFlex.xs="40">' +
    '<mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
    '<input type="url" matInput placeholder="{{placeholder}}" [required]="required" />' +
    '</mat-form-field>' +
    '</div>' +
    '<div fxFlex="20" fxFlex.xs="35" >' +
    '<button mat-icon-button (click)="deleteElement()" style="float: right;">' +
    '<mat-icon>delete</mat-icon>' +
    '</button>' +
    '<button mat-icon-button (click)="edit()" style="float: right;">' +
    '<mat-icon>edit</mat-icon></button></div>' +
    '</div>',
})
export class LinkInput implements BaseElement {
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
    this.matDialog.open(ElementEditDialog, {data: {'type': this.type, 'title': 'Link Configuration'},
      width: '400px', height: 'auto', maxWidth: '100vw', disableClose: true});
  }
  deleteElement() {
    document.getElementById(`${this.id}`).remove();
    this.formDesignSandbox.deleteElement(this.id);
  }
}
