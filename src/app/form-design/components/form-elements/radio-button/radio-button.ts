import {Component} from '@angular/core';
import {BaseElement, SelectOption} from '../../../../shared/models/BaseElement';
import {MatDialog} from '@angular/material';
import {FormDesignSandbox} from '../../../sandbox/form-design.sandbox';
import {ElementEditDialog} from '../../element-edit-dialog/element-edit-dialog';

@Component({
  selector: 'radio-button',
  template: '<div fxLayout="row" draggable="true" id="{{id}}" style="cursor: move;">' +
    '<div fxFlex="25%">' +
    '<mat-icon>radio_button_checked</mat-icon>&nbsp;&nbsp;<span fxHide.lt-md></span>Radio Button' +
    '</div>' +
    '<div fxFlex="55" fxFlex.xs="40">' +
    '<p>{{placeholder}}</p>' +
    '<mat-radio-group name="{{name}}">' +
    '<mat-radio-button value="{{option.value}}" color="primary" *ngFor="let option of options" style="display: block; margin-bottom: 16px;">{{option.label}}</mat-radio-button><br><br>' +
    '</mat-radio-group>' +
    '</div>' +
    '<div fxFlex="20" fxFlex.xs="35" >' +
    '<button mat-icon-button (click)="deleteElement()" style="float: right;">' +
    '<mat-icon>delete</mat-icon>' +
    '</button>' +
    '<button mat-icon-button (click)="edit()" style="float: right;">' +
    '<mat-icon>edit</mat-icon></button></div>' +
    '</div>',
})
export class RadioButton implements BaseElement {
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
    this.matDialog.open(ElementEditDialog,
      {data:
          {'type': this.type, 'title': 'Radio Button Configuration'},
        width: '400px', maxWidth: '100vw', height: 'auto', disableClose: true}
        );
  }
  deleteElement() {
    document.getElementById(`${this.id}`).remove();
    this.formDesignSandbox.deleteElement(this.id);
  }
}
