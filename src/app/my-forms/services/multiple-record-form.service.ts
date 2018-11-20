import {Injectable} from '@angular/core';
import {FormGenerator} from '../interfaces/FormGenerator';
import {Form} from '../../shared/models/form';
import {BaseElement, SelectOption} from '../../shared/models/BaseElement';
import {getCheckbox, getInputText, getLink, getSelect, getTextArea} from '../utility/form-generator-functions';

@Injectable()
export class MultipleRecordFormService implements FormGenerator {
  private _rows: number;
  get rows(): number {
    return this._rows;
  }

  set rows(value: number) {
    this._rows = value;
  }
  generateTemplate(form: Form) {
    this.rows = 10;
   return '<form novalidate #form="ngForm" (ngSubmit)="submit(form)">' + this.getTableForDesktop(form.attributes.form_elements) +
     ' <br> <button mat-raised-button color="primary" type="submit"' +
     '          class="submit-button text-floral-white"' +
     '          [disabled]="form.invalid || form.pristine">' +
     '    <mat-icon>save</mat-icon>Save' +
     '  </button>' +
     '</form>';
  }
  getTableForDesktop(elements: BaseElement[]) {
    return '<table class="table table-responsive table-bordered">' +
      this.getTableHeader(elements) +
      this.getTableBody(elements) +
      '</table>';
  }
  getTableHeader(elements) {
    let headers = '';
    for (let i = 0; i < elements.length; i++) {
      headers += '<th>' + elements[i].placeholder + '</th>';
    }
    return '<thead>' +
      '<tr>' +
      headers +
      '</tr>' +
      '</thead>';
  }
  getTableBody(elements: BaseElement[]) {
    let body = '<tbody>';
    for (let j = 0; j < this.rows; j++) {
      let row = '<tr >';
      for (let i = 0; i < elements.length; i++) {
        row += '<td style="max-height: 65px;">' + this.getInputElement(elements[i], i) + '</td>';
      }
      row += '</tr>';
      body += row;
    }
    body += '</tbody>';
    return body;
  }
  getInputElement(element: BaseElement, i: number) {
    if (element.type === 'text_input') {
      return this.getInputText((element.type + new Date().getTime() + Math.random() + Math.random()).toString(),
        element.placeholder, element.required, element.validation);
    } else if (element.type === 'text_area') {
      return this.getTextArea((element.type + new Date().getTime() + Math.random() + Math.random()),
        element.placeholder, element.required);
    } else if (element.type === 'check_box') {
      return this.getCheckbox((element.type + new Date().getTime() + Math.random() + Math.random()),
        element.placeholder, element.required);
    } else if (element.type === 'radio_button') {
      return this.getRadioButton((element.type + new Date().getTime() + Math.random() + Math.random()),
        element.placeholder, element.options, element.required);
    } else if (element.type === 'drop_down') {
      return this.getSelect((element.type + new Date().getTime() + Math.random() + Math.random()),
        element.placeholder, element.options, element.required);
    } else if (element.type === 'date_range') {
      return this.getDate((element.type + new Date().getTime() + i),
        element.placeholder, element.required, i);
    } else if (element.type === 'insert_link') {
      return this.getLink((element.type + new Date().getTime() + Math.random() + Math.random()),
        element.placeholder, element.required);
    }
  }
  getCheckbox(name: string, placeholder: string, required: boolean) {
    return '<mat-checkbox name="' + name + '" color="primary" [required]="' + required + '"></mat-checkbox>';
  }

  getDate(name: string, placeholder: string, required: boolean, i) {
    return     ' <mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
      '            <input name="' + name + '" ngModel matInput type="date">' +
      '          </mat-form-field>';
  }

  getFile(required: boolean) {
  }

  getInputText(name: string, placeholder: string, required: boolean, validation: string) {
    const type = validation === 'none' ? 'text' : validation;
    return     '<mat-form-field style="width: 100% !important; padding-bottom: 0; max-height: 45px;">' +
      '<input type="' + type + '" name="' + name + '" ngModel matInput [required]="' + required + '" />' +
      '</mat-form-field>';
  }

  getLink(name: string, placeholder: string, required: boolean) {
    return     '<mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
      '<input type="url" name="' + name + '" matInput ngModel  [required]="' + required + '" />' +
      '</mat-form-field>';
  }

  getLocation(name: string, placeholder: string, required: boolean) {
  }

  getRadioButton(name: string, placeholder: string, options: SelectOption[], required: boolean) {
    let radioButtons = '';
    for (let i = 0; i < options.length; i++) {
      radioButtons += '<mat-radio-button  value="' + options[i].value + '" color="primary"' +
        ' style="margin-right: 16px;">' + options[i].label + '</mat-radio-button>';
    }
    return '<mat-radio-group name="' + name + '" ngModel [required]="' + required + '">' +
      radioButtons +
      '</mat-radio-group>';
  }

  getSelect(name: string, placeholder: string, options: SelectOption[], required: boolean) {
    let option = '';
    for (let i = 0; i < options.length; i++) {
      option += '<mat-option value="' + options[i].value + '">' + options[i].label + '</mat-option>';
    }
    return     '<mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
      '<mat-select name="' + name + '" ngModel  [required]="' + required + '">' +
      option +
      '</mat-select>' +
      '</mat-form-field>';
  }

  getTextArea(name: string, placeholder: string, required: boolean) {
    return     '<mat-form-field style="width: 100%;">' +
      '<textarea matInput name="' + name + '"ngModel  rows="4" [required]="' + required + '"></textarea>' +
      '</mat-form-field>';
  }
}
