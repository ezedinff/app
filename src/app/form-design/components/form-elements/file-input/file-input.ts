import {Component, ElementRef} from '@angular/core';
import {BaseElement} from '../../../../shared/models/BaseElement';
const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
@Component({
  selector: 'file-input',
  template: '<div fxLayout="row" draggable="true" id="{{id}}" style="padding-bottom: 16px;" style="cursor: move;">' +
    '<div fxFlex="25%">' +
    '<mat-icon>attachment</mat-icon>&nbsp;&nbsp;<span fxHide.lt-md>File</span>' +
    '</div>' +
    '<div fxFlex="55" fxFlex.xs="40">' +
    '<input type="file" name="file" ngModel [(ngModel)]="f" #fileIn [hidden]="true" (change)="selectFile(fileIn)">' +
    '<div fxLayout="row" fxLayout.xs="column">' +
    '<div fxFlex="80">' +
    '<mat-form-field style="width: 100%;" *ngIf="file"><input name="un" ngModel type="text" matInput [disabled]="true" [(ngModel)]="name"></mat-form-field>' +
    '</div>' +
    '<div fxFlex="20" style="padding: 8px;">' +
    '<button mat-raised-button (click)="fileIn.click()"><mat-icon>attachment</mat-icon>Browse</button>' +
    '</div>' +
    '</div> ' +
    '<div fxLayout="row" *ngIf="message">' +
    '<div fxFlex class="error" style="background-color: #ffffff;">{{message}}</div>' +
    '</div>' +
    '</div>' +
    '<div fxFlex="20" fxFlex.xs="35" >' +
    '<button mat-icon-button (click)="deleteElement()" style="float: right;">' +
    '<mat-icon>delete</mat-icon>' +
    '</button>' +
    '<button mat-icon-button (click)="edit()" style="float: right;">' +
    '<mat-icon>edit</mat-icon></button></div>' +
    '</div>',
  styles: ['.fileName {text-rendering: geometricPrecision; overflow: hidden; color: initial; letter-spacing: normal; word-spacing: normal; text-transform: none; text-indent: 0px; text-shadow: none;}']
})
export class FileInput implements BaseElement {
  description: string;
  id: number;
  required: boolean;
  type: string;
  file: File;
  f: any;
  name: string;
  bytes: number;
  size;
  fs;
  message: string;
  selectFile(element) {
    this.file = element.files[0];
    this.name = this.file.name.toString();
    this.bytes = this.file.size;
    this.f =  Math.floor(Math.log(this.bytes) / Math.log(1024));
    this.size = Math.round(this.bytes / Math.pow(1024, Math.floor(this.f))) + ' ' + units[this.f];
    console.log();
    this.fs = this.size.split(' ');
    this.message = (Number(this.fs[0]) > 2 && this.f > 1) ? 'Maximum file size is 2 mb' : null;
  }
}
