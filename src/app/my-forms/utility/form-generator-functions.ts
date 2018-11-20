import {SelectOption} from '../../shared/models/BaseElement';

export function getCheckbox(name: string, placeholder: string, required: boolean) {
  return '<mat-checkbox name="' + name + '" color="primary" [required]="' + required + '">' + placeholder + '</mat-checkbox>';
}

export function getDate(name: string, placeholder: string, required: boolean) {
  return     ' <mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
    '            <input name="' + name + '" ngModel matInput [matDatepicker]="id" placeholder="' + placeholder + '">' +
    '            <mat-datepicker-toggle matSuffix [for]="id"></mat-datepicker-toggle>' +
    '            <mat-datepicker #id></mat-datepicker>' +
    '          </mat-form-field>';
}

export function getFile(required: boolean) {
}

export function getInputText(name: string, placeholder: string, required: boolean, validation: string) {
  const type = validation === 'none' ? 'text' : validation;
  return     '<mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
    '<input type="' + type + '" name="' + name + '" ngModel matInput placeholder="' + placeholder + '" [required]="' + required + '" />' +
    '</mat-form-field>';
}

export function getLink(name: string, placeholder: string, required: boolean) {
  return     '<mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
    '<input type="url" name="' + name + '" matInput ngModel placeholder="' + placeholder + '" [required]="' + required + '" />' +
    '</mat-form-field>';
}

export function getLocation(name: string, placeholder: string, required: boolean) {
}

export function getRadioButton(name: string, placeholder: string, options: SelectOption[], required: boolean) {
  let radioButtons = '';
  for (let i = 0; i < options.length; i++) {
    radioButtons += '<mat-radio-button  value="' + options[i].value + '" color="primary"' +
      ' style="margin-bottom: 16px; margin-right: 16px;">' + options[i].label + '</mat-radio-button>';
  }
  return  '<p class="radio_placeholder">' + placeholder + '</p>' +
    '<mat-radio-group name="' + name + '" ngModel [required]="' + required + '">' +
    radioButtons +
    '</mat-radio-group>';
}

export function getSelect(name: string, placeholder: string, options: SelectOption[], required: boolean) {
  let option = '';
  for (let i = 0; i < options.length; i++) {
    option += '<mat-option value="' + options[i].value + '">' + options[i].label + '</mat-option>';
  }
  return     '<mat-form-field style="width: 100% !important; padding-bottom: 0;">' +
    '<mat-select name="' + name + '" ngModel placeholder="' + placeholder + '" [required]="' + required + '">' +
    option +
    '</mat-select>' +
    '</mat-form-field>';
}

export function  getTextArea(name: string, placeholder: string, required: boolean) {
  return     '<mat-form-field style="width: 100%;">' +
    '<textarea matInput name="' + name + '"ngModel placeholder="' + placeholder + '" rows="4" [required]="' + required + '"></textarea>' +
    '</mat-form-field>';
}
