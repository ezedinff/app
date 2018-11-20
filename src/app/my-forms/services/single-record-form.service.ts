import {Injectable} from '@angular/core';
import {Form} from '../../shared/models/form';
import {FormGenerator} from '../interfaces/FormGenerator';
import {getCheckbox, getDate, getInputText, getLink, getRadioButton, getSelect, getTextArea} from '../utility/form-generator-functions';

@Injectable()
export class SingleRecordFormService implements FormGenerator {
  generateTemplate(form: Form) {
    let template = '<form novalidate #form="ngForm" (ngSubmit)="submit(form)">';
    for (let i = 0; i < form.attributes.form_elements.length; i++) {
      const element = form.attributes.form_elements[i];
      if (element.type === 'text_input') {
        template += getInputText((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.required, element.validation);
      } else if (element.type === 'text_area') {
        template += getTextArea((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.required);
      } else if (element.type === 'check_box') {
        template += getCheckbox((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.required);
      } else if (element.type === 'radio_button') {
        template += getRadioButton((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.options, element.required);
      } else if (element.type === 'drop_down') {
        template += getSelect((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.options, element.required);
      } else if (element.type === 'date_range') {
        template += getDate((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.required);
      } else if (element.type === 'insert_link') {
        template += getLink((new Date().getTime() + Math.random()).toString(),
          element.placeholder, element.required);
      }
    }
    template += ' <br> <button mat-raised-button color="primary" type="submit"' +
      '          class="submit-button text-floral-white"' +
      '          [disabled]="form.invalid || form.pristine">' +
      '    <mat-icon>save</mat-icon>Save' +
      '  </button>' +
      '</form>';
    return template;
  }
}
